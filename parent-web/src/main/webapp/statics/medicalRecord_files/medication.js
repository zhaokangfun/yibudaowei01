/** 
 * cdss - v2.0.0 
 * Create Date -2017-04-25 22:07:25
 * Copyright (c) 2017 jerry; Licensed GPLv2 
 */
function CdssDrug(a,b){this.init(a,b)}var $medication_tpl={};$medication_tpl["medication/tpl/body"]='<div class="hm-drug-body"><div><%if(data.interactionList && data.interactionList.length){%> <div class="hm-drug-con-t">相互作用：</div><div class="hm-drug-con-pan"> <% var interactionList = data.interactionList||[]%> <% for(var i =0;i< interactionList.length;i++){%> <% var temp = interactionList[i];var drugList = temp.drugList||[] %> <div><span class="hm-drug-descript" desc="<%=temp.description%>"> <% for(var j =0;j< drugList.length;j++){%><% var drug = drugList[j]; %><a href="javascript:void(0)" drugid="<%=drug.drugUuid%>" drugname="<%=drug.drugName%>"><%=drug.drugName%></a><%if(j!=drugList.length-1){%>与<%}%><%}%><%=commonData.gradeInteract[temp.grade]%>合用</span></div> <%}%> </div> <%}else{%> 审核暂未发现相互作用 <%}%> </div><div> <%if(data.tabooList && data.tabooList.length){%> <div class="hm-drug-con-t">用药禁忌：</div><div class="hm-drug-con-pan"> <% var tabooList = data.tabooList||[]%> <% for(var i =0;i< tabooList.length;i++){%> <% var temp = tabooList[i]; var drug = temp.drug; %> <div><span class="hm-drug-descript" desc="<%=temp.description%>"><a href="javascript:void(0)" drugid="<%=drug.drugUuid%>" drugname="<%=drug.drugName%>"><%=drug.drugName%></a><%=commonData.gradeTaboo[temp.grade]+\'于\'+temp.crowd%> </span></div> <%}%> </div> <%}else{%> 审核暂未发现人群禁忌 <%}%> </div><div> <% var repetitionList = data.repetitionList||[]%> <% for(var i =0;i< repetitionList.length;i++){%> <% var temp = repetitionList[i]; var drug = temp.drug; %> <div class="hm-drug-con-gxy"><%=temp.diseaseName%>用药重复：</div><div class="hm-drug-con-gxypan"> <% var repetitionDrugList = temp.repetitionDrugList||[]%> <% for(var j =0;j< repetitionDrugList.length;j++){%> <% var repeat = repetitionDrugList[j];var drugList = repeat.drugList||[] %> <div> <% for(var k =0;k< drugList.length;k++){%><% var drug = drugList[k]; %><a href="javascript:void(0)" drugid="<%=drug.drugUuid%>" drugname="<%=drug.drugName%>"><%=drug.drugName%></a><%if(k!=drugList.length-1){%>与<%}%><%}%>都属于<%=repeat.drugClassification%> </div> <%}%> </div> <%}%> </div></div>',$medication_tpl["medication/tpl/head"]='<div class="hm-drug-panel-head"><span class="hm-drug-title">用药审核</span><span class="hm-drug-state"><%=state %></span><span class="hm-title-icon-span"><img src="<%=link%>/images/tabshow.png" class="hm-title-icon"></span></div>',$medication_tpl["medication/tpl/search_body"]="<div> <% for(var i =0;i< contList.length;i++){%> <% var temp = contList[i]; %> <div class=\"hm-drug-search-content <%=i==0?'first':''%> <%=i==(contList.length-1)?'last':''%>\"><span class=\"hm-drug-search-title\"><%=temp.title%></span><div class=\"hm-drug-search-detail\"> <%=temp.content%> </div></div> <%}%> </div>",$medication_tpl["medication/tpl/search_head"]='<div class="hm-drug-panel-headBase"><span class="hm-drug-title" drugid="<%=drug.drugUuid%>"><%=drug.drugName%></span><span class="hm-title-icon-span"><img src="./images/tabshow.png" class="hm-title-icon"></span></div>',CdssDrug.prototype.drugSearch=function(a,b){function c(b){for(var c=b.drugList||[],g=[],h=0;h<c.length;h++){var i=c[h],j=f().renderTpl($medication_tpl["medication/tpl/search_head"],{drug:i});g.push({title:j,content:"",callback:function(a){f(this).find(".hm-title-icon").toggleClass("active");var b=f(this).find(".hm-drug-title").attr("drugId");a.innerHTML||jss.ax(e.drug_detail,{type:"POST",header:{Huimei_id:d.autherkey,"api-extend-params":d.userOptions},data:{drugId:b},success:function(b){if(0==b.head.error&&b.body){var c=f().renderTpl($medication_tpl["medication/tpl/search_body"],{contList:b.body.docContentList||[]});a.innerHTML=c}}})}})}var k=jss("<div>");k.getDom().id="hm_search_d_window_"+jss.uuid(),jss(a).html("").append(k),k.addClass("hm-drug-panel").addClass("hm-drug-search");var l=k.html("").accordion({mutex:!1,items:g});l.closedAll(),l.open(0)}var d=this,e=d.urls,f=jss;jss.ax(e.drug_Search,{type:"POST",header:{Huimei_id:d.autherkey,"api-extend-params":d.userOptions},data:{drugName:b},success:function(a){0==a.head.error&&a.body&&c(a.body)}})},CdssDrug.prototype.init=function(a,b){var c=(this.urls,this);c.autherkey=b.autherkey,c.userOptions=b.userOptions;var d=(jss,jss("<div>"));d.getDom().id="hm_drug_window_"+jss.uuid(),c.containId="#"+d.getDom().id,jss(a).append(d)},CdssDrug.prototype.sendDrug=function(a){function b(a){var b=g.stateCommon;if(f(d.containId).removeClass(b.css1),f(d.containId).removeClass(b.css2),f(d.containId).removeClass(b.css3),a){h.remove(),f(d.containId).addClass(b["css"+a.safeStatus]);var e=f().renderTpl($medication_tpl["medication/tpl/head"],{state:b[a.safeStatus],link:jss.cdssRoot}),i=f().renderTpl($medication_tpl["medication/tpl/body"],{data:a,commonData:g})}else{f(d.containId).addClass(b.css2);var e=f().renderTpl($medication_tpl["medication/tpl/head"],{state:"正在审核",link:jss.cdssRoot}),i=""}f(d.containId).hasClass("hm-drug-panel")||f(d.containId).addClass("hm-drug-panel"),f(d.containId).html(""),f(d.containId).accordion({mutex:!1,items:[{title:e,content:i,callback:function(a){f(d.containId).find(".hm-title-icon").toggleClass("active")}}]}),a&&c()}function c(){var a=f(d.containId).find(".hm-drug-descript"),b=f(".hm-drug-body");a.bind("onmouseover",function(){var a=this,c=a.clientHeight,d=f(a).attr("desc");if(d){var e=a.offsetTop,g=a.offsetLeft,h=f("#cdss_drug_up_show_mess");if(!h.getDom()){var h=f("<span>");h.addClass("cdss-pop-up-bl"),h.getDom().id="cdss_drug_up_show_mess"}b.append(h),h.html(d),h.css({display:"",left:g+"px",top:e+c+"px"})}}),a.bind("onmouseout",function(){var a=f("#cdss_drug_up_show_mess");a&&a.css({display:"none"})});var c=f(d.containId).find(".hm-drug-body").find("a");c.bind("onclick",function(){d.onDrugClick&&d.onDrugClick.call(this,f(this).attr("drugid"))})}var d=this,e=d.urls,f=(a.drugIds||[],jss);if(!a.drugIds.length)return void f(d.containId).html("");var g={stateCommon:{1:"不通过",2:"待审核",3:"通过",css1:"hm-drug-unpass",css2:"hm-drug-pendaudit",css3:"hm-drug-pass"},gradeInteract:{1:"禁止",2:"谨慎"},gradeTaboo:{1:"禁用",2:"不适用",3:"不推荐",4:"不宜应用",5:"忌用",6:"避免使用",7:"不建议",8:"慎用",9:"权衡利弊"}};b();var h=f(".jss-accordion-panel-collapse-body").loading({position:"inherit",width:"40px"});jss.ax(e.safe_medication,{type:"POST",header:{Huimei_id:d.autherkey,"api-extend-params":d.userOptions},data:a,success:function(a){0==a.head.error&&a.body&&b(a.body)}})},CdssDrug.prototype.urls={drug_detail:{develop:"/mockdata/drug/detail.json",online:jss.root+"/hmsm/v_1_0/drug/detail"},drug_Search:{develop:"/mockdata/drug/search.json",online:jss.root+"/hmsm/v_1_0/drug/search"},safe_medication:{develop:"/mockdata/drug/safe_medication.json",online:jss.root+"/hmsm/v_1_0/safe_medication"}};