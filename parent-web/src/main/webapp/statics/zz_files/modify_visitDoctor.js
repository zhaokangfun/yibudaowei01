var SUCCESSCODE="E0000000";var ERROR_CODE_E1SP0002="E1SP0002";var modify_visitDoctor_api={selectVisitInfo:ContextClinc_Server+"docWorkSta/selectVisitInfo",updateVisitInfo:ContextClinc_Server+"docWorkSta/updateVisitInfo",referral:ContextClinc_Server+"referral/insertReferralInfo",getExistvisit:ContextClinc_Server+"docWorkSta/getExistvisit"};var clinicDoctors=[];var userInfo_aclc=config_cache.getCache("medical_user_data");var btnFinish=$("#btnFinishVisit");var label=[];var labelTitle=[];var empiId="";var IS_YB_REG="";Date.prototype.format=function(a){var c={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};if(/(y+)/.test(a)){a=a.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))}for(var b in c){if(new RegExp("("+b+")").test(a)){a=a.replace(RegExp.$1,(RegExp.$1.length==1)?(c[b]):(("00"+c[b]).substr((""+c[b]).length)))}}return a};var modify_visitDoctor_js=Class.create({initLabel:function(){label.length=0;labelTitle.length=0;clinicDoctors=[]},initDate:function(c,d){var b=this;var a=d;if(!a){a=new Date().Format("yyyy-MM-dd")}if(c){$("#treatmentDate").val(a);$("#treatmentDate").datetimepicker({lang:"ch",format:"Y-m-d",timepicker:false,maxDate:a,onShow:function(){},onSelectDate:function(e){b.log("当前选择的日期为:"+$("#treatmentDate").val());b.log("就诊ID:"+c);b.getExistvisit(c,function(p){b.log("请求回调："+p);if(p==1){var i={acographyId:c,empiId:empiId};var o=new Date().format("yyyy-MM-dd");var m=new Date().format("yyyy-MM-dd hh:mm:ss");var j=new Date();var h=j.getHours()<10?"0"+j.getHours():j.getHours();var g=j.getMinutes()<10?"0"+j.getMinutes():j.getMinutes();var f=j.getSeconds()<10?"0"+j.getSeconds():j.getSeconds();var k=" "+h+":"+g+":"+f;var n=new Date($("#treatmentDate").val()).format("yyyy-MM-dd");var l=new Date($("#treatmentDate").val()+k).format("yyyy-MM-dd hh:mm:ss");if(n==o){b.log("当天："+m);i.addDate=new Date(m)}else{b.log("非当天："+l);i.addDate=new Date(l)}b.modifyDoctor(i,function(q){b.log("请求回调："+q)})}else{if(p==2){$.paWarn("已存在收费记录,不可更改就诊医生!")}else{if(p==3){$.paWarn("理疗已执行,不可更改就诊医生!")}else{$.paAlert("系统繁忙!")}}}})}})}},setDocDropdown:function(c,d,f){var k=this;var i={idKey:"DOCTOR_ID",txtKey:"EMPLOYEE_NAME",isNeedClear:false};var h=$(c);if(clinicDoctors&&clinicDoctors.length>0){h.WJZSDropdown(clinicDoctors,i,function(m,n){var p=$("#slide_doctor_drop").attr("doctorId");var o=btnFinish.data("ACOGRAPHY_ID");k.getExistvisit(o,function(q){if(q==1){var r={userId:n.DOCTOR_ID,userName:n.EMPLOYEE_NAME};k.obtainDoctor(1,r)}else{if(q==2){h.SetWJZSDropdownSelectedData(p);$.paWarn("已存在收费记录,不可更改就诊医生!");return false}else{if(q==3){h.SetWJZSDropdownSelectedData(p);$.paWarn("理疗已执行,不可更改就诊医生!");return false}else{h.SetWJZSDropdownSelectedData(p);$.paAlert("系统繁忙!");return false}}}})});if(f.doctorId&&f.doctorName){h.SetWJZSDropdownSelectedData(f.doctorId);$("#slide_doctor_drop").attr("doctorId",f.doctorId)}else{if(d){h.SetWJZSDropdownSelectedData(d);var j=h.val();var a=btnFinish.data("ACOGRAPHY_ID");var b={acographyId:a,empiId:empiId,doctorId:d,doctorName:j};k.modifyDoctor(b,function(m){k.log("请求回调："+m);if(m==1){$("#slide_doctor_drop").attr("doctorId",d)}})}else{var l=$(h.siblings("ul").find("li").eq(0)).data("value");var e=h.siblings("ul").find("li").eq(0).text();var a=btnFinish.data("ACOGRAPHY_ID");var b={acographyId:a,empiId:empiId,doctorId:l,doctorName:e};k.modifyDoctor(b,function(m){k.log("请求回调："+m);if(m==1){h.SetWJZSDropdownSelectedData(l);$("#slide_doctor_drop").attr("doctorId",l)}})}}}else{var g=[{EMPLOYEE_NAME:"未指定医生",DOCTOR_ID:"-1"}];h.SetWJZSDropdownSelectedData("-1");$("#slide_doctor_drop").attr("doctorId","-1");h.WJZSDropdown(g,i,function(m,n){})}},modifyDoctor:function(c,e){var a=this;var b={url:modify_visitDoctor_api.updateVisitInfo,method:"POST",data:c,dataType:"json"};var d=Utils.myAjaxHandler(b);d.done(function(f){if(SUCCESSCODE==f.errorCode){e.call(a,f.data)}else{$.paError(f.errorMessage,null)}}).fail(function(f){$.paError("系统繁忙!",null)}).always(function(){})},queryDoctor:function(e,d,b,f){var a=this;empiId=b;IS_YB_REG=f;if(e||d){var c={url:modify_visitDoctor_api.selectVisitInfo,method:"POST",data:e,dataType:"json",async:true};var g=Utils.myAjaxHandler(c);g.done(function(h){if(SUCCESSCODE==h.errorCode){var l=h.data;if(l&&l.apptItems!=null&&l.apptItems.totalMoney!=null){var o=l.apptItems.totalMoney.toFixed(2);if(o>0||o<0){$("#totalMoney").text(o)}else{if(o==0){$("#totalMoney").text("-")}}}else{$("#totalMoney").text("-")}if(l&&l.apptItems!=null&&l.apptItems.oweMoney!=null){var n=l.apptItems.oweMoney.toFixed(2);if(n>0){$("#oweMoney").text(n)}else{if(n<0){$("#oweMoney").text(n);label[3]="欠费"}else{if(n==0){$("#oweMoney").text("-")}}}}else{$("#oweMoney").text("-")}$("#label_box").empty();var p=l.memberInfo;if(p&&p!=null&&p.MEMBER_TYPE_NAME){$("#vipCard").text(p.MEMBER_TYPE_NAME||"-")}else{$("#vipCard").text("-")}if(p&&p!=null&&p.MEMBER_CARD_NUMBER){$("#vipCardNum").text(p.MEMBER_CARD_NUMBER||"-");label[0]="会员";labelTitle[0]=p.MEMBER_TYPE_NAME}else{$("#vipCardNum").text("-")}if(p&&p!=null&&p.BALANCE){var j=p.BALANCE||0;var s=p.CASH_GIFT||0;if(j&&!isNaN(j)){j=parseFloat(j)}if(s&&!isNaN(s)){s=parseFloat(s)}if(parseFloat(j+s)==0){$("#balanceMoney").text("-")}else{$("#balanceMoney").text(parseFloat(j+s))}}else{$("#balanceMoney").text("-")}if(l&&l.apptrecord!=null&&l.apptrecord.ALLERGIES_HISTORY!=null){if(l.apptrecord.ALLERGIES_HISTORY!="否认"){label[1]="过敏"}}if(l&&l.apptrecord!=null&&l.apptrecord.PAST_HISTORY!=null){if(l.apptrecord.PAST_HISTORY!="否认"){label[2]="既往"}}if(IS_YB_REG==1){label[4]="医保"}for(var m=0;m<label.length;m++){if(label[m]){if(m==0){var r="<span class='bg_theme_color' title='"+labelTitle[m]+"'>"+label[m]+"</span>"}else{var r="<span class='bg_theme_color'>"+label[m]+"</span>"}$("#label_box").append(r);$("#label_box").removeClass("dsn")}}var q={doctorId:"",doctorName:""};if(l&&l.visitDoctor.doctorId&&l.visitDoctor.doctorName){q.doctorId=l.visitDoctor.doctorId;q.doctorName=l.visitDoctor.doctorName}if(clinicDoctors&&clinicDoctors.length==0){clinicDoctors=l.clinicDoctors;a.setDocDropdown($("#slide_doctor_drop"),d,q)}else{a.setDocDropdown($("#slide_doctor_drop"),d,q)}if(l&&l.visitDoctor.addDate&&l.visitDoctor.addDate!=null){var k=new Date(l.visitDoctor.addDate);a.initDate(e.acographyId,k.Format("yyyy-MM-dd"));a.log("存在就诊时间")}else{a.initDate(e.acographyId);a.log("没有就诊时间，取当前时间")}}else{$.paError(h.errorMessage,null)}}).fail(function(h){$.paError("系统繁忙!",null)}).always(function(){})}else{$("#slide_doctor_drop").val("").attr("readonly","readonly");$("#label_box").empty();$("#label_box").addClass("dsn");$("#totalMoney").text("-");$("#oweMoney").text("-");$("#vipCard").text("-");$("#vipCardNum").text("-");$("#balanceMoney").text("-")}},referralRequest:function(b,e){var g=this;var a=b.acographyId||"";var d=b.doctorId||"";var f=b.doctorName||"";if(d&&f&&a){var c={acographyId:a,doctorId:d,doctorName:f};var i={url:modify_visitDoctor_api.referral,method:"POST",data:JSON.stringify(c),dataType:"json",contentType:"application/json;charset=UTF-8",showMask:true,async:true};var h=Utils.myAjaxHandler(i);h.done(function(j){if(SUCCESSCODE==j.errorCode){g.log(""+j);e.call(g,j.data)}else{if(ERROR_CODE_E1SP0002==j.errorCode){$.paError(j.errorMessage,null)}else{$.paError(j.errorMessage,null)}}}).fail(function(j){$.paError("系统繁忙!",null)}).always(function(){})}else{$.paWarn("医生信息不全!",null)}},bindClick:function(b){var a=this;if(b){$("#zhuanzhen").off("click").on("click",function(){var c=$("#slide_doctor_drop").attr("val");$("#doctorList").empty();var d=$("#slide_doctor_drop").siblings(".wjzs-drop-menu").children("li");$(d).each(function(h,f){var k=$(this).attr("value");var e=$(this).text();a.log("ID:"+k+"  名称："+e);if(c!=k){if(h==0){str="checked"}else{str=""}var g='<span class="enterNext radio '+str+' main-doctor-item"  value="'+k+'">'+e+"</span>";$("#doctorList").append(g)}});$("#referralWindow").show()});$("#closeZzBtn").off("click").on("click",function(){$("#referralWindow").hide()});$(".doctor-list").delegate(".main-doctor-item","click",function(){$(".main-doctor-item").removeClass("checked");$(this).addClass("checked")});$("#submitReferral").bind("click",function(){var e=$(".main-doctor-item.checked").attr("value");var c=$(".main-doctor-item.checked").html();if(!e&&!c){$.paWarn("未选择医生!");return}else{var d={msg:"转诊后将自动完成当前就诊，确定要转诊吗?",cancelTxt:"取消",saveTxt:"保存",onYes:function(){if(!e&&!c){$.warn("未选择医生!")}else{var f={acographyId:b,doctorId:e,doctorName:c};a.referralRequest(f,function(g){a.log("转诊选中的医生ID:"+e+" 名称:"+c);if(g){a.log("data:"+g);$("#referralWindow").hide();$("[model='HZZX']").click()}})}}};$.paConfirm(d)}});$("#fuzheng").off("click").on("click",function(){var c={};if(empiId){c={empiId:empiId,}}else{c={phoneNumber:"",}}window.parent.newAppt(c,false,2)})}},getExistvisit:function(d,f){var a=this;var c={acographyId:d};var b={url:modify_visitDoctor_api.getExistvisit,method:"POST",data:c,dataType:"json",async:true};var e=Utils.myAjaxHandler(b);e.done(function(g){if(SUCCESSCODE==g.errorCode){f.call(a,g.data)}else{if(ERROR_CODE_E1SP0002==g.errorCode){$.paError(g.errorMessage,null)}else{$.paError(g.errorMessage,null)}}}).fail(function(g){$.paError("系统繁忙!",null)}).always(function(){})},obtainDoctor:function(c,f){var a=this;var e=btnFinish.data("ACOGRAPHY_ID");a.log("就诊记录ID:"+e);if(c==1){var d={acographyId:e,empiId:empiId,doctorId:f.userId,doctorName:f.userName};a.modifyDoctor(d,function(h){a.log("请求回调:"+h)})}else{var b=f.attr("val");var g=f.val();var d={acographyId:e,empiId:empiId,doctorId:b,doctorName:g};a.modifyDoctor(d,function(h){a.log("请求回调："+h)})}},_setMedicalCache:function(c,a){var b={visitDoctorId:c,visitDoctorName:a};userInfo_aclc.visitInfo=b;config_cache.setCache("medical_user_data",userInfo_aclc)},log:function(a){if(window.console){console.log(a)}}});