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
<html lang="zh-cn"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="">
    <meta name="Keywords" content="">
    <script type="text/javascript" async="" src="../js/pawj.js"></script>
    <script type="text/javascript" src="../js/switch.js"></script>
    <link rel="stylesheet" href="../css/base_003.css">
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/pawj.css">
    <link rel="stylesheet" type="text/css" href="../css/mainDataManagement.css">
    <link rel="stylesheet" type="text/css" href="../css/treatment.css">

    <title></title>
<script type="text/javascript" src="treatment_data/ipquery.html"></script></head>

<body class="static-public-css main-data-manage">

    <div class="content-inner" id="list">

        <div class="tab-content clear">

            <div class="tab-content-top clear">
                <a class="btn top-btn fl" id="btn_add">新增</a> <a class="btn top-btn fl" id="import" style="margin-left: 10px; display: none" wjperm="DICT03-REFERENCE,CLINICSETUP06-REFERENCE">平台引入</a>

                <div class="search-box fr">
                    <input class="input-text fl" placeholder="编号/名称/简码" id="searchCode" type="text">
                    <a onclick="searchTreatment()" class="btn search-btn js_search_btn fl"></a>
                </div>

                <div class="fr" style="margin-top: 20px; margin-right:10px;">
                    <span class="form-item-title">状态：</span>
                    <div class="drop">
                        <input id="status" class="input-text" readonly="readonly" val="0" value="启用" type="text">
                        <i class="drop-icon"></i>
                    <ul class="wjzs-drop-menu dsn" style="display: none;"><li class="drop-item drop_even" title="全部" value=" " data-value=" ">全部</li><li class="drop-item drop_odd" title="启用" value="0" data-value="0">启用</li><li class="drop-item drop_even" title="停用" value="1" data-value="1">停用</li></ul></div>
                </div>
            </div>
            <!-- end of .tab-content-top -->

            <div class="left-column fl">
                <div class="left-column-inner clear" id="category">
                    <div class="left-column-head">项目分类</div>
                   <ul class="left-column-menu">
                    <c:forEach items="${list}" var="b">
                    <li>
                  	  <a href="zhenliao">${b.zlxmtypename}</a>
                    </li>
                    </c:forEach>
                   </ul>
                </div>
            </div>
            <!-- end of .left-column -->
            <div class="right-table-area fr fixed-head">
                <div class="table-wrap">
                    <div class="tableBox-head">
                        <table class="common-table full-width-table">
                            <tbody><tr>
                                <th width="8%">序号</th>
                                <th width="14%">编号</th>
                                <th width="22%">项目名称</th>
                                <th width="8%">单位</th>
                                <th width="10%">单价（元）</th>
                                <th width="14%">备注</th>
                                <th>操作</th>
                            </tr>
                        </tbody></table>
                    </div>
                    <div class="tableBox-cont">
                        <table class="common-table full-width-table" id="treatmentTable">
                       <tbody>
                       	<c:forEach items="${zllist}" var="b">
                        <tr>
						<td width="8%">${b.zlxmid}</td>
						<td width="14%">${b.zlxmbianma}</td>
						<td width="22%">${b.zlxmname}</td>
						<c:if test="${b.zlxmdanwei==1}">
							<td width="8%">次</td>
						</c:if>
						
						<c:if test="${b.zlxmdanwei==2}">
							<td width="8%">项</td>
						</c:if>
						
						
						<c:if test="${b.zlxmdanwei==3}">
							<td width="8%">颗</td>
						</c:if>
						
						
						<c:if test="${b.zlxmdanwei==4}">
							<td width="8%">穴位</td>
						</c:if>
						
						<td width="10%">${b.zlxmdanjia}</td>
						<td width="14%">${b.beizhu}</td>
						<td><a onclick='updateTreatmentInit("67780CBCA21B0C72E053086E10ACD8CF")' wjperm="DICT03-UPDATE,CLINICSETUP06-UPDATE">编辑</a> <a id="67780CBCA21B0C72E053086E10ACD8CF" onclick='updateDisable("67780CBCA21B0C72E053086E10ACD8CF","4")' wjperm="DICT03-DISABLE,CLINICSETUP06-DISABLE">停用</a></td>
						</tr>
						</c:forEach>
						</tbody></table>
                    </div>
                </div>
                <div id="my-page" class="page-nav"><div class="pagination_tips">                                    共<span class="pagination_counts">3</span>条数据                                     <div class="pagination_select">                                        <span class="pagination_cell_count">20</span>                                        <span class="pagination_arrow"></span>                                        <div class="pagination_options_panel" style=""><span class="pagination_option" value="50">50</span><span class="pagination_option" value="20">20</span><span class="pagination_option" value="10">10</span></div>                                    </div> 条/页                            </div></div>
            </div>
            <!-- end of .right-table-area -->
        </div>
        <!-- end of .tab-content -->
    </div>
    <!-- end of .content-inner -->

    <div class="content-inner" id="addOrEdit" style="display: none">
	<!-- ------------------------------------------------------------------ -->
	<form action="" method="post" id="form">
        <div class="tab-content clear">
            <div class="bl-title">
                <h2>项目</h2>
               
            </div>
            <table class="input-table">
                <tbody><tr>
                    <td style="display: none"><input class="input-text" id="treatmentId" type="text"></td>
                    <td style="display: none"><input class="input-text" id="pTreatmentId" type="text"></td>
                    <td><span class="form-item-title">项目编号：</span>
                        <input disabled="disabled" class="input-text validate(required, numAndLetter, maxlength(19))" id="treatmentCode" type="text" value="该编码自动生成"></td>
                    <td><span class="form-item-title"><i class="necessary">*</i>项目名称：</span>
                        <input class="input-text validate(required, maxlength(50))" onkeyup="keyup()" name="zlxmname" id="treatmentName" type="text"></td>
                    <td><span class="form-item-title"><i class="necessary">*</i>项目单价：</span>
                        <input class="input-text validate(required, decimal(2))" id="treatmentPrice" name="zlxmdanjia" type="text"></td>
                </tr>
                <tr>
                    <td><span class="form-item-title"><i class="necessary">*</i>项目单位：</span>

						
						<select name="zlxmdanwei"
								style="width: 245px; border: 1px solid #cccc; margin-top: 2px; height:30px;border-radius: 2px;background-color: #FFFFFF;">
								<option value="0">请选择:</option>
									<option value="1">次</option>
									<option value="2">项</option>
									<option value="3">颗</option>
									<option value="4">穴位</option>
							</select>	
                       
                       
                    </td>
                    <td><span class="form-item-title">项目分类：</span>
                       
                       <select name="xiangmufenleiid"
								style="width: 245px; border: 1px solid #cccc; margin-top: 2px; height:30px;border-radius: 2px;background-color: #FFFFFF;">
								<option value="0">请选择:</option>
							<c:forEach items="${list}" var="b">	
								<option value="${b.zkxmtypeid}">${b.zlxmtypename}</option>
							</c:forEach>
						</select>	
                       
                       
                    </td>
                    <td><span class="form-item-title">最高限价：</span>
                        <input id="ceilingPrice" name="maxprice" class="input-text validate(decimal(4),maxlength(10))">
                    </td>
                </tr>
                <tr>
                    <td><span class="form-item-title">五笔简码：</span>
                        <input class="input-text validate(maxlength(50))" name="wubi" id="wbjm" maxlength="25" type="text">
                    </td>
                    <td><span class="form-item-title">拼音简码：</span>
                        <input class="input-text validate(maxlength(50))" id="pyjm" name="pinyin" maxlength="25" type="text">
                    </td>
                    <td><span class="form-item-title">备注：</span>
                        <input class="input-text validate(maxlength(50))" name="beizhu" id="remark" type="text">
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><span class="form-item-title">项目治疗提成：</span>
                       
                        <b id="clone">
                    	<input name="ticheng" class="input-text validate(min(0),max(100), decimal(2),notspace)" id="royaltyContent" type="text">
                    		<span>元</span>
                    	</b>
                        
                    </td>
                    <td>
                        <span class="form-item-title"><i class="necessary">*</i>门诊特检项目：</span>
                        
                        <select name="shifoumenzhen"
								style="width: 245px; border: 1px solid #cccc; margin-top: 2px; height:30px;border-radius: 2px;background-color: #FFFFFF;">
								
									<option value="1">是</option>
									<option value="2">否</option>
					
							</select>	
                        
                    </td>
                </tr>
            </tbody></table>

            <div class="btn-group fr">
                <a id="info_cancel" class="btn btn-cancel fl">取消</a> 
                <a onclick="ckadde()" class="btn fl">保存</a>
            </div>
        </div>
        
        </form>
        <!-- end of .tab-content -->
    </div>
    <!-- end of .content-inner -->


    <div class="content-inner" id="platform_list" style="display: none">

        <div class="tab-content clear">

            <div class="content-top clear">
                <span class="form-item-title import_span"><i class="necessary">*</i>项目分类：</span>

                <div class="drop import_drop">
                    <input class="input-text validate(required)" readonly="readonly" id="treatmentType" type="text"> <i class="drop-icon"></i>
                </div>
                <div class="search-box fr">
                    <input class="input-text fl import_span" placeholder="名称/简码" id="searchPlatformCode" type="text">
                    <a onclick="searchPlatformTreatment()" class="btn search-btn js_search_btn fl import_searh"></a>
                </div>
            </div>
            <div class="table-import-wrap">
                <div class="table-import">
                    <table class="common-table full-width-table" id="platFormTreatmentTable">
                        <tbody><tr>
                            <th align="left" width="5%">选择</th>
                            <th align="left" width="5%">序号</th>
                            <th align="left" width="25%">项目分类</th>
                            <th align="left" width="25%">项目名称</th>
                            <th align="left" width="15%">单位</th>
                            <th align="left" width="15%">单价（元）</th>
                            <th align="left">备注</th>
                        </tr>
                    </tbody></table>
                </div>
                <!-- 				<div id="my-page-import" class="page-nav"></div> -->
            </div>
            <!-- end of .right-table-area -->
            <div class="btn-group">
                <a id="platform_info_cancel" class="btn btn-cancel fl">取消</a> <a id="platform_info_import" class="btn fl">确定</a>
            </div>
        </div>
        <!-- end of .tab-content -->
    </div>
    <!-- end of .tab-content -->

	
    <script type="text/javascript" src="../js/pawj-pro.js"></script>
    <script type="text/javascript" src="../js/hz2pinyin.js"></script>
    <script type="text/javascript" src="../js/hz2wubi.js"></script>
    <script type="text/javascript" src="../js/pawj_002.js"></script>
    <script type="text/javascript" src="../js/slidelf.js"></script>
    <script type="text/javascript" src="../js/cache.js"></script>
    <script type="text/javascript" src="../js/treatment.js"></script>
    <script type="text/javascript" src="../js/treatment_import.js"></script>
    <!-- <script type="text/javascript" src="../js/maindata_url.js"></script> -->

	
		<script type="text/javascript">
		function ckadde() {
			$.ajax({
				type : 'post',
				url : 'addzlxm',
				data : $("#form").serialize(),
				cache : false,
				success : function(data) {
					if (data > 0) {
						alert('成功!');
						window.location.href = 'zhenliao';
					}
				}
			})

		}
	</script>
	
	
    <script>
        //数据采集
        var _maq = _maq || [];
        _maq.push(['sysType', 'B'], ['sysModel', 'DICT_MGR'], ['sysMenu', 'DICT03']);

        function async_ipquery(){
            var script = document.createElement("script");
            script.setAttribute("type","text/javascript");
            script.src = ('https:' == document.location.protocol ? 'https://ip.ws.126.net/ipquery' : 'http://ip.ws.126.net/ipquery');
            document.getElementsByTagName("head")[0].appendChild(script);
            var collection = document.createElement('script');
            collection.type = 'text/javascript';
            collection.async = true;
            collection.src ='../resources/js/pawj.collection.js';
            var sCollection = document.getElementsByTagName('script')[0];
            sCollection.parentNode.insertBefore(collection, sCollection);
        }

        $(function(){
            if (window.attachEvent) {
                window.attachEvent('onload', async_ipquery);
            } else {
                window.addEventListener('load', async_ipquery);
            }
        });
    </script>


<div class="loading-mask" style="display: none;"><span class="loading-content"></span></div></body></html>