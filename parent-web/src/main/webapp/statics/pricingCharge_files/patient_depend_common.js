var patientDependOuter=Class.create({bindPatientTypeItem:function(){$(".patient_type_box").on("click",".patient_type",function(){$(this).addClass("select").siblings().removeClass("select")})},getPatientTypeLable:function(d){var b=this;var a={url:ContextClinc_Server+"empi/patient_no_rules",dataType:"json",method:"GET"};var c=Utils.myAjaxHandler(a);c.done(function(e){if(e.errorCode==SUCCESSCODE){if(d){d(e.data)}}else{}}).fail(function(e){})},showPatientNoRuleList:function(){var a=this;a.getPatientTypeLable(function(c){if(c!=null&&c.length>0){$(".patient_type_box").parent().show();$(".patient_type_box").empty();var b="";$.each(c,function(d,f){var e=c[d];if(d==0){b+='<span class="patient_type select" data-rule-id="'+e.ruleId+'">'+e.patientType+"</span>"}else{b+='<span class="patient_type" data-rule-id="'+e.ruleId+'">'+e.patientType+"</span>"}});$(".patient_type_box").html(b)}else{$(".patient_type_box").parent().hide()}});a.bindPatientTypeItem()},getPatientRuleId:function(){var a="";$(".patient_type_box").find(".patient_type").each(function(){if($(this).hasClass("select")){a=$(this).attr("data-rule-id");return false}});return a}});