component_drop_doctor=function(){};component_drop_doctor.prototype={getEmployeeList:function(){var a={method:"GET",url:ContextClinc_Server+"employee/getEmployList",dataType:"json",data:{}};return Utils.myAjaxHandler(a)},getDoctorList:function(){var a={method:"GET",url:ContextClinc_Server+"reception/queryClinicDoctors",dataType:"json",data:{}};return Utils.myAjaxHandler(a)},getFastRigisterDoctor:function(){var b=Utils.getQueryString("acographyId");var a={method:"GET",url:ContextClinc_Server+"docWorkSta/getDwsAcographyById",dataType:"json",data:{acographyId:b}};return Utils.myAjaxHandler(a)},createDropDiv:function(){var b=$(".component_drop_doctor");var a="component_drop_doctor_id";if($(".component_drop_doctor").attr("inputId")){a=$(".component_drop_doctor").attr("inputId")}if($(b).children().length==0){$(".component_drop_doctor").addClass("drop");$(".component_drop_doctor").append('<input type="text" class="input-text component_drop_doctor_input" id="'+a+'"><i class="drop-icon"></i>')}},init_view_readOnly:function(){var b=$(".component_drop_doctor_readonly");var a="component_drop_doctor_readonly_id";if($(".component_drop_doctor_readonly").attr("inputId")){a=$(".component_drop_doctor_readonly").attr("inputId")}if($(b).children().length==0){$(".component_drop_doctor_readonly").append('<input class="input-text component_drop_doctor_readonly_input" id="'+a+'" readonly="readonly">')}},init_preChoose:function(a){var c=this;var b={idKey:"USER_ID",txtKey:"EMPLOYEE_NAME",isNeedClear:false};c.createDropDiv();c.getDoctorList().done(function(f){if(f!=null&&f.errorCode==SUCCESSCODE){var e=f.data;if(a){A:if(e&&e.length>0){for(var d=0;d<e.length;d++){if(e[d].USER_ID==a){c.createDropDiv();$(".component_drop_doctor_input").WJZSDropdown(e,b,function(g,h){$(".component_drop_doctor_input").SetWJZSDropdownSelectedData(h.USER_ID)});$(".component_drop_doctor_input").val(e[d].EMPLOYEE_NAME).attr("val",e[d].USER_ID);break A}}c.init_noPreChoose(true)}else{c.init_noPreChoose(true)}}else{c.getFastRigisterDoctor().done(function(g){if(g!=null&&g.errorCode==SUCCESSCODE){var j=g.data;B:if(j.doctorId){if(e&&e.length>0){for(var h=0;h<e.length;h++){if(e[h].USER_ID==j.doctorId){$(".component_drop_doctor_input").WJZSDropdown(e,b,function(i,k){$(".component_drop_doctor_input").SetWJZSDropdownSelectedData(k.USER_ID)});$(".component_drop_doctor_input").val(e[h].EMPLOYEE_NAME).attr("val",e[h].USER_ID);break B}}c.init_noPreChoose(true)}else{c.init_noPreChoose(true)}}else{c.init_noPreChoose(true)}}else{$.paError(status.errorMessage)}})}}else{$.paError(status.errorMessage)}})},init_noPreChoose:function(f){var h=this;var b=config_cache.getCache("medical_user_data");var e=b.employee.employeeName;var c=b.id;var g=false;var a;var d={idKey:"USER_ID",txtKey:"EMPLOYEE_NAME",isNeedClear:false};if(f){}else{h.createDropDiv()}h.getDoctorList().done(function(j){if(j!=null&&j.errorCode==SUCCESSCODE){var i=j.data;if(i&&i.length>0){h.getEmployeeList().done(function(l){if(l!=null&&l.errorCode==SUCCESSCODE){var k=l.data;if(k&&k.length>0){for(var m=0;m<k.length;m++){if((k[m].USER_ID==c)&&(k[m].EMPLOYEE_POST_CODE=="ZW26001")){g=true;break}}}a=i;$(".component_drop_doctor_input").WJZSDropdown(a,d,function(n,o){$(".component_drop_doctor_input").SetWJZSDropdownSelectedData(o.USER_ID)});if(g){g=false;$(".component_drop_doctor_input").val(e).attr("val",c)}else{$(".component_drop_doctor_input").val(a[0].EMPLOYEE_NAME).attr("val",a[0].USER_ID)}}else{$.paError(status.errorMessage)}})}else{a=[{USER_ID:c,EMPLOYEE_NAME:e}];$(".component_drop_doctor_input").WJZSDropdown(a,d,function(k,l){$(".component_drop_doctor_input").SetWJZSDropdownSelectedData(l.USER_ID)});$(".component_drop_doctor_input").val(a[0].EMPLOYEE_NAME).attr("val",a[0].USER_ID)}}else{$.paError(status.errorMessage)}}).fail(function(i){$.paError("操作失败!")}).always(function(){})},init_readOnly:function(){var a=this;a.getFastRigisterDoctor().done(function(b){if(b!=null&&b.errorCode==SUCCESSCODE){var c=b.data;if(c.doctorId){$(".component_drop_doctor_input").val(c.doctorName).attr("val",c.doctorId)}else{$.paError("请先选择接诊医生")}}else{$.paError(status.errorMessage)}})},getAcographyDoctor:function(){var b=Utils.getQueryString("acographyId");var a={method:"GET",url:ContextClinc_Server+"docWorkSta/getDwsAcographyById",dataType:"json",data:{acographyId:b}};return Utils.myAjaxHandler(a)}};