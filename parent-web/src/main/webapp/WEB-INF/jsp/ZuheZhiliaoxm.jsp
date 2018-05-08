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
    	<script type="text/javascript" src="../js/jquery.autocomplete.js"></script>   
	  <link rel="stylesheet" href="../css/jquery.autocomplete.css">
    <link rel="stylesheet" href="../css/base_003.css">
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/pawj.css">
    <link rel="stylesheet" href="../xcc_js_css/auto.css">
    <link rel="stylesheet" type="text/css" href="../css/mainDataManagement.css">
    <title></title>
<script type="text/javascript" src="css/ipquery.html"></script></head>

<body class="static-public-css main-data-manage">
    <!-- 列表信息 DIV -->
    <div class="content-inner" id="list_div" style="display: show">
        <div class="tab-content clear">
            <div class="tab-content-top clear">
                <a href="javascript:;" onclick="yincang()" class="btn top-btn fl" id="btn_add" wjperm="DICT04-CREATE,CLINICSETUP07-CREATE">新增</a>

                <div class="search-box fr">
                    <input class="input-text fl" placeholder="编号/名称/简码" id="searchTxt" type="text">
                    <a href="javascript:;" class="btn search-btn js_search_btn fl" id="btn_search"></a>
                </div>

                <div class="fr" style="margin-top: 20px; margin-right:10px;">
                    <span class="form-item-title">状态：</span>
                    <div class="drop">
                        <input id="status" class="input-text" readonly="readonly" val="0" value="启用" type="text">
                        <i class="drop-icon"></i>
                    <ul class="wjzs-drop-menu dsn"><li class="drop-item drop_even" title="全部" value=" " data-value=" ">全部</li><li class="drop-item drop_odd" title="启用" value="0" data-value="0">启用</li><li class="drop-item drop_even" title="停用" value="1" data-value="1">停用</li></ul></div>
                </div>
            </div>
            <!-- end of .tab-content-top -->

            <div class="left-column fl">
                <div class="left-column-inner clear">
                    <div class="left-column-head">项目分类</div>
                    <ul class="left-column-list" id="projectItemlist">
                     <li class="current" value="1"> <a href="zuhezhiliaoxmlist?zhlx=1">检验</a></li>
                         <li value="2"><a href="zuhezhiliaoxmlist?zhlx=2">检查</a></li>
                         <li value="3"><a href="zuhezhiliaoxmlist?zhlx=3"> 治疗</a></li>
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
                                <th width="15%">组合编号</th>
                                <th width="18%">组合名称</th>
                                <th width="8%">单位</th>
                                <th width="10%">组合单价</th>
                                <th width="10%">标本/部位</th>
                                <th width="10%">地点</th>
                                <th>操作</th>
                            </tr>
                        </tbody></table>
                    </div>
                    <div class="tableBox-cont">
                        <table class="common-table full-width-table" id="tablelist">
                        	<tbody>
                        	<c:forEach items="${list}" var="b">
                        		<tr align="center">
                        			<td width="8%">${b.xiangmuid}</td>
                        			<td width="15%">${b.bianma}</td>
                        			<td width="18%">${b.xiangmuname}</td>
                        		<c:if test="${b.danweiid==1}">
                        		<td width="8%">次</td>
                        		</c:if>
                        		
                        		<c:if test="${b.danweiid==2}">
                        		<td width="8%">项</td>
                        		</c:if>
                        			
                        			<td width="10%">${b.zxdj}</td>
                        			<td width="10%">标本</td>
                        			<td width="10%">${b.didian}</td>
                        			<td><a href="javascript:;" onclick="compentproj_js.editData('f842a11772f94bd1a96e3b5ebdd1d77a')" wjperm="DICT04-UPDATE,CLINICSETUP07-SAVE">编辑</a><a href="javascript:;" onclick="compentproj_js.enableData('f842a11772f94bd1a96e3b5ebdd1d77a',1)" wjperm="DICT04-DISABLE,CLINICSETUP07-DISABLE">停用 </a>
                        			</td>
                        		</tr>
                        	</c:forEach>
                        	</tbody>
                        </table>
                    </div>
                </div>
                <div id="my-page" class="page-nav"><div class="pagination_tips">                                    共<span class="pagination_counts">3</span>条数据                                     <div class="pagination_select">                                        <span class="pagination_cell_count">20</span>                                        <span class="pagination_arrow"></span>                                        <div class="pagination_options_panel"><span class="pagination_option" value="50">50</span><span class="pagination_option" value="20">20</span><span class="pagination_option" value="10">10</span></div>                                    </div> 条/页                            </div></div>

            </div>
            <!-- end of .right-table-area -->
        </div>
        <!-- end of .tab-content -->
    </div>
    <!-- end of .content-inner -->

    <!-- 新增/编辑 DIV -->
    <div id="add_edit_div" class="content-inner" style="display: none">
        <div class="tab-content parts compent-project-add clear">
            <div class="bl-title">
                <h2>新增检查医嘱</h2>
            </div>
            <table class="input-table">
                <tbody>
                    <tr>
                        <td><input class="input-text hasDatepicker" id="examId" type="hidden"><input class="input-text hasDatepicker" id="pExamId" type="hidden"> <span class="form-item-title"><i class="necessary">*</i>组合编码：</span> <input class="input-text hasDatepicker validate(maxlength(36))" id="examCode" type="text">
                        </td>
                        <td><span class="form-item-title fl"><i class="necessary">*</i>组合名称：</span> <input class="input-text validate(maxlength(100))" id="examName" type="text"></td>
                        <td><span class="form-item-title fl"><i class="necessary">*</i>组合类型：</span>
                        	<select name="yfid"
								style="width: 240px; border: 1px solid #cccc; margin-top: 2px; height:30px;border-radius: 2px;background-color: #FFFFFF;">
								<option value="0">请选择:</option>
									<option value=""></option>
							</select>	
                        </td>
                    </tr>
                    <tr>
                        <td><span class="form-item-title">单位：</span>
                        	  	<select name="yfid"
								style="width: 240px; border: 1px solid #cccc; margin-top: 2px; height:30px;border-radius: 2px;background-color: #FFFFFF;">
								<option value="0">请选择:</option>
									<option value=""></option>
							</select>	
                                 </td>
                        <td><span class="form-item-title fl">检验地点：</span>

                              	<select name="yfid"
								style="width: 240px; border: 1px solid #cccc; margin-top: 2px; height:30px;border-radius: 2px;background-color: #FFFFFF;">
								<option value="0">请选择:</option>
									<option value=""></option>
							</select>	
                        </td>
                        <td><span class="form-item-title fl" id="title_examSample"><i class="necessary">*</i>标本：</span>
                              	<select name="yfid"
								style="width: 240px; border: 1px solid #cccc; margin-top: 2px; height:30px;border-radius: 2px;background-color: #FFFFFF;">
								<option value="0">请选择:</option>
									<option value=""></option>
							</select>	                        </td>
                    </tr>
                    <tr>
                        <td><span class="form-item-title">五笔简码：</span> <input class="input-text hasDatepicker validate(maxlength(100))" id="wbCode" type="text">
                        </td>
                        <td><span class="form-item-title fl">拼音简码：</span> <input class="input-text validate(maxlength(100))" id="pyCode" type="text"></td>
                        <td><span class="form-item-title fl"><i class="necessary">*</i>组合单价：</span> <input class="input-text wjzs-disabled" id="zhPrice" readonly="readonly" type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="2"><span class="form-item-title">备注：</span> <input class="input-text validate(maxlength(150))" style="width: 80.3%;" id="remark" type="text">
                        </td>
                        <td><span class="form-item-title fl"><i class="necessary">*</i>执行单价：</span> <input class="input-text validate(required, decimal(2))" id="zxPrice" type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="2"><span class="form-item-title">组合项目提成：</span>
                        	  	<select name="yfid"
								style="width: 120px; border: 1px solid #cccc; margin-top: 2px; height:30px;border-radius: 2px;background-color: #FFFFFF;">
								<option value="0">请选择:</option>
									<option value=""></option>
							</select>	
                        	
                        	
              
                            <b id="clone">
		                    	<input class="input-text validate(min(0),max(100), decimal(2),notspace)" id="royaltyContent" type="text">
		                    </b>
                            <span id="rateUnit"></span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="bl-title clear" style="position: relative;">
                <h2>新增项目</h2>
                <a href="javascript:;"  onclick="addrow();" class="btn add-item-btn" id="btn_add_item">新增</a>
                <hr>
				
				<!--创建一个表格-->

					<table  class="table">
						<tr>
							<th style="padding-left:140px;padding-top: 25px;">姓名</th>
							<th style="padding-left:140px;padding-top: 25px;">年龄</th>
							<th style="padding-left:140px;padding-top: 25px;">性别</th>
						</tr>
						
					<tr>
					
	<td style="padding-left:140px;padding-top: 25px;">
				<input type="text" id="txtIput" class="auto-inp">
				<div class="auto hidden" id="auto">
					<div class="auto_out">1</div>
					<div class="auto_out">2</div>
				</div>
				</td>

