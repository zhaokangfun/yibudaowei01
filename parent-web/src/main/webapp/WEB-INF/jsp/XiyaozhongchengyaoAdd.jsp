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
<script type="text/javascript" src="../js/pawj.js"></script>
<script type="text/javascript" src="../js/pawj-pro.js"></script>
<script type="text/javascript" src="../js/switch.js"></script>
<link rel="stylesheet" href="../css/base_003.css">
<link rel="stylesheet" href="../css/base.css">
<link rel="stylesheet" href="../css/pawj.css">
<link rel="stylesheet" href="../css/pawj.min.css">
<link rel="stylesheet" type="text/css" href="../css/drugDictionary.css">
<link rel="stylesheet" type="text/css" href="../css/easy.css">
<link rel="stylesheet" type="text/css" href="../css/layui.css/">
<link rel="stylesheet" type="text/css" href="../css/global.css/">
<title>药品字典</title>
<script type="text/javascript" src="mdcDictDrug_data/ipquery.html"></script>

</head>

<body class="static-public-css drug-dictionary">

	<div id="list_div" class="content-inner drugDicWrap  dsn">
		<div class="pageNav">
			<ul class="clear">
				<li class="pageNav-item checked west-medicine">西药/中成药</li>
				<li class="pageNav-item chinese-medicine">中药</li>
				<li class="pageNav-item material">材料</li>
			</ul>
		</div>


		<div class="chineseMedic dsn">
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
							val="0" type="text"> <i class="drop-icon"></i>
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

						</table>
					</div>
				</div>
				<div id="chin-my-page" class="page-nav"></div>
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
						<input id="material_status" class="input-text" readonly="readonly"
							val="0" type="text"> <i class="drop-icon"></i>
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
	<div id="add_edit_div" class="content-inner">
		<form action="" method="post" class="form form-horizontal"
			id="form-article-add">
			<input id="pyCode" value="" val="" type="hidden"> <input
				id="wbCode" value="" val="" type="hidden">
			<div class="tab-content clear">
				<div class="bl-title">
					<h2>药品基本信息</h2>
				</div>
				<div id="SFDAApprovalNum-searchBox" class="searchBox">
					<span class="form-item-title">药品查询：</span> <input id="groupName"
						class="input-text sfdaInput" placeholder="国药准字/药品名称/拼音码/五笔码/条形码"
						autocomplete="off" val="" type="text">
					<!--<span class="hintInfo">药品未找到？点击新增</span>-->
				</div>
				<div id="drugBasicBox" class="infoBox">
					<ul class="clear sentInfo">
						<li class="info-item"><span class="form-item-title"><i
								class="necessary">*</i>药品名称：</span> <input id="drugCommonName"
							name="xyname" class="input-text validate(required,maxlength(60))"
							val="" type="text"></li>
						<li class="info-item"><span class="form-item-title"><i
								class="necessary">*</i>规格：</span> <input id="drugPackageSpec"
							name="guige" class="input-text validate(required,maxlength(50))"
							val="" type="text"></li>
						<li class="info-item"><span class="form-item-title"><i
								class="necessary">*</i>剂型：</span>
							<div class="info-item-wrap-west">
								<div class="easy-autocomplete">

									<select name="jixingid"
										style="width: 50px; border: 1px solid #cccc; margin-left:3px; width: 240px; height: 28px;">
										<option value="0">请选择:</option>
										<c:forEach items="${jxlist}" var="b">
											<option value="${b.jxid}">${b.jixingname}</option>
										</c:forEach>
									</select>
								</div>
							</div></li>
					</ul>
					<ul class="clear sentInfo">
						<li class="info-item"><span class="form-item-title"><i
								class="necessary">&nbsp;</i>国药准字：</span> <input id="SFDAApprovalNum"
							name="guoyaozhunzi" class="input-text validate(maxlength(40))"
							val="" type="text"></li>
						<li id="drugManuFactorName-li" class="info-item"><span
							class="form-item-title"><i class="necessary">&nbsp;</i>厂家：</span>

							<select name="scsid" style="width: 50px; border: 1px solid #cccc; margin-left:3px; width: 230px; height: 28px;">
								<option value="0">请选择:</option>
								<c:forEach items="${scs}" var="b">
									<option value="${b.scsid}">${b.scsname}</option>
								</c:forEach>
						</select></li>

						<li id="drugManuFactorName-li" class="info-item"><span
							class="form-item-title"><i class="necessary">&nbsp;</i>供应商：</span>
							
								<select name="gysid" style="width: 50px; border: 1px solid #cccc; margin-left:3px; width: 230px; height: 28px;">
							<option value="0">请选择:</option>
							<c:forEach items="${gys}" var="b">
									<option value="${b.gysid}">${b.gysname}</option>
							</c:forEach>
								</select>
							</li>


						<li id="drugManuFactorName-li" class="info-item"><span
							class="form-item-title"><i class="necessary">&nbsp;</i>药品类型：</span>

							<select name="yptypeid"
							style="width: 50px; border: 1px solid #cccc; margin-left:3px; width: 230px; height: 28px;">
								<option value="0">请选择:</option>
								<option value="1">西药</option>
								<option value="2">中成药</option>
						</select></li>


					</ul>
					<ul class="clear sentInfo">
						<li class="info-item"><span class="form-item-title"><i
								class="necessary">&nbsp;</i>条形码：</span> <input id="drugBarcode"
							class="input-text validate(maxlength(15))" val=""
							name="tiaoxingma" type="text"></li>
						<li class="info-item"><span class="form-item-title"><i
								class="necessary">&nbsp;</i>商品名：</span> <input id="drugGoodsName"
							class="input-text validate(maxlength(100))" val=""
							name="goodsname" type="text"></li>
						<li class="info-item"><span class="form-item-title"><i
								class="necessary">&nbsp;</i>药品本位码：</span> <input id="drugStandardCode"
							class="input-text validate(maxlength(50))" val=""
							name="ypbenweima" type="text"></li>
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
							placeholder="剂量" val="" name="jiliang" type="text">

							<div>
								<select name="danweiid"
									style="width: 50px; border: 1px solid #cccc; margin-left: 15px; width: 100px; height: 28px;">
									<c:forEach items="${dw}" var="b">
										<option value="${b.dwid}">${b.dwname}</option>
									</c:forEach>
								</select> <span>*</span> <input id="dosage"
									class="input-text validate(required, drugDecimal, number, minEliminateZero(0))"
									placeholder="制剂数量" val="" type="text" name="zhijishuliang"
									style="width: 150px;"> <select name="zhijidanweiid"
									style="width: 50px; border: 1px solid #cccc; margin-left: 15px; width: 100px; height: 28px;">
									<c:forEach items="${dw}" var="b">
										<option value="${b.dwid}">${b.dwname}</option>
									</c:forEach>
								</select> <span>/</span> <select name="kcdanwei"
									style="width: 50px; border: 1px solid #cccc; margin-left: 15px; width: 100px; height: 28px;">
									<c:forEach items="${dw}" var="b">
										<option value="${b.dwid}">${b.dwname}</option>
									</c:forEach>
								</select>

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
											</div> <span class="drug-arrow"></span> <span
											class="fr drug-tips-s">1片*20片/盒</span>
										</li>
										<li>
											<div class="img-s">
												<img src="mdcDictDrug_data/example2.png" alt="">
											</div> <span class="drug-arrow"></span> <span
											class="fr drug-tips-s">100mg*5粒/盒</span>
										</li>
										<li>
											<div class="img-s">
												<img src="mdcDictDrug_data/example3.png" alt="">
											</div> <span class="drug-arrow"></span> <span
											class="fr drug-tips-s">40mg*14片/盒</span>
										</li>
										<li>
											<div class="img-s">
												<img src="mdcDictDrug_data/example4.png" alt="">
											</div> <span class="drug-arrow"></span> <span
											class="fr drug-tips-s">1片*10片/盒</span>
										</li>
									</ul>
								</div>
							</div></li>
					</ul>
					<ul class="clear">
						<li class="info-item"><span class="form-item-title"><i
								class="necessary">*</i>零售价：</span> <input id="drugRetailPrice"
							class="input-text validate(required,number,notspace,decimal(4),maxlength(10))"
							style="width: 45% !important;" val="" name="lsprice" type="text">
							<span id="drugRetailPrice-suffix" class="form-item-suffix"
							style="display: none;"></span></li>
						<li class="info-item"><span class="form-item-title">最高限价：</span>
							<input id="drugCeilingPrice"
							class="input-text validate(number,notspace,decimal(4),maxlength(10))"
							style="width: 45% !important;" name="maxprice" val=""> <span
							id="drugCeilingPrice-suffix" class="form-item-suffix"
							style="display: none;"></span></li>
					</ul>
					<ul class="clear">
						<li class="info-item"><span class="form-item-title"><i
								class="necessary">*</i>是否拆零：</span>
						<select name="shifouchailing"
							style="width: 50px; border: 1px solid #cccc; margin-left:3px; width: 100px; height: 28px;">
								<option value="1">是</option>
								<option value="2">否</option>
						</select></li>

						<li class="info-item"><span class="form-item-title"><i
								class="necessary">*</i>是否抗菌药物：</span> <select name="shifoukangjun"
							style="width: 50px; border: 1px solid #cccc; margin-left:3px; width: 100px; height: 28px;">
								<option value="1">是</option>
								<option value="2">否</option>
						</select></li>
					</ul>
				</div>
				<div class="bl-title">
					<h2>使用信息</h2>
				</div>
				<div class="infoBox">
					<ul class="clear">
						<li class="info-item"><span class="form-item-title">默认用法：</span>

							<select name="yonfaid"
							style="width: 50px; border: 1px solid #cccc; margin-left:3px; width: 230px; height: 28px;">
								<c:forEach items="${yf}" var="b">
									<option value="${b.yfid}">${b.yfname}</option>
								</c:forEach>
						</select></li>
						<li class="info-item"><span class="form-item-title">默认频率：</span>
							

								<select name="plid" style="width: 50px; border: 1px solid #cccc; margin-left:3px; width: 100px; height: 28px;">
									<c:forEach items="${pl}" var="b">
										<option value="${b.plid}">${b.plname}</option>
									</c:forEach>
								</select>

					</li>
						<li class="info-item"><span class="form-item-title">默认用量：</span>
							<input id="drugDose"
							class="input-text validate(drugDecimal, number, minEliminateZero(0))"
							val="" name="morenyongliang" type="text"> <span
							id="morenyongliang" class="form-item-suffix"
							style="display: none;"></span></li>
					</ul>
				</div>
				<div class="footBtn clear">
					<span id="btn_save" class="btn submit-btn fr" onclick="ckadde()">保存</span>
					<span id="btn_cancel" class="btn normal-inverse-btn fr">取消</span>
				</div>
			</div>
		</form>
		<!-- end of .tab-content -->
	</div>


	<div id="chinese_medicine_add_edit_div" class="content-inner dsn">
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
						<div class="drop">
							<input id="cn_drugSortId" class="input-text validate(required)"
								readonly="readonly" placeholder="请选择" type="text"> <input
								id="cn_drugPropId" type="hidden"> <i class="drop-icon"></i>
						</div></li>
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
						id="cn_drugManuFactorId" type="hidden"></li>
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
						<div class="drop">
							<input id="cn_drugDispenseUnitId"
								class="input-text validate(required)" placeholder="请选择">
							<i class="drop-icon"></i>
						</div> <input id="cn_drugDispenseUnitName" type="hidden"></li>
					<li class="info-item"><span class="form-item-title"><i
							class="necessary">*</i>库存单位：</span>
						<div class="drop">
							<input id="cn_drugStoreUnitId"
								class="input-text validate(required)" placeholder="请选择">
							<i class="drop-icon"></i>
						</div> <input id="cn_drugStoreUnitName" type="hidden"></li>
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
						<div class="drop">
							<input id="cn_drugUsageId" class="input-text" readonly="readonly"
								placeholder="请选择" type="text"> <i class="drop-icon"></i>
						</div></li>
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
		function ckadde() {
			$.ajax({
				type : 'post',
				url : '../xizhong/xiyaoadd',
				data : $("#form-article-add").serialize(),
				cache : false,
				success : function(data) {
						alert('成功!');
						window.location.href = '../zidian/xiyao';
					}
				
			})

		}
	</script>

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