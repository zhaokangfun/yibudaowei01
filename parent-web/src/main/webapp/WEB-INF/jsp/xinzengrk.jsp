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
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="description" content="">
<meta name="Keywords" content="">
    <script type="text/javascript" async="" src="../js/pawj.js"></script>
    <script type="text/javascript" src="../js/switch.js"></script>
    <script type="text/javascript" src="../js/jquery.autocomplete.js"></script>
    <script type="text/javascript" src="../js/jquery.js"></script>
        <link rel="stylesheet" href="../css/jquery.autocomplete.css">
    <link rel="stylesheet" href="../css/base_003.css">
    <link rel="stylesheet" href="../css//base.css">
<link rel="stylesheet" type="text/css" href="../css/pawj.css">
<link rel="stylesheet" type="text/css" href="../css/storageManagement.css">
<link rel="stylesheet" type="text/css" href="../css/mainDataManagement.css">
<link rel="stylesheet" type="text/css" href="../css/inbound.css">

<title></title>
<link rel="stylesheet" href="inboundedit_data/layer.css" id="layuicss-skinlayercss"><script type="text/javascript" src="inboundedit_data/ipquery.html"></script></head>
<body class="static-public-css storage-manage-css main-data-manage inbound-css">
	<div class="content-inner" style="position: relative;">
		<div class="tab-content clear" id="inboundeditvalidate">
			<div class="bl-title">
				<h2>新增入库</h2>
			</div>
			<table id="inboundDocUI" class="input-table">
				<tbody><tr>
					<td><span class="form-item-title"><i class="necessary">*</i>入库日期：</span>

						<div class="date">
							<input id="inDate" class="input-text indate_list validate(required,date)" name="" readonly="readonly" value="2018-04-19" type="text"> <i class="date-icon"></i>
						</div></td>
					<td><span class="form-item-title fl"><i class="necessary">*</i>入库方式：</span>

						<div class="drop ">
							<input id="inType" class="input-text validate(required)" readonly="readonly" type="text">
							<i class="drop-icon icon"></i>
						<ul class="wjzs-drop-menu dsn" style="display: none;"><li class="drop-item drop_even" title="请选择" value=" " data-value=" ">请选择</li><li class="drop-item drop_odd" title="采购入库" value="1" data-value="1">采购入库</li><li class="drop-item drop_even" title="科室退药" value="2" data-value="2">科室退药</li><li class="drop-item drop_odd" title="调拨入库" value="3" data-value="3">调拨入库</li><li class="drop-item drop_even" title="其它入库" value="9" data-value="9">其它入库</li></ul></div></td>
					<td><span class="form-item-title fl">供应商：</span>
						<div class="drop">
							<input class="input-text input-text-ware" placeholder="编号/名称/五笔码/拼音码" name="" id="vendor" autocomplete="off" type="text"></div></td>
				</tr>
				<tr>
					<td><span class="form-item-title">发票号：</span> <input id="invoiceNum" class="input-text" maxlength="36" type="text"></td>
					<td><span class="form-item-title">备注：</span> <input id="remark" class="input-text" maxlength="50" type="text"></td>
					<td><span class="form-item-title">购入总金额：</span> <input id="totalPrice" class="input-text p-input-disabed " readonly="readonly" type="text"></td>
				</tr>
			</tbody></table>
			<div class="inbound-table fixed-head">
				<div class="inbound-table-content">
                    <div class="tableBox-head">
                        <table class="common-table full-width-table">
                            <tbody><tr>
								<!--<th width="6%">编码</th> -->
                                <th width="10%">药品名称</th>
                                <th width="8%">规格</th>
                                <th width="6%">入库数量</th>
                                <th width="4%">单位</th>
                                <th width="9%">进货价（元）</th>
                                <th width="7%">进货总金额（元）</th>
                                <th width="7%">批号</th>
                                <th width="7%">零售价（元）</th>
                                <th width="7%">零售总金额（元）</th>
                                <th width="8%">有效期</th>
                                <th width="12%">生产商</th>
                                 <th width="10%">产地</th>
                                <th>操作</th>
                            </tr>
                        </tbody></table>
                    </div>
                    <div class="tableBox-cont">
                        <table class="common-table full-width-table" id="projecttable">
                            <tbody><tr id="clone" value="01" style="display: none;" hidden="">
                                <td data-name="drugName" width="10%"></td>
                                <td data-name="drugPackageSpec" width="8%"></td>
                                <td width="6%"><i class="necessary">*</i>
                                <input class="input-text" name="inQty" style="width: 66%;" type="text"></td>
                                <td data-name="drugStoreUnitName" width="4%">盒</td>
                                <td width="9%"><input class="input-text" name="drugInPrice" style="width: 45%;" type="text">&nbsp;&nbsp;元/<span id="recipeUnitName"></span></td>
                                <td width="7%"><input name="unitPrice" readonly="readonly" style="text-align: right;padding-right:9px;" type="text"></td>
                                <td width="7%"><input class="input-text" name="batchNum" maxlength="15" type="text"></td>
                                <td width="7%"><input class="" name="drugRetailPrice" style="width: 45%;" readonly="readonly" type="text">元/<span id="drugRetailUnitName"></span></td>
                                <td width="7%"><input name="drugRetailPriceTotal" readonly="readonly" style="text-align: right;padding-right:9px;" type="text"></td>
                                <td width="8%">
                                	<div class="project-date clear">
	                                    <i class="necessary dsn">*</i>
	                                    <div class="date fr" style="min-width: 100px; width: 100%;">
	                                        <input class="input-text validity" maxlength="10" name="validity" placeholder="请选择日期" type="text"> <i class="date-icon"></i>
	                                    </div>
                                	</div>
                                </td>
                                 <td width="12%">
                                    <div class="drop" style="min-width: 100px; width: 100%;">
                                        <input id="manufactorUI" placeholder="名称" name="manufactor" class="input-text" readonly="readonly" type="text"> <i class="drop-icon"></i>
                                    </div>
                                </td>
                                 <td width="10%">
                                 	<input id="productionPlace" placeholder="产地" class="input-text" style="width: 95%;" type="text">
                                </td>
                                <td style="min-width: 58px"><a href="javascript:;" class="delete">删除</a></td>
                            </tr>
                            <tr id="lastTr">
                                <td colspan="5" width="34%">
                                    <div class="drop">
                                        <input class="input-text input-text-ware" placeholder="编号/名称/条码/五笔码/拼音码" name="kw" class="rph" id="txtJigou" autocomplete="off" type="text">
                                     
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody></table>
                    </div>
				</div>
				<!-- 连锁诊所附加信息 -->
				<div id="chart-info" style="display: none;">
					<div class="fl">
						<span class="form-item-title">来源单号：</span> <a href="javascript:void(0);" class="bill_a" id="bill-source"></a>
					</div>
				</div>
			</div>
			<div class="pop-foot clear inbound-table-btn">
				<!-- <div class="btn-group fl">
					<a href="javascript:;" class="btn" id="select_medicines">选择药品</a>
				</div> -->
				<div class="btn-group fr">
					<a href="javascript:;" class="btn btn-cancel fl">返回</a> 
					<a href="javascript:;" class="btn fl" id="inbound-btn-save" onclick="inboundEdit.editInboundSubmit(this)">保存</a>
					 
				</div>
			</div>
		</div>
		<!-- end of .tab-content -->
	</div>
	<!-- end of .content-inner -->

	<!--出库选择药品弹窗 -->
	<div class="popup popretrieval" style="display: none; position: absolute; top: 10px; left: 30px;">
		<div class="popstyle">
			<div class="poptitle">
				药品选择<span class="close">213123</span>
			</div>
			<div class="popcontent clear">
				<div class="retrivalcon">
					<div class="searchbox clear">
						<span class="form-item-title" style="margin-top: 21px;">药品分类</span>

						<div class="drop" id="drugClassifyUI">
							<input id="classifyType" value="全部" class="input-text" readonly="readonly" type="text"> <i class="drop-icon"></i>
						<ul class="wjzs-drop-menu dsn" style="display: none;"><li class="drop-item drop_even" title="全部" value=" " data-value=" ">全部</li><li class="drop-item drop_odd" title="西药" value="67780CBCA1FC0C72E053086E10ACD8CF" data-value="67780CBCA1FC0C72E053086E10ACD8CF">西药</li><li class="drop-item drop_even" title="中成药" value="67780CBCA1FD0C72E053086E10ACD8CF" data-value="67780CBCA1FD0C72E053086E10ACD8CF">中成药</li><li class="drop-item drop_odd" title="中草药" value="67780CBCA1FE0C72E053086E10ACD8CF" data-value="67780CBCA1FE0C72E053086E10ACD8CF">中草药</li><li class="drop-item drop_even" title="材料" value="67780CBCA1FF0C72E053086E10ACD8CF" data-value="67780CBCA1FF0C72E053086E10ACD8CF">材料</li></ul></div>


						<div class="search-box fr">
							<input id="inboundSearchKey" class="input-text fl" placeholder="编号/名称/五笔码/拼音码" type="text"> <a href="javascript:;" class="btn search-btn js_search_btn fl" onclick="drugIndex.searchDrug()"></a>
						</div>
					</div>
					<table class="retriveltable" id="search_list">
						<tbody><tr>
							<th><i></i></th>
							<th width="10%">编码</th>
							<th width="15%">药品分类</th>
							<th width="25%">药品名称</th>
							<th width="20%">药品规格</th>
							<th width="15%">零售价</th>
							<th width="10%">零售单位</th>
						</tr>
					</tbody></table>
				</div>
				<div class="btn-group fr">
					<a href="javascript:;" class="btn fl" id="retrival-btn">确认</a>
				</div>
			</div>
		</div>
	</div>


	<!-- end of .wrapper -->
	<script type="text/javascript" src="../js/pawj-pro.js"></script>
	<script type="text/javascript" src="../js/layer.js"></script>
	<script type="text/javascript" src="../js/hz2pinyin.js"></script>
	<script type="text/javascript" src="../js/hz2wubi.js"></script>
	<script type="text/javascript" src="../js/pawj_002.js"></script>
	<script type="text/javascript" src="../js/plupload.js"></script>
	<script type="text/javascript" src="../js/cache.js"></script>
	<script type="text/javascript" src="../js/drugUtils.js"></script>
	<script type="text/javascript" src="../js/inbound.js"></script>
	<script type="text/javascript" src="../js/inboundedit.js"></script>
	<script type="text/javascript" src="../js/vendor.js"></script>
	<script type="text/javascript" src="../js/maindata_url.js"></script>
	
	
	<script type="text/javascript">
	
	$(function(){
        $("#txtJigou").autocomplete({
            source: function( request, response ) {
                        $.ajax({
                          url: "testsele",
                          dataType: "json",
                          data: {
                            "name": "中","typeid":"11"
                          },
                          success: function( data1 ) {
                            if(data1.state==1){
                                //data1返回json格式如下
                                response(data1.data);
                            }
                          }
                        });
                    },
            minLength:1,
            autoFocus:true,
            focus: function( event, ui ) {
            $( "#txtJigou" ).val( ui.item.xyname );
                return false;
            },
            select: function( event, ui ) {
                $( "#txtJigou" ).val( ui.item.xyname );
                return false;
            }
        }).autocomplete( "instance" )._renderItem = function( ul, item ) {
        	//这里是自定义显示的数据，我需要显示的数据是上面的data1.data
            return $( "<li>" )
            .append( "<a>" + item.xyname + "<br>" + item.desc + "</a>" )
            .appendTo( ul );
        };
    });
