function AddChineseMedic(a){this.drugDictionaryCn=a;this.defaultSelectedUnit=null;this.defaultSelectedStoreUnit=null;this.drugSubTypeData=null}AddChineseMedic.prototype={init:function(){this._bindEvent()},_bindEvent:function(){var d=this;$("#chinese_medicine_add_edit_div").ketchup();$("#chinese_medicine_add_edit_div .normal-inverse-btn").click(function(){d.clearInput();$("#chinese_medicine_add_edit_div").addClass("dsn");$("#list_div").removeClass("dsn");d.drugDictionaryCn.renderPage();Utils.enableInput($("#cn_drugStoreUnitId").parent());Utils.enableInput($("#cn_drugStoreUnitRate"));Utils.enableInput($("#cn_drugDispenseUnitId").parent())});$("#chinese_medicine_add_edit_div .submit-btn").click(function(){d.saveOrUpdate()});var c={url:ContextClinc_Server+"combox/cnDrugSubTypes",dataType:"json",contentType:"application/json",data:{}};var f=Utils.myAjaxHandler(c);f.done(function(m){var j=m.data;d.drugSubTypeData=m.data;var k=m.errorMessage;var l=m.errorCode;if(l!="E0000000"){$.paError("失败："+l+"，"+k);return}var h={idKey:"DRUG_SUB_TYPE_ID",txtKey:"DRUG_SUB_TYPE_NAME",isNeedClear:true};$("#cn_drugSortId").WJZSDropdown(j,h,function(n,o){$("#cn_drugPropId").val(o.DRUG_TYPE_ID);if((o.DRUG_SUB_TYPE_CODE==="001"||o.DRUG_SUB_TYPE_NAME==="中药饮片")&&!$("#cn_drugStoreUnitId").attr("readonly")){$("#cn_drugDispenseUnitId").SetWJZSDropdownSelectedData(d.defaultSelectedUnit);$("#cn_drugDispenseUnitName").val("g");$("#cn_drugStoreUnitId").SetWJZSDropdownSelectedData(d.defaultSelectedStoreUnit);$("#cn_drugStoreUnitName").val("kg");$("#cn_drugStoreUnitRate").val(1000);$("#cn_retailUnitTag,#cn_ceilingPrice-suffix").text("g")}})}).fail(function(h){$.paError("获取数据失败!")}).always(function(){});var e={url:ContextClinc_Server+"mdcDrugUnit/selectDropDownList",dataType:"json",contentType:"application/json",data:{}};var g=Utils.myAjaxHandler(e);g.done(function(m){var k=m.errorMessage;var l=m.errorCode;if(l!="E0000000"){$.paError("失败："+l+"，"+k);return}var j=m.data;var h={idKey:"DRUG_UNIT_ID",txtKey:"DRUG_UNIT_NAME",isNeedClear:true};$.each(j,function(n,o){if(o.DRUG_UNIT_NAME=="g"){d.defaultSelectedUnit=o.DRUG_UNIT_ID}else{if(o.DRUG_UNIT_NAME=="kg"){d.defaultSelectedStoreUnit=o.DRUG_UNIT_ID}}});$("#cn_drugDispenseUnitId").WJZSDropdown(j,h,function(n,o){if(o.DRUG_UNIT_NAME!="请选择"){$("#cn_retailUnitTag").text(o.DRUG_UNIT_NAME);$("#cn_ceilingPrice-suffix").text(o.DRUG_UNIT_NAME);$("#cn_drugDispenseUnitName").val(o.DRUG_UNIT_NAME)}d.storeUnitRate()});$("#cn_drugDispenseUnitId").SetWJZSDropdownSelectedData(d.defaultSelectedUnit);$("#cn_drugDispenseUnitName").val("g");$("#cn_drugStoreUnitId").WJZSDropdown(j,h,function(n,o){$("#cn_drugStoreUnitName").val(o.DRUG_UNIT_NAME);d.storeUnitRate()});$("#cn_drugStoreUnitId").SetWJZSDropdownSelectedData(d.defaultSelectedUnit);$("#cn_drugStoreUnitName").val("g")}).fail(function(h){$.paError("获取数据失败!")}).always(function(){});var a={url:ContextClinc_Server+"mdDictItem/getMdDictItemDropDownList",dataType:"json",method:"GET",contentType:"application/json;charset=utf-8",};var b=Utils.myAjaxHandler(a);b.done(function(m){var j=m.data;var k=m.errorMessage;var l=m.errorCode;if(l!="E0000000"){$.paError("失败："+l+"，"+k);return}var h={idKey:"dictItemId",txtKey:"dictItemName",isNeedClear:true};$("#cn_drugUsageId").WJZSDropdown(j,h,function(n,o){})}).fail(function(h){}).always(function(){});$("#cn_drugName").on("keyup",function(){d.fillPYValue();d.fillWBValue()});d._initThinkInput($("#cn_drugCommonName"))},storeUnitRate:function(){var a=$("#cn_drugDispenseUnitId").attr("val").trim();var b=$("#cn_drugStoreUnitId").attr("val").trim();if(a!=""&&b!=""){var c="1"+$("#cn_drugStoreUnitId").val()+"=?"+$("#cn_drugDispenseUnitId").val();$("#cn_drugStoreUnitRate").attr("placeholder",c)}else{$("#cn_drugStoreUnitRate").attr("placeholder","")}},timeouter:null,_initThinkInput:function(a){var b=this;options={resaultName:"经典药名",keyAndValue:{keyName:"DRUG_COMMON_NAME",valueName:"DRUG_COMMON_NAME"},callback:function(c){$("#cn_drugCommonName").val(c.DRUG_COMMON_NAME);$("#cn_pDrugId").val(c.DRUG_ID);$("#cn_drugDispenseUnitId").SetWJZSDropdownSelectedData(c.DRUG_DISPENSE_UNIT_ID);$("#cn_drugStoreUnitId").SetWJZSDropdownSelectedData(c.DRUG_STORE_UNIT_ID);$("#cn_drugStoreUnitName").val($("#cn_drugStoreUnitId").val());$("#cn_drugStoreUnitRate").val(c.DRUG_STORE_UNIT_RATE);$("#cn_drugPackageSpec").val(c.DRUG_PACKAGE_SPEC);$("#cn_pyCode").val(c.PY_CODE);$("#cn_wbCode").val(c.WB_CODE);$("#cn_drugSortId").SetWJZSDropdownSelectedData(b.getMdcDrugSubType(c.DRUG_SORT_ID));$("#cn_drugStandardCode").val(c.DRUG_STANDARD_CODE)}};a.easyAutoComplete(options).on("input propertyChange",function(){b.getMenuData($(this))}).on("focus",function(){b.getMenuData($(this))})},getMenuData:function(c){var b=this;var a=$("#cn_drugCommonName").val();if(!a){return}if(b.timeouter){clearTimeout(b.timeouter)}b.timeouter=setTimeout(function(){var e={url:ContextClinc_Server+"mdcDictDrug/searchCnDrug",dataType:"json",contentType:"application/json;charset=utf-8",data:JSON.stringify({q:a,startIndex:0,limitRows:100})};var d=Utils.myAjaxHandler(e);d.done(function(h){var f=h.errorMessage;var g=h.errorCode;if(g!=="E0000000"){$.paError("失败："+g+"，"+f);return}c.easyDataChange(h.data)}).fail(function(f){}).always(function(){})},300)},fillPYValue:function(){var b=$.trim($("#cn_drugName").val());var a=hz2JP(b);$("#cn_pyCode").val(a)},fillWBValue:function(){var b=$.trim($("#cn_drugName").val());var a=hz2WB(b);$("#cn_wbCode").val(a)},saveOrUpdate:function(){var c=this;if(!$("#chinese_medicine_add_edit_div").ableToFinish()){return}var b={drugId:$("#cn_drugId").val(),drugName:$("#cn_drugName").val(),drugCommonName:$("#cn_drugCommonName").val(),pyCode:$("#cn_pyCode").val(),wbCode:$("#cn_wbCode").val(),pDrugId:$("#cn_pDrugId").val(),drugPropId:$("#cn_drugPropId").val(),drugSortId:$.trim($("#cn_drugSortId").attr("val")),drugDispenseUnitId:$.trim($("#cn_drugDispenseUnitId").attr("val")),drugDispenseUnitName:$.trim($("#cn_drugDispenseUnitName").val()),drugDispenseUnitRate:1,drugDoseUnitId:$.trim($("#cn_drugDispenseUnitId").attr("val")),drugDoseUnitName:$.trim($("#cn_drugDispenseUnitName").val()),drugDoseUnitRate:1,drugBasicUnitId:$.trim($("#cn_drugDispenseUnitId").attr("val")),drugBasicUnitName:$.trim($("#cn_drugDispenseUnitName").val()),drugRetailPrice:$.trim($("#cn_drugRetailPrice").val()),drugStoreUnitId:$.trim($("#cn_drugStoreUnitId").attr("val")),drugStoreUnitName:$.trim($("#cn_drugStoreUnitName").val()),drugStoreUnitRate:$.trim($("#cn_drugStoreUnitRate").val()),drugPackageSpec:$.trim($("#cn_drugPackageSpec").val()),ceilingPrice:$.trim($("#cn_ceilingPrice").val())||-1,drugUsageId:$.trim($("#cn_drugUsageId").attr("val")),drugManuFactorName:$("#cn_drugManuFactorName").val(),drugManufactorId:$("#cn_drugManuFactorId").val(),productionPlace:$("#cn_productionPlace").val(),drugStandardCode:$("#cn_drugStandardCode").val()};if(!$("#cn_drugId").val()){var g={presetStatus:0,delFlag:0,disabled:0,isMaterial:0,isStandard:1};b=$.extend({},g,b)}var a={mdcDictDrug:b};var f=JSON.stringify(a);var e=ContextClinc_Server+"mdcDictDrug/saveDrugAndConvertRate";if($.trim($("#cn_drugId").val())!=""){e=ContextClinc_Server+"mdcDictDrug/updateDrugAndConvertRate"}var d={url:e,dataType:"json",data:f,contentType:"application/json",showMask:true};var h=Utils.myAjaxHandler(d);h.done(function(l){var j=l.errorMessage;var k=l.errorCode;if(k!=="E0000000"){$.paError("失败："+k+"，"+j);return}if($.trim($("#cn_drugId").val())!=""){$.paSuccess("更新成功！")}else{c.drugDictionaryCn.currPage=1;$.paSuccess("保存成功！")}c.clearInput();$("#chinese_medicine_add_edit_div").addClass("dsn");$("#list_div").removeClass("dsn");c.drugDictionaryCn.renderPage()}).fail(function(j){$.paError("获取数据失败!")}).always()},fillDrugInfo:function(b){var a=this;var c=a.drugDictionaryCn.pageMsg[b];$("#cn_drugId").val(c.DRUG_ID);$("#cn_drugName").val(c.DRUG_NAME);$("#cn_drugSortId").SetWJZSDropdownSelectedData(c.DRUG_SORT_ID);$("#cn_drugCommonName").val(c.DRUG_COMMON_NAME);$("#cn_drugDispenseUnitId").SetWJZSDropdownSelectedData(c.DRUG_DISPENSE_UNIT_ID);$("#cn_drugDispenseUnitName").val(c.DRUG_DISPENSE_UNIT_NAME);$("#cn_drugRetailPrice").val(c.DRUG_RETAIL_PRICE);$("#cn_retailUnitTag").text(c.DRUG_DISPENSE_UNIT_NAME);$("#cn_ceilingPrice-suffix").text(c.DRUG_DISPENSE_UNIT_NAME);$("#cn_drugStoreUnitId").SetWJZSDropdownSelectedData(c.DRUG_STORE_UNIT_ID);$("#cn_drugStoreUnitName").val(c.DRUG_STORE_UNIT_NAME);$("#cn_drugStoreUnitRate").val(c.DRUG_STORE_UNIT_RATE);$("#cn_drugPackageSpec").val(c.DRUG_PACKAGE_SPEC);$("#cn_pyCode").val(c.PY_CODE);$("#cn_wbCode").val(c.WB_CODE);$("#cn_drugManuFactorName").val(c.DRUG_MANUFACTOR_NAME);$("#cn_drugManuFactorId").val(c.DRUG_MANUFACTOR_ID);$("#cn_productionPlace").val(c.PRODUCTION_PLACE);$("#cn_ceilingPrice").val(c.CEILING_PRICE);$("#cn_drugUsageId").SetWJZSDropdownSelectedData(c.DRUG_USAGE_ID);$("#cn_drugStandardCode").val(c.DRUG_STANDARD_CODE);a.storeUnitRate();if(c.DRUG_STORE_UNIT_QTY!=null&&parseFloat(c.DRUG_STORE_UNIT_QTY)>0){Utils.disabledInput($("#cn_drugStoreUnitId").parent());Utils.disabledInput($("#cn_drugStoreUnitRate"));Utils.disabledInput($("#cn_drugDispenseUnitId").parent())}},clearInput:function(){$("#cn_drugId").val("");$("#cn_drugName").val("");$("#cn_drugSortId").SelectWJZSDropdownFirstItem();$("#cn_drugCommonName").val("");$("#cn_drugDispenseUnitId").SetWJZSDropdownSelectedData(this.defaultSelectedUnit);$("#cn_drugDispenseUnitName").val("g");$("#cn_drugRetailPrice").val("");$("#cn_retailUnitTag").text("g");$("#cn_ceilingPrice-suffix").text("g");$("#cn_drugStoreUnitId").SetWJZSDropdownSelectedData(this.defaultSelectedUnit);$("#cn_drugStoreUnitName").val("g");$("#cn_drugStoreUnitRate").val("");$("#cn_drugUsageId").SelectWJZSDropdownFirstItem();$("#cn_drugStandardCode").SelectWJZSDropdownFirstItem()},getMdcDrugSubType:function(a){var b=this;for(i in b.drugSubTypeData){if(b.drugSubTypeData[i].P_DRUG_SUB_TYPE_ID===a){$("#cn_drugPropId").val(b.drugSubTypeData[i].DRUG_TYPE_ID);return b.drugSubTypeData[i].DRUG_SUB_TYPE_ID}}}};