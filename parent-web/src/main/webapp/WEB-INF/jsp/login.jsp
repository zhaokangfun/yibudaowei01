<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% String path=request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<%@ taglib uri="http://www.springframework.org/tags/form" prefix="fm" %>    
<!DOCTYPE html>
<html>
	<head>
	<base href="<%=basePath%>">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>医步到位-用户登录</title>
	<link rel="stylesheet" type="text/css" media="all" href="login_files/login-sz.css">
	
	<!-- 云诊所登录页面重新修改为统一样式，不再根据域名区分 -->
	<script type="text/javascript" src="login_files/jquery-1.8.3.js"></script>
</head>
<body style="overflow:auto">
<script type="text/javascript">
// 记住我的cookie名称
wanjiaUserName="wanjia_passport_user_name_B_SZ";
wanjiaPassword="wanjia_passport_password_B_SZ";
</script>

<!-- 密码过期或者被重新初始化 -->
<div class="pwd-reset-dialog-bg"></div>
<div class="pwd-reset-dialog">
	<div class="pwd-form-list"><div class="pwd-reset-error-msg"></div></div>
	<div class="pwd-form-list">
		<input id="newPassword" maxlength="16" placeholder="请输入新密码" type="password">
	</div>
	<div class="pwd-form-list">
		<input id="newPasswordVilidate" maxlength="16" placeholder="请再次输入新密码" type="password">
	</div>
	<div class="pwd-form-list">
		<input id="newPasswordPicCheck" class="pwd-form-list-msg-code" placeholder="验证码" maxlength="6" type="text">
		<input id="newPasswordPicSessionKey" type="hidden">
		<img id="newPasswordRandomImage" class="newPasswordYzm">
	</div>
	<div class="pwd-form-list">
		<a href="javascript:void(0);" onclick="buttonCollect('casSZ-pwd-reset');" id="pwdResetBtn" class="pwd-reset-btn">重置密码</a>
	</div>
</div>

