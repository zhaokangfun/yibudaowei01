;
// 上次打开页面时间
var globalLastSessionTime = (new Date()).getTime();
// global的session超时时间（15分钟）
var globalSessionTimeout = 15 * 60 * 1000;
var qrLoginUUID = null, qrAutoLoginInterval = -1, qrCheckInterval = 500;
// 登录按钮是否相应点击事件
var loginBtnIsEnable = true;
var pwdRestFlag = false;
$(document).ready(function() {
	var loginType = $("[data-is-curr='1']").attr("data-loginType");
	if(loginType == '3'){
		// 刷新二维码, 开始自动登录
		refreshQrCode();
	} else if(loginType == '1'){
		// 刷新图形验证码, 密码登录
		refreshRandomImage();
	}
	
	// 是否扫码登录切换
	$(".js_exchange_login_meth").click(function() {
		$way.attr("data-is-curr", 0);
		var $that = $(this);
		
		if ($(this).hasClass("login_with_scan")) {
			// 停止二维码登录
			stopQrAutoLogin();			
			
			$(".js_login_with_scan").fadeOut(0, function() {
				$(".js_login_with_pwd").fadeIn(0, function(){
					$that.removeClass("login_with_scan");
					$that.find("i").html("扫码登录");
				});
			});
			
			// 设置登录方式为密码登录
			$(".js_login_with_scan").attr("data-is-curr", 0);
			$way.eq(0).attr("data-is-curr", 1);
			
			// 刷新图形验证码
			refreshRandomImage();
		} else {
			$(".js_login_with_pwd").fadeOut(0, function() {
				$(".js_login_with_scan").fadeIn(0, function(){
					$that.addClass("login_with_scan");
					$that.find("i").html("密码登录");
				});
			});
			
			// 设置登录方式为扫描登录
			$(".js_login_with_scan").attr("data-is-curr", 1);
			
			// 刷新二维码
			refreshQrCode();
		}
	});

	// 登录tab切换
	var $log = $(".js_login_main");
	var $way = $log.find(".login-way");
	var $li = $log.find(".way-tab li");
	$li.on("click", function() {
		var $this = $(this);
		$this.addClass("tab-current").siblings("li").removeClass("tab-current");
		var index = $this.index();
		$way.hide();
		$way.eq(index).show();
		
		$way.attr("data-is-curr", 0);
		$way.eq(index).attr("data-is-curr", 1);
	});

	// 初始化验证码
	refreshRandomImage();
	
	// 提交按钮
	$("a[name='submitLogin']").click(function() {
		startLogin();
	});
	
	// 点击刷新图形验证码
	$("#randomImage").click(function() {
		refreshRandomImage();
	});
	
	// 点击刷新图形验证码
	$("#newPasswordRandomImage").click(function() {
		refreshNewPasswordRandomImage();
	});	
	
	// 获取验证码
	$("#send-code").click(function(){
		getMobileCode($(this));
	});
	
	// 刷新二维码
	$("#qrCodeExpiredBtn").click(function() {
		refreshQrCode();
	});
	
	// 刷新页面
	$("#loginPageExpiredBtn").click(function() {
		window.location.reload();
	});
	
	// 重置密码
	$("#pwdResetBtn").click(function() {
		if(autoLoginTimeIntervalId == -1){
			resetPwd();
		}
	});
	
	// 记住我初始化
	rememberMeInit();
	
	// placeholder IE兼容问题
	if (isIe8) {
		setTimeout(function() {
			placeholderIe8();
		}, 200);
	}
	
	// 是否显示图片验证码
	if(!isNull(picCheckIsShow) && picCheckIsShow == 'yes'){
		$("#pickCheckEl").show();
	}
});

// 回车登录
$(document).keydown(function(event) {
	if (event.keyCode == 13) {
		if(pwdResetDialogOpened){
			if(autoLoginTimeIntervalId == -1){
				resetPwd();
			}
		} else {
			startLogin();
		}
	}
});

