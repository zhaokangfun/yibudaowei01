/**
 * 后台服务请求公用地址 正式部署可修改为对应域名
 */

var subdomain = (function() {
    var hostname = document.location.hostname;
    var result = "myclinic";
    if (hostname.indexOf("gp") > -1) {
        result = "gp";
    } else if (hostname.indexOf("tcm") > -1) {
        result = "tcm";
    } else if (hostname.indexOf("dental") > -1) {
        result = "dental";
    }
    return result;
})();
var pawj_url_data = {
    "develop": {
        "domain": "",
        "file-server": "http://fs01stg.pinganwj.com:81/",
        "file-server-normal": "http://fs01stg.pinganwj.com:81/",
        "clinic-web": "http://127.0.0.1:8080/pinganwj-clinic-web/",
        "clinic-center": "https://clinicdev.pawjzs.com:4443/",
        "clinic-server": "http://127.0.0.1:8080/pinganwj-clinic-web-server/i/",
        "mec-web": "http://127.0.0.1:8080/pinganwj-mec-web/",
        "mec-server": "http://127.0.0.1:8080/pinganwj-mec-web-server/i/",
        "ccm-web": "http://127.0.0.1:8080/pinganwj-ccm-web/",
        "ccm-server": "http://127.0.0.1:8080/pinganwj-ccm-web-server/i/",
        "hosp-web": "http://127.0.0.1:8080/pinganwj-hosp-web/",
        "hosp-server": "http://127.0.0.1:8080/pinganwj-hosp-web-server/i/",
        "referral-web": "http://127.0.0.1:8080/pinganwj-referral-web/",
        "referral-server": "http://127.0.0.1:8080/pinganwj-referral-web-server/i/",
        "cas-x": "https://passportdev.pawjzs.com:4443/login?targetType=wanjiaB_SZ&service=",
        "WXServicePath": "http://wxclinictest.pawjzs.com:81/",
        "SH-img-server": "https://imagedev.pawjzs.com:4443/",
        "pinganwj-clinicExt-web": "http://127.0.0.1:8080/pinganwj-clinicExt-web/",
        "pinganwj-clinicExt-web-server": "http://127.0.0.1:8080/pinganwj-clinicExt-web-server/i/",
        "scrmAdmin-web": "http://127.0.0.1:8080/pinganwj-scrmAdmin-web/",
        "scrmAdmin-server": "http://127.0.0.1:8080/pinganwj-scrmAdmin-web-server/i/",
        "ContextMsg_Ws_Server": "ws://127.0.0.1:8080/pinganwj-websocket-server/i/",
        "WJBox-server": "ws://127.0.0.1:8054/ws",
        "print-web": "http://127.0.0.1:8080/pinganwj-print-web/",
        "print-server": "http://127.0.0.1:8080/pinganwj-print-web-server/i/",
        "ai-web": "http://127.0.0.1:8080/pinganwj-ai-web/",
        "ai-server": "http://127.0.0.1:8080/pinganwj-ai-web-server/i/",
        "clm-web": "http://127.0.0.1:8080/pinganwj-clm-web/",
        "clm-server": "http://127.0.0.1:8080/pinganwj-clm-web-server/i/",
        "cas-sso": "https://ssodev.pawjzs.com:4443?targetType=wanjiaA&service="
    },
    "dev": {
        "domain": "pawjzs.com",
        "clinic-web": "https://myclinicdev.pawjzs.com:4443/",
        "clinic-center": "https://clinicdev.pawjzs.com:4443/",
        "clinic-server": "https://myclinicdev.pawjzs.com:4443/i/",
        "file-server": "https://fs01stg.pinganwj.com:4443/",
        "file-server-normal": "http://fs01stg.pinganwj.com:81/",
        "mec-web": "https://mecdev.pawjzs.com:4443/",
        "mec-server": "https://mecdev.pawjzs.com:4443/i/",
        "ccm-web": "https://ccmdev.pawjzs.com:4443/",
        "ccm-server": "https://ccmdev.pawjzs.com:4443/i/",
        "hosp-web": "https://hospdev.pawjzs.com:4443/",
        "hosp-server": "https://hospdev.pawjzs.com:4443/i/",
        "referral-web": "https://referraldev.pawjzs.com:4443/",
        "referral-server": "https://referraldev.pawjzs.com:4443/i/",
        "tcm-web": "https://tcmdev.pawjzs.com:4443/",
        "gp-web": "https://gpdev.pawjzs.com:4443/",
        "dental-web": "https://dentaldev.pawjzs.com:4443/",
        "cas-x": "https://passportdev.pawjzs.com:4443/login?targetType=wanjiaB_SZ&service=",
        "WXServicePath": "http://wxclinicdev.pawjzs.com:81/",
        "SH-img-server": "https://imagedev.pawjzs.com:4443/",
        "pinganwj-clinicExt-web": "https://extclinicdev.pawjzs.com:4443/",
        "pinganwj-clinicExt-web-server": "https://extclinicdev.pawjzs.com:4443/i/",
        "scrmAdmin-web": "https://scrmadmindev.pawjzs.com:4443/",
        "scrmAdmin-server": "https://scrmadmindev.pawjzs.com:4443/i/",
        "ContextMsg_Ws_Server": "wss://msgwsdev.pawjzs.com:4443/i/",
        "WJBox-server": "wss://wjbox.pawjzs.com:8054/wss",
        "print-web": "https://printdev.pawjzs.com:4443/",
        "print-server": "https://printdev.pawjzs.com:4443/i/",
        "ai-web": "https://aidev.pawjzs.com:4443/",
        "ai-server": "https://aidev.pawjzs.com:4443/i/",
        "clm-web": "https://lifecycledev.pawjzs.com:4443/",
        "clm-server": "https://lifecycledev.pawjzs.com:4443/i/",
        "cas-sso": "https://ssodev.pawjzs.com:4443?targetType=wanjiaA&service="
    },
    "test": {
        "domain": "pawjzs.com",
        "clinic-web": "https://myclinictest.pawjzs.com:4443/",
        "clinic-center": "https://clinictest.pawjzs.com:4443/",
        "clinic-server": "https://" + subdomain + "test.pawjzs.com:4443/i/", ////" + subdomain + "
        "file-server": "https://fs01stg.pinganwj.com:4443/",
        "file-server-normal": "http://fs01stg.pinganwj.com:81/",
        "mec-web": "https://mectest.pawjzs.com:4443/",
        "mec-server": "https://mectest.pawjzs.com:4443/i/",
        "ccm-web": "https://ccmtest.pawjzs.com:4443/",
        "ccm-server": "https://ccmtest.pawjzs.com:4443/i/",
        "hosp-web": "https://hosptest.pawjzs.com:4443/",
        "hosp-server": "https://hosptest.pawjzs.com:4443/i/",
        "referral-web": "https://referraltest.pawjzs.com:4443/",
        "referral-server": "https://referraltest.pawjzs.com:4443/i/",
        "tcm-web": "https://tcmtest.pawjzs.com:4443/",
        "gp-web": "https://gptest.pawjzs.com:4443/",
        "dental-web": "https://dentaltest.pawjzs.com:4443/",
        "cas-x": "https://passporttest.pawjzs.com?targetType=wanjiaB_SZ&service=",
        "WXServicePath": "http://wxclinictest.pawjzs.com:81/",
        "SH-img-server": "https://imagetest.pawjzs.com:4443/",
        "pinganwj-clinicExt-web": "https://extclinictest.pawjzs.com:4443/",
        "pinganwj-clinicExt-web-server": "https://extclinictest.pawjzs.com:4443/i/",
        "scrmAdmin-web": "https://scrmadmintest.pawjzs.com:4443/",
        "scrmAdmin-server": "https://scrmadmintest.pawjzs.com:4443/i/",
        "ContextMsg_Ws_Server": "wss://msgwstest.pawjzs.com:4443/i/",
        "WJBox-server": "wss://wjbox.pawjzs.com:8054/wss",
        "print-web": "https://printtest.pawjzs.com:4443/",
        "print-server": "https://printtest.pawjzs.com:4443/i/",
        "ai-web": "https://aitest.pawjzs.com:4443/",
        "ai-server": "https://aitest.pawjzs.com:4443/i/",
        "clm-web": "https://lifecycletest.pawjzs.com:4443/",
        "clm-server": "https://lifecycletest.pawjzs.com:4443/i/",
        "cas-sso": "https://ssotest.pawjzs.com:4443?targetType=wanjiaA&service="
    },
    "yb": {
        "domain": "pawjzs.com",
        "clinic-web": "https://myclinicyb.pawjzs.com:4443/",
        "clinic-center": "https://myclinicyb.pawjzs.com:4443/",
        "clinic-server": "https://" + subdomain + "yb.pawjzs.com:4443/i/", ////" + subdomain + "
        "file-server": "https://fs01stg.pinganwj.com:4443/",
        "file-server-normal": "http://fs01stg.pinganwj.com:81/",
        "mec-web": "https://mectest.pawjzs.com:4443/",
        "mec-server": "https://mectest.pawjzs.com:4443/i/",
        "ccm-web": "https://ccmtest.pawjzs.com:4443/",
        "ccm-server": "https://ccmtest.pawjzs.com:4443/i/",
        "hosp-web": "https://hosptest.pawjzs.com:4443/",
        "hosp-server": "https://hosptest.pawjzs.com:4443/i/",
        "referral-web": "https://referraltest.pawjzs.com:4443/",
        "referral-server": "https://referraltest.pawjzs.com:4443/i/",
        "tcm-web": "https://tcmtest.pawjzs.com:4443/",
        "gp-web": "https://gptest.pawjzs.com:4443/",
        "dental-web": "https://dentaltest.pawjzs.com:4443/",
        "cas-x": "https://passporttest.pawjzs.com?targetType=wanjiaB_SZ&service=",
        "WXServicePath": "http://wxclinictest.pawjzs.com:81/",
        "SH-img-server": "https://imagetest.pawjzs.com:4443/",
        "pinganwj-clinicExt-web": "https://myclinicextyb.pawjzs.com:4443/",
        "pinganwj-clinicExt-web-server": "https://myclinicextyb.pawjzs.com:4443/i/",
        "scrmAdmin-web": "https://scrmadmintest.pawjzs.com:4443/",
        "scrmAdmin-server": "https://scrmadmintest.pawjzs.com:4443/i/",
        "ContextMsg_Ws_Server": "wss://msgwstest.pawjzs.com:4443/i/",
        "WJBox-server": "wss://wjbox.pawjzs.com:8054/wss",
        "print-web": "https://printtest.pawjzs.com:4443/",
        "print-server": "https://printtest.pawjzs.com:4443/i/",
        "ai-web": "https://aitest.pawjzs.com:4443/",
        "ai-server": "https://aitest.pawjzs.com:4443/i/",
        "clm-web": "https://lifecycletest.pawjzs.com:4443/",
        "clm-server": "https://lifecycletest.pawjzs.com:4443/i/",
        "cas-sso": "https://ssotest.pawjzs.com:4443?targetType=wanjiaA&service="
    },
    "stg": {
        "domain": "pinganwj.com",
        "clinic-web": "https://myclinicstg.pinganwj.com:4443/",
        "clinic-center": "https://clinicstg.pinganwj.com:4443/",
        "clinic-server": "https://" + subdomain + "stg.pinganwj.com:4443/i/",
        "file-server": "https://fs01stg.pinganwj.com:4443/",
        "file-server-normal": "http://fs01stg.pinganwj.com:81/",
        "mec-web": "https://mecstg.pinganwj.com:4443/",
        "mec-server": "https://mecstg.pinganwj.com:4443/i/",
        "ccm-web": "https://ccmstg.pinganwj.com:4443/",
        "ccm-server": "https://ccmstg.pinganwj.com:4443/i/",
        "hosp-web": "https://hospstg.pinganwj.com:4443/",
        "hosp-server": "https://hospstg.pinganwj.com:4443/i/",
        "referral-web": "https://referralstg.pinganwj.com:4443/",
        "referral-server": "https://referralstg.pinganwj.com:4443/i/",
        "tcm-web": "https://tcmstg.pinganwj.com:4443/",
        "gp-web": "https://gpstg.pinganwj.com:4443/",
        "dental-web": "https://dentalstg.pinganwj.com:4443/",
        "cas-x": "https://passportstg.pinganwj.com?targetType=wanjiaB_SZ&service=",
        "WXServicePath": "https://wxclinicstg.pinganwj.com:4443/",
        "SH-img-server": "https://imagestg.pinganwj.com:4443/",
        "pinganwj-clinicExt-web": "https://extclinicstg.pinganwj.com:4443/",
        "pinganwj-clinicExt-web-server": "https://extclinicstg.pinganwj.com:4443/i/",
        "scrmAdmin-web": "https://scrmadminstg.pinganwj.com:4443/",
        "scrmAdmin-server": "https://scrmadminstg.pinganwj.com:4443/i/",
        "ContextMsg_Ws_Server": "wss://msgwsstg.pinganwj.com:4443/i/",
        "WJBox-server": "wss://wjbox.pinganwj.com:8054/wss",
        "print-web": "https://printstg.pinganwj.com:4443/",
        "print-server": "https://printstg.pinganwj.com:4443/i/",
        "ai-web": "https://aistg.pinganwj.com:4443/",
        "ai-server": "https://aistg.pinganwj.com:4443/i/",
        "clm-web": "https://lifecyclestg.pinganwj.com:4443/",
        "clm-server": "https://lifecyclestg.pinganwj.com:4443/i/",
        "cas-sso": "https://ssostg.pinganwj.com:4443?targetType=wanjiaA&service="
    },
    "product": {
        "domain": "pinganwj.com",
        "clinic-web": "https://myclinic.pinganwj.com/",
        "clinic-center": "https://clinic.pinganwj.com/",
        "clinic-server": "https://" + subdomain + ".pinganwj.com/i/",
        "file-server": "https://fs01.pinganwj.com/",
        "file-server-normal": "http://fs01.pinganwj.com/",
        "mec-web": "https://mec.pinganwj.com/",
        "mec-server": "https://mec.pinganwj.com/i/",
        "ccm-web": "https://ccm.pinganwj.com/",
        "ccm-server": "https://ccm.pinganwj.com/i/",
        "hosp-web": "https://hosp.pinganwj.com/",
        "hosp-server": "https://hosp.pinganwj.com/i/",
        "referral-web": "https://referral.pinganwj.com/",
        "referral-server": "https://referral.pinganwj.com/i/",
        "tcm-web": "https://tcm.pinganwj.com/",
        "gp-web": "https://gp.pinganwj.com/",
        "dental-web": "https://dental.pinganwj.com/",
        "cas-x": "https://passport.pinganwj.com?targetType=wanjiaB_SZ&service=",
        "WXServicePath": "https://wxclinic.pinganwj.com/",
        "SH-img-server": "https://image.pinganwj.com/",
        "pinganwj-clinicExt-web": "https://extclinic.pinganwj.com/",
        "pinganwj-clinicExt-web-server": "https://extclinic.pinganwj.com/i/",
        "scrmAdmin-web": "https://scrmadmin.pinganwj.com/",
        "scrmAdmin-server": "https://scrmadmin.pinganwj.com/i/",
        "ContextMsg_Ws_Server": "wss://msgws.pinganwj.com/i/",
        "WJBox-server": "wss://wjbox.pinganwj.com:8054/wss",
        "print-web": "https://print.pinganwj.com/",
        "print-server": "https://print.pinganwj.com/i/",
        "ai-web": "https://ai.pinganwj.com/",
        "ai-server": "https://ai.pinganwj.com/i/",
        "clm-web": "https://lifecycle.pinganwj.com/",
        "clm-server": "https://lifecycle.pinganwj.com/i/",
        "cas-sso": "https://sso.pinganwj.com?targetType=wanjiaA&service="
    }
};
var ContextPath = "";
var ContextPath_FileServer = "";
var ContextPath_FileServer_Normal = "";
var ContextClinc_Web = "";
var ContextClinc_Server = "";
var Context_MEC_Web = "";
var Context_MEC_Server = "";
var Context_CCM_Web = "";
var Context_CCM_Server = "";
var Context_HOSP_Web = "";
var Context_HOSP_Server = "";
var Context_REFERRAL_Web = "";
var Context_REFERRAL_Server = "";
var WXServicePath = "";
var CAS_URL_NGINX = "";
var SH_IMG_SERVER = "";
var Context_CLINICEXT_Web = "";
var Context_CLINICEXT_Server = "";
var Context_SCRM_Web = "";
var Context_SCRM_Server = "";
var ContextMsg_Ws_Server = "";
var Context_TCM_Web = "";
var Context_GP_Web = "";
var Context_DENTAL_Web = "";
var WJBox_Server = "";
var Context_Print_Web = "";
var Context_Print_Server = "";
var ClinicCenter_Web = "";
var Context_AI_Web = "";
var Context_AI_Server = "";
var Context_CLM_Web = "";
var Context_CLM_Server = "";
var CAS_SSO_NGINX = "";
var vUrl = window.location.href;
var item = null;
if (vUrl.indexOf('stg.pinganwj.com') != -1 || vUrl.indexOf('https://wwwstg.pinganwj.com') != -1) {
    item = pawj_url_data['stg'];
} else if (vUrl.indexOf('pinganwj.com') != -1 || vUrl.indexOf('https://www.pinganwj.com') != -1) {
    item = pawj_url_data['product'];
} else if (vUrl.indexOf('test.pawjzs.com') != -1 || vUrl.indexOf('https://wwwtest.pawjzs.com') != -1) {
    item = pawj_url_data['test'];
} else if (vUrl.indexOf('yb.pawjzs.com') != -1 || vUrl.indexOf('https://wwwyb.pawjzs.com') != -1) {
    item = pawj_url_data['yb'];
} else if (vUrl.indexOf('dev.pawjzs.com') != -1 || vUrl.indexOf('https://wwwdev.pawjzs.com') != -1) {
    item = pawj_url_data['dev'];
} else {
    item = pawj_url_data['develop'];
}
ContextPath_FileServer = item['file-server'];
ContextPath_FileServer_Normal = item['file-server-normal'];
ContextClinc_Web = item['clinic-web'];
ContextClinc_Server = item['clinic-server'];
Context_MEC_Web = item['mec-web'];
Context_MEC_Server = item['mec-server'];
Context_CCM_Web = item['ccm-web'];
Context_CCM_Server = item['ccm-server'];
Context_HOSP_Web = item['hosp-web'];
Context_HOSP_Server = item['hosp-server'];
Context_REFERRAL_Web = item['referral-web'];
Context_REFERRAL_Server = item['referral-server'];
Context_CLINICEXT_Web = item['pinganwj-clinicExt-web'];
Context_CLINICEXT_Server = item['pinganwj-clinicExt-web-server'];
Context_SCRM_Web = item['scrmAdmin-web'];
Context_SCRM_Server = item['scrmAdmin-server'];
ContextMsg_Ws_Server = item['ContextMsg_Ws_Server'];
Context_TCM_Web = item['tcm-web'];
Context_GP_Web = item['gp-web'];
Context_DENTAL_Web = item['dental-web'];
WXServicePath = item['WXServicePath'];
CAS_URL_NGINX = item['cas-x'];
SH_IMG_SERVER = item['SH-img-server'];
WJBox_Server = item['WJBox-server'];
Context_Print_Web = item['print-web'];
Context_Print_Server = item['print-server'];
ClinicCenter_Web = item['clinic-center']
Context_AI_Web = item['ai-web'];
Context_AI_Server = item['ai-server'];
Context_CLM_Web = item['clm-web'];
Context_CLM_Server = item['clm-server'];
CAS_SSO_NGINX = item['cas-sso'];
if (item['domain']) {
    document.domain = item['domain'];
}



