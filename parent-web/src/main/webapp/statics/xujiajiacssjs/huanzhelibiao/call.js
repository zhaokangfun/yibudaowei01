var callObj={medical_user_data:config_cache.getCache("medical_user_data"),IncomePhoneNumber:null,OutPhoneNumber:null,Audio:null,PlayFlag:0,CallRecord:{soundAddr:"",soundFileName:"",empiId:"",patientName:"",mobilePhoneNumber:"",callStatus:""},startTime:null,endTime:null,unInstallTip:function(){var a=this;a.installDial();return true},updateUbox:function(){var a=this;a.showBox(6,{});return true},installDial:function(){var a=this;a.showBox(0)},onSupportIeTip:function(){var a=this;var b=new Object();b.msg="暂时不支持改浏览器";a.showBox(4,b)},uncheckPhoneBox:function(){var a=this;var b=new Object();b.msg="未检测到电话盒子";a.showBox(4,b)},handsetTip:function(){var a=this;var b=new Object();b.msg="请拿起听筒";a.showBox(4,b)},dialPatient:function(d,c){var a=this;var b=new Object();b.empiId=d;b.mobilePhoneNumber=c;a.showBox(1,b)},incomingTip:function(c){var a=this;a.IncomePhoneNumber=c;var b=new Object();b.mobilePhoneNumber=c;a.showBox(2,b)},incomingTelsegram:function(c){var a=this;var b=new Object();b.mobilePhoneNumber=c;if(a.IncomePhoneNumber){a.showBox(3,b)}},endTelegram:function(c){var a=this;var b=new Object();b.msg=c;a.showBox(4,b);a.IncomePhoneNumber=null;a.OutPhoneNumber=null;a.closeBox(1);a.closeBox(2);a.closeBox(3)},getConfigure:function(c){var b=false;var a={method:"POST",url:ContextPath+"mdcParameter/getParamValueByCode",data:{code:c},dataType:"json",async:false};var d=Utils.myAjaxHandler(a);d.done(function(e){if(e!=null&&e.errorCode==SUCCESSCODE){b=e.data}else{$.paError(e.errorMessage,null);return false}return b}).fail(function(e){return b}).always(function(){});return b},isOtherPlace:function(c){var e=new Object();e.mobilePhoneNumber=c;var b=false;var a={method:"POST",url:ContextClinc_Server+"trbInfo/getMobileClinicAreaRel",data:JSON.stringify(e),dataType:"json",contentType:"application/json; charset=utf-8",async:false};var d=Utils.myAjaxHandler(a);d.done(function(f){if(f!=null&&f.errorCode==SUCCESSCODE){b=f.data.isLocal}else{b=false}}).fail(function(f){b=false}).always(function(){});return b},insertCallRecord:function(c){callObj.IncomePhoneNumber=null;callObj.OutPhoneNumber=null;var a={method:"POST",url:ContextClinc_Server+"trbInfo/saveRecordInfo",dataType:"json",contentType:"application/json",data:JSON.stringify(c)};var b=Utils.myAjaxHandler(a);b.done(function(e){if(e.errorCode==SUCCESSCODE){var d=e.data;if(d){}}}).fail(function(d){}).always(function(){})},updateCallRecord:function(c){callObj.IncomePhoneNumber=null;callObj.OutPhoneNumber=null;var a={method:"POST",url:ContextClinc_Server+"trbInfo/updateCallRecord",dataType:"json",contentType:"application/json",data:JSON.stringify(c)};var b=Utils.myAjaxHandler(a);b.done(function(d){if(d.errorCode==SUCCESSCODE){callObj.CallRecord.soundFileName=null}}).fail(function(d){}).always(function(){})},trbId:["trbDownloadPop","trbCallPhone","trbCidPhone","trbCidPhone","","trbManagePhone","trbUploadPhone"],showBox:function(e,m){var k=this;var i=$(window).width(),b=$(window).height();var g=[{w:605,h:465,top:(b-465)/2,right:(i-605)/2,title:"来电盒子安装提示",_class:"downloadPop"},{w:874,top:185,right:(i-670)/2,title:"拨打电话",_class:"callPhone"},{w:874,h:584,title:"来电显示",_class:"cidPhone"},{w:360,h:210,title:"来电显示",_class:"cidPhone"},{},{w:670,h:450,top:(b-450)/2,right:(i-670)/2,title:"通话记录管理",_class:"managePhone"},{w:300,h:190,top:(b-190)/2,right:(i-300)/2,title:"更新插件",_class:"uploadPhone"}];var j=$('<div class="pop-over dsn"></div>');var l=$('<div class="popup popPhone dsn"><div class="popstyle"></div></div>');var d="";function f(c){return'<div class="poptitle" >'+c+'<span class="close"></span></div>'}d=f(g[e].title);l.addClass(g[e]._class);if(e==2){l.attr("id",k.trbId[e]);l.css({top:$(window).height()-g[e].h,right:0,width:g[e].w+"px",height:g[e].h+"px",position:"absolute","z-index":10001});$("body").append(l);l.find(".popstyle").append(d);new trb(e,m,k.trbId[e])}else{if(e==3){new trb(e,m,k.trbId[e])}else{l.css({top:g[e].top+"px",right:g[e].right+"px",width:g[e].w+"px",height:g[e].h+"px",position:"absolute","z-index":10001,display:"block"});if(e==5){j.attr("id",k.trbId[e]);$("body").append(j);j.append(l);l.find(".popstyle").append(d);new trb(e,m,k.trbId[e]);dragPop.popdrag()}else{if(e==0||e==1||e==6){l.attr("id",k.trbId[e]);$("body").append(l);l.find(".popstyle").append(d);new trb(e,m,k.trbId[e]);dragPop.popdrag()}else{if(e==4){var a="";if(m){a=m.msg||""}$.paAlert(a,1500,function(){})}}}}}},closeBox:function(a){var b=this;var c=$("#"+b.trbId[a]);if(a==2||a==3){c.animate({marginTop:"+="+c.innerHeight()},function(){c.fadeOut();c.remove()})}else{c.remove()}}};var ENUM_UBOX_OPT_TYPE={USB_PHONE_CALL:10101,USB_PHONE_PRODUCTID:10102,USB_PHONE_VERSIONNUM:10103,USB_PHONE_USERNUM:10104};var ENUM_UBOX_DEVICE={SERVER:10000,USB_PHONE:10100};var ENUM_UBOX_EVENT={EVENT_VERSION:10001,UBOX_EVENT_ERROR:10180,UBOX_EVENT_PRODUCTID:10182,UBOX_EVENT_VERSIONNUM:10183,UBOX_EVENT_USERNUM:10184,UBOX_EVENT_WAVSTOP:10185,UBOX_EVENT_UPLOADEND:10186,UBOX_EVENT_DEVICE_PLUG_IN:10101,UBOX_EVENT_DEVICE_PLUG_OUT:10102,UBOX_EVENT_ALARM:10103,UBOX_EVENT_LINE_RESET:10110,UBOX_EVENT_LINE_RINGING:10111,UBOX_EVENT_LINE_HOOK_OFF:10112,UBOX_EVENT_LINE_HANG:10113,UBOX_EVENT_RING_CANCEL:10115,UBOX_EVENT_LINE_VOLTAGE:10116,UBOX_EVENT_STREAM_VOICE:10120,UBOX_EVENT_CALLER_ID:10121,UBOX_EVENT_DTMF_DOWN:10122,UBOX_EVENT_DTMF_UP:10123,UBOX_EVENT_DEVICE_ERROR:10124,UBOX_EVENT_DEVICE_PLAY_END:10125,UBOX_EVENT_DEVICE_PLAY_ERROR:10126,UBOX_EVENT_DEVICE_BUSY_TONE:10127,UBOX_EVENT_CALLOUTFINISH:10128,UBOX_EVENT_POLARITY:10129,UBOX_EVENT_LINE_HOOK_UP:10130,UBOX_EVENT_LINE_RING_STOP:10131};var ENUM_UBOX_VOICE_CODER={CODER_ALAW:0,CODER_PCM:1,CODER_G729:3,CODER_MP3:38,CODER_SPEEX:20,CODER_ULAW:100};var ENUM_UBOX_WORK_MODE={UBOX_MODE_RECORD:0,UBOX_MODE_DIAG:1,UBOX_MODE_CONFIG:2};var ENUM_UBOX_STATE={UBOX_STATE_PLUG_OUT:0,UBOX_STATE_RESET:1,UBOX_STATE_RINGING:2,UBOX_STATE_HOOK_OFF:3,UBOX_STATE_HANG:4,UBOX_STATE_IDLE:5,UBOX_STATE_REVERSE_HOOKOFF:6,UBOX_STATE_POSITIVIE_HOOKOFF:7,UBOX_STATE_HANGEX:8,UBOX_STATE_HANG_UP:9,UBOX_STATE_STOP_REING:10,UBOX_STATE_RING_CANCEL:11,UBOX_STATE_HANG_UPEX:12};var phoneBox={device:"",handle:"",type:"",hdl:-1,version:null,NOUSBDEVICE:false,ubox:{lines:[],linenum:0},ws:null,AppendStatus:function(a){if("handsetTip"==a){callObj.handsetTip()}},init:function(){var a=this;if("WebSocket" in window){a.ws=new WebSocket(WJBox_Server,"usb-phone")}else{if("MozWebSocket" in window){a.ws=new MozWebSocket(WJBox_Server,"usb-phone")}else{a.AppendStatus(" This brower does not supports WebSocket.")}}if(a.ws!=null){a.AppendStatus(" This brower supports WebSocket");a.wsOnMessage(a.ws);a.wsListen(a.ws)}},initDevice:function(d,c){var b=this;var a="检测到设备，句柄号:"+d;b.AppendStatus(a);b.handle=d;b.NOUSBDEVICE=false;if(b.ubox.linenum==2){return}b.ubox.linenum++;if(b.ubox.lines[d]==undefined){b.ubox.lines[d]={}}b.ubox.lines[d].handle=d;b.ubox.lines[d].callernumber="";b.ubox.lines[d].dtmfkyes="";b.ubox.lines[d].lineid=b.ubox.linenum;b.ubox.lines[d].state=c;b.ubox.lines[d].record=0;b.ubox.lines[d].productid=0;if(b.ubox.linenum==1){b.hdl=b.ubox.lines[d].handle}else{}b.AppendStatus("获取型号");b.ws.send('{"device":10100,"type":10102,"handle":'+d+',"data":""}')},wsOnMessage:function(a){var b=this;a.onmessage=function(c){b.AppendStatus("ev.data："+c.data);var d=JSON.parse(c.data);if(d.device==ENUM_UBOX_DEVICE.USB_PHONE){switch(d.event){case ENUM_UBOX_EVENT.UBOX_EVENT_ERROR:b.AppendStatus("返回结果："+c.data+"\n");if(d.data.resultcode!=0||d.data.type==10105){if(callObj.Audio.paused){callObj.Audio.play();$(callObj.Audio).attr("stop","3");b.AppendStatus("本地播放失败 ..启用在线播放")}else{callObj.Audio.pause()}}break;case ENUM_UBOX_EVENT.UBOX_EVENT_WAVSTOP:$(callObj.Audio).attr("stop","1");$($(callObj.Audio).prev()[0]).find("i").removeClass("voice-on");callObj.Audio=null;b.AppendStatus("播放结束：handle="+d.data.handle+"\n");break;case ENUM_UBOX_EVENT.UBOX_EVENT_UPLOADEND:b.AppendStatus("上传文件结束："+d+"\n");if(d.data.resultcode==0){callObj.CallRecord.soundAddr=d.data.fileurl;callObj.CallRecord.soundFileName=d.data.filename;if(callObj.IncomePhoneNumber){callObj.CallRecord.mobilePhoneNumber=callObj.IncomePhoneNumber}if(callObj.OutPhoneNumber){callObj.CallRecord.mobilePhoneNumber=callObj.OutPhoneNumber}callObj.updateCallRecord(callObj.CallRecord)}callObj.endTelegram("通话结束");break}}if(d.event!=ENUM_UBOX_EVENT.EVENT_VERSION){if(b.ubox.lines[d.data.handle]==undefined){b.AppendStatus("msg.event != ENUM_UBOX_EVENT.EVENT_VERSION")}b.initDevice(d.data.handle,ENUM_UBOX_STATE.UBOX_STATE_IDLE)}if(d.event==ENUM_UBOX_EVENT.EVENT_VERSION){b.version=d.data;b.AppendStatus("电话盒子软件版本："+b.version)}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_LINE_HOOK_UP){b.Ubox_hookon(d.data.handle)}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_DEVICE_PLUG_IN){b.Ubox_Plug_In(d.data.handle)}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_LINE_HOOK_OFF){b.Ubox_hookoff(d.data.handle);if(d.data.type==6){b.AppendStatus("软件摘机，反向")}else{if(d.data.type==7){b.AppendStatus("软件摘机，正向")}}}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_LINE_RINGING){b.ubox_Ring(d.data.handle)}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_LINE_HANG){b.ubox_HangIng(d.data.handle)}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_CALLER_ID){b.Ubox_CallId(d.data.handle,d.data.callernumber)}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_ALARM){b.ubox_DeviceAlarm(d.data.handle)}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_RING_CANCEL){b.ubox_RingCancel(d.data.handle)}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_DEVICE_ERROR){b.ubox_DeviceError(d.data.handle)}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_DEVICE_BUSY_TONE){b.ubox_ToneBusy(d.data.handle)}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_CALLOUTFINISH){b.AppendStatus("软件拨号完成 handle:"+d.data.handle)}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_DEVICE_PLUG_OUT){b.ubox_PlugOut(d.data.handle)}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_VERSIONNUM){b.AppendStatus("handle:"+d.data.handle+" 硬件版本号："+d.data.version)}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_USERNUM){b.AppendStatus("handle:"+d.data.handle+" 用户号:"+d.data.usernum)}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_ERROR){b.AppendStatus("产生错误:"+d.data.message)}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_ERROR){b.AppendStatus("产生错误:"+d.data.message)}else{if(d.event==ENUM_UBOX_EVENT.UBOX_EVENT_PRODUCTID){if(d.data.productid=="1"){b.AppendStatus("USB设备是FI3102A");b.ubox.lines[d.data.handle].productid=1}else{if(d.data.productid=="2"){b.AppendStatus("USB设备是FI3002B");b.ubox.lines[d.data.handle].productid=2}else{if(d.data.productid=="3"){b.AppendStatus("USB设备是FI3001B");b.ubox.lines[d.data.handle].productid=3}else{if(d.data.productid=="4"){b.AppendStatus("USB设备是FI3101A");b.ubox.lines[d.data.handle].productid=4}}}}}}}}}}}}}}}}}}}}}}}},check_version:function(){var a=this;if(a.version&&a.version!=WJDRIVER_VERSION.WJBOX){a.AppendStatus("电话盒子软件版本："+a.version+"不是最新版本，请更新再使用");callObj.updateUbox();return false}else{return true}},wsListen:function(a){var b=this;a.onopen=function(c){b.AppendStatus("websocket connected:"+JSON.stringify(c))};a.onerror=function(c){b.AppendStatus("websocket error:"+JSON.stringify(c))};a.onclose=function(c){b.AppendStatus("websocket close:"+JSON.stringify(c));a=null}},Ubox_Plug_In:function(c){var b=this;var a="设备插入 句柄号:"+c;b.AppendStatus(a)},Ubox_hookoff:function(g){var l=this;var e="设备"+g;var d="";var b=new Date();var h=b.getFullYear();var f=b.getMonth()+1;var i=b.getDay();var j=b.getHours();var c=b.getMinutes();var k=b.getSeconds();if(l.ubox.lines[g].state==ENUM_UBOX_STATE.UBOX_STATE_RINGING){callObj.incomingTelsegram(callObj.IncomePhoneNumber);l.AppendStatus(e+" 呼入摘机");var a=callObj.getConfigure("1304");if(a=="1"){l.playRecord(callObj.IncomePhoneNumber)}}else{l.AppendStatus(e+" 呼出摘机")}l.ubox.lines[g].state=ENUM_UBOX_STATE.UBOX_STATE_HOOK_OFF},playRecord:function(b){var a=this;if(a.ws&&a.ws.readyState==1){var c=a.getFileName(b);callObj.CallRecord.soundFileName=c;var d={};d.device=10100;d.type=10107;d.handle=a.handle;d.data=c;a.ws.send(JSON.stringify(d));a.AppendStatus("请求录音:"+c+callObj.CallRecord.soundFileName+"\n")}},fileUpload:function(d,b){if(d==""||d==null){callObj.endTelegram("通话结束");return}var a=this;if(a.ws&&a.ws.readyState==1){var c={};c.device=10100;c.type=10108;c.handle=a.handle;c.data=d+","+b;a.ws.send(JSON.stringify(c))}else{a.AppendStatus("上传录音文件...ws失效")}},getFileName:function(a){var b=a+"_";var c=new Date();b+=c.getFullYear();b+=c.getMonth()+1;b+=c.getDate();b+=c.getHours();b+=c.getMinutes();b+=c.getSeconds();b+=c.getMilliseconds();return b},playCall:function(d,a){var b=this;if(b.ws&&b.ws.readyState==1){var c={};c.device=10100;c.type=10105;c.handle=b.handle;c.data=d+","+encodeURI(a);b.ws.send(JSON.stringify(c))}else{b.AppendStatus("播放失败...ws失效");if(callObj.Audio.paused){callObj.Audio.play();$(callObj.Audio).attr("stop","3");b.AppendStatus("本地播放失败 ..启用在线播放");return false}else{callObj.Audio.pause()}}},playStop:function(c){var a=this;if(a.ws&&a.ws.readyState==1){var b={};b.device=10100;b.type=10106;b.handle=a.handle;b.data=c;a.ws.send(JSON.stringify(b))}else{a.AppendStatus("暂停播放失败...ws失效")}},Ubox_hookon:function(d){var c=this;var a="设备"+d;c.ubox.lines[d].state=ENUM_UBOX_STATE.UBOX_STATE_IDLE;c.AppendStatus(a+" 挂机");var b=ContextClinc_Server+"/publicWjboxFileController/uploadFile?cookie_pawj_medical_user_id="+Utils.getCookie("cookie_pawj_medical_user_id")+"&sysType=B";if(callObj.IncomePhoneNumber||callObj.OutPhoneNumber){callObj.endTime=new Date();callObj.CallRecord.callTime=(callObj.endTime.getTime()-callObj.startTime.getTime())/1000;if(callObj.IncomePhoneNumber){callObj.CallRecord.mobilePhoneNumber=callObj.IncomePhoneNumber}if(callObj.OutPhoneNumber){callObj.CallRecord.mobilePhoneNumber=callObj.OutPhoneNumber}callObj.insertCallRecord(callObj.CallRecord);c.fileUpload(callObj.CallRecord.soundFileName,encodeURI(b))}},ubox_Ring:function(c){var b=this;var a="设备"+c;b.AppendStatus(a+" 振铃");b.ubox.lines[c].state=ENUM_UBOX_STATE.UBOX_STATE_RINGING},ubox_HangIng:function(c){var b=this;var a="设备"+c;b.AppendStatus(a+" 电话未连接好");if(b.ubox.lines[c].record==1){b.ubox.lines[c].record=0;if(b.hdl!=-1){var d={event:"StopRecord",handle:c};b.websocket_send_msg(JSON.stringify(d));b.AppendStatus("已经停止录音")}}},Ubox_CallId:function(c,b){var d=this;var a="设备"+c+"号码："+b;callObj.incomingTip(b);d.AppendStatus(a)},ubox_DtmfKey:function(b,d){var c=this;var a="设备"+b+"按键:"+(d-48);c.AppendStatus(a)},ubox_DeviceAlarm:function(c){var b=this;var a="设备"+c;b.AppendStatus(a+" 警告，重启软件")},ubox_RingCancel:function(c){var b=this;var a="设备"+c;b.AppendStatus(a+" 振铃取消");b.ubox.lines[c].state=ENUM_UBOX_STATE.UBOX_STATE_IDLE;if(callObj.IncomePhoneNumber||callObj.OutPhoneNumber){if(callObj.IncomePhoneNumber){callObj.CallRecord.mobilePhoneNumber=callObj.IncomePhoneNumber}if(callObj.OutPhoneNumber){callObj.CallRecord.mobilePhoneNumber=callObj.OutPhoneNumber}callObj.CallRecord.callStatus="3";callObj.CallRecord.callTime=null;callObj.insertCallRecord(callObj.CallRecord);callObj.endTelegram("通话结束")}},ubox_LineVoltage:function(c,d){var b=this;var a="设备"+c+"线路电压:"+d;b.AppendStatus(a)},ubox_DeviceError:function(c){var b=this;var a="设备"+c;b.AppendStatus(a+" 错误，重启软件")},ubox_PlayEnd:function(c){var b=this;var a="设备"+c;b.AppendStatus(a+" 放音结束")},ubox_ToneBusy:function(c){var b=this;var a="设备"+c;b.AppendStatus(a+" 忙音")},ubox_PlugOut:function(d){var b=this;var a="设备"+d;b.ubox.lines[d].handle=-1;b.ubox.lines[d]=undefined;b.ubox.linenum-=1;var c=new Object();c.msg="设备拔出";callObj.showBox(4,c);b.NOUSBDEVICE=true;b.AppendStatus(a+" 拨出");b.hdl=-1},getParam:function(){var a={};a.param1303=_.find(config_cache.getCache("medical_user_data").clinicParams,function(b){return b.parameterCode=="1303"}).parameterValue;a.param1302=_.find(config_cache.getCache("medical_user_data").clinicParams,function(b){return b.parameterCode=="1302"}).parameterValue;a.param1305=_.find(config_cache.getCache("medical_user_data").clinicParams,function(b){return b.parameterCode=="1305"}).parameterValue;return a},ubox_dialnum:function(b,d){var g=this;if(!g.check_version()){return}if(!window.WebSocket){var i=new Object();i.msg="暂时不支持该浏览器";callObj.showBox(4,i);return}if(g.NOUSBDEVICE){var i=new Object();i.msg="未检测到电话盒子";callObj.showBox(4,i);return}if(g.ws.readyState!=1){callObj.unInstallTip();return}if(g.hdl!=-1){if(g.ubox.lines[g.hdl].state==ENUM_UBOX_STATE.UBOX_STATE_HOOK_OFF){var h=b;if(b&&b.length>=7){var e=g.getParam("1303").param1303==2?false:true;var f=callObj.isOtherPlace(b);if(e&&!f&&b.charAt(0)!=0){b="0"+b}var a=g.getParam("1302").param1302;if(a!=null&&a!=""){b=a+b}}callObj.dialPatient(d,h);callObj.OutPhoneNumber=h;var c={device:ENUM_UBOX_DEVICE.USB_PHONE,type:ENUM_UBOX_OPT_TYPE.USB_PHONE_CALL,handle:g.hdl,data:b};g.AppendStatus("拨号:"+b);g.ws.send(JSON.stringify(c));var a=g.getParam("1305").param1305;if(a=="1"||a===1){g.playRecord(h)}}else{g.AppendStatus("请先摘机才能拨打电话");g.AppendStatus("handsetTip")}}else{var i=new Object();i.msg="未检测到电话盒子";callObj.showBox(4,i)}}};$(function(){phoneBox.init()});