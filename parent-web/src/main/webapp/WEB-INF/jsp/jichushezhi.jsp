<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>个人信息</title>
	<meta name="renderer" content="webkit">	
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">	
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">	
	<meta name="apple-mobile-web-app-status-bar-style" content="black">	
	<meta name="apple-mobile-web-app-capable" content="yes">	
	<meta name="format-detection" content="telephone=no">	
	<link rel="stylesheet" type="text/css" href="../layui/css/layui.css" media="all">
  <link rel="stylesheet" type="text/css" href="../common/bootstrap/css/bootstrap.min.css" media="all">
  <link rel="stylesheet" type="text/css" href="../common/css/global.css" media="all">
  <link rel="stylesheet" type="text/css" href="../css/common.css" media="all">
  <link rel="stylesheet" type="text/css" href="../css/personal.css" media="all">
	<link rel="stylesheet" href="../css/font_eolqem241z66flxr.css" media="all" />
</head>
<body>
<form action="#" class="layui-form layui-form-pane" method="post">
<section class="larry-grid">
	<div class="larry-personal">
	    <div class="layui-tab">
            <blockquote class="layui-elem-quote mylog-info-tit">
                <ul class="layui-tab-title">
		    	          <li class="layui-btn layui-this"><i class="layui-icon">&#xe60a;</i>药品管理</li>
		    	          <li class="layui-btn "><i class="layui-icon">&#xe63c;</i>医生工作站</li>
		    	          <li class="layui-btn "><i class="layui-icon">&#xe63c;</i>收费管理</li>
		    	          <li class="layui-btn "><i class="layui-icon">&#xe63c;</i>会员管理</li>
		    	          <li class="layui-btn "><i class="layui-icon">&#xe63c;</i>理疗师工作站</li>
		    	          <li class="layui-btn "><i class="layui-icon">&#xe63c;</i>门诊护士站</li>
		    	          <li class="layui-btn "><i class="layui-icon">&#xe63c;</i>预约设置</li>
		            </ul>
            </blockquote>
            <div class="larry-separate"></div>
		    <div class="layui-tab-content larry-personal-body clearfix mylog-info-box">
		         <!-- 操作日志 -->
                <div class="layui-tab-item layui-field-box layui-show">
                     <table class="layui-table table-hover" lay-even="" lay-skin="nob">
                          <thead>
                              <tr>
                                  <th hidden="ture">ID</th>
                                  <th  style="text-align: center;">参数名称</th>
                                  <th width="200px;">参数值</th>
                                  <th>参数说明</th>
                              </tr>
                          </thead>
                          <tbody>
                          <tr>
                                <td hidden="ture" id="1jichu1">1</td>
                                <td style="text-align: center;">药品批次</td>
                                <td>
								      <select name="interest" id="1ji1" lay-filter="aihao">
								        <option value="1" selected="">先进先出</option>
								        <option value="2">按有效期</option>
								      </select>
                                </td>
                                <td>1.先进先出；2.按有效期</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="1jichu2">2</td>
                                <td style="text-align: center;">效期自动提醒</td>
                                <td>
                                	<select name="interest" id="1ji2" lay-filter="aihao">
								        <option value="1" selected="">30天内提醒</option>
								        <option value="2">60天内提醒</option>
								        <option value="3">3个月内提醒</option>
								      </select>
                                </td>
                                <td>1.30天内提醒；2.60天内提醒；3.3个月内提醒</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="1jichu3">3</td>
                                <td style="text-align: center;">有效期必填</td>
                                <td><select name="interest" id="1ji3" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select></td>
                                <td>1.是；2.否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="1jichu4">4</td>
                                <td style="text-align: center;">是否自动全盘点</td>
                                <td><select name="interest" id="1ji4" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select></td>
                                <td>1.是；2.否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="1jichu5">5</td>
                                <td style="text-align: center;">发药审核</td>
                                <td><select name="interest" id="1ji5" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select></td>
                                <td>1.是；2.否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="1jichu6">6</td>
                                <td style="text-align: center;">启用库存效验</td>
                                <td><select name="interest" id="1ji6" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select></td>
                                <td>开药品时，是否效验药品库存</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="1jichu7">7</td>
                                <td style="text-align: center;">就诊未结束不显示药品信息</td>
                                <td><select name="interest" id="1ji7" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select></td>
                                <td>1.是；2.否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="1jichu8">8</td>
                                <td style="text-align: center;">效验材料库存</td>
                                <td><select name="interest" id="1ji8" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select></td>
                                <td>1.效验；2.不效验</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="1jichu9">9</td>
                                <td style="text-align: center;">允许修改进货价</td>
                                <td><select name="interest" id="1ji9" lay-filter="aihao">
								        <option value="1" selected="">允许</option>
								        <option value="2">不允许</option>
								      </select></td>
                                <td>在入库单保存/确认后是否可修改进货价</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="1jichu10">10</td>
                                <td style="text-align: center;">进销存统计</td>
                                <td><select name="interest" id="1ji10" lay-filter="aihao">
								        <option value="1" selected="">开启</option>
								        <option value="2">关闭</option>
								      </select></td>
                                <td>开启的当月无法统计到“期初库存”；关闭后将不再统计进销存，请勿随意操作。</td>
                              </tr>
                          	<%-- <c:forEach items="${getAll}" var="item">
                              <tr>
                                <td  hidden="ture">${item.jchcid}</td>
                                <td style="text-align: center;">${item.jchcname}</td>
                                <td>${item.canshuzhi}</td>
                                <td>${item.canshushuoming}</td>
                              </tr>
                              </c:forEach> --%>
                          </tbody>
                          
                     </table>
			           <div class="larry-table-page clearfix" style="float: right; width: 100%; background-color:#fff;">
                 			 <a  class="layui-btn layui-btn-small" href="javascript:void(0);" onclick="baocun1()" style="float: right; margin-right: 50px; margin-top: 5px; width: 100px; height: 35px;"><i class="iconfont icon-shanchu1"></i>&nbsp;&nbsp;保存&nbsp;&nbsp;</a>
	        			 </div>
			    </div>
			    
			     <!-- 登录日志 -->
			    <div class="layui-tab-item layui-field-box" style="">
			          <table class="layui-table table-hover" lay-even="" lay-skin="nob">
                           <thead>
                              <tr>
                                  <th  hidden="ture">ID</th>
                                  <th style="text-align: center;">参数名称</th>
                                  <th width="200px;">参数值</th>
                                  <th>参数说明</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td hidden="ture" id="2jichu11">11</td>
                                <td style="text-align: center;">是否做传染病上报检测</td>
                                <td><select name="interest" id="2ji11" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select></td>
                                <td>1、是；2、否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu12">12</td>
                                <td style="text-align: center;">是否仅医生可接诊</td>
                                <td><select name="interest" id="2ji12" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select></td>
                                <td>	1、是；2、否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu13">13</td>
                                <td style="text-align: center;">是否需要分诊</td>
                                <td><select name="interest" id="2ji13" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select></td>
                                <td>是：显示分诊台；否：隐藏分诊台</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu14">14</td>
                                <td style="text-align: center;">分诊模式</td>
                                <td>
                                	<select name="interest" id="2ji14" lay-filter="aihao">
								        <option value="1" selected="">自动</option>
								        <option value="2">手动</option>
								      </select>
                                </td>
                                <td>自动：登记完成后分诊状态为已分诊；手动：手动分诊</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu15">15</td>
                                <td style="text-align: center;">登记模式</td>
                                <td>
                                	<select name="interest" id="2ji15"  lay-filter="aihao">
								        <option value="1" selected="">普通登记</option>
								        <option value="2">挂号登记</option>
								      	<option value="3">咨询师登记</option>
								      </select>
                                </td>
                                <td>登记模式切换</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu16">16</td>
                                <td style="text-align: center;">语音输入是否开启</td>
                                <td>
                                	<select name="interest" id="2ji16" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>是：开启语音输入；否：关闭语音输入</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu17">17</td>
                                <td style="text-align: center;">是否医生发起退药</td>
                                <td>
                                	<select name="interest" id="2ji17" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>	1、是；2、否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu18">18</td>
                                <td style="text-align: center;">患者重复登记限制</td>
                                <td>
                                	<select name="interest" id="2ji18" lay-filter="aihao">
								        <option value="1" selected="">科室</option>
								        <option value="2">医生</option>
								      </select>
                                </td>
                                <td>1、同一科室不可重复登记;2、同一医生不可重复登记 </td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu19">19</td>
                                <td style="text-align: center;">草药处方是否显示单位为g药品总重量</td>
                                <td>
                                	<select name="interest" id="2ji19" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>是、显示；否、不显示</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu20">20</td>
                                <td style="text-align: center;">治疗/处置/处方等页面是否隐藏项目单价与总价</td>
                                <td>
                                	<select name="interest" id="2ji20" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>是：隐藏；否：不隐藏</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu21">21</td>
                                <td style="text-align: center;">是否允许补录登记记录</td>
                                <td>
                                	<select name="interest" id="2ji21" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>1、是;2、否 ; </td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu22">22</td>
                                <td style="text-align: center;">患者登记是否需要医生排班</td>
                                <td>
                                	<select name="interest" id="2ji22" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>是：患者登记前必须先进行医生排班；否：无需医生排班也可进行患者登记</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu23">23</td>
                                <td style="text-align: center;">草药处方打印格式选择</td>
                                <td>
                                	<select name="interest" id="2ji23" lay-filter="aihao">
								        <option value="1">通用格式</option>
								        <option value="2">定制格式</option>
								        <option value="3">定制格式2</option>
								        <option value="4">大通中医定制</option>
								      </select>
                                </td>
                                <td>0、通用格式；1、定制格式；2、定制格式2；3、大通中医定制；</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu24">24</td>
                                <td style="text-align: center;">是否启用合理用药</td>
                                <td>
                                	<select name="interest" id="2ji24" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>1、是;2、否 ; </td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu25">25</td>
                                <td style="text-align: center;">是否启用二级科室作为诊室</td>
                                <td>
                                	<select name="interest" id="2ji25" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>1、是；2、否； </td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu26">26</td>
                                <td style="text-align: center;">草药处方（颗粒）打印是否显示规格</td>
                                <td>
                                	<select name="interest" id="2ji26" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>仅对草药处方的定制格式2有效</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu27">27</td>
                                <td style="text-align: center;">是否允许医生接诊时直接更改收费项目价格</td>
                                <td>
                                	<select name="interest" id="2ji27" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>1、是; 2、否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu28">28</td>
                                <td style="text-align: center;">西药处方是否限制5种药品</td>
                                <td>
                                	<select name="interest" id="2ji28" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>	1、是；2、否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu29">29</td>
                                <td style="text-align: center;">是否医生仅能查看接诊过的患者健康档案</td>
                                <td>
                                	<select name="interest" id="2ji29" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>1、是；2、否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu30">30</td>
                                <td style="text-align: center;">西药处方打印格式选择</td>
                                <td>
                                	<select name="interest" id="2ji30" lay-filter="aihao">
								        <option value="1" selected="">通用格式</option>
								        <option value="2">通用格式2</option>
								      </select>
                                </td>
                                <td>1:通用格式；2:通用格式2</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="2jichu31">31</td>
                                <td style="text-align: center;">患者查看模式</td>
                                <td>
                                	<select name="interest" id="2ji31" lay-filter="aihao">
								        <option value="1" selected="">1</option>
								        <option value="2">2</option>
								      </select>
                                </td>
                                <td>1、医生仅可查看自己的患者；2、医生可查看所有患者</td>
                              </tr>
                            </tbody>
			          </table>
			           <div class="larry-table-page clearfix" style="float: right; width: 100%; background-color:#fff;">
                 			 <a  class="layui-btn layui-btn-small" href="javascript:void(0);" onclick="baocun2()" style="float: right; margin-right: 50px; margin-top: 5px; width: 100px; height: 35px;"><i class="iconfont icon-shanchu1"></i>&nbsp;&nbsp;保存&nbsp;&nbsp;</a>
	        			 </div>
			    </div>
			     <div class="layui-tab-item layui-field-box">
			          <table class="layui-table table-hover" lay-even="" lay-skin="nob">
                           <thead>
                              <tr>
                                  <th  hidden="ture">ID</th>
                                  <th style="text-align: center;">参数名称</th>
                                  <th width="200px;">参数值</th>
                                  <th>参数说明</th>
                              </tr>
                            </thead>
                            <tbody>
                                 <tr>
                                <td hidden="ture" id="3jichu32">32</td>
                                <td style="text-align: center;">收费参数</td>
                                <td>
                                	<select name="interest" id="3ji32" lay-filter="aihao">
								        <option value="1" selected="">四舍五入</option>
								        <option value="2">直接进位到5角</option>
								        <option value="3">直接抹零到元</option>
								        <option value="4">四舍五入到元</option>
								      </select>
                                </td>
                                <td>1、四舍五入到角；2、直接进位到5角；3、直接抹零到元；4、四舍五入到元</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="3jichu33">33</td>
                                <td style="text-align: center;">隔日结账需要授权</td>
                                <td>
                                	<select name="interest" id="3ji33" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>1、是；2、否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="3jichu34">34</td>
                                <td style="text-align: center;">结账后退费需要授权码</td>
                                <td>
                                	<select name="interest" id="3ji34" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>1、是；2、否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="3jichu35">35</td>
                                <td style="text-align: center;">费用清单自动打印</td>
                                <td>
                                	<select name="interest" id="3ji35" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>收费完成时是否自动打印费用清单</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="3jichu36">36</td>
                                <td style="text-align: center;">收费即发药</td>
                                <td>
                                	<select name="interest" id="3ji36" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>1、收费即发药；2、只收费</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="3jichu37">37</td>
                                <td style="text-align: center;">退费即退药</td>
                                <td>
                                	<select name="interest" id="3ji37" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>是：退费即退药（参数“是否医生发起退药”打开后，需先到医生处申请退药）；否：只退费</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="3jichu38">38</td>
                                <td style="text-align: center;">收费清单隐藏中草药处方</td>
                                <td>
                                	<select name="interest" id="3ji38" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>1、隐藏；2、显示</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="3jichu39">39</td>
                                <td style="text-align: center;">费用清单格式</td>
                                <td>
                                	<select name="interest" id="3ji39"  lay-filter="aihao">
								        <option value="1" selected="">宽版</option>
								        <option value="2">窄版-通用</option>
								        <option value="3">12cm X 7.6cm</option>
								        <option value="4">窄版-中医专科</option>
								        <option value="5">窄版-隐藏明细</option>
								        <option value="6">医保清单</option>
								      </select>
                                </td>
                                <td>	1、宽版; 2、窄版-通用 ; 3、12cm X 7.6cm ; 4、窄版-中医专科 ; 5、窄版-隐藏明细 ; 6、医保清单</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="3jichu40">40</td>
                                <td style="text-align: center;">就诊未结束允许收费</td>
                                <td>
                                	<select name="interest" id="3ji40" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>1、是 ; 2、否 ; </td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="3jichu41">41</td>
                                <td style="text-align: center;">显示中药饮片重量</td>
                                <td>
                                	<select name="interest" id="3ji41" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>1、是 ; 2、否 ; </td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="3jichu42">42</td>
                                <td style="text-align: center;">是否按项目打折</td>
                                <td>
                                	<select name="interest" id="3ji42" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>1、是;2、否 </td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="3jichu43">43</td>
                                <td style="text-align: center;">是否允许补录收费记录</td>
                                <td>
                                	<select name="interest" id="3ji43" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>1、是;2、否 ; </td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="3jichu44">44</td>
                                <td style="text-align: center;">支付取整范围</td>
                                <td>
                                	<select name="interest" id="3ji44" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>收费时哪些支付方式可以取整</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="3jichu45">45</td>
                                <td style="text-align: center;">是否允许收费前打印费用清单</td>
                                <td>
                                	<select name="interest" id="3ji45" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>1、是,收费编辑页面可打印费用清单;2、否,收费后打印费用清单; 草药处方类型关联，取自药品分类字典</td>
                              </tr>
                              
                            </tbody>
			          </table>
			           <div class="larry-table-page clearfix" style="float: right; width: 100%; background-color:#fff;">
                 			 <a  class="layui-btn layui-btn-small" href="javascript:void(0);" onclick="baocun3()" style="float: right; margin-right: 50px; margin-top: 5px; width: 100px; height: 35px;"><i class="iconfont icon-shanchu1"></i>&nbsp;&nbsp;保存&nbsp;&nbsp;</a>
	        			 </div>
			    </div>
			    <div class="layui-tab-item layui-field-box">
			          <table class="layui-table table-hover" lay-even="" lay-skin="nob">
                           <thead>
                              <tr>
                                  <th  hidden="ture">ID</th>
                                  <th style="text-align: center;">参数名称</th>
                                  <th width="200px;">参数值</th>
                                  <th>参数说明</th>
                              </tr>
                            </thead>
                            <tbody>
                             
                              <tr>
                                <td hidden="ture" id="4jichu46">46</td>
                                <td style="text-align: center;">饮片</td>
                                <td>
                                	<select name="interest" id="4ji46" lay-filter="aihao">
								        <option value="1" selected="">中药饮片</option>
								        <option value="2">中药颗粒</option>
								      </select>
                                </td>
                                <td>草药处方类型关联，取自药品分类字典</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="4jichu47">47</td>
                                <td style="text-align: center;">颗粒</td>
                                <td>
                                	<select name="interest" id="4ji47" lay-filter="aihao">
								        <option value="1" selected="">中药饮片</option>
								        <option value="2">中药颗粒</option>
								      </select>
                                </td>
                                <td>草药处方类型关联，取自药品分类字典</td>
                              </tr>
                            </tbody>
			          </table>
			           <div class="larry-table-page clearfix" style="float: right; width: 100%; background-color:#fff;">
                 			 <a  class="layui-btn layui-btn-small" href="javascript:void(0);" onclick="baocun4()" style="float: right; margin-right: 50px; margin-top: 5px; width: 100px; height: 35px;"><i class="iconfont icon-shanchu1"></i>&nbsp;&nbsp;保存&nbsp;&nbsp;</a>
	        			 </div>
			    </div>
			    <div class="layui-tab-item layui-field-box">
			          <table class="layui-table table-hover" lay-even="" lay-skin="nob">
                           <thead>
                              <tr>
                                  <th  hidden="ture">ID</th>
                                  <th style="text-align: center;">参数名称</th>
                                  <th width="200px;">参数值</th>
                                  <th>参数说明</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                               <tr>
                                <td hidden="ture" id="5jichu48">48</td>
                                <td style="text-align: center;">收费执行顺序</td>
                                <td>
                                	<select name="interest" id="5ji48" lay-filter="aihao">
								        <option value="1" selected="">先执行后收费</option>
								        <option value="2">先收费后执行</option>
								      </select>
                                </td>
                                <td>	收费执行顺序（1.先执行后收费；2.先收费后执行）</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="5jichu49">49</td>
                                <td style="text-align: center;">业绩提成方式</td>
                                <td>
                                	<select name="interest" id="5ji49" lay-filter="aihao">
								        <option value="1" selected="">按项目提成</option>
								        <option value="2">按理疗人员提成</option>
								      </select>
                                </td>
                                <td>业绩提成方式（1.按项目提成；2.按理疗人员提成）</td>
                              </tr>
                              </tr>
                            </tbody>
			          </table>
			           <div class="larry-table-page clearfix" style="float: right; width: 100%; background-color:#fff;">
		                  <a  class="layui-btn layui-btn-small" href="javascript:void(0);" onclick="baocun5()" style="float: right; margin-right: 50px; margin-top: 5px; width: 100px; height: 35px;"><i class="iconfont icon-shanchu1"></i>&nbsp;&nbsp;保存&nbsp;&nbsp;</a>
			        	 </div>
			    </div>
			    <div class="layui-tab-item layui-field-box">
			          <table class="layui-table table-hover" lay-even="" lay-skin="nob">
                           <thead>
                              <tr>
                                  <th  hidden="ture">ID</th>
                                  <th style="text-align: center;">参数名称</th>
                                  <th width="200px;">参数值</th>
                                  <th>参数说明</th>
                              </tr>
                            </thead>
                            <tbody>
                             <tr>
                                <td hidden="ture" id="6jichu50">50</td>
                                <td style="text-align: center;">门诊护士是否可以查询未收费患者</td>
                                <td>
                                	<select name="interest" id="6ji50" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>1、是；2、否</td>
                              </tr>
                            </tbody>
			          </table>
			           <div class="larry-table-page clearfix" style="float: right; width: 100%; background-color:#fff;">
		                  <a  class="layui-btn layui-btn-small" href="javascript:void(0);" onclick="baocun6()" style="float: right; margin-right: 50px; margin-top: 5px; width: 100px; height: 35px;"><i class="iconfont icon-shanchu1"></i>&nbsp;&nbsp;保存&nbsp;&nbsp;</a>
			        	 </div>
			    </div>
			   <div class="layui-tab-item layui-field-box">
			   		<div style="margin-left: 10px; margin-bottom: 5px; border-left: 3px solid #999;"><p>&nbsp;&nbsp;班次设置</p></div>
			          <table class="layui-table table-hover" lay-even="" lay-skin="nob">
                           <thead>
                              <tr>
                                  <th>序号</th>
                                  <th style="text-align: center;">班次名称</th>
                                  <th width="200px;">起始时间</th>
                                  <th width="100px;"></th>
                                  <th width="200px;">结束时间</th>
                                  <th width=""></th>
                              </tr>
                            </thead>
                            <tbody>
                            <c:forEach items="${banList}" var="item">
                             <tr>
                                <td>${item.banciid}</td>
                                <td style="text-align: center;">${item.banciname}</td>
                                <td>
                                	<select name="interest" id="kaishi${item.banciid}" lay-filter="aihao">
                                		<c:forEach items="${AllList}" var="list">
                                		<c:if test="${item.banciid==1}">
                                			<c:if test="${list.shijianduanid<=21}">
								        		<option value="${list.shijianduanid}">${list.sjdtime}</option>
								      		</c:if>
							      		</c:if>
							      		<c:if test="${item.banciid==2}">
                                			<c:if test="${list.shijianduanid>=21}">
								        		<option value="${list.shijianduanid}">${list.sjdtime}</option>
								      		</c:if>
							      		</c:if>
								      	</c:forEach>
								      </select>
                                </td>
                                  <td width="100px;"></td>
                                <td>
                                	<select name="interest" id="jishu${item.banciid}" lay-filter="aihao">
                                		<c:forEach items="${AllList}" var="list">
                                		<c:if test="${item.banciid==1}">
                                			<c:if test="${list.shijianduanid<=21}">
								        		<option value="${list.shijianduanid}">${list.sjdtime}</option>
								      		</c:if>
							      		</c:if>
							      		<c:if test="${item.banciid==2}">
                                			<c:if test="${list.shijianduanid>=21}">
								        		<option value="${list.shijianduanid}">${list.sjdtime}</option>
								      		</c:if>
							      		</c:if>
								      	</c:forEach>
								      </select>
                                </td>
                                 <td width="100px;"></td>
                              </tr>
                              </c:forEach>
                            </tbody>
			          </table>
			          <div style="margin-left: 10px; margin-bottom: 5px; margin-top:50px; border-left: 3px solid #999;"><p>&nbsp;&nbsp;参数设置</p></div>
			           <table class="layui-table table-hover" lay-even="" lay-skin="nob">
                           <thead>
                              <tr>
                                  <th>编号</th>
                                  <th style="text-align: center;">参数名称</th>
                                  <th width="200px;">参数值</th>
                                  <th>参数说明</th>
                              </tr>
                            </thead>
                            <tbody>
                             <tr>
                                <td id="7jichu50">2002</td>
                                <td style="text-align: center;">单位时段限号数</td>
                                <td>
                                	<select name="interest" id="zhi2002" lay-filter="aihao">
								        <option value="1" selected="">1</option>
								        <option value="2">2</option>
								        <option value="3">3</option>
								        <option value="4">4</option>
								        <option value="5">5</option>
								        <option value="6">6</option>
								        <option value="7">7</option>
								        <option value="8">8</option>
								        <option value="9">9</option>
								        <option value="10">10</option>
								      </select>
                                </td>
                                <td>医生/科室每个单位时段的号源数量（1-10）</td>
                              </tr>
                              <tr>
                                <td id="7jichu51">2003</td>
                                <td style="text-align: center;">排班展示模式</td>
                                <td>
                                	<select name="interest" id="zhi2003" lay-filter="aihao">
								        <option value="1" selected="">1小时</option>
								        <option value="2">半小时</option>
								        <option value="3">15分钟</option>
								        <option value="4">5分钟</option>
								      </select>
                                </td>
                                <td>小时/半小时/15分钟/5分钟</td>
                              </tr>
                              <tr>
                                <td id="7jichu52">2004</td>
                                <td style="text-align: center;">排班展示模式</td>
                                <td>
                                	<select name="interest" id="zhi2004" lay-filter="aihao">
								        <option value="1" selected="">医生</option>
								        <option value="2">科室</option>
								      </select>
                                </td>
                                <td>按医生排班/按科室排班</td>
                              </tr>
                              <tr>
                                <td id="7jichu53">2007</td>
                                <td style="text-align: center;">预约确认模式</td>
                                <td>
                                	<select name="interest" id="zhi2007" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>只针对普通预约，是否自动确认预约</td>
                              </tr>
                              <tr>
                                <td id="7jichu54">2008</td>
                                <td style="text-align: center;">SCRM平台支持预约付费</td>
                                <td>
                                	<select name="interest" id="zhi2008" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>是:需要预约支付;否:不需要预约支付</td>
                              </tr>
                              <tr>
                                <td id="7jichu55">2009</td>
                                <td style="text-align: center;">普通预约是否发送短信提醒患者</td>
                                <td>
                                	<select name="interest" id="zhi2009" lay-filter="aihao">
								        <option value="1" selected="">是</option>
								        <option value="2">否</option>
								      </select>
                                </td>
                                <td>1.是;2.否</td>
                              </tr>
                              <tr>
                                <td id="7jichu56">2010</td>
                                <td style="text-align: center;">预约方式</td>
                                <td>
                                	<select name="interest" id="zhi2010" lay-filter="aihao">
								        <option value="1" selected="">一般模式</option>
								        <option value="2">医师预约模式</option>
								      </select>
                                </td>
                                <td>1.一般模式（日/周视图）;2.医师预约模式</td>
                              </tr>
                            </tbody>
			          </table>
			           <div class="larry-table-page clearfix" style="float: right; width: 100%; background-color:#fff;">
		                  <a  class="layui-btn layui-btn-small" href="javascript:void(0);" onclick="baocun7()" style="float: right; margin-right: 50px; margin-top: 5px; width: 100px; height: 35px;"><i class="iconfont icon-shanchu1"></i>&nbsp;&nbsp;保存&nbsp;&nbsp;</a>
			        	 </div>
			    </div>
		    </div>
		</div>
	</div>