</tr>
					</table>
                
            			</div>

            <div class="ware-table-area">
                <table class="common-table full-width-table">
                    <tbody id="examItemTableBody">
                    	
                    </tbody>
                </table>
            </div>
            <div class="clear"></div>
            <div class="pop-foot clear">
                <div class="btn-group fr">
                    <a href="javascript:;" class="btn btn-cancel fl" id="btn_cancel">取消</a>
                    <a href="javascript:;" class="btn fl" id="btn_save" wjperm="DICT04-SAVE,CLINICSETUP07-SAVE">保存</a>
                </div>
            </div>
        </div>
    </div>
    <!-- end content-inner -->
    <script type="text/javascript" src="../js/pawj-pro.js"></script>
    <script type="text/javascript" src="../js/hz2wubi.js"></script>
    <script type="text/javascript" src="../js/hz2pinyin.js"></script>
    <script type="text/javascript" src="../js/cache.js"></script>
    <script type="text/javascript" src="../js/jquery.js"></script>    
    
    <script type="text/javascript" src="../xcc_js_css/auto.js"></script>
<script type="text/javascript">

function addrow(){

var tables = $('.table');

var addtr = $("<tr>"+
"<td style='padding-left:140px;padding-top: 25px;'>"+
"<input type='text' id='txtIput' class='auto-inp'/><div class='auto hidden' id='auto'><div class='auto_out'>1</div><div class='auto_out'>2</div></div>"+
"</td>"+
"<td style='padding-left:140px;padding-top: 25px;'><input style='border:1px solid #cccc;' type='text' name='age' /></td>"+
"<td style='padding-left:140px;padding-top: 25px;'><input style='border:1px solid #cccc;' type='text' name='sex' /></td>"+
"<td><span  onclick='deleteTrRow(this);'>&nbsp;删除</span></td>"+
"</tr>");

      addtr.appendTo(tables);     

}

function deleteTrRow(tr){

    //多一个parent就代表向前一个标签,

    //本删除范围为<td><tr>两个标签,即向前两个parent

    //如果多一个parent就会删除整个table

    $(tr).parent().parent().remove();

    }

</script>

	
	<script type="text/javascript">
		var array = ['七里香','b0','b12','b22','b3','b4','b5','b6','如果爱','b7','b8','b2','abd','ab','acd','accd','abd','qq音乐','b1','cd','ccd','cbcv','小王子','cxf','b0'];
		var autoComplete = new AutoComplete("txtIput","auto",array);
		document.getElementById("txtIput").onkeyup = function(event){
			autoComplete.start(event);
		}
	</script>
    


    <script type="text/javascript">
    function yincang(){
    		var traget=document.getElementById("add_edit_div");  
    		var lb=document.getElementById("list_div");  
    		if(traget.style.display=="none"){  
                traget.style.display="block";
                lb.style.display="none";
            }
    	}
    
    </script>
    
    <script>
        //数据采集
        var _maq = _maq || [];
        _maq.push(['sysType', 'B'], ['sysModel', 'DICT_MGR'], ['sysMenu', 'DICT04']);

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