function PatientYb(d,a,c){this.commonController=d;this.patientRegisterView=a;this.patientRegisterAction=c;this.ybRegFlag=false;this.ybData="";this.ybRegParams="";this.regData={};this.miTypeCode="";this.miTypeName="";this.MipSZSaveInfo=[];this.ybCardPassword="";this.ybEntryCardNo="";var b="";this._init()}PatientYb.prototype={_init:function(){this.initPage();this.bindEvent()},initPage:function(){var a=this;a.getMiTypeList(function(b){if(b!=null&&b.length>0){a.miTypeCode=b[0]["miTypeCode"];a.miTypeName=b[0]["miTypeName"];if(regModel==GUAHAO_REG){$("#read_sicard_btn").show()}}})},bindEvent:function(){var a=this;$("#read_sicard_btn").on("click",function(){a.showReadYbCardPannel()});$("#yb-check-btn").on("click",function(){a.checkYbPersonInfo()});$(".yb_plug_down_btn").on("click",function(){window.location.href=WJ_APP_PLUGIN_URL;$("#yb_plug_window").hide()})},getMiTypeList:function(e){var b=this;var d;var a={showMask:false,contentType:"application/json; charset=utf-8",url:ContextClinc_Server+"pubClinic/getMiTypeList",dataType:"json"};var c=Utils.myAjaxHandler(a);c.error(function(){$.paError("请求未响应，请检查网络连接！")});c.done(function(f){if(f.errorCode=="E0000000"){if(e){e(f.data)}}else{}})},checkYbPersonInfo:function(){var c=this;var e=$.trim($("#insurance_no").text());var b=$("#insurance_no").data("dnh");if(""==e||""==b){return}var a={ylzh:e,dnh:b};var d={url:ContextClinc_Server+"ybReimburse/checkYbPersonInfo",dataType:"json",type:"POST",data:JSON.stringify(a),contentType:"application/json;charset=utf-8",showMask:true};var f=Utils.myAjaxHandler(d);f.done(function(g){if(g!=null&&g.errorCode==SUCCESSCODE){if(g.data.window_url==null){$.paAlert("正常")}else{c.showLayer(g.data.window_url)}}else{$.paAlert(g.errorMessage)}})},showReadYbCardPannel:function(){layer.closeAll();var a=this;var b="";var c="425px";switch(a.miTypeCode){case MI_TYPE_ENUM.YB_SHENZHEN:b="./yb/shenzhen/insurance_registration.html?opt=1";break;case MI_TYPE_ENUM.YB_SHENZHEN_NEW:b="./yb/shenzhen_new/insurance_registration.html?opt=1";break;case MI_TYPE_ENUM.YB_XIAMEN:b="./yb/xiamen/insurance_registration.html?opt=1";break;case MI_TYPE_ENUM.YB_CHONGQING:b="./yb/chongqing/insurance_registration.html?opt=1";c="480px";break;case MI_TYPE_ENUM.YB_CHENGDU:b="./yb/chengdu/insurance_registration.html?opt=1";c="480px";break}if(b!=""){layer.open({type:2,shade:false,area:["800px",c],closeBtn:0,title:false,anim:false,shadeClose:false,content:b,end:function(){}})}},setYbReg:function(a){this.ybRegFlag=a},isYbReg:function(){return this.ybRegFlag},setYBRegParams:function(a){this.ybRegParams=a},getYBRegParams:function(){return this.ybRegParams},restYbReg:function(){var a=this;a.clearYbData();a.setYbReg(false);a.ybData="";a.regData={}},clearYbData:function(){$("#yb_card_no").val("");$("#insurance_no").text("");$("#insurance_no").data("dnh","");$("#yb_ye").text("");$("#cb_lx").text("");$("#yb_cbdw").text("");$("#yb_insurance_type").text("");$("#yb_registrationFee").val("");if($("#insurance_company")){$("#insurance_company").text("")}if($("#patient_type")){$("#patient_type").text("")}},cancleYbCallback:function(){this.setYbReg(false);this.setYbData("");this.clearYbData();$("#yb-data-info").hide()},successYbCallback:function(a){var b=this;this.setYbData(a);this.setYbReg(true);var c={instranceNo:a.instranceNo,patientIdNo:a.patientIdNo,patientName:a.patientName,patientMobile:a.ybVisitPhone};this.readInsuranceCard(c,function(){b.showYbData();b.showYbVisitInfo();if(existClinicTag("WISDOM_MI")){$("#yb-check-btn").show()}else{$("#yb-check-btn").hide()}})},setYbData:function(a){this.ybData=a},getYbData:function(a){return this.ybData},readInsuranceCard:function(d,e){var b=this;var a={showMask:false,data:JSON.stringify(d),contentType:"application/json; charset=utf-8",url:ContextClinc_Server+"patient/query_patient_info",dataType:"json"};var c=Utils.myAjaxHandler(a);c.error(function(){$.paError("请求未响应，请检查网络连接！")});b.patientRegisterView.clearData();c.done(function(g){if(g.errorCode=="E0000000"){if(g.data!=""){b.showPatientInfo(g,e)}}else{var f=Utils.trimObj($("#patientno").attr("data-rule-id"));b.commonController.generatePatientNo(f)}})},showPatientInfo:function(d,e){var c=d.data;var b=this;if(c.patientInfo&&c.patientInfo!=""){if(b.patientRegisterView){b.patientRegisterView.fillPatiInfo(c.patientInfo,{flag:"yb"},function(){if(e){e()}})}}else{if(e){e()}var a=Utils.trimObj($("#patientno").attr("data-rule-id"));b.commonController.generatePatientNo(a)}},showYbData:function(){var a=this;switch(a.miTypeCode){case MI_TYPE_ENUM.YB_SHENZHEN_NEW:a.renderSZYbInfo(this.ybData);$("#yb_card_no").val(this.ybData.instranceNo);$("#insurance_no").text(this.ybData.instranceNo);$("#insurance_no").data("dnh",this.ybData.dnh==null?"":this.ybData.dnh);break;case MI_TYPE_ENUM.YB_SHENZHEN:$("#yb_card_no").val(this.ybData.instranceNo);$("#insurance_no").text(this.ybData.instranceNo);$("#insurance_no").data("dnh",this.ybData.dnh==null?"":this.ybData.dnh);$("#insurance_no").data("instrancePassword",this.ybData.instrancePassword==null?"":this.ybData.instrancePassword);$("#yb_ye").text("￥"+this.ybData.ybBalanceAcount);$("#cb_lx").text(this.ybData.ybCBLXNAME);$("#yb_cbdw").text(this.ybData.insuranceCompany);$("#yb_insurance_type").attr("val",this.ybData.ybInsuranceType);$("#yb_insurance_type").text(this.ybData.ybInsuranceTypeName);break;case MI_TYPE_ENUM.YB_XIAMEN:case MI_TYPE_ENUM.YB_CHONGQING:$("#yb_card_no").val(this.ybData.instranceNo);$("#insurance_no").text(this.ybData.instranceNo);$("#insurance_no").data("dnh",this.ybData.dnh==null?"":this.ybData.dnh);$("#yb_ye").text("￥"+this.ybData.ybBalanceAcount);$("#cb_lx").text(this.ybData.ybCBLXNAME);$("#yb_cbdw").text(this.ybData.insuranceCompany);$("#yb_insurance_type").attr("val",this.ybData.ybInsuranceType);$("#yb_insurance_type").text(this.ybData.ybInsuranceTypeName);break;case MI_TYPE_ENUM.YB_CHENGDU:a.renderChengduYbInfo(this.ybData);break}$("#yb-data-info").show();$("#patiName").val(this.ybData.patientName);if(Utils.notBlank(this.ybData.ybVisitPhone)){$("#phone").val(this.ybData.ybVisitPhone)}$("#sex_warpper").find("span[val='"+a.adaptSexData(this.ybData.patientSex)+"']").addClass("checked").siblings("span").removeClass("checked");$("#cardNum").val(this.ybData.patientIdNo);if(verfyIDCard(this.ybData.patientIdNo)){setSelectIdValue("cardType","01");var b=getBirthdayFromIdCard(this.ybData.patientIdNo);$("#birthday").val(b);setBirthDayYearAndMonth(b)}else{setSelectIdValue("cardType","99");$("#birthday").val(this.ybData.patientBirthDate);setBirthDayYearAndMonth(this.ybData.patientBirthDate)}},showYbVisitInfo:function(){var a=this;a.patientRegisterView.setSelectIdValue("guahao-dept",a.ybData.ybDeptId);$("#guahao-dept").attr("yb-code",a.ybData.ybDeptCode);a.patientRegisterAction.getAndSetGuaHaoDoctor(function(){$("#guahao-doctor").SelectWJZSDropdownItem(a.ybData.ybDoctorId);$("#guahao-doctor").attr("yb-code",a.ybData.ybDoctorCode);a.patientRegisterView.showApptPayStatus();a.patientRegisterAction.setDoctorTreatmentPrice();a.commonController.disabledAllInput($("#guahao-dept").parent("div"));a.commonController.disabledAllInput($("#guahao-doctor").parent("div"))})},getYbRegData:function(){var a=this;var c=1;if(a.ybData.isMySelf!=null&&!a.ybData.isMySelf){c=0}var b={isYbReg:(a.isYbReg()?1:0),ybInsuranceType:a.ybData.ybInsuranceType||"",ybInsuranceTypeName:a.ybData.ybInsuranceTypeName||"",ybAcographyType:a.ybData.ybAcographyType||"",ybAcographyTypeName:a.ybData.ybAcographyTypeName||"",insuranceNo:a.ybData.instranceNo||"",useInstranceNo:a.ybData.useInstranceNo||"",insuranceDnh:a.ybData.dnh||"",ybCblx:a.ybData.ybCBLX,ybCblxName:a.ybData.ybCBLXNAME,miTypeCode:a.miTypeCode,miTypeName:a.miTypeName,isMySelf:c,ybPersonInfo:JSON.stringify(a.ybData.ybCardInfo),specialDiseaseName:a.ybData.specialDiseaseName,specialDiseaseCode:a.ybData.specialDiseaseCode,total_price_fee:a.ybData.total_price_fee||0,ybRegistrationType:a.ybData.ybRegistrationType,advancePayStatus:a.ybData.advancePayStatus||0,orgCode:a.ybData.orgCode,insuranceEncryptNo:a.ybData.insuranceEncryptNo||"",ybAreaCode:a.ybData.cardAreaCode||"",ybRegType:a.ybData.ybRegistrationType||""};if(a.miTypeCode=="yb0005"){b.ybBizRecordTreatmentList=a.MipSZSaveInfo}return b},getDoYbRegParam:function(){return this.regData},isNeedYbGhOrRegOperate:function(){var a=this;switch(a.miTypeCode){case MI_TYPE_ENUM.YB_SHENZHEN:case MI_TYPE_ENUM.YB_SHENZHEN_NEW:return true;case MI_TYPE_ENUM.YB_CHONGQING:return true;case MI_TYPE_ENUM.YB_XIAMEN:case MI_TYPE_ENUM.YB_CHENGDU:return false}},regSubmit:function(d){var b=this;var a={url:ContextClinc_Server+"empi/patient_register",dataType:"json",data:JSON.stringify(d),contentType:"application/json",showMask:true};var c=Utils.myAjaxHandler(a);c.done(function(e){if("E0000000"==e.errorCode){if(e.data.samePatientList!=null&&e.data.samePatientList!=""){b.patientRegisterAction.showSamePatPannel(e.data.samePatientList);return}b.regData=e.data;if(e.data.ybData&&e.data.ybData!=""){b.regSuccessCallback(e.data)}}else{if("alreadyExist"==e.data||"病历号已存在"==e.data){$.paError("病历号已刷新，请重新提交");b.patientRegisterAction.reloadPatientNo()}else{if("umExist"==e.data){$.paError(" ")}else{$.paError(e.errorMessage)}}}}).fail(function(e){}).always(function(){link_server=false})},regSuccessCallback:function(e){var b=this;var c="";var a=e.ybData;totalPriceFee=e.regPriceFee;var d="425px";switch(b.miTypeCode){case MI_TYPE_ENUM.YB_SHENZHEN:c="./yb/shenzhen/insurance_registration.html?opt=2";break;case MI_TYPE_ENUM.YB_SHENZHEN_NEW:if(totalPriceFee>0){c="./yb/shenzhen_new/insurance_registration.html?opt=4&outPatientSerialNo="+e.outPatientSerialNo+"&amount="+totalPriceFee+"&triageId="+e.triageId+"&treatmentId="+e.treatmentId+"&ybBizRecordId="+e.ybBizRecordId}else{c="./yb/shenzhen_new/insurance_registration.html?opt=5&outPatientSerialNo="+e.outPatientSerialNo+"&amount="+totalPriceFee+"&triageId="+e.triageId+"&treatmentId="+e.treatmentId+"&ybBizRecordId="+e.ybBizRecordId}break;break;case MI_TYPE_ENUM.YB_XIAMEN:c="./yb/xiamen/insurance_registration.html?opt=2";break;case MI_TYPE_ENUM.YB_CHONGQING:c="./yb/chongqing/insurance_registration.html?opt=2";d="480px";break}if(c!=""){layer.open({type:2,area:["800px",d],closeBtn:0,shade:false,title:false,anim:false,shadeClose:false,content:c,end:function(){}})}},ybRegSuccessCallback:function(a){var b=this;if(a!=null&&a.chargeData!=null&&a.chargeData!=""){console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>charge.data:"+JSON.stringify(a.chargeData));b.showChargePannel(a.chargeData)}else{$.paSuccess("保存成功");b.patientRegisterView.clearData();b.patientRegisterView.resetYbData();b.patientRegisterAction.reloadPatientNo();$("#patient_basic_info .extra-info").hide();$("#patiName").attr("data-edit","add")}},ybRegFailureCallback:function(b){if(b&&b!=""){var a="医保系统提示:"+b;MI_COMMON.ErrorHintPop(a)}},showChargePannel:function(a){if(a!=""){chargePayPanel.window.initChargePay(a);$("#pay_pop").show()}},adaptSexData:function(a){var b=parseInt(a);if(isNaN(b)){switch($.trim(a)){case"男":return 1;case"女":return 2;case"保密":return 3;default:return 1}}else{return b}},showWjAppPluginHandlePannel:function(a){if(a==1){$("#plug_down_txt").text("下载插件")}else{$("#plug_down_txt").text("更新插件")}$("#yb_plug_window").show()},renderChengduYbInfo:function(a){$("#yb-data-info").empty();var b="";b+="<input type='hidden' id='insurance_no' name='insurance_no'>";b+="<div class='row'>";b+="<div class='col-md-4' style='padding-top:0px; padding-bottom:0px;'>";b+="<div class='col-md-4'> <p class='p-title'>医保类型：</p></div>";b+="<div class='col-md-8'><p class='p-text-left'>成都医保</p></div>";b+="</div>";b+="<div class='col-md-7' style='padding-top:0px; padding-bottom:0px;'>";b+="<div class='col-md-5'><p class='p-title'>个人账户余额：</p></div>";b+="<div class='col-md-7'><p id='yb_ye' class='p-text-left'>"+a.ybBalanceAcount+"</p></div></div>";b+="</div>";b+="<div class='row'>";b+="<div class='col-md-4' style='padding-top:0px; padding-bottom:0px;'>";b+="<div class='col-md-4'><p class='p-title'>参保单位：</p></div>";b+="<div class='col-md-8'><p id='insurance_company' class='p-text-left'>"+a.insuranceCompany+"</p></div>";b+="</div>";b+="<div class='col-md-7' style='padding-top:0px; padding-bottom:0px;'>";b+="<div class='col-md-5'><p class='p-title'>医疗人员类型：</p></div>";b+="<div class='col-md-7'><p id='patient_type' class='p-text-left'>"+a.ybInsuranceTypeName+"</p></div>";b+="</div>";b+="</div>";$("#yb-data-info").html(b)},renderSZYbInfo:function(b){var a=this;$("#yb-data-info").empty();var c="";c+="<div class='row' style='padding-left: 1%;'>";c+="<div class='col-md-3' style='padding: 0 0 0 15px;'>";c+="<p class='p-title fl' style='width: auto; padding: 5px;'>医保卡号：</p>";c+="<div class='col-md-8'><p class='p-text-left' id='insurance_no'>"+b.instranceNo+"</p></div>";c+="</div>";c+="<div class='col-md-3' style='padding-top:0px; padding-bottom:0px;'>";c+="<p class='p-title fl' style='width: auto; padding: 5px;'>账户余额：</p>";c+="<div class='col-md-7'><p id='yb_ye' class='p-text-left' id='yb_ye'>"+b.ybBalanceAcount+"</p></div>";c+="</div>";c+="<div class='col-md-3' style='padding-top:0px; padding-bottom:0px;'>";c+="<p class='p-title fl' style='width: auto; padding: 5px;'>参保群体：</p>";c+="<div class='col-md-7'><p id='ybCBLX' class='p-text-left'>"+b.ybCBLXNAME+"</p></div>";c+="</div>";c+="<div class='col-md-3' style='padding-top:0px; padding-bottom:0px;'>";c+="<p class='p-title fl' style='width: auto; padding: 5px;'>参保状态：</p>";c+="<div class='col-md-7'><p id='ybCBZT' class='p-text-left'>"+b.ybCBZTNAME+"</p></div></div>";c+="</div>";c+="<div class='row'  style='padding-left: 1%;'>";c+="<div class='col-md-3' style='padding: 0 0 0 15px;'>";c+="<p class='p-title fl' style='width: auto; padding: 5px;'>先行支付资格：</p>";c+="<div class='col-md-4'><p id='ybZJCBZT' class='p-text-left'>"+b.ybFeeQualificationName+"</p></div>";c+="</div>";c+="<div class='col-md-3' style='padding-top:0px; padding-bottom:0px;'>";c+="<p class='p-title fl' style='width: auto; padding: 5px;'>受限类别：</p>";c+="<div class='col-md-7'><p id='ybCXLB' class='p-text-left'>"+b.ybCXLBNAME+"</p></div>";c+="</div>";c+="<div class='col-md-6' style='padding-top:0px; padding-bottom:0px;'>";c+="<p class='p-title fl' style='width: auto; padding: 5px;'>重疾保险参保状态：</p>";c+="<div class='col-md-7'><p id='ybFeeQualification' class='p-text-left'>"+b.ybZJCBZTNAME+"</p></div></div>";c+="</div>";c+="<div class='row'  style='padding-left: 1%;'>";c+="<div class='col-md-12' style='padding: 0 0 0 15px;'>";c+="<p class='p-title fl' style='width: auto; padding: 5px;'>参保险种信息：</p>";c+="<div class='col-md-8'><p id='insuranceType' class='p-text-left'>"+b.insuranceTypeName+"</p></div><a id='yb-check-btn' href='javascript:void(0);' class='btn normal-btn fr'>医保审核</a></div>";$("#yb-data-info").html(c);$("#yb-check-btn").on("click",function(){a.checkYbPersonInfo()})}};