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
    <script type="text/javascript" src="../js/pawj.js"></script>
    <script type="text/javascript" src="../js/switch.js"></script>
    <script type="text/javascript" src="../js/layui.all.js"></script>
    <script type="text/javascript" src="../js/layer.js"></script>
    <link rel="stylesheet" href="../css/base_003.css">
    <link rel="stylesheet" href="../css/layui.css">
    <link rel="stylesheet" href="../css/layer.css">
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/pawj.css">
    <link rel="stylesheet" type="text/css" href="../css/mainDataManagement.css">
    
    <style type="text/css">
    	.selected{font-weight:bold;color:#fff;}
	</style>

    <title>业务字典</title>
<script type="text/javascript" src="bizDict_data/ipquery.html"></script></head>

<body class="static-public-css main-data-manage">

<div id="list_div" class="content-inner" style="display: block;">
    <!--查看帮助视频-->
    <a href="https://www.pinganwj.com/help/1-2-2/207edb7f-7e04-488e-a19d-af6bc538879e" target="_blank" class="help_video_button_css" title="点击查看帮助视频" style="top: 26px;">?</a>
    <div class="tab-content clear" id="divlist" >

        <div class="tab-content-top clear" style="padding-right: 28px;box-sizing: border-box;">
            <a id="btn_add" class="btn top-btn fl" onclick="yincang()" wjperm="DICT01-CREATE">新增</a>
            <div class="search-box fr">
                <span class="form-item-title dsn" id="drop_condition_span">费别：</span>
                <div class="drop dsn" id="drop_condition">
                    <input id="dropInput_condition" class="input-text" placeholder="" readonly="readonly" val="" value="全部" type="text">
                    <i class="drop-icon"></i>
                    <ul class="drop-menu dsn" style="display: none;">
                    </ul>
                <ul class="wjzs-drop-menu dsn" style="display: none;"><li class="drop-item drop_even" title="全部" value=" " data-value=" ">全部</li><li class="drop-item drop_odd" title="财务费别" value="67780CBCA1D60C72E053086E10ACD8CF" data-value="67780CBCA1D60C72E053086E10ACD8CF">财务费别</li><li class="drop-item drop_even" title="发票费别" value="67780CBCA1D70C72E053086E10ACD8CF" data-value="67780CBCA1D70C72E053086E10ACD8CF">发票费别</li><li class="drop-item drop_odd" title="基础分类" value="67780CBCA1D80C72E053086E10ACD8CF" data-value="67780CBCA1D80C72E053086E10ACD8CF">基础分类</li></ul></div>
                <div class="fl stateChoose" style="margin-right:50px;">
                    <span class="form-item-title">状态：</span>
                    	
                    	<select onchange="ylqy()" name="yptypeid"
							style="width:10px; border: 1px solid #cccc; margin-left:-23px; width:100px; height: 28px;">
								<option value="0">全部</option>
								<option value="1">启用</option>
								<option value="2">停用</option>
						</select>
                </div>
                <input id="sc_value" class="input-text fl" placeholder="名称" type="text">
                <a id="btn_search" class="btn search-btn js_search_btn fl"></a>
            </div>
        </div>
        <!-- end of .tab-content-top -->

        <div class="left-column fl">
            <div class="left-column-inner clear">
                <div class="left-column-head">字典列表</div>
                <ul id="left_menu" class="left-column-list">
                    <li id="employee_post" data-value="SG_006" class="selected"><a onclick="zw()">职位</a></li>
                    <li id="pat_source" data-value="SG_027" class=""><a onclick="zwdj()">患者来源</a></li>
                    <li id="treatment_type" data-value="SG_055" class=""><a onclick="zlxmtype()">诊疗项目分类</a></li>
                    <li id="drug_type" data-value="Z_001" class=""><a onclick="liebiaoxianshi()">药品分类</a></li>
                </ul>
            </div>
        </div>
        <!-- end of .left-column -->
        <div class="right-table-area"  id="divlist1" >
            <div class="table-wrap">
                <table id="dataList" class="common-table full-width-table" style="">
                	<tbody>
                		<tr>
	                		<th>序号</th>
	                		<th>员工职位名称</th>
	                		<th>是否医务人员</th>
	                		<th>拼音助记词</th>
	                		
	                		<th>显示顺序</th>
	                		<th>操作</th>
	                	</tr>
	                	<c:forEach items="${list}" var="b">
	                	<tr align="center">
		                	<td>${b.zhiweiid}</td>
		                	<td>${b.zhiweiname}</td>
		                	<c:if test="${b.sfyiwurenyuan==1}">
		                		<td>是</td>
		                	</c:if>
		                	
		                	<c:if test="${b.sfyiwurenyuan==2}">
		                		<td>否</td>
		                	</c:if>
		                	
		                	<td>${b.pinyin}</td>
		                	
		                	<td>${b.shunxu}</td>
		                	
		                	
		                	<td><a id="btn_updateStat_0" onclick="bizDictManagerMain.updateStatus(this.id, 0, 1)">停用</a></td>
		               
		                </tr>
		                </c:forEach>
                </tbody></table>
            
                
            </div>
            <div id="my-page" class="page-nav"><div class="pagination_tips">                                    共<span class="pagination_counts">14</span>条数据                                     <div class="pagination_select">                                        <span class="pagination_cell_count">20</span>                                        <span class="pagination_arrow"></span>                                        <div class="pagination_options_panel"><span class="pagination_option" value="50">50</span><span class="pagination_option" value="20">20</span><span class="pagination_option" value="10">10</span></div>                                    </div> 条/页                            </div></div>
        </div>
        <!-- end of .right-table-area -->
    </div>
    <!-- end of .tab-content -->
</div>



<!-- ------------------------- 来源---------------------------- -->
<div id="list_div1" class="content-inner" style="display: none;">
    <!--查看帮助视频-->
    <a href="https://www.pinganwj.com/help/1-2-2/207edb7f-7e04-488e-a19d-af6bc538879e" target="_blank" class="help_video_button_css" title="点击查看帮助视频" style="top: 26px;">?</a>
    <div class="tab-content clear" id="divlist" >

        <div class="tab-content-top clear" style="padding-right: 28px;box-sizing: border-box;">
            <a id="btn_add" class="btn top-btn fl" onclick="disp_prompt()" wjperm="DICT01-CREATE">新增</a>
            <div class="search-box fr">
                <span class="form-item-title dsn" id="drop_condition_span">费别：</span>
                <div class="drop dsn" id="drop_condition">
                    <input id="dropInput_condition" class="input-text" placeholder="" readonly="readonly" val="" value="全部" type="text">
                    <i class="drop-icon"></i>
                    <ul class="drop-menu dsn" style="display: none;">
                    </ul>
                <ul class="wjzs-drop-menu dsn" style="display: none;"><li class="drop-item drop_even" title="全部" value=" " data-value=" ">全部</li><li class="drop-item drop_odd" title="财务费别" value="67780CBCA1D60C72E053086E10ACD8CF" data-value="67780CBCA1D60C72E053086E10ACD8CF">财务费别</li><li class="drop-item drop_even" title="发票费别" value="67780CBCA1D70C72E053086E10ACD8CF" data-value="67780CBCA1D70C72E053086E10ACD8CF">发票费别</li><li class="drop-item drop_odd" title="基础分类" value="67780CBCA1D80C72E053086E10ACD8CF" data-value="67780CBCA1D80C72E053086E10ACD8CF">基础分类</li></ul></div>
                <div class="fl stateChoose" style="margin-right:50px;">
                    <span class="form-item-title">状态：</span>
                    	
                    	<select onchange="ylqy()" name="yptypeid"
							style="width:10px; border: 1px solid #cccc; margin-left:-23px; width:100px; height: 28px;">
								<option value="0">全部</option>
								<option value="1">启用</option>
								<option value="2">停用</option>
						</select>
                </div>
                <input id="sc_value" class="input-text fl" placeholder="名称" type="text">
                <a id="btn_search" class="btn search-btn js_search_btn fl"></a>
            </div>
        </div>
        <!-- end of .tab-content-top -->

        <div class="left-column fl">
            <div class="left-column-inner clear">
                <div class="left-column-head">字典列表</div>
                <ul id="left_menu" class="left-column-list">
                    <li id="employee_post" data-value="SG_006" class="selected"><a onclick="zw()">职位</a></li>
                    <li id="pat_source" data-value="SG_027" class=""><a onclick="zwdj()">患者来源</a></li>
                    
                    
                    <li id="treatment_type" data-value="SG_055" class=""><a onclick="zlxmtype()">诊疗项目分类</a></li>
                    <li id="drug_type" data-value="Z_001" class=""><a onclick="liebiaoxianshi()">药品分类</a></li>
                </ul>
            </div>
        </div>
        <!-- end of .left-column -->
        <div class="right-table-area"  id="divlist1" >
            <div class="table-wrap">
                <table id="rylist" class="common-table full-width-table" style="">
                	<tbody>
                		<tr>
	                		<th>来源id</th>
	                		
	                		
	                		<th>来源名称</th>
	                		<th>操作</th>
	                	</tr>
	                	<c:forEach items="${lylist}" var="b" varStatus="varstatu">
	                	<tr align="center">
		                	<td>${varstatu.index+1}</td>
		                	<td>${b.lyname}</td>
		                	
		                	
		                	<td><a id="btn_updateStat_0" onclick="bizDictManagerMain.updateStatus(this.id, 0, 1)">停用</a></td>
		               
		                </tr>
		                </c:forEach>
                </tbody></table>
                
            </div>
            <div id="my-page" class="page-nav"><div class="pagination_tips">                                    共<span class="pagination_counts">14</span>条数据                                     <div class="pagination_select">                                        <span class="pagination_cell_count">20</span>                                        <span class="pagination_arrow"></span>                                        <div class="pagination_options_panel"><span class="pagination_option" value="50">50</span><span class="pagination_option" value="20">20</span><span class="pagination_option" value="10">10</span></div>                                    </div> 条/页                            </div></div>
        </div>
        <!-- end of .right-table-area -->
    </div>
    <!-- end of .tab-content -->
</div>


<!-- -------------------------------------------------------- -->
<div id="add_edit_div" class="content-inner" style="display: none;">

<form action="" method="get" id="optArea1">

    <div class="tab-content clear">
        <div class="bl-title">
            <h2 id="title">职位</h2>
        </div>
        <table id="optArea" class="input-table" style="margin-top: 40px; border-top: none;">
        	<tbody>
        		<tr>
        			<td>
        				<span class="form-item-title"><i class="necessary">*</i>员工职位名称：</span>
        				<input name="zhiweiname" id="C_EMPLOYEE_POST_NAME" class="input-text validate(required, maxlength(15))" type="text"></td>
        				
        				<td><span class="form-item-title"><i class="necessary">*</i>是否医务人员：</span>
        			<div>
        					       <select name="sfyiwurenyuan"
								style="width: 245px; border: 1px solid #cccc; margin-top: 2px; height:30px;border-radius: 2px;background-color: #FFFFFF;">
								
									<option value="1">是</option>
									<option value="2">否</option>
					
							</select>	
							
        				</div>
        				</td>
        				<td>
        				<span class="form-item-title">拼音助记词：</span>
        				<input id="C_PY_CODE" name="pinyin" class="input-text validate(notChn, maxlength(15))" type="text"></td>
        				</tr>
        				<tr>
        				
        				<td><span class="form-item-title">显示顺序：</span>
        				<input name="shunxu" id="C_ORDER_NUM" class="input-text validate(digits, maxlength(6))" type="text"></td>
        				</tr>
        			
        				</tbody>
        			</table>
        <div class="btn-group fr">
            <a id="btn_cancle" class="btn btn-cancel fl" onclick="qx()">取消</a>
            <a id="btn_save" class="btn fl" onclick="ck()" data-pos="">保存</a>
        </div>
    </div>
   </form>
    <!-- end of .tab-content -->
</div>
<!-- 药品分类新增弹框 -->
<div id="new_add_edit_div" class="content-inner" style="display: none">
    <div class="tab-content clear">
        <div class="bl-title">
            <h2 id="new_title"></h2>
        </div>
        <table class="input-table" style="margin-top: 40px; border-top: none;">
            <tbody><tr>
                <td style="display: none">
                    <input class="input-text" id="flag" type="text">
                </td>
                <td style="display: none">
                    <input class="input-text" id="typeId" type="text">
                </td>
                <td style="display: none">
                    <input class="input-text" id="code" type="text">
                </td>
                <td>
                    <span class="form-item-title"><i class="necessary">*</i>名称：</span>
                    <input class="input-text validate(required,maxlength(50))" id="name" type="text">
                </td>
                <td><span class="form-item-title"><i class="necessary">*</i>药品类型：</span>
                    <div class="drop">
                        <input class="input-text validate(required)" readonly="readonly" id="drugType" type="text">
                        <i class="drop-icon"></i>
                    <ul class="wjzs-drop-menu dsn" style="display: none;"><li class="drop-item drop_even" title="请选择" value=" " data-value=" ">请选择</li><li class="drop-item drop_odd" title="西药" value="67780CBCA1FC0C72E053086E10ACD8CF" data-value="67780CBCA1FC0C72E053086E10ACD8CF">西药</li><li class="drop-item drop_even" title="中成药" value="67780CBCA1FD0C72E053086E10ACD8CF" data-value="67780CBCA1FD0C72E053086E10ACD8CF">中成药</li><li class="drop-item drop_odd" title="中草药" value="67780CBCA1FE0C72E053086E10ACD8CF" data-value="67780CBCA1FE0C72E053086E10ACD8CF">中草药</li><li class="drop-item drop_even" title="材料" value="67780CBCA1FF0C72E053086E10ACD8CF" data-value="67780CBCA1FF0C72E053086E10ACD8CF">材料</li></ul></div>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="form-item-title">拼音简码：</span>
                    <input class="input-text" id="pyCode" type="text">
                </td>
                <td>
                    <span class="form-item-title">五笔简码：</span>
                    <input class="input-text" id="wbCode" type="text">
                </td>
            </tr>
            <tr id="orderNumTr">
                <td>
                    <span class="form-item-title">排序号：</span>
                    <input class="input-text" id="orderNum" type="text">
                </td>
            </tr>
        </tbody></table>
        <div class="btn-group fr">
            <a id="new_btn_cancle" class="btn btn-cancel fl">取消</a>
            <a id="new_btn_save" class="btn fl">保存</a>
        </div>
    </div>
    <!-- end of .tab-content -->
</div>
<!-- 费别明细新增弹框 -->
<div id="new_add_edit_stats_sub_type_div" class="content-inner" style="display: none">
    <div class="tab-content clear">
        <div class="bl-title">
            <h2>费别明细</h2>
            <input id="statsSubTypeId" type="hidden">
        </div>
        <table class="input-table" style="margin-top: 40px; border-top: none;">
            <tbody><tr>
                <td style="display: none">
                    <input class="input-text validate(required)" id="statsSubTypeCode" type="text">
                </td>
                <td>
                    <span class="form-item-title"><i class="necessary">*</i>费别名称：</span>
                    <input class="input-text validate(notEmpty)" id="statsSubTypeName" type="text">
                </td>
                <td>
                    <span class="form-item-title"><i class="necessary">*</i>费别类型：</span>
                    <div class="drop">
                        <input class="input-text" readonly="readonly" id="statsTypeForStats" type="text">
                        <i class="drop-icon"></i>
                    <ul class="wjzs-drop-menu dsn" style="display: none;"><li class="drop-item drop_even" title="财务费别" value="67780CBCA1D60C72E053086E10ACD8CF" data-value="67780CBCA1D60C72E053086E10ACD8CF">财务费别</li><li class="drop-item drop_odd" title="发票费别" value="67780CBCA1D70C72E053086E10ACD8CF" data-value="67780CBCA1D70C72E053086E10ACD8CF">发票费别</li></ul></div>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="form-item-title">拼音简码：</span>
                    <input class="input-text" id="statsSubPyCode" type="text">
                </td>
                <td>
                    <span class="form-item-title">五笔简码：</span>
                    <input class="input-text" id="statsSubTypeWbCode" type="text">
                </td>
            </tr>
            <tr>
                <td>
                    <span class="form-item-title"><i class="necessary">*</i>排序号：</span>
                    <input class="input-text validate(notEmpty, number, maxlength(6))" id="statsSubTypeOrderNum" type="text">
                </td>
            </tr>
        </tbody></table>
        <div class="btn-group fr">
            <a id="statsSubType_btn_cancel" class="btn btn-cancel fl">取消</a>
            <a id="statsSubType_btn_save" class="btn fl">保存</a>
        </div>
    </div>
    <!-- end of .tab-content -->
</div>
<!--患者来源新增弹框 -->
<div id="addSourceGo" class="popup popretrieval dsn" style="top:200px; right: 450px; width: 620px;">
    <div class="popstyle">
        <div class="poptitle">新增<span class="close"></span></div>
        <div class="popcontent">
        <form action="" method="post" id="lyform">
           		
           		
            </form>
        </div>
    </div>
</div>



<!-- 诊疗项目分类 ----------------------------------->

    <div id="zlxmtypelist" class="content-inner" style="display: none;">
    <!--查看帮助视频-->
    <a href="https://www.pinganwj.com/help/1-2-2/207edb7f-7e04-488e-a19d-af6bc538879e" target="_blank" class="help_video_button_css" title="点击查看帮助视频" style="top: 26px;">?</a>
    <div class="tab-content clear" id="divlist" >

        <div class="tab-content-top clear" style="padding-right: 28px;box-sizing: border-box;">
            <a id="btn_add" onclick="addtype()" class="btn top-btn fl">新增</a>
            <div class="search-box fr">
                <span class="form-item-title dsn" id="drop_condition_span">费别：</span>
                <div class="drop dsn" id="drop_condition">
                    <input id="dropInput_condition" class="input-text" placeholder="" readonly="readonly" val="" value="全部" type="text">
                    <i class="drop-icon"></i>
                    <ul class="drop-menu dsn" style="display: none;">
                    </ul>
                <ul class="wjzs-drop-menu dsn" style="display: none;"><li class="drop-item drop_even" title="全部" value=" " data-value=" ">全部</li><li class="drop-item drop_odd" title="财务费别" value="67780CBCA1D60C72E053086E10ACD8CF" data-value="67780CBCA1D60C72E053086E10ACD8CF">财务费别</li><li class="drop-item drop_even" title="发票费别" value="67780CBCA1D70C72E053086E10ACD8CF" data-value="67780CBCA1D70C72E053086E10ACD8CF">发票费别</li><li class="drop-item drop_odd" title="基础分类" value="67780CBCA1D80C72E053086E10ACD8CF" data-value="67780CBCA1D80C72E053086E10ACD8CF">基础分类</li></ul></div>
                <div class="fl stateChoose" style="margin-right:50px;">
                    <span class="form-item-title">状态：</span>
                    	
                    	<select onchange="ylqy()" name="yptypeid"
							style="width:10px; border: 1px solid #cccc; margin-left:-23px; width:100px; height: 28px;">
								<option value="0">全部</option>
								<option value="1">启用</option>
								<option value="2">停用</option>
						</select>
                </div>
                <input id="sc_value" class="input-text fl" placeholder="名称" type="text">
                <a id="btn_search" class="btn search-btn js_search_btn fl"></a>
            </div>
        </div>
        <!-- end of .tab-content-top -->

        <div class="left-column fl">
            <div class="left-column-inner clear">
                <div class="left-column-head">字典列表</div>
                <ul id="left_menu" class="left-column-list">
                    <li id="employee_post" data-value="SG_006" class="selected"><a onclick="zw()">职位</a></li>
                    <li id="pat_source" data-value="SG_027" class=""><a onclick="zwdj()">患者来源</a></li>
                    <li id="treatment_type" data-value="SG_055" class=""><a onclick="zlxmtype()">诊疗项目分类</a></li>
                    <li id="drug_type" data-value="Z_001" class=""><a onclick="liebiaoxianshi()">药品分类</a></li>
                </ul>
            </div>
        </div>
        <!-- end of .left-column -->
        <div class="right-table-area"  id="divlist1" >
            <div class="table-wrap">
                <table id="typeyewu" class="common-table full-width-table" style="">
                	<tbody>
                		<tr>
	                		<th>序号</th>
	                		<th>项目类型名称</th>
	                		<th>拼音助记词</th>
	                		<th>无比助记词</th>
	                		
	                		<th>显示顺序</th>
	                		<th>操作</th>
	                	</tr>
	                	
	                	<c:forEach items="${zlxmtype}" var="b" varStatus="varstatu">
	                	<tr align="center">
		                	<td>${varstatu.index+1}</td>
		                	<td>${b.zlxmtypename}</td>    	
		                	<td>${b.pinyin}</td>
		                	
		                	<td>${b.wubi}</td>
		                	<td>${b.paixu}</td>
		                	
		                	<td><a id="btn_updateStat_0">停用</a></td>
		               
		                </tr>
		                </c:forEach>
	                	
	                	
                </tbody></table>
            
                
            </div>
            <div id="my-page" class="page-nav"><div class="pagination_tips">                                    共<span class="pagination_counts">14</span>条数据                                     <div class="pagination_select">                                        <span class="pagination_cell_count">20</span>                                        <span class="pagination_arrow"></span>                                        <div class="pagination_options_panel"><span class="pagination_option" value="50">50</span><span class="pagination_option" value="20">20</span><span class="pagination_option" value="10">10</span></div>                                    </div> 条/页                            </div></div>
        </div>
        <!-- end of .right-table-area -->
    </div>
    <!-- end of .tab-content -->
</div>





<!-- --------------类型添加------------------------------------------ -->
<div id="typeadd" class="content-inner" style="display: none;">

<form action="" method="get" id="letianjiaid">

    <div class="tab-content clear">
        <div class="bl-title">
            <h2 id="title">职位</h2>
        </div>
        <table id="optArea" class="input-table" style="margin-top: 40px; border-top: none;">
        	<tbody>
        		<tr>
        			    <td>
        				<span class="form-item-title"><i class="necessary">*</i>项目类型名称：</span>
        				<input name="zlxmtypename" id="C_EMPLOYEE_POST_NAME" class="input-text validate(required, maxlength(15))" type="text">
        				</td>
        				<td>
        				<span class="form-item-title">拼音助记词：</span>
        				<input id="C_PY_CODE" name="pinyin" class="input-text validate(notChn, maxlength(15))" type="text">
        				</td>
        				<td>
        				<span class="form-item-title">五笔助记词：</span>
        				<input id="wubi" name="wubi" class="input-text validate(notChn, maxlength(15))" type="text">
        				</td>
        				</tr>
        				<tr>
        				<td><span class="form-item-title">显示顺序：</span>
        				<input name="paixu" id="C_ORDER_NUM" class="input-text validate(digits, maxlength(6))" type="text"></td>
        				</tr>
        			
        				</tbody>
        			</table>
        <div class="btn-group fr">
            <a id="btn_cancle" class="btn btn-cancel fl" onclick="zlqx()">取消</a>
            <a id="btn_save" class="btn fl" onclick="add()" data-pos="">保存</a>
        </div>
    </div>
   </form>
    <!-- end of .tab-content -->
</div>

<!-- 药品类型分类 ----------------------------------->

    <div id="ypleixingid" class="content-inner" style="display: none;">
    <!--查看帮助视频-->
    <a href="https://www.pinganwj.com/help/1-2-2/207edb7f-7e04-488e-a19d-af6bc538879e" target="_blank" class="help_video_button_css" title="点击查看帮助视频" style="top: 26px;">?</a>
    <div class="tab-content clear" id="divlist" >

        <div class="tab-content-top clear" style="padding-right: 28px;box-sizing: border-box;">
            <a id="btn_add" onclick="yaoptianjiaiebiao()" class="btn top-btn fl">新增</a>
            <div class="search-box fr">
                <span class="form-item-title dsn" id="drop_condition_span">费别：</span>
                <div class="drop dsn" id="drop_condition">
                    <input id="dropInput_condition" class="input-text" placeholder="" readonly="readonly" val="" value="全部" type="text">
                    <i class="drop-icon"></i>
                    <ul class="drop-menu dsn" style="display: none;">
                    </ul>
                <ul class="wjzs-drop-menu dsn" style="display: none;"><li class="drop-item drop_even" title="全部" value=" " data-value=" ">全部</li><li class="drop-item drop_odd" title="财务费别" value="67780CBCA1D60C72E053086E10ACD8CF" data-value="67780CBCA1D60C72E053086E10ACD8CF">财务费别</li><li class="drop-item drop_even" title="发票费别" value="67780CBCA1D70C72E053086E10ACD8CF" data-value="67780CBCA1D70C72E053086E10ACD8CF">发票费别</li><li class="drop-item drop_odd" title="基础分类" value="67780CBCA1D80C72E053086E10ACD8CF" data-value="67780CBCA1D80C72E053086E10ACD8CF">基础分类</li></ul></div>
                <div class="fl stateChoose" style="margin-right:50px;">
                    <span class="form-item-title">状态：</span>
                    	
                    	<select onchange="ylqy()" name="yptypeid"
							style="width:10px; border: 1px solid #cccc; margin-left:-23px; width:100px; height: 28px;">
								<option value="0">全部</option>
								<option value="1">启用</option>
								<option value="2">停用</option>
						</select>
                </div>
                <input id="sc_value" class="input-text fl" placeholder="名称" type="text">
                <a id="btn_search" class="btn search-btn js_search_btn fl"></a>
            </div>
        </div>
        <!-- end of .tab-content-top -->

        <div class="left-column fl">
            <div class="left-column-inner clear">
                <div class="left-column-head">字典列表</div>
                <ul id="left_menu" class="left-column-list">
                    <li id="employee_post" data-value="SG_006" class="selected"><a onclick="zw()">职位</a></li>
                    <li id="pat_source" data-value="SG_027" class=""><a onclick="zwdj()">患者来源</a></li>
                    <li id="treatment_type" data-value="SG_055" class=""><a onclick="zlxmtype()">诊疗项目分类</a></li>
                    <li id="drug_type" data-value="Z_001" class=""><a onclick="liebiaoxianshi()">药品分类</a></li>
                </ul>
            </div>
        </div>
        <!-- end of .left-column -->
        <div class="right-table-area"  id="divlist1" >
            <div class="table-wrap">
                <table id="yplist" class="common-table full-width-table" style="">
                	<tbody>
                		<tr>
	                		<th>序号</th>
	                		<th>药品分类名称</th>
	                		<th>拼音助记词</th>
	                		<th>显示顺序</th>
	                		<th>操作</th>
	                	</tr>
	                	
	                	<c:forEach items="${yplist}" var="b" varStatus="varstatu">
	                	<tr align="center">
		                	<td>${varstatu.index+1}</td>
		                	<td>${b.yptypename}</td>    	
		                	<td>${b.pinyin}</td>
		                	
		                	<td>${b.shunxun}</td>
		                	
		                	
		                	<td><a id="btn_updateStat_0">停用</a></td>
		               
		                </tr>
		                </c:forEach>
	                	
	                	
                </tbody></table>
            
                
            </div>
            <div id="my-page" class="page-nav"><div class="pagination_tips">                                    共<span class="pagination_counts">14</span>条数据                                     <div class="pagination_select">                                        <span class="pagination_cell_count">20</span>                                        <span class="pagination_arrow"></span>                                        <div class="pagination_options_panel"><span class="pagination_option" value="50">50</span><span class="pagination_option" value="20">20</span><span class="pagination_option" value="10">10</span></div>                                    </div> 条/页                            </div></div>
        </div>
        <!-- end of .right-table-area -->
    </div>
    <!-- end of .tab-content -->
</div>

<!-- --------------药品分类添加------------------------------------------ -->
<div id="yptypeadddd" class="content-inner" style="display: none;">

<form action="" method="get" id="yptypeid">

    <div class="tab-content clear">
        <div class="bl-title">
            <h2 id="title">药品分类</h2>
        </div>
        <table id="optArea" class="input-table" style="margin-top: 40px; border-top: none;">
        	<tbody>
        		<tr>
        			    <td>
        				<span class="form-item-title"><i class="necessary">*</i>名称：</span>
        				<input name="yptypename" id="C_EMPLOYEE_POST_NAME" class="input-text validate(required, maxlength(15))" type="text"></td>
        			
        				<td>
        				<span class="form-item-title">拼音助记词：</span>
        				<input id="C_PY_CODE" name="pinyin" class="input-text validate(notChn, maxlength(15))" type="text">
        				</td>
        				<td>
        				
        				
        				</tr>
        				<tr>
        				<td><span class="form-item-title">显示顺序：</span>
        				<input name="shunxun" id="C_ORDER_NUM" class="input-text validate(digits, maxlength(6))" type="text"></td>
        				</tr>
        			
        				</tbody>
        			</table>
        <div class="btn-group fr">
            <a id="btn_cancle" class="btn btn-cancel fl" onclick="ypqx()">取消</a>
            <a id="btn_save" class="btn fl" onclick="ypadd()" data-pos="">保存</a>
        </div>
    </div>
   </form>
    <!-- end of .tab-content -->
</div>



<script type="text/javascript" src="../js/pawj-pro.js"></script>
<script type="text/javascript" src="../js/hz2pinyin.js"></script>
<script type="text/javascript" src="../js/hz2wubi.js"></script>
<script type="text/javascript" src="../js/maindata_url.js"></script>
<script type="text/javascript" src="../js/mdcDictUtils.js"></script>
<script type="text/javascript" src="../js/drugSubTypeManage.js"></script>
<script type="text/javascript" src="../js/patientSourceManage.js"></script>
<script type="text/javascript" src="../js/statsSubTypeManage.js"></script>
<script type="text/javascript" src="../js/mdcBizDict.js"></script>



<script type="text/javascript">

$(function(){

    $("#left_menu li").click(function() {	
		
        $(this).addClass('selected');                            // 添加当前元素的样式
        $(this).siblings('li').removeClass('selected');  // 删除其他兄弟元素的样式
    });

}); 
/**
 * 药品类型add
 */
function ypadd(){
	
	$.ajax({
		type:'post',
		dataType:'json',
		data:$("#yptypeid").serialize(),
		url:'yptypetianjia',
		success:function(data)
		{
			if(data!=null&&data!=""){
				alert('成功!');
				var html='<tr align="center">'
					+'<td>'+data.yptypeid+'</td>'
					+'<td>'+data.yptypename+'</td>'
					+'<td>'+data.pinyin+'</td>'
					
					+'<td>'+data.shunxun+'</td>'
					+'<td><a id="btn_updateStat_0">停用</a></td>'
					+'</tr>';
				console.log(html);		
			$("#yplist tbody").append(html);
		
			
			 var ss=document.getElementById("yptypeadddd");
	         ss.style.display="none";
				
	         var ss1=document.getElementById("ypleixingid");
	         ss1.style.display="block";
			}
			
		}
	})
	
	}
/**
 * 诊疗项目分类
 */
function add(){
		$.ajax({
			type:'post',
			dataType:'json',
			data:$("#letianjiaid").serialize(),
			url:'yewutianjia',
			success:function(data)
			{
				if(data!=null&&data!=""){
					alert('成功!');
					var html='<tr align="center">'
						+'<td>'+data.zkxmtypeid+'</td>'
						+'<td>'+data.zlxmtypename+'</td>'
						+'<td>'+data.pinyin+'</td>'
						+'<td>'+data.wubi+'</td>'
						+'<td>'+data.paixu+'</td>'
						+'<td><a id="btn_updateStat_0">停用</a></td>'
						+'</tr>';
					console.log(html);		
				$("#typeyewu tbody").append(html);
			
				
				 var ss=document.getElementById("typeadd");
		         ss.style.display="none";
					
		         var ss1=document.getElementById("zlxmtypelist");
		         ss1.style.display="block";
				}
				
			}
		})
}
function disp_prompt(){
layer.prompt(function(value, index, elem){
	 /*  alert(value); //得到value */
	 	 $.ajax({
	 		 type:'post',
	 		dataType:'json',
	 		 url:'../laiyuan/lyadd?lyname='+value,
	 		 success:function(data){
	 			 if (data!=null&&data!="") {
	 				alert('成功!');
	 				var html='<tr align="center">'
							+'<td>'+data.lyid+'</td>'
							+'<td>'+data.lyname+'</td>'
							+'<td><a id="btn_updateStat_0">停用</a></td>'
							+'</tr>';
					console.log(html);		
					
					$("#rylist tbody").append(html);		
					 
	 				}
	 		 }
	 	 });
	  
	  layer.close(index);
	});
}
</script>

 <script type="text/javascript">
 
 function ypqx(){
	 var yp=document.getElementById("ypleixingid");
	 var zl=document.getElementById("yptypeadddd");
	 
		yp.style.display="block";
        zl.style.display="none";
 }
 
 //诊疗项目取消
 function zlqx(){
	 var yp=document.getElementById("typeadd");
	 var zl=document.getElementById("zlxmtypelist");
	 
		yp.style.display="none";
        zl.style.display="block";
 }
 //药品分类
 function liebiaoxianshi(){
	 var dd=document.getElementById("list_div");
	 var hz=document.getElementById("list_div1");
	 var zl=document.getElementById("zlxmtypelist");
	 var yp=document.getElementById("ypleixingid");
	 
	 	yp.style.display="block";
         hz.style.display="none";
         zl.style.display="none";
         dd.style.display="none";
	 
 }
 //药品分类添加
 function yaoptianjiaiebiao(){

	 var zl=document.getElementById("yptypeadddd");
	 var yp=document.getElementById("ypleixingid");
	 	yp.style.display="none";
         zl.style.display="block";

	 
 }
 
 function addtype(){
	 
	 var ty=document.getElementById("typeadd");
	 var dd=document.getElementById("list_div");
	 var hz=document.getElementById("list_div1");
	 var zl=document.getElementById("zlxmtypelist");
         hz.style.display="none";
         zl.style.display="none";
         dd.style.display="none";
	  		ty.style.display="block";
 }
 
  function zw()
  {
	 	 var dd=document.getElementById("list_div");
		 var hz=document.getElementById("list_div1");
		 var zl=document.getElementById("zlxmtypelist");
		 var yp=document.getElementById("ypleixingid");
	         hz.style.display="none";
	         zl.style.display="none";
	         yp.style.display="none";
	         dd.style.display="block";

  }
  
  function zlxmtype()
  {
	 	 var dd=document.getElementById("list_div");
		 var hz=document.getElementById("list_div1");
		 var zl=document.getElementById("zlxmtypelist");
		 var yp=document.getElementById("ypleixingid");
		 yp.style.display="none";    
		 hz.style.display="none";
	         dd.style.display="none";
	         zl.style.display="block";

  }
  </script>
  
 <script type="text/javascript">
 
 //切换
 function zwdj(){
	 
	 var dd=document.getElementById("list_div");
	 var hz=document.getElementById("list_div1");
	 var zl=document.getElementById("zlxmtypelist");
	 var yp=document.getElementById("yptypeadddd");
	 var y1=document.getElementById("ypleixingid");
		if(hz.style.display=="none"){  
			y1.style.display="none";	
         hz.style.display="block";
         yp.style.display="none";
         dd.style.display="none";
         zl.style.display="none"; 
     }
 }
 
 
 
/**
 * 业务字典医疗添加
 */
 function ck(){
	 $.ajax({
		 type:'post',
		 url:'../yewu/yewuadd',
		 data: $("#form").serialize(),
		 cache:false,
		 success:function(data){
			 if (data > 0) {
					alert('成功!');
					window.location.href = 'yewuzidianjiemian';
				}
		 }
	 });
 }
 
 //职位取消
 function qx(){
		var traget=document.getElementById("add_edit_div");  
		var lb=document.getElementById("divlist");
         traget.style.display="none";
         lb.style.display="block";
	}

 //点击医疗添加按钮然后隐藏列表
 function yincang(){
    		var traget=document.getElementById("add_edit_div");  
    		var lb=document.getElementById("divlist");
    		
    		if(traget.style.display=="none"){  
                traget.style.display="block";
                lb.style.display="none";
            
            }
    	}
    function qxly(){
    	 var aa=document.getElementById("addSourceGo");
		 aa.style.display="none";
    }
    </script>



<div class="loading-mask" style="display: none;"><span class="loading-content"></span></div></body></html>