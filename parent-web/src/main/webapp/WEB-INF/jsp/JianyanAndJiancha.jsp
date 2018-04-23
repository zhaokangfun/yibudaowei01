<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    <% String path=request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<%@ taglib uri="http://www.springframework.org/tags/form" prefix="fm" %>
<html>
<head>
<base href="<%=basePath %>">
<link rel="stylesheet" href="layui/css/layui.css" media="all" />
    <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
    	<script type="text/javascript" src="layui/layui.js"></script>
  <title>检查and检验</title>
</head>
<body>

<fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
  <legend>检验与检查${hzid}</legend>
</fieldset>

	<div class="layui-tab">
  <ul class="layui-tab-title">
    <li class="layui-this">检验</li>
    <li>检查</li>
    <li>治疗项目</li>
    <li>西药处方</li>
    <li>中草药方</li>
    <li>中成药方</li>
    <li>理疗单</li>
    <li>疗程单</li>
    <li>帖服方</li>
    <li>随访</li>
  </ul>
  <div class="layui-tab-content">
  
  	<!-- 检验 -->
    <div class="layui-tab-item layui-show">
    	<table>
    		<tr>
    		<td style="width:10%;">名称</td>
    		<td style="width:30%;">标本</td>
    		<td style="width:10%;">单价</td>
    		<td style="width:10%;">操作</td>
    		</tr>
    		<div id="jiancha">
			<tr>
    		<td ><input name="blnumber" placeholder="检验名称" autocomplete="off" class="layui-input" type="text"></td>
    		<td ><input name="blnumber" placeholder="标本名称" disabled="disabled" autocomplete="off" class="layui-input" type="text"></td>
    		<td ><a>0.0</a></td>
    		<td><a>删除</a></td>
    		</tr>
    		</div>
    		
    		<tr>
    		<td></td>
    		<td></td>
    		<td></td>
    			<td colspan="3" style="float: right;">总价格(<a style="color: red;">0.0</a>)<br/>
    				<input type="submit" value="保存" class="layui-btn">
    			</td>
    		</tr>
    		
    	</table>      
    </div>
    <!-- 检查 -->
    <div class="layui-tab-item ">
    	<table>
    		<tr>
    		<td style="width:10%;">名称</td>
    		<td style="width:30%;">标本</td>
    		<td style="width:10%;">单价</td>
    		<td style="width:10%;">操作</td>
    		</tr>
    		<div id="jiancha">
			<tr>
    		<td ><input name="blnumber" placeholder="检查名称" autocomplete="off" class="layui-input" type="text"></td>
    		<td ><input name="blnumber" placeholder="标本名称" disabled="disabled" autocomplete="off" class="layui-input" type="text"></td>
    		<td ><a>0.0</a></td>
    		<td><a>删除</a></td>
    		</tr>
    		</div>
    		
    		<tr>
    		<td></td>
    		<td></td>
    		<td></td>
    			<td colspan="3" style="float: right;">总价格(<a style="color: red;">0.0</a>)<br/>
    				<input type="submit" value="保存" class="layui-btn">
    			</td>
    		</tr>
    		
    	</table>      
    </div>
    <!--项目 -->
    <div class="layui-tab-item">
    	<table>
    		<tr>
    		<td style="width:10%;">类型</td>
    		<td style="width:20%;">名称</td>
    		<td style="width:10%;">数量</td>
    		<td style="width:10%;">备注</td>
    		<td style="width:10%;">单价</td>
    		<td style="width:10%;">操作</td>
    		</tr>
    		<div id="jiancha">
			<tr>
			<td>
			    <div class="layui-form">
      <select name="city" lay-verify="required">
        <option value=""></option>
        <option value="0">诊疗</option>
        <option value="1">器械</option>
      </select>
    </div>
			</td>
			<td><input name="blnumber" placeholder="项目名称" autocomplete="off" class="layui-input" type="text"></td>
    		<td><input name="blnumber" placeholder="数量" autocomplete="off" class="layui-input" type="text"></td>
    		<td><input name="blnumber" placeholder="备注" autocomplete="off" class="layui-input" type="text"></td>
    		<td><a>0.0</a></td>
    		<td><a>删除</a></td>
    		</tr>
    		<tr>
    		<td></td>
    		<td></td>
    		<td></td>
    		<td></td>
    		<td></td>
    			<td style="float: right;">总价格(<a style="color: red;">0.0</a>)<br/>
    				<input type="submit" value="保存" class="layui-btn">
    			</td>
    		</tr>
    		</div>
    	</table>
    </div>
    
    <!-- 西药处方 -->
     
    <div class="layui-tab-item">
    	<table>
    		<tr>
    		<td style="width:10%;">药品名称</td>
    		<td style="width:5%;">规格</td>
    		<td style="width:5%;">用法</td>
    		<td style="width:5%;">滴/分</td>
    		<td style="width:5%;">剂量</td>
    		<td style="width:5%;">频率</td>
    		<td style="width:5%;">天</td>
    		<td style="width:5%;">总量</td>
    		<td style="width:5%;">单价</td>
    		<td style="width:10%;">来源</td>
    		<td style="width:20%;">备注</td>
    		<td style="width:5%;">皮试</td>
    		<td style="width:5%;">编辑</td>
    		</tr>
    		<div id="jiancha">
			<tr>
			<td><input name="blnumber" placeholder="药品名称" autocomplete="off" class="layui-input" type="text"></td>
			<td><input name="blnumber" placeholder="规格" autocomplete="off" class="layui-input" type="text"></td>
			<td>
			    <div class="layui-form">
      <select name="city" lay-verify="required">
        <option value=""></option>
        <option value="0">诊疗</option>
        <option value="1">器械</option>
      </select>
    </div>
			</td>
			<td><input name="blnumber" placeholder="~" autocomplete="off" class="layui-input" type="text"></td>
			<td><input name="blnumber" placeholder="计量" autocomplete="off" class="layui-input" type="text"></td>
    		<td><input name="blnumber" placeholder="频率" autocomplete="off" class="layui-input" type="text"></td>
    		<td><input name="blnumber" placeholder="天" autocomplete="off" class="layui-input" type="text"></td>
    		<td><input name="blnumber" placeholder="总量" autocomplete="off" class="layui-input" type="text"></td>
    		<td><input name="blnumber" placeholder="单价/元" autocomplete="off" class="layui-input" type="text"></td>
    		<td><input name="blnumber" placeholder="来源" autocomplete="off" class="layui-input" type="text"></td>
    		<td><input name="blnumber" placeholder="备注" autocomplete="off" class="layui-input" type="text"></td>
    		<td><div class="layui-form"><input type="checkbox" name="" title="皮试"> </div></td>
    		<td><a>编辑</a></td>
    		</tr>
    		<tr>
    		<td></td>
    		<td></td>
    		<td></td>
    		<td></td>
    		<td></td>
    		<td></td>
    		<td></td>
    		<td></td>
    		<td></td>
    		<td></td>
    		<td></td>
    		<td></td>
    			<td style="float: right;">总价格(<a style="color: red;">0.0</a>)<br/>
    				<input type="submit" value="保存" class="layui-btn">
    			</td>
    		</tr>
    		</div>
    	</table>
    </div>
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
  </div>
</div>
	
	
	 
<script>
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