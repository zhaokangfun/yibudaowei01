var gender={"1":"男","2":"女","3":"保密"};var acographyId=Utils.getQueryString("acographyId");var empiId=Utils.getQueryString("empiId");var tableMargin=[];var tableWidth=[];function TreatmentReportPrint(){}TreatmentReportPrint.prototype={doPrintFacade:function(h,f,g,e){if(e==undefined||e==null){var d=config_cache.getCache("medical_user_data");var a=d.clinicParams;for(var b in a){if(a[b].parameterCode=="3013"){e=a[b].parameterValue;break}}}if(e==undefined||e==null){e=2}var c=this;if(!h){h=acographyId}wjPrintUtils.getPrintSetting(wjPrintUtils.printFunction.treatProject,function(r,j){if(r==1){c.doPrint(h,f,j,g,e)}else{if(r==2){var l={url:ContextClinc_Server+"dwsTreatPro/selectDwsTpByAcographyID",dataType:"json",type:"POST",data:{acographyID:h},async:false};var y=c.getData(l);if(y==null||y.length==0){$.paWarn("请先填写保存项目数据");return}if(reviewFlag==true){reviewFlag=false;$.paSuccess("生成预览...")}else{$.paSuccess("正在打印...")}var t={acographyId:h,empiId:f};l={url:ContextClinc_Server+"dwsCnMedical/selectCnMecPatientAndDocInfo",dataType:"json",type:"POST",data:t,async:false};var u=c.getData(l);var o={data:{}};var A=o.data;A.treatBillBaseInfo={};A.treatData=[];A.treatBillBaseInfo.acographySerialNo=u.ACOGRAPHY_SERIAL_NO;if(d==null){d=config_cache.getCache("medical_user_data")}A.treatBillBaseInfo.clinicName=d.clinicName;A.treatBillBaseInfo.billTypeName="治疗单";A.treatBillBaseInfo.patientName=u.PATIENT_NAME;A.treatBillBaseInfo.sex=c.getGender(u.PATIENT_GENDER);A.treatBillBaseInfo.department=u.DEPARTMENT_NAME;A.treatBillBaseInfo.age=Utils.getPersonAccurateAge(u.PATIENT_BIRTH_DATE);var s="自费";if(u.IS_YB_REG==1){s=u.MI_TYPE_NAME}A.treatBillBaseInfo.feeType=s;A.treatBillBaseInfo.YBCardNo=y[0].IS_YB_REG==1?(y[0].INSURANCE_NO||"-"):"-";var m=u.PATIENT_NO;if(null==m||"null"==m||""==m){m=""}else{m=m.substr(0,18)}A.treatBillBaseInfo.patientHistoryNo=m;var v=u.LIVING_ADDRESS_COUNTRYSIDE;if(null==v||"null"==v||""==v){v="-"}var z=v+"/"+(u.MOBILE_PHONE_NUMBER||"-");if(null!=u.MOBILE_PHONE_NUMBER&&c.getStrLength(z)>106){var k=c.getStrLength("/"+u.MOBILE_PHONE_NUMBER);z=c.cutStr(v,106-k)+"/"+(u.MOBILE_PHONE_NUMBER||"-")}A.treatBillBaseInfo.addressAndTel=z;var q=u.DiagnosisList;var p=u.CHINESE_TRA_DIAGNOSIS;if(null==p||"null"==p||""==p){p=""}if(null==q||"null"==q||""==q){q="";A.treatBillBaseInfo.nowTreatInfo=p}else{A.treatBillBaseInfo.nowTreatInfo=q}A.treatBillBaseInfo.nowTreatInfo=q;A.treatBillBaseInfo.billDate=u.MODIFY_DATE;A.treatBillBaseInfo.historyOfPresentIllness=($("#historyOfPresentIllness").val()==null||$("#historyOfPresentIllness").val().length==0?"无":$("#historyOfPresentIllness").val());var n=0;for(var x in y){if(g==1&&(y[x].CHARGESTATUS==1||y[x].CHARGESTATUS==2||y[x].CHARGESTATUS==4)){continue}else{if(g==2&&(y[x].CHARGESTATUS==2||(y[x].ITEM_TYPE==1&&y[x].IS_SEND==2))){continue}}var w={};w.projectName=y[x].ITEMNAME;w.number=y[x].TREATNUM+y[x].TREATMENT_UNIT_NAME||"";w.remark=y[x].TPREMARK||"";w.price=c.toDecimal2(y[x].PRICE_MODIFY);A.treatData.push(w);n+=(y[x].PRICE_MODIFY*y[x].TREATNUM)}A.treatBillBaseInfo.totalPrice=c.toDecimal2(n)+" 元";A.treatBillBaseInfo.doctor=y[y.length-1].EMPLOYEE_NAME||d.userName;wjPrintUtils.print(j,o,function(i){if(i.code!=SUCCESSCODE){$.paWarn(i.message)}})}else{$.paWarn("请先配置打印参数！")}}})},doPrint:function(a,d,o,b,k){var r=this;if(!a){a=acographyId}LODOP=getLodop();if(!LODOP){return}var s={url:ContextClinc_Server+"dwsTreatPro/selectDwsTpByAcographyID",dataType:"json",type:"POST",data:{acographyID:a},async:false};var n=r.getData(s);if(n==null||n.length==0){return}var m=_.isNumber(o.rightOffset)?o.rightOffset:0;var l=_.isNumber(o.bottomOffset)?o.bottomOffset:0;LODOP.PRINT_INITA(l,m,530+m,763+l,"");LODOP.SET_PRINT_PAGESIZE(1,1480,2100,"");LODOP.SET_PRINT_STYLE("FontName","微软雅黑");var h=212;h=r.createHead(a,d)+10;LODOP.ADD_PRINT_TEXT(28,10,543,31,userInfo_aclc.clinicName);LODOP.SET_PRINT_STYLEA(0,"FontSize",15);LODOP.SET_PRINT_STYLEA(0,"Alignment",2);LODOP.SET_PRINT_STYLEA(0,"Bold",1);LODOP.ADD_PRINT_TEXT(59,11,543,31,"治疗单");LODOP.SET_PRINT_STYLEA(0,"FontSize",15);LODOP.SET_PRINT_STYLEA(0,"Alignment",2);LODOP.SET_PRINT_STYLEA(0,"Bold",1);LODOP.ADD_PRINT_HTM(74,7,245,20,"<span style='font-size:12px;font-weight:bolder;font-family:微软雅黑;'>医疗证/医保卡号&nbsp;:  <span style='color:blue;margin-left:5px;font-weight:normal;'>"+(n[0].IS_YB_REG==1?(n[0].INSURANCE_NO||"-"):"-")+"</sapn></span>");r.makeMarginAndWidth(k);LODOP.SET_PRINT_STYLE("Alignment",2);r.createTableHead(h,k);var q=h+34;var p=0;for(var f in n){if(b==1&&(n[f].CHARGESTATUS==1||n[f].CHARGESTATUS==2||n[f].CHARGESTATUS==4)){continue}else{if(b==2&&(n[f].CHARGESTATUS==2||(n[f].ITEM_TYPE==1&&n[f].IS_SEND==2))){continue}}if(q>680){LODOP.NEWPAGEA();r.createHead(a,d);LODOP.ADD_PRINT_TEXT(28,10,543,31,userInfo_aclc.clinicName);LODOP.SET_PRINT_STYLEA(0,"FontSize",15);LODOP.SET_PRINT_STYLEA(0,"Bold",1);LODOP.ADD_PRINT_TEXT(59,11,543,31,"治疗单");LODOP.SET_PRINT_STYLEA(0,"FontSize",15);LODOP.SET_PRINT_STYLEA(0,"Bold",1);LODOP.ADD_PRINT_HTM(74,7,245,20,"<span style='font-size:12px;font-weight:bolder;font-family:微软雅黑;'>医疗证/医保卡号&nbsp;:  <span style='color:blue;margin-left:5px;font-weight:normal;'>"+(n[0].IS_YB_REG==1?(n[0].INSURANCE_NO||"-"):"-")+"</sapn></span>");r.createTableHead(h,k);q=h+34}if(f!=n.length-1&&q+47<=680){for(var c=4;c<=530;c=c+5){LODOP.ADD_PRINT_LINE(q+32,c,q+32,c+3,0,1)}}LODOP.ADD_PRINT_TEXT(q,tableMargin[0],tableWidth[0],20,n[f].ITEMNAME);LODOP.SET_PRINT_STYLEA(0,"Alignment",1);if(k==2){LODOP.ADD_PRINT_TEXT(q,tableMargin[1],tableWidth[1],20,r.toDecimal2(b==undefined?n[f].PRICE:n[f].PRICE_MODIFY))}LODOP.ADD_PRINT_TEXT(q,tableMargin[2],tableWidth[2],20,n[f].TREATNUM);LODOP.ADD_PRINT_TEXT(q,tableMargin[3],tableWidth[3],20,n[f].TREATMENT_UNIT_NAME||"--");LODOP.ADD_PRINT_TEXT(q,tableMargin[4],tableWidth[4],35,n[f].TPREMARK||"--");q+=47;p+=((b==undefined?n[f].PRICE:n[f].PRICE_MODIFY)*n[f].TREATNUM)}var g=r.GetOSInfo();var e=710;if(g.indexOf("Windows_XP")>-1||g.indexOf("Windows_vista")>-1){e=700}if(k==2){LODOP.ADD_PRINT_HTM(e,357,170,25,"<span style='font-size:12px;font-weight:bolder;font-family:微软雅黑;'>总金额&nbsp;:  <span style='margin-left:5px;font-weight:normal;'>"+(r.toDecimal2(p)+" 元")+"</sapn></span>")}LODOP.ADD_PRINT_LINE(e+21,4,e+21,530,0,1);LODOP.ADD_PRINT_TEXT(e+29,347,80,25,"申请医生 :");LODOP.SET_PRINT_STYLEA(0,"Bold",1);LODOP.ADD_PRINT_TEXT(e+29,381,121,25,(n[n.length-1].EMPLOYEE_NAME||userInfo_aclc.userName));operateType()},createTableHead:function(b,a){LODOP.ADD_PRINT_LINE(b+19,4,b+19,530,0,1);LODOP.ADD_PRINT_TEXT(b,tableMargin[0],tableWidth[0],25,"项目名称");LODOP.SET_PRINT_STYLEA(0,"Alignment",1);LODOP.SET_PRINT_STYLEA(0,"Bold",1);if(a==2){LODOP.ADD_PRINT_TEXT(b,tableMargin[1],tableWidth[1],25,"单价（元）");LODOP.SET_PRINT_STYLEA(0,"Bold",1)}LODOP.ADD_PRINT_TEXT(b,tableMargin[2],tableWidth[2],25,"数量");LODOP.SET_PRINT_STYLEA(0,"Bold",1);LODOP.ADD_PRINT_TEXT(b,tableMargin[3],tableWidth[3],25,"单位");LODOP.SET_PRINT_STYLEA(0,"Bold",1);LODOP.ADD_PRINT_TEXT(b,tableMargin[4],tableWidth[4],25,"备注");LODOP.SET_PRINT_STYLEA(0,"Bold",1)},createHead:function(t,a){var r=this;if(!t){t=acographyId}var p={acographyId:t,empiId:a};var f={url:ContextClinc_Server+"dwsCnMedical/selectCnMecPatientAndDocInfo",dataType:"json",type:"POST",data:p,async:false};var G=r.getData(f);G.DiagnosisList=r.getDiagnosisList(f);var u=r.GetOSInfo();LODOP.ADD_PRINT_TEXT(7,5,32,25,"NO.");LODOP.SET_PRINT_STYLEA(0,"Alignment",1);LODOP.SET_PRINT_STYLEA(0,"Bold",1);LODOP.ADD_PRINT_TEXT(7,38,120,25,G.ACOGRAPHY_SERIAL_NO);LODOP.SET_PRINT_STYLEA(0,"Alignment",1);LODOP.SET_PRINT_STYLEA(0,"FontColor","#FF0000");LODOP.SET_PRINT_STYLEA(0,"Bold",1);LODOP.ADD_PRINT_TEXT(7,454,35,25,"普通");LODOP.SET_PRINT_STYLEA(0,"Alignment",2);if(u.indexOf("Windows_XP")>-1||u.indexOf("Windows_vista")>-1){LODOP.ADD_PRINT_TEXT(7,484,35,25,"#/&")}else{LODOP.ADD_PRINT_TEXT(7,490,35,25,"#/&")}LODOP.SET_PRINT_STYLEA(0,"ItemType",2);LODOP.SET_PRINT_STYLEA(0,"Alignment",2);LODOP.ADD_PRINT_LINE(94,4,94,530,0,1);var v=520;var y=[25,15,20,24,20];var j=[8,0,0,0,0];var z=[0,0,0,0,0];for(var A=0;A<5;A++){z[A]=v*(y[A]/100)}for(var A=1;A<5;A++){j[A]=j[A-1]+z[A-1]}LODOP.ADD_PRINT_HTM(105,j[0],z[0],25,"<span style='font-size:12px;font-weight:bolder;font-family:微软雅黑;'>姓名&nbsp;:  <span style='color:blue;margin-left:5px;font-weight:normal;'>"+G.PATIENT_NAME+"</sapn></span>");LODOP.ADD_PRINT_HTM(105,j[1],z[1],25,"<span style='font-size:12px;font-weight:bolder;font-family:微软雅黑;'>性别&nbsp;:  <span style='color:blue;margin-left:5px;font-weight:normal;'>"+r.getGender(G.PATIENT_GENDER)+"</sapn></span>");LODOP.ADD_PRINT_HTM(105,j[2],z[2],25,"<span style='font-size:12px;font-weight:bolder;font-family:微软雅黑;'>年龄&nbsp;:  <span style='color:blue;margin-left:5px;font-weight:normal;'>"+Utils.getPersonAccurateAge(G.PATIENT_BIRTH_DATE)+"</sapn></span>");LODOP.ADD_PRINT_HTM(105,j[3],z[3],25,"<span style='font-size:12px;font-weight:bolder;font-family:微软雅黑;'>科室&nbsp;:  <span style='color:blue;margin-left:5px;font-weight:normal;'>"+(G.DEPARTMENT_NAME||"-")+"</sapn></span>");LODOP.ADD_PRINT_HTM(105,j[4],z[4],25,"<span style='font-size:12px;font-weight:bolder;font-family:微软雅黑;'>费别&nbsp;:  <span style='color:blue;margin-left:5px;font-weight:normal;'>"+(G.IS_YB_REG==1?G.MI_TYPE_NAME:"自费")+"</sapn></span>");var m=[32,68];var n=[8,0];var e=[0,0];for(var A=0;A<2;A++){e[A]=v*(m[A]/100)}for(var A=1;A<2;A++){n[A]=n[A-1]+e[A-1]}var g=G.PATIENT_NO;if(null==g||"null"==g||""==g){g=""}else{g=g.substr(0,18)}var q=G.LIVING_ADDRESS_COUNTRYSIDE;if(null==q||"null"==q||""==q){q="-"}var B=q+"/"+G.MOBILE_PHONE_NUMBER;if(null!=G.MOBILE_PHONE_NUMBER&&r.getStrLength(B)>102){var d=r.getStrLength("/"+G.MOBILE_PHONE_NUMBER);B=r.cutStr(q,102-d)+"/"+G.MOBILE_PHONE_NUMBER}if(G.MOBILE_PHONE_NUMBER==null){B=q+"/-"}var D=r.calcHeight(g,126);LODOP.ADD_PRINT_HTM(135,n[0],e[0],D,"<span style='font-size:12px;vertical-align:text-top;font-weight:bolder;font-family:微软雅黑;'>病历号&nbsp;:  </span><span style='width:106px;white-space:pre-wrap;word-break:normal;word-wrap:break-word;font-size:12px;vertical-align:text-top;color:blue;margin-left:5px;font-weight:normal;font-family:微软雅黑;'>"+g+"</sapn>");var E=r.calcHeight(B,326);LODOP.ADD_PRINT_HTM(135,n[1],e[1],E,"<span style='float:left;font-size:12px;vertical-align:text-top;font-weight:bolder;font-family:微软雅黑;'>住址/电话&nbsp;:  </span><span style='float:left;width:280px;white-space:pre-wrap;word-break:normal;word-wrap:break-word;font-size:12px;vertical-align:text-top;color:blue;margin-left:5px;font-weight:normal;font-family:微软雅黑;'>"+B+"</sapn>");var l=[70,30];var k=[8,0];var c=[0,0];for(var A=0;A<2;A++){c[A]=v*(l[A]/100)}for(var A=1;A<2;A++){k[A]=k[A-1]+c[A-1]}var x=G.DiagnosisList;var F=[];var w=[];if(x!=null){if(x.dwsList!=null&&x.dwsList.length>0){F.push(x.dwsList[0].diagnosis||x.dwsList[0].diagnosisIcd10);for(var A=1;A<x.dwsList.length;A++){w.push(x.dwsList[A].diagnosis||x.dwsList[A].diagnosisIcd10)}}if(x.denList!=null&&x.denList.length>0){F.push(x.denList[0].diagnosis||x.denList[0].diagnosisIcd10);for(var A=1;A<x.denList.length;A++){w.push(x.denList[A].diagnosis||x.denList[A].diagnosisIcd10)}}if(x.tcmList!=null&&x.tcmList.length>0){F.push(x.tcmList[0].diagnosis||x.tcmList[0].diagnosisIcd10);for(var A=1;A<x.tcmList.length;A++){w.push(x.tcmList[A].diagnosis||x.tcmList[A].diagnosisIcd10)}}}var s=F.join(";")||"-";var H=w.join(";");var h=r.calcHeight(s,339);var C=(H!=null&&H!="")?r.calcHeight(H,522):0;var o=146+(E>D?E:D);LODOP.ADD_PRINT_HTM(o,k[0],c[0],h,"<span style='font-size:12px;vertical-align:text-top;font-weight:bolder;font-family:微软雅黑;'>"+((H!=null&&H!="")?"主诊断":"诊断")+"&nbsp;:  </span><span style='width:288px;white-space:pre-wrap;word-break:break-all;word-wrap:break-word;font-size:12px;vertical-align:text-top;color:blue;margin-left:5px;font-weight:normal;font-family:微软雅黑;'>"+s+"</sapn>");LODOP.ADD_PRINT_HTM(o,k[1],c[1],h,"<span style='font-size:12px;font-weight:bolder;font-family:微软雅黑;'>开具日期&nbsp;:  <span style='color:blue;margin-left:5px;font-weight:normal;'>"+(Utils.timeStampToDateStr(G.MODIFY_DATE,7))+"</sapn></span>");o+=h+9;if(H!=null&&H!=""){LODOP.ADD_PRINT_HTM(o,k[0],v,C,"<span style='font-size:12px;vertical-align:text-top;font-weight:bolder;font-family:微软雅黑;'>副诊断&nbsp;:  </span><span style='width:448px;white-space:pre-wrap;word-break:break-all;word-wrap:break-word;font-size:12px;vertical-align:text-top;color:blue;margin-left:5px;font-weight:normal;font-family:微软雅黑;'>"+H+"</sapn>")}var b=o+C+3;LODOP.ADD_PRINT_LINE(b,4,b,530,0,1);return b},getStrLength:function(b){var a=b.match(/[^\x00-\xff]/ig);return b.length+(a==null?0:a.length)},cutStr:function(d,a){if(!d){return""}if(a<=0){return""}var c=0;for(var b=0;b<d.length;b++){if(d.charCodeAt(b)>255){c+=2}else{c++}if(c==a){return d.substring(0,b-2)}else{if(c>a){return d.substring(0,b-2)}}}return d},getData:function(b){var a=this;var c="";var d=Utils.myAjaxHandler(b);d.done(function(e){if(e!=null&&e.errorCode==SUCCESSCODE){c=e.data}else{$.paAlert(e.errorMessage)}}).fail(function(e){$.paAlert("获取用户信息失败!")}).always(function(){});return c},getDiagnosisList:function(a){var b={};a.url=ContextClinc_Server+"docWorkSta/getDwsDrListByAcographyId";var c=Utils.myAjaxHandler(a);c.done(function(d){if(d!=null&&d.errorCode==SUCCESSCODE){b=d.data}else{$.paAlert(d.errorMessage)}}).fail(function(d){$.paAlert("获取用户信息失败!")}).always(function(){});return b},toDecimal4:function(a){var d=parseFloat(a);if(isNaN(d)||d<0){return"0.0000"}var d=Math.round(a*10000)/10000;var c=d.toString();var b=c.indexOf(".");if(b<0){b=c.length;c+="."}while(c.length<=b+4){c+="0"}return c},toDecimal2:function(a){var d=parseFloat(a);if(isNaN(d)||d<0){return"0.00"}var d=Math.round(a*100)/100;var c=d.toString();var b=c.indexOf(".");if(b<0){b=c.length;c+="."}while(c.length<=b+2){c+="0"}return c},GetOSInfo:function(){var a=navigator.platform;var b=navigator.userAgent;if(a=="Win32"||a=="Windows"){if(b.indexOf("WOW64")>-1){_bit="64位"}else{_bit="32位"}if(b.indexOf("Windows NT 6.0")>-1||b.indexOf("Windows Vista")>-1){return"Windows_vista "+_bit}else{if(b.indexOf("Windows NT 6.1")>-1||b.indexOf("Windows 7")>-1){return"Windows_7 "+_bit}else{try{var f=Array("2000","XP","2003");var d=b.match(/Windows NT 5.\d/i).toString();return"Windows_"+f[d.replace(/Windows NT 5.(\d)/i,"$1")]+" "+_bit}catch(c){return"Windows"}}}}else{if(a=="Mac68K"||a=="MacPPC"||a=="Macintosh"){return"Mac"}else{if(a=="X11"){return"Unix"}else{if(String(a).indexOf("Linux")>-1){return"Linux"}else{return"Unknow"}}}}},calcHeight:function(d,b){var a=$("body").append($('<span stlye="display:none;font-size:12px;" id="textWidth"/>')).find("#textWidth").html(d).width();$("#textWidth").remove();var c=Math.ceil(a/1/b);if(c==0){c=1}return c*12+(c*2)*3},makeMarginAndWidth:function(a){if(a==2){tableMargin=[10,165,245,300,360];tableWidth=[150,75,40,60,160]}else{tableMargin=[10,0,181,242,317];tableWidth=[166,0,56,70,203]}},getGender:function(a){if(a==1){return"男"}else{if(a==2){return"女"}else{return"保密"}}}};