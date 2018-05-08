<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="description" content="">
<meta name="Keywords" content="">
	<link rel="stylesheet" type="text/css" href="../layui/css/layui.css" media="all">
<link rel="stylesheet"
	href="../xujiajiacssjs/huanzhedengji/base_003.css">
<link rel="stylesheet"
	href="../xujiajiacssjs/huanzhedengji/patientManagement_data/base.css">
<link rel="stylesheet" type="text/css"
	href="../xujiajiacssjs/huanzhedengji/pawj.css">
<link rel="stylesheet" type="text/css"
	href="../xujiajiacssjs/huanzhedengji/patientManagement_data/pawj_grid.css">
<link rel="stylesheet" type="text/css"
	href="../xujiajiacssjs/huanzhedengji/patientManagement_data/patientManagement.css">
<link rel="stylesheet" type="text/css"
	href="../xujiajiacssjs/huanzhedengji/patientManagement_data/healthProducts.css">
<link rel="stylesheet" type="text/css"
	href="../xujiajiacssjs/huanzhedengji/patientManagement_data/pop.css">

<title></title>
<link rel="stylesheet"
	href="../xujiajiacssjs/huanzhedengji/patientManagement_data/layer.css"
	id="layuicss-skinlayercss">
<style>
.input_drop_data li {
	height: 28px;
	line-height: 28px;
}
</style>
<style>
.input_drop {
	position: relative;
}

.input_drop_data_box {
	position: absolute;
	width: 100%;
	border: 1px solid #dfdfdf;
	box-sizing: border-box;
	z-index: 999;
}

.input_drop_data {
	overflow-y: auto;
	background: #fff;
	position: absolute;
	width: 100%;
}

.input_drop li {
	padding: 0 20px 0 8px;
	text-align: left;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	position: relative;
	cursor: pointer
}

.input_drop .even_item {
	background: #fff;
}

.input_drop .odd_item {
	background: #eff4f8;
}

.input_drop .over_item {
	background: #01a9db;
	color: #fff;
}

.input_drop .input_drop_del_icon {
	display: none;
	position: absolute;
	top: -1px;
	right: 2px;
	font-style: normal;
	font-size: 18px;
	cursor: pointer;
	color: #666;
}

.input_drop .over_item .input_drop_del_icon {
	display: block;
	color: #fff;
}

.input_drop .input_drop_save_box {
	height: 40px;
	box-sizing: border-box;
	padding: 8px;
	overflow: hidden;
	position: absolute;
	width: 100%;
	background: #f9f9f9;
}

.input_drop .input_drop_save_new {
	height: 24px;
	box-sizing: border-box;
	margin-right: 64px;
}

