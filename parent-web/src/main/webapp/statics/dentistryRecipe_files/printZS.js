$(function(){printZS.init()});var printZS={init:function(){$(".checkboxes_ul li").click(function(){var a=$(this);if(a.hasClass("checked")){a.removeClass("checked")}else{a.addClass("checked")}});$("#print_return").click(function(){$(".checkboxes_ul li").removeClass("checked");$("#print_type_popup").hide()});$(".close").click(function(){$("#recip_print").removeClass("checked");$("#zs_print").removeClass("checked")});$("#print_sure").click(function(){if($("#recip_print").hasClass("checked")){dDentistryRecipeMain.printWestRecipe()}if($("#zs_print").hasClass("checked")){printZS.printZS()}if($("#fj_print").hasClass("checked")){dDentistryRecipeMain.printWestAddition(1)}$(".checkboxes_ul li").removeClass("checked");$("#print_type_popup").hide()});$("#print_review").click(function(){reviewFlag=true;if($("#recip_print").hasClass("checked")){dDentistryRecipeMain.printWestRecipe()}if($("#zs_print").hasClass("checked")){printZS.printZS()}if($("#fj_print").hasClass("checked")){dDentistryRecipeMain.printWestAddition()}$(".checkboxes_ul li").removeClass("checked");$("#print_type_popup").hide()});$(".checkboxes_ul li").click(function(){var a=0;if($("#recip_print").hasClass("checked")){a=a+1}if($("#zs_print").hasClass("checked")){a=a+1}if($("#fj_print").hasClass("checked")){a=a+1}if(a==0||a>1){$("#print_review").off("click").on("click",function(){});$("#print_review").attr("style","float:left; margin-right: 20px;margin-top: 20px; color: #bbbbbb; border: 1px solid #bbbbbb;")}else{$("#print_review").off("click").on("click",function(){reviewFlag=true;if($("#recip_print").hasClass("checked")){dDentistryRecipeMain.printWestRecipe()}if($("#zs_print").hasClass("checked")){printZS.printZS()}if($("#fj_print").hasClass("checked")){dDentistryRecipeMain.printWestAddition()}$(".checkboxes_ul li").removeClass("checked");$("#print_type_popup").hide()});$("#print_review").attr("style","float:left; margin-right: 20px;margin-top: 20px;")}if($("#recip_print").hasClass("checked")||$("#zs_print").hasClass("checked")||$("#fj_print").hasClass("checked")){$("#print_sure").attr("style","float:left; margin-right: 20px;margin-top: 20px;")}else{$("#print_sure").attr("style","float:left; margin-right: 20px;margin-top: 20px; color: #bbbbbb; border: 1px solid #bbbbbb;background: transparent;")}})},printZS:function(b){var a=$(".recipe_lable.current").attr("recipeId");if(!b){b={recipeId:a,empiId:Utils.getQueryString("empiId"),acographyId:Utils.getQueryString("acographyId")}}if(b.recipeId){this.getRecipeByRecipeId(b,function(c){if(!c){$.paWarn("处方信息为空！");return}else{if(!c.dwsRecipe||!c.dwsRecipe.recipeWestList||c.dwsRecipe.recipeWestList.length==0){$.paWarn("该处方无需打印注射单");return}}if(reviewFlag==true){$.paSuccess("生成预览...")}else{$.paSuccess("正在打印...")}wjPrintUtils.getPrintSetting(wjPrintUtils.printFunction.injectReceipt,function(k,h){if(k==1){printZS.printZSSheet(c,h)}else{if(k==2){if(reviewFlag==true){reviewFlag=false}var f={1:"男",2:"女",3:"保密"};var d={};d.basicInfo={clinicName:parent.$("#c-name").text(),blNumber:c.empiInfo.blNumber,recipeCode:c.dwsRecipe.recipeCode,name:c.empiInfo.name,gender:c.empiInfo.gender,birthDay:$.trim(parent.$("#patOtherInfo").text().split("|")[1]),mobile:c.empiInfo.mobile,deptName:c.empiInfo.deptName,diagnosis:c.empiInfo.diagnosis,recipeDate:c.empiInfo.recipeDate,docName:c.empiInfo.docName,printTime:new Date().getTime(),nameGender:c.empiInfo.name+"("+f[c.empiInfo.gender]+")",doctorName:c.dwsRecipe.doctorName};var g={0:"本院",1:"外购",2:"免费"};d.recipeWestList=c.dwsRecipe.recipeWestList;for(var e in d.recipeWestList){var j=d.recipeWestList[e];d.recipeWestList[e].drugDose=j.drugDose+j.drugUnitName;if(j.drugSource||j.drugSource=="0"){d.recipeWestList[e].drugSource=g[j.drugSource]}d.recipeWestList[e].totalQty=j.totalQty+j.recipeUnit;d.recipeWestList[e].totalDay=j.totalDay+"天";if(j.skinTest=="1"){d.recipeWestList[e].drugName+="[皮试]"}}wjPrintUtils.printMore(h,d,"ZS",function(i){if(i.code!=SUCCESSCODE){$.paWarn(i.message)}})}else{$.paWarn("请先配置打印参数！")}}})})}else{$.paWarn("请先保存处方！")}},getRecipeByRecipeId:function(d,f){var a=this;var c={recipeId:d.recipeId,empiId:d.empiId,acographyId:d.acographyId};var b={type:"POST",url:ContextClinc_Server+"dentistryRecipe/getRecipeByRecipeId",contentType:"application/json;charset=utf-8",showMask:true,dataType:"json",data:JSON.stringify(c)};var e=Utils.myAjaxHandler(b);e.done(function(g){if(g.errorCode=="E0000000"){f.call(a,g.data)}else{$.paError("查询失败")}}).fail(function(g){$.paError("操作失败!")}).always(function(){})},printZSSheet:function(c,n){var q=this;var o='<style> table,td{border: 1px solid black;border-style: solid;border-collapse: collapse;text-align: center;font-size: 12px;width: 9%;}</style><table border="1" style="width:100%;"><tr><td>皮试</td><td colspan="10"></td></tr><tr>  <td rowspan="2">日期</td>  <td rowspan="2">核对</br>签名</td>  <td rowspan="2">加药<br/>签名</td>  <td colspan="2">注射</td>  <td colspan="2">第二组接瓶</td><td colspan="2">第三组接瓶</td>  <td colspan="2">拔针</td></tr><tr>  <td>时间</td>  <td>签名</td>  <td>时间</td>  <td>签名</td>  <td>时间</td>  <td>签名</td>  <td>时间</td>  <td>签名</td></tr><tr><td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td></tr><tr>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td></tr><tr>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td></tr><tr>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td></tr><tr>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td>  <td>&nbsp;</td></tr></table>';LODOP=getLodop();if(!LODOP){return}var d=30;var a=30;var m=_.isNumber(n.rightOffset)?n.rightOffset:0;var k=_.isNumber(n.bottomOffset)?n.bottomOffset:0;LODOP.PRINT_INITA(k,m,530+m,763+k,"");LODOP.SET_PRINT_PAGESIZE(1,1480,2100,"");d=q.createHead(c,30,30);var e="";for(var b=0;b<c.dwsRecipe.recipeWestList.length;b++){if(d>650){d+=37;LODOP.ADD_PRINT_TEXT(d,143,241,25,"(以下空白，请翻页)");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",2);LODOP.NEWPAGEA();d=q.createHead(c,30,30)}d+=30;var p=c.dwsRecipe.recipeWestList[b];var g=p.groupNum;LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(d,50,150,30,p.drugName);if(p.skinTest==1){LODOP.ADD_PRINT_TEXT(d,220,55,25,"[皮试]");LODOP.SET_PRINT_STYLEA(0,"Bold",1)}else{LODOP.ADD_PRINT_TEXT(d,220,55,25," ");LODOP.SET_PRINT_STYLEA(0,"Bold",1)}LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(d,300,50,25,p.drugDose+p.drugUnitName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(d,350,120,25,p.drugSpec);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(d,470,60,25,p.totalQty+p.recipeUnit);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");var j,f;if((b+1)!=c.dwsRecipe.recipeWestList.length){j=c.dwsRecipe.recipeWestList[b+1].groupNum||""}else{j=null}if((b-1)>=0){f=c.dwsRecipe.recipeWestList[b-1].groupNum||""}else{f=null}if(f!=g){LODOP.ADD_PRINT_TEXT(d,a,30,25,p.groupNum);e=p.remark}else{LODOP.ADD_PRINT_TEXT(d,a,30,25,"   ")}if(g==j){}else{d+=35;LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(d,a,30,25,".");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(d,50,130,25,"用法："+p.drugUsageName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");if(p.dripSpeed){LODOP.ADD_PRINT_TEXT(d,152,80,25,p.dripSpeed+"滴/分");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}else{LODOP.ADD_PRINT_TEXT(d,152,80,25,"");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}LODOP.ADD_PRINT_TEXT(d,262,100,25,printZS.createFrequencyName(p.frequencyName));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(d,362,40,25,p.totalDay+"天");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(d,405,230,25,"备注："+q.cutStr(e,66));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}}if(d<525){d+=37;LODOP.ADD_PRINT_TEXT(d,143,241,25,"(以下空白)");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",2);LODOP.ADD_PRINT_TEXT(525,40,200,25,"医师："+(c.dwsRecipe.acography.doctorName||""));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(525,300,200,25,"打印时间："+new Date().Format("yyyy-MM-dd HH:mm:ss"));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(695,a,510,62,"注：1、凭此单输液，请妥善保管，按时注射，过期作废。\n      2、输液时，护士已按要求调节输液速度，请不要擅自调节输液。输液期间请勿离开输液\n           区，以防意外。");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TABLE(545,a,510,300,o)}else{d+=37;LODOP.ADD_PRINT_TEXT(d,143,241,25,"(以下空白，请翻页)");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",2);LODOP.NEWPAGEA();d=q.createHead(c,30,30);d+=37;LODOP.ADD_PRINT_TEXT(d,143,241,25,"(以下空白)");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",2);LODOP.ADD_PRINT_TEXT(525,40,200,25,"医师："+(c.dwsRecipe.acography.doctorName||""));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(525,300,200,25,"打印时间："+new Date().Format("yyyy-MM-dd HH:mm:ss"));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TABLE(545,a,510,300,o);LODOP.ADD_PRINT_TEXT(695,a,510,62,"注：1、凭此单输液，请妥善保管，按时注射，过期作废。\n      2、输液时，护士已按要求调节输液速度，请不要擅自调节输液。输液期间请勿离开输液\n           区，以防意外。");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}if(reviewFlag==true){reviewFlag=false;LODOP.PREVIEW();return}LODOP.PRINT()},createFrequencyName:function(b){var a=b;if(b=="qd"){a="每天1次"}else{if(b=="bid"){a="每天2次"}else{if(b=="tid"){a="每天3次"}else{if(b=="qid"){a="每天4次"}else{if(b=="qod"){a="隔日1次"}else{if(b=="qw"){a="每周1次"}else{if(b=="prn"){a="必要时"}}}}}}}return a},createHead:function(f,d,a){LODOP.ADD_PRINT_TEXT(d,0,530,30,parent.$("#c-name").text());LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",15);LODOP.SET_PRINT_STYLEA(0,"Alignment",2);LODOP.SET_PRINT_STYLEA(0,"Bold",1);d+=29;LODOP.ADD_PRINT_TEXT(d,145,241,30,"注射单");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",12);LODOP.SET_PRINT_STYLEA(0,"Alignment",2);LODOP.SET_PRINT_STYLEA(0,"Bold",1);d+=37;LODOP.ADD_PRINT_TEXT(d,a,200,25,"门诊号："+(f.empiInfo.blNumber||""));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(d,300,200,25,"处方号："+f.dwsRecipe.recipeCode);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(7,464,35,25,"页码");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",2);LODOP.ADD_PRINT_TEXT(7,500,35,25,"#/&");LODOP.SET_PRINT_STYLEA(0,"ItemType",2);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",2);d+=25;LODOP.ADD_PRINT_RECT(d,a,510,1,0,1);d+=15;var g="";if(f.empiInfo.gender==1){g="男"}else{if(f.empiInfo.gender==2){g="女"}else{g="保密"}}var e=Utils.getPersonAccurateAge(f.empiInfo.birthDay);LODOP.ADD_PRINT_TEXT(d,a,200,25,"姓名："+f.empiInfo.name+"（"+g+"）");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(d,300,200,25,"年龄："+e);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");d+=30;if(f.empiInfo.mobile==null){f.empiInfo.mobile="-"}LODOP.ADD_PRINT_TEXT(d,a,200,25,"联系电话："+f.empiInfo.mobile);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(d,300,200,25,"科室："+(f.empiInfo.deptName||""));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");d+=30;var c=f.mainDiagnosis||"-";var b=f.secondaryDiagnosis;var i=f.allergiesHistory||"";if(c&&b){LODOP.ADD_PRINT_TEXT(d,a,500,25,"主诊断："+c);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");d=d+25}else{LODOP.ADD_PRINT_TEXT(d,a,500,25,"诊断："+c);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");d=d+25}if(b){LODOP.ADD_PRINT_TEXT(d,a,500,32,"副诊断："+b);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");d=d+32}LODOP.ADD_PRINT_TEXT(d,a,500,32,"过敏史："+i);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");d=d+32;LODOP.ADD_PRINT_TEXT(d,a,260,25,"处方日期："+new Date(f.empiInfo.recipeDate).Format("yyyy年MM月dd日"));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");d+=25;LODOP.ADD_PRINT_RECT(d,a,510,1,0,1);d-=10;return d},cutStr:function(d,a){if(!d){return""}if(a<=0){return""}var c=0;for(var b=0;b<d.length;b++){if(d.charCodeAt(b)>255){c+=2}else{c++}if(c==a){return d.substring(0,b-2)+"..."}else{if(c>a){return d.substring(0,b-2)}}}return d},};