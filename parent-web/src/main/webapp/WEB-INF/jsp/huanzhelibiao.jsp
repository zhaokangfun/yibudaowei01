<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="description" content="">
<meta name="Keywords" content="">
<script type="text/javascript"
	src="../xujiajiacssjs/huanzhelibiao/switch.js"></script>
<link rel="stylesheet"
	href="../xujiajiacssjs/huanzhelibiao/base_003.css">
<link rel="stylesheet"
	href="../xujiajiacssjs/huanzhelibiao/patientlist_data/base.css">
<link rel="stylesheet" type="text/css"
	href="../xujiajiacssjs/huanzhelibiao/pawj.css">
<link rel="stylesheet" type="text/css"
	href="../xujiajiacssjs/huanzhelibiao/patientlist_data/patientManagement.css">
<link rel="stylesheet" type="text/css" href="../css/laydate.css">
<title></title>
<link rel="stylesheet"
	href="../xujiajiacssjs/huanzhelibiao/patientlist_data/layer.css"
	id="layuicss-skinlayercss">
<script type="text/javascript" src="patientlist_data/ipquery.html"></script>
</head>
<body class="static-public-css patient-management-css">
	<div class="main" style="z-index: 3; height: 50px;">
		<!-- 主体部分 -->
		<div class="content" style="">
			<div id="submenuOuter">
				<div>
					<div class="sub-menu-wrapper">
						<div class="left-arrow dsn"></div>
						<div id="dd-ctrl" class="dot-more dsn"></div>
						<div class="right-arrow dsn"></div>
						<div id="sub-menu" class="tab-nav clear" menu="DENT_INDEX01"
							style="display: inline-block; margin-top: 20px;">
							<span id="PATREG01" onclick="huanzhe()" menu="PATREG01" class="">患者登记</span><span
								id="PATREG02" menu="PATREG02" class="selected">登记列表</span>
						</div>
					</div>
					<ul class="menu-dd dsn">
					</ul>
				</div>
			</div>
		</div>
		<!-- end of .content -->
	</div>
	<div class="content-inner" style="margin-top: 80px; padding: 20px;">
		<div class="tab-content clear patientlist-tab has_senior_search"
			style="overflow-x: hidden;">
			<form class="layui-form" id="form1" onsubmit="return false"
				method="post">
				<div class="top-search clear ">
					<div class="fl" style="width: 23%; max-width: 220px;">
						<span class="form-item-title fl">登记日期：</span>
						<div class="date fl" style="min-width: 120px; width: 55%;">
							<input id="outDateStart" class="input-text indate_list"
								name="initiation" readonly="readonly" value="2018-04-11"
								type="text"> <i class="date-icon"></i>
						</div>
					</div>
					<div class="fl patientlist-line">—</div>
					<div class="fl" style="width: 14%;">
						<div class="date fl" style="min-width: 120px;">
							<input id="outDateEnd" class="input-text indate_list"
								name="shutoff" readonly="readonly" value="2018-04-24"
								type="text"> <i class="date-icon"></i>
						</div>
					</div>

					<div class="fl" style="width: 20%;">
						<span class="form-item-title">就诊科室：</span>
						<div class="drop" style="min-width: 70px; width: 49%;">
							<input class="input-text" id="visit_department" name="department"
								readonly="readonly" value="全部" val="0" type="text"> <i
								class="drop-icon"></i>
							<ul class="wjzs-drop-menu dsn" style="display: none;">
								<li class="drop-item drop_even" title="全部" value="0"
									data-value="0">全部</li>
								 <c:forEach items="${keshilist}" var="item">
							        <li class="drop-item drop_even" title="${item.keshiname}"
									value="${item.keshiid}"
									data-value="${item.keshiid}">${item.keshiname}</li>
						        </c:forEach>
											      
								
							</ul>
						</div>
					</div>

					<div class="fl" style="width: 20%;">
						<span class="form-item-title">就诊医生：</span>
						<div class="drop" style="min-width: 70px; width: 49%;">
							<input class="input-text" id="visit_doctor" name="doctor"
								value="全部" val="0" type="text"> <i class="drop-icon"></i>
							<ul class="wjzs-drop-menu dsn" style="display: none;">
								<li class="drop-item drop_even" title="全部" value="0"
									data-value="0">全部</li>
								<c:forEach items="${list}" var="item">
							        <li class="drop-item drop_even" title="${item.adminname}"
									value="${item.adminid}"
									data-value="${item.adminid}">${item.adminname}</li>
						        </c:forEach>
							</ul>
						</div>
					</div>

					<div class="fl" style="width: 20%;">
					.	<span class="form-item-title">就诊状态：</span>
						<div class="drop" style="min-width: 70px; width: 49%;">
							<input id="visit_status" class="input-text" readonly="readonly"
								value="全部" val="0" type="text"> <i class="drop-icon"></i>
							<ul class="wjzs-drop-menu dsn" style="display: none;">
								<li class="drop-item drop_even" title="全部" value="0"
									data-value="0">全部</li>
								<li class="drop-item drop_even" title="候诊中" value="1"
									data-value="1">候诊中</li>
								<li class="drop-item drop_odd" title="治疗中" value="2"
									data-value="2">治疗中</li>
								<li class="drop-item drop_even" title="完成就诊" value="3"
									data-value="3">完成就诊</li>
								<li class="drop-item drop_odd" title="已过号" value="4"
									data-value="4">已过号</li>
							</ul>
						</div>
					</div>
					<div class="senior_search_box clear fl"
						style="width: 100%; display: block;">

						<div class="fl" style="width: 23%; max-width: 220px;">
							<span class="form-item-title">就诊类型：</span>
							<div class="drop" style="min-width: 120px; width: 55%;">
								<input class="input-text" id="visitType" readonly="readonly"
									value="全部" val="0" type="text"> <i class="drop-icon"></i>
								<ul class="wjzs-drop-menu dsn" style="display: none;">
									<li class="drop-item drop_even" title="全部" value="0"
										data-value="0">全部</li>
									<li class="drop-item drop_odd" title="初诊" value="1"
										data-value="1">初诊</li>
									<li class="drop-item drop_even" title="复诊" value="2"
										data-value="2">复诊</li>
								</ul>
							</div>
						</div>

						<div
							style="height: 1px; width: 14%; float: left; padding-right: 25px;"></div>

						<div class="fl" style="width: 20%;">
							<span class="form-item-title">患者来源：</span>
							<div class="drop" style="min-width: 70px; width: 49%;">
								<input class="input-text" id="patiSource" value="全部" val="0"
									type="text"> <i class="drop-icon"></i>
								<ul class="wjzs-drop-menu dsn" style="display: none;">
									<li class="drop-item drop_even" title="全部" value="0"
										data-value="0">全部</li>
									<c:forEach items="${laiyuanlist}" var="item">
										<li class="drop-item drop_even" title="${item.lyname}" value="${lyname.lyid}"
										data-value="${item.lyid}">${item.lyname}</li>
									</c:forEach>
								</ul>
							</div>
						</div>

						<!-- <span style="float: left; min-height: 30px; width: 25px;"></span>
					<span style="float: left; min-height: 30px; width: 14%;"></span> -->
						<div class="search-box fl"
							style="padding: 0; width: 19%; margin-bottom: 10px;">
							<input id="keyWord" class="input-text fl"
								placeholder="姓名/手机号" style="width: 80%;" type="text">
							<a href="javascript:;" id="btnSearch"
								class="btn search-btn js_search_btn fl"></a>
						</div>
					</div>
				</div>
			</form>
			<div class="table_content_wrap">
				<div class="table_content">
					<table id="warehousing_table" class="common-table full-width-table">
						<tbody>
							<tr>
								<th width="10%">病历号</th>
								<th width="10%">姓名</th>
								<th>性别</th>
								<th>年龄</th>
								<th>手机号</th>
								<th>患者来源</th>
								<th>就诊类型</th>
								<th>就诊医生</th>
								<th>就诊科室</th>
								<th>登记时间</th>
								<th>就诊状态</th>
								<th id="table_th_charge" class="dsn">收费状态</th>
								<th class="warehousing_table">操作</th>
							</tr>
							<tr>
								<td>P1804020001</td>
								<td data-id="b68acec5395e4c28ba5521bdfb032161" data-triage="2"
									data-trigage-id="3ea1cd4e6b084f3fb425c6cafe023e53"
									data-triage-type="2" data-department-id="null"
									data-doctor-id="c567402d8bbc40b689a8608fcba87da4"
									data-mitype-code="null" yb_biz_record_id=""
									yb_biz_treatment_count="0" data-health-product="0">徐冲</td>
								<td>男</td>
								<td>19岁</td>
								<td>17637947799</td>
								<td>朋友介绍</td>
								<td>复诊</td>
								<td>刘晓洋</td>
								<td>--</td>
								<td>2018-04-23 11:38:51</td>
								<td>治疗中</td>
								<td><a href="javascript:void(0);" class="edit-href">修改</a></td>
							</tr>
							<tr>
								<td>P1804190001</td>
								<td data-id="384084c6d3df418ab4ecee9ab801291a" data-triage="2"
									data-trigage-id="4cdc292e9b604066b32ab16d5f13d4cd"
									data-triage-type="2"
									data-department-id="2cddf1e99dc94c9c84af73efcceac028"
									data-doctor-id="00de356649e744289a39ef6235ef2ff0"
									data-mitype-code="null" yb_biz_record_id=""
									yb_biz_treatment_count="0" data-health-product="0">毅聪</td>
								<td>男</td>
								<td>19岁</td>
								<td>13949283435</td>
								<td>--</td>
								<td>复诊</td>
								<td>许甲甲</td>
								<td>外科</td>
								<td>2018-04-22 15:36:05</td>
								<td>治疗中</td>
								<td><a href="javascript:void(0);" class="edit-href">修改</a></td>
							</tr>
							<tr>
								<td>P1804190001</td>
								<td data-id="384084c6d3df418ab4ecee9ab801291a" data-triage="2"
									data-trigage-id="08d26e4fdece4fc982ca51a215992639"
									data-triage-type="2"
									data-department-id="2cddf1e99dc94c9c84af73efcceac028"
									data-doctor-id="00de356649e744289a39ef6235ef2ff0"
									data-mitype-code="null" yb_biz_record_id=""
									yb_biz_treatment_count="0" data-health-product="0">毅聪</td>
								<td>男</td>
								<td>19岁</td>
								<td>13949283435</td>
								<td>--</td>
								<td>复诊</td>
								<td>许甲甲</td>
								<td>外科</td>
								<td>2018-04-20 11:19:24</td>
								<td>治疗中</td>
								<td><a href="javascript:void(0);" class="edit-href">修改</a></td>
							</tr>
							<tr>
								<td>P1804190001</td>
								<td data-id="384084c6d3df418ab4ecee9ab801291a" data-triage="2"
									data-trigage-id="1b0c7a24d35a4ee6aa5a698157244070"
									data-triage-type="1"
									data-department-id="2cddf1e99dc94c9c84af73efcceac028"
									data-doctor-id="00de356649e744289a39ef6235ef2ff0"
									data-mitype-code="null" yb_biz_record_id=""
									yb_biz_treatment_count="0" data-health-product="0">毅聪</td>
								<td>男</td>
								<td>19岁</td>
								<td>13949283435</td>
								<td>--</td>
								<td>初诊</td>
								<td>许甲甲</td>
								<td>外科</td>
								<td>2018-04-19 09:24:41</td>
								<td>治疗中</td>
								<td><a href="javascript:void(0);" class="edit-href">修改</a></td>
							</tr>
							<tr>
								<td>P1804020001</td>
								<td data-id="b68acec5395e4c28ba5521bdfb032161" data-triage="2"
									data-trigage-id="62769cd42aa744b688d4d30108b0fded"
									data-triage-type="2"
									data-department-id="2cddf1e99dc94c9c84af73efcceac028"
									data-doctor-id="00de356649e744289a39ef6235ef2ff0"
									data-mitype-code="null" yb_biz_record_id=""
									yb_biz_treatment_count="0" data-health-product="0">徐冲</td>
								<td>男</td>
								<td>19岁</td>
								<td>17637947799</td>
								<td>朋友介绍</td>
								<td>复诊</td>
								<td>许甲甲</td>
								<td>外科</td>
								<td>2018-04-19 09:23:54</td>
								<td>治疗中</td>
								<td><a href="javascript:void(0);" class="edit-href">修改</a></td>
							</tr>
							<tr>
								<td>P1804100001</td>
								<td data-id="03d1bb04454646459caef8101fcc9705" data-triage="2"
									data-trigage-id="90719a2c62b643ceb97f579527ed83a5"
									data-triage-type="2"
									data-department-id="2cddf1e99dc94c9c84af73efcceac028"
									data-doctor-id="00de356649e744289a39ef6235ef2ff0"
									data-mitype-code="null" yb_biz_record_id=""
									yb_biz_treatment_count="0" data-health-product="0">徐冲冲</td>

								<td>男</td>
								<td>24岁</td>
								<td>13534232342</td>
								<td>附近居民</td>
								<td>复诊</td>
								<td>许甲甲</td>
								<td>外科</td>
								<td>2018-04-18 13:02:42</td>
								<td>治疗中</td>
								<td><a href="javascript:void(0);" class="edit-href">修改</a></td>
							</tr>
							<tr>
								<td>P1804030001</td>
								<td data-id="b042cdf51ff647c79620dcfdef1bb1b7" data-triage="2"
									data-trigage-id="634a751602ec4f0590e0fe25754ef582"
									data-triage-type="2"
									data-department-id="2cddf1e99dc94c9c84af73efcceac028"
									data-doctor-id="00de356649e744289a39ef6235ef2ff0"
									data-mitype-code="null" yb_biz_record_id=""
									yb_biz_treatment_count="0" data-health-product="0">许冲冲</td>
								<td>男</td>
								<td>18岁</td>
								<td>13949283345</td>
								<td>附近居民</td>
								<td>复诊</td>
								<td>许甲甲</td>
								<td>外科</td>
								<td>2018-04-11 08:32:20</td>
								<td>治疗中</td>
								<td><a href="javascript:void(0);" class="edit-href">修改</a></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<!-- end of .tab-content -->

		<div style="height: 200px;"></div>
	</div>

	<script type="text/javascript" src="../js/jquery-1.7.2.js"></script>
	<script type="text/javascript" src="../layui/layui.js"></script>
	<script type="text/javascript" src="../js/laydate.js"></script>
	<script type="text/javascript">
		layui.use('element', function() {
			var element = layui.element;
		});
		layui.use('form', function() {
			var form = layui.form();
		});
		$(function() {

			$("div[class='drop']").toggle(function() {

				$(this).children(".wjzs-drop-menu").css("display", "block");
			}, function() {
				$(this).children(".wjzs-drop-menu").css("display", "none");

			});
			$("ul[class='wjzs-drop-menu dsn'] li").hover(function() {
				$(this).css("background", "#258FF1");
			}, function() {
				$(this).css("background", "white");
			});
			$("div[class='drop  f1']").hover(function() {
				$(this).children(".wjzs-drop-menu").css("display", "block");
			}, function() {
				$(this).children(".wjzs-drop-menu").css("display", "none");
			});
			//点击获得下拉框的文本回显到input上并且获取下拉框的值
			$("ul[class='wjzs-drop-menu dsn'] li").click(function() {
				//$(this).parents("input").text($(this).attr("title"));
				var test = $(this).attr("title");
				var zhi = $(this).val();
				$(this).parent().siblings().eq(0).val(test);
				$(this).parent().siblings().eq(1).val(zhi);
				console.log($(this).parent().siblings().eq(1).val());
			});
		});

		function huanzhe() {

			window.location = '../huanzhe/huanzhedj.html';
		}
	</script>
</body>
</html>