// 登录
function startLogin(){
	if(loginBtnIsEnable){
		loginBtnIsEnable = false;
		var loginType = $("[data-is-curr='1']").attr("data-loginType");	
		if(loginType == 1 && validateLoginNameEmpty() && validateRandomPic() && validatePassword()){
			// 用户密码登录
			var username = $("#username").val();
			$("input[name='username']").val(username);
			var password = $('input.password').val() || $('#password').val();
			$("input[name='password']").val(password);
			
			rememberLoginInfo();
			$("#fb").val(fb);
			$("#loginForm").submit();
			return;
		} else {
			loginBtnIsEnable = true;
		}
		
		if(loginType == 2 && validateMobileCode()){
			// 动态码登录
			var username = $("#userMobile").val();
			$("input[name='username']").val(username);
			var userMobileCode = $("#userMobileCode");
			var userMobileCodeVal = userMobileCode[0].value;
			$("input[name='password']").val(userMobileCodeVal);
			$("#fb").val(fb);
			$("#loginForm").submit();
			return;
		} else {
			loginBtnIsEnable = true;
		}
		
		if(loginType == 3 && validateQrCode()){
			// 停止自动登录检查
			stopQrAutoLogin();
			
			//二维码登录
			$("input[name='username']").val(qrLoginUUID);
			$("input[name='password']").val(qrLoginUUID);
			$("#fb").val(fb);
			$("#loginForm").submit();
			return;
		} else {
			loginBtnIsEnable = true;
		}
	}
}

// 图形验证码验证
function validateRandomPic() {
	// 是否需要输入图像验证码
	if(!isNull(picValidate) && picValidate == 'no'){
		// 不是需要图像验证码，直接返回true
		return true;
	}
	
	// 首次输入登录密码，图形验证码码未显示，无需图片验证
	if(isNull(picCheckIsShow) || picCheckIsShow != 'yes'){
		return true;
	}
	
	// 密码重置后登录，不再进行验证码校验
	if(pwdRestFlag){
		return true;
	}
	
	// 判断是否为用户密码登录
	var loginType = $("[data-is-curr='1']").attr("data-loginType");	
	if (loginType != 1) {
		// 不是用户密码登录，直接返回true
		return true;
	} else {
		var picVal = $("#picCheck").val();
		if (picVal.length == 0 || /^(请输入右侧验证码)/.test(picVal)) {
			displayErrorMsg("<em></em>请输入图形验证码！");
			return false;
		}

		if (picVal.length != 6) {
			displayErrorMsg("<em></em>请输入正确的图形验证码！");			
			return false;
		}

		var picSessionKey = $("#picSessionKey").val();
		var picCheckUrl = loginValidatePath + "?act=checkRandomImage&picCheck=" + picVal + "&picSessionKey=" + picSessionKey;
		var picCheckResult = syncAjaxRequest(picCheckUrl);
		if (picCheckResult != "success") {
			if(picCheckResult == 'timeOut'){
				displayErrorMsg("<em></em>页面信息已失效,请重新刷新页面");
			} else if(picCheckResult == 'busy'){
				displayErrorMsg("<em></em>系统繁忙，请稍后再试");
			} else {
				displayErrorMsg("<em></em>" + picCheckResult);
			}			
			refreshRandomImage();
			return false;
		}

		return true;
	}
}


function validateLoginNameEmpty(){
	// 判断是否为用户密码登录
	var loginType = $("[data-is-curr='1']").attr("data-loginType");	
	if (loginType != 1) {
		// 不是用户密码登录，直接返回true
		return true;
	} else {
		// 用户名、密码登录
		var usernameVal = $("#username").val();
		if(usernameVal.length == 0){
			displayErrorMsg("<em></em>请输入登录用户名或手机号");
			return false;
		}
		
		// 用户名密码登录
		var passwordVal = $('input.password').val() || $('#password').val();
		if(passwordVal.length == 0){
			displayErrorMsg("<em></em>请输入登录密码");
			return false;
		}
	}
	return true;
}