.input_drop .input_drop_save_btn {
	float: right;
	background: #01a9db;
	width: 50px;
	height: 24px;
	box-sizing: border-box;
	line-height: 21px;
	text-align: center;
	color: #fff;
	border-radius: 3px;
	cursor: pointer;
}
.layui-input, .layui-select, .layui-textarea {
    height: 30px;
    line-height: 30px;
}
.input_drop .input_drop_save_input {
	width: 100%;
	height: 24px;
	box-sizing: border-box;
	border: 1px solid #dfdfdf;
	text-indent: 4px;
	line-height: 22px;
	background: #fff;
}
</style>
</head>
<body
	class="static-public-css patient-management-css health-products-css pop-css">
	<object classid="clsid:5EB842AE-5C49-4FD8-8CE9-77D4AF9FD4FF"
		id="IdrControl1" width="0" height="0"> </object>


	<div class="main" style="z-index: 3; height: 50px;">
        <!-- 主体部分 -->
        <div class="content" style="">
            <div id="submenuOuter">
                <div>
                    <div class="sub-menu-wrapper">
                        <div class="left-arrow dsn"></div>
                        <div id="dd-ctrl" class="dot-more dsn"></div>
                        <div class="right-arrow dsn"></div>
                        <div id="sub-menu" class="tab-nav clear" menu="DENT_INDEX01" style="display: inline-block; margin-top:20px;"><span id="PATREG01" menu="PATREG01" onclick="huanzhe()" class="selected">患者登记</span><span id="PATREG02" onclick="huanzhelist()" menu="PATREG02" class="">登记列表</span></div>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- end of .content -->
    </div>
	<object classid="clsid:5EB842AE-5C49-4FD8-8CE9-77D4AF9FD4FF" id="IdrControl1" width="0" height="0"> </object>
	<div class="content-inner" id="patientManagement" style="margin-top: 80px; padding:20px;">
		<div class="tab-content clear">
			<!-- 患者信息录入 -->
			<form  class="layui-form" id="form1" onsubmit="return false" method="post">
				<div class="patient-info">
					<div class="pt-title" style="padding-right: 38px;position: relative;">
						<!--查看帮助视频-->
						<h2 class="fl">患者信息</h2>
						
					</div>

						<!-- 是否医保登记标识 -->
						<input id="yb_card_no" name="yb_card_no" type="hidden">
					<!-- pa员工信息 -->
					
					<div class="grid-container">
						<div class="row">

							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">
										<i class="necessary">*</i>患者姓名：
									</p>
								</div>
								<div class="col-md-8" style="overflow: hidden; position: relative;">
									<input id="patiName" name="hzname" data-edit="add" placeholder="患者姓名" class="has-think-table enterNext fl input-text search-patiName validate(patientName,notEmpty)" maxlength="25" data-flag="pati" autocomplete="off" type="text">
								</div>
							</div>
								
							<div class="col-md-4">
								
								<div class="col-md-8" style="margin-left: 55px;">
									<div class="layui-form-item choiceWrap radio-div">
										    <label class="layui-form-label" style="width:100px;">患者性别:</label>
										    <div class="layui-input-block">
										      <input name="sex" value="1" title="男" checked="checked" type="radio">
										      <input name="sex" value="2" title="女" type="radio">
										    </div>
										  </div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">
										患者年龄：
									</p>
								</div>
								<div class="col-md-8" style="padding: 0 0 0 5px;">
									<div class="col-md-2" style="position: relative; padding-left: 0px; padding-right: 0px;">
										<input id="age" name="age" maxlength="3" class="enterNext input-text validate(digits, min(0), max(150))" type="text">
									</div>
									<div class="col-md-1" style="padding-left: 2px; padding-right: 0px;">
										<span style="line-height: 28px;">岁</span>
									</div>
									
								</div>
							</div>
						</div>
						<div class="row">

							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">手机号码：</p>
								</div>
								<div class="col-md-8">
									<input id="phone" name="phone" maxlength="11" class="enterNext input-text validate(apptPhone)" placeholder="请输入患者手机号" type="text">
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">病历号码：</p>
								</div>
								<div class="col-md-8">
									<input id="patientno" disabled="disabled" name="blnumber" maxlength="20" class="validate(patientNo) enterNext input-text" style="background-color: rgb(255, 255, 255);" data-rule-id="" data-rule-no="P1804230001" value="${blnumber}" type="text">
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">来源：</p>
								</div>
								<div class="col-md-8">
									<div class="layui-input-block" style="width: 320px; margin-left: -0px;" >
									      <select name="laiyuan"   lay-filter="aihao">
									        <c:forEach items="${laiyuanlist}" var="item">
									       		 <option value="${item.lyid}">${item.lyname}</option>
									        </c:forEach>
									      </select>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- end of .form-content -->
				</div>
				<!-- 详情信息 -->
				<div class="patient-info">
					

					<div id="detail_container" class="grid-container" style="display: block;">
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">联系人：</p>
								</div>
								<div class="col-md-4">
									
									<div class="" style="min-width: 60px;">
										<select name="lxrtypeid"  lay-filter="zhengjian">
									        <c:forEach items="${lxrlist}" var="item">
									        	<option value="${item.lxrtypeid}">${item.lxrtype}</option>
									        </c:forEach>
								     	 </select>
									</div>
								</div>
								<div class="col-md-4">
									<input id="contact_person_name" name="lxrname" maxlength="25" class="enterNext input-text" placeholder="联系人姓名" type="text">
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">联系电话：</p>
								</div>
								<div class="col-md-8">
									<input id="contact_person_phone" name="lxrphone" maxlength="25" class="enterNext input-text" type="text">
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">电子邮箱：</p>
								</div>
								<div class="col-md-8">
									<input id="email" name="email" class="enterNext input-text validate(email)" type="text">
								</div>
							</div>

						</div>
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">证件类型：</p>
								</div>
								<div class="col-md-8">
									<div class="layui-input-block" style="width: 320px; margin-left: -0px;" >
									      <select name="zjlxid"  lay-filter="zhengjian">
									        <c:forEach items="${zhengjianlist}" var="item">
									        <option value="${item.zjtypeid}">${item.zjtypename}</option>
									        </c:forEach>
									      </select>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">证件号码：</p>
								</div>
								<div class="col-md-8">
									<input id="cardNum" name="zjidentity" class="enterNext input-text validate(numAndLetter,idCardCheack)" type="text">
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">介绍人：</p>
								</div>
								<div class="col-md-8" style="position: relative;">
									<input id="introducer" name="jsr" maxlength="25" class="enterNext input-text" style="padding-right: 22px;" placeholder="" autocomplete="off" type="text">
									<span id="remove_introducer" class="close_span_introducer" style="display: none;"></span>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">病人类别：</p>
								</div>
								<div class="col-md-8">
									<div class="layui-input-block" style="width: 320px; margin-left: -0px;" >
									      <select name="brtype"   lay-filter="aihao">
									        <option value="自费">自费</option>
									      </select>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">国籍：</p>
								</div>
								<div class="col-md-8">
									<div class="layui-input-block" style="width: 320px; margin-left: -0px;" >
									      <select name="guoji"   lay-filter="guoji">
									        <option value="中国"  selected="">中国</option>
									        <option value="外国">外国</option>
									      </select>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">民族：</p>
								</div>
								<div class="col-md-8">
									<div class="layui-input-block" style="width: 320px; margin-left: -0px;" >
									      <select name="minzu"   lay-filter="aihao">
									        <option value="汉族" selected="">汉族</option>
									        <option value="其它" >其它 </option>
									      </select>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">职业：</p>
								</div>
								<div class="col-md-8">
									<div class="layui-input-block" style="width: 320px; margin-left: -0px;" >
									      <select name="zhiye"   lay-filter="aihao">
									        <option value="老师" selected="">老师</option>
									        <option value="学生">学生</option>
									        <option value="工程师">工程师</option>
									        <option value="公务">公务员</option>
									        <option value="工人">工人</option>
									        <option value="IT技术工程师">IT技术工程师</option>
									        <option value="其他">其他</option>
									      </select>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">单位名称：</p>
								</div>
								<div class="col-md-8">
									<input id="company" name="dwname" class="enterNext input-text validate(maxlength(20))" maxlength="20" type="text">
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">婚姻：</p>
								</div>
								<div class="col-md-8">
									<div class="layui-input-block" style="width: 320px; margin-left: -0px;" >
									      <select name="hunyin"   lay-filter="hunyin">
									        <option value="未婚" selected="">未婚</option>
									        <option value="已婚">已婚</option>
									        <option value="离婚">离婚</option>
									        <option value="丧偶">丧偶</option>
									      </select>
									</div>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">血型：</p>
								</div>
								<div class="col-md-8">
									<div class="col-md-8">
									<div class="layui-input-block" style="width: 320px; margin-left: -0px;" >
									      <select name="xuexingid"   lay-filter="xuexingid">
									        <c:forEach items="${list}" var="item">
									        <option value="${item.xuexingid}">${item.xuexingtype}</option>
									        </c:forEach>
									      </select>
									</div>
								</div>
								</div>
							</div>

							

						</div>
						
						<div class="row">
							<div class="col-md-4-3">
								<p class="p-title">住址：</p>
							</div>
							
							<div class="col-md-2">
								<div class="layui-input-block" style="width: 240px; margin-left: -0px;" >
								      <select name="name" id="village"    lay-filter="dizhi">
								      <option value="0">请选择</option>
								      	<c:forEach items="${chinalist}" var="item">
								      	 	
								      		<c:if test="${item.id>0}">
								        		<option value="${item.id}">${item.name}</option>
								        	</c:if>
								        </c:forEach>
								      </select>
								</div>
							</div>
							<div class="col-md-2">
								<div class="layui-input-block" style="width: 240px; margin-left: -0px;" >
								      <select name="interest" id="village1"  lay-filter="dizhi1">
								        <option value="0">请选择</option>
								      </select>
								</div>
							</div>
							<div class="col-md-2">
								<div class="layui-input-block" style="width: 240px; margin-left: -0px;" >
									      <select name="" id="village2"  lay-filter="dizhi2">
									       <option value="0">请选择</option>
									      </select>
									</div>
							</div>
							
							<div class="col-md-8-3">
								<input id="addressDetail" name="addressxx" id="addressx" class="enterNext input-text" maxlength="60" placeholder="详细地址" type="text">
							</div>
						</div>
						<div class="row">
							<div class="col-md-4-3">
								<p class="p-title">备注：</p>
							</div>
							<div class="col-md-32-3">
								<input id="remark" name="beizhu" class="enterNext input-textarea-text " placeholder="(200个汉字)" maxlength="200" type="text">
							</div>
						</div>
					</div>
					<!-- 就诊信息 -->
					<div class="apptInfo">
						<div class="pt-title bbn">
							<h2>诊前信息</h2>
						</div>
						<div class="grid-container fillout-historicalConditions">
							<div class="row">
								<div class="col-md-6">
									<div class="col-md-100-82">
										<div class="layui-form-item choiceWrap radio-div" style="float: left;" >
										    <label class="layui-form-label" style="width:100px; float: left;">过敏史:</label>
										    <div class="layui-input-block" >
										      <input name="gmsstauts" value="1" lay-filter="gmsid" title="否" checked="checked" type="radio">
										      <input name="gmsstauts" value="2" lay-filter="gmsid" title="是" type="radio">
										    </div>
										  </div>
										<div class="allergy-input input_drop" style="float: left; width: 300px; margin-left: -0px;">
											 <select name="gmsid" id="guomin" disabled="disabled"  lay-filter=guomin>
										        <option value="1">无</option>											        
										      </select>
										<div class="input_drop_data_box" style="height: 182px; display: none;">                <ul class="input_drop_data" style="height: 140px;">                <li data-value="692AF89D494A2401E053086E10AC8DBF" class="even_item">苯巴比妥<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="1c060f76e7c9444dad78c195fa6326aa" class="odd_item">长号<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1E80C72E053086E10ACD8CF" class="even_item">氨基苄青霉素<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1E90C72E053086E10ACD8CF" class="odd_item">磺胺噻唑<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1EA0C72E053086E10ACD8CF" class="even_item">阿司匹林<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1EC0C72E053086E10ACD8CF" class="odd_item">氯丙嗪<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1ED0C72E053086E10ACD8CF" class="even_item">卡那霉素<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1EE0C72E053086E10ACD8CF" class="odd_item">磺胺嘧啶<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1EF0C72E053086E10ACD8CF" class="even_item">青霉素<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1F10C72E053086E10ACD8CF" class="odd_item">长效磺胺<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1F30C72E053086E10ACD8CF" class="even_item">复方新诺明<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1F40C72E053086E10ACD8CF" class="odd_item">头孢<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1E30C72E053086E10ACD8CF" class="even_item">普鲁卡因<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1DF0C72E053086E10ACD8CF" class="odd_item">布洛芬<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1E10C72E053086E10ACD8CF" class="even_item">链霉素<i class="input_drop_del_icon" title="删除">×</i></li></ul>                <div class="input_drop_save_box">                    <span class="input_drop_save_btn">保存</span>                    <div class="input_drop_save_new"><input class="input_drop_save_input" placeholder="快速添加常用语" maxlength="20"><div>                </div>            </div></div></div></div>
									</div>
								</div>
								<div class="col-md-6" style="float: left;">
									
									<div class="col-md-100-82">
										<div class="layui-form-item choiceWrap radio-div" style=" float: left;">
										    <label class="layui-form-label" style="width:100px;">既往史:</label>
										    <div class="layui-input-block">
										      <input name="jwsstauts" value="1" lay-filter="jwsid" title="否" checked="checked" type="radio">
										      <input name="jwsstauts" value="2" lay-filter="jwsid" title="是" type="radio">
										    </div>
										  </div>
										<div class="pastMedical-input input_drop" style="width: 300px; float: left; margin-left: -0px;">
											<div class="layui-input-block" style="width: 320px; margin-left: -0px;" >
											      <select name="jwsid" id="jiwang" disabled="disabled"  lay-filter=jiwang>
											        <option value="1">无</option>											        
											      </select>
											</div>
										<div class="input_drop_data_box" style="height: 182px; display: none;">                <ul class="input_drop_data" style="height: 140px;">                <li data-value="67780CBCA1E00C72E053086E10ACD8CF" class="even_item">支气管哮喘<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1E20C72E053086E10ACD8CF" class="odd_item">甲亢<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1E40C72E053086E10ACD8CF" class="even_item">冠心病<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1E60C72E053086E10ACD8CF" class="odd_item">输血史<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1F50C72E053086E10ACD8CF" class="even_item">高血压<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1EB0C72E053086E10ACD8CF" class="odd_item">肝炎<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1F00C72E053086E10ACD8CF" class="even_item">肺结核<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1F20C72E053086E10ACD8CF" class="odd_item">支气管扩张症<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1E70C72E053086E10ACD8CF" class="even_item">糖尿病<i class="input_drop_del_icon" title="删除">×</i></li></ul>                <div class="input_drop_save_box">                    <span class="input_drop_save_btn">保存</span>                    <div class="input_drop_save_new"><input class="input_drop_save_input" placeholder="快速添加常用语" maxlength="20"><div>                </div>            </div></div></div></div>
									</div>
								</div>
							</div>
						</div>
						<!-- 普通登记 -->
						<div id="clinic-doctor">
							
							<div class="grid-container Medical-Info">
								<div class="row">
									<div class="col-md-4">
											<div class="layui-form-item">
											    <label class="layui-form-label" style="width:100px;">就诊类型:</label>
											    <div class="layui-input-block">
											      <input name="jztype" value="1" title="初诊" checked="checked" type="radio">
											      <input name="jztype" value="2" title="复诊" type="radio">
											    </div>
											  </div>
									</div>
									<div class="col-md-4">
										<div class="col-md-4" >
											<p class="p-title">就诊科室：</p>
										</div>
										<div class="col-md-8">
											<div class="layui-input-block" style="width: 320px; margin-left: -0px;" >
											      <select name="ksid"   lay-filter="keshi">
											        <c:forEach items="${keshilist}" var="item">
											        <option value="${item.keshiid}">${item.keshiname}</option>
											        </c:forEach>
											      </select>
											</div>
										</div>
									</div>

									<div class="col-md-4">
										<div class="col-md-4">
											<p class="p-title">就诊医生：</p>
										</div>
										<div class="col-md-8">
											<div class="layui-input-block" style="width: 320px; margin-left: -0px;" >
											      <select name="ysid" id="yisheng"  lay-filter="yisheng">
											        <option value="0">请选择</option>											        
											      </select>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- 咨询师登记 -->
						
					 <a id="reg_complete_btn" href="javascript:void(0);" onclick="admin_start()" class="btn normal-btn fr register-btn" style="margin-top: 20px;" ><input type="submit" class="btn normal-btn fr register-btn" value="完成登记"></a>
					    <input type="reset" style="display:none;" />  
				</div>
				<div style="height: 200px;"></div>
		</div>
		</form>
		</div>
	</div>
	
	<!-- end of .content-inner -->
	<script type="text/javascript" src="../js/jquery-3.2.1.js"></script>
