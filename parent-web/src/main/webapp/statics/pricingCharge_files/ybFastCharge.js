var MI_TYPE_ENUM={YB_SHENZHEN:"yb0001",YB_XIAMEN:"yb0002",YB_CHONGQING:"yb0003",YB_CHENGDU:"yb0004"};var ybDJObj;$(function(){ybDJObj=new YbVisitController()});var YbVisitController=function(){this.miTypeCode="";this.miTypeName="";this.regData={};this._init()};YbVisitController.prototype={_init:function(){var a=this;a._bindEvent();a.getMiTypeList(function(b){if(b!=null&&b.length>0){switch(b[0]["miTypeCode"]){case MI_TYPE_ENUM.YB_CHENGDU:a.miTypeCode=b[0]["miTypeCode"];a.miTypeName=b[0]["miTypeName"];$("#yb-fast-reg").show();break;default:break}}else{$("#yb-fast-reg").hide()}})},_bindEvent:function(){var a=this;$("#yb-fast-reg").on("click",function(){$(".popup").hide();a.showYbRegVisitPannel()}),$(".yb_plug_down_btn").on("click",function(){window.location.href=WJ_APP_PLUGIN_URL;$("#yb_plug_window").hide()})},getMiTypeList:function(e){var b=this;var d;var a={showMask:false,contentType:"application/json; charset=utf-8",url:ContextClinc_Server+"pubClinic/getMiTypeList",dataType:"json"};var c=Utils.myAjaxHandler(a);c.error(function(){$.paError("请求未响应，请检查网络连接！")});c.done(function(f){if(f.errorCode=="E0000000"){if(e){e(f.data)}}})},showYbRegVisitPannel:function(){layer.closeAll();var a=this;var b="";var c="425px";switch(a.miTypeCode){case MI_TYPE_ENUM.YB_SHENZHEN:b="../patientManagement/yb/shenzhen/insurance_registration.html?opt=4";break;case MI_TYPE_ENUM.YB_XIAMEN:b="../patientManagement/yb/xiamen/insurance_registration.html?opt=4";break;case MI_TYPE_ENUM.YB_CHONGQING:b="../patientManagement/yb/chongqing/insurance_registration.html?opt=4";c="480px";break;case MI_TYPE_ENUM.YB_CHENGDU:b="../patientManagement/yb/chengdu/insurance_registration.html?opt=4";c="480px";break}if(b!=""){layer.open({type:2,shade:false,area:["800px",c],closeBtn:0,title:false,anim:false,shadeClose:false,content:b,end:function(){}})}},successYbCallback:function(d){var b=this;d.miTypeCode=b.miTypeCode,d.miTypeName=b.miTypeName,d.patientSex=b.adaptSexData(d.patientSex);d.ybPersonInfo=JSON.stringify(d.ybCardInfo);var a={url:ContextClinc_Server+"empi/fastYbCharge",dataType:"json",data:JSON.stringify(d),contentType:"application/json",showMask:true};var c=Utils.myAjaxHandler(a);c.done(function(f){if("E0000000"==f.errorCode){b.regData=f.data;var e=b.isNeedYbGhOrRegOperate(b.miTypeCode);if(e){if(f.data.ybData&&f.data.ybData!=""){b.regSuccessCallback(f.data.ybData)}}else{b.ybRegSuccessCallback(f.data)}}else{$.paError(f.errorMessage)}}).fail(function(e){}).always(function(){})},isNeedYbGhOrRegOperate:function(a){switch(a){case MI_TYPE_ENUM.YB_SHENZHEN:case MI_TYPE_ENUM.YB_CHONGQING:return true;case MI_TYPE_ENUM.YB_XIAMEN:case MI_TYPE_ENUM.YB_CHENGDU:return false}},getDoYbRegParam:function(){return this.regData},regSuccessCallback:function(d){var a=this;var b="";var c="425px";switch(a.miTypeCode){case MI_TYPE_ENUM.YB_CHONGQING:b="../patientManagement/yb/chongqing/insurance_registration.html?opt=5";c="480px";break}if(b!=""){layer.open({type:2,area:["800px",c],closeBtn:0,shade:false,title:false,anim:false,shadeClose:false,content:b,end:function(){}})}},ybRegSuccessCallback:function(a){window.location.href="./chargeInfo.html?param="+JSON.stringify(a)},ybRegFailureCallback:function(b){if(b&&b!=""){var a="医保系统提示:"+b;MI_COMMON.ErrorHintPop(a)}},gernerateDwsAcography:function(c){var f=this;var a=config_cache.getCache("medical_user_data");var d=a.department;var i=d.departmentId;var g=d.departmentName;var e=a.userId||"";var h=a.userName||"";var b={triageId:c.triageId,doctorId:e,doctorName:h,deptId:i,deptName:g,miTypeCode:c.miTypeCode,specialDiseaseCode:c.specialDiseaseCode,specialDiseaseName:c.specialDiseaseName};var k={url:ContextClinc_Server+"empi/yb_generate_acography",dataType:"json",data:JSON.stringify(b),contentType:"application/json",showMask:true};var j=Utils.myAjaxHandler(k);j.done(function(l){if("E0000000"==l.errorCode){parent.$(parent.document).trigger("topGenerateDwsBar",["treatment",{ACOGRAPHY_ID:l.data.acographyId,RECORD_ID:null,EMPI_ID:l.data.empiId,PATIENT_NAME:f.regData.patientData.patientName,PATIENT_SEX:f.regData.patientData.patientGender,PATIENT_SEX_NAME:f.regData.patientData.patientGender=="1"?"男":(f.regData.patientData.patientGender=="2"?"女":"保密"),PATIENT_AGE:Utils.getPersonAccurateAge(f.regData.patientData.patientBirthDate),TREATMENT_STATE:1,PAYMENT_TYPE_ID:null,PAYMENT_TYPE_NAME:null,VISIT_TYPE:1,TRIAGE_ID:l.data.triageId}])}else{$.paError(l.errorMessage)}}).fail(function(l){}).always(function(){})},adaptSexData:function(a){var b=parseInt(a);if(isNaN(b)){switch($.trim(a)){case"男":return 1;case"女":return 2;case"保密":return 3;default:return 1}}else{return b}},showWjAppPluginHandlePannel:function(a){if(a==1){$("#plug_down_txt").text("下载插件")}else{$("#plug_down_txt").text("更新插件")}$("#yb_plug_window").show()},};