// 登录前-用户密码检查
function validatePassword() {
	// 判断是否为用户密码登录
	var loginType = $("[data-is-curr='1']").attr("data-loginType");	
	if (loginType != 1) {
		// 不是用户密码登录，直接返回true
		return true;
	} else {
		// 用户名、密码登录
		var usernameVal = $("#username").val();
		if(usernameVal.length == 0){
			displayErrorMsg("<em></em>请输入登录用户名或手机号");
			return false;
		}
		
		// 用户名密码登录
		var passwordVal = $('input.password').val() || $('#password').val();
		if(passwordVal.length == 0){
			displayErrorMsg("<em></em>请输入登录密码");
			return false;
		}
		
		// 用户名、密码登录有效性验证
		var username = $("#username").val();		
		var password = $('input.password').val() || $('#password').val();
		var picVal = $("#picCheck").val();
		var picSessionKey = $("#picSessionKey").val();
		var loginCheckUrl = loginValidatePath + "?act=checkPassword";
		var reqData = {
			sessionId : jsSessionId,
			mobileNum : username,
			password : password,
			picCheck : picVal,
			picSessionKey : picSessionKey,
			fb : fb,
			targetType : targetType
		};		
		var loginCheckResult = ajaxRequestByData(loginCheckUrl, reqData);
		var resultInfo = loginCheckResult.split(",");		
		if (resultInfo[0] == "success") {
			// 密码校验成功
			return true;
		} else if (resultInfo[0] == "timeOut") {
			displayErrorMsg("<em></em>页面信息已失效,请重新刷新页面");
			return false;
		} else if (resultInfo[0] == "userUnExist") {
			displayErrorMsg("<em></em>该用户名尚未注册");
			$("#pickCheckEl").show();
			// 显示验证码图片
			refreshRandomImage();			
			picCheckIsShow = 'yes';
			return false;
		} else if (resultInfo[0] == "authError") {
			if(resultInfo.length == 1){
				displayErrorMsg("<em></em>用户名或密码错误");
			} else {
				displayErrorMsg("<em></em>用户名或密码错误,您还能尝试" + resultInfo[1] + "次");
			}
			$("#pickCheckEl").show();
			// 显示验证码图片
			refreshRandomImage();			
			picCheckIsShow = 'yes';
			return false;
		} else if (resultInfo[0] == "userInactive") {
			displayErrorMsg("<em></em>该用户尚未激活");
			return false;
		} else if (resultInfo[0] == "needActiveByMail") {
			// 用户需要通过邮箱激活
			window.location.href="email?q=" + resultInfo[1];
		} else if (resultInfo[0] == "userDisable") {
			displayErrorMsg("<em></em>账户被禁用，请与客服人员联系！");
			return false;
		} else if (resultInfo[0] == "accountLocked") {
			displayErrorMsg("<em></em>账户已锁定，请2小时后重试");
			return false;
		} else if (resultInfo[0] == "accountLockedForever") {
			displayErrorMsg("<em></em>账户被永久锁定，请与客服人员联系");
			return false;
		} else if (resultInfo[0] == "pwdUnExist") {
			displayErrorMsg("<em></em>该用户名暂未设置密码，请使用动态码登录");
			return false;
		} else if (resultInfo[0] == "userExperied") {
			displayErrorMsg("<em></em>账户已失效");
			return false;
		} else if (resultInfo[0] == "pwderror") {
			displayErrorMsg("<em></em>密码错误，您还能输入" + resultInfo[1] + "次");
			$("#pickCheckEl").show();
			// 显示验证码图片
			refreshRandomImage();			
			picCheckIsShow = 'yes';
			return false;
		} else if (resultInfo[0] == "pwdExperied" || resultInfo[0] == "initFromDB" || resultInfo[0] == "initFromAdmin" || resultInfo[0] == "pwdTooSimple") {
			displayResetPwdDialog(resultInfo[0]);
			return false;
		} else if (resultInfo[0] == "aresError") {
			displayErrorMsg("<em></em>终端异常，拒绝登录");
			return false;
		} else {
			displayErrorMsg("<em></em>系统繁忙，请稍后再试！");
			$("#pickCheckEl").show();
			// 显示验证码图片
			refreshRandomImage();			
			picCheckIsShow = 'yes';
			return false;
		}
	}
}

