<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>个人信息</title>
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="format-detection" content="telephone=no">
<script type="text/javascript" async="" src="../js/pawj.js"></script>
<script type="text/javascript" src="../js/switch.js"></script>
<link rel="stylesheet" type="text/css" href="../css/layui.css"
	media="all">
<link rel="stylesheet" type="text/css"
	href="../common/bootstrap/css/bootstrap.min.css" media="all">
<link rel="stylesheet" type="text/css" href="../css/global.css"
	media="all">
<link rel="stylesheet" type="text/css" href="../css/common.css"
	media="all">
<link rel="stylesheet" type="text/css" href="../css/personal.css"
	media="all">
<link rel="stylesheet" href="../css/base_003.css">
<link rel="stylesheet" href="../css/base.css">
<link rel="stylesheet" href="../css/pawj.css">
<link rel="stylesheet" type="text/css" href="../css/drugDictionary.css">
<link rel="stylesheet" type="text/css" href="../css/easy.css">
</head>
<body>
	<section class="larry-grid">
		<div class="larry-personal">
			<div class="layui-tab">
				<blockquote class="layui-elem-quote mylog-info-tit">
					<ul class="layui-tab-title">
						<li class="layui-btn layui-this"><i class="layui-icon">&#xe60a;</i>西药/中成药</li>
						<li class="layui-btn "><i class="layui-icon">&#xe63c;</i>中药</li>
						<li class="layui-btn "><i class="layui-icon">&#xe63c;</i>材料</li>
					</ul>
				</blockquote>
				<div class="larry-separate"></div>
				<div
					class="layui-tab-content larry-personal-body clearfix mylog-info-box">
					<!-- 操作日志 -->
					<div class="layui-tab-item layui-field-box layui-show">
								<a href="xizhongadd"><li class="layui-btn "><i class="layui-icon"></i>添加药品</li></a>
						<table class="layui-table table-hover" lay-even="" lay-skin="nob">
							<thead>
								<tr>
									<th hidden="ture">ID</th>
									<th style="text-align: center;">名称</th>
									<th width="150px;">规格</th>
									<th>厂家</th>
									<th>零售价</th>
									<th width="150px;">操作</th>
								</tr>
							</thead>
							<tbody>
								<c:forEach items="${list}" var="b">
									<tr>
										<td hidden="ture" id="jichu1">1</td>
										<td style="text-align: center;">${b.xyname}</td>
										<td>${b.guige}</td>
										<td>${b.gys.gysname}</td>
										<td>${b.lsprice}</td>
										<td><a href="">编辑</a> <a href="">启用</a></td>
									</tr>
								</c:forEach>


							</tbody>

						</table>
					</div>

					<!-- 登录日志 -->
					<div class="layui-tab-item layui-field-box" style="">
					<a href="../zhongyao/Zhongyaoadd"><li class="layui-btn "><i class="layui-icon"></i>添加中藥</li></a>
						<table class="layui-table table-hover" lay-even="" lay-skin="nob">
							<thead>
								<tr>
									<th hidden="ture">ID</th>
									<th style="text-align: center;">名称</th>
									<th width="200px;">规格</th>
									<th>类型</th>
									<th>零售价</th>
									<th>零售单位</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
							<c:forEach items="${zylist}" var="b">
								<tr>
									<td hidden="ture" id="jichu11">11</td>
									<td style="text-align: center;">${b.zyname}</td>
									<td>${b.guige}</td>
									<c:if test="${b.yptypeid==1}">
									<td>中药饮片</td>
									</c:if>
									
									<c:if test="${b.yptypeid==2}">
									<td>中药颗粒</td>
									</c:if>
									
									<td>${b.lsprice}</td>
									<td>${b.dw.dwname}</td>
									<td><a href="">编辑</a> <a href="">启用</a></td>
								</tr>
								</c:forEach>

							</tbody>
						</table>
					</div>
					<div class="layui-tab-item layui-field-box">
						<table class="layui-table table-hover" lay-even="" lay-skin="nob">
							<thead>
								<tr>
									<th hidden="ture">ID</th>
									<th style="text-align: center;">材料编码</th>
									<th width="200px;">材料名称</th>
									<th>材料规格</th>
									<th>库存单位</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
							<c:forEach items="${cllist}" var="b">
								<tr>
									<td hidden="ture" id="jichu32">32</td>
									<td style="text-align: center;">${b.clbianma}</td>
									<td>${b.clname}</td>
									<td>${b.clguige}</td>
									<td>${b.dw.dwname}</td>
									<td><a href="">编辑</a> <a href="">启用</a></td>
								</tr>
						</c:forEach>
							</tbody>
						</table>
					</div>



					<div class="larry-table-page clearfix"
						style="float: right; width: 100%; background-color: #fff;">
						<a href="javascript:;" class="layui-btn layui-btn-small"
							style="float: right; margin-right: 50px; margin-top: 5px; width: 100px; height: 35px;"><i
							class="iconfont icon-shanchu1"></i>&nbsp;&nbsp;保存&nbsp;&nbsp;</a>
					</div>
				</div>


			</div>
		</div>
	</section>
	<script type="text/javascript" src="../layui/layui.js"></script>
	<script type="text/javascript">
		layui.use([ 'jquery', 'layer', 'element', 'laypage' ], function() {

		});
	</script>
</body>
</html>