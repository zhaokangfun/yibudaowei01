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
<html lang="zh-cn">
<head>
<base href="<%=basePath%>">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<title>角色列表</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="description" content="">
<meta name="Keywords" content="">
<script type="text/javascript" async="" src="role_files/pawj.js"></script>
<script type="text/javascript" src="role_files/switch.js"></script>
<link rel="stylesheet" href="role_files/base.css">
<link rel="stylesheet" href="role_files/base_002.css">
<link rel="stylesheet" type="text/css" href="role_files/pawj.css">
<link rel="stylesheet" type="text/css"
	href="role_files/clinicManagement.css">
<link rel="stylesheet" type="text/css"
	href="role_files/authorityManagementNew.css">
<title></title>
<script type="text/javascript" src="role_files/ipquery.html"></script>
<style type="text/css">
	.P{
		background-image: url("images/icon_checkbox.png");
	}
</style>
</head>
<body
	class="static-public-css clinic-management-css authority-manage-css">
	<div class="sub-menu-wrapper">
		<div class="left-arrow dsn"></div>
		<div id="dd-ctrl" class="dot-more dsn"></div>
		<div class="right-arrow dsn"></div>
		<div id="sub-menu" class="tab-nav clear" menu="FASTBUYDRUG01"
			style="display: inline-block;">
			<span id="CLINICSET01" menu="CLINICSET01" onclick="gokeshi()">科室管理</span><span
				id="CLINICSET03" menu="CLINICSET03" class="selected"
				onclick="clickaddjuese()">角色管理</span><span id="CLINICSET02"
				menu="CLINICSET02">员工管理</span>
		</div>
	</div>
	<div class="content-inner" id="list_div" style="margin-top: 50px;">

		<div class="tab-content clear" id="role_management">

			<div class="bl-title bt0 table-top-title">
				<h2>角色管理</h2>
			</div>

			<div class="tab-top clear table-top-btn">

				<a href="javascript:;" class="btn normal-btn fl" id="addBtn">新增角色</a>

				<div class="fr">
					<div class="fl">
						<span class="form-item-title" style="margin-top: 0;">状态：</span>

						<div class="drop" style="margin: 0;">
							<input class="input-text" readonly="readonly" placeholder="不限"
								id="status" val=" " value="不限" type="text"> <i
								class="drop-icon"></i>
							<ul class="wjzs-drop-menu dsn" style="display: none; top: 28px;">
								<li class="drop-item drop_even drop_over" title="不限" value=" "
									data-value=" ">不限</li>
								<li class="drop-item drop_odd" title="未使用" value="0"
									data-value="0">未使用</li>
								<li class="drop-item drop_even" title="使用中" value="1"
									data-value="1">使用中</li>
							</ul>
						</div>
					</div>
					<!-- end of .fl -->

					<div class="search-box fl" style="margin: 0 0 0 20px;">
						<input class="input-text fl" placeholder="角色名" id="name"
							type="text"> <a href="javascript:;"
							class="btn search-btn js_search_btn fl" id="searchBtn"></a>
					</div>
				</div>
				<!-- end of .fr -->
			</div>
			<!-- end of .tab-top -->
			<div class="table-wrap"
				style="padding: 110px 0 74px 0; overflow: hidden;">
				<div class="table-content">
					<table class="common-table full-width-table" id="tablelist">
						<tbody>
							<tr>
								<th>序号</th>
								<th>角色名称</th>
								<th>状态</th>
								<th>创建时间</th>
								<th>管理</th>
							</tr>
							<c:forEach items="${role }" var="r">
								<tr id="">
									<td style="text-align: left;">${r.roleid }</td>
									<td style="text-align: left;">${r.rolename }</td>
									<c:if test="${r.status==1 }">
										<td>使用中</td>
									</c:if>
									<c:if test="${r.status==2 }">
										<td>未使用</td>
									</c:if>
									<td style="text-align: left;">${r.createtime}</td>
									<td><a href="javascript:void(0);"
										onclick="clinicRole_js.editData('122db240c46a4c389057c9ad7ac2f929','前台护士[预设]','1002')">查看</a></td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>
			</div>
			<div id="my-page" class="page-nav">
				<div class="pagination_tips">
					共<span class="pagination_counts">2</span>条数据
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
		<!-- end of .tab-content -->

	</div>
	<!-- end of .content-inner -->

	<div class="content-inner" id="add_edit_div"
		style="display: none; margin-top: 50px;">

		<div class="tab-content clear add-role">

			<div class="bl-title bt0 table-top-title">
				<h2 id="editName">新增角色</h2>
			</div>

			<div class="input-wrapper table-top-btn" style="padding: 15px 10px;">
				<span class="form-item-title"> <i class="necessary">*</i>角色：
				</span> <input class="input-text validate(required,maxlength(10))"
					id="roleId" type="text">
			</div>
			<!--        <div id="coverEdit" style="height: 95%; width: 100%; z-index: 99999; position: absolute;display: none;cursor:not-allowed;"></div> -->

			<div class="checkboxes-chooseBox">
				<div id="permissionDiv">
					<div class="bl-title" style="border-top: 1px solid #dfdfdf;">
						<h2>角色权限设置</h2>
					</div>
					<div class="checkboxes-wrapper">
						<ul class="level1-checkboxes">
							<li class="menu_item level1-item" value="DENT_INDEX"><span
								class="menu_name">首页</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="DENT_INDEX01"><span
										class="menu_name">首页<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission"
											style="display: none;">
											<li class="menu_item level3-item"><span
												value="DENT_INDEX01-VIEW" class="menu_name">查询</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="RECEPTION"><span
								class="menu_name">接诊</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="RECEPTION01"><span
										class="menu_name">接诊列表<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission"
											style="display: none;"></ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="APT"><span
								class="menu_name">预约管理</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="APT01"><span
										class="menu_name">诊所预约<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="APT01-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="APT01-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="APT01-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="APT02"><span
										class="menu_name">预约查询<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="APT02-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="APT02-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="APT02-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="APT02-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="APT05"><span
										class="menu_name">健康商品待诊<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="APT05-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="APT03"><span
										class="menu_name">排班管理<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="APT03-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="APT03-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="APT03-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="APT03-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="APT03-VIEW" class="menu_name">查询</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="FASTBUYDRUG"><span
								class="menu_name">购药</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="FASTBUYDRUG01"><span
										class="menu_name">快速购药<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="FASTBUYDRUG01-VIEW" class="menu_name">查询</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="PATREG"><span
								class="menu_name">患者登记</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="PATREG01"><span
										class="menu_name">患者登记<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="PATREG01-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="PATREG01-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="PATREG01-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="PATREG01-PRINT" class="menu_name">打印</span></li>
											<li class="menu_item level3-item"><span
												value="PATREG01-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="PATREG01-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="PATREG01-PREVIEW" class="menu_name">预览</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="PATREG02"><span
										class="menu_name">登记列表<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="PATREG02-VIEW" class="menu_name">查询</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="NURTR"><span
								class="menu_name">分诊台</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="NURTR02"><span
										class="menu_name">分诊列表<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="NURTR02-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="NURTR01"><span
										class="menu_name">分诊台<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="NURTR01-CREATE" class="menu_name">新增</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="HZZX"><span
								class="menu_name">今日就诊</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="DTS_DWS01"><span
										class="menu_name">患者信息<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DTS_DWS01-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="HZZX01"><span
										class="menu_name">今日就诊<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="HZZX01-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="OPC_DWS04"><span
										class="menu_name">门诊病历<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="OPC_DWS04-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="OPC_DWS01"><span
										class="menu_name">检验检查<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="OPC_DWS01-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="OPC_DWS03"><span
										class="menu_name">治疗项目<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="OPC_DWS03-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="OPC_DWS06"><span
										class="menu_name">西药处方<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="OPC_DWS06-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="OPC_DWS09"><span
										class="menu_name">中草药方<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="OPC_DWS09-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="OPC_DWS09-ENABLE" class="menu_name">启用</span></li>
											<li class="menu_item level3-item"><span
												value="OPC_DWS09-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="OPC_DWS09-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="TCM_DWS18"><span
										class="menu_name">中成药方<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="TCM_DWS18-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="TCM_DWS19"><span
										class="menu_name">理疗单<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="TCM_DWS19-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="COURSE03"><span
										class="menu_name">疗程单<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="COURSE03-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="COURSE03-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="COURSE03-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="COURSE03-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="COURSE03-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="TCM_DWS06"><span
										class="menu_name">特殊理疗<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="TCM_DWS06-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="TCM_DWS06-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="TCM_DWS06-PRINT" class="menu_name">打印</span></li>
											<li class="menu_item level3-item"><span
												value="TCM_DWS06-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="TCM_DWS06-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="TCM_DWS20"><span
										class="menu_name">贴敷方<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="TCM_DWS20-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="DTS_DWS08"><span
										class="menu_name">随访<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DTS_DWS08-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="DTS_DWS08-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="DTS_DWS08-VIEW" class="menu_name">查询</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="CASH"><span
								class="menu_name">收费管理</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="CASH01"><span
										class="menu_name">计价收费<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="CASH01-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="CASH01-ENABLE" class="menu_name">启用</span></li>
											<li class="menu_item level3-item"><span
												value="CASH01-PRINT" class="menu_name">打印</span></li>
											<li class="menu_item level3-item"><span
												value="CASH01-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="CASH01-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="CASH01-DISABLE" class="menu_name">禁用</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="CASH02"><span
										class="menu_name">收费记录<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="CASH02-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="CASH02-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="CASH02-ENABLE" class="menu_name">启用</span></li>
											<li class="menu_item level3-item"><span
												value="CASH02-PRINT" class="menu_name">打印</span></li>
											<li class="menu_item level3-item"><span
												value="CASH02-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="CASH02-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="CASH02-DISABLE" class="menu_name">禁用</span></li>
											<li class="menu_item level3-item"><span
												value="CASH02-PREVIEW" class="menu_name">预览</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="CASH03"><span
										class="menu_name">结账管理<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="CASH03-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="CASH03-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="CASH03-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="CASH03-AUDIT" class="menu_name">审核</span></li>
											<li class="menu_item level3-item"><span
												value="CASH03-PRINT" class="menu_name">打印</span></li>
											<li class="menu_item level3-item"><span
												value="CASH03-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="CASH03-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="CASH03-PREVIEW" class="menu_name">预览</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="CASH04"><span
										class="menu_name">欠费管理<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="CASH04-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="CASH04-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="CASH04-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="CASH04-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="CASH04-VIEW" class="menu_name">查询</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="DRUG"><span
								class="menu_name">库房管理</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="DRUG02"><span
										class="menu_name">库存管理<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DRUG02-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG02-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG02-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="DRUG03"><span
										class="menu_name">入库管理<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DRUG03-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG03-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG03-AUDIT" class="menu_name">审核</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG03-PRINT" class="menu_name">打印</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG03-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG03-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG03-PREVIEW" class="menu_name">预览</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="DRUG04"><span
										class="menu_name">出库管理<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DRUG04-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG04-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG04-AUDIT" class="menu_name">审核</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG04-PRINT" class="menu_name">打印</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG04-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG04-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG04-PREVIEW" class="menu_name">预览</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="DRUG05"><span
										class="menu_name">盘点管理<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DRUG05-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG05-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG05-AUDIT" class="menu_name">审核</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG05-PRINT" class="menu_name">打印</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG05-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG05-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG05-PREVIEW" class="menu_name">预览</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="DRUG_GRANT"><span
								class="menu_name">门诊发药</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="DRUG_GRANT01"><span
										class="menu_name">发药操作<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DRUG_GRANT01-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG_GRANT01-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG_GRANT01-MEDICINE" class="menu_name">发药</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG_GRANT01-AUDIT" class="menu_name">审核</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG_GRANT01-PRINT" class="menu_name">打印</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG_GRANT01-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG_GRANT01-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="DRUG_GRANT01-WITHDRAWAL" class="menu_name">退药</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="PATFILE"><span
								class="menu_name">客户管理</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="PATFILE0102"><span
										class="menu_name">健康档案<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="PATFILE0102-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="PATFILE0102-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="PATFILE0102-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="PATFILE0102-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="PATFILE0102-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="PATFILE02"><span
										class="menu_name">会员管理<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="PATFILE02-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="PATFILE02-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="PATFILE02-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="PATFILE02-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="PATFILE02-VIEW" class="menu_name">查询</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="FOLLOWUP"><span
								class="menu_name">随访管理</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="FOLLOWUP01"><span
										class="menu_name">待随访<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="FOLLOWUP01-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="FOLLOWUP01-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="FOLLOWUP01-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="FOLLOWUP01-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="FOLLOWUP02"><span
										class="menu_name">已随访<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="FOLLOWUP02-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="FOLLOWUP02-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="FOLLOWUP02-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="FOLLOWUP02-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="FOLLOWUP03"><span
										class="menu_name">新增随访<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="FOLLOWUP03-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="FOLLOWUP03-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="FOLLOWUP03-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="FOLLOWUP03-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="FOLLOWUP03-VIEW" class="menu_name">查询</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="SAT"><span
								class="menu_name">满意度管理</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="SAT01"><span
										class="menu_name">满意度查看<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="SAT01-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="SAT02"><span
										class="menu_name">医生满意度<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="SAT02-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="SAT03"><span
										class="menu_name">就诊满意度<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="SAT03-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="SAT04"><span
										class="menu_name">客户投诉受理<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="SAT04-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="SAT04-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="SAT04-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="SAT04-UPDATE" class="menu_name">编辑</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="SAT05"><span
										class="menu_name">客户投诉反馈<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="SAT05-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="SAT05-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="SAT05-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="SAT05-UPDATE" class="menu_name">编辑</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="DICT"><span
								class="menu_name">基础设置</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="DICT07"><span
										class="menu_name">模板设置</span>
									<ul class="level2-checkboxes">
											<li class="menu_item level2-item" value="TEMPLATE17"><span
												class="menu_name">模板列表<i class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission">
													<li class="menu_item level3-item"><span
														value="TEMPLATE17-VIEW" class="menu_name">查询</span></li>
												</ul></li>
											<li class="menu_item level2-item" value="TEMPLATE01"><span
												class="menu_name">门诊病历模板<i class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission">
													<li class="menu_item level3-item"><span
														value="TEMPLATE01-CREATE" class="menu_name">新增</span></li>
												</ul></li>
											<li class="menu_item level2-item" value="TEMPLATE02"><span
												class="menu_name">检验检查模板<i class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission">
													<li class="menu_item level3-item"><span
														value="TEMPLATE02-CREATE" class="menu_name">新增</span></li>
												</ul></li>
											<li class="menu_item level2-item" value="TEMPLATE03"><span
												class="menu_name">治疗项目模板<i class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission">
													<li class="menu_item level3-item"><span
														value="TEMPLATE03-CREATE" class="menu_name">新增</span></li>
												</ul></li>
											<li class="menu_item level2-item" value="TEMPLATE05"><span
												class="menu_name">草药处方模板<i class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission">
													<li class="menu_item level3-item"><span
														value="TEMPLATE05-CREATE" class="menu_name">新增</span></li>
												</ul></li>
											<li class="menu_item level2-item" value="TEMPLATE15"><span
												class="menu_name">成药处方模板<i class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission">
													<li class="menu_item level3-item"><span
														value="TEMPLATE15-CREATE" class="menu_name">新增</span></li>
												</ul></li>
											<li class="menu_item level2-item" value="TEMPLATE04"><span
												class="menu_name">西药处方模板<i class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission">
													<li class="menu_item level3-item"><span
														value="TEMPLATE04-CREATE" class="menu_name">新增</span></li>
												</ul></li>
											<li class="menu_item level2-item" value="TEMPLATE07"><span
												class="menu_name">随访模板<i class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission">
													<li class="menu_item level3-item"><span
														value="TEMPLATE07-CREATE" class="menu_name">新增</span></li>
												</ul></li>
											<li class="menu_item level2-item" value="TEMPLATE09"><span
												class="menu_name">特殊理疗针灸方模板<i
													class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission">
													<li class="menu_item level3-item"><span
														value="TEMPLATE09-CREATE" class="menu_name">新增</span></li>
												</ul></li>
											<li class="menu_item level2-item" value="TEMPLATE16"><span
												class="menu_name">特殊理疗空白方模板<i
													class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission">
													<li class="menu_item level3-item"><span
														value="TEMPLATE16-CREATE" class="menu_name">新增</span></li>
												</ul></li>
											<li class="menu_item level2-item" value="TEMPLATE10"><span
												class="menu_name">收费模板<i class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission">
													<li class="menu_item level3-item"><span
														value="TEMPLATE10-CREATE" class="menu_name">新增</span></li>
												</ul></li>
											<li class="menu_item level2-item" value="TEMPLATE11"><span
												class="menu_name">疗程模板<i class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission">
													<li class="menu_item level3-item"><span
														value="TEMPLATE11-CREATE" class="menu_name">新增</span></li>
												</ul></li>
											<li class="menu_item level2-item" value="TEMPLATE13"><span
												class="menu_name">理疗单模板<i class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission">
													<li class="menu_item level3-item"><span
														value="TEMPLATE13-CREATE" class="menu_name">新增</span></li>
												</ul></li>
											<li class="menu_item level2-item" value="TEMPLATE14"><span
												class="menu_name">贴敷方模板<i class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission">
													<li class="menu_item level3-item"><span
														value="TEMPLATE14-CREATE" class="menu_name">新增</span></li>
												</ul></li>
										</ul></li>
									<li class="menu_item level2-item" value="CLINICSET04"><span
										class="menu_name">参数设置<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="CLINICSET04-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET04-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET04-ENABLE" class="menu_name">启用</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET04-REFERENCE" class="menu_name">引用</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET04-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET04-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET04-DISABLE" class="menu_name">禁用</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="DI01"><span
										class="menu_name">数据导入<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DI01-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="DI01-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="DI01-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="DICT11"><span
										class="menu_name">药品字典对照<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DICT11-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="APT07"><span
										class="menu_name">预约设置<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="APT07-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="APT07-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="APT07-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="APT07-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="APT07-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="DICT12"><span
										class="menu_name">标签设置<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DICT12-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="DICT12-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="DICT12-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="DICT12-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="DICT15"><span
										class="menu_name">打印参数设置<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DICT15-VIEW" class="menu_name">查询</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="CLINICSET"><span
								class="menu_name">诊所管理</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="CLINICSET01"><span
										class="menu_name">科室管理<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="CLINICSET01-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET01-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET01-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET01-ENABLE" class="menu_name">启用</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET01-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET01-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET01-DISABLE" class="menu_name">禁用</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="CLINICSET03"><span
										class="menu_name">角色管理<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="CLINICSET03-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET03-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET03-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET03-CREATE" class="menu_name">新增</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="CLINICSET02"><span
										class="menu_name">员工管理<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="CLINICSET02-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET02-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET02-ENABLE" class="menu_name">启用</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET02-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET02-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET02-DISABLE" class="menu_name">禁用</span></li>
											<li class="menu_item level3-item"><span
												value="CLINICSET02-RESETPW" class="menu_name">重置密码</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="DICT_MGR"><span
								class="menu_name">字典维护</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="DICT02"><span
										class="menu_name">药品/材料<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DICT02-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="DICT02-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="DICT02-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="DICT02-ENABLE" class="menu_name">启用</span></li>
											<li class="menu_item level3-item"><span
												value="DICT02-REFERENCE" class="menu_name">引用</span></li>
											<li class="menu_item level3-item"><span
												value="DICT02-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="DICT02-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="DICT02-DISABLE" class="menu_name">禁用</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="DICT03"><span
										class="menu_name">诊疗项目<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DICT03-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="DICT03-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="DICT03-ENABLE" class="menu_name">启用</span></li>
											<li class="menu_item level3-item"><span
												value="DICT03-REFERENCE" class="menu_name">引用</span></li>
											<li class="menu_item level3-item"><span
												value="DICT03-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="DICT03-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="DICT03-DISABLE" class="menu_name">禁用</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="DICT04"><span
										class="menu_name">组合项目<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DICT04-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="DICT04-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="DICT04-ENABLE" class="menu_name">启用</span></li>
											<li class="menu_item level3-item"><span
												value="DICT04-REFERENCE" class="menu_name">引用</span></li>
											<li class="menu_item level3-item"><span
												value="DICT04-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="DICT04-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="DICT04-DISABLE" class="menu_name">禁用</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="DICT01"><span
										class="menu_name">业务字典<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DICT01-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="DICT01-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="DICT01-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="DICT01-ENABLE" class="menu_name">启用</span></li>
											<li class="menu_item level3-item"><span
												value="DICT01-REFERENCE" class="menu_name">引用</span></li>
											<li class="menu_item level3-item"><span
												value="DICT01-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="DICT01-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="DICT01-DISABLE" class="menu_name">禁用</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="DICT05"><span
										class="menu_name">统计分类<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DICT05-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="DICT05-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="DICT05-ENABLE" class="menu_name">启用</span></li>
											<li class="menu_item level3-item"><span
												value="DICT05-REFERENCE" class="menu_name">引用</span></li>
											<li class="menu_item level3-item"><span
												value="DICT05-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="DICT05-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="DICT05-DISABLE" class="menu_name">禁用</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="DICT06"><span
										class="menu_name">厂商管理<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DICT06-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="DICT06-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="DICT06-ENABLE" class="menu_name">启用</span></li>
											<li class="menu_item level3-item"><span
												value="DICT06-REFERENCE" class="menu_name">引用</span></li>
											<li class="menu_item level3-item"><span
												value="DICT06-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="DICT06-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="DICT06-DISABLE" class="menu_name">禁用</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="COURSE02"><span
										class="menu_name">疗程字典<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="COURSE02-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="COURSE02-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="COURSE02-ENABLE" class="menu_name">启用</span></li>
											<li class="menu_item level3-item"><span
												value="COURSE02-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="COURSE02-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="COURSE02-DISABLE" class="menu_name">禁用</span></li>
											<li class="menu_item level3-item"><span
												value="COURSE02-UPDATE" class="menu_name">编辑</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="DICT16"><span
										class="menu_name">附加费用<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DICT16-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="DICT16-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="DICT16-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="DICT16-UPDATE" class="menu_name">编辑</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="STATISTIC"><span
								class="menu_name">统计报表</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="STATISTIC03"><span
										class="menu_name">诊所运营<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="STATISTIC03-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="STATISTIC08"><span
										class="menu_name">患者统计<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="STATISTIC08-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="CASH_STATISTIC01"><span
										class="menu_name">收费统计<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="CASH_STATISTIC01-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="DRUG_STATISTIC01"><span
										class="menu_name">药品统计<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="DRUG_STATISTIC01-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="STATISTIC07"><span
										class="menu_name">咨询业绩<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="STATISTIC07-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="STATISTIC07-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="STATISTIC07-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="STATISTIC07-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="STATISTIC07-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="STATISTIC09"><span
										class="menu_name">流量分析<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="STATISTIC09-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="STATISTIC11"><span
										class="menu_name">会员统计<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="STATISTIC11-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="STATISTIC14"><span
										class="menu_name">考勤报表<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="STATISTIC14-EXPORT" class="menu_name">导出</span></li>
											<li class="menu_item level3-item"><span
												value="STATISTIC14-VIEW" class="menu_name">查看</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="CLINICSETUP"><span
								class="menu_name">诊所设置(全科基础版)</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="CLINICSETUP11"><span
										class="menu_name">基础设置<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission"></ul></li>
									<li class="menu_item level2-item" value="CLINICSETUP01"><span
										class="menu_name">科室管理<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission"></ul></li>
									<li class="menu_item level2-item" value="CLINICSETUP10"><span
										class="menu_name">角色管理<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission"></ul></li>
									<li class="menu_item level2-item" value="CLINICSETUP03"><span
										class="menu_name">员工管理<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission"></ul></li>
									<li class="menu_item level2-item" value="CLINICSETUP04"><span
										class="menu_name">数据导入<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission"></ul></li>
									<li class="menu_item level2-item" value="CLINICSETUP05"><span
										class="menu_name">药品/材料<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission"></ul></li>
									<li class="menu_item level2-item" value="CLINICSETUP06"><span
										class="menu_name">诊疗项目<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission"
											style="display: none;"></ul></li>
									<li class="menu_item level2-item" value="CLINICSETUP07"><span
										class="menu_name">组合项目<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission"></ul></li>
									<li class="menu_item level2-item" value="CLINICSETUP09"><span
										class="menu_name">模板设置</span>
									<ul class="level2-checkboxes">
											<li class="menu_item level2-item" value="TEMPLATECLINIC03"><span
												class="menu_name">治疗项目模板<i class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission"
													style="display: none;"></ul></li>
											<li class="menu_item level2-item" value="TEMPLATECLINIC04"><span
												class="menu_name">西药处方模板<i class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission"></ul></li>
											<li class="menu_item level2-item" value="TEMPLATECLINIC05"><span
												class="menu_name">草药处方模板<i class="drop_arrow noview"></i></span>
											<ul class="level3-checkboxes dsn permission"></ul></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="SMSMANAGEMENT"><span
								class="menu_name">短信管理</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="SMSMANAGEMENT02"><span
										class="menu_name">短信群发<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="SMSMANAGEMENT02-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="SMSMANAGEMENT01"><span
										class="menu_name">短信记录<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="SMSMANAGEMENT01-VIEW" class="menu_name">查询</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="CLINIC_NURSE_STATION"><span
								class="menu_name">门诊护士站</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="CLINIC_ADVICE"><span
										class="menu_name">门诊患者<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="CLINIC_ADVICE-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="CLINIC_ADVICE-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="CLINIC_ADVICE-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="CLINIC_ADVICE-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="CLINIC_ADVICE-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="COURSE01"><span
										class="menu_name">执行确认<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="COURSE01-SAVE" class="menu_name">保存</span></li>
											<li class="menu_item level3-item"><span
												value="COURSE01-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="COURSE01-DELETE" class="menu_name">删除</span></li>
											<li class="menu_item level3-item"><span
												value="COURSE01-ENABLE" class="menu_name">启用</span></li>
											<li class="menu_item level3-item"><span
												value="COURSE01-VIEW" class="menu_name">查询</span></li>
											<li class="menu_item level3-item"><span
												value="COURSE01-CREATE" class="menu_name">登记</span></li>
											<li class="menu_item level3-item"><span
												value="COURSE01-DISABLE" class="menu_name">禁用</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="PARENT_LIST"><span
										class="menu_name">患者一览<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="PARENT_LIST-VIEW" class="menu_name">查询</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="PWS"><span
								class="menu_name">理疗师工作站</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="TCM_PW01"><span
										class="menu_name">开单<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="TCM_PW01-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="TCM_PW02"><span
										class="menu_name">执行确认<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="TCM_PW02-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="TCM_PW03"><span
										class="menu_name">个人业绩<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="TCM_PW03-VIEW" class="menu_name">查询</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="MEDICALCASE"><span
								class="menu_name">医案管理</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="MEDICALCASE01"><span
										class="menu_name">我的医案<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="MEDICALCASE01-UPDATE" class="menu_name">修改</span></li>
											<li class="menu_item level3-item"><span
												value="MEDICALCASE01-CREATE" class="menu_name">新增</span></li>
											<li class="menu_item level3-item"><span
												value="MEDICALCASE01-VIEW" class="menu_name">查询</span></li>
										</ul></li>
								</ul></li>
							<li class="menu_item level1-item" value="TCMKnowledge"><span
								class="menu_name">中医知识库(中医知识库)</span>
							<ul class="level2-checkboxes">
									<li class="menu_item level2-item" value="TCMKnowledge01"><span
										class="menu_name">医案(医案)<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="TCMKnowledge01-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="TCMKnowledge02"><span
										class="menu_name">中草药(中草药)<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="TCMKnowledge02-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="TCMKnowledge03"><span
										class="menu_name">方剂(方剂)<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="TCMKnowledge03-VIEW" class="menu_name">查询</span></li>
										</ul></li>
									<li class="menu_item level2-item" value="TCMKnowledge04"><span
										class="menu_name">中成药(中成药)<i class="drop_arrow noview"></i></span>
									<ul class="level3-checkboxes dsn permission">
											<li class="menu_item level3-item"><span
												value="TCMKnowledge04-VIEW" class="menu_name">查询</span></li>
										</ul></li>
								</ul></li>
						</ul>
					</div>
					<div class="btn-group fr" style="width: 285px">
						<a href="javascript:;" class="btn btn-cancel fl" id="cancelBtn">取消
						</a><a href="javascript:;" class="btn fl"
							onclick="clinicRole_js.saveData()" id="btn_save">保存</a>
					</div>
				</div>
			</div>

		</div>
		<!-- end of .tab-content -->

	</div>
	<!-- end of .content-inner -->

	<script type="text/javascript" src="js/jquery-3.2.1.js"></script>
	<script type="text/javascript" src="js/layer.js"></script>
	<script type="text/javascript" src="role_files/pawj-pro.js"></script>
	<script type="text/javascript" src="role_files/slidelf.js"></script>
	<script type="text/javascript" src="role_files/cache.js"></script>
	<script type="text/javascript" src="role_files/role_list.js"></script>
	<script type="text/javascript" src="role_files/jquery.js"></script>
	<script type="text/javascript">
		$(function() {
			clinicRole_js.initPage();
			renderPermissionControl();
		});

		//数据采集      
		var _maq = _maq || [];
		_maq.push([ 'sysType', 'B' ], [ 'sysModel', 'CLINICSET' ], [ 'sysMenu',
				'CLINICSET03' ]);

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
			layer.msg("1ggggg", {
				icon : 1,
				time : 2000
			});
			$(".menu_name").css("background-image","url('images/icon_checkbox.png')");
			$(".menu_name").click(
				function(){
					$(this).css("background-image","url('images/icon_checkbox_checked.png')");
				}
			);
		});
		function clickaddjuese() {
			window.location = 'role/Role.html';
		}
		function gokeshi() {
			window.location = 'zhensuoguanli/deptMgr.html';
		}
	</script>

	<div class="loading-mask" style="display: none;">
		<span class="loading-content"></span>
	</div>
</body>
</html>