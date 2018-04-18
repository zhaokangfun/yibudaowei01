<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% String path=request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<%@ taglib uri="http://www.springframework.org/tags/form" prefix="fm" %>

<!DOCTYPE html>
<html lang="zh-cn"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edg\e,chrome=1">
    <meta name="description" content="">
    <meta name="Keywords" content="">
    <script type="text/javascript" async="" src="../js/pawj.js"></script>
    <script type="text/javascript" src="../js/switch.js"></script>
    <link rel="stylesheet" href="../css/base_003.css">
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" type="text/css" href="../css/pawj.css">
    <link rel="stylesheet" type="text/css" href="../css/storageManagement.css">
    <title></title>
<script type="text/javascript" src="inboundlist_data/ipquery.html"></script></head>
<body class="static-public-css storage-manage-css">
<div class="content-inner">
    <div class="tab-content clear">
        <table class="m10 full-width-table tab-top">
            <tbody><tr>
                <td style="width: 14%; padding-left: 10px;"><a href="javascript:;" class="btn create-inbound top-btn fl tipso_style" style="margin-bottom: 0;">新增入库</a>
                </td>
                <td style="width: 44%;" class="clear"><span class="form-item-title fl">入库日期：</span>

                    <div class="date fl" style="width: 30%;">
                        <input id="inDateStart" class="input-text indate_list" name="initiation" readonly="readonly" value="2018-03-19" type="text"> <i class="date-icon"></i>
                    </div>
                    <span class="storageDataLine" style="margin: 0 5px;">—</span>
                    <div class="date fl" style="width: 30%;">
                        <input id="inDateEnd" class="input-text indate_list" name="shutoff" readonly="readonly" value="2018-04-18" type="text"> <i class="date-icon"></i>
                    </div>
                </td>
                <td style="width: 25%;"><span class="form-item-title">入库类型：</span>
                    <div class="drop">
                        <input id="inType" class="input-text" readonly="readonly" val=" " value="全部" type="text"> <i class="drop-icon"></i>
                    <ul class="wjzs-drop-menu dsn" style="display: none;"><li class="drop-item drop_even" title="全部" value=" " data-value=" ">全部</li><li class="drop-item drop_odd" title="采购入库" value="1" data-value="1">采购入库</li><li class="drop-item drop_even" title="科室退药" value="2" data-value="2">科室退药</li><li class="drop-item drop_odd" title="调拨入库" value="3" data-value="3">调拨入库</li><li class="drop-item drop_even" title="其它入库" value="9" data-value="9">其它入库</li></ul></div>
                </td>
                <td>
                    <div class="search-box fr" style="margin-right: 10px;">
                        <input id="keyWord" class="input-text fl" placeholder="入库单号" type="text">
                        <a href="javascript:;" id="btnSearch" class="btn search-btn js_search_btn fl"></a>
                    </div>
                </td>
            </tr>
        </tbody></table>
        <div class="table_content_wrap fixed-head">
            <div class="table_content">
                <div class="tableBox-head">
                    <table class="common-table full-width-table">
                        <tbody><tr>
                            <th width="12%">入库单号</th>
                            <th width="10%">入库日期</th>
                            <th width="8%">入库方式</th>
                            <th width="15%">供应商</th>
                            <th width="8%">入库总金额（元）</th>
                            <th width="6%">状态</th>
                            <th>操作</th>
                        </tr>
                    </tbody></table>
                </div>
                <div class="tableBox-cont">
                    <table id="warehousing_table" class="common-table full-width-table"><tbody>
                    <c:forEach items="${list}" var="b">
                    
                    	<tr>
                    		<td data-id="13293950eb8147e88f5385ba6772a5d3" width="12%">${b.rknumber}</td>
                    		<td width="10%">${b.rktime}</td>
                    		<td width="8%">${b.rkfs.rktype}</td>
                    		<td style="text-align: right;padding-right:9px;" width="8%">${b.gys.gysname}</td>
                    		<td style="color: red;" width="6%">未确认</td><td><a href="javascript:void(0);" onclick="inboundEdit.editPageClick(this);">修改</a>
                    		<a href="javascript:void(0);" onclick="inboundConfirm.confirmPageClick(this);">确认</a>
                    		<a href="javascript:void(0);" onclick="inBound.delInboundDoc(this);">删除</a>
                    		</td>
                    		</tr>
                    	</c:forEach>
                    		</tbody></table>
                </div>
            </div>
        </div>
        <div id="my-page" class="page-nav table-page"><div class="pagination_tips">                                    共<span class="pagination_counts">8</span>条数据                                     <div class="pagination_select">                                        <span class="pagination_cell_count">20</span>                                        <span class="pagination_arrow"></span>                                        <div class="pagination_options_panel" style=""><span class="pagination_option" value="50">50</span><span class="pagination_option" value="20">20</span><span class="pagination_option" value="10">10</span></div>                                    </div> 条/页                            </div></div>

    </div>
    <!-- end of .tab-content -->

    <!--右侧浮动侧边窗-->
    <div class="tips-floating-wrap" style="display: block;">
        <div class="tips-floating tips-floating-hide">
            <div class="no-longer-tips">
                <div class="no-longer-tips-text">不再提示</div>
            </div>
            <div class="tips-guide">
                <div class="guide-bird"></div>
                <div class="guide-text">安安指引</div>
            </div>
            <div class="tips-list">
                <ul>
                    <li>新增入库</li>
                </ul>
            </div>
        </div>
        <div class="pop-sure tips-floating-pop">
            <div class="pop_head">
                <div class="remind"> 确认要关闭安安引导吗？</div>
                <span class="close">x</span>
            </div>
            <div class="pop_content">
                <div class="sure-content">
                    <div>如需再次了解具体操作，以后可以进入右上角的帮助中心学习，</div>
                    <div>以后此页面不会再弹出引导。</div>
                </div>
                <div class="content_bottom">
                    <div class="bottom_btn btn-cancel">取消</div>
                    <div class="bottom_btn make_sure">确认</div>
                </div>
            </div>

        </div>

    </div>

</div>
<!-- end of .content-inner -->
<!-- end of .wrapper -->
<script type="text/javascript" src="../js/pawj-pro.js"></script>
<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/drugUtils.js"></script>
<script type="text/javascript" src="../js/inbound.js"></script>
<script type="text/javascript" src="../js/inboundlist.js"></script>
<script type="text/javascript" src="../js/cache.js"></script>
<script type="text/javascript" src="../js/tipso.js"></script>
<script type="text/javascript" src="../js/setTipsoEvent.js"></script>
<script type="text/javascript">
    //数据采集
    var _maq = _maq || [];
    _maq.push(['sysType', 'B'], ['sysModel', 'DRUG'], ['sysMenu', 'DRUG03']);

    function async_ipquery() {
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.src = ('https:' == document.location.protocol ? 'https://ip.ws.126.net/ipquery' : 'http://ip.ws.126.net/ipquery');
        document.getElementsByTagName("head")[0].appendChild(script);
        var collection = document.createElement('script');
        collection.type = 'text/javascript';
        collection.async = true;
        collection.src = '../resources/js/pawj.collection.js';
        var sCollection = document.getElementsByTagName('script')[0];
        sCollection.parentNode.insertBefore(collection, sCollection);
    }

    $(function () {
        if (window.attachEvent) {
            window.attachEvent('onload', async_ipquery);
        } else {
            window.addEventListener('load', async_ipquery);
        }
    });
</script>
</body>
</html>