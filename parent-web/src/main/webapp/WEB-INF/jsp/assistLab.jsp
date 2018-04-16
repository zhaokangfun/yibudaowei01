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
<head >
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
<script type="text/javascript" async="" src="assistLab_files/pawj.js"></script>
<script src="assistLab_files/CLodopfuncs.js"></script>
<script src="assistLab_files/CLodopfuncs_002.js"></script>
<script src="assistLab_files/CLodopfuncs_003.js"></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="">
    <meta name="Keywords" content="">
    <link rel="stylesheet" href="assistLab_files/base.css">
	<link rel="stylesheet" href="assistLab_files/base_002.css">
	<link rel="stylesheet" type="text/css" href="assistLab_files/pawj.css">
    <link rel="stylesheet" type="text/css" href="assistLab_files/doctorWorkstation.css">
    <title>检验项目</title>
<link rel="stylesheet" href="assistLab_files/layer.css" id="layuicss-skinlayercss">
<script type="text/javascript" src="assistLab_files/ipquery.html"></script>
</head>
<body>
 <div class="content-inner">
        <div class="tab-content jyjc clear">
            <div class="tab-content-top clear">
                <div class="choose-jyjc">
                    <a class="jyjc-btn current" href="javascript:;" id="jy">检验</a>
                    <a class="jyjc-btn " href="javascript:;" id="jc">检查</a>
                </div>	

                <div class="popup popup-model dsn" style="">
                    <div class="popstyle">
                        <div class="poptitle">检验检查模板<span class="close"></span>
                        </div>
	                   <div class="popsearch static-public-css">
                           <input id="tempSearchInputId" class="search-input" placeholder="输入名称搜索" type="text">
                           <a href="javascript:;" class="btn search-btn js_search_btn" id="tempSearchBtnId"></a>
	                   </div>
                        <div class="popcontent">
                            <div class="popCon">
                                <dl id="acAndLc_planform_tmpl">
                                </dl>
                                <dl id="acAndLc_person_tmpl">
                                </dl>
                            </div>
                            <p id="noDataHint" class="noDataHint dsn">暂无模板数据！</p>
                            <!--  end of .popCon -->
                        </div>
                        <!-- end of .popcontent -->
                    </div>
                    <!-- end of .popstyle -->
                </div>
                <!-- end of .popup -->    
            </div>
            <!-- end of .tab-content-top -->
            
            <div class="table-wrapper">
    			<div id="tm_code" style="position:absolute;top:20px;left:20px;z-index:-1;display:none;width:100px;height:50px"></div>
    			<div id="barCode" style="position:absolute;top:20px;left:20px;z-index:-1;display:none;width:100px;height:50px"></div>
                <table class="common-table full-width-table nodata" id="jy_table">
                    <tbody><tr>
                        <th width="30%">项目名称</th>
                        <th>标本</th>
                        <th class="priceTh" width="10%">单价(元)</th>
                        <th style="min-width: 70px;" width="20%">操作</th>
                    </tr>
                    </tbody><tbody id="table_lc"><tr del_flag="1" class="lc_newtr"><td class="lc_pro input-think"><input class="_lc_tab_ip_pro validate(maxlength(50))" maxlength="50" placeholder="项目名称/五笔码/拼音码/编码" autocomplete="off" type="text"><input class="_lc_tab_ip_pro_id validate(required, maxlength(36))" value="" type="hidden"><ul class="think-box" style="width: 200%; left: 0px; display: none;"></ul></td><td class="sample input-think"><input class="_lc_tab_ip_sample" readonly="readonly" placeholder="标本" type="text"><input class="_lc_tab_ip_sample_id validate(required, maxlength(36))" value="" type="hidden"></td><td class="price"><input class="_lc_tab_ip_price" value="0.00" type="text"></td><td><a class="delete" href="javascript:;" onclick="_acMain.logicDeleteDwsLcByID(null,this)">删除</a></td></tr></tbody>
                </table>

                <table class="common-table full-width-table dsn nodata" id="jc_table">
                    <tbody><tr>
                        <th width="30%">项目名称</th>
                        <th width="20%">部位</th>
                        <th>检查目的</th>
                        <th class="priceTh" width="10%">单价(元)</th>
                        <th style="min-width: 70px;" width="20%">操作</th>
                    </tr>
                    </tbody><tbody id="table_ac"><tr del_flag="1" class="ac_newtr"><td class="ac_pro input-think"><input class="_ac_tab_ip_pro validate(maxlength(50))" maxlength="50" placeholder="项目名称/五笔码/拼音码/编码" autocomplete="off" type="text"><input class="_ac_tab_ip_pro_id validate(required, maxlength(36))" value="" type="hidden"></td><td class="part input-think"><div class="drop drop-checkbox-wrap" style="height: 2px;"><div class="wjzs-drop-show"></div><input class="input-text _ac_tab_ip_part" placeholder="部位" id="WJZS_DropCheckbox1" readonly="readonly" val="" type="text"><i class="drop-icon"></i><ul class="wjzs-drop-menu dsn checkbox-box wjzs-drop-checkbox-menu" style="top: 28px;"><li class="drop-item checkbox-item drop_even drop_over" title="胸部" value="67780CBCA1600C72E053086E10ACD8CF" data-value="67780CBCA1600C72E053086E10ACD8CF"><input id="67780CBCA1600C72E053086E10ACD8CF" class="" type="checkbox"><span>胸部</span></li><li class="drop-item checkbox-item drop_odd" title="腹部" value="67780CBCA15F0C72E053086E10ACD8CF" data-value="67780CBCA15F0C72E053086E10ACD8CF"><input id="67780CBCA15F0C72E053086E10ACD8CF" class="" type="checkbox"><span>腹部</span></li><li class="drop-item checkbox-item drop_even" title="头部" value="67780CBCA15E0C72E053086E10ACD8CF" data-value="67780CBCA15E0C72E053086E10ACD8CF"><input id="67780CBCA15E0C72E053086E10ACD8CF" class="" type="checkbox"><span>头部</span></li><li class="drop-item checkbox-item drop_odd" title="脊柱" value="67780CBCA14C0C72E053086E10ACD8CF" data-value="67780CBCA14C0C72E053086E10ACD8CF"><input id="67780CBCA14C0C72E053086E10ACD8CF" class="" type="checkbox"><span>脊柱</span></li><li class="drop-item checkbox-item drop_even" title="鼻副窦" value="67780CBCA15A0C72E053086E10ACD8CF" data-value="67780CBCA15A0C72E053086E10ACD8CF"><input id="67780CBCA15A0C72E053086E10ACD8CF" class="" type="checkbox"><span>鼻副窦</span></li><li class="drop-item checkbox-item drop_odd" title="上肢" value="67780CBCA1570C72E053086E10ACD8CF" data-value="67780CBCA1570C72E053086E10ACD8CF"><input id="67780CBCA1570C72E053086E10ACD8CF" class="" type="checkbox"><span>上肢</span></li><li class="drop-item checkbox-item drop_even" title="下肢" value="67780CBCA15D0C72E053086E10ACD8CF" data-value="67780CBCA15D0C72E053086E10ACD8CF"><input id="67780CBCA15D0C72E053086E10ACD8CF" class="" type="checkbox"><span>下肢</span></li><li class="drop-item checkbox-item drop_odd" title="骨盆" value="67780CBCA14F0C72E053086E10ACD8CF" data-value="67780CBCA14F0C72E053086E10ACD8CF"><input id="67780CBCA14F0C72E053086E10ACD8CF" class="" type="checkbox"><span>骨盆</span></li><li class="drop-item checkbox-item drop_even" title="心" value="67780CBCA1520C72E053086E10ACD8CF" data-value="67780CBCA1520C72E053086E10ACD8CF"><input id="67780CBCA1520C72E053086E10ACD8CF" class="" type="checkbox"><span>心</span></li><li class="drop-item checkbox-item drop_odd" title="肝" value="67780CBCA14A0C72E053086E10ACD8CF" data-value="67780CBCA14A0C72E053086E10ACD8CF"><input id="67780CBCA14A0C72E053086E10ACD8CF" class="" type="checkbox"><span>肝</span></li><li class="drop-item checkbox-item drop_even" title="胆" value="67780CBCA1610C72E053086E10ACD8CF" data-value="67780CBCA1610C72E053086E10ACD8CF"><input id="67780CBCA1610C72E053086E10ACD8CF" class="" type="checkbox"><span>胆</span></li><li class="drop-item checkbox-item drop_odd" title="脾" value="67780CBCA1540C72E053086E10ACD8CF" data-value="67780CBCA1540C72E053086E10ACD8CF"><input id="67780CBCA1540C72E053086E10ACD8CF" class="" type="checkbox"><span>脾</span></li><li class="drop-item checkbox-item drop_even" title="胰" value="67780CBCA14D0C72E053086E10ACD8CF" data-value="67780CBCA14D0C72E053086E10ACD8CF"><input id="67780CBCA14D0C72E053086E10ACD8CF" class="" type="checkbox"><span>胰</span></li><li class="drop-item checkbox-item drop_odd" title="肾" value="67780CBCA1530C72E053086E10ACD8CF" data-value="67780CBCA1530C72E053086E10ACD8CF"><input id="67780CBCA1530C72E053086E10ACD8CF" class="" type="checkbox"><span>肾</span></li><li class="drop-item checkbox-item drop_even" title="输尿管" value="67780CBCA1550C72E053086E10ACD8CF" data-value="67780CBCA1550C72E053086E10ACD8CF"><input id="67780CBCA1550C72E053086E10ACD8CF" class="" type="checkbox"><span>输尿管</span></li><li class="drop-item checkbox-item drop_odd" title="膀胱" value="67780CBCA14B0C72E053086E10ACD8CF" data-value="67780CBCA14B0C72E053086E10ACD8CF"><input id="67780CBCA14B0C72E053086E10ACD8CF" class="" type="checkbox"><span>膀胱</span></li><li class="drop-item checkbox-item drop_even" title="前列腺" value="67780CBCA1560C72E053086E10ACD8CF" data-value="67780CBCA1560C72E053086E10ACD8CF"><input id="67780CBCA1560C72E053086E10ACD8CF" class="" type="checkbox"><span>前列腺</span></li><li class="drop-item checkbox-item drop_odd" title="子宫" value="67780CBCA1500C72E053086E10ACD8CF" data-value="67780CBCA1500C72E053086E10ACD8CF"><input id="67780CBCA1500C72E053086E10ACD8CF" class="" type="checkbox"><span>子宫</span></li><li class="drop-item checkbox-item drop_even" title="附件" value="67780CBCA15C0C72E053086E10ACD8CF" data-value="67780CBCA15C0C72E053086E10ACD8CF"><input id="67780CBCA15C0C72E053086E10ACD8CF" class="" type="checkbox"><span>附件</span></li><li class="drop-item checkbox-item drop_odd" title="血管" value="67780CBCA1510C72E053086E10ACD8CF" data-value="67780CBCA1510C72E053086E10ACD8CF"><input id="67780CBCA1510C72E053086E10ACD8CF" class="" type="checkbox"><span>血管</span></li><li class="drop-item checkbox-item drop_even" title="乳腺" value="67780CBCA15B0C72E053086E10ACD8CF" data-value="67780CBCA15B0C72E053086E10ACD8CF"><input id="67780CBCA15B0C72E053086E10ACD8CF" class="" type="checkbox"><span>乳腺</span></li><li class="drop-item checkbox-item drop_odd" title="甲状腺" value="67780CBCA1580C72E053086E10ACD8CF" data-value="67780CBCA1580C72E053086E10ACD8CF"><input id="67780CBCA1580C72E053086E10ACD8CF" class="" type="checkbox"><span>甲状腺</span></li><li class="drop-item checkbox-item drop_even" title="体表" value="67780CBCA1480C72E053086E10ACD8CF" data-value="67780CBCA1480C72E053086E10ACD8CF"><input id="67780CBCA1480C72E053086E10ACD8CF" class="" type="checkbox"><span>体表</span></li><li class="drop-item checkbox-item drop_odd" title="胃" value="67780CBCA14E0C72E053086E10ACD8CF" data-value="67780CBCA14E0C72E053086E10ACD8CF"><input id="67780CBCA14E0C72E053086E10ACD8CF" class="" type="checkbox"><span>胃</span></li><li class="drop-item checkbox-item drop_even" title="左" value="67780CBCA1490C72E053086E10ACD8CF" data-value="67780CBCA1490C72E053086E10ACD8CF"><input id="67780CBCA1490C72E053086E10ACD8CF" class="" type="checkbox"><span>左</span></li><li class="drop-item checkbox-item drop_odd" title="右" value="67780CBCA1590C72E053086E10ACD8CF" data-value="67780CBCA1590C72E053086E10ACD8CF"><input id="67780CBCA1590C72E053086E10ACD8CF" class="" type="checkbox"><span>右</span></li></ul></div></td><td class="illstat"><input class="_ac_tab_ip_illstat" maxlength="60" placeholder="检查目的" type="text"></td><td class="price"><input class="_ac_tab_ip_price" value="0.00" type="text"></td><td><a id="td_ac_opetion_0" href="javascript:;" class="delete" onclick="_acMain.logicDeleteDwsAcByID(null,this)">删除</a></td></tr></tbody>
                </table>

                <div class="total-price">
                    <div class="total-price-left">总价（元）：<input class="fr" name="" id="sumprice_acAndlc" readonly="readonly" value="0.00" type="text"></div>
                </div>
                    
            </div>
            <!-- end of .table-wrapper -->
            
            
            
            <div class="jyjc-footBtn clear">
                <span class="btn submit-btn fr ac_submit dsn" id="saveBtn" style="display: inline;">保存</span>
                <span class="btn submit-btn fr dsn" id="editeBtn" style="display: none;">修改</span>
                <span class="btn submit-btn fr dsn" id="sendBtn" style="display: none;">发送检验申请</span>
                <span class="btn submit-btn fr dsn" id="xiKangSendBtn" style="display: none;">申请熙康检测</span>
                
            </div>

            <div class="historyRecord"></div>
        </div>
        <!-- end of .tab-content -->
        <div class="pop-over " id="showTransaction" style="display:none;margin:0 auto;">
	        <div class=" popschset popup" style="overflow:auto; left:50%; top:5%; margin-left:-400px; width:900px; padding-top:10px;background: #f9f9f9;">
		        <div class="popstyle" id="showData">
		        </div>
	        </div>
        </div>
    </div>
    <!-- end of .popup_plan -->
    
    <!--start 熙康一体机弹出框 -->
	<div id="xk_edit_div" class="xk_pop_wrap dsn">
        <table class="xk_pop_table">
            <tbody><tr>
                <td>
                    <div class="xk_pop popup" style="">
                        <div class="popstyle">
                            <div class="xk_top poptitle">
                                	请选择检测项目
                                <span class="xk_close close"></span>
                            </div>
                            <div class="popcontent">
                                <div id="xkChooseBox" class="xk_content">
                                    <ul class="checkboxes">
                                    	<li id="xkNcg">尿常规</li>
                                    	<li id="xkEcg">心电图</li>
                                    </ul>
                                    <ul class="checkboxes">
                                        <li id="xkCheckAll">全选</li>
                                    </ul>
                                    <ul class="checkboxes dsn">
                                    	<li id="xkBloodPressure">血压</li>
                                    	<li id="xkHeartRate">心率</li>
                                    </ul>
                                    <ul class="checkboxes dsn">
                                    	<li id="xkBloodGlucose">血糖</li>
                                    	<li id="xkBloodOxygen">血氧</li>
                                    </ul>
                                    <ul class="checkboxes dsn">
                                    	<li id="xkBodyTemperature">体温</li>
                                    </ul>
                                </div>
                                <div class="xk_btn_cell fr">
                                    <div class="btn_box clear">
                                        <span class="active_btn border_theme_color btn normal-inverse-btn fr" id="xkChooseConfirm">确认</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody></table>
    </div>
    <!--end 熙康一体机弹出框 -->
    <script type="text/javascript" src="assistLab_files/jquery.js"></script>
    <script type="text/javascript" src="assistLab_files/public.js"></script>
    <script type="text/javascript" src="assistLab_files/pawj_002.js"></script>
    <script type="text/javascript" src="assistLab_files/switch.js"></script>
    <script type="text/javascript" src="assistLab_files/layer.js"></script>
    <script type="text/javascript" src="assistLab_files/underscore-min.js"></script>
    
    <script type="text/javascript" src="assistLab_files/jquery-barcode.js"></script>
    <script type="text/javascript" src="assistLab_files/html2canvas.js"></script>
    
    <script type="text/javascript" src="assistLab_files/slidelf.js"></script>
    <script type="text/javascript" src="assistLab_files/cache.js"></script>
    <script type="text/javascript" src="assistLab_files/print.js"></script>
    <script type="text/javascript" src="assistLab_files/jquery_002.js"></script>
    <script type="text/javascript" src="assistLab_files/cacheMap.js"></script>
    <script type="text/javascript" src="assistLab_files/docstation_url.js"></script>
    <script type="text/javascript" src="assistLab_files/assistCheckHistory.js"></script>
    <script type="text/javascript" src="assistLab_files/assistCheck.js"></script>
    <script type="text/javascript" src="assistLab_files/checkOutAndInspectPrint.js"></script>
    <script type="text/javascript" src="assistLab_files/printUtils.js"></script>
    <script type="text/javascript" src="assistLab_files/doctorWorkstationPrint.js"></script>
    <script type="text/javascript" src="assistLab_files/hmoPrint.js"></script>
    <script type="text/javascript" src="assistLab_files/checkOutAndInspectPrint.js"></script>
    <script type="text/javascript" src="assistLab_files/tp_audit.js"></script>
    <script type="text/javascript">
	  //数据采集      
	    var _maq = _maq || [];
	    _maq.push(['sysType', 'B'],['sysModel', 'HZZX'],['sysMenu', 'OPC_DWS01']);
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


<div class="loading-mask" style="display: none;"><span class="loading-content"></span></div>

</body>
</html>