// 登录前-用户动态码检查
function validateMobileCode() {
	// 判断是否为用户动态码登录
	var loginType = $("[data-is-curr='1']").attr("data-loginType");	
	if (loginType != 2) {
		// 不是用户动态码登录，直接返回true
		return true;
	} else {
		// 手机号、动态码登录
		var userMobile = $("#userMobile").val();
		if(userMobile.length == 0){
			displayErrorMsg("<em></em>请输入手机号");
			return false;
		}
		
		if(!isMobile(userMobile)){
			displayErrorMsg("<em></em>请输入正确的手机号");
			return false;
		}
		
		// 动态码
		var userMobileCode = $("#userMobileCode");
		if(userMobileCode.length == 0){
			displayErrorMsg("<em></em>请输入动态码");
			return false;
		}
		
		// 动态码
		var userMobileCodeVal = userMobileCode[0].value;
		if(userMobileCodeVal.length != 6 || !isNumber(userMobileCodeVal)){
			displayErrorMsg("<em></em>动态密码不正确，请重新输入");
			return false;
		}
		
		// 用户名、动态码有效性验证
		var loginCheckUrl = loginValidatePath + "?act=checkSMSValidateCode";
		var reqData = {
			mobileNum : userMobile,
			sessionId : jsSessionId,
			mobileCheckNum : userMobileCodeVal,
			fb : fb,
			targetType : targetType
		};
		var loginCheckResult = ajaxRequestByData(loginCheckUrl, reqData);
		var resultInfo = loginCheckResult.split(",");		
		if (resultInfo[0] == "success") {
			// 验证码校验成功
			return true;
		} else if (resultInfo[0] == "timeOut") {
			displayErrorMsg("<em></em>页面信息已失效,请重新刷新页面!");
			return false;
		} else if (resultInfo[0] == "smsIdNotFound") {
			displayErrorMsg("<em></em>请先获取短信验证码!");
			return false;
		} else if (resultInfo[0] == "smsCodeTimeOut") {
			displayErrorMsg("<em></em>验证码已失效，请重新获取!");
			return false;
		} else if (resultInfo[0] == "mobileError") {
			displayErrorMsg("<em></em>请输入获取验证码的手机号!");
			return false;
		} else if (resultInfo[0] == "authError") {
			if(resultInfo.length == 1){
				displayErrorMsg("<em></em>手机号或者动态码错误");
			} else{
				displayErrorMsg("<em></em>动态码错误，您还能输入" + resultInfo[1] + "次");
			}
			return false;
		} else if (resultInfo[0] == "userUnExist") {
			displayErrorMsg("<em></em>该手机号尚未注册");
			return false;
		} else if (resultInfo[0] == "userDisable") {
			displayErrorMsg("<em></em>账户被禁用，请与客服人员联系！");
			return false;
		} else if (resultInfo[0] == "accountLocked") {
			displayErrorMsg("<em></em>账户已锁定，请2小时后重试");
			return false;
		} else if (resultInfo[0] == "accountLockedForever") {
			displayErrMsg("账户被永久锁定，请与客服人员联系");
			return false;
		} else if (resultInfo[0] == "tryTooManyTimes") {
			displayErrMsg("<em></em>验证码已失效，请重新获取");
			return false;
		} else if (resultInfo[0] == "aresError") {
			displayErrorMsg("<em></em>终端异常，拒绝登录");
			return false;
		} else {
			displayErrorMsg("<em></em>系统繁忙，请稍后再试！");
			return false;
		}
	}
}

// 登录前-二维码检查
function validateQrCode() {
	// 判断是否为二维码登录
	var loginType = $("[data-is-curr='1']").attr("data-loginType");	
	if (loginType != 3) {
		// 不是二维码态码登录，直接返回true
		return true;
	} else {
		// 二维码登录
		var loginCheckUrl = path + "/qrcode?act=check";
		var reqData = {
			sessionId : jsSessionId,
			flag : Math.random(),
			fb : fb
		};
		var loginCheckResult = ajaxRequestByData(loginCheckUrl, reqData);
		if (loginCheckResult == "expired") {
			// 二维码已过期
			$("#qrCodeExpiredDiv").show();
			
			// 停止自动登录检查
			stopQrAutoLogin();
			return false;
		} else if(loginCheckResult == 'invalid'){
			// 非法请求，停止自动登录
			$("#qrCodeExpiredDiv").show();
			
			// 停止自动登录检查
			stopQrAutoLogin();
			return false;
		} else if(loginCheckResult == 'timeOut'){
			// 页面已失效，请重新刷新页面
			$("#loginPageExpiredDiv").show();
			
			// 停止自动登录检查
			stopQrAutoLogin();
			return false;
		} else if(loginCheckResult == 'init'){
			// 二维码初始化，不能登录
			return false;
		} else if(loginCheckResult == 'success'){
			// 检测通过, 开始登录
			return true;
		}
	}
	
	return true;
}

// 刷新二维码
function refreshQrCode(){
	// 更新二维码
	$("#qrcodeImg").attr("src", path + "/qrcode?act=login&flag=" + Math.random());
	// 获取到新的二维码图片，获取登录的UUID
	$("#qrcodeImg").load(function() {
		qrLoginUUID = syncAjaxRequest(path + "/qrcode?act=redisKey&flag=" + Math.random());
		
		$("#qrCodeExpiredDiv").hide();
		$("#qrCodeDiv").show();	
		
		// 二维码开始自动登录
		startQrAutoLogin();
	});
}

// 二维码开始自动登录
function startQrAutoLogin(){
	if(qrAutoLoginInterval == -1){
		qrAutoLoginInterval = setInterval("startLogin()", qrCheckInterval);
	}
}

// 二维码停止自动登录
function stopQrAutoLogin(){
	if(qrAutoLoginInterval != -1){
		clearInterval(qrAutoLoginInterval);
		qrAutoLoginInterval = -1;
	}
}

