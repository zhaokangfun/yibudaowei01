var HEALTH_CARD_PAY_WS;var isAvailiable;var isFirstInit;$(function(){HealthCardPayEvent.init(true)});var HealthCardPayEvent={init:function(flag){if(flag){isFirstInit=true}else{isFirstInit=false;if(isAvailiable){$(".show-panel",window.parent.document).css("height","400px");$(".input-money-panel").hide();$(".health-info").show();$("#installPluinDiv").hide()}else{$.paWarn("设备未连接或没有安装驱动！",null);$("#installPluinDiv").show();$(".health-info").hide();$(".input-money-panel").hide()}}if(!HEALTH_CARD_PAY_WS){if("WebSocket" in window){HEALTH_CARD_PAY_WS=new WebSocket(WJBox_Server,"protocol-pk-ld")}else{if("MozWebSocket" in window){HEALTH_CARD_PAY_WS=new MozWebSocket(WJBox_Server,"protocol-pk-ld")}else{if(!isFirstInit){$.paWarn("暂时不支持当前浏览器！")}}}}if(HEALTH_CARD_PAY_WS.readyState==0||HEALTH_CARD_PAY_WS.readyState==1){isAvailiable=true}else{isAvailiable=false}HEALTH_CARD_PAY_WS.onmessage=function(evt){var res=eval("("+evt.data+")");if(res.type==10603){$("#health_card_no_id").val(res.contexts[1].substring(0,res.contexts[1].indexOf("=")));$("#health_card_no_id").data("trackInfo",res.contexts[1]);$("#health_card_password_id").data("machineId",res.contexts[3])}else{if(res.type==10604){$("#health_card_password_id").val(res.pwd);var cardNo=$("#health_card_no_id").val();var trackInfo=$("#health_card_no_id").data("trackInfo");var query_balance_param={cardNo:cardNo,trackInfo:trackInfo,cardPwd:res.pwd,machineId:res.contexts[2]};HealthCardPayEvent.getHealthCardBlanance(query_balance_param,function(data){HealthCardPayEvent.filledHealthBalance(data);var payMoney=$("#recemoneyid").text();payMoney=handleNumber(payMoney.substring(1,payMoney.length));if(data.accountBalance>=payMoney){$("#pay_confirm_btn").removeClass("disabled");param=$.extend({},param,query_balance_param)}else{$.paWarn("余额不足！")}})}}};HEALTH_CARD_PAY_WS.onerror=function(evt){};HEALTH_CARD_PAY_WS.onopen=function(evt){};HEALTH_CARD_PAY_WS.onclose=function(evt){}},readCard:function(){$("#health_card_no_id").text("");$("#health_card_no_id").data("trackInfo","");var a={};a.type=10603;HEALTH_CARD_PAY_WS.send(JSON.stringify(a))},readPassword:function(){var a=$("#health_card_no_id").val();if(!a){$.paWarn("卡号不能为空！");return}HealthCardPayEvent.getFundTimestamp()},getHealthCardBlanance:function(c,d){var a={url:ContextClinc_Server+"charge/fundQueryBalance",dataType:"json",type:"POST",data:JSON.stringify(c),contentType:"application/json;charset=utf-8",async:true,showMask:true};var b=Utils.myAjaxHandler(a);b.done(function(e){if(e!=null&&e.errorCode==SUCCESSCODE){d(e.data)}else{$.paError(e.errorMessage)}})},filledHealthBalance:function(a){$("#health_card_no_id").val(a.cardNo);$("#health_card_banlance_id").text(a.accountBalance)},getFundTimestamp:function(){var a={url:ContextClinc_Server+"charge/getFundTimestamp",dataType:"json",type:"POST",contentType:"application/json;charset=utf-8",async:true,showMask:true};var b=Utils.myAjaxHandler(a);b.done(function(d){if(d!=null&&d.errorCode==SUCCESSCODE){var c=d.data;var d={};d.type=10604;d.timesn=c;HEALTH_CARD_PAY_WS.send(JSON.stringify(d))}else{$.paError(d.errorMessage)}}).fail(function(c){$.paError("获取时间戳失败")}).always(function(){})},};