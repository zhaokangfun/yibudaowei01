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
<link rel="stylesheet" href="role_files/base.css">
<link rel="stylesheet" href="role_files/base_002.css">
<link rel="stylesheet" type="text/css" href="role_files/pawj.css">
<link rel="stylesheet" type="text/css" href="role_files/clinicManagement.css">
<link rel="stylesheet" type="text/css" href="role_files/authorityManagementNew.css">
<link rel="stylesheet" type="text/css" href="../layui/css/layui.css" media="all">
<title></title>
<script type="text/javascript" src="role_files/ipquery.html"></script>
<style type="text/css">
	ul li{
		margin-top: 15px;
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

				<a href="javascript:;" class="btn normal-btn fl" id="addBtn" onclick="addKeshib()">新增角色</a>

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
					<details>
						<ul>
							<c:forEach items="${resource}" var="r1">
								<c:if test="${empty r1.parentid }">
									<li>
										<input type="checkbox" value="${r1.resourceid }"> ${r1.resourcename }
											<c:forEach items="${resource }" var="r2">
												<c:if test="${r2.parentid==r1.resourceid }">
													<ul>
														<li>
															<input type="checkbox" value="${r2.resourceid }"> ${r2.resourcename }
															<c:forEach items="${resource }" var="r3">
																<c:if test="${r3.parentid==r2.resourceid }">
																	<ul>
																		<li>
																		<input type="checkbox" value="${r3.resourceid }"> ${r3.resourcename }
																		</li>
																	</ul>
																</c:if>
															</c:forEach>
														</li>
													</ul>
												</c:if>
											</c:forEach>
										</li>
									</c:if>
								</c:forEach>
							</ul>
						</details>	
					</div>
					<div class="btn-group fr" style="width: 285px;margin-bottom: 50px;">
						<a href="javascript:;" class="btn btn-cancel fl" id="cancelBtn" onclick="cencelKeshib()">取消
						</a><a href="javascript:;" class="btn fl"
							onclick="saveData()" id="btn_save">保存</a>
					</div>
				</div>
			</div>

		</div>
		<!-- end of .tab-content -->

	</div>
	<!-- end of .content-inner -->

	<script type="text/javascript" src="js/jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="layui/layui.js"></script>
	<script type="text/javascript">
		layui.use(['jquery','layer','element','laypage'],function(){
	          
	    });
	</script>
	<script type="text/javascript">
		$(function() {
			$("input:checkbox").click(function(){
				if($(this).find("ul").children("li").find("input")){
	 				alert($(this).val());
				}else{
					alert("没有");
				}
			});
		});
		
		function clickaddjuese() {
			window.location = 'role/Role.html';
		}
		//添加角色按钮
		function addKeshib(){
			$("#list_div").css("display","none");
			$("#add_edit_div").css("display","block");
		}
		//取消添加科室按钮
		function cencelKeshib(){
			$("#list_div").css("display","block");
			$("#add_edit_div").css("display","none");
		}
		function gokeshi() {
			window.location = 'zhensuoguanli/deptMgr.html';
		}
		//添加权限
		function saveData(){
			var rolename=$("#roleId").val();
			var array=$("input:checkbox:checked");	//获得所有选中的复选框
			console.log(array);
			var res="";
			$.each(array,function(index,dom){
				res+=$(this).val()+",";
			});
			res=res.substring(0,res.lenght-1);
			if(rolename!=""){
				if(res!=""){
					$.post("role/addrole",{"rolename":rolename,"resList":res},function(e){
						if(e>0){
							layer.msg("添加成功！",{icon:1,time:2000});
						}else{
							layer.msg("添加失败！",{icon:5,time:2000});
						}
					});
				}else{
					layer.msg("请分配权限！",{icon:5,time:2000});
				}
				layer.msg("有了！",{icon:1,time:2000});
			}else{
				layer.msg("角色名称不能为空！",{icon:5,time:2000});
			}
		}
	</script>

	<div class="loading-mask" style="display: none;">
		<span class="loading-content"></span>
	</div>
</body>
</html>