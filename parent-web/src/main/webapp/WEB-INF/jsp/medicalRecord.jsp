<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<% String path=request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<%@ taglib uri="http://www.springframework.org/tags/form" prefix="fm" %>
<html>
<head>
<base href="<%=basePath %>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<script type="text/javascript" src="medicalRecord_files/switch.js"></script>
		<link rel="stylesheet" href="medicalRecord_files/base.css">
		<link rel="stylesheet" href="medicalRecord_files/base_002.css">
		<link rel="stylesheet" href="medicalRecord_files/base_004.css">
		<link href="medicalRecord_files/style.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" type="text/css" href="medicalRecord_files/pawj.css">
		<link rel="stylesheet" type="text/css" href="medicalRecord_files/doctorWorkstation.css">
		<link rel="stylesheet" type="text/css" href="medicalRecord_files/slider.css">
		<link rel="stylesheet" type="text/css" href="medicalRecord_files/base_003.css">


<link rel="stylesheet" href="layui/css/layui.css" media="all" />

    <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
    	<script type="text/javascript" src="layui/layui.js"></script>
  <title></title>
  </head>
<body style="background-color:white;">
	     <c:if test="${chuzhen.hzid==null}">   
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
  <legend>初诊</legend>
</fieldset>
</c:if>
  <c:if test="${chuzhen.hzid!=null}">   
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
  <legend>复诊</legend>
</fieldset>
</c:if>

	<fm:form  method="post" modelAttribute="chuzhenb,tigecheckb" action="banci/TianJiachuzhen" >
 	<input type="text" value="${id}" name="hzid">
  <div class="layui-form-item">
	    <label class="layui-form-label"><i style="color: red;">  *   </i>主诉</label>
	    <div class="layui-input-block">
	       <input name="zhusu" lay-verify="required" placeholder="主诉"    autocomplete="off" class="layui-input" type="text">
	    </div>
   </div>
   
    <div class="layui-form-item">
	    <label class="layui-form-label"><i style="color: red;">  *   </i>现病史</label>
	    <div class="layui-input-block">
	       <input name="xianbingshi" lay-verify="required" placeholder="现病"   autocomplete="off" class="layui-input" type="text">
	    </div>
   </div>
   
      <div class="layui-form">
    <label class="layui-form-label">既往史</label>
    <div class="layui-input-block">
      <select name="xianbingshi" lay-filter="xianbingshi">
      	<c:forEach items="${jiwangshilistAll}" var="jws">
        <option value="${jws.jwsid}">${jws.jwsms}</option>
      </c:forEach>
      </select>
    </div>
  </div> 
   
   <div class="layui-form">
    <label class="layui-form-label">过敏史</label>
    <div class="layui-input-block">
      <select name="guominmiaoshu" lay-filter="xianbingshi">
      	<c:forEach items="${guominshilistAll}" var="gms">
        <option value="${gms.gmsid}">${gms.gmsname}</option>
      </c:forEach>
      </select>
    </div>
  </div> 
  
    <div class="layui-form-item">
    <label class="layui-form-label">体格检查</label>
    <div class="layui-input-block">
    		<table style="width: 80%;">
    			<tr style="padding-top: 5%;">
    			<td style="width: 20%;">
  				<span style="margin-left: 5%;">
  				体温：<input name="tiwen" style="border: 1px  #E8E8E8 solid;width: 30px;" type="text">°C
  				</span>
    			</td>
    			<td style="width: 35%;">
  				<span  style="margin-left: 5%;">
  				血压：<input name="gaoya" style="border: 1px  #E8E8E8 solid;width: 30px;"  placeholder="收缩压"   type="text">/<input  name="diya" style="border: 1px  #E8E8E8 solid;width: 30px;"  placeholder="舒张压"   type="text">mmHg
  				</span>
    			</td>
    			<td style="width: 20%;">
  				<span  style="margin-left: 5%;">
  				脉搏：<input name="maibo"  style="border: 1px  #E8E8E8 solid;width: 30px;"   type="text">bpm
  				</span  style="margin-left: 5%;">
    			</td>
				<td style="width: 25%;">
  				<span  style="margin-left: 5%;">
  				呼吸：<input name="huxi"  style="border: 1px  #E8E8E8 solid;width: 25px;"   type="text">次/分
  				</span>
    			</td>
			  	</tr>
				<tr style="padding-top: 5%;">
    			<td style="width: 20%;">
  				<span  style="margin-left: 5%;">
  				身高：<input name="hight" id="hight" style="border: 1px  #E8E8E8 solid;width: 30px;" type="text">CM
  				</span>
    			</td>
    			<td style="width: 25%;">
  				<span  style="margin-left: 5%;">
  				体重：<input  name="tizhong" id="tizhong" style="border: 1px  #E8E8E8 solid;width: 30px;"  onblur="BMItest()" type="text">kg
  				</span>
    			</td>
    			<td style="width: 25%;">
  				<span style="margin-left: 5%;">
  				BMI<input name="BMI" id="BMI" style="border: 1px  #E8E8E8 solid;width: 30px;"   type="text">
  				</span>
    			</td>
					</tr>
    		</table>
  </div>
  </div>
  
  <div class="layui-form-item">
    <label class="layui-form-label"><i style="color: red;">  *   </i>其他体格检查</label>
    <div class="layui-input-block">
      <input name="title" lay-verify="title" autocomplete="off" placeholder="其他体格检查" class="layui-input" type="text">
    </div>
  </div>
  
   <div class="layui-form-item">
    <label class="layui-form-label">处理意见</label>
    <div class="layui-input-block">
      <input name="chuliyijian" lay-verify="title" autocomplete="off" placeholder="诊断" class="layui-input" type="text">
    </div>
  </div>
  
   <div class="layui-form-item">
    <label class="layui-form-label">添加建议</label>
    <div class="layui-input-block">
      <input name="tjjianyi" lay-verify="title" autocomplete="off" placeholder="处理意见" class="layui-input" type="text">
    </div>
  </div>

  <div class="layui-form-item">
    <div class="layui-input-block">
    <input type="submit"  class="layui-btn" value="提交！！！！！！">
    </div>
  </div>
  </fm:form>


<script>
layui.use(['form', 'layedit', 'laydate'], function(){
  var form = layui.form
  ,layer = layui.layer
  ,layedit = layui.layedit
  ,laydate = layui.laydate;

  
});

function BMItest(){
	var hight=$("#hight").val();
	var tizhong=$("#tizhong").val();
	var BMInum=hight-tizhong;
	if(BMInum>100){
		$("#BMI").val("1");
		
	}else{
		$("#BMI").val("2");
	}
	
	
}

</script>

</body>
</html>