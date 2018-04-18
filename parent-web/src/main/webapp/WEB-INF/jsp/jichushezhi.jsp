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
</head>
<body>
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
                                <td hidden="ture" id="jichu1">1</td>
                                <td style="text-align: center;">药品批次</td>
                                <td>1</td>
                                <td>1.先进先出；2.按有效期</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu2">2</td>
                                <td style="text-align: center;">效期自动提醒</td>
                                <td>1</td>
                                <td>1.30天内提醒；2.60天内提醒；3.3个月内提醒</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu3">3</td>
                                <td style="text-align: center;">有效期必填</td>
                                <td>1</td>
                                <td>1.是；2.否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu4">4</td>
                                <td style="text-align: center;">是否自动全盘点</td>
                                <td>1</td>
                                <td>1.是；2.否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu5">5</td>
                                <td style="text-align: center;">发药审核</td>
                                <td>1</td>
                                <td>1.是；2.否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu6">6</td>
                                <td style="text-align: center;">启用库存效验</td>
                                <td>2</td>
                                <td>开药品时，是否效验药品库存</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu7">7</td>
                                <td style="text-align: center;">就诊未结束不显示药品信息</td>
                                <td>2</td>
                                <td>1.是；2.否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu8">8</td>
                                <td style="text-align: center;">效验材料库存</td>
                                <td>2</td>
                                <td>1.效验；2.不效验</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu9">9</td>
                                <td style="text-align: center;">允许修改进货价</td>
                                <td>2</td>
                                <td>在入库单保存/确认后是否可修改进货价</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu10">10</td>
                                <td style="text-align: center;">进销存统计</td>
                                <td>2</td>
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
                                <td hidden="ture" id="jichu11">11</td>
                                <td style="text-align: center;">是否做传染病上报检测</td>
                                <td>1</td>
                                <td>1、是；2、否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu12">12</td>
                                <td style="text-align: center;">是否仅医生可接诊</td>
                                <td>2</td>
                                <td>	1、是；2、否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu13"> 13</td>
                                <td style="text-align: center;">是否需要分诊</td>
                                <td>2</td>
                                <td>是：显示分诊台；否：隐藏分诊台</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu14">14</td>
                                <td style="text-align: center;">分诊模式</td>
                                <td>1</td>
                                <td>自动：登记完成后分诊状态为已分诊；手动：手动分诊</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu15">15</td>
                                <td style="text-align: center;">登记模式</td>
                                <td>2</td>
                                <td>登记模式切换</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu16">16</td>
                                <td style="text-align: center;">语音输入是否开启</td>
                                <td>2</td>
                                <td>是：开启语音输入；否：关闭语音输入</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu17">17</td>
                                <td style="text-align: center;">是否医生发起退药</td>
                                <td>2</td>
                                <td>	1、是；2、否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu18">18</td>
                                <td style="text-align: center;">患者重复登记限制</td>
                                <td>2</td>
                                <td>1、同一科室不可重复登记;2、同一医生不可重复登记 </td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu19">19</td>
                                <td style="text-align: center;">草药处方是否显示单位为g药品总重量</td>
                                <td>2</td>
                                <td>是、显示；否、不显示</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu20">20</td>
                                <td style="text-align: center;">治疗/处置/处方等页面是否隐藏项目单价与总价</td>
                                <td>2</td>
                                <td>是：隐藏；否：不隐藏</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu21">21</td>
                                <td style="text-align: center;">是否允许补录登记记录</td>
                                <td>2</td>
                                <td>1、是;2、否 ; </td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu22">22</td>
                                <td style="text-align: center;">患者登记是否需要医生排班</td>
                                <td>2</td>
                                <td>是：患者登记前必须先进行医生排班；否：无需医生排班也可进行患者登记</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu23">23</td>
                                <td style="text-align: center;">草药处方打印格式选择</td>
                                <td>0</td>
                                <td>0、通用格式；1、定制格式；2、定制格式2；3、大通中医定制；</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu24">24</td>
                                <td style="text-align: center;">是否启用合理用药</td>
                                <td>2</td>
                                <td>1、是;2、否 ; </td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu25">25</td>
                                <td style="text-align: center;">是否启用二级科室作为诊室</td>
                                <td>2</td>
                                <td>1、是；2、否； </td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu26">26</td>
                                <td style="text-align: center;">草药处方（颗粒）打印是否显示规格</td>
                                <td>2</td>
                                <td>仅对草药处方的定制格式2有效</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu27">27</td>
                                <td style="text-align: center;">是否允许医生接诊时直接更改收费项目价格</td>
                                <td>1</td>
                                <td>1、是; 2、否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu28">28</td>
                                <td style="text-align: center;">西药处方是否限制5种药品</td>
                                <td>1</td>
                                <td>	1、是；2、否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu29">29</td>
                                <td style="text-align: center;">是否医生仅能查看接诊过的患者健康档案</td>
                                <td>2</td>
                                <td>1、是；2、否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu30">30</td>
                                <td style="text-align: center;">西药处方打印格式选择</td>
                                <td>2</td>
                                <td>1:通用格式；2:通用格式2</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu31">31</td>
                                <td style="text-align: center;">患者查看模式</td>
                                <td>1</td>
                                <td>1、医生仅可查看自己的患者；2、医生可查看所有患者</td>
                              </tr>
                            </tbody>
			          </table>
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
                                <td hidden="ture" id="jichu32">32</td>
                                <td style="text-align: center;">收费参数</td>
                                <td>1</td>
                                <td>1、四舍五入到角；2、直接进位到5角；3、直接抹零到元；4、四舍五入到元</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu33">33</td>
                                <td style="text-align: center;">隔日结账需要授权</td>
                                <td>2</td>
                                <td>1、是；2、否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu34">34</td>
                                <td style="text-align: center;">结账后退费需要授权码</td>
                                <td>2</td>
                                <td>1、是；2、否</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu35">35</td>
                                <td style="text-align: center;">费用清单自动打印</td>
                                <td>2</td>
                                <td>收费完成时是否自动打印费用清单</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu36">36</td>
                                <td style="text-align: center;">收费即发药</td>
                                <td>2</td>
                                <td>1、收费即发药；2、只收费</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu37">37</td>
                                <td style="text-align: center;">退费即退药</td>
                                <td>2</td>
                                <td>是：退费即退药（参数“是否医生发起退药”打开后，需先到医生处申请退药）；否：只退费</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu38">38</td>
                                <td style="text-align: center;">收费清单隐藏中草药处方</td>
                                <td>2</td>
                                <td>1、隐藏；2、显示</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu39">39</td>
                                <td style="text-align: center;">费用清单格式</td>
                                <td>2</td>
                                <td>	1、宽版; 2、窄版-通用 ; 3、12cm X 7.6cm ; 4、窄版-中医专科 ; 5、窄版-隐藏明细 ; 6、医保清单</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu40">40</td>
                                <td style="text-align: center;">就诊未结束允许收费</td>
                                <td>1</td>
                                <td>1、是 ; 2、否 ; </td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu41">41</td>
                                <td style="text-align: center;">显示中药饮片重量</td>
                                <td>2</td>
                                <td>1、是 ; 2、否 ; </td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu42">42</td>
                                <td style="text-align: center;">是否按项目打折</td>
                                <td>2</td>
                                <td>1、是;2、否 </td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu43">43</td>
                                <td style="text-align: center;">是否允许补录收费记录</td>
                                <td>2</td>
                                <td>1、是;2、否 ; </td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu44">44</td>
                                <td style="text-align: center;">支付取整范围</td>
                                <td>2</td>
                                <td>收费时哪些支付方式可以取整</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu45">45</td>
                                <td style="text-align: center;">是否允许收费前打印费用清单</td>
                                <td>2</td>
                                <td>1、是,收费编辑页面可打印费用清单;2、否,收费后打印费用清单; 草药处方类型关联，取自药品分类字典</td>
                              </tr>
                              
                            </tbody>
			          </table>
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
                                <td hidden="ture" id="jichu46">46</td>
                                <td style="text-align: center;">饮片</td>
                                <td>1</td>
                                <td>草药处方类型关联，取自药品分类字典</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu47">47</td>
                                <td style="text-align: center;">颗粒</td>
                                <td>2</td>
                                <td>草药处方类型关联，取自药品分类字典</td>
                              </tr>
                            </tbody>
			          </table>
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
                                <td hidden="ture" id="jichu48">48</td>
                                <td style="text-align: center;">收费执行顺序</td>
                                <td>1</td>
                                <td>	收费执行顺序（1.先执行后收费；2.先收费后执行）</td>
                              </tr>
                              
                              <tr>
                                <td hidden="ture" id="jichu49">49</td>
                                <td style="text-align: center;">业绩提成方式</td>
                                <td>1</td>
                                <td>业绩提成方式（1.按项目提成；2.按理疗人员提成）</td>
                              </tr>
                              </tr>
                            </tbody>
			          </table>
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
                                <td hidden="ture" id="jichu50">50</td>
                                <td style="text-align: center;">门诊护士是否可以查询未收费患者</td>
                                <td>1</td>
                                <td>1、是；2、否</td>
                              </tr>
                            </tbody>
			          </table>
			    </div>
			    <div class="larry-table-page clearfix" style="float: right; width: 100%; background-color:#fff;">
                  <a href="javascript:;" class="layui-btn layui-btn-small" style="float: right; margin-right: 50px; margin-top: 5px; width: 100px; height: 35px;"><i class="iconfont icon-shanchu1"></i>&nbsp;&nbsp;保存&nbsp;&nbsp;</a>
	        	 </div>
		    </div>
		    
	          
		</div>
	</div>
</section>
<script type="text/javascript" src="../layui/layui.js"></script>
<script type="text/javascript">
	layui.use(['jquery','layer','element','laypage'],function(){
          
    });
</script>
</body>
</html>