// 刷新页面图片验证码
function refreshRandomImage() {
	// 判断是否session超时，若超时，则需要F5刷新浏览器
	var nowTime = (new Date()).getTime();
	var pastTime = nowTime - globalLastSessionTime;
	if (pastTime > globalSessionTimeout) {
		displayErrorMsg("<em></em>页面信息已失效,请重新刷新页面！");
	} else {
		$("#picCheck").val("");
		var picSessionKey = nowTime + parseInt(Math.random() * 1000000);
		var randomImageUrl = "/verification?type=6&sessionKey=" + picSessionKey +"&expaireTime=" + picExpiredTime;
		if (typeof (isAlphaNum) != 'undefined' && isAlphaNum) {
			// 是否使用透明图片
			randomImageUrl = "/verification?type=5&sessionKey=" + picSessionKey +"&expaireTime=" + picExpiredTime;
		}

		$("#randomImage").attr("src", randomImageUrl);
		$("#picSessionKey").val(picSessionKey);
		globalLastSessionTime = nowTime;
	}
}

// 获取手机动态码
function getMobileCode($this) {
	// 手机号、动态码登录
	var userMobile = $("#userMobile").val();
	if(userMobile.length == 0){
		displayErrorMsg("<em></em>请输入手机号");
		return;
	}
	
	if(!isMobile(userMobile)){
		displayErrorMsg("<em></em>请输入正确的手机号");
		return;
	}

	// 手机验证码定时器
	if ($this.hasClass("code-sending")) {
		return;
	}

	$this.addClass("code-sending").html("获取中...");	
	$.ajax({
		url : path + loginValidatePath + "?act=sendMoblieCodeMsg&mobileNum=" + userMobile + "&sessionId=" + jsSessionId,
		type : 'post',
		timeout : 30000, //超时时间设置，单位毫秒
		dateType : 'text',
		async : true,
		cache : false,
		success : function(data) {
			if (data == "success") {
				$("#send-code").html("<span class='time-count'>" + sendSMSIntervalSecond + "s</span>后重新获取");
				countDownEnt(sendSMSIntervalSecond);				
				displaySuccessMsg("<em></em>验证码已发送到您手机，2分钟内输入有效!");
				if(typeof(isIe8) == undefined || !isIe8){
					$("#userMobileCode").attr("placeholder", "6位数字");
				}
			} else if (data == "timeOut") {
				enableSmsCodeSend($this);
				displayErrorMsg("<em></em>页面信息已失效,请重新刷新页面!");
			} else if (data == "userUnExist") {
				enableSmsCodeSend($this);
				displayErrorMsg("<em></em>该手机号码尚未注册!");
			} else if (data == "accountLockedForever") {
				enableSmsCodeSend($this);
				displayErrorMsg("<em></em>账户被永久锁定，请与客服人员联系");
			} else if (data == "accountLocked") {
				enableSmsCodeSend($this);
				displayErrorMsg("<em></em>账户已锁定，请2小时后重试");
			} else if (data == "daySendTooMuch") {
				enableSmsCodeSend($this);
				displayErrorMsg("<em></em>今日已到最大发送次数,请明日再试");
			} else if (data == "hourSendTooMuch") {
				enableSmsCodeSend($this);
				displayErrorMsg("<em></em>动态码发送频繁,请稍后再试！");
			} else if (data == "userDisable") {
				enableSmsCodeSend($this);
				displayErrorMsg("<em></em>账户被禁用，请与客服人员联系！");
			} else {
				data = data.split(",");
				enableSmsCodeSend($this);
				if(data[0] == 'needActiveByMail'){
					// 用户需要通过邮箱激活
					window.location.href="email?q=" + data[1];
				} else {
					displayErrorMsg("<em></em>验证码发送失败,请稍后再试!");
				}
			} 
		},
		error : function() {
			enableSmsCodeSend($this);
			displayErrorMsg("<em></em>系统繁忙，请稍后再试！");			
			return false;
		},
		complete : function(XMLHttpRequest, status) { //请求完成后最终执行参数
			if (status == 'timeout') {//超时	
				enableSmsCodeSend($this);
				displayErrorMsg("<em></em>验证码发送失败：发送超时");
				return false;
			}
		}
	});
	
	return true;
}

function enableSmsCodeSend($this){
	$this.removeClass("code-sending").html("点击获取");	
	if(typeof(isIe8) == undefined || !isIe8){
		$("#userMobileCode").attr("placeholder", "短信验证码");
	}	
}

var countdown = -1;
function countDownEnt(times) {
	var displayTimes = times;
	var $code = $("#send-code");
	var $warn = $(".warn-msg");
	clearInterval(countdown);
	countdown = setInterval(function() {
		displayTimes--;
		$code.html("<span class='time-count'>" + displayTimes + "s</span>后重新获取");
		$warn.css("display", "block");
		if (displayTimes === 0) {
			clearInterval(countdown);
			$code.removeClass("code-sending").html("点击获取");
			$warn.hide();
		}
	}, 1000);
}