/**配制domain解决二级跨域**/
(function() {
    var __jsondata = {
        "develop": {
            "domain": ""
        },
        "dev": {
            "domain": "pawjzs.com"
        },
        "test": {
            "domain": "pawjzs.com"
        },
        "yb": {
            "domain": "pawjzs.com"
        },
        "stg": {
            "domain": "pinganwj.com"
        },
        "product": {
            "domain": "pinganwj.com"
        }
    };
    var vUrl = window.location.href;
    var item = null;
    if (vUrl.indexOf('https://myclinic.pinganwj.com') != -1 || vUrl.indexOf('https://www.pinganwj.com') != -1) {
        item = __jsondata['product'];
    } else if (vUrl.indexOf('https://myclinicstg.pinganwj.com:4443') != -1 || vUrl.indexOf('https://wwwstg.pinganwj.com:4443') != -1) {
        item = __jsondata['stg'];
    } else if (vUrl.indexOf('https://myclinictest.pawjzs.com:4443') != -1 || vUrl.indexOf('https://wwwtest.pawjzs.com:4443') != -1) {
        item = __jsondata['test'];
    } else if (vUrl.indexOf('https://myclinicdev.pawjzs.com:4443') != -1 || vUrl.indexOf('https://wwwdev.pawjzs.com:4443') != -1) {
        item = __jsondata['dev'];
    } else if (vUrl.indexOf('https://myclinicyb.pawjzs.com:4443') != -1 || vUrl.indexOf('https://wwwyb.pawjzs.com:4443') != -1) {
        item = __jsondata['yb'];
    } else {
        item = __jsondata['develop'];
    }
    var _domain = item["domain"];
    if (_domain && _domain != "") {
        document.domain = _domain;
    }

})();


