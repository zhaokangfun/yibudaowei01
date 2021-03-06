var config_cache = Class.create({
	localStorage : (top == undefined) ? window.localStorage : top.localStorage,
	getCache : function(a) {
		return JSON.parse(this.localStorage.getItem(a))
	},
	getJsonStrValue : function(a, b) {
		var c = JSON.parse(this.localStorage.getItem(a));
		if (c != undefined) {
			return c[b] || ""
		}
		return ""
	},
	setCache : function(a, b) {
		this.localStorage.setItem(a, JSON.stringify(b))
	},
	removeCache : function(a) {
		this.localStorage.removeItem(a)
	},
	clearCache : function() {
		this.localStorage.clear()
	},
	checkCache : function(a) {
		return config_cache.getCache(a) != null ? true : false
	},
	isPafcClinic : function() {
		var a = config_cache.getCache("medical_user_data");
		var b = a.isWanjia;
		return b != null && b == 2 ? true : false
	}
});
function isNeedReturnDrugApply() {
	var a = config_cache.getCache("medical_user_data");
	var b = a.clinicParams;
	for ( var c in b) {
		if (b[c].parameterCode == "3010") {
			return b[c].parameterValue == "1"
		}
	}
	return false
}
function isSchedulingAccording2Doctor() {
	var a = config_cache.getCache("medical_user_data");
	var b = a.clinicParams;
	for ( var c in b) {
		if (b[c].parameterCode == "2007") {
			return b[c].parameterValue == "2"
		}
	}
	return false
}
function existClinicTag(c) {
	var a = config_cache.getCache("medical_user_data")["clinic"]["tags"];
	for ( var b in a) {
		if (a[b].tagCode == c) {
			return true
		}
	}
	return false
}
function getCurrentUserName() {
	var a = config_cache.getCache("medical_user_data")["userName"];
	if (a) {
		return a
	} else {
		return ""
	}
}
var cacheUtils = {
	isChainClinic : function() {
		var a = config_cache.getCache("medical_user_data");
		var b = a.clinic.clinicChainType;
		return a.clinic
				&& (a.clinic.clinicChainType == 0 || a.clinic.clinicChainType == 1)
	}
};