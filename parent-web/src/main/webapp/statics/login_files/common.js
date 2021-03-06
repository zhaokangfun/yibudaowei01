var _mob = /^1\d{10}$/;
/*var _email = /^\s*[0-9A-Za-z][_.0-9A-Za-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}\.){1,4}[a-z]{2,4}\s*$/;*/
var _email = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;

/**
 * 判断是否是手机号
 * 
 * @param mobile
 * @returns
 */
function isMobile(mobile) {
	return _mob.test(mobile);
}

/**
 * 判断是否是邮箱
 * 
 * @param email
 * @returns
 */
function isEmail(email) {
	return _email.test(email);
}

/**
 * 判断是否为空
 * 
 * @param str
 * @returns {Boolean}
 */
function isNull(str) {
	if (str == undefined || str == null || $.trim(str) == '') {
		return true;
	}
	return false;
}

/**
 * 判断是否为数字
 * 
 * @param num
 * @returns {Boolean}
 */
function isNumber(num) {
	if (num == null || num == "") {
		return false;
	} else {
		var reg = new RegExp("^[0-9]*$");
		if (!reg.test(num)) {
			return false;
		} else {
			return true;
		}
	}
}

/**
 * 同步ajax请求
 * 
 * @param url
 * @returns {String}
 */
function syncAjaxRequest(url) {
	var result = "error";
	$.ajax({
		url : url,
		type : 'post',
		dateType : 'json',
		async : false,
		cache : false,
		success : function(data) {
			result = data;
		},
		error : function() {
			result = "busy";
		}
	});

	return result;
}

/**
 * 同步ajax请求
 * 
 * @param url
 * @returns {String}
 */
function ajaxRequestByData(url, reqData) {
	var result = "error";
	$.ajax({
		url : url,
		type : 'post',
		dateType : 'json',
		async : false,
		cache : false,
		data : reqData,
		success : function(data) {
			result = data;
		},
		error : function() {
			result = "busy";
		}
	});
	return result;
}

/**
 * 用户密码有效性检查，6至16位的数字与字母
 * 
 * @param password
 * @returns {Boolean}
 */
function checkPassword(password) {
	if (/\d/.test(password) && /[a-zA-Z]/.test(password)
			&& password.length >= 8 && password.length <= 16) {
		return true;
	}
	return false;
}