</section>
</form>
<script type="text/javascript" src="../js/jquery-3.2.1.js"></script>
<script type="text/javascript" src="../layui/layui.js"></script>
<script type="text/javascript" src="../news/newsAdd.js"></script>
<%-- <c:forEach items="${getAll}" var="item">
    <tr>
      <td  hidden="ture">${item.jchcid}</td>
      <td style="text-align: center;">${item.jchcname}</td>
      <td>${item.canshuzhi}</td>
      <td>${item.canshushuoming}</td>
    </tr>
</c:forEach> --%>
<script>
$(function(){
	<c:forEach items="${getAll}" var="item">
	var id="${item.fuid}"+"ji"+"${item.jchcid}";
	var zhi='${item.canshuzhi}';
	document.getElementById(id).value=zhi;
	</c:forEach>	
	<c:forEach items="${SelectAll}" var="item">
		var id="zhi"+"${item.yygzid}";
		var zhi='${item.canshuzhi}';
		document.getElementById(id).value=zhi;
	</c:forEach>
	
	<c:forEach items="${listAll}" var="item1">
		var id="kaishi"+"${item1.banciid}";
		var id1="jishu"+"${item1.banciid}";
		var kaishi='${item1.kssjduan}';
		var jieshu='${item1.jssjduan}';
		document.getElementById(id).value=kaishi;
		document.getElementById(id1).value=jieshu;
	</c:forEach>
});