function displayErrorMsg(msg){
	$("#errorMsg").removeClass("success");
	$("#errorMsg").addClass("error");
	
	$("#errorMsg").html(msg);
	$("#errorMsg").show();
	
	// 深圳登录页面错误提示信息
	$(".error-tip").html(msg);
	$(".error-tip").show();
}

function displaySuccessMsg(msg){
	$("#errorMsg").removeClass("error");
	$("#errorMsg").addClass("success");
	
	$("#errorMsg").html(msg);
	$("#errorMsg").show();
	
	// 深圳登录页面错误提示信息
	$(".error-tip").html(msg);
	$(".error-tip").show();
}

// 记住我功能
var wanjiaUserName="wanjia_passport_user_name";
var wanjiaPassword="wanjia_passport_password";
var base64 = new Base64();
function rememberMeInit(){
	// 判断之前是否有设置cookie，如果有，则设置【记住我】选择框
	if ($.cookie(wanjiaUserName) != undefined) {
		$("#rememberMe").attr("checked", true);
		$(".js_rembpws").addClass("selected");
	} else {
		$("#rememberMe").attr("checked", false);
		$(".js_rembpws").removeClass("selected");
	}  
 
	// 为防止chrome浏览器自动加载输入框变黄，延迟一毫秒加载
	setTimeout(function(){
		// 为password设置ID
		$("input.password").attr("id", "password");
		// 读取cookie
		var rememberMeChecked = $(".js_rembpws").hasClass("selected") || $('#rememberMe:checked').length > 0;
		if (rememberMeChecked) {
			var userName = $.cookie(wanjiaUserName);
			var password = $.cookie(wanjiaPassword);
			$('#username').val(base64.decode(userName));
			$('#password').val(base64.decode(password));
			$('input.password').val(base64.decode(password));
		}		
	}, 100);    
}

// 记住用户名密码
function rememberLoginInfo() {
	var loginType = $("[data-is-curr='1']").attr("data-loginType");
	var rememberMeChecked = $(".js_rembpws").hasClass("selected") || $('#rememberMe:checked').length > 0;	
	if (rememberMeChecked && loginType == 1) {
		// 添加用户名、密码到cookie
		var userName = $('#username').val();
		var password = $('input.password').val() || $('#password').val();
		$.cookie(wanjiaUserName, base64.encode(userName), {
			expires : 30,
			secure : true
		});
		$.cookie(wanjiaPassword, base64.encode(password), {
			expires : 30,
			secure : true
		});
	} else {
		// 清除cookie
		$.removeCookie(wanjiaUserName);
		$.removeCookie(wanjiaPassword);
	}
}

// ----------- 密码过期或者太简单，需要重置密码--------------
var pwdResetDialogOpened = false;
function displayResetPwdDialog(errorCode){	
	refreshNewPasswordRandomImage();
	if(errorCode == 'pwdExperied'){
		$(".pwd-reset-dialog div.pwd-form-list div.pwd-reset-error-msg").html("您的登录密码已过期，为了您的账户安全，请重新设置您的登录密码。");
	} else if(errorCode == 'initFromDB'){
		$(".pwd-reset-dialog div.pwd-form-list div.pwd-reset-error-msg").html("您的登录密码已过期，为了您的账户安全，请重新设置您的登录密码。");
	} else if(errorCode == 'initFromAdmin'){
		$(".pwd-reset-dialog div.pwd-form-list div.pwd-reset-error-msg").html("您的登录密码已被管理员重新初始化，为了您的账户安全，请重新设置您的登录密码。");
	} else if(errorCode == 'pwdTooSimple'){
		$(".pwd-reset-dialog div.pwd-form-list div.pwd-reset-error-msg").html("您的登录密码为常用的简单密码，为了您的账户安全，请重新设置您的登录密码。");
	}
	pwdResetDialogOpened = true;
	$(".pwd-reset-dialog").show();
	$(".pwd-reset-dialog-bg").show();	
}

