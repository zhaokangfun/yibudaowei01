function isOffLinePay(b){var a=false;switch(b){case chargeConstant.chargeCash:a=true;break;case chargeConstant.chargeCard:a=true;break;case chargeConstant.chargeYb:a=true;break;case chargeConstant.chargePa:a=false;break;case chargeConstant.chargeWeixin:a=false;break;case chargeConstant.chargeAlipay:a=false;break}return a}function fmoney(b,d){if(b==null||b==undefined){return""}if((b==undefined||b=="")&&b!="0"){return b}d=d>0&&d<=20?d:2;b=(b+"").replace(/[^\d\.-]/g,"");c=b.split(".")[1]||0;if(c!=0){c=b.split(".")[1].length}if(c>d){}else{b=parseFloat(b).toFixed(d)+""}var a=b.split(".")[0].split("").reverse(),c=b.split(".")[1];t="";for(i=0;i<a.length;i++){t+=a[i]+((i+1)%3==0&&(i+1)!=a.length&&(a[i+1]!="-")?",":"")}return t.split("").reverse().join("")+"."+c}function chineseNumber(h){if(isNaN(h)||h>Math.pow(10,12)){return""}if(parseFloat(h)==0){return"零元"}var o="零壹贰叁肆伍陆柒捌玖";var p=new Array("拾佰仟","分角");var k=new Array("万亿","");var m=h.toString().replace(/^-/,"").split(".");var a=new Array(m[0].length-1,2);function b(q,j){var q=q.replace(/\d/g,function(r){return o.charAt(r)+p[j].charAt(a--%4?a%4:-1)});return q}for(var g=0;g<m.length;g++){var f="";for(var e=0;e*4<m[g].length;e++){var l=m[g].length-(e+1)*4;var n=m[g].substring(l,l+4);var a=g?2:n.length-1;var d=b(n,g);d=d.replace(/(零.)+/g,"零").replace(/零+$/,"");d=d.replace(/^壹拾/,"拾");f=(d+k[g].charAt(e-1))+f}m[g]=f}m[1]=m[1]?m[1]:"";m[0]=m[0]?m[0]+"元":m[0],m[1]=m[1].replace(/^零+/,"");m[1]=m[1].match(/分/)?m[1]:m[1]+"整";var c=m[0]+m[1];if(h<0){c="负"+c}return c}function toDecimal(a,e){var d=parseFloat(a);if(isNaN(d)){return false}var d=Math.round(a*Math.pow(10,e))/Math.pow(10,e);var c=d.toString();var b=c.indexOf(".");if(b<0){b=c.length;c+="."}while(c.length<=b+e){c+="0"}return c}function fixByInteger(a){var d=parseFloat(a);if(isNaN(d)){return false}var c=d.toString();var b=c.split(".");return parseInt(b[0])}function fixByFive(a,e){var d=parseFloat(a);if(isNaN(d)){return false}var d=Math.floor(a*Math.pow(10,e));var b=Math.abs(d%10);var c=d-b;if(b>0&&b<=5){c=c+5}else{if(b!=0){c=c+10}}c=c/Math.pow(10,e);return c}function fixByRound(a,e){var d=parseFloat(a);if(isNaN(d)){return false}var d=Math.round(a*Math.pow(10,e))/Math.pow(10,e);var c=d.toString();var b=c.indexOf(".");if(b<0){b=c.length;c+="."}while(c.length<=b+e){c+="0"}return c}function parseDate2String(a,b){if(typeof(a)=="string"||typeof(a)=="number"){a=new Date(parseInt(a))}if(a instanceof Date){return a.Format(b)}return String.valueOf(a)}function handleNumber(a){a=a.replace(/,/g,"");a=parseFloat(a);return a}function accAdd(f,d){var c,b,a;try{c=f.toString().split(".")[1].length}catch(g){c=0}try{b=d.toString().split(".")[1].length}catch(g){b=0}a=Math.pow(10,Math.max(c,b));return(f*a+d*a)/a}function accSub(f,d){var c,b,a,h;try{c=f.toString().split(".")[1].length}catch(g){c=0}try{b=d.toString().split(".")[1].length}catch(g){b=0}a=Math.pow(10,Math.max(c,b));h=(c>=b)?c:b;return parseFloat(((f*a-d*a)/a).toFixed(h))}function accMul(d,b){var a=0,f=d.toString(),c=b.toString();try{a+=f.split(".")[1].length}catch(g){}try{a+=c.split(".")[1].length}catch(g){}return Number(f.replace(".",""))*Number(c.replace(".",""))/Math.pow(10,a)}function accDiv(arg1,arg2){var t1=0,t2=0,r1,r2;try{t1=arg1.toString().split(".")[1].length}catch(e){}try{t2=arg2.toString().split(".")[1].length}catch(e){}with(Math){r1=Number(arg1.toString().replace(".",""));r2=Number(arg2.toString().replace(".",""));return(r1/r2)*pow(10,t2-t1)}}function fillDropMenu(a,b){if(b==""||b==null||b==undefined){$("#"+a).val("");$("#"+a).attr("")}else{$("#"+a).parent().find("li").each(function(c){if($(this).attr("value")==b){$("#"+a).val($(this).text());$("#"+a).attr("val",b);return false}})}}function getGenderName(a){if(a=="1"){return"男"}else{if(a=="2"){return"女"}else{if(a=="3"){return"保密"}else{return a}}}}function parseString2Date(a){if(a.match(/^\d{4}[\-\/\s+]\d{1,2}[\-\/\s+]\d{1,2}$/)){return new Date(a.replace(/[\-\/\s+]/g,"/"))}else{if(a.match(/^\d{8}$/)){return new Date(a.substring(0,4)+"/"+a.substring(4,6)+"/"+a.substring(6))}else{return new Date()}}}function parseDate2String(a,b){if(a==null||a==undefined){return""}if(typeof(a)=="string"||typeof(a)=="number"){a=new Date(parseInt(a))}if(a instanceof Date){return a.Format(b)}return String.valueOf(a)}function cutByte(h,b,g){var b=+b,g=typeof(g)=="undefined"?"...":g.toString();function e(j){var k=j/2|0;return(k>0?k:1)}if(!(h+"").length||!b||b<=0){return""}if(this.getBlength(h)<=b){return h}var d=b-getBlength(g),a=0,c=0;while(c<=d){var f=e(d-c);c+=getBlength(h.substr(a,f));a+=f}return h.substr(0,a-1)+g}function getBlength(b){for(var a=b.length,c=0;a--;){c+=b.charCodeAt(a)>255?2:1}return c}function getYBData(c){var a={method:"POST",url:ContextClinc_Server+"ybReimburse/getYBBaseInfoByClinicId",data:null,dataType:"json",async:true,showMask:true};var b=Utils.myAjaxHandler(a);b.done(function(d){if(d!=null&&d.errorCode==SUCCESSCODE){c(d.data);return}else{$.paError(d.errorMessage,null);return}})}function getParamterData(){var d=session_cache.getCache("chargeParamterData");if(d){return}var c=["5001","5002","5003","5004","5006","5009","5011","9001","1010"];var a={method:"POST",url:ContextClinc_Server+"mdcParameter/selectCodeMapByCodes",data:JSON.stringify(c),dataType:"json",contentType:"application/json",showMask:true,async:true};var b=Utils.myAjaxHandler(a);b.done(function(e){if(e!=null&&e.errorCode==SUCCESSCODE){session_cache.setCache("chargeParamterData",e.data)}else{$.paError(e.errorMessage,null);return}}).fail(function(e){$.paError("请求异常",null)}).always(function(){})}function getCGPageData(d){var c={typeName:"1"};var a={method:"POST",url:ContextClinc_Server+"charge/initCGRecordPage",data:c,dataType:"json",async:true,showMask:true};var b=Utils.myAjaxHandler(a);b.done(function(e){if(e!=null&&e.errorCode==SUCCESSCODE){d(e.data)}else{$.paError(e.errorMessage,null)}}).fail(function(e){$.paError("请求异常",null)}).always(function(){})}function getInvoiceTag(c){var a={url:ContextClinc_Server+"charge/hasInvoice",contentType:"application/json; charset=utf-8",method:"POST",type:"POST",dataType:"json",showMask:true};var b=Utils.myAjaxHandler(a);b.done(function(d){if(d!=null&&d.errorCode==SUCCESSCODE){c(d.data)}else{$.paError(d.errorMessage,null)}}).fail(function(d){$.paError("请求异常",null)}).always(function(){})}function getMdcParam(d){var b=["5001","5002","5003","5004","5006","5009","5011","9001","1010","5012","5013","5016"];var a={method:"POST",url:ContextClinc_Server+"mdcParameter/selectCodeMapByCodes",data:JSON.stringify(b),dataType:"json",contentType:"application/json",showMask:true,async:true};var c=Utils.myAjaxHandler(a);c.done(function(e){if(e!=null&&e.errorCode==SUCCESSCODE){session_cache.setCache("chargeParamterData",e.data);d(e.data)}else{$.paError(e.errorMessage,null);return}}).fail(function(e){$.paError("请求异常",null)}).always(function(){})};