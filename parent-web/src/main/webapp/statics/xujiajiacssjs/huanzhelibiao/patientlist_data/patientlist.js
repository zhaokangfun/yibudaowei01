var patientListController,ybDJObj,ybReimburseObj;$(function(){patientListController=new PatientList();ybDJObj=new PatientYbTh(patientListController);ybReimburseObj=new ybReimburse();patientListController.main()});var visitTypeDicts=[{id:"1",txt:"初诊"},{id:"2",txt:"复诊"}];var PatientList=function(){this.sexArray={"1":"男","2":"女","3":"保密"};this.regModel=getRegisterMethod()};PatientList.prototype={main:function(){this._init();this.bindEvent();this.showHaveRegInfo()},_init:function(){var b=this;var c=[{id:"0",txt:"未分诊"},{id:"1",txt:"候诊中"},{id:"2",txt:"治疗中"},{id:"3",txt:"完成就诊"},{id:"4",txt:"已过号"}];var a={isNeedAll:true,isNeedClear:false};$("#visit_status").WJZSDropdown(c,a,function(d,e){});$("#visit_status").SelectWJZSDropdownFirstItem();b.setVisitDoctorList();b.setVisitDepartmentList();b.renderPatientRelDictData()},bindEvent:function(){var a=this;if(a.regModel==GUAHAO_REG){$("#table_th_charge").removeClass("dsn")}$(".senior_search_btn a").on("click",function(){$(".tab-content").toggleClass("has_senior_search");$(".senior_search_box").toggle();if($(this).hasClass("detail_more_down")){$(this).removeClass("detail_more_down").addClass("detail_more_up")}else{$(this).removeClass("detail_more_up").addClass("detail_more_down")}}),$("#btnSearch").on("click",function(){a.showHaveRegInfo()});$(".indate_list").datetimepicker({lang:"ch",format:"Y-m-d",timepicker:false,mask:false,onShow:function(){}});var b=new Date().Format("yyyy-MM-dd");$("#outDateStart").val(b);$("#outDateEnd").val(b);$("#keyWord").on("keyup",function(c){if(c.which==13){a.showHaveRegInfo()}});$("#warehousing_table").on("click",".edit-href",function(){a.editPageClick(this)});$("#warehousing_table").on("click",".delete-href",function(){a.deletePageClick(this)});$("#warehousing_table").on("click",".charge-href",function(){a.chargePageClick(this)});$("#warehousing_table").on("click",".print-href",function(){a.printPageClick(this)});$("#warehousing_table").on("click",".yb-reg",function(){a.ybRegister(this)});$("#warehousing_table").on("click",".yb-refund",function(){a.ybRefund(this)});$("#warehousing_table").on("click",".yb-reg-print",function(){a.ybPrint(this)});$("#warehousing_table").on("click",".yb-refund-print",function(){a.ybRefundPrint(this)})},getVisitStatusStr:function(a){if(a!=null){switch(a){case 0:return"未分诊";case 1:return"候诊中";case 2:return"治疗中";case 3:return"完成就诊";case 4:return"已过号";default:break}}},renderPatientRelDictData:function(){var b=["TAGS","PATSOURCE"];var d={dicts:b};var a={method:"GET",url:ContextClinc_Server+"patient/get_rel_patient_dicts",dataType:"json",data:d};var c=Utils.myAjaxHandler(a);c.done(function(i){if(i.errorCode=="E0000000"){var g=i.data;var h={idKey:"PAT_SOURCE_ID",txtKey:"PAT_SOURCE_NAME",isNeedClear:false,isNeedAll:true,isNeedThink:true};var f={idKey:"LABEL_ID",txtKey:"LABEL_NAME",isNeedClear:false,isNeedAll:true,};$("#patiSource").WJZSDropdown(g.patiSource,h,function(j,k){});$("#patiSource").SelectWJZSDropdownFirstItem();$("#patientLabs").WJZSDropdown(g.patiLabels,f,function(j,k){});$("#patientLabs").SelectWJZSDropdownFirstItem();var e={isNeedClear:false,isNeedAll:true,};$("#visitType").WJZSDropdown(visitTypeDicts,e,function(j,k){});$("#visitType").SelectWJZSDropdownFirstItem()}}).fail(function(e){}).always(function(){})},setVisitDoctorList:function(){var a=this;var b={url:ContextClinc_Server+"doctor/getClinicDoctorList",method:"POST",dataType:"json"};var c=Utils.myAjaxHandler(b);c.done(function(e){if(SUCCESSCODE==e.errorCode){var d={idKey:"EMPLOYEE_ID",txtKey:"EMPLOYEE_NAME",isNeedAll:true,isNeedClear:false,isNeedThink:true};$("#visit_doctor").WJZSDropdown(e.data,d,function(f,g){});$("#visit_doctor").SelectWJZSDropdownFirstItem()}else{$.paError(e.errorMessage,null)}}).fail(function(d){})},setVisitDepartmentList:function(){var a=this;var d={};var b={method:"POST",async:false,url:ContextClinc_Server+"apptSchedule/getAllApptDept",contentType:"application/json",dataType:"json",data:JSON.stringify(d)};var c=Utils.myAjaxHandler(b);c.done(function(f){if(SUCCESSCODE==f.errorCode){var e={idKey:"DEPT_ID",txtKey:"DEPT_NAME",isNeedAll:true,isNeedClear:false};$("#visit_department").WJZSDropdown(f.data,e,function(g,h){});$("#visit_department").SelectWJZSDropdownFirstItem()}else{$.paError(f.errorMessage,null)}}).fail(function(e){})},showHaveRegInfo:function(d,e){var a=this;var b={beginDate:($("#outDateStart").val()==""?"":$("#outDateStart").val()+" 00:00:00"),endDate:($("#outDateEnd").val()==""?"":$("#outDateEnd").val()+" 23:59:59"),keyword:$.trim($("#keyWord").val()),currentPage:(d==undefined||d==null)?1:d.currentPage,pageSize:10,visitStatus:$.trim($("#visit_status").attr("val")),visitDoctor:$.trim($("#visit_doctor").attr("val")),visitDepartment:$.trim($("#visit_department").attr("val")),visitType:$.trim($("#visitType").attr("val")),patientLab:$.trim($("#patientLabs").attr("val")),patientSource:$.trim($("#patiSource").attr("val"))};var c=$.extend({},d,b);c.ajaxopts={showMask:true,url:ContextClinc_Server+"empi/getPatinetRecordPage",type:"POST"};c.callback=function(i){$("#warehousing_table tr:gt(0)").remove();if(i.errorCode=="E0000000"){var f=i.data.dataSource;var h="";for(var g=0;g<f.length;g++){h+=a.addInboundListhtml(f[g])}$("#warehousing_table tr:gt(0)").remove();$("#warehousing_table tr:eq(0)").after(h)}else{$.paError("请求失败:"+i.errorMessage)}};$("#my-page").generatePagination(c)},addInboundListhtml:function(h){var c=this;var f="";f+="<tr>";var a=h.TREATMENT_TYPE!=null?h.TREATMENT_TYPE:"";var g=h.DOCTOR_ID!=null?h.DOCTOR_ID:"";var d=h.PATIENT_NAME!=null?h.PATIENT_NAME:"";var e=h.YB_BIZ_RECORD_ID!=null?h.YB_BIZ_RECORD_ID:"";var b=h.YB_BIZ_TREATMENT_COUNT!=null?h.YB_BIZ_TREATMENT_COUNT:"";f+="<td>"+(h.PATIENT_NO==null?"--":h.PATIENT_NO)+"</td>";f+='<td data-id = "'+h.EMPI_ID+'" data-triage="'+h.IS_TRIAGE+'" data-trigage-id="'+h.TRIAGE_ID+'" data-triage-type="'+a+'" data-department-id="'+h.DEPARTMENT_ID+'" data-doctor-id="'+g+'" data-miType-code="'+h.MI_TYPE_CODE+'" yb_biz_record_id="'+e+'" yb_biz_treatment_count="'+b+'" data-health-product="'+h.IS_HEALTH_PRODUCT_REG+'"> '+d+"</td>";f+="<td>"+this.sexArray[h.PATIENT_GENDER]+"</td>";f+="<td>"+Utils.getPersonAccurateAge(h.PATIENT_BIRTH_DATE)+"</td>";f+="<td>"+(h.MOBILE_PHONE_NUMBER==null?"--":h.MOBILE_PHONE_NUMBER)+"</td>";f+="<td>"+(h.PAT_SOURCE_NAME==null?"--":h.PAT_SOURCE_NAME)+"</td>";f+="<td>"+(h.TREATMENT_TYPE==null?"--":getTreateTypeName(h.TREATMENT_TYPE))+"</td>";f+="<td>"+(h.DOCTOR_NAME==null?"--":h.DOCTOR_NAME)+"</td>";f+="<td>"+(h.DEPARTMENT_NAME==null?"--":h.DEPARTMENT_NAME)+"</td>";f+="<td>"+(h.ADD_DATE==null?"--":new Date(h.ADD_DATE).Format("yyyy-MM-dd HH:mm:ss"))+"</td>";f+="<td>"+c.getVisitStatusStr(h.IS_TRIAGE)+"</td>";if(this.regModel==GUAHAO_REG){if(h.IS_REGISTRATION==1){if(h.IS_CHARGE==0){f+="<td>待收费</td>"}else{if(h.IS_CHARGE==1){f+="<td>已收费</td>"}else{if(h.IS_CHARGE==2){f+="<td>已退费</td>"}else{if(h.IS_CHARGE==4){f+="<td>收费中</td>"}else{if(h.IS_CHARGE==5){f+="<td>退费中</td>"}}}}}}else{f+="<td></td>"}}f+='<td><a href="javascript:void(0);" class="edit-href">修改</a>';if(h.IS_REGISTRATION==1&&this.regModel==GUAHAO_REG){if(h.IS_CHARGE==0){f+='<a href="javascript:void(0);" class="charge-href">收费</a>'}else{if(h.IS_CHARGE==1){f+='<a href="javascript:void(0);" class="print-href">打印挂号单</a>'}}}if(h.IS_TRIAGE==0||h.IS_TRIAGE==1&&h.IS_CHARGE==0){f+='<a href="javascript:void(0);" class="delete-href">删除</a>'}if(h.IS_YB_REG==1){if(h.BIZ_STATE==1||h.BIZ_STATE==2){if(c.isYbGhPrint(h.MI_TYPE_CODE)){f+='<a href="javascript:void(0);" class="yb-reg-print">医保挂号单打印</a>'}f+='<a href="javascript:void(0);" class="yb-refund">医保退号</a>'}}if(h.BIZ_STATE==3){if(c.isYbGhPrint(h.MI_TYPE_CODE)){f+='<a href="javascript:void(0);" class="yb-refund-print">医保退号单打印</a>'}}f+="</td></tr>";return f},editPageClick:function(g){var d=$(g).parents("tr").find("td[data-id]");var i=d.attr("data-id");var b=d.attr("data-triage");var a=d.attr("data-triage-type");var c=d.attr("data-trigage-id");var f=d.attr("data-department-id");f=f!=null?f:"";var h=d.attr("data-doctor-id");h=h!=null?h:"";location.href="patient_edit.html?id="+i+"&triageId="+c+"&triageStatus="+b+"&triageType="+a+"&departmentId="+f+"&doctorId="+h},deletePageClick:function(d){var c=this;var a=$(d).parents("tr").find("td[data-id]").attr("data-trigage-id");var f={triageId:a};var b={msg:"是否确认删除该条登记记录？",cancelTxt:"取消",saveTxt:"确认",onYes:function(){var e={method:"POST",contentType:"application/json; charset=utf-8",url:ContextClinc_Server+"empi/deletePatientRecord",dataType:"json",data:JSON.stringify(f)};var g=Utils.myAjaxHandler(e);g.done(function(h){if("E0000000"==h.errorCode){$.paSuccess("删除成功",null);c.showHaveRegInfo()}else{$.paError(h.errorMessage,null)}}).fail(function(h){$.paError("请求异常",null)}).always(function(){})}};$.paConfirm(b)},ybRegister:function(c){var b=this;var a=$(c).parents("tr").find("td[data-id]").attr("data-trigage-id");ydDj.doYbRegisterByTriage(a,function(d){if(d!=""){$.paAlert(d)}else{b.showHaveRegInfo()}})},ybRefund:function(g){var f=this;var a=$(g).parents("tr").find("td[data-id]").attr("data-trigage-id");var b=$(g).parents("tr").find("td[data-id]").attr("data-miType-code");var d=$(g).parents("tr").find("td[data-id]").attr("yb_biz_record_id");var c=$(g).parents("tr").find("td[data-id]").attr("yb_biz_treatment_count");var h={triageId:a,miTypeCode:b};if(b==MI_TYPE_ENUM.YB_SHENZHEN_NEW){if(c!=""&&c>0){showRefundPanel(a,d)}else{ybDJObj.ybMZTHOperate(h,function(e){f.showHaveRegInfo()})}}else{ybDJObj.ybMZTHOperate(h,function(e){f.showHaveRegInfo()})}},isYbGhPrint:function(a){if(a==null||a==""){return false}if(a==MI_TYPE_ENUM.YB_SHENZHEN||a==MI_TYPE_ENUM.YB_SHENZHEN_NEW){return true}return false},ybPrint:function(g){var f=this;var b=$(g).parents("tr").find("td[data-id]").attr("data-trigage-id");var a=($(g).parents("tr").find("td[data-id]").attr("data-miType-code"))||"";var i={triageId:b};if(a!=""){var c=MI_TYPE_ENUM.YB_SHENZHEN_NEW;if(c==a){i={triageId:b,miYbType:a}}}var d={url:ContextClinc_Server+"empi/getNurTriageYbPrintInfo",contentType:"application/json",dataType:"json",data:JSON.stringify(i),async:false,showMask:false};var h=Utils.myAjaxHandler(d);h.done(function(e){wjPrintUtils.getPrintSetting(wjPrintUtils.printFunction.YB_patientRegister,function(n,l){if(n==1){if(a==MI_TYPE_ENUM.YB_SHENZHEN_NEW){YBRegisterPrint.doPrint(e.data,"1")}else{Yb_Print_Model.registrationPrint(e.data)}}else{if(n==2){$.paSuccess("正在打印...");var j={registerInfo:e.data};var m=e.data.YB_FEE_INFO;var k={};if(m!=null){k=JSON.parse(m)}j.registerInfo.DNH=k.DNH;j.registerInfo.ACCOUNT=k.ACCOUNT;j.registerInfo.default_fee="0.0";wjPrintUtils.print(l,j,function(o){if(o.code!=SUCCESSCODE){$.paWarn(o.message)}})}else{$.paWarn("请先配置打印参数！")}}})}).fail(function(e){}).always(function(){})},ybRefundPrint:function(g){var f=this;var b=$(g).parents("tr").find("td[data-id]").attr("data-trigage-id");var a=($(g).parents("tr").find("td[data-id]").attr("data-miType-code"))||"";var i={triageId:b,};if(a!=""){var c=MI_TYPE_ENUM.YB_SHENZHEN_NEW;if(c==a){i={triageId:b,miYbType:a}}}var d={url:ContextClinc_Server+"empi/getNurTriageYbPrintInfo",contentType:"application/json",dataType:"json",data:JSON.stringify(i),async:false,showMask:false};var h=Utils.myAjaxHandler(d);h.done(function(e){if(a==MI_TYPE_ENUM.YB_SHENZHEN_NEW){YBRegisterPrint.doPrint(e.data,"2")}else{Yb_Print_Model.registrationRefundPrint(e.data)}}).fail(function(e){}).always(function(){})},printPageClick:function(b){var a=$(b).parents("tr").find("td[data-id]").attr("data-trigage-id");printRegister(a,true,true)},chargePageClick:function(c){var a=this;var f=$(c).parents("tr").find("td[data-id]");if(parseInt(f.attr("data-health-product"))==1){$.paAlert("当前为健康商品")}if(parseInt(f.attr("data-health-product"))==0){var b={method:"POST",url:ContextClinc_Server+"/empi/getChargeOperateParams",dataType:"json",contentType:"application/json;charset=utf-8",data:f.attr("data-trigage-id"),showMask:true};var d=Utils.myAjaxHandler(b);d.done(function(e){if(e.errorCode=="E0000000"&&e.data){var g=MI_TYPE_ENUM.YB_SHENZHEN_NEW;if(g==e.data.ybType){a.get_SZYB_TryParams(f,function(h){ybReimburseObj.saveYBGH(h,function(j){var i=j;e.data.yb_trial_data=h;$.extend(e.data.yb_trial_data,i);console.log("调用支付面板参数:"+JSON.stringify(e.data));a.showChargePannel(e.data)})})}else{a.showChargePannel(e.data)}}}).fail(function(e){}).always(function(){})}},showChargePannel:function(a){if(a!=""){chargePayPanel.window.initChargePay(a);$("#pay_pop").show()}},get_SZYB_TryParams:function(d,c){var a={method:"POST",url:ContextClinc_Server+"/empi/get_SZYB_TryParams",dataType:"json",contentType:"application/json;charset=utf-8",data:d.attr("data-trigage-id"),showMask:true};var b=Utils.myAjaxHandler(a);b.done(function(e){if(e.errorCode=="E0000000"&&e.data){if(c){var f=e.data;c(f)}}}).fail(function(e){}).always(function(){})},};function closeChargePay(){$("#pay_pop").hide()}function saveChargePaySuccess(a){$.paAlert("支付已完成");$("#pay_pop").hide();if(patientListController==null){patientListController=new PatientList()}patientListController.showHaveRegInfo()}function showRefundPanel(a,c){$("#refund_pop").show();var b={dataSource:"01",businessData:{triageId:a}};console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>.refund.params："+JSON.stringify(b));var d={triageId:a,ybBizRecordId:c};chargeRefundPanel.window.initChargeRefund(b,function(e){console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>.updateStatus.params："+JSON.stringify(d));updateThStatus(d,function(){$.paSuccess("退号成功！",null,function(){if(patientListController==null){patientListController=new PatientList()}patientListController.showHaveRegInfo()})});$("#refund_pop").hide()},function(e){$.paError(e.errorMessage);$("#refund_pop").hide()},function(){$("#refund_pop").hide()})}function updateThStatus(c,d){var a={method:"POST",url:ContextClinc_Server+"empi/updateYbReRegData",contentType:"application/json;charset=utf-8",data:JSON.stringify(c),dataType:"json",async:true,showMask:false};var b=Utils.myAjaxHandler(a);b.done(function(e){if(e!=null&&e.errorCode==SUCCESSCODE){if(d){d()}return}else{$.paError(e.errorMessage,null);return}})};