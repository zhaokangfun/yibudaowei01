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
  <title></title>
  </head>
<body style="background-color:white;">
	             
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
  <legend>分配医生</legend>
</fieldset>
<form class="layui-form" action="">
	<!-- 病例 -->
  <div class="layui-form-item">
	    <label class="layui-form-label"><i style="color: red;">  *   </i>病例号</label>
	    <div class="layui-input-block">
	       <input name="blnumber" lay-verify="required" value="${hzxxb.blnumber}"  style="border: 0px;" disabled="disabled" autocomplete="off" class="layui-input" type="text">
	    </div>
   </div
 	<!-- 姓名 -->
  <div class="layui-form-item">
	    <label class="layui-form-label"><i style="color: red;">  *   </i>患者姓名</label>
	    <div class="layui-input-block">
	       <input name="hzname" lay-verify="required" value="${hzxxb.hzname}"  style="border: 0px;" disabled="disabled" autocomplete="off" class="layui-input" type="text">
	    </div>
   </div>
    <!-- 性别 -->
    <div class="layui-form-item">
	    <label class="layui-form-label"><i style="color: red;">  *   </i>患者性别</label>
	    <div class="layui-input-block">
	  	 <input name="sex" lay-verify="required" value="${hzxxb.sex}" style="border: 0px;" disabled="disabled" autocomplete="off" class="layui-input" type="text">
    </div>
    </div>
    
      <!-- 年龄 -->
    <div class="layui-form-item">
	    <label class="layui-form-label"><i style="color: red;">  *   </i>患者年龄</label>
	    <div class="layui-input-block">
	       <input name="age" lay-verify="required" value="${hzxxb.age}" style="border: 0px;" disabled="disabled" autocomplete="off" class="layui-input" type="text">
	    </div>
  </div>
  
     <!-- 手机 -->
    <div class="layui-form-item">
	    <label class="layui-form-label">患者手机</label>
	    <div class="layui-input-block">
	       <input name="phone" lay-verify="required" value="${hzxxb.phone}" style="border: 0px;" disabled="disabled" autocomplete="off" class="layui-input" type="text">
	    </div>
  </div>
  
    <!-- 来源 -->
    <div class="layui-form-item">
	    <label class="layui-form-label">患者来源</label>
	    <div class="layui-input-block">
	       <input name="laiyuan" lay-verify="required" value="${hzxxb.laiyuan}" style="border: 0px;" disabled="disabled" autocomplete="off" class="layui-input" type="text">
	    </div>
  </div>
   <!-- 接诊 -->
    <div class="layui-form-item">
	    <label class="layui-form-label">接诊时间</label>
	    <div class="layui-input-block">
	       <input name="jztime" lay-verify="required" value="${hzxxb.jztime}" style="border: 0px;" disabled="disabled" autocomplete="off" class="layui-input" type="text">
	    </div>
  </div>
  <div class="layui-form-item">
    <label class="layui-form-label">选择医生</label>
    <div class="layui-input-block">
      <select name="interest" lay-filter="aihao">
      	<c:forEach items="${yslist}" var="ys">
        <option value="${ys.adminid}">${ys.adminname}</option>
      </c:forEach>
      </select>
    </div>
  </div>
  
  
  <div class="layui-form-item">
    <div class="layui-input-block">
      <button class="layui-btn" lay-submit="" lay-filter="demo1">立即提交</button>
      <button type="reset" class="layui-btn layui-btn-primary">重置</button>
    </div>
  </div>
</form>


<script>
layui.use(['form', 'layedit', 'laydate'], function(){
  var form = layui.form
  ,layer = layui.layer
  ,layedit = layui.layedit
  ,laydate = layui.laydate;
});
</script>

</body>
</html>