(function() {
    var currcss = [{
            type: 0, ////静态服务器上
            value: "/static/resources/style/"
        },
        {
            type: 1, ////本地相对路径
            value: "style/"
        }
    ];
    var hostname = location.hostname;
    var judge = window.top.location.hostname;
    var protocol = document.location.protocol;
    var head = document.getElementsByTagName("head")[0];
    var link = document.getElementsByTagName("link")[0];
    var firstScript = document.getElementsByTagName("script")[0].src;
    var resault = "base.css";
    var staticurl = getStatic();

    //判断是否是index页面
    var thisHref = location.href.split("?")[0];
    var isIndex = false;
    var comIndex = 0;
    if (thisHref.lastIndexOf("com:4443") > -1) {
        comIndex = thisHref.length - thisHref.lastIndexOf("com:4443"); //com所在位置
        if (comIndex == 8 || comIndex == 9) {
            isIndex = true; //为index页面
        }
    } else {
        comIndex = thisHref.length - thisHref.lastIndexOf("com");
        if (comIndex == 3 || comIndex == 4) {
            isIndex = true; //为index页面
        }
    }

    if (judge.indexOf("gp") > -1) {
        resault = "base.css";
    } else if (judge.indexOf("dental") > -1) {
        resault = "dentistry.css";
    } else if (judge.indexOf("tcm") > -1) {
        resault = "tcm.css";
    }
    var wjVersion = firstScript.substr(firstScript.indexOf("?"));
    if (wjVersion.indexOf("?") == 0) {
        resault += wjVersion;
    }

    for (var i = 0, len = currcss.length; i < len; i++) {
        var pre = "";
        if (currcss[i].type === 0) {
            pre = staticurl;
        } else {
            pre = ""
            if (isIndex) { //为index页面
                pre = thisHref + "/clinic/main/"
            }
        }
        var css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = pre + currcss[i].value + resault;
        head.insertBefore(css, link);
    }

    function getStatic() {
        var staticurl = "https://statictest.pawjzs.com:4443";
        if (judge.indexOf("test.pawjzs.com:4443") > -1) {
            var staticurl = "https://statictest.pawjzs.com:4443";
        } else if (judge.indexOf("yb.pawjzs.com:4443") > -1) {
            var staticurl = "https://statictest.pawjzs.com:4443";
        } else if (judge.indexOf("stg.pinganwj.com:4443") > -1) {
            staticurl = "https://staticstg.pinganwj.com:4443";
        } else if (judge.indexOf("pinganwj.com") > -1) {
            staticurl = "https://static.pinganwj.com";
        }
        return staticurl;
    }

    //有跨文件夹引用CSS文件需多引用一个CSS文件
    window.addNewCssFile = function(path) {
        //  ../patientManagement/style/base.css
        var newCssFilePath = "../" + path + "/style/" + resault;
        if (isIndex) { //为index页面
            newCssFilePath = thisHref + "/clinic/" + path + "/style/" + resault;
        }
        var css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = newCssFilePath;
        head.insertBefore(css, link);
    }
})();