<script type="text/javascript" src="../layui/layui.js"></script>

<script type="text/javascript">
//注意：选项卡 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function(){
var element = layui.element;
});
layui.use('form', function(){
	  var form = layui.form();
	  form.on('select(dizhi)', function(data){
		  var parentId=data.value;
			 if(parentId == 0){
			 		
			  }else{
			    $.ajax({
			      type : "post",
			      url : "Chinainfo.html",
			      data : {"parentId":parentId},
			      dataType : "json",
			      success :function(data){
			        var len = data.length;
			        var htm = "<option value='0'>请选择</option>";
			        for(var i=0;i<len;i++){
			          htm += "<option value='"+data[i].id+"'>"+data[i].name+"</option>";
			        }
			        $("#village1").html(htm);
			        form.render('select','dizhi1');
			      }
			    })
			  }
		});  
	  form.on('select(dizhi1)', function(data){
		  var parentId=data.value;
		  if(parentId == 0){
		 
		  }else{
		    $.ajax({
		      type : "post",
		      url : "Chinainfo.html",
		      data : {"parentId":parentId},
		      dataType : "json",
		      success : function(data){
		        var len = data.length;
		        var htm = "<option value='0'>请选择</option>";
		        for(var i=0;i<len;i++){
		          htm += "<option value='"+data[i].id+"'>"+data[i].name+"</option>";
		        }
		        $("#village2").html(htm);
		        form.render('select','dizhi1');
		      }
		    })
		  }
	}); 
	  form.on('select(keshi)', function(data){
		  var parentId=data.value;
		  if(parentId == 0){
		 
		  }else{
		    $.ajax({
		      type : "post",
		      url : "yisheng.html",
		      data : {"parentId":parentId},
		      dataType : "json",
		      success : function(data){
		        var len = data.length;
		        var htm = "<option value='0'>请选择</option>";
		        for(var i=0;i<len;i++){
		        	if(data[i].zhiwei==1){
		        		htm += "<option value='"+data[i].adminid+"'>"+data[i].adminname+"</option>";	
		        	}
		        }
		        $("#yisheng").html(htm);
		        form.render('select','yisheng');
		      }
		    })
		  }
	}); 
  form.on('radio(gmsid)', function(data){
	  var gmsid=data.value;
	   if(gmsid==2){
		   $("#guomin").removeAttr("disabled");
		   $.ajax({
			      type : "post",
			      url : "gms.html",
			      dataType : "json",
			      success : function(data){
			        var len = data.length;
			        var htm = "";
			        for(var i=0;i<len;i++){
			        	if(data[i].gmsid>1){
			        		htm += "<option value='"+data[i].gmsid+"'>"+data[i].gmsname+"</option>";	
			        	}
			        }
			        $("#guomin").html(htm);
			        form.render('select','guomin');
			      }
			    })
		   }else{
		   var htm = "<option value='1'>无</option>";
		   $("#guomin").html(htm);
		   $("#guomin").attr("disabled","disabled");  
	   }
	   form.render('select','guomin');
  });
  form.on('radio(jwsid)', function(data){
	  var gmsid=data.value;
	   if(gmsid==2){
		   $("#jiwang").removeAttr("disabled");
		   $.ajax({
			      type : "post",
			      url : "jws.html",
			      dataType : "json",
			      success : function(data){
			        var len = data.length;
			        var htm = "";
			        for(var i=0;i<len;i++){
			        	if(data[i].jwsid>1){
			        		htm += "<option value='"+data[i].jwsid+"'>"+data[i].jwsms+"</option>";	
			        	}
			        }
			        $("#jiwang").html(htm);
			        form.render('select','jiwang');
			      }
			    })
		   }else{
		   var htm = "<option value='1'>无</option>";
		   $("#jiwang").html(htm);
		   $("#jiwang").attr("disabled","disabled");  
	   }
	   form.render('select','jiwang');
	
  });
});
</script>
<script type="text/javascript">
function huanzhelist(){
	window.location='../huanzhelist/hzlist.html'; 
}
function admin_start(){
	var village=$("#village");
	var village1=$("#village1");
	var village2=$("#village2");
	var address="";
	if(village.val()>0){
		var index=document.getElementById("village").selectedIndex;//获取当前选择项的索引.
		address+=document.getElementById("village").options[index].text;
	}
	if(village1.val()>0){
		var index=document.getElementById("village1").selectedIndex;//获取当前选择项的索引.
		address+=document.getElementById("village1").options[index].text;
	}
	if(village2.val()>0){
		var index=document.getElementById("village2").selectedIndex;//获取当前选择项的索引.
		address+=document.getElementById("village2").options[index].text;
	}
	$.ajax({
		type: 'POST',
		url: 'addhuanzhe.html?addressx='+address,
		dataType: 'json',
		data: $('#form1').serialize(),
		success: function(data){
			
		    $("input[type=reset]").trigger("click");  
		    layer.msg('登记成功！',{icon: 1,time:3000});
		},
		error:function(data) {
			console.log(data.msg);
			changeImg();
		},
	});
}
</script>
</body>
</html>