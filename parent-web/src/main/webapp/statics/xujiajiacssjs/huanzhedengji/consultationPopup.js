var delayPopup=null;var consultationId=null;var popFla=false;function consultVideoConfirm(d){var c=JSON.parse(d);if(popFla){return}popFla=true;var a=c.clinicName+"向您发起视频会诊，请接收。";var b={msg:a,cancelTxt:"忙，稍后接通",saveTxt:"立即接通",hideCloseBtn:true,onYes:function(){videoAjaxHandler(c,"startMeeting")},onNo:function(){videoAjaxHandler(c,"endMeeting")}};$.paConfirm(b)}function videoAjaxHandler(b,c){var a={method:"POST",contentType:"application/x-www-form-urlencoded",url:Context_CLINICEXT_Server+"tmdConsultation/"+c,dataType:"json",data:{consultationId:b.consultationId},showMask:true};var d=Utils.myAjaxHandler(a);d.done(function(e){if(e.errorCode!=SUCCESSCODE){$.paError(e.errorMessage);return}if(c=="startMeeting"){delayPopup=e.data.leftTime-300000;consultationId=b.consultationId;window.top.menuForIndex.firstMenuClicked("TELEMEDICINE");window.open(e.data.joinUrl)}else{$.paSuccess("操作成功！")}}).fail(function(e){popFla=false}).always(function(){popFla=false})}function removeVideoConfirm(){if(popFla){$("#pa-confirm").remove();$("#pa-bg-confirm").remove();popFla=false}};