</script>   

<div class="xdsoft_datetimepicker xdsoft_noselect "><div class="xdsoft_datepicker active"><div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button" style="visibility: visible;"></button><div class="xdsoft_label xdsoft_month"><span>四月</span><div class="xdsoft_select xdsoft_monthselect xdsoft_scroller_box"><div style="margin-top: 0px;"><div class="xdsoft_option " data-value="0">一月</div><div class="xdsoft_option " data-value="1">二月</div><div class="xdsoft_option " data-value="2">三月</div><div class="xdsoft_option xdsoft_current" data-value="3">四月</div><div class="xdsoft_option " data-value="4">五月</div><div class="xdsoft_option " data-value="5">六月</div><div class="xdsoft_option " data-value="6">七月</div><div class="xdsoft_option " data-value="7">八月</div><div class="xdsoft_option " data-value="8">九月</div><div class="xdsoft_option " data-value="9">十月</div><div class="xdsoft_option " data-value="10">十一月</div><div class="xdsoft_option " data-value="11">十二月</div></div><div class="xdsoft_scrollbar"><div class="xdsoft_scroller" style="display: block; height: 10px; margin-top: 0px;"></div></div></div></div><div class="xdsoft_label xdsoft_year"><span>2018</span><div class="xdsoft_select xdsoft_yearselect xdsoft_scroller_box"><div style="margin-top: 0px;"><div class="xdsoft_option " data-value="1920">1920</div><div class="xdsoft_option " data-value="1921">1921</div><div class="xdsoft_option " data-value="1922">1922</div><div class="xdsoft_option " data-value="1923">1923</div><div class="xdsoft_option " data-value="1924">1924</div><div class="xdsoft_option " data-value="1925">1925</div><div class="xdsoft_option " data-value="1926">1926</div><div class="xdsoft_option " data-value="1927">1927</div><div class="xdsoft_option " data-value="1928">1928</div><div class="xdsoft_option " data-value="1929">1929</div><div class="xdsoft_option " data-value="1930">1930</div><div class="xdsoft_option " data-value="1931">1931</div><div class="xdsoft_option " data-value="1932">1932</div><div class="xdsoft_option " data-value="1933">1933</div><div class="xdsoft_option " data-value="1934">1934</div><div class="xdsoft_option " data-value="1935">1935</div><div class="xdsoft_option " data-value="1936">1936</div><div class="xdsoft_option " data-value="1937">1937</div><div class="xdsoft_option " data-value="1938">1938</div><div class="xdsoft_option " data-value="1939">1939</div><div class="xdsoft_option " data-value="1940">1940</div><div class="xdsoft_option " data-value="1941">1941</div><div class="xdsoft_option " data-value="1942">1942</div><div class="xdsoft_option " data-value="1943">1943</div><div class="xdsoft_option " data-value="1944">1944</div><div class="xdsoft_option " data-value="1945">1945</div><div class="xdsoft_option " data-value="1946">1946</div><div class="xdsoft_option " data-value="1947">1947</div><div class="xdsoft_option " data-value="1948">1948</div><div class="xdsoft_option " data-value="1949">1949</div><div class="xdsoft_option " data-value="1950">1950</div><div class="xdsoft_option " data-value="1951">1951</div><div class="xdsoft_option " data-value="1952">1952</div><div class="xdsoft_option " data-value="1953">1953</div><div class="xdsoft_option " data-value="1954">1954</div><div class="xdsoft_option " data-value="1955">1955</div><div class="xdsoft_option " data-value="1956">1956</div><div class="xdsoft_option " data-value="1957">1957</div><div class="xdsoft_option " data-value="1958">1958</div><div class="xdsoft_option " data-value="1959">1959</div><div class="xdsoft_option " data-value="1960">1960</div><div class="xdsoft_option " data-value="1961">1961</div><div class="xdsoft_option " data-value="1962">1962</div><div class="xdsoft_option " data-value="1963">1963</div><div class="xdsoft_option " data-value="1964">1964</div><div class="xdsoft_option " data-value="1965">1965</div><div class="xdsoft_option " data-value="1966">1966</div><div class="xdsoft_option " data-value="1967">1967</div><div class="xdsoft_option " data-value="1968">1968</div><div class="xdsoft_option " data-value="1969">1969</div><div class="xdsoft_option " data-value="1970">1970</div><div class="xdsoft_option " data-value="1971">1971</div><div class="xdsoft_option " data-value="1972">1972</div><div class="xdsoft_option " data-value="1973">1973</div><div class="xdsoft_option " data-value="1974">1974</div><div class="xdsoft_option " data-value="1975">1975</div><div class="xdsoft_option " data-value="1976">1976</div><div class="xdsoft_option " data-value="1977">1977</div><div class="xdsoft_option " data-value="1978">1978</div><div class="xdsoft_option " data-value="1979">1979</div><div class="xdsoft_option " data-value="1980">1980</div><div class="xdsoft_option " data-value="1981">1981</div><div class="xdsoft_option " data-value="1982">1982</div><div class="xdsoft_option " data-value="1983">1983</div><div class="xdsoft_option " data-value="1984">1984</div><div class="xdsoft_option " data-value="1985">1985</div><div class="xdsoft_option " data-value="1986">1986</div><div class="xdsoft_option " data-value="1987">1987</div><div class="xdsoft_option " data-value="1988">1988</div><div class="xdsoft_option " data-value="1989">1989</div><div class="xdsoft_option " data-value="1990">1990</div><div class="xdsoft_option " data-value="1991">1991</div><div class="xdsoft_option " data-value="1992">1992</div><div class="xdsoft_option " data-value="1993">1993</div><div class="xdsoft_option " data-value="1994">1994</div><div class="xdsoft_option " data-value="1995">1995</div><div class="xdsoft_option " data-value="1996">1996</div><div class="xdsoft_option " data-value="1997">1997</div><div class="xdsoft_option " data-value="1998">1998</div><div class="xdsoft_option " data-value="1999">1999</div><div class="xdsoft_option " data-value="2000">2000</div><div class="xdsoft_option " data-value="2001">2001</div><div class="xdsoft_option " data-value="2002">2002</div><div class="xdsoft_option " data-value="2003">2003</div><div class="xdsoft_option " data-value="2004">2004</div><div class="xdsoft_option " data-value="2005">2005</div><div class="xdsoft_option " data-value="2006">2006</div><div class="xdsoft_option " data-value="2007">2007</div><div class="xdsoft_option " data-value="2008">2008</div><div class="xdsoft_option " data-value="2009">2009</div><div class="xdsoft_option " data-value="2010">2010</div><div class="xdsoft_option " data-value="2011">2011</div><div class="xdsoft_option " data-value="2012">2012</div><div class="xdsoft_option " data-value="2013">2013</div><div class="xdsoft_option " data-value="2014">2014</div><div class="xdsoft_option " data-value="2015">2015</div><div class="xdsoft_option " data-value="2016">2016</div><div class="xdsoft_option " data-value="2017">2017</div><div class="xdsoft_option xdsoft_current" data-value="2018">2018</div><div class="xdsoft_option " data-value="2019">2019</div><div class="xdsoft_option " data-value="2020">2020</div><div class="xdsoft_option " data-value="2021">2021</div><div class="xdsoft_option " data-value="2022">2022</div><div class="xdsoft_option " data-value="2023">2023</div><div class="xdsoft_option " data-value="2024">2024</div><div class="xdsoft_option " data-value="2025">2025</div><div class="xdsoft_option " data-value="2026">2026</div><div class="xdsoft_option " data-value="2027">2027</div><div class="xdsoft_option " data-value="2028">2028</div><div class="xdsoft_option " data-value="2029">2029</div><div class="xdsoft_option " data-value="2030">2030</div><div class="xdsoft_option " data-value="2031">2031</div><div class="xdsoft_option " data-value="2032">2032</div><div class="xdsoft_option " data-value="2033">2033</div><div class="xdsoft_option " data-value="2034">2034</div><div class="xdsoft_option " data-value="2035">2035</div><div class="xdsoft_option " data-value="2036">2036</div><div class="xdsoft_option " data-value="2037">2037</div><div class="xdsoft_option " data-value="2038">2038</div><div class="xdsoft_option " data-value="2039">2039</div><div class="xdsoft_option " data-value="2040">2040</div><div class="xdsoft_option " data-value="2041">2041</div><div class="xdsoft_option " data-value="2042">2042</div><div class="xdsoft_option " data-value="2043">2043</div><div class="xdsoft_option " data-value="2044">2044</div><div class="xdsoft_option " data-value="2045">2045</div><div class="xdsoft_option " data-value="2046">2046</div><div class="xdsoft_option " data-value="2047">2047</div><div class="xdsoft_option " data-value="2048">2048</div><div class="xdsoft_option " data-value="2049">2049</div><div class="xdsoft_option " data-value="2050">2050</div></div><div class="xdsoft_scrollbar"><div class="xdsoft_scroller" style="display: block; height: 10px; margin-top: 0px;"></div></div></div></div><button type="button" class="xdsoft_next"></button></div><div class="xdsoft_calendar"><table><thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead><tbody><tr><td data-date="1" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend"><div>1</div></td><td data-date="2" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week1 xdsoft_date"><div>2</div></td><td data-date="3" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week2 xdsoft_date"><div>3</div></td><td data-date="4" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week3 xdsoft_date"><div>4</div></td><td data-date="5" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week4 xdsoft_date"><div>5</div></td><td data-date="6" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week5 xdsoft_date"><div>6</div></td><td data-date="7" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_weekend"><div>7</div></td></tr><tr><td data-date="8" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend"><div>8</div></td><td data-date="9" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week1 xdsoft_date"><div>9</div></td><td data-date="10" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week2 xdsoft_date"><div>10</div></td><td data-date="11" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week3 xdsoft_date"><div>11</div></td><td data-date="12" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week4 xdsoft_date"><div>12</div></td><td data-date="13" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week5 xdsoft_date"><div>13</div></td><td data-date="14" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_weekend"><div>14</div></td></tr><tr><td data-date="15" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_weekend"><div>15</div></td><td data-date="16" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week1 xdsoft_date"><div>16</div></td><td data-date="17" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week2 xdsoft_date"><div>17</div></td><td data-date="18" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week3 xdsoft_date"><div>18</div></td><td data-date="19" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_current xdsoft_today"><div>19</div></td><td data-date="20" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"><div>20</div></td><td data-date="21" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"><div>21</div></td></tr><tr><td data-date="22" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"><div>22</div></td><td data-date="23" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"><div>23</div></td><td data-date="24" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled"><div>24</div></td><td data-date="25" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled"><div>25</div></td><td data-date="26" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled"><div>26</div></td><td data-date="27" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled"><div>27</div></td><td data-date="28" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_weekend"><div>28</div></td></tr><tr><td data-date="29" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week0 xdsoft_date xdsoft_disabled xdsoft_weekend"><div>29</div></td><td data-date="30" data-month="3" data-year="2018" class="xdsoft_date xdsoft_day_of_week1 xdsoft_date xdsoft_disabled"><div>30</div></td><td data-date="1" data-month="4" data-year="2018" class="xdsoft_date xdsoft_day_of_week2 xdsoft_date xdsoft_disabled xdsoft_other_month"><div>1</div></td><td data-date="2" data-month="4" data-year="2018" class="xdsoft_date xdsoft_day_of_week3 xdsoft_date xdsoft_disabled xdsoft_other_month"><div>2</div></td><td data-date="3" data-month="4" data-year="2018" class="xdsoft_date xdsoft_day_of_week4 xdsoft_date xdsoft_disabled xdsoft_other_month"><div>3</div></td><td data-date="4" data-month="4" data-year="2018" class="xdsoft_date xdsoft_day_of_week5 xdsoft_date xdsoft_disabled xdsoft_other_month"><div>4</div></td><td data-date="5" data-month="4" data-year="2018" class="xdsoft_date xdsoft_day_of_week6 xdsoft_date xdsoft_disabled xdsoft_other_month xdsoft_weekend"><div>5</div></td></tr></tbody></table></div></div><div class="xdsoft_timepicker"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box xdsoft_scroller_box"><div class="xdsoft_time_variant" style="margin-top: 0px;"><div class="xdsoft_time xdsoft_current" data-hour="0" data-minute="0">00:00</div><div class="xdsoft_time " data-hour="1" data-minute="0">01:00</div><div class="xdsoft_time " data-hour="2" data-minute="0">02:00</div><div class="xdsoft_time " data-hour="3" data-minute="0">03:00</div><div class="xdsoft_time " data-hour="4" data-minute="0">04:00</div><div class="xdsoft_time " data-hour="5" data-minute="0">05:00</div><div class="xdsoft_time " data-hour="6" data-minute="0">06:00</div><div class="xdsoft_time " data-hour="7" data-minute="0">07:00</div><div class="xdsoft_time " data-hour="8" data-minute="0">08:00</div><div class="xdsoft_time " data-hour="9" data-minute="0">09:00</div><div class="xdsoft_time " data-hour="10" data-minute="0">10:00</div><div class="xdsoft_time " data-hour="11" data-minute="0">11:00</div><div class="xdsoft_time " data-hour="12" data-minute="0">12:00</div><div class="xdsoft_time " data-hour="13" data-minute="0">13:00</div><div class="xdsoft_time " data-hour="14" data-minute="0">14:00</div><div class="xdsoft_time " data-hour="15" data-minute="0">15:00</div><div class="xdsoft_time " data-hour="16" data-minute="0">16:00</div><div class="xdsoft_time " data-hour="17" data-minute="0">17:00</div><div class="xdsoft_time " data-hour="18" data-minute="0">18:00</div><div class="xdsoft_time " data-hour="19" data-minute="0">19:00</div><div class="xdsoft_time " data-hour="20" data-minute="0">20:00</div><div class="xdsoft_time " data-hour="21" data-minute="0">21:00</div><div class="xdsoft_time " data-hour="22" data-minute="0">22:00</div><div class="xdsoft_time " data-hour="23" data-minute="0">23:00</div></div><div class="xdsoft_scrollbar"><div class="xdsoft_scroller" style="display: block; height: 10px; margin-top: 0px;"></div></div></div><button type="button" class="xdsoft_next"></button></div></div><div class="loading-mask" style="display: none;"><span class="loading-content"></span></div></body></html>