</script>

<script type="text/javascript">
	layui.use(['jquery','layer','element','laypage'],function(){
          
    });
</script>
<script type="text/javascript">
function baocun1(){
	var zhi=[];
	var zhi1=[];
	zhi=$('select[id*="1ji"]');
	var id=[];
	var id1=[];
	id=$('td[id*="1jichu"]');
	for (var i = 0; i < zhi.length; i++) {
		zhi1.push(zhi[i].value);
	}
	for (var i = 0; i < id.length; i++) {
		id1.push(id[i].innerHTML );
	}
	 $.ajax({
			type: 'POST',
			url: 'UpdataJichu.html',
			dataType: 'json',
			traditional: true,//传数组
			data: {zhi:zhi1,id:id1},
			success: function(data){
					layer.msg('保存成功！',{icon: 1,time:2000});
			},
			error:function(data) {
				console.log(data.msg);
				changeImg();
			},
		});
}
function baocun2(){
	var zhi=[];
	var zhi1=[];
	zhi=$('select[id*="ji2"]');
	var id=[];
	var id1=[];
	id=$('td[id*="jichu2"]');
	for (var i = 0; i < zhi.length; i++) {
		zhi1.push(zhi[i].value);
	}
	for (var i = 0; i < id.length; i++) {
		id1.push(id[i].innerHTML );
	}
	 $.ajax({
			type: 'POST',
			url: 'UpdataJichu.html',
			dataType: 'json',
			traditional: true,//传数组
			data: {zhi:zhi1,id:id1},
			success: function(data){
					layer.msg('保存成功！',{icon: 1,time:2000});
			},
			error:function(data) {
				console.log(data.msg);
				changeImg();
			},
		});
}
function baocun3(){
	var zhi=[];
	var zhi1=[];
	zhi=$('select[id*="3ji"]');
	var id=[];
	var id1=[];
	id=$('td[id*="3jichu"]');
	for (var i = 0; i < zhi.length; i++) {
		zhi1.push(zhi[i].value);
	}
	for (var i = 0; i < id.length; i++) {
		id1.push(id[i].innerHTML );
	}
	 $.ajax({
			type: 'POST',
			url: 'UpdataJichu.html',
			dataType: 'json',
			traditional: true,//传数组
			data: {zhi:zhi1,id:id1},
			success: function(data){
					layer.msg('保存成功！',{icon: 1,time:2000});
			},
			error:function(data) {
				console.log(data.msg);
				changeImg();
			},
		});
}
function baocun4(){
	var zhi=[];
	var zhi1=[];
	zhi=$('select[id*="4ji"]');
	var id=[];
	var id1=[];
	id=$('td[id*="4jichu"]');
	for (var i = 0; i < zhi.length; i++) {
		zhi1.push(zhi[i].value);
	}
	for (var i = 0; i < id.length; i++) {
		id1.push(id[i].innerHTML );
	}
	 $.ajax({
			type: 'POST',
			url: 'UpdataJichu.html',
			dataType: 'json',
			traditional: true,//传数组
			data: {zhi:zhi1,id:id1},
			success: function(data){
					layer.msg('保存成功！',{icon: 1,time:2000});
			},
			error:function(data) {
				console.log(data.msg);
				changeImg();
			},
		});
}
function baocun5(){
	var zhi=[];
	var zhi1=[];
	zhi=$('select[id*="5ji"]');
	var id=[];
	var id1=[];
	id=$('td[id*="5jichu"]');
	for (var i = 0; i < zhi.length; i++) {
		zhi1.push(zhi[i].value);
	}
	for (var i = 0; i < id.length; i++) {
		id1.push(id[i].innerHTML );
	}
	 $.ajax({
			type: 'POST',
			url: 'UpdataJichu.html',
			dataType: 'json',
			traditional: true,//传数组
			data: {zhi:zhi1,id:id1},
			success: function(data){
					layer.msg('保存成功！',{icon: 1,time:2000});
			},
			error:function(data) {
				console.log(data.msg);
				changeImg();
			},
		});
}
function baocun6(){
	var zhi=[];
	var zhi1=[];
	zhi=$('select[id*="6ji"]');
	var id=[];
	var id1=[];
	id=$('td[id*="6jichu"]');
	for (var i = 0; i < zhi.length; i++) {
		zhi1.push(zhi[i].value);
	}
	for (var i = 0; i < id.length; i++) {
		id1.push(id[i].innerHTML );
	}
	 $.ajax({
			type: 'POST',
			url: 'UpdataJichu.html',
			dataType: 'json',
			traditional: true,//传数组
			data: {zhi:zhi1,id:id1},
			success: function(data){
					layer.msg('保存成功！',{icon: 1,time:2000});
			},
			error:function(data) {
				console.log(data.msg);
				changeImg();
			},
		});
}
function baocun7(){
	var zhi=[];
	var zhi1=[];
	var id=[];
	var id1=[];
	id=$('td[id*="7jichu"]');
	zhi=$('select[id*="zhi"]');
	for (var i = 0; i < id.length; i++) {
		id1.push(id[i].innerHTML );
	}
	for (var i = 0; i < zhi.length; i++) {
		zhi1.push(zhi[i].value);
	}
	var kaishi1=$('#kaishi1').val();
	var kaishi2=$('#kaishi2').val();
	var jieshu1=$('#jishu1').val();
	var jieshu2=$('#jishu2').val();
	if(kaishi1<=jieshu1){
		if(kaishi2<=jieshu2){
			 $.ajax({
					type: 'POST',
					url: 'updatayuyue.html',
					dataType: 'json',
					traditional: true,//传数组
					data: {zhi:zhi1,id:id1,kaishi1:kaishi1,kaishi2:kaishi2,jieshu1:jieshu1,jieshu2:jieshu2},
					success: function(data){
							layer.msg('保存成功！',{icon: 1,time:2000});
					},
					error:function(data) {
						console.log(data.msg);
						changeImg();
					},
				});
		}else{
			layer.msg('下午结束时间不能小于开始时间！',{icon: 5,time:3000});
		}
	}else{
		layer.msg('上午结束时间不能小于开始时间！',{icon: 5,time:3000});
	}
}
</script>
</body>
</html>