<!-- 页面主体 start -->
<div class="page">
	<div class="logo-wrap">
	   <h1 class="logo"><em></em></h1>
	</div>
	<div class="login-main">
		<div class="login-content" style="overflow:hidden">
			<div class="login-win">		
			    <form action="/login" method="post" id="loginForm" autocomplete="off">
					<input id="targetType" name="targetType" value="wanjiaB_SZ" type="hidden"> 
					<input name="lt" value="LT-78153-ScR7eAyjXPrLuNUyZ06Iy2aqDRNMPK" type="hidden"> 
					<input name="execution" value="e4s1" type="hidden"> 
					<input id="fb" name="fb" value="" type="hidden">
					<input name="_eventId" value="submit" type="hidden">
					
					<input id="picSessionKey" name="picSessionKey" value="1523148806247" type="hidden">
					<input name="username" type="hidden">
					<input name="password" type="hidden">
			    	<div class="tab js_exchange_login_meth" id="js_typechange_tips"></div>
		           	<div class="tab-page">
		               <div class="code-type js_login_main js_login_with_pwd">
		                   <div class="choice">
		                       <span class="code-choice active" name="css_normal_login">密码登录</span>
		                       <i class="divide">|</i>
		                       <span class="dong-choice" name="css_other_login">动态密码登录</span>
		                       <p class="error-tip"></p>
		                   </div>
		                   <div class="codes-login login-way" data-logintype="1" data-is-curr="1" style="display: block;">
		                       <div class="name-box">
		                           <!-- <span class="touxiang"></span> -->
		                           <input id="username" class="name" placeholder="用户名/手机号" autocomplete="off" tabindex="1" maxlength="64" style="width: 264px" type="text">
		                       </div>
		                       <div class="code-box">
		                           <!-- <span class="code"></span> -->
		                           <input class="password" placeholder="账户密码" autocomplete="off" tabindex="2" maxlength="16" style="width: 264px" onkeypress="capsLock(event,this)" id="password" type="password">
		                       </div>
		                       <div id="pickCheckEl" class="verify-code" style="display: none">
		                           <span class="verify-img"></span>
		                           <input class="verify-input" placeholder="验证码" id="picCheck" name="picCheck" autocomplete="off" tabindex="3" maxlength="6" type="text">
		                           <!--验证码图片存放位置-->
		                           <span class="get-verifycode"><img id="randomImage" src="/verification?type=6&amp;sessionKey=1523148806247&amp;expaireTime=180"></span>
		                       </div>
		                       <div class="remember" style="height: 19px;">
		                           <div class="checkbox" style="float: left"><span class="remember-check js_rembpws"></span><span>记住用户名</span></div>
		                           <div class="forget" style="float: right"><a href="https://passport.pinganwj.com/forgotPassword?service=https://gp.pinganwj.com/" onclick="buttonCollect('casB-login-register')" target="_blank">忘记密码</a></div>                           
		                       </div>
		                       <p class="tip">温馨提示：医生账号第一次登录，通过动态密码登录或者忘记密码链接来设置登录密码</p>
		                   </div>
		                   <div class="dynamic-codes-login login-way" data-logintype="2" data-is-curr="0" style="display: none;">
		                       <div class="phone-box">
		                           <span class="touxiang"></span>
		                           <input id="userMobile" class="name" autocomplete="off" tabindex="1" placeholder="手机号" maxlength="11" type="text">
		                       </div>
		                       <div class="verify-container">
		                           <div class="verify-box">
		                               <span class="code"></span>
		                               <input class="verify-password" id="userMobileCode" autocomplete="off" tabindex="2" placeholder="短信验证码" maxlength="6" type="text">
		                               <span class="get-code" id="send-code">获取验证码</span>
		                           </div>
		                       </div>                       
		                   </div>
		                   
		                   <a href="javascript:void(0);" class="login-btn" onclick="dologin()"  name="submitLogin" tabindex="4" style="display: block; text-decoration: none">登录</a>
		               	   <div class="registerNo"><div class="clear"><i></i><span>还没有云诊所？</span><a href="#" class="registerJump" title="注册" rel="sidebar">立即注册</a></div></div>               		
		               	   <div class="serviceNo"><div class="clear"><i></i><span>服务热线：</span><em>400-1028-120&nbsp;（09:00-18:00）</em></div></div>               		
		               </div>
		               <div class="erweima-type js_login_with_scan" data-logintype="3" data-is-curr="0">
		                   <div>
		                   		<div class="erweima" style="left: 117px">
		                   			<img id="qrcodeImg" style="height: 180px; width: 180px;">
		                   			
		                   			<div id="qrCodeExpiredDiv" class="css_msg_err" style="display: none">
										<h6>二维码已失效</h6>
										<a id="qrCodeExpiredBtn" href="javascript:;" class="css_qrcode_refresh">请点击刷新</a>
									</div>
									<div id="loginPageExpiredDiv" class="css_msg_err" style="display: none">
										<h6>页面已失效</h6>
										<a id="loginPageExpiredBtn" href="javascript:;" class="css_qrcode_refresh">请点击刷新</a>
									</div>
		                   		</div>                   		
		                   		<div class="phone" style="right: -168px;"></div>
		                   	</div>                   
		               </div>
		               <p class="explain">打开<a href="https://www.pinganwj.com/appDownload" style="text-decoration: none" target="_blank" class="version">万家医疗诊所版APP</a>扫一扫登录</p>
		           </div>
				</form>
				<a href="#" class="collect" title="万家云诊所" rel="sidebar">收藏到本地</a>
			</div>
		</div>
	</div>
	<div class="page-bottom">版权所有:&nbsp;洛阳源码科技有限责任公司&nbsp;&nbsp;粤ICP备16081915</div>
	<input id="recordNum" value="1" type="hidden">
	<input id="hoverNum" value="0" type="hidden">
	<input id="checkedNum" value="0" type="hidden">	
</div>

<!-- 页面主体 end -->
	<script type="text/javascript" src="login_files/jquery.min.js"></script>
	<script type="text/javascript" src="login_files/jquery-1.8.3.js"></script>
	<script type="text/javascript">
		function checkname(){
			var username=$("#username").val();
			if($.trim(username)==""||username==null){
				$("p[class='error-tip']").html("用户名不能为空！");
				return false;
			}else{
				return true;
			}
		};
		function checkpassword(){
			var password=$("#password").val();
			if($.trim(password)==""||password==null){
				$("p[class='error-tip']").html("密码不能为空！");
				return false;
			}else{
				return true;
			}
		};
		function dologin(){
			window.location='banci/index.html';
		};	
	</script>

</body>
</html>
