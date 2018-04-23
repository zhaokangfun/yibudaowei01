<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<%@ taglib uri="http://www.springframework.org/tags/form" prefix="fm"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<script type="text/javascript" async="" src="。。/js/pawj.js"></script>
<script type="text/javascript" src="../js/switch.js">
	
</script>
<link rel="stylesheet" href="../js/base_003.css">
<link rel="stylesheet" href="../css/base.css">
<link rel="stylesheet" href="../css/pawj.css">
<link rel="stylesheet" type="text/css" href="../css/drugDictionary.css">
<link rel="stylesheet" type="text/css" href="../css/easy.css">
<title>药品字典</title>
<script type="text/javascript" src="mdcDictDrug_data/ipquery.html"></script>
</head>

<body class="static-public-css drug-dictionary">

	<div id="list_div" class="content-inner drugDicWrap  dsn">
		<div class="pageNav">
			<ul class="clear">
				<li class="pageNav-item west-medicine">西药/中成药</li>
				<li class="pageNav-item chinese-medicine checked">中药</li>
				<li class="pageNav-item material">材料</li>
			</ul>
		</div>
		<div class="tab-content clear">
			<div class="westernMedic dsn">
				<div class="tab-content-top clear">
					<a id="btn_add" class="btn top-btn fl" href="javascript:;"
						wjperm="DICT02-CREATE">新增</a>
					<div class="search-box fr">
						<input id="west_sc_value" class="input-text fl"
							placeholder="药品名称/拼音码" type="text"> <a id="btn_search"
							class="btn search-btn js_search_btn fl"></a>
					</div>
					<div class="fr stateChoose">
						<span class="form-item-title">状态：</span>
						<div class="drop">
							<input id="status" class="input-text" readonly="readonly" val="0"
								value="启用" type="text"> <i class="drop-icon"></i>
							<ul class="wjzs-drop-menu dsn" style="display: none;">
								<li class="drop-item drop_even" title="全部" value=" "
									data-value=" ">全部</li>
								<li class="drop-item drop_odd" title="启用" value="0"
									data-value="0">启用</li>
								<li class="drop-item drop_even" title="停用" value="1"
									data-value="1">停用</li>
							</ul>
						</div>
					</div>
					<div class="fr" style="padding-top: 7px;">
						<ul class="checkbox-box" id="xi">
							<li class="checkbox-item" id="split_xi" val="0"><input
								type="checkbox"> <span class="">拆零药品</span></li>
							<li class="checkbox-item" id="zero_xi" val="0"><input
								type="checkbox"> <span class="">0库存药品</span></li>
						</ul>
					</div>
				</div>
				<div class="table-area fixed-head">
					<div class="tableBox">
						<div class="tableBox-head">
							<table class="common-table full-width-table">
								<tbody>
									<tr>
										<th width="23%">名称</th>
										<th width="15%">规格</th>
										<th width="12%">厂家</th>
										<th width="8%">拆零价</th>
										<th width="8%">拆零单位</th>
										<th width="8%">零售价</th>
										<th width="8%">零售单位</th>
										<th width="12%">操作</th>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="tableBox-cont">
							<table id="tb_detailList" class="common-table full-width-table">
								<tbody>
									<tr>
										<td width="23%">地屈孕酮片</td>
										<td width="15%">10mg</td>
										<td width="12%">AbbottHealthcareProductsB.V.</td>
										<td width="8%"></td>
										<td width="8%"></td>
										<td width="8%">222</td>
										<td width="8%">盒</td>
										<td width="12%"><a id="btn_modify_0"
											wjperm="DICT02-UPDATE"
											onclick="dictDrugManagerMain.showModifyPanel(0)">编辑</a><a
											id="btn_updateStat_0" wjperm="DICT02-DISABLE"
											onclick="dictDrugManagerMain.updateStatus(this.id, 0, 1)">停用</a></td>
									</tr>
									<tr>
										<td width="23%">地屈孕酮片</td>
										<td width="15%">10mg</td>
										<td width="12%">AbbottHealthcareProductsB.V.</td>
										<td width="8%"></td>
										<td width="8%"></td>
										<td width="8%">221</td>
										<td width="8%">盒</td>
										<td width="12%"><a id="btn_modify_1"
											wjperm="DICT02-UPDATE"
											onclick="dictDrugManagerMain.showModifyPanel(1)">编辑</a><a
											id="btn_updateStat_1" wjperm="DICT02-DISABLE"
											onclick="dictDrugManagerMain.updateStatus(this.id, 1, 1)">停用</a></td>
									</tr>
									<tr>
										<td width="23%">流感病毒亚单位疫苗</td>
										<td width="15%">0.5ml/支,含45μg血凝素(每个毒株含15μg血凝素)</td>
										<td width="12%">AbbottBiologicalsB.V.</td>
										<td width="8%"></td>
										<td width="8%"></td>
										<td width="8%">111</td>
										<td width="8%">盒</td>
										<td width="12%"><a id="btn_modify_2"
											wjperm="DICT02-UPDATE"
											onclick="dictDrugManagerMain.showModifyPanel(2)">编辑</a><a
											id="btn_updateStat_2" wjperm="DICT02-DISABLE"
											onclick="dictDrugManagerMain.updateStatus(this.id, 2, 1)">停用</a></td>
									</tr>
									<tr>
										<td width="23%">流感病毒亚单位疫苗</td>
										<td width="15%">0.5ml/支,含45μg血凝素(每个毒株含15μg血凝素)</td>
										<td width="12%">AbbottBiologicalsB.V.</td>
										<td width="8%"></td>
										<td width="8%"></td>
										<td width="8%">2</td>
										<td width="8%">盒</td>
										<td width="12%"><a id="btn_modify_3"
											wjperm="DICT02-UPDATE"
											onclick="dictDrugManagerMain.showModifyPanel(3)">编辑</a><a
											id="btn_updateStat_3" wjperm="DICT02-DISABLE"
											onclick="dictDrugManagerMain.updateStatus(this.id, 3, 1)">停用</a></td>
									</tr>
									<tr>
										<td width="23%">火烧馍</td>
										<td width="15%">q</td>
										<td width="12%">九多肉多</td>
										<td width="8%"></td>
										<td width="8%"></td>
										<td width="8%">12</td>
										<td width="8%">瓶</td>
										<td width="12%"><a id="btn_modify_4"
											wjperm="DICT02-UPDATE"
											onclick="dictDrugManagerMain.showModifyPanel(4)">编辑</a><a
											id="btn_updateStat_4" wjperm="DICT02-DISABLE"
											onclick="dictDrugManagerMain.updateStatus(this.id, 4, 1)">停用</a></td>
									</tr>
									<tr>
										<td width="23%">雌二醇片/雌二醇地屈孕酮片复合包装</td>
										<td width="15%">雌二醇片含雌二醇2mg;雌二醇地屈孕酮片含雌二醇2mg,地屈孕酮10mg</td>
										<td width="12%">AbbottHealthcareProductsB.V.</td>
										<td width="8%"></td>
										<td width="8%"></td>
										<td width="8%">12</td>
										<td width="8%">盒</td>
										<td width="12%"><a id="btn_modify_5"
											wjperm="DICT02-UPDATE"
											onclick="dictDrugManagerMain.showModifyPanel(5)">编辑</a><a
											id="btn_updateStat_5" wjperm="DICT02-DISABLE"
											onclick="dictDrugManagerMain.updateStatus(this.id, 5, 1)">停用</a></td>
									</tr>
									<tr>
										<td width="23%">阿奇霉素片</td>
										<td width="15%">0.25g(25万U)</td>
										<td width="12%">上海现代制药股份有限公司</td>
										<td width="8%"></td>
										<td width="8%"></td>
										<td width="8%">15</td>
										<td width="8%">盒</td>
										<td width="12%"><a id="btn_modify_6"
											wjperm="DICT02-UPDATE"
											onclick="dictDrugManagerMain.showModifyPanel(6)">编辑</a><a
											id="btn_updateStat_6" wjperm="DICT02-DISABLE"
											onclick="dictDrugManagerMain.updateStatus(this.id, 6, 1)">停用</a></td>
									</tr>
									<tr>
										<td width="23%">盐酸环丙沙星片</td>
										<td width="15%">0.25g(按环丙沙星计)</td>
										<td width="12%">杭州民生药业有限公司</td>
										<td width="8%"></td>
										<td width="8%"></td>
										<td width="8%">15</td>
										<td width="8%">盒</td>
										<td width="12%"><a id="btn_modify_7"
											wjperm="DICT02-UPDATE"
											onclick="dictDrugManagerMain.showModifyPanel(7)">编辑</a><a
											id="btn_updateStat_7" wjperm="DICT02-DISABLE"
											onclick="dictDrugManagerMain.updateStatus(this.id, 7, 1)">停用</a></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div id="my-page" class="page-nav">
						<div class="pagination_tips">
							共<span class="pagination_counts">8</span>条数据
							<div class="pagination_select">
								<span class="pagination_cell_count">20</span> <span
									class="pagination_arrow"></span>
								<div class="pagination_options_panel" style="">
									<span class="pagination_option" value="50">50</span><span
										class="pagination_option" value="20">20</span><span
										class="pagination_option" value="10">10</span>
								</div>
							</div>
							条/页
						</div>
					</div>
					<div style="height: 0; width: 0; clear: both;"></div>
				</div>
			</div>

			<div class="chineseMedic">
				<div class="tab-content-top clear">
					<a id="chin_btn_add" class="btn top-btn fl" href="javascript:;"
						wjperm="DICT02-CREATE">新增</a>
					<div class="search-box fr">
						<input id="chin_drugName" class="input-text fl" placeholder="药品名称"
							type="text"> <a id="chin_btn_search"
							class="btn search-btn js_search_btn fl"></a>
					</div>
					<div class="fr stateChoose">
						<span class="form-item-title">状态：</span>
						<div class="drop">
							<input id="chin_status" class="input-text" readonly="readonly"
								val="0" value="启用" type="text"> <i class="drop-icon"></i>
							<ul class="wjzs-drop-menu dsn" style="display: none;">
								<li class="drop-item drop_even" title="全部" value=" "
									data-value=" ">全部</li>
								<li class="drop-item drop_odd" title="启用" value="0"
									data-value="0">启用</li>
								<li class="drop-item drop_even" title="停用" value="1"
									data-value="1">停用</li>
							</ul>
						</div>
					</div>
					<div class="fr" style="padding-top: 7px;">
						<ul class="checkbox-box" id="cn">
							<li class="checkbox-item" id="zero_cn" val="0"><input
								type="checkbox"> <span class="">0库存中药</span></li>
						</ul>
					</div>
				</div>
				<div class="table-area fixed-head">
					<div class="tableBox">
						<div class="tableBox-head">
							<table class="common-table full-width-table">
								<tbody>
									<tr>
										<th width="30%">名称</th>
										<th width="10%">规格</th>
										<th width="10%">类型</th>
										<th width="15%">零售价</th>
										<th width="15%">零售单位</th>
										<th>操作</th>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="tableBox-cont">
							<table class="common-table full-width-table">
								<tbody>
									<tr>
										<td class="dsn"><input
											value="5f3722123b904acd9cb2019a78b5586d" type="hidden"></td>
										<td width="30%">当归</td>
										<td width="10%">1</td>
										<td width="10%">中药饮片</td>
										<td width="15%">13</td>
										<td width="15%">g</td>
										<td class="operateBtn"><span class="edit-method"
											wjperm="DICT02-UPDATE" value="0">编辑</span><span
											class="disabled-method" data="299" value="0"
											wjperm="DICT02-ENABLE">停用</span></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div id="chin-my-page" class="page-nav">
						<div class="pagination_tips">
							共<span class="pagination_counts">1</span>条数据
							<div class="pagination_select">
								<span class="pagination_cell_count">20</span> <span
									class="pagination_arrow"></span>
								<div class="pagination_options_panel" style="">
									<span class="pagination_option" value="50">50</span><span
										class="pagination_option" value="20">20</span><span
										class="pagination_option" value="10">10</span>
								</div>
							</div>
							条/页
						</div>
					</div>
				</div>
			</div>

			<div class="materialMedic dsn">
				<div class="tab-content-top clear" style="top: auto">
					<a id="material_btn_add" class="btn top-btn fl" href="javascript:;"
						wjperm="DICT02-CREATE">新增</a>
					<div class="search-box fr">
						<input id="material_drugName" class="input-text fl"
							placeholder="编号/名称" type="text"> <a
							id="material_btn_search" class="btn search-btn js_search_btn fl"></a>
					</div>
					<div class="fr stateChoose">
						<span class="form-item-title">状态：</span>
						<div class="drop">
							<input id="material_status" class="input-text"
								readonly="readonly" val="0" type="text"> <i
								class="drop-icon"></i>
						</div>
					</div>
					<div class="fr" style="padding-top: 7px;">
						<ul class="checkbox-box" id="cai">
							<li class="checkbox-item" id="zero_cai" val="0"><input
								type="checkbox"> <span class="">0库存材料</span></li>
						</ul>
					</div>
				</div>
				<div class="table-area fixed-head">
					<div class="tableBox">
						<div class="tableBox-head">
							<table class="common-table full-width-table">
								<tbody>
									<tr>
										<th width="25%">材料编码</th>
										<th width="25%">材料名称</th>
										<th width="20%">材料规格</th>
										<th width="15%">库存单位</th>
										<th>操作</th>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="tableBox-cont">
							<table class="common-table full-width-table">

							</table>
						</div>
					</div>
					<div id="material-my-page" class="page-nav"></div>
				</div>
			</div>
		</div>
		<!-- end of .tab-content -->
	</div>

	<input id="drugSortId" type="hidden">
	<div id="add_edit_div" class="content-inner dsn">
		<input id="pyCode" type="hidden"> <input id="wbCode"
			type="hidden">
		<div class="tab-content clear">
			<div class="bl-title">
				<h2>药品基本信息</h2>
			</div>
			<div id="SFDAApprovalNum-searchBox" class="searchBox">
				<span class="form-item-title">药品查询：</span> <input id="searchInput"
					class="input-text sfdaInput" placeholder="国药准字/药品名称/拼音码/五笔码/条形码"
					autocomplete="off" type="text">
				<!--<span class="hintInfo">药品未找到？点击新增</span>-->
			</div>
			<div id="drugBasicBox" class="infoBox">
				<ul class="clear sentInfo">
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>药品名称：</span> <input id="drugCommonName"
						class="input-text validate(required,maxlength(60))"
						disabled="disabled" type="text"></li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>规格：</span> <input id="drugPackageSpec"
						class="input-text validate(required,maxlength(50))"
						disabled="disabled" type="text"></li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>剂型：</span>
						<div class="info-item-wrap-west">
							<div class="easy-autocomplete">
								<input id="drugDosageId" class="input-text validate(required)"
									type="hidden"> <input id="drugDosageName"
									class="easy-input input-text validate(required)"
									disabled="disabled">
								<ul class="easy-resault"></ul>
							</div>
						</div></li>
					<li style="display: none"><input id="drugId" type="hidden">
					</li>
				</ul>
				<ul class="clear sentInfo">
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">&nbsp;</i>国药准字：</span> <input id="SFDAApprovalNum"
						class="input-text validate(maxlength(40))" disabled="disabled"
						type="text"></li>
					<li id="drugManuFactorName-li" class="info-item"><span
						class="form-item-title"><i class="necessary">&nbsp;</i>厂家：</span>
						<input id="drugManuFactorName"
						class="input-text validate(maxlength(100))" disabled="disabled"
						type="text"> <input id="drugManuFactorId" type="hidden">
					</li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>药品类型：</span>
						<div id="drugPropIdDrop" class="drop">
							<input id="drugPropId" class="input-text validate(required)"
								readonly="readonly" placeholder="请选择"> <i
								class="drop-icon"></i>
							<ul class="wjzs-drop-menu dsn" style="display: none;">
								<li class="drop-item drop_even" title="请选择" value=" "
									data-value=" ">请选择</li>
								<li class="drop-item drop_odd" title="西药"
									value="67780CBCA1FC0C72E053086E10ACD8CF"
									data-value="67780CBCA1FC0C72E053086E10ACD8CF">西药</li>
								<li class="drop-item drop_even" title="中成药"
									value="67780CBCA1FD0C72E053086E10ACD8CF"
									data-value="67780CBCA1FD0C72E053086E10ACD8CF">中成药</li>
							</ul>
						</div></li>
				</ul>
				<ul class="clear sentInfo">
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">&nbsp;</i>条形码：</span> <input id="drugBarcode"
						class="input-text validate(maxlength(15))" type="text"></li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">&nbsp;</i>商品名：</span> <input id="drugGoodsName"
						class="input-text validate(maxlength(100))" type="text"></li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">&nbsp;</i>药品本位码：</span> <input id="drugStandardCode"
						class="input-text validate(maxlength(50))" type="text"></li>
				</ul>
			</div>
			<div class="bl-title">
				<h2>处方信息</h2>
			</div>
			<div class="infoBox">
				<ul id="drugPackageSpecInfo" class="clear">
					<li id="specEdit" class="info-item specificEdit"><span
						class="form-item-title"><i class="necessary">*</i>编辑规格：</span> <input
						id="dosage"
						class="input-text validate(required, drugDecimal, number, minEliminateZero(0))"
						placeholder="剂量" type="text">
						<div class="drop">
							<input id="drugDoseUnitId" class="input-text validate(required)"
								readonly="readonly" placeholder="剂量单位" type="text"> <i
								class="drop-icon"></i>
							<ul class="wjzs-drop-menu dsn" style="display: none;">
								<li class="drop-item drop_even" title="mg" value="DW08008"
									data-value="DW08008">mg</li>
								<li class="drop-item drop_odd" title="g" value="DW08007"
									data-value="DW08007">g</li>
								<li class="drop-item drop_even" title="ml" value="DW08010"
									data-value="DW08010">ml</li>
								<li class="drop-item drop_odd" title="支" value="DW08006"
									data-value="DW08006">支</li>
								<li class="drop-item drop_even" title="片" value="DW08001"
									data-value="DW08001">片</li>
								<li class="drop-item drop_odd" title="粒" value="DW08002"
									data-value="DW08002">粒</li>
								<li class="drop-item drop_even" title="丸" value="DW08017"
									data-value="DW08017">丸</li>
								<li class="drop-item drop_odd" title="袋" value="DW08003"
									data-value="DW08003">袋</li>
								<li class="drop-item drop_even" title="瓶" value="DW08004"
									data-value="DW08004">瓶</li>
								<li class="drop-item drop_odd" title="贴" value="DW08018"
									data-value="DW08018">贴</li>
								<li class="drop-item drop_even" title="枚"
									value="505b871a767b438d8116e937b9935619"
									data-value="505b871a767b438d8116e937b9935619">枚</li>
								<li class="drop-item drop_odd" title="包" value="DW08005"
									data-value="DW08005">包</li>
								<li class="drop-item drop_even" title="盒" value="DW08015"
									data-value="DW08015">盒</li>
								<li class="drop-item drop_odd" title="吸"
									value="f25ae09855d848eabaa34932ef51f23e"
									data-value="f25ae09855d848eabaa34932ef51f23e">吸</li>
								<li class="drop-item drop_even" title="揿"
									value="d0ad65ecdc0c47d1b9a97f95b650a32d"
									data-value="d0ad65ecdc0c47d1b9a97f95b650a32d">揿</li>
								<li class="drop-item drop_odd" title="滴" value="DW08020"
									data-value="DW08020">滴</li>
								<li class="drop-item drop_even" title="只"
									value="09a9f80d2a904cfe9cf33debe3853eb7"
									data-value="09a9f80d2a904cfe9cf33debe3853eb7">只</li>
								<li class="drop-item drop_odd" title="dag"
									value="efddabe781d641b5b4ae27a77a1b4fb4"
									data-value="efddabe781d641b5b4ae27a77a1b4fb4">dag</li>
								<li class="drop-item drop_even" title="U" value="DW08014"
									data-value="DW08014">U</li>
								<li class="drop-item drop_odd" title="IU" value="DW08013"
									data-value="DW08013">IU</li>
								<li class="drop-item drop_even" title="单位"
									value="d1fff4869ba74c1597326a98c0671491"
									data-value="d1fff4869ba74c1597326a98c0671491">单位</li>
								<li class="drop-item drop_odd" title="万单位"
									value="c3b103e6f71f4c4f976d4691c9f6a514"
									data-value="c3b103e6f71f4c4f976d4691c9f6a514">万单位</li>
								<li class="drop-item drop_even" title="ug" value="DW08012"
									data-value="DW08012">ug</li>
								<li class="drop-item drop_odd" title="个" value="DW08022"
									data-value="DW08022">个</li>
								<li class="drop-item drop_even" title="次" value="DW08021"
									data-value="DW08021">次</li>
								<li class="drop-item drop_odd" title="IIU"
									value="64ce8d40607f4d338038623cd0c939ee"
									data-value="64ce8d40607f4d338038623cd0c939ee">IIU</li>
								<li class="drop-item drop_even" title="cm" value="DW08023"
									data-value="DW08023">cm</li>
							</ul>
						</div> <span>*</span> <input id="preparationAmount"
						class="input-text validate(required, digits, maxlength(5), minEliminateZero(0))"
						placeholder="制剂数量" type="text">
						<div class="drop">
							<input id="drugBasicUnitId" class="input-text validate(required)"
								readonly="readonly" placeholder="制剂单位" type="text"> <i
								class="drop-icon"></i>
							<ul class="wjzs-drop-menu dsn" style="display: none;">
								<li class="drop-item drop_even" title="支" value="DW08006"
									data-value="DW08006">支</li>
								<li class="drop-item drop_odd" title="片" value="DW08001"
									data-value="DW08001">片</li>
								<li class="drop-item drop_even" title="粒" value="DW08002"
									data-value="DW08002">粒</li>
								<li class="drop-item drop_odd" title="丸" value="DW08017"
									data-value="DW08017">丸</li>
								<li class="drop-item drop_even" title="贴" value="DW08018"
									data-value="DW08018">贴</li>
								<li class="drop-item drop_odd" title="袋" value="DW08003"
									data-value="DW08003">袋</li>
								<li class="drop-item drop_even" title="瓶" value="DW08004"
									data-value="DW08004">瓶</li>
								<li class="drop-item drop_odd" title="枚"
									value="505b871a767b438d8116e937b9935619"
									data-value="505b871a767b438d8116e937b9935619">枚</li>
								<li class="drop-item drop_even" title="吸"
									value="f25ae09855d848eabaa34932ef51f23e"
									data-value="f25ae09855d848eabaa34932ef51f23e">吸</li>
								<li class="drop-item drop_odd" title="揿"
									value="d0ad65ecdc0c47d1b9a97f95b650a32d"
									data-value="d0ad65ecdc0c47d1b9a97f95b650a32d">揿</li>
								<li class="drop-item drop_even" title="滴" value="DW08020"
									data-value="DW08020">滴</li>
								<li class="drop-item drop_odd" title="包" value="DW08005"
									data-value="DW08005">包</li>
								<li class="drop-item drop_even" title="盒" value="DW08015"
									data-value="DW08015">盒</li>
								<li class="drop-item drop_odd" title="板" value="DW08024"
									data-value="DW08024">板</li>
								<li class="drop-item drop_even" title="只"
									value="09a9f80d2a904cfe9cf33debe3853eb7"
									data-value="09a9f80d2a904cfe9cf33debe3853eb7">只</li>
								<li class="drop-item drop_odd" title="个" value="DW08022"
									data-value="DW08022">个</li>
								<li class="drop-item drop_even" title="次" value="DW08021"
									data-value="DW08021">次</li>
								<li class="drop-item drop_odd" title="cm" value="DW08023"
									data-value="DW08023">cm</li>
								<li class="drop-item drop_even" title="ml" value="DW08010"
									data-value="DW08010">ml</li>
							</ul>
						</div> <span>/</span>
						<div class="drop">
							<input id="drugStoreUnitId" class="input-text validate(required)"
								readonly="readonly" placeholder="库存单位" type="text"> <i
								class="drop-icon"></i>
							<ul class="wjzs-drop-menu dsn" style="display: none;">
								<li class="drop-item drop_even" title="盒" value="DW08015"
									data-value="DW08015">盒</li>
								<li class="drop-item drop_odd" title="袋" value="DW08003"
									data-value="DW08003">袋</li>
								<li class="drop-item drop_even" title="瓶" value="DW08004"
									data-value="DW08004">瓶</li>
								<li class="drop-item drop_odd" title="支" value="DW08006"
									data-value="DW08006">支</li>
								<li class="drop-item drop_even" title="kg" value="DW08009"
									data-value="DW08009">kg</li>
								<li class="drop-item drop_odd" title="g" value="DW08007"
									data-value="DW08007">g</li>
								<li class="drop-item drop_even" title="包" value="DW08005"
									data-value="DW08005">包</li>
								<li class="drop-item drop_odd" title="片" value="DW08001"
									data-value="DW08001">片</li>
								<li class="drop-item drop_even" title="粒" value="DW08002"
									data-value="DW08002">粒</li>
								<li class="drop-item drop_odd" title="dag"
									value="efddabe781d641b5b4ae27a77a1b4fb4"
									data-value="efddabe781d641b5b4ae27a77a1b4fb4">dag</li>
								<li class="drop-item drop_even" title="只"
									value="09a9f80d2a904cfe9cf33debe3853eb7"
									data-value="09a9f80d2a904cfe9cf33debe3853eb7">只</li>
								<li class="drop-item drop_odd" title="罐" value="DW08029"
									data-value="DW08029">罐</li>
								<li class="drop-item drop_even" title="板" value="DW08024"
									data-value="DW08024">板</li>
								<li class="drop-item drop_odd" title="个" value="DW08022"
									data-value="DW08022">个</li>
								<li class="drop-item drop_even" title="大盒" value="DW08016"
									data-value="DW08016">大盒</li>
								<li class="drop-item drop_odd" title="贴" value="DW08018"
									data-value="DW08018">贴</li>
							</ul>
						</div>
						<div class="helpTips">
							<i class="helpIcon">?</i>
							<div class="drug-tips">
								<div class="clear">
									<span class="drug-tips-top">示例</span> <span
										class="drug-tips-top2">正确填写方式</span>
								</div>
								<ul class="clear">
									<li>
										<div class="img-s">
											<img src="mdcDictDrug_data/example1.png" alt="">
										</div> <span class="drug-arrow"></span> <span class="fr drug-tips-s">1片*20片/盒</span>
									</li>
									<li>
										<div class="img-s">
											<img src="mdcDictDrug_data/example2.png" alt="">
										</div> <span class="drug-arrow"></span> <span class="fr drug-tips-s">100mg*5粒/盒</span>
									</li>
									<li>
										<div class="img-s">
											<img src="mdcDictDrug_data/example3.png" alt="">
										</div> <span class="drug-arrow"></span> <span class="fr drug-tips-s">40mg*14片/盒</span>
									</li>
									<li>
										<div class="img-s">
											<img src="mdcDictDrug_data/example4.png" alt="">
										</div> <span class="drug-arrow"></span> <span class="fr drug-tips-s">1片*10片/盒</span>
									</li>
								</ul>
							</div>
						</div></li>
				</ul>
				<ul class="clear">
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>零售价：</span> <input id="drugRetailPrice"
						class="input-text validate(required,number,notspace,decimal(4),maxlength(10))"
						style="width: 45% !important;" type="text"> <span
						id="drugRetailPrice-suffix" class="form-item-suffix"></span></li>
					<li class="info-item"><span class="form-item-title">最高限价：</span>
						<input id="drugCeilingPrice"
						class="input-text validate(number,notspace,decimal(4),maxlength(10))"
						style="width: 45% !important;"> <span
						id="drugCeilingPrice-suffix" class="form-item-suffix"></span></li>
				</ul>
				<ul class="clear">
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>是否拆零：</span>
						<div id="drugSplit" class="choose_warpper">
							<ul class="clear radio-box">
								<li class="radio-item clear"><input id="0" type="radio"><span
									title="否">否</span></li>
								<li class="radio-item clear"><input id="1" type="radio"><span
									title="是">是</span></li>
							</ul>
						</div></li>
					<li class="info-item" id="scattered_div"><span
						class="form-item-title"><i class="necessary">*</i>拆零价：</span> <input
						id="scatteredPrice" class="input-text"
						style="width: 45% !important;" type="text"> <span
						id="scatteredPrice-suffix" class="form-item-suffix"></span></li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>是否抗菌药物：</span>
						<div id="drugAntibiotic" class="choose_warpper">
							<ul class="clear radio-box">
								<li class="radio-item clear"><input id="0" type="radio"><span
									title="否">否</span></li>
								<li class="radio-item clear"><input id="1" type="radio"><span
									title="是">是</span></li>
							</ul>
						</div></li>
				</ul>
			</div>
			<div class="bl-title">
				<h2>使用信息</h2>
			</div>
			<div class="infoBox">
				<ul class="clear">
					<li class="info-item"><span class="form-item-title">默认用法：</span>
						<div class="drop">
							<input id="drugUsageId" class="input-text" readonly="readonly"
								placeholder="请选择" type="text"> <i class="drop-icon"></i>
							<ul class="wjzs-drop-menu dsn" style="display: none;">
								<li class="drop-item drop_even" title="请选择" value=" "
									data-value=" ">请选择</li>
								<li class="drop-item drop_odd" title="口服" value="YF09001"
									data-value="YF09001">口服</li>
								<li class="drop-item drop_even" title="静滴" value="YF09005"
									data-value="YF09005">静滴</li>
								<li class="drop-item drop_odd" title="静脉注射" value="YF09025"
									data-value="YF09025">静脉注射</li>
								<li class="drop-item drop_even" title="肌肉注射" value="YF09006"
									data-value="YF09006">肌肉注射</li>
								<li class="drop-item drop_odd" title="续滴"
									value="3cc788d5b8514c2494df355ee34d1fd2"
									data-value="3cc788d5b8514c2494df355ee34d1fd2">续滴</li>
								<li class="drop-item drop_even" title="外用" value="YF09009"
									data-value="YF09009">外用</li>
								<li class="drop-item drop_odd" title="冲服" value="YF09008"
									data-value="YF09008">冲服</li>
								<li class="drop-item drop_even" title="含服" value="YF09021"
									data-value="YF09021">含服</li>
								<li class="drop-item drop_odd" title="滴眼" value="YF09012"
									data-value="YF09012">滴眼</li>
								<li class="drop-item drop_even" title="雾化吸入" value="YF09003"
									data-value="YF09003">雾化吸入</li>
								<li class="drop-item drop_odd" title="滴鼻" value="YF09013"
									data-value="YF09013">滴鼻</li>
								<li class="drop-item drop_even" title="饭后服" value="YF09029"
									data-value="YF09029">饭后服</li>
								<li class="drop-item drop_odd" title="喷喉" value="YF09004"
									data-value="YF09004">喷喉</li>
								<li class="drop-item drop_even" title="塞肛用" value="YF09015"
									data-value="YF09015">塞肛用</li>
								<li class="drop-item drop_odd" title="皮下注射" value="YF09023"
									data-value="YF09023">皮下注射</li>
								<li class="drop-item drop_even" title="喷鼻" value="YF09020"
									data-value="YF09020">喷鼻</li>
								<li class="drop-item drop_odd" title="外洗" value="YF09011"
									data-value="YF09011">外洗</li>
								<li class="drop-item drop_even" title="舌下含服" value="YF09002"
									data-value="YF09002">舌下含服</li>
								<li class="drop-item drop_odd" title="外敷" value="YF09010"
									data-value="YF09010">外敷</li>
								<li class="drop-item drop_even" title="含漱" value="YF09022"
									data-value="YF09022">含漱</li>
								<li class="drop-item drop_odd" title="饭前服" value="YF09028"
									data-value="YF09028">饭前服</li>
								<li class="drop-item drop_even" title="灌肠"
									value="8a23c67ee588482fa419a34f65a925dd"
									data-value="8a23c67ee588482fa419a34f65a925dd">灌肠</li>
								<li class="drop-item drop_odd" title="阴道用" value="YF09016"
									data-value="YF09016">阴道用</li>
								<li class="drop-item drop_even" title="嚼服" value="YF09007"
									data-value="YF09007">嚼服</li>
								<li class="drop-item drop_odd" title="皮内注射" value="YF09024"
									data-value="YF09024">皮内注射</li>
								<li class="drop-item drop_even" title="皮试" value="YF09019"
									data-value="YF09019">皮试</li>
								<li class="drop-item drop_odd" title="滴耳" value="YF09014"
									data-value="YF09014">滴耳</li>
								<li class="drop-item drop_even" title="吸入" value="YF09017"
									data-value="YF09017">吸入</li>
								<li class="drop-item drop_odd" title="空腹服" value="YF09030"
									data-value="YF09030">空腹服</li>
								<li class="drop-item drop_even" title="磨粉" value="YF09027"
									data-value="YF09027">磨粉</li>
								<li class="drop-item drop_odd" title="水煎服" value="YF09026"
									data-value="YF09026">水煎服</li>
								<li class="drop-item drop_even" title="烊化（服）" value="YF09018"
									data-value="YF09018">烊化（服）</li>
								<li class="drop-item drop_odd" title="入壶"
									value="b8892c8feb7b4c1f9e6f3ead847c726e"
									data-value="b8892c8feb7b4c1f9e6f3ead847c726e">入壶</li>
								<li class="drop-item drop_even" title="晨服"
									value="ca054c962cc44f5bae37ec84f6a6948a"
									data-value="ca054c962cc44f5bae37ec84f6a6948a">晨服</li>
								<li class="drop-item drop_odd" title="关节腔注射"
									value="7622daf43ffd4d4f8dc72b3a62a69cb3"
									data-value="7622daf43ffd4d4f8dc72b3a62a69cb3">关节腔注射</li>
							</ul>
						</div></li>
					<li class="info-item"><span class="form-item-title">默认频率：</span>
						<div class="drop">
							<input id="drugFrequencyId" class="input-text"
								readonly="readonly" placeholder="请选择" type="text"> <i
								class="drop-icon"></i>
							<ul class="wjzs-drop-menu dsn" style="display: none;">
								<li class="drop-item drop_even" title="请选择" value=" "
									data-value=" ">请选择</li>
								<li class="drop-item drop_odd" title="qd" value="PL07001"
									data-value="PL07001">qd</li>
								<li class="drop-item drop_even" title="bid" value="PL07002"
									data-value="PL07002">bid</li>
								<li class="drop-item drop_odd" title="tid" value="PL07003"
									data-value="PL07003">tid</li>
								<li class="drop-item drop_even" title="qid" value="PL07004"
									data-value="PL07004">qid</li>
								<li class="drop-item drop_odd" title="qod" value="PL07005"
									data-value="PL07005">qod</li>
								<li class="drop-item drop_even" title="qw" value="PL07006"
									data-value="PL07006">qw</li>
								<li class="drop-item drop_odd" title="prn" value="PL07007"
									data-value="PL07007">prn</li>
								<li class="drop-item drop_even" title="qwd"
									value="f9749892bfde4e5a9e433061cb3a0818"
									data-value="f9749892bfde4e5a9e433061cb3a0818">qwd</li>
								<li class="drop-item drop_odd" title="qn"
									value="293bf4c6b86b4f50b0c0b452a3c2ed45"
									data-value="293bf4c6b86b4f50b0c0b452a3c2ed45">qn</li>
								<li class="drop-item drop_even" title="st"
									value="8dedefff21b24ceeb83892ae19e4f522"
									data-value="8dedefff21b24ceeb83892ae19e4f522">st</li>
								<li class="drop-item drop_odd" title="q6h"
									value="5902e039edea4ab5b7223c801c986961"
									data-value="5902e039edea4ab5b7223c801c986961">q6h</li>
								<li class="drop-item drop_even" title="q8h"
									value="af8454c068b24c528238241942fb7bc1"
									data-value="af8454c068b24c528238241942fb7bc1">q8h</li>
								<li class="drop-item drop_odd" title="q12h"
									value="6eeba8959bd1415c8733bd53a56edaad"
									data-value="6eeba8959bd1415c8733bd53a56edaad">q12h</li>
								<li class="drop-item drop_even" title="q4h"
									value="11e7161d57b14952be54aba64a90e514"
									data-value="11e7161d57b14952be54aba64a90e514">q4h</li>
							</ul>
						</div></li>
					<li class="info-item"><span class="form-item-title">默认用量：</span>
						<input id="drugDose"
						class="input-text validate(drugDecimal, number, minEliminateZero(0))"
						type="text"> <span id="drugDose-suffix"
						class="form-item-suffix"></span></li>
				</ul>
			</div>
			<div class="footBtn clear">
				<span id="btn_save" class="btn submit-btn fr">保存</span> <span
					id="btn_cancel" class="btn normal-inverse-btn fr">取消</span>
			</div>
		</div>
		<!-- end of .tab-content -->
	</div>


	<div id="chinese_medicine_add_edit_div" class="content-inner">
		<!-- <input id="cn_pyCode" type="hidden"/>
    <input id="cn_wbCode" type="hidden"/> -->
		<input id="cn_pDrugId" type="hidden">
		<div class="tab-content clear">
			<div class="bl-title">
				<h2>药品信息</h2>
			</div>
			<div class="infoBox">
				<ul class="clear">
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>药品名称：</span> <input id="cn_drugId" type="hidden">
						<input id="cn_drugName"
						class="input-text validate(required, maxlength(25))"
						maxlength="25" type="text"></li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">&nbsp;</i>经典药名：</span>
						<div class="info-item-wrap">
							<div class="easy-autocomplete">
								<input id="cn_drugCommonName"
									class="easy-input validate(maxlength(50))">
								<ul class="easy-resault"></ul>
							</div>
						</div></li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>药品分类：</span>


							<select name="jixingid"
								style="width: 250px; border: 1px solid #cccc; margin-top: 7px;">
								<option value="0">请选择:</option>

								<option value="1">中药饮片</option>
								<option value="2">中药颗粒</option>
							</select>
					</li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>规格：</span> <input id="cn_drugPackageSpec"
						class="input-text validate(required, maxlength(20))" type="text">
					</li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">&nbsp;</i>拼音码：</span> <input id="cn_pyCode"
						class="input-text validate(maxlength(25))" maxlength="25"
						type="text"></li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">&nbsp;</i>五笔码：</span> <input id="cn_wbCode"
						class="input-text validate(maxlength(25))" maxlength="25"
						type="text"></li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">&nbsp;</i>厂商：</span> <input id="cn_drugManuFactorName"
						class="input-text validate(maxlength(50))" type="text"> <input
						id="cn_drugManuFactorId" value="" type="hidden"></li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">&nbsp;</i>产地：</span> <input id="cn_productionPlace"
						class="input-text validate(maxlength(25))" type="text"></li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">&nbsp;</i>药品本位码：</span> <input
						id="cn_drugStandardCode"
						class="input-text validate(maxlength(50))" type="text"></li>
				</ul>
			</div>
			<div class="bl-title">
				<h2>处方信息</h2>
			</div>
			<div class="infoBox">
				<ul class="clear">
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>零售单位：</span>
							
							<select name="jixingid"
								style="width: 250px; border: 1px solid #cccc; margin-top: 7px;">
								<option value="0">请选择:</option>
								<c:forEach items="${dwlist}" var="b">			
									<option value="${b.dwid}">${b.dwname}</option>
								
								</c:forEach>
							</select>
							
					</li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>库存单位：</span>
						
							<select name="jixingid"
								style="width: 250px; border: 1px solid #cccc; margin-top: 7px;">
								<option value="0">请选择:</option>
								<c:forEach items="${dwlist}" var="b">			
									<option value="${b.dwid}">${b.dwname}</option>
								
								</c:forEach>
							</select>
					</li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>库存转换率：</span> <input id="cn_drugStoreUnitRate"
						class="input-text validate(required, decimal(4), minEliminateZero(0))"
						placeholder="1g=?g" type="text"></li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>零售价：</span> <input id="cn_drugRetailPrice"
						class="input-text validate(required,number,notspace,decimal(4),maxlength(8),min(0))"
						maxlength="10" type="text"> <span class="unitTag">元
							/ <span id="cn_retailUnitTag">g</span>
					</span></li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">&nbsp;</i>最高限价：</span> <input id="cn_ceilingPrice"
						class="input-text validate(number,notspace,decimal(4),maxlength(8),min(0))"
						type="text"> <span class="unitTag">元 / <span
							id="cn_ceilingPrice-suffix">g</span></span></li>
				</ul>
			</div>
			<div class="bl-title">
				<h2>使用信息</h2>
			</div>
			<div class="infoBox">
				<ul class="clear">
					<li class="info-item"><span class="form-item-title1">默认用法/煎法：</span>
					
						
							<select name="jixingid"
								style="width: 250px; border: 1px solid #cccc; margin-top: 2px; height:30px;">
								<option value="0">请选择:</option>
								<c:forEach items="${jflist}" var="b">			
									<option value="${b.jianfaid}">${b.name}</option>
								
								</c:forEach>
							</select>	
	
				</ul>
			</div>
			<div class="footBtn clear">
				<span class="btn submit-btn fr">保存</span> <span
					class="btn normal-inverse-btn fr">取消</span>
			</div>
		</div>
		<!-- end of .tab-content -->
	</div>


	<input id="madrugPropId" type="hidden">
	<!-- 材料类型 -->
	<div id="material_add_edit_div" class="content-inner dsn">
		<div class="tab-content clear" style="overflow-y: auto;">
			<div class="bl-title">
				<h2>基本属性</h2>
			</div>
			<input id="madrugId" type="hidden">
			<!-- 编号 -->
			<input id="mapyCode" type="hidden">
			<!-- 拼音简码 -->
			<input id="mawbCode" type="hidden">
			<!-- 五笔简码 -->
			<div class="infoBox">
				<ul class="clear">
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>材料名称：</span> <input id="madrugName"
						class="input-text validate(required, maxlength(25))" type="text">
					</li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">&nbsp;</i>材料分类：</span>
						<div class="drop">
							<input id="madrugSortId" class="input-text" readonly="readonly"
								type="text"> <i class="drop-icon"></i>
						</div></li>
				</ul>
			</div>

			<div class="bl-title">
				<h2>材料规格</h2>
			</div>
			<div class="infoBox">
				<ul class="clear">
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>材料规格：</span> <input id="madrugPackageSpec"
						class="input-text validate(required, maxlength(25))" type="text">
					</li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>是否拆包：</span>
						<div class="drop">
							<input id="madrugSplit" class="input-text validate(required)"
								readonly="readonly" type="text"> <i class="drop-icon"></i>
						</div></li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>最小单位：</span>
						<div class="drop">
							<input id="madrugBasicUnitId"
								class="input-text validate(required)" readonly="readonly"
								type="text"> <i class="drop-icon"></i>
						</div></li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>库存单位：</span>
						<div class="drop">
							<input id="madrugStoreUnitId"
								class="input-text validate(required)" readonly="readonly"
								type="text"> <i class="drop-icon"></i>
						</div></li>
					<li class="info-item"><span class="form-item-title"
						style="width: 110px;"><i class="necessary">*</i>库存单位进制：</span> <input
						id="madrugStoreUnitRate" value="1"
						class="input-text validate(required, decimal(4), minEliminateZero(0))"
						type="text"></li>
				</ul>
			</div>

			<div class="bl-title">
				<h2>材料价格</h2>
			</div>
			<div class="infoBox">
				<ul class="clear">
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>零售单价：</span> <input id="madrugRetailPrice"
						class="input-text validate(required,number,notspace,decimal(4),maxlength(10))"
						style="width: 45% !important;" type="text"> <span
						id="madrugRetailPrice-suffix" class="form-item-suffix"></span></li>
				</ul>
			</div>

			<!-- end of .inner-table.wrapper -->
			<div class="footBtn clear">
				<span class="btn submit-btn fr" wjperm="DICT02-SAVE">保存</span> <span
					class="btn normal-inverse-btn fr">取消</span>
			</div>
		</div>
		<!-- end of .tab-content -->
	</div>

	<!-- end of .content-inner -->
	<script type="text/javascript" src="../js/pawj-pro.js"></script>
	<script type="text/javascript" src="../js/hz2pinyin.js"></script>
	<script type="text/javascript" src="../js/hz2wubi.js"></script>
	<script type="text/javascript" src="../js/jquery.js"></script>
	<script type="text/javascript" src="../js/maindata_url.js"></script>
	<script type="text/javascript" src="../js/easy.js"></script>
	<script type="text/javascript" src="../js/mdcDictDrugNew.js"></script>
	<script type="text/javascript" src="../js/drugDictionaryCn.js"></script>
	<script type="text/javascript" src="../js/addChineseMedic.js"></script>
	<script type="text/javascript" src="../js/mdcDictMaterialNew.js"></script>
	<script type="text/javascript">
		//数据采集
		var _maq = _maq || [];
		_maq.push([ 'sysType', 'B' ], [ 'sysModel', 'DICT_MGR' ], [ 'sysMenu',
				'DICT02' ]);

		function async_ipquery() {
			var script = document.createElement("script");
			script.setAttribute("type", "text/javascript");
			script.src = ('https:' == document.location.protocol ? 'https://ip.ws.126.net/ipquery'
					: 'http://ip.ws.126.net/ipquery');
			document.getElementsByTagName("head")[0].appendChild(script);
			var collection = document.createElement('script');
			collection.type = 'text/javascript';
			collection.async = true;
			collection.src = '../resources/js/pawj.collection.js';
			var sCollection = document.getElementsByTagName('script')[0];
			sCollection.parentNode.insertBefore(collection, sCollection);
		}

		$(function() {
			if (window.attachEvent) {
				window.attachEvent('onload', async_ipquery);
			} else {
				window.addEventListener('load', async_ipquery);
			}
		});
	</script>


	<div class="loading-mask" style="display: none;">
		<span class="loading-content"></span>
	</div>
</body>
</html>