(function(a){function b(c,d){this._settings=a.extend({},this._settings,c);this._callback=d;this._init()}b.prototype={_settings:{onOpen:function(){},onMessage:function(){},onSend:function(){},onClose:function(){},onError:function(){}},_callback:null,_webSocket:window.WebSocket||window.MozWebSocket,_isConnected:false,_reConnectCount:0,_heartBeatInterval:60000,_intervalId:null,_init:function(e){var d=this;var c=encodeURI(d._settings.wcUrl);if(("WebSocket" in window)||("MozWebSocket" in window)){d._webSocket=new WebSocket(c)||new MozWebSocket(c);d._webSocket.onopen=function(f){d._doOpen(f);if(e){d._doSend(e)}d._reConnectCount=0;d._doHeartBeat()};d._webSocket.onerror=function(f){if(d._reConnectCount>2){if(d._intervalId){clearInterval(d._intervalId)}a.paError("无法连接消息服务，请稍后刷新页面重试。")}d._doError(f)};d._webSocket.onclose=function(f){d._doClose(f)};d._webSocket.onmessage=function(f){d._doMessage(f)}}else{a.paWarn("您的浏览器不支持webSocket!")}},_doOpen:function(c){this._isConnected=true;if(this._settings.onOpen){this._settings.onOpen(c)}},_doMessage:function(c){if(this._settings.onMessage){this._settings.onMessage(c.data)}},_doSend:function(c){if(this._webSocket.readyState!=this._webSocket.OPEN){if(this._reConnectCount<3){this._reConnectCount++;this._init(c)}else{a.paError("无法连接消息服务，请稍后刷新页面重试。")}}else{if(this._settings.onSend){this._settings.onSend(c)}this._webSocket.send(c)}},_doClose:function(c){this._isConnected=false;if(this._settings.onClose){this._settings.onClose(c)}if(this._webSocket.close()!=null){this._webSocket=null}},_doError:function(c){if(this._settings.onError){this._settings.onError(c)}},_doHeartBeat:function(){var c=this;if(c._intervalId){clearInterval(c._intervalId)}c._intervalId=setInterval(function(){c._doSend("0")},c._heartBeatInterval)}};a.websocket=function(c,d){return new b(c,d)}})(jQuery);