(function(b){var a="E0000000";window.ClinicIndex=function(){this._init()};ClinicIndex.prototype={curDate:new Date().Format("yyyy-MM-dd"),treatmentStateEnum:{WAITING:0,VISITING:1,FINISH:2},sexEnum:{1:"男",2:"女",3:"保密"},clinicPackageVersion:{},DwsMenuCode:"HZZX",isLoadingList:false,isMenuMove:false,_init:function(){var c=this;c.switchVersionInit();c.approveEvent();c.signContract();c._todayPatientMenu();c.getVersionInfo();setTimeout(c.queryWsMessageCounter,2000);c.initIndexTopWsMessageEvent();b(document).on("topGenerateDwsBar",function(g,f,d){c.generateDwsBar(f,d)});b("#agree_submit-btn").click(function(){c.readedLicenseAgreement()});b("#print_submit-btn").click(function(){c.consignPrint()});b(document).on("getOperatingDoc",function(d){c.queryOperationDocList()});setTimeout(function(){c.initTcmAdvice();c.initMdDict();c.initDrugFrequency()},6000);b(window).on("resize",function(){clearTimeout(c.timer);c.timer=setTimeout(function(){c.initSlideBoxHeight()},50)});b("#set_bar_btn").off("click").on("click",function(){b(this).toggleClass("slide_box_float");b("#slide_box").toggleClass("slide_box_fixed");b("#r-main").toggleClass("has_slide_box_fixed");if(b(this).hasClass("slide_box_float")){menuForIndex.isFloatBar=true;b(this).attr("title","点击切换到左侧固定状态")}else{menuForIndex.isFloatBar=false;b(this).attr("title","点击切换到悬浮状态")}c.initSlideBoxHeight()})},switchVersionInit:function(){this.switchShowPop()},initClinicPackageVersion:function(){var c=this;var d={url:ContextClinc_Server+"session/clinicPackageVersion",dataType:"json",showMask:false,async:true};var e=Utils.myAjaxHandler(d);e.done(function(g){if(g.errorCode==a){c.clinicPackageVersion=g.data;var f=c.clinicPackageVersion;if(f==null){b("#switchVersion").hide()}else{var i=f.professionalPackage;var l=f.beginDate;var m=f.endDate;var o=f.basicPackage;var k=i.isSelect;var n=f.versionSwitchState;var h=f.mainPackageCode;var j=false;b(".content_list").find(".radio").removeClass("checked");if(o.isSelect==1){b(".content_list").find(".radio").eq(1).addClass("checked");if(h!=o.packageCode){j=true}}else{if(i.isSelect==1){b(".content_list").find(".radio").eq(0).addClass("checked");if(h!=i.packageCode){j=true}}}if(n==1){b("#switchVersionPop").show();b("#switchVersionPop .pop_box").show()}else{if(n==0&&j){b("#switchVersionPop").show();b("#switchVersionPop .pop_box").show()}else{b.paError("当前诊所类型不支持版本切换!")}}}}}).fail(function(f){b.paError("获取诊所切换版本失败!")}).always(function(){})},makeSurePackageVersion:function(h,g,c){var e=this;var i=e.clinicPackageVersion;var d={};d.beginDateTamp=i.beginDate;d.endDateTamp=i.endDate;d.mainPackageCode=i.mainPackageCode;d.sysCode=g;d.sysName=c;d.hisSysCode=h;var f={url:ContextClinc_Server+"packageVersion/changeClinicPakcageVersion",method:"POST",dataType:"json",data:d,};var j=Utils.myAjaxHandler(f);j.done(function(k){if(k.errorCode==a){b("#switchVersionPop .pop-sure").hide();b.paSuccess("版本切换成功，重新登录后生效");var l=setTimeout(function(){b(".i-exit").click();clearTimeout(l)},2000)}})},sureClick:function(h,g){var c=this;var f=c.clinicPackageVersion.basicPackage.isSelect;var e=c.clinicPackageVersion.professionalPackage.isSelect;var d=b(".content_list").find(".checked").index();if(d==0){if(f){if(g){c.makeSurePackageVersion(c.clinicPackageVersion.basicPackage.packageCode,c.clinicPackageVersion.professionalPackage.packageCode,c.clinicPackageVersion.professionalPackage.packageName)}}else{h()}}else{if(d==1){if(e){if(g){c.makeSurePackageVersion(c.clinicPackageVersion.professionalPackage.packageCode,c.clinicPackageVersion.basicPackage.packageCode,c.clinicPackageVersion.basicPackage.packageName)}}else{h()}}else{h()}}},switchShowPop:function(){var c=this;b("#switchVersion").click(function(){c.initClinicPackageVersion()});b("#switchVersionPop .close").click(function(){b("#switchVersionPop").hide();b("#switchVersionPop .pop_box").hide();b("#switchVersionPop .pop-sure").hide()});b("#switchVersionPop .btn-cancel").click(function(){b("#switchVersionPop").hide();b("#switchVersionPop .pop_box").hide();b("#switchVersionPop .pop-sure").hide()});b("#switchVersionPop .pop_box .make_sure").click(function(){b("#switchVersionPop").show();b("#switchVersionPop .pop_box").hide();if(c.clinicPackageVersion.isBsRole!=0){b("#switchVersionPop .pop-sure").show();c.sureClick(function(){b("#switchVersionPop").hide()},false)}else{c.sureClick(function(){b("#switchVersionPop .pop_box").hide()},true)}});b("#switchVersionPop .pop-sure .make_sure").click(function(){c.sureClick(function(){b("#switchVersionPop .pop_box").hide()},true)})},approveEvent:function(){b(".noApprove").mouseenter(function(d){b(".noApprovePop").show();b(".approve_box").on("mouseleave",function(){b(".noApprovePop").hide()})});var c=ClinicCenter_Web+"clinic/junior/certIndex.do";b(".noApprovePop a").attr("href",c);b(".isApprove_btn").attr("href",c)},signContract:function(){var c=this;b(".contract a").click(function(){var d={url:ContextClinc_Server+"/productOrder/selectOrderInfoByClinicId",method:"POST",dataType:"json"};var e=Utils.myAjaxHandler(d);e.done(function(j){b(".contract_box").show();var h=j.data.isOtherChannel;var g=j.data.isPay;var i=j.data.endDate;var f=j.data.remainingDay;if(g){b(".contract_box>.in_use").show();if(i){b(".in_use_bottom").show();b(".in_use_bottom>span").html(i)}}else{if(h){b(".contract_box>.on_trial").show();b(".trial_middle>span").html(i);b(".last_date>span").html(f)}else{b(".contract_box>.other_channel").show()}}}).fail(function(f){}).always(function(){})});b(".contract").mouseleave(function(){b(".contract_box").hide()});b(".contract_box .my_contract").on("click",function(d){b(".online_pay_pop").show();b(".eleAgreement").show();b(".contract_box").hide();b("#cover").show();d.stopPropagation()});b(".online_pay_pop").on("click",".next_time",function(){b("#cover").hide();b(".online_pay_pop").hide()});b(".eleAgreement").on("click",".close",function(){b("#cover").hide();b(".eleAgreement").hide()});b(".eleAgreement").off("click",".read_agree").on("click",".read_agree",function(){c.createPayQrCode()});b(".payQrCode>.close").click(function(){b(".payQrCode").hide();b(".qrCode_box").empty()});b(".success_pay>.close").click(function(){b(".success_pay").hide();b("#cover").hide()});b(".online_pay_pop .success_btn").click(function(){b(".success_pay").hide();b("#cover").hide()})},createPayQrCode:function(){b(".qrCode_box").empty();var c=this;var d={url:ContextClinc_Server+"/productOrder/createOrder",method:"POST",dataType:"json"};var e=Utils.myAjaxHandler(d);e.done(function(i){var h={orderCode:i.data.orderCode};b(".eleAgreement").hide();b(".payQrCode").show();if(!i.data){b(".open_wechat").html("获取二维码失败了，请稍后重试");b(".qrCode_box").css("background","url(../../clinic/resources/images/fail.png) no-repeat center center/162px 121px");b(".payQrCode>.close").click(function(){b(".payQrCode").hide();b(".qrCode_box").empty();b("#cover").hide();b(".open_wechat").html("打开微信扫一扫进行支付")});return}b(".qrCode_box").qrcode({width:205,height:205,text:i.data.codeUrl});var g=true;var f=setInterval(function(){var k={url:ContextClinc_Server+"/productOrder/getOrderStatus",method:"POST",dataType:"json",data:h,};var l=Utils.myAjaxHandler(k);l.done(function(m){if(m.data){b(".payQrCode").hide();b(".success_pay .congratulation>a").attr("href",ClinicCenter_Web+"clinic/center.do");b(".success_pay").show();b(".qrCode_box").empty();g=false;clearInterval(f);b(".contract_box>.in_use").hide();b(".contract_box>.other_channel").hide();b(".contract_box>.on_trial").hide()}b(".payQrCode>.close").click(function(){b(".payQrCode").hide();b("#cover").hide();b(".qrCode_box").empty();clearInterval(f)})})},500);var j=function(){return setTimeout(function(){var k={url:ContextClinc_Server+"/productOrder/refreshWXPayQRCode",method:"POST",dataType:"json",data:h,};var l=Utils.myAjaxHandler(k);l.done(function(m){if(g){b(".qrCode_box_wrap").show();b(".qrCode_box_wrap").click(function(){b(".qrCode_box_wrap").hide();b(".qrCode_box").empty();b(".qrCode_box").qrcode({width:205,height:205,text:m.data.codeUrl});j()})}})},180000)};j()}).fail(function(f){b(".open_wechat").html("获取二维码失败了，请稍后重试");b(".qrCode_box").empty();b(".qrCode_box").css("background","url(../../clinic/resources/images/fail.png) no-repeat center center/162px 121px");b(".payQrCode>.close").click(function(){b(".payQrCode").hide();b(".qrCode_box").empty();b("#cover").hide();b(".open_wechat").html("打开微信扫一扫进行支付")});return}).always(function(){})},queryOperationDocList:function(){var c=this;var d={method:"GET",dataType:"json",contentType:"application/json; charset=utf-8",url:ContextClinc_Server+"/clinicOperationDoc/getOperationDocList",showMask:true};var e=Utils.myAjaxHandler(d);e.done(function(f){if(f!=null&&f.errorCode==a){c.renderPopDataList(f.data);b(".divCheckbox>a").click(function(){var g=b(this).attr("recId");c.downloadOperationDoc(g)})}}).fail(function(f){}).always(function(){})},nullOrUndefinedFormatter:function(c){if(c==null||c==undefined){return""}return c},renderPopDataList:function(e){var f=e.list;var c=e.clinicName;b("#clinic_name_div").html("诊所名称："+c);var d="";b("#bind_div").empty();b.each(f,function(g){d+='<div class="divCheckbox" style="float:left;width:33.3%"><i class=""  docId="'+f[g].DOC_ID+'" class="expired" style="margin-left:0px;padding-left: 16px;"></i><a href="javascript:void(0);" recId = "'+f[g].REC_ID+'" style="text-decoration:underline;color:#01a9db;">'+f[g].NAME+"."+f[g].DOC_TYPE+"</a></div>"});b("#bind_div").append(d);if(f==null||f==undefined||f.length==0){b("#bind_div").append('<div style="text-align:center;">没有相关手册可供下载</div>')}b("#bindPopup").show()},downloadOperationDoc:function(c){var d=ContextClinc_Server+"/clinicOperationDoc/download?recId="+c;d+=d.indexOf("?")!=-1?"&cookie_pawj_medical_user_id="+Utils.getCookie("cookie_pawj_medical_user_id")+"&currentModel=undefined&currentMenu=undefined&sysType=B":"?cookie_pawj_medical_user_id="+Utils.getCookie("cookie_pawj_medical_user_id")+"&currentModel=undefined&currentMenu=undefined&sysType=B",d+="&_timestamp="+(new Date).getTime();location.href=d},readedLicenseAgreement:function(){var c=this;var d={url:ContextClinc_Server+"employee/readedLicenseAgreement",method:"GET",dataType:"json"};var e=Utils.myAjaxHandler(d);e.done(function(f){if(f.data){b("#protocol").hide();b("#protocol").attr("isFinishGuide",1);c.currentUser.isFinishGuide=1}})},consignPrint:function(){print_model.consignPrint()},getVersionInfo:function(){var c=this;var f={};var d={type:"POST",contentType:"application/json; charset=utf-8",url:ContextClinc_Server+"version/getNewVersionRecord",data:JSON.stringify(f),dataType:"json",async:true};var e=Utils.myAjaxHandler(d);e.done(function(j){if(j.errorCode==a){var h=j.data.isShow;var i=j.data.versionId;if(h==0){b("#update-info-bg").hide()}else{if(h==1){c.versionInfoEvent(i);b("#update-info-bg").show();var g=b("#update-info");g.css({top:(b(window).height()-g.height())/2,right:(b(window).width()-g.width())/2})}}}else{b.paError(j.errorMessage)}}).fail(function(g){b.paError("请求异常",null)}).always(function(){})},versionInfoEvent:function(c){b(".experience-btn, .experience-close-btn").off("mouseup").on("mouseup",function(){var f={versionId:c};var d={type:"POST",contentType:"application/x-www-form-urlencoded",url:ContextClinc_Server+"version/addViewVersionRecord",data:f,dataType:"json",async:true};var e=Utils.myAjaxHandler(d);e.done(function(g){if(g.errorCode==a){b("#update-info-bg").hide()}else{b.paError(g.errorMessage)}}).fail(function(g){b.paError("请求异常",null)}).always(function(){})})},_todayPatientMenu:function(){var c=this;b("#curPatCard").on("mouseenter",function(d){var f=setTimeout(function(){if(c.DwsMenuCode=="HZZX"){if(!c.isLoadingList){c.reloadPatDropDown()}else{b("#slide_box").show();c.initSlideBoxHeight()}}},600);b("#curPatCard").on("mouseleave",function(i){if(b(".xdsoft_datetimepicker").css("display")=="block"){return}else{b("#slide_box").hide()}var g=b("#patListDropDown");clearTimeout(f);var h=b("#patDropStatus");h.removeClass("pat-drop-status-open");h.addClass("pat-drop-status-close")})});b(".left-arrow").off("click").on("click",function(){if(c.isMenuMove){return false}c.isMenuMove=true;c.rollRight(b(".menuBox"))});b(".right-arrow").off("click").on("click",function(){if(c.isMenuMove){return false}c.isMenuMove=true;c.rollLeft(b(".menuBox"))});b("#dd-ctrl").off("click").on("click",function(){var g=b(this);g.attr("class","dot-active");b(document).off("click").on("click",function(i){if(b(i.target).attr("id")!=="dd-ctrl"){k.addClass("dsn");g.hasClass("dsn")?g.attr("class","dot-more dsn"):g.attr("class","dot-more")}});b(window.frames[0].document).off("click").on("click",function(){k.addClass("dsn");g.attr("class","dot-more")});var f=b(".menuBox li:gt("+(parseInt(c.getMenuCounts())-1)+")");var k=b(".menu-dd").empty().removeClass("dsn");for(var e=0,d=f.length;e<d;e++){var h=f[e];var j=b("<li>"+b(h).text()+"</li>");j.attr({id:"ex_"+b(h).attr("id"),menu:b(h).attr("menu")}).off("click").on("click",function(){var i=b(this).attr("id");i=i.split("ex_")[1];b(".menuBox").find("#"+i).prependTo(b(".menuBox"));b("#"+i).click();k.addClass("dsn");g.attr("class","dot-more")}).appendTo(k)}})},emExamineInfo:function(g){var d=this;var f={empiId:g};var c={method:"POST",contentType:"application/json",url:ContextClinc_Server+"empi/examine",dataType:"json",data:JSON.stringify(f)};var e=Utils.myAjaxHandler(c);e.done(function(j){var i=j.errorCode;if(i==a){var h=j.data;if(h){b("#slide_doctor_drop")}else{b("#allergiesHistory").text("-");b("#personalHistory").text("-")}}}).fail(function(h){}).always(function(){})},getMenuCounts:function(){var c=b("#sub-menu").width();return Math.floor(c/80)},reloadPatDropDown:function(){var c=this;var e=b("#patListDropDown");e.empty();var g={params:{curDate:c.curDate,TREATMENT_STATE:1}};var d={url:ContextClinc_Server+"patientList/getWaitAndVisitPatListByParam",dataType:"json",data:JSON.stringify(g),contentType:"application/json"};var f=Utils.myAjaxHandler(d);f.done(function(h){var o=h.data;var p=h.errorMessage;var s=h.errorCode;if(s!="E0000000"){b.paError("失败："+s+"，"+p);return}var v=b("<ul></ul>");var t=b("<li></li>");var n=c.treatmentStateEnum.WAITING;for(var m=0;m<o.length;m++){var l=o[m];var j=Utils.getPersonAccurateAge(l.PATIENT_BIRTH_DATE);if(l.TREATMENT_STATE==c.treatmentStateEnum.WAITING){if(m==0){t=b("<li class='pat-list-dropdown-title'>候诊中</li>");n=c.treatmentStateEnum.WAITING;v.append(t)}t=b("<li class='pat-list-dropdown-info'></li>");var k=b("<div class='pat-photo' />");var q=b("<div class='pat-name-li'></div>");q.text(l.PATIENT_NAME);q.attr("title",l.PATIENT_NAME);var u=b("<div class='pat-visit-li'></div>");u.text("接诊");u.data("EMPI_ID",l.EMPI_ID);u.data("TRIAGE_ID",l.TRIAGE_ID);u.data("RECORD_ID",l.APPT_RECORD_ID);u.data("PATIENT_NAME",l.PATIENT_NAME);u.data("PATIENT_SEX",l.PATIENT_SEX);u.data("PATIENT_AGE",j);u.data("PATIENT_AGE",j);u.data("PATIENT_SEX_NAME",c.sexEnum[l.PATIENT_SEX]);u.data("PAYMENT_TYPE_ID",l.PAYMENT_TYPE_ID);u.data("PAYMENT_TYPE_NAME",l.PAYMENT_TYPE_NAME);u.data("VISIT_TYPE",l.VISIT_TYPE);u.data("DEPARTMENT_ID",l.DEPARTMENT_ID);u.data("MDREC_NO","");u.data("DOCTOR_ID",l.DOCTOR_ID);u.data("DOCTOR_NAME",l.DOCTOR_NAME);u.off("click").on("click",function(){b("#slide_box").hide();if(b(this).data("DOCTOR_ID")&&b(this).data("DOCTOR_NAME")){c.log("登记医生存在,医生:"+l.DOCTOR_NAME);c.visitPatient(b(this),b(this).data("DOCTOR_ID"),b(this).data("DOCTOR_NAME"))}else{c.log("无登记医生，且当前用户非医生");c.visitPatient(b(this),"","")}});t.append(k);t.append(q);t.append(u);v.append(t)}else{if(l.TREATMENT_STATE==c.treatmentStateEnum.VISITING){if(m==0||n!=l.TREATMENT_STATE){t=b("<li class='pat-list-dropdown-title'>治疗中</li>");n=c.treatmentStateEnum.VISITING;v.append(t)}t=b("<li class='pat-list-dropdown-info'></li>");var k=b("<div class='pat-photo' />");var q=b("<div class='pat-name-li'></div>");q.text(l.PATIENT_NAME);q.attr("title",l.PATIENT_NAME);var u=b("<div class='pat-visit-li border_theme_color'></div>");u.text("查看");u.data("ACOGRAPHY_ID",l.ACOGRAPHY_ID);u.data("EMPI_ID",l.EMPI_ID);u.data("TRIAGE_ID",l.TRIAGE_ID);u.data("RECORD_ID",l.APPT_RECORD_ID);u.data("PATIENT_NAME",l.PATIENT_NAME);u.data("PATIENT_SEX",l.PATIENT_SEX);u.data("PATIENT_AGE",j);u.data("PATIENT_SEX_NAME",c.sexEnum[l.PATIENT_SEX]);u.data("PAYMENT_TYPE_ID",l.PAYMENT_TYPE_ID);u.data("PAYMENT_TYPE_NAME",l.PAYMENT_TYPE_NAME);u.data("VISIT_TYPE",l.VISIT_TYPE);u.data("TREATMENT_STATE",l.TREATMENT_STATE);u.data("MDREC_NO","");u.off("click").on("click",function(){b("#slide_box").hide();c.viewPat(b(this))});t.append(k);t.append(q);t.append(u);v.append(t)}}}if(o.length>8){e.removeClass("pat-list-dropdown").addClass("pat-list-dropdown-withscroll")}else{e.removeClass("pat-list-dropdown-withscroll").addClass("pat-list-dropdown")}e.append(v.children());if(o.length>0){var r=b("#patDropStatus");r.removeClass("pat-drop-status-close");r.addClass("pat-drop-status-open")}c.initSlideBoxHeight();c.isLoadingList=true}).fail(function(h){b.paError("获取数据失败!");c.isLoadingList=false}).always()},visitPatient:function(l,n,j){var h=this;var f=l.data("EMPI_ID");var o=l.data("PAYMENT_TYPE_ID");var e=l.data("PAYMENT_TYPE_NAME");var u=l.data("VISIT_TYPE");var q=l.data("TRIAGE_ID");var c=l.data("RECORD_ID");var d=l.data("DEPARTMENT_ID");var g=l.data("PATIENT_NAME");var k=l.data("PATIENT_SEX");var t=l.data("PATIENT_SEX_NAME");var p=l.data("PATIENT_AGE");var m=l.data("IS_YB_REG");var s={dwsAcography:{empiId:f,paymentTypeId:o,paymentTypeName:e,treatmentType:u,treatmentState:1,triageId:q,recordId:c,departmentId:d}};var r={url:ContextClinc_Server+"docWorkSta/saveVisitPatInfoByParam",dataType:"json",data:JSON.stringify(s),contentType:"application/json",showMask:true};var i=Utils.myAjaxHandler(r);i.done(function(v){var y=v.data;var w=v.errorMessage;var x=v.errorCode;if(x!="E0000000"){if(x=="E2SP0113"){b.paError(w)}else{b.paError("失败："+x+"，"+w)}return}h.patientInfo={ACOGRAPHY_ID:y,RECORD_ID:c,TRIAGE_ID:q,EMPI_ID:f,PATIENT_NAME:g,PATIENT_SEX:k,PATIENT_SEX_NAME:t,PATIENT_AGE:p,TREATMENT_STATE:h.treatmentStateEnum.VISITING,curDate:h.curDate,IS_YB_REG:m,doctorId:n,doctorName:j};h.generateDwsBar(null,h.patientInfo)}).fail(function(v){b.paError("保存接诊记录失败!")})},generateDwsBar:function(h,e){var m=this;if(e!=undefined&&e!=null){var f=e.doctorId;if(e.curDate){m.curDate=e.curDate}else{m.curDate=new Date().Format("yyyy-MM-dd")}if(e.menuCode){m.DwsMenuCode=e.menuCode}var j=b("#patName");j.text(e.PATIENT_NAME);j.attr("title",e.PATIENT_NAME);var i=e.PATIENT_SEX_NAME+" | "+e.PATIENT_AGE;var k=b("#patOtherInfo");k.text(i);k.attr("title",i);var g=b("#patStatus");g.text(e.TREATMENT_STATE==m.treatmentStateEnum.WAITING?"候诊中":e.TREATMENT_STATE==m.treatmentStateEnum.VISITING?"治疗中":"已完成");var c=b("#btnFinishVisit");c.data("IS_YB_REG",e.IS_YB_REG);if(e.TREATMENT_STATE==m.treatmentStateEnum.WAITING){c.html("<span class='icon_visit_finish'></span>接诊");c.data("EMPI_ID",e.EMPI_ID);c.data("TRIAGE_ID",e.TRIAGE_ID);c.data("RECORD_ID",e.RECORD_ID);c.data("PATIENT_NAME",e.PATIENT_NAME);c.data("PATIENT_SEX",e.PATIENT_SEX);c.data("PATIENT_AGE",e.PATIENT_AGE);c.data("PATIENT_SEX_NAME",m.sexEnum[e.PATIENT_SEX]);c.data("PAYMENT_TYPE_ID",e.PAYMENT_TYPE_ID);c.data("PAYMENT_TYPE_NAME",e.PAYMENT_TYPE_NAME);c.data("VISIT_TYPE",e.VISIT_TYPE);c.data("DEPARTMENT_ID",e.DEPARTMENT_ID);c.data("MDREC_NO","");c.data("DOCTOR_ID",e.doctorId);c.data("DOCTOR_NAME",e.doctorName);c.off("click").on("click",function(){var p=userInfo_aclc.clinicParams;var r=0;for(var q in p){if(p[q].parameterCode=="3004"){r=p[q].parameterValue;continue}}if(r==1){if(config_cache.getCache("medical_user_data").employee.employeePostCode!="ZW26001"){b.paWarn("仅医生可接诊！");return}}if(b(this).data("DOCTOR_ID")&&b(this).data("DOCTOR_NAME")){m.log("1.[接诊]-[登记医生ID:]"+b(this).data("DOCTOR_ID")+" [登记医生Name:]"+b(this).data("DOCTOR_NAME"));m.visitPatient(b(this),b(this).data("DOCTOR_ID"),b(this).data("DOCTOR_NAME"))}else{m.log("1.[接诊]-[登记医生ID:]"+b(this).data("DOCTOR_ID")+" [登记医生Name:]"+b(this).data("DOCTOR_NAME"));m.visitPatient(b(this),"","")}})}else{if(e.TREATMENT_STATE==m.treatmentStateEnum.VISITING){c.html("<span class='icon_visit_finish'></span>完成就诊");c.data("ACOGRAPHY_ID",e.ACOGRAPHY_ID);c.data("TRIAGE_ID",e.TRIAGE_ID);c.data("RECORD_ID",e.RECORD_ID);c.data("DOCTOR_ID",e.doctorId);c.data("DOCTOR_NAME",e.doctorName);c.off("click").on("click",function(){m.finishPatVisit(b(this))})}else{if(e.TREATMENT_STATE==m.treatmentStateEnum.FINISH){var l=e.MODIFY_DATE;var d=new Date();if(d<=l+86400000){c.html("<span class='icon_visit_finish'></span>重新接诊");c.data("ACOGRAPHY_ID",e.ACOGRAPHY_ID);c.data("EMPI_ID",e.EMPI_ID);c.data("TRIAGE_ID",e.TRIAGE_ID);c.data("RECORD_ID",e.APPT_RECORD_ID);c.data("PATIENT_NAME",e.PATIENT_NAME);c.data("PATIENT_SEX",e.PATIENT_SEX);c.data("PATIENT_AGE",e.PATIENT_AGE);c.data("PATIENT_SEX_NAME",m.sexEnum[e.PATIENT_SEX]);c.data("MDREC_NO","");c.data("DOCTOR_ID",e.doctorId);c.data("DOCTOR_NAME",e.doctorName);c.off("click").on("click",function(){var p=userInfo_aclc.clinicParams;var r=0;for(var q in p){if(p[q].parameterCode=="3004"){r=p[q].parameterValue;continue}}if(r==1){if(config_cache.getCache("medical_user_data").employee.employeePostCode!="ZW26001"){b.paWarn("仅医生可接诊！");return}}if(b(this).data("DOCTOR_ID")&&b(this).data("DOCTOR_NAME")){m.log("1.[重新接诊]-[就诊医生ID:]"+b(this).data("DOCTOR_ID")+" [就诊医生Name:]"+b(this).data("DOCTOR_NAME"));m.reVisitPatient(b(this),b(this).data("DOCTOR_ID"),b(this).data("DOCTOR_NAME"))}else{m.log("1.[重新接诊]-[就诊医生ID:]"+b(this).data("DOCTOR_ID")+" [就诊医生Name:]"+b(this).data("DOCTOR_NAME"));m.reVisitPatient(b(this),"","")}})}else{c.text("")}}}}var o={url:ContextClinc_Server+"session/menu/list",dataType:"json",showMask:true};var n=Utils.myAjaxHandler(o);n.done(function(p){m.rightMenuData=p;m.patientInfo=e;m.dealDwsBar(p,e,h);m.initSlideBoxHeight();var s=config_cache.getCache("medical_user_data").employee.employeeId;var t=e.EMPI_ID;var q=e.IS_YB_REG;var r={acographyId:e.ACOGRAPHY_ID,empiId:e.EMPI_ID};modify_visitDoctor_js.initLabel();b("#label_box").empty();if(e.TREATMENT_STATE==m.treatmentStateEnum.WAITING){m.log("[无就诊记录]");b("#zhuanzhen").off("click");b("#fuzheng").off("click");b("#label_box").addClass("dsn");b("#treatmentDate").val("").attr("disabled","disabled");b(".slide_doctor_drop_box").addClass("disabled");b("#slide_doctor_drop").val("");b("#totalMoney").text("-");b("#oweMoney").text("-");b("#vipCard").text("-");b("#vipCardNum").text("-");b("#balanceMoney").text("-")}else{if(e.TREATMENT_STATE==m.treatmentStateEnum.VISITING){if(e.ACOGRAPHY_ID!=null&&e.ACOGRAPHY_ID!=""){m.log("2.[有就诊记录]-[就诊记录ID:]"+e.ACOGRAPHY_ID);b("#label_box").removeClass("dsn");b("#treatmentDate").val("").removeAttr("disabled","disabled");b(".slide_doctor_drop_box").removeClass("disabled");b("#slide_doctor_drop").val("");var u=false;if(config_cache.getCache("medical_user_data")&&config_cache.getCache("medical_user_data").employee&&config_cache.getCache("medical_user_data").employee.employeePostCode=="ZW26001"){u=true;m.log("3.[当前用户是医生标记] [就诊记录ID:"+r.acographyId+"] [empiId:"+r.empiId+"] [employeeId:"+s+"] [IS_YB_REG:"+q+"]");modify_visitDoctor_js.queryDoctor(r,s,t,q)}else{if(f){m.log("3.[当前用户不是医生标记 有登记医生] [就诊记录ID:"+r.acographyId+"] [empiId:"+r.empiId+"] [doctorid:"+f+"] [IS_YB_REG:"+q+"]");modify_visitDoctor_js.queryDoctor(r,f,t,q)}else{m.log("3.[当前用户不是医生标记 且没有登记医生] [就诊记录ID:"+r.acographyId+"] [empiId:"+r.empiId+"]  [IS_YB_REG:"+q+"]");modify_visitDoctor_js.queryDoctor(r,"",t,q)}}modify_visitDoctor_js.bindClick(e.ACOGRAPHY_ID)}else{m.log("[无就诊记录]");b("#zhuanzhen").off("click");b("#fuzheng").off("click");b("#label_box").addClass("dsn");b("#treatmentDate").val("").attr("disabled","disabled");b(".slide_doctor_drop_box").addClass("disabled");b("#slide_doctor_drop").val("");b("#totalMoney").text("-");b("#oweMoney").text("-");b("#vipCard").text("-");b("#vipCardNum").text("-");b("#balanceMoney").text("-")}}else{if(e.TREATMENT_STATE==m.treatmentStateEnum.FINISH){if(e.ACOGRAPHY_ID!=null&&e.ACOGRAPHY_ID!=""){m.log("2.[有就诊记录]-[就诊记录ID:]"+e.ACOGRAPHY_ID);b("#label_box").removeClass("dsn");b("#treatmentDate").val("").removeAttr("disabled","disabled");b(".slide_doctor_drop_box").removeClass("disabled");b("#slide_doctor_drop").val("");var u=false;if(config_cache.getCache("medical_user_data")&&config_cache.getCache("medical_user_data").employee&&config_cache.getCache("medical_user_data").employee.employeePostCode=="ZW26001"){u=true;m.log("3.[当前用户是医生标记] [就诊记录ID:"+r.acographyId+"] [empiId:"+r.empiId+"] [employeeId:"+s+"] [IS_YB_REG:"+q+"]");modify_visitDoctor_js.queryDoctor(r,s,t,q)}else{if(f){m.log("3.[当前用户不是医生标记 有登记医生] [就诊记录ID:"+r.acographyId+"] [empiId:"+r.empiId+"] [doctorid:"+f+"] [IS_YB_REG:"+q+"]");modify_visitDoctor_js.queryDoctor(r,f,t,q)}else{m.log("3.[当前用户不是医生标记 且没有登记医生] [就诊记录ID:"+r.acographyId+"] [empiId:"+r.empiId+"]  [IS_YB_REG:"+q+"]");modify_visitDoctor_js.queryDoctor(r,"",t,q)}}modify_visitDoctor_js.bindClick(e.ACOGRAPHY_ID)}else{m.log("[无就诊记录]");b("#zhuanzhen").off("click");b("#fuzheng").off("click");b("#label_box").addClass("dsn");b("#treatmentDate").val("").attr("disabled","disabled");b(".slide_doctor_drop_box").addClass("disabled");b("#slide_doctor_drop").val("");b("#totalMoney").text("-");b("#oweMoney").text("-");b("#vipCard").text("-");b("#vipCardNum").text("-");b("#balanceMoney").text("-")}b("#zhuanzhen").off("click");b("#fuzheng").off("click");b("#treatmentDate").attr("disabled","disabled");b(".slide_doctor_drop_box").addClass("disabled")}}}}).fail(function(p){b.paWarn("初始化菜单调用失败!")})}},initSlideBoxHeight:function(){var c=b(window).height();if(b("#set_bar_btn").hasClass("slide_box_float")){b("#slide_box").css({"max-height":c-145,height:"auto","box-shadow":"2px 2px 20px rgba(0,0,0,0.3)","border-right":"none"});b("#patListDropDown").css("max-height",c-165-b(".slide_box_top").height())}else{b("#slide_box").css({"max-height":"none",height:c-105,"box-shadow":"none","border-right":"1px solid #dfdfdf"});b("#patListDropDown").css("max-height",c-125-b(".slide_box_top").height())}},dealDwsBar:function(e,y,r){var p=this;var n=b("#finishVisit");var c=b("#btnFinishVisit");if(e){if(!e.data.menu&&!e.data.menu.length){return}var d=null;for(var t=0;t<e.data.menu.length;t++){var k=e.data.menu[t];if(k.code==p.DwsMenuCode){d=k;break}}var h=d.subMenus;if(!h&&!h.length){return}var u=b("#sub-menu").empty();u.removeClass("tab-nav");u.addClass("tab-nav-submenu");b("#submenuOuter").addClass("sub-menu-outer").show();if(menuForIndex.isFloatBar){b("#r-main").removeClass("has_slide_box_fixed")}else{b("#r-main").addClass("has_slide_box_fixed")}var w="";var x="";if(h&&h.length>1){b("#curPatCard").removeClass("dsn");p.reloadPatDropDown();if(y.TREATMENT_STATE==p.treatmentStateEnum.WAITING||y.TREATMENT_STATE==p.treatmentStateEnum.VISITING||y.TREATMENT_STATE==p.treatmentStateEnum.FINISH){var q=y.MODIFY_DATE;var z=new Date();if(y.TREATMENT_STATE==p.treatmentStateEnum.FINISH&&z>q+86400000){n.addClass("dsn")}else{n.removeClass("dsn")}}else{c.text("");n.addClass("dsn")}u.show();var l=false,f=false,v=b("<ul class='menuBox'></ul>");var g=0;for(var s=0,o=h.length;s<o;s++){(function(j){var A=h[j];if(A.display==0){var i=b('<li id="'+A.code+j+'"  menu="'+A.code+'">'+A.name+"</li>");if(!l&&r=="treatment"&&(A.code=="OPC_DWS04"||A.code=="DTS_DWS05"||A.code=="TCM_DWS04")){l=true;i.addClass("selected");w=A.linkUrl}if(!f){f=true;i.addClass("selected2");x=A.linkUrl}v.append(i);i.off("click").on("click",function(){var B=A.linkUrl+"?empiId="+y.EMPI_ID+"&acographyId="+y.ACOGRAPHY_ID+"&treatmentState="+y.TREATMENT_STATE+"&triageId="+y.TRIAGE_ID+"&recordId="+y.RECORD_ID+"&sex="+y.PATIENT_SEX+"&isYbReg="+y.IS_YB_REG;b(document).trigger("topSwitch",[B,A.code+j])})}else{g++}})(s)}if(h.length-g>p.getMenuCounts()){b(".left-arrow").removeClass("dsn");b("#dd-ctrl").removeClass("dsn");b(".right-arrow").removeClass("dsn")}u.append(v);if(r!=null&&r!=""&&r!="treatment"){b(document).trigger("topSwitch",[r])}else{if(!w){w=x;u.find(".selected2").removeClass("selected2").addClass("selected")}b(document).trigger("topSwitch",[w+"?empiId="+y.EMPI_ID+"&acographyId="+y.ACOGRAPHY_ID+"&treatmentState="+y.TREATMENT_STATE+"&triageId="+y.TRIAGE_ID+"&recordId="+y.RECORD_ID+"&sex="+y.PATIENT_SEX+"&isYbReg="+y.IS_YB_REG])}}else{if(h&&h.length==1){var m=h[0];u.attr("menu",m.code).hide()}else{u.hide()}}}},viewPat:function(d){var c=this;c.patientInfo={ACOGRAPHY_ID:d.data("ACOGRAPHY_ID"),RECORD_ID:d.data("RECORD_ID"),EMPI_ID:d.data("EMPI_ID"),PATIENT_NAME:d.data("PATIENT_NAME"),PATIENT_SEX:d.data("PATIENT_SEX"),PATIENT_SEX_NAME:d.data("PATIENT_SEX_NAME"),PATIENT_AGE:d.data("PATIENT_AGE"),TREATMENT_STATE:d.data("TREATMENT_STATE"),PAYMENT_TYPE_ID:d.data("PAYMENT_TYPE_ID"),PAYMENT_TYPE_NAME:d.data("PAYMENT_TYPE_NAME"),VISIT_TYPE:d.data("VISIT_TYPE"),TRIAGE_ID:d.data("TRIAGE_ID"),curDate:c.curDate};c.generateDwsBar(null,c.patientInfo)},finishPatVisit:function(e){var d=this;var g=window.frames&&window.frames[0]&&(window.frames[0].finishPatFlag===false);if(g){var c={msg:"当前界面操作未保存，请先保存。",hideCancel:true,saveTxt:"确定",onYes:function(){}};b.paConfirm(c)}else{var f={msg:"是否确定完成就诊？",cancelTxt:"取消",saveTxt:"确定",onYes:function(){var i={dwsAcography:{acographyId:e.data("ACOGRAPHY_ID"),triageId:e.data("TRIAGE_ID"),recordId:e.data("RECORD_ID")}};var j={url:ContextClinc_Server+"docWorkSta/saveFinishVisitPatInfoByParam",dataType:"json",data:JSON.stringify(i),contentType:"application/json",showMask:true};var h=Utils.myAjaxHandler(j);h.done(function(k){var l=k.errorMessage;var m=k.errorCode;if(m!="E0000000"){if(m=="E2SP0113"){b.paError(l)}else{b.paError("失败："+l)}return}if(k.data.openId!=undefined&&k.data.openId!=null&&k.data.openId!=""){d.sendWEIXINMessage(k.data)}d.completeQueueVisitGe();b.paSuccess("就诊已完成!");b("#r-main").removeClass("has_slide_box_fixed");b(document).trigger("topCross",["patient_center"])}).fail(function(k){b.paError("结束就诊失败!")})}};b.paConfirm(f)}},completeQueueVisitGe:function(){var c=this;var f={doctorId:config_cache.getCache("medical_user_data").employee.employeeId,clinicId:config_cache.getCache("medical_user_data").clinicId};var d={method:"POST",contentType:"application/json; charset=utf-8",url:ContextClinc_Server+"patientList/completeQueueVisit",dataType:"json",data:JSON.stringify(f)};var e=Utils.myAjaxHandler(d);e.done(function(h){var g=h.errorCode;if(g!="E0000000"){b.paError("排队信息同步失败");return}}).fail(function(g){b.paError("排队信息同步失败!")}).always(function(){})},reVisitPatient:function(e,c,i){var d=this;var g={dwsAcography:{empiId:e.data("EMPI_ID"),recordId:e.data("RECORD_ID"),triageId:e.data("TRIAGE_ID"),acographyId:e.data("ACOGRAPHY_ID")}};var h={url:ContextClinc_Server+"docWorkSta/saveReVisitPatInfoByParam",dataType:"json",data:JSON.stringify(g),contentType:"application/json",showMask:true};var f=Utils.myAjaxHandler(h);f.done(function(j){var k=j.errorMessage;var l=j.errorCode;if(l!="E0000000"){if(l=="E2SP0113"){b.paError(k)}else{b.paError("失败："+l+"，"+k)}return}if(e!=undefined&&e!=null){parent.$(parent.document).trigger("topGenerateDwsBar",[null,{ACOGRAPHY_ID:e.data("ACOGRAPHY_ID"),TRIAGE_ID:e.data("TRIAGE_ID"),RECORD_ID:e.data("RECORD_ID"),EMPI_ID:e.data("EMPI_ID"),PATIENT_NAME:e.data("PATIENT_NAME"),PATIENT_SEX:e.data("PATIENT_SEX"),PATIENT_SEX_NAME:e.data("PATIENT_SEX_NAME"),PATIENT_AGE:e.data("PATIENT_AGE"),TREATMENT_STATE:d.treatmentStateEnum.VISITING,curDate:d.curDate,IS_YB_REG:e.data("IS_YB_REG"),doctorId:c,doctorName:i}])}}).fail(function(j){b.paError("重新接诊失败!")})},rollLeft:function(c,d){var f=this;var e=d||0;if(e<6){c.animate({marginLeft:"-80px"},200,"linear",function(){c.css({marginLeft:"0px"});b(".menuBox li:first").appendTo(c);f.rollLeft(c,e+1)})}else{f.isMenuMove=false}},rollRight:function(c,d){var f=this;var e=d||0;if(e<6){b(".menuBox li:last").prependTo(c);c.css({marginLeft:"-80px"});c.animate({marginLeft:"0px"},200,"linear",function(){f.rollRight(c,e+1)})}else{f.isMenuMove=false}},refreshWebSession:function(){var c=this;(function(d){var h=arguments.callee;var g=[Context_MEC_Web,Context_CCM_Web,Context_REFERRAL_Web,Context_CLINICEXT_Web,Context_SCRM_Web];var f=b("#web-sn");var e=(f&&f.length>0)?f:b(document.createElement("IFRAME"));e.css("display","none");e.attr("id","web-sn");e.appendTo("body");e.attr("src",g[d]+"blank.html");e.load((function(j){return function(){if(j>g.length-2){e.remove();return false}else{j++;h(j)}}})(d))})(0);setTimeout(function(){c.refreshWebSession()},6600000)},initTcmAdvice:function(){var c={url:ContextClinc_Server+"TCMPrescription/getTcmAdviceByAdviceType",dataType:"json",showMask:false,async:true};var d=Utils.myAjaxHandler(c);d.done(function(e){if(e.errorCode==a){if(e.data&&e.data.length>0){window.localStorage.setItem("tcmAdivice",JSON.stringify(e.data))}}}).fail(function(e){b.paError("中医医嘱查询失败!")}).always(function(){})},initDrugFrequency:function(){var d={};var c={type:"GET",method:"GET",url:ContextClinc_Server+"combox/drugFrequency",dataType:"json",data:null,async:true};var e=Utils.myAjaxHandler(c);e.done(function(f){if(f!=null&&f.errorCode==a){window.localStorage.setItem("drugFrequency",JSON.stringify(f.data))}else{b.paError(f.errorMessage)}}).fail(function(f){b.paError("操作失败!")}).always(function(){})},initMdDict:function(c){var e=["T25","T27"];var g={dicts:e};var d={method:"GET",url:ContextClinc_Server+"mdDictItem/getDicts",dataType:"json",data:g,showMask:false,async:true};var f=Utils.myAjaxHandler(d);f.done(function(h){if(h.errorCode==a){window.localStorage.setItem("md_dict",JSON.stringify(h.data))}}).fail(function(h){}).always(function(){})},sendWEIXINMessage:function(g){if(g){var i=Utils.trimObj(g.clinicName);var d=Utils.trimObj(g.addressName);var c=Utils.trimObj(g.visitName);var e=Utils.trimObj(g.openId);var j=Utils.trimObj(g.acographySerialNum);var k=Utils.trimObj(g.payMoney);var f=Utils.trimObj(g.addDate);if(i&&d&&j&&k&&c&&f&&e){var h={clinicName:i,addressName:d,acographySerialNum:j,payMoney:k,visitName:c,addDate:f,openId:e};var m={type:"POST",contentType:"application/json; charset=utf-8",url:WXServicePath+"TempNoPay",data:JSON.stringify(h),dataType:"json"};var l=Utils.myAjaxHandler(m);l.done(function(n){if(n){}}).fail(function(n){}).always(function(){})}}},queryWsMessageCounter:function(){var c={type:"POST",url:ContextClinc_Server+"messagews/queryCounter",showMask:false,dataType:"json"};var d=Utils.myAjaxHandler(c);d.done(function(f){if(!f||!f.data){return}for(var e in f.data){if(!f.data[e]){f.data[e]=0}if(e==2){b(".message_remind_box .message_remind_appt_index span").text(f.data[e]).parent().show()}else{if(e==3){b(".message_remind_box .message_remind_medicine_index span").text(f.data[e]).parent().show()}else{if(e==1){if(window.frames.paFrame.isOpenChat){if(!window.frames.paFrame.isOpenChat(data.openId)){b(".message_remind_box .message_remind_wechat_index span").text(f.data[e]).parent().show()}}else{b(".message_remind_box .message_remind_wechat_index span").text(f.data[e]).parent().show()}}else{if(e==9){b(".message_remind_box .message_remind_feedback_index span").text(f.data[e]).parent().show()}}}}}menuForIndex.calculateMessageRemindCount()}).fail(function(e){}).always(function(){})},initIndexTopWsMessageEvent:function(){b(".message_remind_box .message_remind_ul li[data-message-type]").on("click",function(){var d=b(this).attr("data-message-type");if(d=="2"){d="12"}else{if(d=="3"){d="13"}else{if(d=="4"){d="11"}else{if(d=="9"){d="14"}else{return}}}}var c={type:"POST",url:ContextClinc_Server+"messagews/updateReadList/"+d,dataType:"json"};var e=Utils.myAjaxHandler(c);e.done(function(f){}).fail(function(f){}).always(function(){});menuForIndex.clickWebsocketMessage(b(this).attr("data-message-type"));return false})},log:function(c){if(window.console){console.log(c)}}};new ClinicIndex()})(jQuery);var WJDRIVER_VERSION={WJBOX:101,ID_CARDR_EADER:100,MEDICAL_CARD_EADER:100,EMPLOYEE_CARD_READER:100};RESABLEMECDTION_RESULTCODE={SUCCESS:"000000",PARAMETER_MISS:"100001",SERVICE_ERROR:"100500",UNKNOWN_ERROR:"999999",PARAMETER_ERROR:"100101",VERSION_NOT_AUTHORIZED:"100102",DRUG_HAS_NO_INSTRUCTIONS:"100103",IRREGULAR_CONFIGURATION:"300101",INCOMPLETE_INFORMATION:"300102"};