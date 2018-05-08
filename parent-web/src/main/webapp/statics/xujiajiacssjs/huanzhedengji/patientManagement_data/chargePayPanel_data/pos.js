var pos;function PosMachine(settings){var _posIsAvailableKey_="_posIsAvailable_";var _posIsAvailable_="Available";var _posIsNotAvailable_="NotAvailable";var that=this;var port=8054;var url=WJBox_Server;var huiyiObj;var stateConst={Ready:0,Busy:1,Disabled:2};var tradingMaskMode={DEFAULT:"0",PAY_BLUETOOTH:"0",PAY_SCAN:"1",REFUND_BLUETOOTH:"2",REFUND_SCAN:"3"};var state=stateConst.Disabled;var payOrderId;var callbackFun;var options={};var tradingMask;var tranCodeConst={GetTermInfo:"942",QRCodePay:"905",CardPay:"902",CardRefund:"904"};var loopOption={loopId:null,interval:5000,maxCount:36,currentCount:0};this.payCallbackRespCodeConst={Success:0,Fail:1,NotReturn:2};this.pushTypeConst={SCAN:"0",API:"1",BLUETOOTH:"2"};this.unionPayCard=function(param,callback){if(!commonValiPayParam(param)){return}param.tran_cd=tranCodeConst.CardPay;return invokeHuiyiPay(param,callback)};this.qrCode=function(param,callback){if(!commonValiPayParam(param)){return}param.tran_cd=tranCodeConst.QRCodePay;enableScanGun(param.order_id);return invokeHuiyiPay(param,callback)};this.testAvailable=function(callback,force){callbackFun=callback;if(_posIsAvailable_==sessionStorage.getItem(_posIsAvailableKey_)&&!force){invokeCallBack(true)}else{if(_posIsNotAvailable_==sessionStorage.getItem(_posIsAvailableKey_)&&!force){invokeCallBack(false)}else{if(huiyiObj.readyState!=WebSocket.OPEN){sessionStorage.setItem(_posIsAvailableKey_,_posIsNotAvailable_);invokeCallBack(false);return}var param={tran_cd:tranCodeConst.GetTermInfo};invokeHuiyi(param)}}};this.unionPayCardRefund=function(param,callback){if(!commonValiRefundParam(param)){return}if(param.push_type==that.pushTypeConst.SCAN){invokeScanUnionPayCardRefund(param,callback)}else{if(param.push_type==that.pushTypeConst.BLUETOOTH){invokeHuiyiUnionPayCardRefund(param,callback)}else{alert("不支持该推送类型的支付记录退费")}}};init();function init(){options=$.extend({},options,settings);initTradingMask();if("WebSocket" in window){huiyiObj=new WebSocket(url,"protocol-pos-ld")}else{if("MozWebSocket" in window){huiyiObj=new MozWebSocket(url,"protocol-pos-ld")}}huiyiObj.addEventListener("message",function(event){handleMessage(event)});huiyiObj.addEventListener("error",function(event){handleError(event)});huiyiObj.addEventListener("open",function(event){handleOpen(event)});huiyiObj.addEventListener("close",function(event){handleClose(event)})}function handleMessage(event){var ret=parseJSON(event.data);var tranCode=ret.code;if(tranCode==tranCodeConst.GetTermInfo){var getTermInfoRet=ret.data;var posState=false;if(!getTermInfoRet){sessionStorage.setItem(_posIsAvailableKey_,_posIsNotAvailable_)}else{ret=parseJSON(getTermInfoRet)}if(ret.resp_cd=="00"){sessionStorage.setItem(_posIsAvailableKey_,_posIsAvailable_);posState=true}else{sessionStorage.setItem(_posIsAvailableKey_,_posIsNotAvailable_)}invokeCallBack(posState)}else{if(tranCode==tranCodeConst.CardPay||tranCode==tranCodeConst.QRCodePay){if(!loopOption.loopId){var payRet=ret.data;if(!payRet){switchScanMode();return}ret=parseJSON(payRet);if(!isPosAvailableByRespCode(ret.resp_cd)){switchScanMode();return}var updateRsp=updateOrderStatus(payOrderId,ret,tranCode);var resp={respCode:that.payCallbackRespCodeConst.Success};if(!updateRsp.updateRet){resp.respCode=that.payCallbackRespCodeConst.Fail;resp.respMsg=updateRsp.retMsg}if(ret.resp_cd!="00"){resp.respCode=that.payCallbackRespCodeConst.Fail;updateMsg=(!resp.respMsg?"":(" 更新运营平台状态提示："+resp.respMsg));if(!ret.resp_msg&&ret.resp_cd=="01"){resp.respMsg="用户取消"+updateMsg}else{resp.respMsg=ret.resp_msg+updateMsg}}invokeCallBack(resp)}}else{if(tranCode==tranCodeConst.CardRefund){var payRet=ret.data;if(!payRet){invokeCallBack({respCode:that.payCallbackRespCodeConst.Fail,respMsg:"POS未返回信息"});return}ret=parseJSON(payRet);var updateRsp=updateOrderStatus(payOrderId,ret,tranCode);var resp={respCode:that.payCallbackRespCodeConst.Success};if(!updateRsp.updateRet){resp.respCode=that.payCallbackRespCodeConst.Fail;resp.respMsg=updateRsp.retMsg}if(ret.resp_cd!="00"){resp.respCode=that.payCallbackRespCodeConst.Fail;updateMsg=(!resp.respMsg?"":(" 更新运营平台状态提示："+resp.respMsg));if(!ret.resp_msg&&ret.resp_cd=="01"){resp.respMsg="用户取消"+updateMsg}else{resp.respMsg=ret.resp_msg+updateMsg}}invokeCallBack(resp)}else{alert("交易代码返回有误："+tranCode)}}}}function handleError(event){handleClose(event)}function handleOpen(event){state=stateConst.Ready;that.testAvailable()}function handleClose(event){state=stateConst.Disabled;switchScanMode()}function invokeScanUnionPayCardRefund(param,callback){var qrCode=param.qr_code;var tranAmt=param.tran_amt;payOrderId=param.order_id;showTradingMask(qrCode,tranAmt);switchRefundScanMode();callbackFun=callback}function invokeHuiyiUnionPayCardRefund(param,callback){var qrCode="";var tranAmt="";showTradingMask(qrCode,tranAmt);switchRefundBluetoothMode();callbackFun=callback;payOrderId=param.order_id;var resp={};resp.respCode=that.payCallbackRespCodeConst.Fail;if(!huiyiObj||stateConst.Disabled==state||_posIsAvailable_!=sessionStorage.getItem(_posIsAvailableKey_)){resp.respMsg="蓝牙连接失败，请重新连接";invokeCallBack(resp);return}if(stateConst.Busy==state){resp.respMsg="POS机正在被占用";invokeCallBack(resp);return}state=stateConst.Busy;var orderRsp=createOssOrder(payOrderId);if(!orderRsp.createRet){resp.respMsg=orderRsp.retMsg;invokeCallBack(resp);return}var huiyiParam={};huiyiParam.tran_cd=tranCodeConst.CardRefund;huiyiParam.orig_sys_order_id=orderRsp.serialNumber;huiyiParam.tran_amt=accMul(param.tran_amt,100);invokeHuiyi(huiyiParam)}function invokeHuiyiPay(param,callback){var qrCode=param.qr_code;delete param.qr_code;var tranAmt=param.tran_amt;showTradingMask(qrCode,tranAmt);callbackFun=callback;payOrderId=param.order_id;if(!huiyiObj||stateConst.Disabled==state||_posIsAvailable_!=sessionStorage.getItem(_posIsAvailableKey_)){switchScanMode();return}var resp={};resp.respCode=that.payCallbackRespCodeConst.Fail;if(stateConst.Busy==state){resp.respMsg="POS机正在被占用";invokeCallBack(resp);return}state=stateConst.Busy;var orderRsp=createOssOrder(payOrderId);if(!orderRsp.createRet){resp.respMsg=orderRsp.retMsg;invokeCallBack(resp);return}param.order_id=orderRsp.serialNumber;param.tran_amt=accMul(param.tran_amt,100);invokeHuiyi(param)}function invokeHuiyi(param){param=JSON.stringify(param);huiyiObj.send(param)}function invokeCallBack(resp){if(isTradingMaskVisible()){hideTradingMask()}if(!loopOption.loopId){}else{stopLoopFetchOrderState()}payOrderId=null;state=stateConst.Ready;var cbf=callbackFun;callbackFun=null;if(cbf instanceof Function){try{cbf(resp)}catch(ex){alert("调用回调函数出错"+ex)}}}function switchScanMode(){sessionStorage.setItem(_posIsAvailableKey_,_posIsNotAvailable_);if(isTradingMaskVisible()){$("#_title_",tradingMask).text("POS机扫码支付");$("#_tip_",tradingMask).text("");$("#_close_",tradingMask).show();$("#_close_",tradingMask).off("click").on("click",function(){var resp={};resp.respCode=that.payCallbackRespCodeConst.NotReturn;resp.respMsg="未获取到收费状态，用户自行关闭";stopLoopFetchOrderState();invokeCallBack(resp)});loopFetchOrderState()}}function enableScanGun(poi){$("#_authCode_",tradingMask).show();$("#_authCode_ input",tradingMask).off("keydown").on("keydown",function(e){if(e&&e.keyCode==13){var authCode=$(this).val();$(this).prop("disabled",true);var ret=pushAPIOrder(poi,authCode);if(ret.pushRet){loopFetchOrderState()}else{invokeCallBack({respCode:that.payCallbackRespCodeConst.Fail,respMsg:ret.retMsg})}}})}function switchRefundScanMode(){if(isTradingMaskVisible()){$("#_title_",tradingMask).text("POS机扫码退款");$("#_tip_",tradingMask).text("");$("#_close_",tradingMask).show();$("#_close_",tradingMask).off("click").on("click",function(){var resp={};resp.respCode=that.payCallbackRespCodeConst.NotReturn;resp.respMsg="未获取到退费状态，用户自行关闭";stopLoopFetchOrderState();invokeCallBack(resp)});loopFetchOrderState()}}function switchRefundBluetoothMode(){$("#_title_",tradingMask).text("退费进行中，请稍后...");$("#_tip_",tradingMask).hide();$("#_tranAmt_",tradingMask).hide();$("#_qrCode_",tradingMask).hide();$(".popcontent",tradingMask).css("margin-top","35px");$(".popcontent",tradingMask).css("min-height","50px")}function hideTradingMask(){$("#_qrCode_",tradingMask).removeAttr("src");$("#_authCode_ input",tradingMask).prop("disabled",false);$("#_tranAmt_",tradingMask).text("￥");$("#_title_",tradingMask).text("交易进行中，请稍后...");$("#_tip_",tradingMask).text("若POS机无反应，请使用POS机扫描二维码");$("#_tip_",tradingMask).show();$("#_tranAmt_",tradingMask).show();$("#_qrCode_",tradingMask).show();$("#_authCode_",tradingMask).hide();$(".popcontent",tradingMask).css("margin-top","");$(".popcontent",tradingMask).css("min-height","");$("#_close_",tradingMask).hide();$("#_close_",tradingMask).off("click");$("#_authCode_ input",tradingMask).off("keydown");tradingMask.remove()}function showTradingMask(qrCode,tranAmt){$("#_qrCode_",tradingMask).attr("src","data:image/png;base64,"+qrCode);$("#_tranAmt_",tradingMask).text("￥"+tranAmt);top.$("body").append(tradingMask);$("#_authCode_ input",tradingMask).focus()}function isTradingMaskVisible(){return tradingMask.is(":visible")}function initTradingMask(){tradingMask=$('<div id="_tradingMask_" style="position: fixed;width: 100%;height: 100%;background: rgba(0,0,0,0.5);top: 0;left: 0;z-index: 12;" class="w_code_show_bg"><div class="popup w_code_show_window" style="position: fixed;					    width: 450px;						padding:40px 0;					    top: 50%;					    left: 50%;					    margin-top: -140px;					    margin-left: -160px;					    box-sizing: border-box;					    background: #fff;					    box-shadow: 0 0 6px rgba(0,0,0,0.3);" id="w_code_show_window"><div id="_close_" class="popup_close" style="position:absolute;				    	width:32px;height:25px;display:none;					    lin-height:25px;					    text-align:center;font-size:24px;					    top:0px;					    right:0px;					    cursor:pointer;					    color:#999">&times;</div><div class="popstyle"><div class="popcontent" style="box-sizing: border-box;background: #fff;"><div id="_title_" class="scan_code_info" style="margin-bottom:10px;font-size:16px;color:#333">交易进行中，请稍后...</div><div id="_tranAmt_" style="color:orange;"></div><div class="w_code_box"><img id="_qrCode_" src=""></div><div class="dashed_line"></div><div id="_tip_" class="scan_code_info" style="font-size:12px;color:#aaa;">若POS机无反应，请使用POS机扫描二维码</div><div id="_authCode_" style="display:none;">扫码枪收款：<input type="password" class="input-text" /></div></div></div></div></div>')}function isPosAvailableByRespCode(respCode){var notAvailable=["-41","-2","-3","-4","-5","-6","-7","-8","-9","-10","-11","-12"];for(var i=0;i<notAvailable.length;i++){if(notAvailable[i]==respCode){return false}}return true}function commonValiPayParam(param){if(!param){alert("请传参数");return false}if(!param.order_id){alert("请传参数[订单号/order_id]");return false}if(!param.tran_amt||param.tran_amt<=0||!/^((?:-?0)|(?:-?[1-9]\d*))(?:\.\d{1,2})?$/.test(param.tran_amt)){alert("请传参数[金额/tran_amt],两位小数,单位为元");return false}if(!param.qr_code){alert("请传参数[二维码/qr_code]");return false}return true}function commonValiRefundParam(param){if(!param){alert("请传参数");return false}if(!param.order_id){alert("请传参数[订单号/order_id]");return false}if(param.push_type!=that.pushTypeConst.SCAN&&param.push_type!=that.pushTypeConst.BLUETOOTH&&param.push_type!=that.pushTypeConst.API){alert("请传参数[支付推送方式/push_type]");return false}else{if(param.push_type==that.pushTypeConst.SCAN&&!param.qr_code){alert("请传参数[二维码/qr_code]");return false}}if(!param.tran_amt){alert("请传参数[退费金额/tran_amt]");return false}return true}function createOssOrder(payOrderId){var options={url:ContextClinc_Server+"/payonline/yzt/ossorder/create",contentType:"application/json",dataType:"json",data:payOrderId,showMask:false,async:false};var promise=Utils.myAjaxHandler(options);var ret={createRet:false,serialNumber:"",retMsg:""};promise.done(function(msg){if(SUCCESSCODE==msg.errorCode){var data=msg.data;ret.serialNumber=data.serialNumber;ret.createRet=true}else{ret.retMsg=msg.errorMessage}});return ret}function updateOrderStatus(poi,huiyiRet,tranCode){var param={payOrderId:poi,paySN:huiyiRet.sys_order_id,payStatus:null,partnerID:huiyiRet.mcht_cd,settDate:huiyiRet.sett_dt,payType:null};if(tranCode==tranCodeConst.CardPay){param.payType=2;param.payStatus=(huiyiRet.resp_cd=="00"?1:3)}else{if(tranCode==tranCodeConst.QRCodePay){param.payType=3;if(huiyiRet.resp_cd=="00"){var scanTp=huiyiRet.qr_type;if("01"==scanTp){param.payType=5}else{if("02"==scanTp){param.payType=4}}}param.paySN=huiyiRet.sys_order_id;param.payStatus=(huiyiRet.resp_cd=="00"?1:3)}else{if(tranCode==tranCodeConst.CardRefund){param.payStatus=(huiyiRet.resp_cd=="00"?2:4)}}}var ret={updateRet:false,retMsg:""};var options={url:ContextClinc_Server+"/payonline/yzt/status/update",contentType:"application/json",dataType:"json",data:JSON.stringify(param),showMask:false,async:false};var promise=Utils.myAjaxHandler(options);promise.done(function(msg){if(SUCCESSCODE==msg.errorCode){ret.updateRet=true}else{ret.retMsg=msg.errorMessage}});return ret}function pushAPIOrder(poi,ac){var param={payOrderId:poi,authCode:ac};var options={url:ContextClinc_Server+"/payonline/yzt/pushPAYZTOrder",contentType:"application/json",dataType:"json",data:JSON.stringify(param),showMask:false,async:false};var promise=Utils.myAjaxHandler(options);var ret={pushRet:false,retMsg:""};promise.done(function(msg){if(SUCCESSCODE==msg.errorCode){ret.pushRet=true}else{ret.retMsg=msg.errorMessage}});return ret}function loopFetchOrderState(){if(!loopOption.loopId){loopOption.loopId=setInterval(function(){var resp={};loopOption.currentCount++;if(loopOption.currentCount>loopOption.maxCount){resp.respCode=that.payCallbackRespCodeConst.NotReturn;resp.respMsg="未获取到订单状态";stopLoopFetchOrderState();invokeCallBack(resp);return}var poi=payOrderId;var param={payOrderId:poi,};var options={url:ContextClinc_Server+"charge/getPayOrderStates",dataType:"json",type:"POST",data:JSON.stringify(param),contentType:"application/json;charset=utf-8",showMask:false};var promise=Utils.myAjaxHandler(options);promise.done(function(data){if(data==null||data.errorCode!=SUCCESSCODE){return}if(data.data.payStatus==1||data.data.payStatus==2){resp.respCode=that.payCallbackRespCodeConst.Success;resp.respMsg=data.data.payStatus==1?"收费成功":"退费成功";stopLoopFetchOrderState();invokeCallBack(resp)}})},loopOption.interval)}}function stopLoopFetchOrderState(){var loopId=loopOption.loopId;loopOption.loopId=null;loopOption.currentCount=0;clearInterval(loopId)}function parseJSON(json){try{return eval("("+json+")")}catch(ex){alert("解析JSON失败:"+json)}}}$(function(){var a=session_cache.getCache("recordPayData");if(a!=null){checkParam.initPos(a)}else{checkParam.getPayTypes(function(b){checkParam.initPos(b)})}});var checkParam={getPayTypes:function(d){var c={typeName:"1"};var a={method:"POST",url:ContextClinc_Server+"charge/initCGRecordPage",data:c,dataType:"json",async:false,showMask:true};var b=Utils.myAjaxHandler(a);b.done(function(e){if(e!=null&&e.errorCode==SUCCESSCODE){dictData=e.data;session_cache.setCache("recordPayData",dictData);d(dictData)}else{$.paError(e.errorMessage,null)}}).fail(function(e){$.paError("请求异常",null)}).always(function(){})},initPos:function(b){var a=false;var d=b.T21;$.each(d,function(e){if(d[e]["dictItemCode"]==9){a=true}});if(!pos&&a){try{pos=new PosMachine()}catch(c){alert("初始化POS失败"+c)}}}};