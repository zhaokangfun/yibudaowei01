<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

<script type="text/javascript" async="" src="../xujiajiacssjs/huanzhedengji/patientManagement_data/pawj_002.js">
	
</script>
<script
	src="../xujiajiacssjs/huanzhedengji/patientManagement_data/CLodopfuncs.js"></script>
<script
	src="../xujiajiacssjs/huanzhedengji/patientManagement_data/CLodopfuncs_002.js"></script>
<script
	src="../xujiajiacssjs/huanzhedengji/patientManagement_data/CLodopfuncs_003.js"></script>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="description" content="">
<meta name="Keywords" content="">
<script type="text/javascript"
	src="../xujiajiacssjs/huanzhedengji/switch.js"></script>
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
<script type="text/javascript" src="../xujiajiacssjs/huanzhedengji/patientManagement_data/ipquery.html"></script>
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
                        <div id="sub-menu" class="tab-nav clear" menu="DENT_INDEX01" style="display: inline-block; margin-top:20px;"><span id="PATREG01" menu="PATREG01" class="selected">患者登记</span><span id="PATREG02" menu="PATREG02" class="">登记列表</span></div>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- end of .content -->
    </div>
	<object classid="clsid:5EB842AE-5C49-4FD8-8CE9-77D4AF9FD4FF" id="IdrControl1" width="0" height="0"> </object>
	<div class="content-inner" id="patientManagement" style="margin-top: 80px;">
		<div class="tab-content clear">
			<!-- 患者信息录入 -->
			<form action="#" class="layui-form" method="post">
			<div class="patient-form clear" id="patientManager">
				<div class="patient-info">
					<div class="pt-title" style="padding-right: 38px;position: relative;">
						<!--查看帮助视频-->
						<h2 class="fl">患者信息</h2>
						
					</div>

						<!-- 是否医保登记标识 -->
						<input id="yb_card_no" name="yb_card_no" type="hidden">
					<!-- pa员工信息 -->
					
					<div class="grid-container">
						<div class="row" id="patient_type_row" style="display: none;">
							<div class="col-md-4-3">
								<p class="p-title">
									<i class="necessary">*</i>患者类型：
								</p>
							</div>
							<div class="md-28-3" id="patient_type_label"></div>
						</div>

						<div class="row">

							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">
										<i class="necessary">*</i>患者姓名：
									</p>
								</div>
								<div class="col-md-8" style="overflow: hidden; position: relative;">
									<input id="patiName" data-edit="add" placeholder="患者姓名" class="has-think-table enterNext fl input-text search-patiName validate(patientName,notEmpty)" maxlength="25" data-flag="pati" autocomplete="off" type="text">
										<span id="remove_patiName" class="close_span_patientName" style="display: none;"></span>
										 <a id="search_patient" href="javascript:;" class="btn fl js_search_btn bg_theme_color" title="搜索老客户">搜索老客户</a>
									<!-- <span id="remove_patient" class="close_span" style=""></span>	 -->	
								</div>
							</div>
								
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">
										<i class="necessary">*</i>患者性别：
									</p>
								</div>
								<div class="col-md-8">
									<div class="sex_warpper" id="sex_warpper">
										<span class="enterNext radio checked" val="1">男</span> <span class="enterNext radio" val="2">女</span> <span class="enterNext radio" val="3">保密</span>
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
										<input id="age" maxlength="3" class="enterNext input-text validate(digits, min(0), max(150))" type="text">
									</div>
									<div class="col-md-1" style="padding-left: 2px; padding-right: 0px;">
										<span style="line-height: 28px;">岁</span>
									</div>
									<div class="col-md-2" style="position: relative; padding-left: 0px; padding-right: 0px;">
										<input id="month" maxlength="2" class="enterNext input-text validate(digits, min(0), max(12))" type="text">
									</div>
									<div class="col-md-1" style="padding-left: 2px; padding-right: 0px;">
										<span style="line-height: 28px;">月</span>
									</div>
									<div class="col-md-6">
										<div class="date date-div" style="min-width: 90px;">
											<input class="enterNext input-text validate(date, birthday)" maxlength="10" id="birthday" placeholder="1900-01-01" autocomplete="off">
											<!-- <i class="date-icon"> </i> -->
										</div>
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
									<input id="phone" maxlength="11" class="enterNext input-text validate(apptPhone)" placeholder="请输入患者手机号" type="text">
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">病历号码：</p>
								</div>
								<div class="col-md-8">
									<input id="patientno" maxlength="20" class="validate(patientNo) enterNext input-text" style="background-color: rgb(255, 255, 255);" data-rule-id="" data-rule-no="P1804230001" value="P1804230001" type="text">
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">来源：</p>
								</div>
								<div class="col-md-8">
									<div class="layui-input-block" style="width: 320px; margin-left: -0px;" >
									      <select name="interest"   lay-filter="aihao">
									        <option value="0">写作</option>
									        <option value="1" selected="">阅读</option>
									        <option value="2">游戏</option>
									        <option value="3">音乐</option>
									        <option value="4">旅行</option>
									      </select>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4-3">
								<p class="p-title">标签：</p>
							</div>
							<div class="md-28-3">
								<ul id="labelList" class="label-ul">
									<li class="add-label"><a id="add_label" href="javascript:;"></a></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- end of .form-content -->
				</div>
				<!-- 详情信息 -->
				<div class="patient-info">
					<div class="" id="detail_title">
						<h3 id="hit" class="detail_more_up">详细信息</h3>
					</div>

					<div id="detail_container" class="grid-container" style="display: block;">
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">联系人：</p>
								</div>
								<div class="col-md-4">
									<div class="drop drop-div" style="min-width: 60px;">
										<input id="contact_person_rel" class="enterNext input-text" readonly="readonly" val=" " value="请选择" type="text"> <i class="drop-icon"></i>
									<ul class="wjzs-drop-menu dsn" style="display: none;"><li class="drop-item drop_even" title="请选择" value=" " data-value=" ">请选择</li><li class="drop-item drop_odd" title="父母" value="01" data-value="01">父母</li><li class="drop-item drop_even" title="子女" value="02" data-value="02">子女</li><li class="drop-item drop_odd" title="配偶" value="03" data-value="03">配偶</li><li class="drop-item drop_even" title="兄弟姐妹" value="04" data-value="04">兄弟姐妹</li><li class="drop-item drop_odd" title="朋友" value="05" data-value="05">朋友</li><li class="drop-item drop_even" title="其它亲属" value="06" data-value="06">其它亲属</li></ul></div>
								</div>
								<div class="col-md-4">
									<input id="contact_person_name" maxlength="25" class="enterNext input-text" placeholder="联系人姓名" type="text">
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">联系电话：</p>
								</div>
								<div class="col-md-8">
									<input id="contact_person_phone" maxlength="25" class="enterNext input-text" type="text">
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">会员信息：</p>
								</div>
								<div class="col-md-8">
									<div class="border-div">
										<div id="member-info" class="member_div dsn">
											<span id="member-content" class="member_info_span"></span> <span id="close_member" class="close_span"></span>
										</div>
										<a id="add-member" href="javascript:;">新建会员</a>
									</div>
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
									      <select name="interest"   lay-filter="aihao">
									        <option value="0">写作</option>
									        <option value="1" selected="">阅读</option>
									        <option value="2">游戏</option>
									        <option value="3">音乐</option>
									        <option value="4">旅行</option>
									      </select>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">证件号码：</p>
								</div>
								<div class="col-md-8">
									<input id="cardNum" class="enterNext input-text validate(numAndLetter,idCardCheack)" type="text">
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">介绍人：</p>
								</div>
								<div class="col-md-8" style="position: relative;">
									<input id="introducer" maxlength="25" class="enterNext input-text" style="padding-right: 22px;" placeholder="搜索患者或员工" autocomplete="off" type="text">
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
									      <select name="interest"   lay-filter="aihao">
									        <option value="0">写作</option>
									        <option value="1" selected="">阅读</option>
									        <option value="2">游戏</option>
									        <option value="3">音乐</option>
									        <option value="4">旅行</option>
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
									      <select name="interest"   lay-filter="aihao">
									        <option value="0">写作</option>
									        <option value="1" selected="">阅读</option>
									        <option value="2">游戏</option>
									        <option value="3">音乐</option>
									        <option value="4">旅行</option>
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
									      <select name="interest"   lay-filter="aihao">
									        <option value="0">写作</option>
									        <option value="1" selected="">阅读</option>
									        <option value="2">游戏</option>
									        <option value="3">音乐</option>
									        <option value="4">旅行</option>
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
									      <select name="interest"   lay-filter="aihao">
									        <option value="0">写作</option>
									        <option value="1" selected="">阅读</option>
									        <option value="2">游戏</option>
									        <option value="3">音乐</option>
									        <option value="4">旅行</option>
									      </select>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">单位名称：</p>
								</div>
								<div class="col-md-8">
									<input id="company" class="enterNext input-text validate(maxlength(20))" maxlength="20" type="text">
								</div>
							</div>

							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">电子邮箱：</p>
								</div>
								<div class="col-md-8">
									<input id="email" class="enterNext input-text validate(email)" type="text">
								</div>
							</div>

						</div>

						<div class="row">

							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">婚姻：</p>
								</div>
								<div class="col-md-8">
									<div class="layui-input-block" style="width: 320px; margin-left: -0px;" >
									      <select name="interest"   lay-filter="aihao">
									        <option value="0">写作</option>
									        <option value="1" selected="">阅读</option>
									        <option value="2">游戏</option>
									        <option value="3">音乐</option>
									        <option value="4">旅行</option>
									      </select>
									</div>
								</div>
							</div>

							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">ABO血型：</p>
								</div>
								<div class="col-md-8">
									<div class="drop drop-div">
										<input id="aboBlood" class="enterNext input-text" readonly="readonly" type="text"> <i class="drop-icon"></i>
									<ul class="wjzs-drop-menu dsn" style="display: none;"><li class="drop-item drop_even" title="A型" value="01" data-value="01">A型</li><li class="drop-item drop_odd" title="B型" value="02" data-value="02">B型</li><li class="drop-item drop_even" title="AB型" value="04" data-value="04">AB型</li><li class="drop-item drop_odd" title="O型" value="03" data-value="03">O型</li><li class="drop-item drop_even" title="不详" value="05" data-value="05">不详</li></ul></div>
								</div>
							</div>

							<div class="col-md-4">
								<div class="col-md-4">
									<p class="p-title">RH血型：</p>
								</div>
								<div class="col-md-8">
									<div class="drop drop-div">
										<input id="rhBlood" class="enterNext input-text" readonly="readonly" type="text"> <i class="drop-icon"></i>
									<ul class="wjzs-drop-menu dsn" style="display: none;"><li class="drop-item drop_even" title="Rh阴性" value="01" data-value="01">Rh阴性</li><li class="drop-item drop_odd" title="Rh阳性" value="02" data-value="02">Rh阳性</li><li class="drop-item drop_even" title="不详" value="03" data-value="03">不详</li></ul></div>
								</div>
							</div>

						</div>
						<div class="row">
							<div class="col-md-4-3">
								<p class="p-title">住址：</p>
							</div>
							<div class="col-md-2">
								<div class="layui-input-block" style="width: 240px; margin-left: -0px;" >
									      <select name="interest"   lay-filter="aihao">
									        <option value="0">写作</option>
									        <option value="1" selected="">阅读</option>
									        <option value="2">游戏</option>
									        <option value="3">音乐</option>
									        <option value="4">旅行</option>
									      </select>
									</div>
							</div>
							<div class="col-md-2">
								<div class="layui-input-block" style="width: 240px; margin-left: -0px;" >
									      <select name="interest"   lay-filter="aihao">
									        <option value="0">写作</option>
									        <option value="1" selected="">阅读</option>
									        <option value="2">游戏</option>
									        <option value="3">音乐</option>
									        <option value="4">旅行</option>
									      </select>
									</div>
							</div>
							<div class="col-md-2">
								<div class="layui-input-block" style="width: 240px; margin-left: -0px;" >
									      <select name="interest"   lay-filter="aihao">
									        <option value="0">写作</option>
									        <option value="1" selected="">阅读</option>
									        <option value="2">游戏</option>
									        <option value="3">音乐</option>
									        <option value="4">旅行</option>
									      </select>
									</div>
							</div>
							<div class="col-md-8-3">
								<input id="addressDetail" class="enterNext input-text" maxlength="60" placeholder="详细地址" type="text">
							</div>
						</div>
						<div class="row">
							<div class="col-md-4-3">
								<p class="p-title">备注：</p>
							</div>
							<div class="col-md-32-3">
								<input id="remark" class="enterNext input-textarea-text " placeholder="(200个汉字)" maxlength="200" type="text">
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
									<div class="col-md-100-18">
										<p class="p-title">
											<i class="necessary">*</i>过敏史：
										</p>
									</div>
									<div class="col-md-100-82">
										<div class="choiceWrap radio-div" data-target="allergy" id="allergy-check">
											<span class="enterNext radio checked" val="1">否认</span> 
											<span class="enterNext radio " val="2">有</span>
										</div>
										<div class="allergy-input input_drop">
											<input id="allergy" class="enterNext input-textarea-text validate(required)" placeholder="" maxlength="200" disabled="disabled" value="否认" type="text">
										<div class="input_drop_data_box" style="height: 182px; display: none;">                <ul class="input_drop_data" style="height: 140px;">                <li data-value="692AF89D494A2401E053086E10AC8DBF" class="even_item">苯巴比妥<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="1c060f76e7c9444dad78c195fa6326aa" class="odd_item">长号<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1E80C72E053086E10ACD8CF" class="even_item">氨基苄青霉素<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1E90C72E053086E10ACD8CF" class="odd_item">磺胺噻唑<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1EA0C72E053086E10ACD8CF" class="even_item">阿司匹林<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1EC0C72E053086E10ACD8CF" class="odd_item">氯丙嗪<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1ED0C72E053086E10ACD8CF" class="even_item">卡那霉素<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1EE0C72E053086E10ACD8CF" class="odd_item">磺胺嘧啶<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1EF0C72E053086E10ACD8CF" class="even_item">青霉素<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1F10C72E053086E10ACD8CF" class="odd_item">长效磺胺<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1F30C72E053086E10ACD8CF" class="even_item">复方新诺明<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1F40C72E053086E10ACD8CF" class="odd_item">头孢<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1E30C72E053086E10ACD8CF" class="even_item">普鲁卡因<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1DF0C72E053086E10ACD8CF" class="odd_item">布洛芬<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1E10C72E053086E10ACD8CF" class="even_item">链霉素<i class="input_drop_del_icon" title="删除">×</i></li></ul>                <div class="input_drop_save_box">                    <span class="input_drop_save_btn">保存</span>                    <div class="input_drop_save_new"><input class="input_drop_save_input" placeholder="快速添加常用语" maxlength="20"><div>                </div>            </div></div></div></div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="col-md-100-18">
										<p class="p-title">既往史：</p>
									</div>
									<div class="col-md-100-82">
										<div class="choiceWrap radio-div" data-target="pastMedical" id="pastMedical-check">
											<span class="enterNext radio checked" val="1">否认</span> <span class="enterNext radio" val="2">有</span>
										</div>
										<div class="pastMedical-input input_drop">
											<input id="pastMedical" class="enterNext input-textarea-text" placeholder="" maxlength="200" disabled="disabled" value="否认" type="text">
										<div class="input_drop_data_box" style="height: 182px; display: none;">                <ul class="input_drop_data" style="height: 140px;">                <li data-value="67780CBCA1E00C72E053086E10ACD8CF" class="even_item">支气管哮喘<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1E20C72E053086E10ACD8CF" class="odd_item">甲亢<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1E40C72E053086E10ACD8CF" class="even_item">冠心病<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1E60C72E053086E10ACD8CF" class="odd_item">输血史<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1F50C72E053086E10ACD8CF" class="even_item">高血压<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1EB0C72E053086E10ACD8CF" class="odd_item">肝炎<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1F00C72E053086E10ACD8CF" class="even_item">肺结核<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1F20C72E053086E10ACD8CF" class="odd_item">支气管扩张症<i class="input_drop_del_icon" title="删除">×</i></li><li data-value="67780CBCA1E70C72E053086E10ACD8CF" class="even_item">糖尿病<i class="input_drop_del_icon" title="删除">×</i></li></ul>                <div class="input_drop_save_box">                    <span class="input_drop_save_btn">保存</span>                    <div class="input_drop_save_new"><input class="input_drop_save_input" placeholder="快速添加常用语" maxlength="20"><div>                </div>            </div></div></div></div>
									</div>
								</div>
							</div>
						</div>
						<!-- 普通登记 -->
						<div id="clinic-doctor">
							<div class="pt-title bbn">
								<h2>就诊信息</h2>
								<div class="date fr the-date-box" style="display: none;">
									<input id="clinic_makeup_date" class="input-text" readonly="readonly" placeholder="请选择日期"> <i class="date-icon"></i>
								</div>
							</div>
							
							<div class="grid-container Medical-Info">
								<div class="row">
									<div class="col-md-4">
										<div class="layui-form-item">
										    <label class="layui-form-label">就诊类型</label>
										    <div class="layui-input-block">
										      <input name="sex" value="初诊" title="初诊" checked="" type="radio">
										      <input name="sex" value="复制" title="复制" type="radio">
										    </div>
										  </div>
									</div>
									<div class="col-md-4">
										<div class="col-md-4">
											<p class="p-title">就诊科室：</p>
										</div>
										<div class="col-md-8">
											<div class="layui-input-block" style="width: 320px; margin-left: -0px;" >
											      <select name="interest"   lay-filter="aihao">
											        <option value="0">写作</option>
											        <option value="1" selected="">阅读</option>
											        <option value="2">游戏</option>
											        <option value="3">音乐</option>
											        <option value="4">旅行</option>
											      </select>
											</div>
										</div>
									</div>

									<div class="col-md-4">
										<div class="col-md-4">
											<p class="p-title">就诊医生：</p>
										</div>
										<div class="col-md-8">
											<div class="drop drop-div disableDrop">
												<input id="appDoctor" class="enterNext input-text" readonly="readonly" type="text"> <i class="drop-icon"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- 咨询师登记 -->
						<div id="consultant" class="dsn" style="display: none;">
							<div class="pt-title bbn">
								<h2>咨询信息</h2>
							</div>
							<div class="grid-container Medical-Info">
								<div class="row">
									<div class="col-md-4">
										<div class="col-md-4">
											<p class="p-title">
												<i class="necessary">*</i>就诊类型：
											</p>
										</div>
										<div class="col-md-8">
											<div id="consultant_doctor_type"></div>
										</div>
									</div>
									<div class="col-md-4">
										<div class="col-md-4">
											<p class="p-title">咨询师：</p>
										</div>
										<div class="col-md-8">
											<div class="drop drop-div disableDrop">
												<input id="consultant_doctor" class="enterNext input-text" readonly="readonly" type="text"> <i class="drop-icon"></i>
											</div>
										</div>
									</div>
									
									<div class="col-md-4">
										<div class="col-md-4">
											<p class="p-title"></p>
										</div>
										<div class="col-md-8">
											<div class="drop-div">
												
											</div>
										</div>
									</div>
										
									<div class="col-md-4" id="dept_advisory">
										<div class="col-md-4">
											<p class="p-title">就诊科室：</p>
										</div>
										<div class="col-md-8">
											<div class="drop drop-div disableDrop">
												<input id="appDept_advisory" class="enterNext input-text" readonly="readonly" type="text"> <i class="drop-icon"></i>
											</div>
										</div>
									</div>
									
									<div class="col-md-4" id="doctor_advisory">
										<div class="col-md-4">
											<p class="p-title">就诊医生：</p>
										</div>
										<div class="col-md-8">
											<div class="drop drop-div disableDrop">
												<input id="appDoctor_advisory" class="enterNext input-text" readonly="readonly" type="text"> <i class="drop-icon"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- 挂号登记 -->
						<div id="guahao-reg" class="dsn" style="display: none;">
							<div class="pt-title bbn">
								<h2>挂号信息</h2>
								<div class="date fr the-date-box" style="display: none;">
									<input id="guahao_makeup_date" class="input-text" readonly="readonly" placeholder="请选择日期"> <i class="date-icon"></i>
								</div>
							</div>
							<div class="grid-container Medical-Info">
								<div class="row">
									<div class="col-md-4">
										<div class="col-md-4">
											<p class="p-title">就诊类型：</p>
										</div>
										<div class="col-md-8">
											<div id="registrationType" class="choiceWrap">
												<span class="enterNext radio checked" val="1">初诊</span> <span class="enterNext radio" val="2">复诊</span>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<div class="col-md-4">
											<p class="p-title">
												<i class="necessary">*</i>就诊科室：
											</p>
										</div>
										<div class="col-md-8">
											<div class="drop drop-div disableDrop">
												<input id="guahao-dept" class="enterNext input-text" readonly="readonly" type="text"> <i class="drop-icon"></i>
											</div>
										</div>
									</div>

									<div class="col-md-4">
										<div class="col-md-4">
											<p class="p-title">
												<i class="necessary">*</i>就诊医生：
											</p>
										</div>
										<div class="col-md-8">
											<div class="drop drop-div disableDrop">
												<input id="guahao-doctor" class="enterNext input-text" readonly="readonly" type="text"> <i class="drop-icon"></i>
											</div>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					<div class="clear_bot_box clear">
						<a id="clear_data" href="javascript:;" class="fl">清空</a>
						<div class="registration-fee fr dsn" style="display: none;">
							<p class="fl feeMoney">
								<span id="total_amount_text">应收诊金(元)：</span>
								<span class="registration-fee-number" id="doctor-cure-amount"></span>
								<span id="discount_after_total_money" class="dsn"></span>
								<span id="discount_before_total_money" class="dsn"></span>
								<span id="discount_money" class="dsn"></span>
							</p>
							<p class=""> </p>
							<p class="discountUnit"></p>
							<p class="discountBox fl">
								<input class="input-text" id="discountInput" style="display: none;" type="text">
							</p>
							<p class="sex_warpper fl" id="chooseDiscount">
								<span class="radio checked" val="0">无优惠</span>
								<span class="radio" val="1">折扣比例</span>
								<span class="radio" val="2">优惠金额</span>
							</p>
						</div>
					</div>
					 <a id="reg_complete_btn" href="javascript:void(0);" class="btn normal-btn fr register-btn">完成登记</a>
					<div id="print-guahao" class="fr print-bookForm dsn">
						<ul class="checkboxes">
							<li>打印挂号单</li>
						</ul>
					</div>
				</div>
				<div style="height: 200px;"></div>
			
		</div>
		</form>
		</div>
	</div>
