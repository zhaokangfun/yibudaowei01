var SZYB_NEW_INTERFACE_CODE_DEFINE={GET_MI_PATIENT_INFO:"XX001",GET_MI_PATIENT_DETAIL_INFO:"XX002",GET_MI_PATIENT_PAY_COST_INFO:"XX003",PRESCRIPTION_INFO_UPLOAD:"FY001",PRESCRIPTION_INFO_CANCEL:"FY002",PRESCRIPTION_INFO_SEARCH:"FY003",FEE_PRE_SETTLE:"FY004",FEE_SETTLE:"FY005",REG_SETTLE:"MZ002",TRADE_SEARCH:"JY001",TRADE_REFUND:"JY002",TRADE_CANCEL:"JY003",};var szYbNewServiceInvoke;var wjAppPluginUrl="https://download.pinganwj.com/download/wanjia_box_install.zip";var _webSocket;var commonParam;var serialNumber;var operateType=1;var submitData2;var callBackFucntion2;function szYbNewService(a){this.submitData=a;this.requestParams={transType:"",transBody:{}}}szYbNewService.prototype={constructor:szYbNewService,initYBWebsocket:function(){var self=this;var options={wsUrl:WJBox_Server,onMessage:function(msg){var result=eval("("+msg+")");try{if(result.type==10701||result.type==10703){var common=szYbNewServiceInvoke.readCardCallBack(result.data);if(!common||!common.miCardNo){$.paError("读卡错误");return}commonParam=$.extend({},commonParam,common);var password=$("#password").val()||"000000";commonParam.password=password;if(operateType==1){console.log("onMessage --> serialNumber:"+serialNumber);if(serialNumber!=null){commonParam.serialNumber=serialNumber}var requestParameters={aaz500:commonParam.miCardNo,bzz269:password};console.log("onMessage:requestParameters:"+requestParameters);szYbNewServiceInvoke.getSzNewPatientInfo(requestParameters,function(miPatientInfo){console.log("onMessage:szYbNew:"+szYbNew==null);szYbNew.fillCQSettlePage(miPatientInfo,commonParam.miCardNo);console.log("onMessage:szYbNew:"+szYbNew==null)})}else{if(operateType==2){submitData2.operateType=3;submitData2=$.extend({},submitData2,commonParam);szYbNewServiceInvoke.feeSettle(submitData2,callBackFucntion2)}else{if(operateType==4){submitData2.operateType=5;if(serialNumber!=null){commonParam.serialNumber=serialNumber}submitData2=$.extend({},submitData2,commonParam);szYbNewServiceInvoke.regSettle(submitData2,callBackFucntion2)}}}}if(result.type==10702){var common=szYbNewServiceInvoke.verifyCodeCallBack(result.data);commonParam=$.extend({},commonParam,common);var password=$("#password").val()||"000000";commonParam.password=password;if(operateType==1){console.log("onMessage --> serialNumber:"+serialNumber);if(serialNumber!=null){commonParam.serialNumber=serialNumber}var requestParameters={aaz500:commonParam.miCardNo,bzz269:password};console.log("onMessage:requestParameters:"+JSON.stringify(requestParameters));szYbNewServiceInvoke.getSzNewPatientInfo(requestParameters,function(miPatientInfo){console.log("onMessage:szYbNew:"+szYbNew==null);szYbNew.fillCQSettlePage(miPatientInfo,commonParam.miCardNo);console.log("onMessage:szYbNew:"+szYbNew==null)})}else{if(operateType==2){submitData2.operateType=3;submitData2=$.extend({},submitData2,commonParam);szYbNewServiceInvoke.feeSettle(submitData2,callBackFucntion2)}else{if(operateType==4){submitData2.operateType=5;if(serialNumber!=null){commonParam.serialNumber=serialNumber}submitData2=$.extend({},submitData2,commonParam);szYbNewServiceInvoke.regSettle(submitData2,callBackFucntion2)}}}}if(result.type==10703){}console.log("onMessage:"+result)}catch(e){console.log("initYBWebsocket:"+msg);console.log("initYBWebsocket:"+e)}}};_webSocket=$.websocket(options);console.log("initYBWebsocket--->_webSocket:"+_webSocket)},getSzNewPatientInfo:function(a,b){this.requestParams.transType=SZYB_NEW_INTERFACE_CODE_DEFINE.GET_MI_PATIENT_INFO;this.requestParams.transBody=a;this.requestParams=$.extend({},this.requestParams,commonParam);YBUtils.szNewSendMsg(this.requestParams,b)},getSzNewPatientDetailInfo:function(a){this.requestParams.transType=SZYB_NEW_INTERFACE_CODE_DEFINE.GET_MI_PATIENT_DETAIL_INFO;this.requestParams.transBody={aaz500:"",bzz269:""};YBUtils.szNewSendMsg(this.requestParams,a)},getPayCostInfo:function(a){this.requestParams.transType=SZYB_NEW_INTERFACE_CODE_DEFINE.GET_MI_PATIENT_PAY_COST_INFO;this.requestParams.transBody={aaz500:"",aae140:"",pageno:""};YBUtils.szNewSendMsg(this.requestParams,a)},prescriptionInfoUpload:function(i,c){var b=this;this.requestParams.transType=SZYB_NEW_INTERFACE_CODE_DEFINE.PRESCRIPTION_INFO_UPLOAD;this.requestParams.transBody=i;this.requestParams=$.extend({},this.requestParams,commonParam);var a=i.inputlist||[];var f=50;var d=(a==null?0:a.length);var h=Math.ceil(d/f);if(h==1){YBUtils.szNewSendMsg(this.requestParams,c)}else{var g=a.slice(f*0,(f*(0+1)));b.requestParams.transBody.inputlist=g;b.requestParams.transBody.listsize=g.length||0;h=h-1;YBUtils.szNewSendMsg(b.requestParams,function(){if(h>=1){g=a.slice(f*1,(f*(1+1)));b.requestParams.transBody.inputlist=g;b.requestParams.transBody.listsize=g.length||0;h=h-1;YBUtils.szNewSendMsg(b.requestParams,function(){if(h>=1){g=a.slice(f*2,(f*(2+1)));b.requestParams.transBody.inputlist=g;b.requestParams.transBody.listsize=g.length||0;h=h-1;YBUtils.szNewSendMsg(b.requestParams,function(){if(c){c()}})}else{if(c){c()}}})}else{if(c){c()}}})}},prescriptionInfoCancel:function(){this.requestParams.transType=SZYB_NEW_INTERFACE_CODE_DEFINE.PRESCRIPTION_INFO_CANCEL;this.requestParams.transBody={akc190:"",bke384:"",listsize:"",inputlist:[{}]}},prescriptionInfoSearch:function(){this.requestParams.transType=SZYB_NEW_INTERFACE_CODE_DEFINE.PRESCRIPTION_INFO_SEARCH;this.requestParams.transBody={akc190:"",aaz500:"",pageno:""}},feePreSsettle:function(b,a){this.requestParams.transType=SZYB_NEW_INTERFACE_CODE_DEFINE.FEE_PRE_SETTLE;this.requestParams.transBody=b;this.requestParams=$.extend({},this.requestParams,commonParam);YBUtils.szNewSendMsg(this.requestParams,a)},feeSettle:function(f,b){var a=this;operateType=f.operateType;if(operateType==2){submitData2=f;callBackFucntion2=b;var d=YBUtils.getYBBaseInfo();var c=($("#write_handle").getCheckedData().length==1)||(parent.$("#write_handle").getCheckedData().length==1);if(c){a.verifyCodeCall(SZYB_NEW_INTERFACE_CODE_DEFINE.FEE_SETTLE,d.ybClinicId,f.serialNumber)}else{a.readCardCall(SZYB_NEW_INTERFACE_CODE_DEFINE.FEE_SETTLE,d.ybClinicId,f.serialNumber)}}else{if(operateType==3){this.requestParams.transBody=f.preSettleRequestParams;this.requestParams.transBody.aaz500=f.miCardNo;this.requestParams.transBody.bzz269=f.password;this.requestParams.transType=SZYB_NEW_INTERFACE_CODE_DEFINE.FEE_SETTLE;this.requestParams.transVersion=f.transVersion;this.requestParams.cardArea=f.cardArea;this.requestParams.verifyCode=f.verifyCode;this.requestParams.serialNumber=f.serialNumber;this.requestParams.settleTotalMoney=f.settleTotalMoney;this.requestParams.payKind=f.payKind;this.requestParams.payType=f.paymentTypeId;this.requestParams.ybItemNo=f.ybItemNo;this.requestParams.orgSettlementCode=f.orgSettlementCode;this.requestParams.beforeBalance=f.beforeBalance;YBUtils.saveYBRequestParam(this.requestParams);console.log("feeSettle-->this.requestParams:"+JSON.stringify(this.requestParams));YBUtils.szNewSendMsg(this.requestParams,b)}}},regSettle:function(c,k){var l=this;operateType=c.operateType;console.log("======================data:"+JSON.stringify(c));var h=c.pricingCharge.ybParams;if(operateType==4){submitData2=c;callBackFucntion2=k;var f=h.ybClinicId;var j=YBUtils.getSzYbNewOrgSettlementCode();var a=(c.isReadCard==1);if(a){l.verifyCodeCall(SZYB_NEW_INTERFACE_CODE_DEFINE.REG_SETTLE,f,j)}else{l.readCardCall(SZYB_NEW_INTERFACE_CODE_DEFINE.REG_SETTLE,f,j)}}else{if(operateType==5){var g=[];for(var d=0;d<h.inputlist.length;d++){var b={aae072:h.inputlist[d].FEE_DOC_NO||"",bkf500:h.inputlist[d].FEE_SERIAL_NO||"",ake001:h.inputlist[d].YB_TREATMENT_CODE||"",ake005:h.inputlist[d].TREATMENT_CODE||"",ake006:h.inputlist[d].TREATMENT_NAME||"",aae019:h.inputlist[d].TREATMENT_PRICE||"",};g.push(b)}this.requestParams.transBody={akc190:h.ybAcographyId||"",aaz500:c.miCardNo,bzz269:c.password,aka130:h.ybAcographyType||"",akf001:h.ybDeptCode||"",bkc368:h.ybRegType||"",bke384:c.serialNumber||"",akc264:h.reimbursementAmount||"0",listsize:h.listsize||0,inputlist:g};this.requestParams.transType=SZYB_NEW_INTERFACE_CODE_DEFINE.REG_SETTLE;this.requestParams.transVersion=c.transVersion;this.requestParams.cardArea=c.cardArea;this.requestParams.verifyCode=c.verifyCode;this.requestParams.serialNumber=c.serialNumber;YBUtils.szNewSendMsg(this.requestParams,k)}}},szYbRegSettleSuccess:function(d,g){var b=this;var a={acographyId:d.pricingCharge.acographyId,miTypeCode:"yb0005",bizState:1,settlementSerialNum:d.ybChargeResult.transBody.ckc618,fundPayAmount:d.ybChargeResult.transBody.akb068,personPayAmount:d.ybChargeResult.transBody.akb066,personCashAmount:d.ybChargeResult.transBody.akb067,ybBalance:d.ybChargeResult.transBody.aae240,};var c={url:ContextClinc_Server+"ybReimburse/updateYbRegBizState",dataType:"json",type:"POST",data:JSON.stringify(a),contentType:"application/json;charset=utf-8",showMask:false};var f=Utils.myAjaxHandler(c);f.done(function(h){if(h!=null&&h.errorCode==SUCCESSCODE){$("#pay_pop").hide();$.paSuccess("收费成功",1000,function(){if(g){g(h.data)}})}else{$.paError("更新医保登记信息失败"+e.errorMessage)}setTimeout(function(){window.location.href="./patientManagement.html"},500)})},getTradeSearch:function(){this.requestParams.transType=SZYB_NEW_INTERFACE_CODE_DEFINE.TRADE_SEARCH},tradeRefund:function(c,b,a){this.requestParams.transType=SZYB_NEW_INTERFACE_CODE_DEFINE.TRADE_REFUND;this.requestParams.transBody=c;this.requestParams=$.extend({},this.requestParams,commonParam);YBUtils.szNewSendMsg(this.requestParams,b,a)},readCardCall:function(b,c,d){var a=this;var f={};console.log("readCardCall -->serialNumber2:"+d||"serialNumber2为空");if(!d){serialNumber=YBUtils.getSzYbNewOrgSettlementCode()}else{serialNumber=d}f.type=10701;f.itype=3;f.params=b+"|"+serialNumber+"|"+c+"|";console.log("readCardCall --> _webSocket:"+_webSocket);if(_webSocket){_webSocket._doSend(JSON.stringify(f))}},readCardCallBack:function(a){var b={};console.log("readCardCallBack --》result:"+a);if(a){var c=a.split("|");if(c.length==16){b.cardArea=c[0];b.miCardNo=c[12];b.verifyCode=(c[11]&&c[13])?(c[11]+"|"+c[13]):null;b.transVersion=c[14];console.log("readCardCallBack:"+b);if(!b.cardArea||!b.miCardNo||!b.verifyCode||!b.transVersion){$.paError("读卡返回数据异常");return null}return b}else{$.paError("读卡返回长度大小不为16");return null}}else{$.paError("读卡返回结果为空")}},verifyCodeCall:function(b,c,d){var a=this;var f={};f.type=10702;console.log("verifyCodeCall -->serialNumber2:"+d||"serialNumber2为空");if(!d){serialNumber=YBUtils.getSzYbNewOrgSettlementCode()}else{serialNumber=d}f.params=b+"|"+serialNumber+"|"+c+"|";console.log("verifyCodeCall --> msg:"+JSON.stringify(f));if(_webSocket){_webSocket._doSend(JSON.stringify(f))}else{console.log("readCardCall --> websocket is null!")}},verifyCodeCallBack:function(a){var b={};console.log("verifyCodeCallBack --》result:"+a);if(a){var c=a.split("|");if(c.length==4){var d=$("#miCardNo").val()||parent.$("#miCardNo").val();b.cardArea="440300";b.miCardNo=d||"%GAAFSAKSXSUKKWDKHDAD?;07734724145330238292?";b.verifyCode=(c[0]&&c[1])?(c[0]+"|"+c[1]):null;b.transVersion=c[2];console.log("verifyCodeCallBack:"+JSON.stringify(b));return b}else{$.paError("获取验证码返回长度大小不为4");return null}}else{$.paError("读卡返回结果为空")}},readCardHSMCall:function(c,b){var a=this;var d={};d.type=10703;d.itype=3;d.params=c+"|"+b+YBUtils.getCurrentDate()+YBUtils.getCurrentMilis()+"|"+b+"|";if(a.websocket){a.websocket._doSend(JSON.stringify(d))}},};(function(a){function b(c,d){this._settings=a.extend({},this._settings,c);this._callback=d;this._init()}b.prototype={_settings:{onOpen:function(){console.log("connected!")},onMessage:function(){console.log("WebSocketClient-》onMessage")},onSend:function(){console.log("WebSocketClient-》onSend")},onClose:function(){console.log("close!")},onError:function(){console.log("error!")}},_callback:null,_webSocket:window.WebSocket||window.MozWebSocket,_isConnected:false,_reConnectCount:0,_heartBeatInterval:60000,_intervalId:null,_init:function(f){var d=this;var c=d._settings.wsUrl;if(("WebSocket" in window)||("MozWebSocket" in window)){d._webSocket=new WebSocket(c,"protocol-yb-sz")||new MozWebSocket(c,"protocol-yb-sz");d._webSocket.onopen=function(g){d._doOpen(g);d._reConnectCount=0};d._webSocket.onerror=function(g){if(d._reConnectCount>2){if(d._intervalId){clearInterval(d._intervalId)}a.paError("无法连接消息服务，请稍后刷新页面重试。")}d._doError(g)};d._webSocket.onclose=function(g){d._doClose(g)};d._webSocket.onmessage=function(g){d._doMessage(g)}}else{a.paWarn("您的浏览器不支持webSocket!")}},_doOpen:function(c){this._isConnected=true;if(this._settings.onOpen){this._settings.onOpen(c)}},_doMessage:function(c){Utils.removeLoadingMaskFrom(a("body"));if(this._settings.onMessage){this._settings.onMessage(c.data)}},_doSend:function(c){if(this._webSocket.readyState!=this._webSocket.OPEN){if(this._reConnectCount<3){this._reConnectCount++;this._init(c)}else{a.paError("无法连接消息服务，请稍后刷新页面重试。")}}else{Utils.addLoadingMaskTo(a("body"),"读取医保卡中...");if(this._settings.onSend){this._settings.onSend(c)}this._webSocket.send(c)}},_doClose:function(c){Utils.removeLoadingMaskFrom(a("body"));this._isConnected=false;if(this._settings.onClose){this._settings.onClose(c)}if(this._webSocket.close()!=null){this._webSocket=null}},_doError:function(c){Utils.removeLoadingMaskFrom(a("body"));if(this._settings.onError){this._settings.onError(c)}},checkVersion:function(){var c=this;if(c.version&&c.version!=WJDRIVER_VERSION.MEDICAL_CARD_EADER){return false}else{return true}},isLocalInstall:function(){if(this.socket==null||this.socket.readyState!=1){return false}return true},showWjAppPluginHandlePannel:function(c){if(c==1){a("#plug_down_txt").text("下载插件")}else{a("#plug_down_txt").text("更新插件")}a("#yb_plug_window").show()},wjAppPluginInstallOrUpdate:function(c){var d=parent.layer.getFrameIndex(window.name);parent.layer.close(d);if(parent.ybDJObj&&parent.ybDJObj.showWjAppPluginHandlePannel){parent.ybDJObj.showWjAppPluginHandlePannel(c)}},};a.websocket=function(c,d){return new b(c,d)}})(jQuery);$(function(){szYbNewServiceInvoke=new szYbNewService();szYbNewServiceInvoke.initYBWebsocket()});