<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <% String path=request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<%@ taglib uri="http://www.springframework.org/tags/form" prefix="fm" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<base href="<%=basePath %>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script type="text/javascript" src="js/switch.js"></script>
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/base_002.css">
    <link rel="stylesheet" href="css/pawj.css">
    <link rel="stylesheet" type="text/css" href="css/todayPatientList.css">
    <link rel="stylesheet" type="text/css" href="css/patientCard.css">
    <link rel="stylesheet" type="text/css" href="css/pricingCharge.css">
    <link rel="stylesheet" type="text/css" href="css/layui.css">
    <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="js/layui.js"></script>
    <script type="text/javascript" src="js/layer.js"></script>
  <title>今日就诊</title>
<link rel="stylesheet" href="css/layer.css"></head>

<body class="static-public-css todayPatient-list-css patient-card-css">
    <div id="list_div" class="content-inner">
 
        <div class="tab-content clear">
            <div class="card-tab-top clear" style="padding-right: 30px;">
                <div class="com_status pat_com_status">
                    <ul id="tablist" class="clear">
                        <li class="tab-wait" onclick="reles(1)">候诊中<span id="tab-wait-count">(${OneSize})</span>
                        </li>
                        <li class="tab-wait" onclick="reles(2)">治疗中<span id="tab-consult-count">(${TwoSize})</span>
                        </li>
                        <li class="tab-wait" onclick="reles(3)">已完成<span id="tab-finish-count">(${ThreeSize})</span>
                        </li>
                    </ul>
                </div>
                <div class="search-box fr" style="    margin: 10px 9px 10px 0;">
                    <input style="width: 160px;" class="input-text fl" name="patientKey" placeholder="姓名/病历号/会员卡号" id="keyword" type="text">
                    <a href="javascript:;" class="btn search-btn js_search_btn fl" id="search_btn"></a>
                </div>
                <i class="t-aft fr"></i>
                <div class="list-date">
                    <input class="input-text validate(required, date)" id="curDate" placeholder="2018-04-08" value="2018-04-08"> <i class="date-icon"></i>
                </div>
                <i class="t-pre fr"></i>
                <span class="frbtn fr" id="yb-fast-reg" style="display:none;">医保接诊</span>
                <!-- <span class="frbtn fr" id="parentIframe" >快速接诊</span> -->
                <span class="frbtn fr dsn" id="nextPatientBtn">接诊下一位</span>
            </div>
            <div class="cardBoxWrap">
                <div class="memberInfoList cardBoxWrap-Info clear">
                    <div class="neirong">
                    <c:forEach items="${list}" var="i">
           <div class="s_box" id="box_template">
                            <div class="s_box_top" onclick="parentIframe(${i.hzid})">
                                <div class="s_box_top_l">
                                    <img src="js/card_photo_man.png" alt="">
                                </div>
                                <div class="s_box_top_r">
                                    <span class="name_zhenshi">
								<span class="patient_name">${i.hzname }</span>
                                    <span class="zhenshi"></span>
                                    </span>
                                    <span class="patient_ageOrsex">${i.age}&nbsp;&nbsp;&nbsp;${i.sex }</span>
                                   
                                    <div class="docter_icon"></div>
                                </div>
                        </div>
                        <div class="s_box_bot" id="box_bot_template1">
                            <span class="accepts" onclick="chuzhen(${i.hzid})">操作</span>
                        </div>
                    </div>
                    </c:forEach>
                    </div>
                    <div class="f_box clear">
                        <div id="dataList" class="chargeCard clear"></div>
                    </div>
                </div>
                <c:if test="${list=null}">
                <div id="nothing" class="">
                    <div class="no-data-msg">当前暂无就诊！</div>
                </div>
                </c:if>
               
            </div>
            <!-- end of .right-table-area -->
        </div>
        <!-- end of .tab-content -->
    </div>
    <script type="text/javascript">
    //候诊中
    
    
    	function reles(hei){
			$.post('banci/jiezhenzhuangtai.json',{'id':hei},function(data){
				des(data);
			})	
			};
    
    		function des(result){
    			var res=result;
    			console.log(res);
			 $(".neirong div").remove();
			 console.log(result[0]);
			 $.each(result,function(i,obj){
				 var html='<div class="s_box" id="box_template">'
                    	+'<div class="s_box_top"  onclick="parentIframe('+obj.hzid+')">'
                 	    +'<div class="s_box_top_l">'
                        +'<img src="js/card_photo_man.png" alt="">'
                 		+'</div>'
                		+'<div class="s_box_top_r">'
                     	+'<span class="name_zhenshi">'
						+'<span class="patient_name">'+obj.hzname+'</span>'
                    	+'<span class="zhenshi"></span>'
                     	+'</span>'
                     	+'<span class="patient_ageOrsex">'+obj.age+'&nbsp;&nbsp;&nbsp;'+obj.sex+'</span>'
                     	+'<div class="docter_icon"></div>'
                     	+'<span class="patient_date">'+obj.jztime+'</span>'
                 		+'</div>'
           				+'</div>'
         				+'<div class="s_box_bot" id="box_bot_template1">'
         				+' <span class="accepts"><a href="banci/chuzhen?id='+obj.hzid+'">操作</a></span>'
            			+'</div>'
            			+'</div>'
            		 $(".neirong").append(html);
            			
		      });
			};
		       
     function parentIframe(hei){
     layer.open({
     type: 2,
     title: false,
     maxmin: true,
     shadeClose: true, //点击遮罩关闭层
     area : ['800px' , '600px'],
     content: 'banci/kuaisujiezhen?id='+hei
     });
   };
   
   
   
  /*  function chuzhen(hei){
	     layer.open({
	     type: 2,
	     title: false,
	     maxmin: true,
	     shadeClose: true, //点击遮罩关闭层
	     area : ['800px' , '600px'],
	     content: 'banci/chuzhen?id='+hei
	     });
	   }; */
    </script>
 </body>
</html>