<div class="xdsoft_datetimepicker xdsoft_noselect "><div class="xdsoft_datepicker active"><div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button" style="visibility: visible;"></button><div class="xdsoft_label xdsoft_month"><span>四月</span><div class="xdsoft_select xdsoft_monthselect xdsoft_scroller_box"><div style="margin-top: 0px;"><div class="xdsoft_option " data-value="0">一月</div><div class="xdsoft_option " data-value="1">二月</div><div class="xdsoft_option " data-value="2">三月</div><div class="xdsoft_option xdsoft_current" data-value="3">四月</div><div class="xdsoft_option " data-value="4">五月</div><div class="xdsoft_option " data-value="5">六月</div><div class="xdsoft_option " data-value="6">七月</div><div class="xdsoft_option " data-value="7">八月</div><div class="xdsoft_option " data-value="8">九月</div><div class="xdsoft_option " data-value="9">十月</div><div class="xdsoft_option " data-value="10">十一月</div><div class="xdsoft_option " data-value="11">十二月</div></div><div class="xdsoft_scrollbar"><div class="xdsoft_scroller" style="display: block; height: 10px; margin-top: 0px;"></div></div></div></div><div class="xdsoft_label xdsoft_year"><span>2018</span><div class="xdsoft_select xdsoft_yearselect xdsoft_scroller_box"><div style="margin-top: 0px;"><div class="xdsoft_option " data-value="1920">1920</div><div class="xdsoft_option " data-value="1921">1921</div><div class="xdsoft_option " data-value="1922">1922</div><div class="xdsoft_option " data-value="1923">1923</div><div class="xdsoft_option " data-value="1924">1924</div><div class="xdsoft_option " data-value="1925">1925</div><div class="xdsoft_option " data-value="1926">1926</div><div class="xdsoft_option " data-value="1927">1927</div><div class="xdsoft_option " data-value="1928">1928</div><div class="xdsoft_option " data-value="1929">1929</div><div class="xdsoft_option " data-value="1930">1930</div><div class="xdsoft_option " data-value="1931">1931</div><div class="xdsoft_option " data-value="1932">1932</div><div class="xdsoft_option " data-value="1933">1933</div><div class="xdsoft_option " data-value="1934">1934</div><div class="xdsoft_option " data-value="1935">1935</div><div class="xdsoft_option " data-value="1936">1936</div><div class="xdsoft_option " data-value="1937">1937</div><div class="xdsoft_option " data-value="1938">1938</div><div class="xdsoft_option " data-value="1939">1939</div><div class="xdsoft_option " data-value="1940">1940</div><div class="xdsoft_option " data-value="1941">1941</div><div class="xdsoft_option " data-value="1942">1942</div><div class="xdsoft_option " data-value="1943">1943</div><div class="xdsoft_option " data-value="1944">1944</div><div class="xdsoft_option " data-value="1945">1945</div><div class="xdsoft_option " data-value="1946">1946</div><div class="xdsoft_option " data-value="1947">1947</div><div class="xdsoft_option " data-value="1948">1948</div><div class="xdsoft_option " data-value="1949">1949</div><div class="xdsoft_option " data-value="1950">1950</div><div class="xdsoft_option " data-value="1951">1951</div><div class="xdsoft_option " data-value="1952">1952</div><div class="xdsoft_option " data-value="1953">1953</div><div class="xdsoft_option " data-value="1954">1954</div><div class="xdsoft_option " data-value="1955">1955</div><div class="xdsoft_option " data-value="1956">1956</div><div class="xdsoft_option " data-value="1957">1957</div><div class="xdsoft_option " data-value="1958">1958</div><div class="xdsoft_option " data-value="1959">1959</div><div class="xdsoft_option " data-value="1960">1960</div><div class="xdsoft_option " data-value="1961">1961</div><div class="xdsoft_option " data-value="1962">1962</div><div class="xdsoft_option " data-value="1963">1963</div><div class="xdsoft_option " data-value="1964">1964</div><div class="xdsoft_option " data-value="1965">1965</div><div class="xdsoft_option " data-value="1966">1966</div><div class="xdsoft_option " data-value="1967">1967</div><div class="xdsoft_option " data-value="1968">1968</div><div class="xdsoft_option " data-value="1969">1969</div><div class="xdsoft_option " data-value="1970">1970</div><div class="xdsoft_option " data-value="1971">1971</div><div class="xdsoft_option " data-value="1972">1972</div><div class="xdsoft_option " data-value="1973">1973</div><div class="xdsoft_option " data-value="1974">1974</div><div class="xdsoft_option " data-value="1975">1975</div><div class="xdsoft_option " data-value="1976">1976</div><div class="xdsoft_option " data-value="1977">1977</div><div class="xdsoft_option " data-value="1978">1978</div><div class="xdsoft_option " data-value="1979">1979</div><div class="xdsoft_option " data-value="1980">1980</div><div class="xdsoft_option " data-value="1981">1981</div><div class="xdsoft_option " data-value="1982">1982</div><div class="xdsoft_option " data-value="1983">1983</div><div class="xdsoft_option " data-value="1984">1984</div><div class="xdsoft_option " data-value="1985">1985</div><div class="xdsoft_option " data-value="1986">1986</div><div class="xdsoft_option " data-value="1987">1987</div><div class="xdsoft_option " data-value="1988">1988</div><div class="xdsoft_option " data-value="1989">1989</div><div class="xdsoft_option " data-value="1990">1990</div><div class="xdsoft_option " data-value="1991">1991</div><div class="xdsoft_option " data-value="1992">1992</div><div class="xdsoft_option " data-value="1993">1993</div><div class="xdsoft_option " data-value="1994">1994</div><div class="xdsoft_option " data-value="1995">1995</div><div class="xdsoft_option " data-value="1996">1996</div><div class="xdsoft_option " data-value="1997">1997</div><div class="xdsoft_option " data-value="1998">1998</div><div class="xdsoft_option " data-value="1999">1999</div><div class="xdsoft_option " data-value="2000">2000</div><div class="xdsoft_option " data-value="2001">2001</div><div class="xdsoft_option " data-value="2002">2002</div><div class="xdsoft_option " data-value="2003">2003</div><div class="xdsoft_option " data-value="2004">2004</div><div class="xdsoft_option " data-value="2005">2005</div><div class="xdsoft_option " data-value="2006">2006</div><div class="xdsoft_option " data-value="2007">2007</div><div class="xdsoft_option " data-value="2008">2008</div><div class="xdsoft_option " data-value="2009">2009</div><div class="xdsoft_option " data-value="2010">2010</div><div class="xdsoft_option " data-value="2011">2011</div><div class="xdsoft_option " data-value="2012">2012</div><div class="xdsoft_option " data-value="2013">2013</div><div class="xdsoft_option " data-value="2014">2014</div><div class="xdsoft_option " data-value="2015">2015</div><div class="xdsoft_option " data-value="2016">2016</div><div class="xdsoft_option " data-value="2017">2017</div><div class="xdsoft_option xdsoft_current" data-value="2018">2018</div><div class="xdsoft_option " data-value="2019">2019</div><div class="xdsoft_option " data-value="2020">2020</div><div class="xdsoft_option " data-value="2021">2021</div><div class="xdsoft_option " data-value="2022">2022</div><div class="xdsoft_option " data-value="2023">2023</div><div class="xdsoft_option " data-value="2024">2024</div><div class="xdsoft_option " data-value="2025">2025</div><div class="xdsoft_option " data-value="2026">2026</div><div class="xdsoft_option " data-value="2027">2027</div><div class="xdsoft_option " data-value="2028">2028</div><div class="xdsoft_option " data-value="2029">2029</div><div class="xdsoft_option " data-value="2030">2030</div><div class="xdsoft_option " data-value="2031">2031</div><div class="xdsoft_option " data-value="2032">2032</div><div class="xdsoft_option " data-value="2033">2033</div><div class="xdsoft_option " data-value="2034">2034</div><div class="xdsoft_option " data-value="2035">2035</div><div class="xdsoft_option " data-value="2036">2036</div><div class="xdsoft_option " data-value="2037">2037</div><div class="xdsoft_option " data-value="2038">2038</div><div class="xdsoft_option " data-value="2039">2039</div><div class="xdsoft_option " data-value="2040">2040</div><div class="xdsoft_option " data-value="2041">2041</div><div class="xdsoft_option " data-value="2042">2042</div><div class="xdsoft_option " data-value="2043">2043</div><div class="xdsoft_option " data-value="2044">2044</div><div class="xdsoft_option " data-value="2045">2045</div><div class="xdsoft_option " data-value="2046">2046</div><div class="xdsoft_option " data-value="2047">2047</div><div class="xdsoft_option " data-value="2048">2048</div><div class="xdsoft_option " data-value="2049">2049</div><div class="xdsoft_option " data-value="2050">2050</div></div><div class="xdsoft_scrollbar"><div class="xdsoft_scroller" style="display: block; height: 10px; margin-top: 0px;"></div></div></div></div><button type="button" class="xdsoft_next"></button></div><div class="xdsoft_calendar"><table><thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead><tbody><tr><td data-date="1" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend"><div>1</div></td><td data-date="2" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week1 xdsoft_date"><div>2</div></td><td data-date="3" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week2 xdsoft_date"><div>3</div></td><td data-date="4" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week3 xdsoft_date"><div>4</div></td><td data-date="5" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week4 xdsoft_date"><div>5</div></td><td data-date="6" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week5 xdsoft_date"><div>6</div></td><td data-date="7" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_weekend"><div>7</div></td></tr><tr><td data-date="8" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend"><div>8</div></td><td data-date="9" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week1 xdsoft_date"><div>9</div></td><td data-date="10" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week2 xdsoft_date"><div>10</div></td><td data-date="11" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week3 xdsoft_date"><div>11</div></td><td data-date="12" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week4 xdsoft_date"><div>12</div></td><td data-date="13" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week5 xdsoft_date"><div>13</div></td><td data-date="14" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_weekend"><div>14</div></td></tr><tr><td data-date="15" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend"><div>15</div></td><td data-date="16" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week1 xdsoft_date"><div>16</div></td><td data-date="17" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week2 xdsoft_date"><div>17</div></td><td data-date="18" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week3 xdsoft_date"><div>18</div></td><td data-date="19" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week4 xdsoft_date"><div>19</div></td><td data-date="20" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week5 xdsoft_date"><div>20</div></td><td data-date="21" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_weekend"><div>21</div></td></tr><tr><td data-date="22" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend"><div>22</div></td><td data-date="23" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_current xdsoft_today"><div>23</div></td><td data-date="24" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"><div>24</div></td><td data-date="25" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"><div>25</div></td><td data-date="26" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"><div>26</div></td><td data-date="27" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"><div>27</div></td><td data-date="28" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"><div>28</div></td></tr><tr><td data-date="29" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"><div>29</div></td><td data-date="30" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"><div>30</div></td><td data-date="1" data-month="4" data-year="2018" class="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled xdsoft_other_month"><div>1</div></td><td data-date="2" data-month="4" data-year="2018" class="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled xdsoft_other_month"><div>2</div></td><td data-date="3" data-month="4" data-year="2018" class="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled xdsoft_other_month"><div>3</div></td><td data-date="4" data-month="4" data-year="2018" class="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled xdsoft_other_month"><div>4</div></td><td data-date="5" data-month="4" data-year="2018" class="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_other_month xdsoft_weekend"><div>5</div></td></tr></tbody></table></div></div><div class="xdsoft_timepicker"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box xdsoft_scroller_box"><div class="xdsoft_time_variant" style="margin-top: 0px;"><div class="xdsoft_time " data-hour="0" data-minute="0">00:00</div><div class="xdsoft_time " data-hour="1" data-minute="0">01:00</div><div class="xdsoft_time " data-hour="2" data-minute="0">02:00</div><div class="xdsoft_time " data-hour="3" data-minute="0">03:00</div><div class="xdsoft_time " data-hour="4" data-minute="0">04:00</div><div class="xdsoft_time " data-hour="5" data-minute="0">05:00</div><div class="xdsoft_time " data-hour="6" data-minute="0">06:00</div><div class="xdsoft_time " data-hour="7" data-minute="0">07:00</div><div class="xdsoft_time " data-hour="8" data-minute="0">08:00</div><div class="xdsoft_time " data-hour="9" data-minute="0">09:00</div><div class="xdsoft_time " data-hour="10" data-minute="0">10:00</div><div class="xdsoft_time " data-hour="11" data-minute="0">11:00</div><div class="xdsoft_time " data-hour="12" data-minute="0">12:00</div><div class="xdsoft_time " data-hour="13" data-minute="0">13:00</div><div class="xdsoft_time " data-hour="14" data-minute="0">14:00</div><div class="xdsoft_time xdsoft_current" data-hour="15" data-minute="0">15:00</div><div class="xdsoft_time " data-hour="16" data-minute="0">16:00</div><div class="xdsoft_time " data-hour="17" data-minute="0">17:00</div><div class="xdsoft_time " data-hour="18" data-minute="0">18:00</div><div class="xdsoft_time " data-hour="19" data-minute="0">19:00</div><div class="xdsoft_time " data-hour="20" data-minute="0">20:00</div><div class="xdsoft_time " data-hour="21" data-minute="0">21:00</div><div class="xdsoft_time " data-hour="22" data-minute="0">22:00</div><div class="xdsoft_time " data-hour="23" data-minute="0">23:00</div></div><div class="xdsoft_scrollbar"><div class="xdsoft_scroller" style="display: block; height: 10px; margin-top: 0px;"></div></div></div><button type="button" class="xdsoft_next"></button></div></div><div class="loading-mask" style="display: none;"><span class="loading-content"></span></div><div id="SL_balloon_obj" alt="0" style="display: block;"><div id="SL_button" class="SL_ImTranslatorLogo" style="background: rgba(0, 0, 0, 0) url(&quot;moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/img/util/imtranslator-s.png&quot;) repeat scroll 0% 0%; display: none; opacity: 1;"></div><div id="SL_shadow_translation_result2" style="display: none;"></div><div id="SL_shadow_translator" style="display: none;"><div id="SL_planshet"><div id="SL_arrow_up" style="background: rgba(0, 0, 0, 0) url(&quot;moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/img/util/up.png&quot;) repeat scroll 0% 0%;"></div><div id="SL_Bproviders"><div class="SL_BL_LABLE_ON" title="Google" id="SL_P0">G</div><div class="SL_BL_LABLE_ON" title="Microsoft" id="SL_P1">M</div><div class="SL_BL_LABLE_ON" title="Translator" id="SL_P2">T</div></div><div id="SL_alert_bbl" style="display: none;"><div id="SLHKclose" style="background: rgba(0, 0, 0, 0) url(&quot;moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/img/util/delete.png&quot;) repeat scroll 0% 0%;"></div><div id="SL_alert_cont"></div></div><div id="SL_TB"><table id="SL_tables" cellspacing="1"><tr><td class="SL_td" width="10%" align="right"><input id="SL_locer" title="Lock-in language" type="checkbox"></td><td class="SL_td" width="20%" align="left"><select id="SL_lng_from" style="background: rgb(255, 255, 255) url(&quot;moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/img/util/select.png&quot;) no-repeat scroll 100% 0px;"><option value="auto">Detect language</option><option value="af">Afrikaans</option><option value="sq">Albanian</option><option value="ar">Arabic</option><option value="hy">Armenian</option><option value="az">Azerbaijani</option><option value="eu">Basque</option><option value="be">Belarusian</option><option value="bn">Bengali</option><option value="bs">Bosnian</option><option value="bg">Bulgarian</option><option value="ca">Catalan</option><option value="ceb">Cebuano</option><option value="ny">Chichewa</option><option value="zh-CN">Chinese (Simplified)</option><option value="zh-TW">Chinese (Traditional)</option><option value="hr">Croatian</option><option value="cs">Czech</option><option value="da">Danish</option><option value="nl">Dutch</option><option value="en">English</option><option value="eo">Esperanto</option><option value="et">Estonian</option><option value="tl">Filipino</option><option value="fi">Finnish</option><option value="fr">French</option><option value="gl">Galician</option><option value="ka">Georgian</option><option value="de">German</option><option value="el">Greek</option><option value="gu">Gujarati</option><option value="ht">Haitian Creole</option><option value="ha">Hausa</option><option value="iw">Hebrew</option><option value="hi">Hindi</option><option value="hmn">Hmong</option><option value="hu">Hungarian</option><option value="is">Icelandic</option><option value="ig">Igbo</option><option value="id">Indonesian</option><option value="ga">Irish</option><option value="it">Italian</option><option value="ja">Japanese</option><option value="jw">Javanese</option><option value="kn">Kannada</option><option value="kk">Kazakh</option><option value="km">Khmer</option><option value="ko">Korean</option><option value="lo">Lao</option><option value="la">Latin</option><option value="lv">Latvian</option><option value="lt">Lithuanian</option><option value="mk">Macedonian</option><option value="mg">Malagasy</option><option value="ms">Malay</option><option value="ml">Malayalam</option><option value="mt">Maltese</option><option value="mi">Maori</option><option value="mr">Marathi</option><option value="mn">Mongolian</option><option value="my">Myanmar (Burmese)</option><option value="ne">Nepali</option><option value="no">Norwegian</option><option value="fa">Persian</option><option value="pl">Polish</option><option value="pt">Portuguese</option><option value="pa">Punjabi</option><option value="ro">Romanian</option><option value="ru">Russian</option><option value="sr">Serbian</option><option value="st">Sesotho</option><option value="si">Sinhala</option><option value="sk">Slovak</option><option value="sl">Slovenian</option><option value="so">Somali</option><option value="es">Spanish</option><option value="su">Sundanese</option><option value="sw">Swahili</option><option value="sv">Swedish</option><option value="tg">Tajik</option><option value="ta">Tamil</option><option value="te">Telugu</option><option value="th">Thai</option><option value="tr">Turkish</option><option value="uk">Ukrainian</option><option value="ur">Urdu</option><option value="uz">Uzbek</option><option value="vi">Vietnamese</option><option value="cy">Welsh</option><option value="yi">Yiddish</option><option value="yo">Yoruba</option><option value="zu">Zulu</option></select></td><td class="SL_td" width="3" align="center"><div id="SL_switch_b" title="Switch languages" style="background: rgba(0, 0, 0, 0) url(&quot;moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/img/util/switchb.png&quot;) repeat scroll 0% 0%;"></div></td><td class="SL_td" width="20%" align="left"><select id="SL_lng_to" style="background: rgb(255, 255, 255) url(&quot;moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/img/util/select.png&quot;) no-repeat scroll 100% 0px;"><option value="af">Afrikaans</option><option value="sq">Albanian</option><option value="ar">Arabic</option><option value="hy">Armenian</option><option value="az">Azerbaijani</option><option value="eu">Basque</option><option value="be">Belarusian</option><option value="bn">Bengali</option><option value="bs">Bosnian</option><option value="bg">Bulgarian</option><option value="ca">Catalan</option><option value="ceb">Cebuano</option><option value="ny">Chichewa</option><option value="zh-CN">Chinese (Simplified)</option><option value="zh-TW">Chinese (Traditional)</option><option value="hr">Croatian</option><option value="cs">Czech</option><option value="da">Danish</option><option value="nl">Dutch</option><option selected="selected" value="en">English</option><option value="eo">Esperanto</option><option value="et">Estonian</option><option value="tl">Filipino</option><option value="fi">Finnish</option><option value="fr">French</option><option value="gl">Galician</option><option value="ka">Georgian</option><option value="de">German</option><option value="el">Greek</option><option value="gu">Gujarati</option><option value="ht">Haitian Creole</option><option value="ha">Hausa</option><option value="iw">Hebrew</option><option value="hi">Hindi</option><option value="hmn">Hmong</option><option value="hu">Hungarian</option><option value="is">Icelandic</option><option value="ig">Igbo</option><option value="id">Indonesian</option><option value="ga">Irish</option><option value="it">Italian</option><option value="ja">Japanese</option><option value="jw">Javanese</option><option value="kn">Kannada</option><option value="kk">Kazakh</option><option value="km">Khmer</option><option value="ko">Korean</option><option value="lo">Lao</option><option value="la">Latin</option><option value="lv">Latvian</option><option value="lt">Lithuanian</option><option value="mk">Macedonian</option><option value="mg">Malagasy</option><option value="ms">Malay</option><option value="ml">Malayalam</option><option value="mt">Maltese</option><option value="mi">Maori</option><option value="mr">Marathi</option><option value="mn">Mongolian</option><option value="my">Myanmar (Burmese)</option><option value="ne">Nepali</option><option value="no">Norwegian</option><option value="fa">Persian</option><option value="pl">Polish</option><option value="pt">Portuguese</option><option value="pa">Punjabi</option><option value="ro">Romanian</option><option value="ru">Russian</option><option value="sr">Serbian</option><option value="st">Sesotho</option><option value="si">Sinhala</option><option value="sk">Slovak</option><option value="sl">Slovenian</option><option value="so">Somali</option><option value="es">Spanish</option><option value="su">Sundanese</option><option value="sw">Swahili</option><option value="sv">Swedish</option><option value="tg">Tajik</option><option value="ta">Tamil</option><option value="te">Telugu</option><option value="th">Thai</option><option value="tr">Turkish</option><option value="uk">Ukrainian</option><option value="ur">Urdu</option><option value="uz">Uzbek</option><option value="vi">Vietnamese</option><option value="cy">Welsh</option><option value="yi">Yiddish</option><option value="yo">Yoruba</option><option value="zu">Zulu</option></select></td><td class="SL_td" width="8%" align="center"><div id="SL_TTS_voice" title="Listen to the translation" style="background: rgba(0, 0, 0, 0) url(&quot;moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/img/util/ttsvoice.png&quot;) repeat scroll 0% 0%;"></div></td><td class="SL_td" width="8%" align="center"><div id="SL_copy" title="Copy translation" class="SL_copy" style="background: rgba(0, 0, 0, 0) url(&quot;moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/img/util/copy.png&quot;) repeat scroll 0% 0%;"></div></td><td class="SL_td" width="8%" align="center"><div id="SL_bbl_font_patch"></div><div id="SL_bbl_font" title="Font size" class="SL_bbl_font" style="background: rgba(0, 0, 0, 0) url(&quot;moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/img/util/font.png&quot;) repeat scroll 0% 0%;"></div></td><td class="SL_td" width="8%" align="center"><div id="SL_bbl_help" title="Help" style="background: rgba(0, 0, 0, 0) url(&quot;moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/img/util/bhelp.png&quot;) repeat scroll 0% 0%;"></div></td><td class="SL_td" width="15%" align="right"><div id="SL_pin" class="SL_pin_off" title="Pin pop-up bubble" style="background: rgba(0, 0, 0, 0) url(&quot;moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/img/util/pin-on.png&quot;) repeat scroll 0% 0%;"></div></td></tr></table></div></div><div id="SL_shadow_translation_result" style="visibility: visible;"></div><div id="SL_loading" class="SL_loading" style="background: rgba(0, 0, 0, 0) url(&quot;moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/img/util/loading.gif&quot;) repeat scroll 0% 0%;"></div><div id="SL_player2"></div><div id="SL_alert100">Text-to-speech function is limited to 200 characters</div><div id="SL_Balloon_options" style="background: rgb(255, 255, 255) url(&quot;moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/img/util/bg3.png&quot;) repeat scroll 0% 0%;"><div id="SL_arrow_down" style="background: rgba(0, 0, 0, 0) url(&quot;moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/img/util/down.png&quot;) repeat scroll 0% 0%;"></div><table id="SL_tbl_opt" width="100%"><tr><td width="5%" align="center"><input id="SL_BBL_locer" checked="1" title="Show Translator's button 3 second(s)" type="checkbox"></td><td width="5%" align="left"><div id="SL_BBL_IMG" title="Show Translator's button 3 second(s)" style="background: rgba(0, 0, 0, 0) url(&quot;moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/img/util/bbl-logo.png&quot;) repeat scroll 0% 0%;"></div></td><td width="70%" align="center"><a href="moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/html/options/options.html?bbl" target="_blank" class="SL_options" title="Show options">Options</a> : <a href="moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/html/options/options.html?hist" target="_blank" class="SL_options" title="Translation History">History</a> : <a href="moz-extension://611cf041-140c-4904-8d3a-2e601864bb4a/content/html/options/options.html?feed" target="_blank" class="SL_options" title="ImTranslator Feedback">Feedback</a> : <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=GD9D8CPW8HFA2" target="_blank" class="SL_options" title="Make a small contribution">Donate</a></td><td width="15%" align="right"><span id="SL_Balloon_Close" title="Close">Close</span></td></tr></table></div></div></div></body>
	
	<!-- end of .content-inner -->
	<script type="text/javascript" src="../js/jquery-3.2.1.js"></script>
<script type="text/javascript" src="../layui/layui.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/jquery.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/public.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/jquery_004.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/pawj.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/underscore-min.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/layer.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/jquery_002.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/pawj_003.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/readCard.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/cache.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/mi_common.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/idCardCheck.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/printUtils.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/sessionCache.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/registerPrint.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/YBRegisterPrint.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/patient_common.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/reg_util.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/patient_pafc.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/patient_yb.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/patient_idcardread.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/patientManagement.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/healthProductVisit.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/ybUtils.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/chargeUtil.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/szYbNewServiceInvoker.js"></script>
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/print.js"></script>
	<!-- 过敏史既往史快速选择插件 -->
	<script type="text/javascript"
		src="../xujiajiacssjs/huanzhedengji/patientManagement_data/jquery_003.js"></script>

<script type="text/javascript">
//注意：选项卡 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function(){
var element = layui.element;
});
layui.use('form', function(){
	  var form = layui.form;
});
</script>
</body>
</html>