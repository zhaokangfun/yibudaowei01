<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
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
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="description" content="">
<meta name="Keywords" content="">
<script type="text/javascript" src="deptMgr_files/switch.js"></script>
<link rel="stylesheet" href="deptMgr_files/base_002.css">
<link rel="stylesheet" href="deptMgr_files/base.css">
<link rel="stylesheet" type="text/css" href="deptMgr_files/pawj.css">
<link rel="stylesheet" type="text/css"
	href="deptMgr_files/clinicManagement.css">
<link rel="stylesheet" type="text/css" href="../layui/css/layui.css" media="all">
<title></title>
</head>

<body class="static-public-css clinic-management-css">
	<div class="sub-menu-wrapper">
		<div class="left-arrow dsn"></div>
		<div id="dd-ctrl" class="dot-more dsn"></div>
		<div class="right-arrow dsn"></div>
		<div id="sub-menu" class="tab-nav clear" menu="FASTBUYDRUG01"
			style="display: inline-block;">
			<span id="CLINICSET01" menu="CLINICSET01" class="selected"
				onclick="gokeshi()">科室管理</span><span id="CLINICSET03"
				menu="CLINICSET03" onclick="clickaddjuese()">角色管理</span><span
				id="CLINICSET02" menu="CLINICSET02">员工管理</span>
		</div>
	</div>
	<div id="list_div" class="content-inner" style="margin-top: 50px;">
		<!--查看帮助视频-->
		<a
			href="https://www.pinganwj.com/help/1-2-2/1a735a2d-6d87-4456-b096-ffa03e045240"
			target="_blank" class="help_video_button_css" title="点击查看帮助视频"
			style="top: 18px;">?</a>

		<div class="tab-content clear">

			<div class="left-column">
				<div class="left-column-inner clear">
					<div class="left-column-head">科室列表</div>

					<ul id="treenav" class="left-column-menu dyn">
						<li><a class="treenav_item active" onclick="selAll()">全部</a></li>
						<c:forEach items="${keshi }" var="k">
							<c:if test="${empty k.parentid }">
								<li class="">
									<a id=""  onclick="typesel(${k.keshiid})" title="${k.keshiname}">${k.keshiname}</a>
									<c:forEach items="${keshi }" var="k1">
										<c:if test="${k1.parentid==k.keshiid }">
											<ul class="">
												<li>
													<a id=""  onclick="typesel(${k1.keshiid})" title="${k1.keshiname}">${k1.keshiname}</a>
												</li>
											</ul>
										</c:if>
									</c:forEach>
								</li>
							</c:if>
						</c:forEach>
					</ul>

				</div>
			</div>
			<!-- end of .left-column -->

			<div class="tab-content-top"
				style="padding-right: 28px; box-sizing: border-box;">
				<a id="btn_add" class="btn top-btn fl" onclick="addKeshib()"
					wjperm="CLINICSET01-CREATE,CLINICSETUP01-CREATE">新增</a>

				<div class="search-box fr">
					<div class="fl" style="margin-right: 5px;">
						<span class="form-item-title" style="margin-top: 0">开通预约：</span>

						<div class="drop">
							<input id="srch_isForBooking" class="input-text" placeholder=""
								readonly="readonly" type="text"> <i class="drop-icon"></i>
							<ul class="drop-menu dsn" style="display: none;">
							</ul>
							<ul class="wjzs-drop-menu dsn" id="yesorno"
								style="display: none;">
								<li class="drop-item drop_even" title="请选择" value=" "
									data-value=" ">请选择</li>
								<li class="drop-item drop_odd" title="是" value="1"
									data-value="1">是</li>
								<li class="drop-item drop_even" title="否" value="2"
									data-value="2">否</li>
							</ul>
						</div>
					</div>
					<span class="form-item-title"
						style="margin-top: 0; margin-left: 0;">是否启用：</span>

					<div class="fl" style="margin-right: 5px;">
						<div class="drop">
							<input id="disabled" class="input-text" placeholder=""
								readonly="readonly" val="0" value="" type="text"> 
								<i	class="drop-icon"></i>
							<ul class="drop-menu dsn" style="display: none;">
							</ul>
							<ul class="wjzs-drop-menu dsn" style="display: none;">
								<li class="drop-item drop_even" title="全部" value="0"
									data-value=" ">全部</li>
								<li class="drop-item drop_odd" title="已启用" value="1"
									data-value="0">已启用</li>
								<li class="drop-item drop_even" title="已停用" value="2"
									data-value="1">已停用</li>
							</ul>
						</div>
					</div>
					<input id="sc_value" class="input-text fl" placeholder="名称"
						type="text"> <a id="btn_search" onclick="dosel()"
						class="btn search-btn js_search_btn fl"></a>
				</div>
			</div>
			<!-- end of .tab-content-top -->

			<div class="list-table-area clear">
				<div class="tb_detail_wrap">
					<table id="tb_detailList" class="common-table full-width-table">
						<tbody>
							<tr>
								<th>科室编号</th>
								<th>科室名称</th>
								<th>科室属性</th>
								<th>显示顺序</th>
								<th>上级科室</th>
								<th>开通预约</th>
								<th>操作</th>
							</tr>
							<c:forEach items="${keshi }" var="k">
								<tr>
									<td>${k.keshiid}</td>
									<td>${k.keshiname }</td>
									<td>${k.keshishuxing.keshishuxingname}</td>
									<td>${k.shuxun}</td>
									<c:forEach items="${keshi }" var="k3">
										<c:if test="${k.parentid==k3.keshiid }">
											<td>${k3.keshiname}</td>
										</c:if>
									</c:forEach>
									<c:if test="${empty k.parentid }">
										<td></td>
									</c:if>
									<td>${k.yuyuestatus==1?"是":"否" }</td>
									<c:if test="${k.status==1 }">
										<td><a id="${k.keshiid}"
											wjperm="CLINICSET01-UPDATE,CLINICSETUP01-UPDATE"
											onclick="showModifyPanel(${k.keshiid})">编辑</a><a
											id="btn_updateStat_'+${k.keshiid }+'"
											wjperm="CLINICSET01-DISABLE,CLINICSETUP01-DISABLE"
											onclick="updateStatus(${k.keshiid})">停用</a></td>
									</c:if>
									<c:if test="${k.status==2 }">
										<td><a id="${k.keshiid}"
											wjperm="CLINICSET01-UPDATE,CLINICSETUP01-UPDATE"
											onclick="showModifyPanel(${k.keshiid})">编辑</a><a
											id="btn_updateStat_'+${k.keshiid }+'"
											wjperm="CLINICSET01-DISABLE,CLINICSETUP01-DISABLE"
											onclick="updateStatus(${k.keshiid},this)">启用</a></td>
									</c:if>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>
				<div id="my-page" class="page-nav"></div>
			</div>
			<!-- end of .right-table-area -->
		</div>
		<!-- end of .tab-content -->
	</div>
	<!-- end of .content-inner -->

	<div id="add_edit_div" class="content-inner" style="display: none">
		<div class="tab-content clear">
			<table class="input-table"
				style="margin-top: 40px; border-top: none;">
				<tbody>
					<tr>
						<td>
							<span class="form-item-title"> <i class="necessary">*</i>科室编号：	</span>
							 <input id="departmentCode"	class="input-text validate(required, numAndLetter,maxlength(36)) wjzs-disabled"
							readonly="true" type="text"></td>
						<td><span class="form-item-title"> <i
								class="necessary">*</i>科室名称：
						</span> <input id="departmentName"
							class="input-text validate(required, maxlength(20))" type="text"></td>
						<td><span class="form-item-title"> <i
								class="necessary">*</i>科室属性：
						</span>

							<div class="drop">
								<input id="departmentType" class="input-text validate(required)"
									placeholder="" readonly="readonly" type="text"> <i
									class="drop-icon"></i>
								<ul class="wjzs-drop-menu dsn" style="display: none;">
									<li class="drop-item drop_even" title="请选择" value=" "
										data-value=" ">请选择</li>
									<c:forEach items="${kssx}" var="ks" varStatus="varstatus">
										<li class="drop-item drop_even" title="${ks.keshishuxingname}"
											value="${ks.keshishuxingid }" data-value="${ks.keshishuxingid }">${ks.keshishuxingname}</li>
									</c:forEach>
								</ul>
							</div></td>
					</tr>
					<tr>
						<td><span class="form-item-title">上级科室：</span>

							<div class="drop">
								<input id="parentId" class="input-text" placeholder=""
									readonly="readonly" type="text"> <i class="drop-icon"></i>
								<ul class="drop-menu dsn" style="display: none;">
								</ul>
								<ul class="wjzs-drop-menu dsn" style="display: none;">
									<li class="drop-item drop_even" title="请选择" value=" "
										data-value=" ">请选择</li>
									<c:forEach items="${keshi }" var="k">
										<li class="drop-item drop_odd" title="${k.keshiname }"
											value="${k.keshiid }" data-value="${k.keshiid }">${k.keshiname }</li>
									</c:forEach>
								</ul>
							</div></td>
						<td><span class="form-item-title">显示顺序：</span> <input
							id="orderNum" class="input-text validate(digits,maxlength(3))"
							type="text"></td>
						<td><span class="form-item-title"><i class="necessary">*</i>开通预约：</span>

							<div class="drop">
								<input id="isForBooking" class="input-text validate(required)"
									placeholder="" readonly="readonly" type="text"> <i
									class="drop-icon"></i>
								<ul class="drop-menu dsn" style="display: none;">
								</ul>
								<ul class="wjzs-drop-menu dsn" style="display: none;">
									<li class="drop-item drop_even" title="请选择" value=" "
										data-value=" ">请选择</li>
									<li class="drop-item drop_odd" title="是" value="1"
										data-value="1">是</li>
									<li class="drop-item drop_even" title="否" value="2"
										data-value="2">否</li>
								</ul>
							</div></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="3"><span class="form-item-title"> <i
								class="necessary"></i>说明：
						</span> <input id="deptRemark"
							class="input-text input-text-fw validate(maxlength(50))"
							type="text"></td>
					</tr>
					<tr>
						<td colspan="3"><span class="form-item-title"><i
								class="necessary"></i>地址：</span> <textarea id="deptAddr"
								class="input-textarea validate(maxlength(500))" cols="30"
								rows="10"></textarea></td>
					</tr>
				</tbody>
			</table>

			<div class="btn-group fr">
				<a id="btn_cancle" class="btn btn-cancel fl"	onclick="cencelKeshib()">取消</a> 
				<a id="btn_save" onclick="addKeshi()" class="btn fl" wjperm="CLINICSET01-SAVE,CLINICSETUP01-SAVE">保存</a>
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
	$(function(){
		//鼠标悬浮下拉框
		$("div[class='drop']").toggle(
			function(){
				$(this).children(".wjzs-drop-menu").css("display","block");
			},
			function(){
				$(this).children(".wjzs-drop-menu").css("display","none");
			}
		);
		$("div[class='drop  f1']").hover(
				function(){
					$(this).children(".wjzs-drop-menu").css("display","block");
				},
				function(){
					$(this).children(".wjzs-drop-menu").css("display","none");
				}
			);
		//下拉框背景显示
		$("ul[class='wjzs-drop-menu dsn'] li").hover(
			function(){
				$(this).css("background","#258FF1");
			},
			function(){
				$(this).css("background","white");
			} 
		);
		//点击获得下拉框的文本回显到input上并且获取下拉框的值
		$("ul[class='wjzs-drop-menu dsn'] li").click(function(){
			//$(this).parents("input").text($(this).attr("title"));
			var test=$(this).attr("title");
			var zhi=$(this).val();
			$(this).parent().siblings().eq(0).val(test);
			$(this).parent().siblings().eq(1).val(zhi);
			console.log($(this).parent().siblings().eq(1).val());
		});
		$("div[id='sub-menu'] span").click(function(){
			layer.msg("哈哈");
			$(this).addClass("selected");
			$(this).siblings().removeClass("selected");
		});
		//分类下拉框样式的绑定
		$("#treenav li").has("ul").addClass("parent");
		$("li[class='parent']").toggle(function(){
			$(this).removeClass("parent");
			$(this).children("ul").addClass("show");
			$(this).addClass("open");
		},function(){
			$(this).removeClass("open");
			$(this).children("ul").removeClass("show");
			$(this).addClass("parent");
		});
	});
		//修改状态
		function updateStatus(keshiid){
			$.post("zhensuoguanli/updatastatus.html",{"id":keshiid},function(e){
				if(e>0){
					layer.msg("操作成功！",{icon: 1,time: 4000});
					window.location='zhensuoguanli/deptMgr.html';
				}else{
					layer.msg("操作失败！",{icon:5,time:2000});
				}
			});
		}
		//添加科室按钮
		function addKeshib(){
			$("#list_div").css("display","none");
			$("#add_edit_div").css("display","block");
		}
		//取消添加科室按钮
		function cencelKeshib(){
			$("#list_div").css("display","block");
			$("#add_edit_div").css("display","none");
		}
		function addKeshi(){
			
			var keshiid=$("#departmentCode").val();
			var keshiname=$("#departmentName").val();
			var keshishuxing=$("#departmentType").next(".drop-icon").val();
			var parentkeshi=$("#parentId").next(".drop-icon").val();
			var shunxu=$("#orderNum").val();
			var keshiaddress=$("#deptAddr").val();
			var keshimiaoshu=$("#deptRemark").val();
			var yuyuestatus=$("#isForBooking").next(".drop-icon").val();
			if(keshiid>0){	//判断有id执行修改  否则执行添加
				$.post("zhensuoguanli/doAddKeshi.html",{"keshiid":keshiid,"keshiname":keshiname,"keshitypeid":keshishuxing,"yuyuestatus":yuyuestatus,"keshiaddress":keshiaddress,"keshimiaoshu":keshimiaoshu,"parentid":parentkeshi,"shuxun":shunxu},function(e){
					if(e>0){
						layer.msg("修改成功！");
						window.location='zhensuoguanli/Editss';
					}else{
						layer.msg("修改失败！");
					}
				});	
			}else{	//执行添加
				$.post("zhensuoguanli/doAddKeshi.html",{"keshiname":keshiname,"keshitypeid":keshishuxing,"yuyuestatus":yuyuestatus,"keshiaddress":keshiaddress,"keshimiaoshu":keshimiaoshu,"parentid":parentkeshi,"shuxun":shunxu},function(e){
					if(e>0){
						layer.msg("添加成功！");
						window.location='zhensuoguanli/deptMgr.html';
					}else{
						layer.msg("添加失败！");
					}
				});
			}
		}
		//去添加角色页面
		function clickaddjuese(){
			window.location='role/Role.html';
		}
		//回到科室页面
		function gokeshi(){
			window.location='zhensuoguanli/deptMgr.html';
			
		}
		function dosel(){
			//是否开通预约
			var yuyuestatu="";
			yuyuestatus=$("#srch_isForBooking").next(".drop-icon").val();
			//是否启用
			var status="";
			status=$("#disabled").next(".drop-icon").val();
			//搜索条件
			var zhi="";
			zhi=$("#sc_value").val();
			var keshiid="";	//用于接收科室id
			var keshiname="";	//用于接收科室名字
			var reg=/^[0-9]*$/;
			if(reg.test(zhi)){	//如果是数字的话则是根据id查询
				keshiid=zhi;			
			}else{
				keshiname=zhi;
			}
			console.log("←预约状态"+yuyuestatus+"←状态"+status+"←名字"+keshiname+"科室id"+keshiid);
			$.post("zhensuoguanli/dosel",{"yuyuestatus":yuyuestatus,"status":status,"keshiname":keshiname,"keshiid":keshiid},function(e){
				if(e!=null){
					/* $.each(e,function(index,dom){
						var tr='';
					}); */
				}
			});
		}
		//点击编辑数据的回显
		function showModifyPanel(id){
			alert(id);
			<c:forEach items="${keshi }" var="k">
				if('${k.keshiid}'==id){
					var keshiname='${k.keshiname}';
					var keshishuxingname="";
					var xianshishunxu='${k.shuxun}';
					var parentid="";
					var yuyuestatus="";
					if('${k.yuyuestatus}'==1){
						yuyuestatus="是";
					}else{
						yuyuestatus="否";
					}
					<c:forEach items="${keshi}" var="k2">
						if('${k2.keshiid}'=='${k.parentid}'){
							parentid="${k2.keshiname}";
						}
					</c:forEach>
					<c:forEach items="${kssx}" var="ks">
						if('${k.keshitypeid}'=='${ks.keshishuxingid}'){
							keshishuxingname="${ks.keshishuxingname}";
						}
					</c:forEach>
					var keshimiaoshu='${k.keshimiaoshu}';
					var keshiaddress='${k.keshiaddress}';
					$("#departmentCode").val(id);
					$("#departmentName").val(keshiname);
					$("#departmentType").val(keshishuxingname);
					$("#parentId").val(parentid);
					$("#isForBooking").val(yuyuestatus);
					$("#departmentCode").val(id);
					$("#deptRemark").val(keshimiaoshu);
					$("#deptAddr").val(keshiaddress);
					$("#orderNum").val(xianshishunxu);
					
				}
			</c:forEach>
			$("#list_div").css("display","none");
			$("#add_edit_div").css("display","block");
		}
		function typesel(id){
			$("#tb_detailList tr:gt(0)").remove();
			<c:forEach items="${keshi}" var="k">
				if('${k.keshiid}'==id){		
					var tr='<tr><td>${k.keshiid}</td><td>${k.keshiname }</td><td>${k.keshishuxing.keshishuxingname}</td><td>${k.shuxun}</td><c:forEach items="${keshi }" var="k3"><c:if test="${k.parentid==k3.keshiid }"><td>${k3.keshiname}</td></c:if></c:forEach><c:if test="${empty k.parentid }"><td></td></c:if><td>${k.yuyuestatus==1?"是":"否" }</td><c:if test="${k.status==1 }"><td><a id="${k.keshiid}"wjperm="CLINICSET01-UPDATE,CLINICSETUP01-UPDATE" onclick="showModifyPanel(${k.keshiid})">编辑</a><a id="btn_updateStat_'+${k.keshiid }+'"wjperm="CLINICSET01-DISABLE,CLINICSETUP01-DISABLE" onclick="updateStatus(${k.keshiid})">停用</a></td></c:if><c:if test="${k.status==2 }"><td><a id="${k.keshiid}" wjperm="CLINICSET01-UPDATE,CLINICSETUP01-UPDATE" onclick="showModifyPanel(${k.keshiid})">编辑</a><a id="btn_updateStat_'+${k.keshiid }+'" wjperm="CLINICSET01-DISABLE,CLINICSETUP01-DISABLE" onclick="updateStatus(${k.keshiid},this)">启用</a></td></c:if></tr>';
					$("#tb_detailList").append(tr);
				}	
			</c:forEach>
		}
		function selAll(){
			window.location='zhensuoguanli/deptMgr.html';
		}
	</script>
	<div class="loading-mask" style="display: none;">
		<span class="loading-content"></span>
	</div>

</body>
</html>