function resetPwd(){
	var newPassword = $("#newPassword").val();
	if(newPassword.length == 0){
		pwdResetErrorMsg("请输入密码");
		return;
	}
	
	if(!checkPassword(newPassword)){
		pwdResetErrorMsg("密码必须为8-16位的数字和字母的组合，字母区分大小写");
		return;
	}
	
	var newPasswordVilidate = $("#newPasswordVilidate").val();
	if(newPasswordVilidate.length == 0){
		pwdResetErrorMsg("请再次输入密码");
		return;
	}
	
	if(newPassword != newPasswordVilidate){
		pwdResetErrorMsg("两次密码输入不一致，请重新输入");
		return false;
	}
	
	// 重置密码
	var oldPassword = $('input.password').val() || $('#password').val();
	var loginName = $("#username").val();
	if(loginName == newPassword){
		pwdResetErrorMsg("密码不能与用户名相同，请重新输入");
		return false;
	}	
	
	// 图片验证码
	var picCheck = $("#newPasswordPicCheck").val();
	var picSessionKey = $("#newPasswordPicSessionKey").val();
	if(picCheck == null || picCheck ==''){
		pwdResetErrorMsg("验证码不能为空，请输入验证码");
		return false;
	}
	
	$.ajax({
		url : path + "/forgotPassword?act=resetPwdByOld",
		type : 'post',
		timeout : 5000, // 超时时间设置，单位毫秒
		dateType : 'json',
		data : {
			loginName : loginName,
			newPassword : newPassword,
			newPasswordVilidate : newPasswordVilidate,
			oldPassword : oldPassword,
			picCheck : picCheck,
			picSessionKey : picSessionKey,
			fb : fb			
		},
		async : true,
		cache : false,
		success : function(response) {
			var result = null, additional = null;
			result = response.split(",")[0];
			if(response.split(",").length == 2){
				additional = response.split(",")[1];
			}
			if(result == 'success'){
				// 重置成功，自动登录
				$("#password").val(newPassword);
				$('input.password').val(newPassword);
				pwdRestFlag = true;
				pwdResetErrorMsg("密码重置成功！<span id='autoLoginTime'>" + autoLoginTime + "</span>秒后自动登录，或刷新页面后重新登录！ ", 'success');				

				// 禁用自动登录
				$("#pwdResetBtn").css("background", "#A7A3A3");
				clearInterval(autoLoginTimeIntervalId);
				autoLoginTimeIntervalId = -1;
				autoLoginTimeIntervalId = setInterval(function() {
					autoLogin();
				}, 1000);
			} else if(result == 'pwdInvalid'){
				pwdResetErrorMsg("密码必须为8-16位的数字和字母的组合，字母区分大小写！");
			} else if(result == 'pwdNotSame'){
				pwdResetErrorMsg("两次密码输入不一致，请重新输入！");
			} else if(result == 'pwdSameWithLoginName'){
				pwdResetErrorMsg("密码不能与用户名相同，请重新输入！");
			} else if(result == 'pwdTooSimple'){
				pwdResetErrorMsg("您的登录密码为常用的简单密码，请重新输入！");
			} else if(result == 'picCheckInvalid'){
				pwdResetErrorMsg("图形验证码不正确，请重新输入！");
				refreshNewPasswordRandomImage();
			} else if(result == 'userUnExist'){
				pwdResetErrorMsg("登录用户名不正确，请重新输入！");
			} else if(result == 'authError'){
				if(result.length == 1){
					pwdResetErrorMsg("用户名或密码错误");
				} else {
					pwdResetErrorMsg("用户名或密码错误,您还能尝试" + result[1] + "次");
				}
			} else if(result == 'pwdError' || result == 'pwderror'){
				pwdResetErrorMsg("用户名或密码错误");
			} else if (result == "userInactive") {
				pwdResetErrorMsg("用户尚未激活，重置密码失败");
			} else if (result == "needActiveByMail") {
				// 用户需要通过邮箱激活
				window.location.href="email?q=" + additional;
			} else if (result == "userDisable") {
				pwdResetErrorMsg("账户被禁用，请与客服人员联系！");
			} else if (result == "accountLocked") {
				pwdResetErrorMsg("账户已锁定，请2小时后重试");
			} else if (result == "accountLockedForever") {
				pwdResetErrorMsg("账户被永久锁定，请与客服人员联系");
			} else if (result == "pwdUnExist") {
				pwdResetErrorMsg("该用户名暂未设置密码，请使用动态码登录");
			} else if (result == "userExperied") {
				pwdResetErrorMsg("账户已失效，重置密码失败");
			} else if(result == 'aresError'){
				pwdResetErrorMsg("终端异常，重置密码失败！");
			} else {
				pwdResetErrorMsg("系统繁忙，请稍后再试！");
			}
		},
		error : function(response, status) {
			pwdResetErrorMsg("系统繁忙，请稍后再试！");
			return false;
		},
		complete : function(XMLHttpRequest, status) { // 请求完成后最终执行参数
			if (status == 'timeout') {// 超时
				pwdResetErrorMsg("系统繁忙，请稍后再试！");
				return false;
			}
		}
	});
}

// 重置密码成功后，自动登录时间
var autoLoginTime = 5, autoLoginTimeIntervalId = -1;
var autoLoginTimeNow = autoLoginTime;
function autoLogin(){
	autoLoginTimeNow --;
	if(autoLoginTimeNow <= 0){
		clearInterval(autoLoginTimeIntervalId);
		autoLoginTimeIntervalId = -1;
		$("#autoLoginTime").html(0);
		startLogin();
	} else {
		$("#autoLoginTime").html(autoLoginTimeNow);
	}
}

function pwdResetErrorMsg(msg, status){
	if(status == 'success'){
		$("div.pwd-reset-error-msg").css("color", "green");
		$("div.pwd-reset-error-msg").html("<em class='success'></em><div>" + msg + "</div>");
	} else {
		$("div.pwd-reset-error-msg").css("color", "red");
		$("div.pwd-reset-error-msg").html("<em></em><div>" + msg + "</div>");
	}
	
	$("div.pwd-reset-error-msg").show();
}

//刷新页面图片验证码
function refreshNewPasswordRandomImage() {
	// 判断是否session超时，若超时，则需要F5刷新浏览器
	var nowTime = (new Date()).getTime();
	var pastTime = nowTime - globalLastSessionTime;
	if (pastTime > globalSessionTimeout) {
		pwdResetErrorMsg("页面信息已失效,请重新刷新页面！");
	} else {
		var placeholder = $("#newPasswordPicCheck").attr('placeholder');
		$("#newPasswordPicCheck").val(isIe8 ? placeholder : "");
		var newPasswordPicSessionKey = nowTime + parseInt(Math.random() * 1000000);
		var randomImageUrl = "/verification?type=6&sessionKey=" + newPasswordPicSessionKey +"&expaireTime=" + picExpiredTime;

		$("#newPasswordRandomImage").attr("src", randomImageUrl);
		$("#newPasswordPicSessionKey").val(newPasswordPicSessionKey);
		globalLastSessionTime = nowTime;
	}
}

// ------------- placeholder兼容IE8 ------------ 
function placeholderIe8() {
	// text placeholder 兼容Ie8
	$("input[type='text'],input[type='password']").each(function() {
		var textField = $(this), placeholder = textField.attr('placeholder');
		if (textField.val() === "") {
			textField.val(placeholder);
		}
		
		textField.focus(function() {
			if (textField.val() === placeholder) {
				textField.val("");
			}
		});
		
		textField.blur(function() {
			if (textField.val() === "") {
				textField.val(placeholder);
			}
		});
		
		textField.closest('form').submit(function() {
			if (textField.val() === placeholder) {
				textField.val('');
			}
		});	
	});	
	
	// 密码输入框
	$("input[type='password']").each(function() {
		var pwdField = $(this), placeholder = pwdField.attr('placeholder');
		var pwdPlaceholder = $('<input type="text" value=' + placeholder + '>');
		pwdField.after(pwdPlaceholder);		
		if (pwdField.val() == '' || pwdField.val() == placeholder) {
			pwdField.hide();
			pwdPlaceholder.show();
		} else {
			pwdPlaceholder.hide();
			pwdField.show();
		}		

		pwdPlaceholder.focus(function() {
			pwdPlaceholder.hide();
			pwdField.show();
			pwdField.focus();
		});

		pwdField.blur(function() {
			if (pwdField.val() == '' || pwdField.val() == placeholder) {
				pwdPlaceholder.show();
				pwdField.hide();
			}
		});
	});
}
	// 密码大小写检验
function capsLock(e,t) {
	var valueCapsLock = e.keyCode ? e.keyCode : e.which; // 按键     
	var valueShift = e.shiftKey ? e.shiftKey
			: ((valueCapsLock == 16) ? true : false); // shift键是否按住    
	if (((valueCapsLock >= 65 && valueCapsLock <= 90) && !valueShift) // 输入了大写字母，并且shift键没有按住，说明Caps Lock打开  
			|| ((valueCapsLock >= 97 && valueCapsLock <= 122) && valueShift)) {// 输入了小写字母，并且按住 shift键<span style="font-family:Arial, Helvetica, sans-serif;">，说明</span><span style="font-family:SimSun;">Caps Lock</span><span style="font-family:Arial, Helvetica, sans-serif;">打开</span>  
		toggle(true);
	} else {
		toggle(false);
	}
};
var path = "${path}";
function toggle(flag) {
	if (flag) {
		$(".password").css({
			"background" : "url('"+path+"/resources/images/pc/login/sz/case.png') no-repeat right"
		});
	} else {
		$(".password").css({
			"background" : "none"
		});
	}
}
