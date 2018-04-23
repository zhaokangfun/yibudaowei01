(function(){var g=/\+/g;function f(e){return r.raw?e:encodeURIComponent(e)}function k(e){return r.raw?e:decodeURIComponent(e)}function b(e){return f(r.json?JSON.stringify(e):String(e))}function h(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{i=decodeURIComponent(i.replace(g," "));return r.json?JSON.parse(i):i}catch(w){}}function m(i,e){var w=r.raw?i:h(i);return $.isFunction(e)?e(w):w}var r=$.cookie=function(B,A,F){if(arguments.length>1&&!$.isFunction(A)){F=$.extend({},r.defaults,F);if(typeof F.expires==="number"){var C=F.expires,E=F.expires=new Date();E.setMilliseconds(E.getMilliseconds()+C*86400000)}return(document.cookie=[f(B),"=",b(A),F.expires?"; expires="+F.expires.toUTCString():"",F.path?"; path="+F.path:"",F.domain?"; domain="+F.domain:"",F.secure?"; secure":""].join(""))}var G=B?undefined:{},D=document.cookie?document.cookie.split("; "):[],z=0,x=D.length;for(;z<x;z++){var y=D[z].split("="),e=k(y.shift()),w=y.join("=");if(B===e){G=m(w,A);break}if(!B&&(w=m(w))!==undefined){G[e]=w}}return G};r.defaults={};$.removeCookie=function(i,e){$.cookie(i,"",$.extend({},e,{expires:-1}));return !$.cookie(i)};var v=function(e){return JSON.parse(localStorage.getItem(e))};var s=function(e,i){localStorage.setItem(e,JSON.stringify(i))};var j=function(e){localStorage.removeItem(e)};var q=function(){localStorage.clear()};var u=function(e){return config_cache.getCache(e)!=null?true:false};var p={};var d=new Date();var c;var l=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();p.beginTime=l||"";if(document){p.domain=document.domain||"";p.url=document.URL||"";p.title=document.title||"";p.referrer=document.referrer||""}if(window&&window.screen){p.sh=window.screen.height||0;p.sw=window.screen.width||0;p.cd=window.screen.colorDepth||0}if(navigator){p.lang=navigator.language||""}try{p.address=localAddress.province+localAddress.city||""}catch(o){}if(_maq){for(var n in _maq){switch(_maq[n][0]){case"sysType":p.sysType=_maq[n][1];break;case"sysModel":p.sysModel=_maq[n][1];break;case"sysMenu":p.sysMenu=_maq[n][1];break;default:break}}}var a="";for(var n in p){if(a!=""){a+="&"}a+=n+"="+encodeURIComponent(p[n])}var t=new Image(1,1);t.src=ContextClinc_Web+"collection.png?"+a})();
(function(a) {
	function b(c, d) {
		this._settings = a.extend({}, this._settings, c);
		this._callback = d;
		this._init()
	}
	b.prototype = {
		_settings : {
			onOpen : function() {
			},
			onMessage : function() {
			},
			onSend : function() {
			},
			onClose : function() {
			},
			onError : function() {
			}
		},
		_callback : null,
		_webSocket : window.WebSocket || window.MozWebSocket,
		_isConnected : false,
		_reConnectCount : 0,
		_heartBeatInterval : 60000,
		_intervalId : null,
		_init : function(e) {
			var d = this;
			var c = encodeURI(d._settings.wcUrl);
			if (("WebSocket" in window) || ("MozWebSocket" in window)) {
				d._webSocket = new WebSocket(c) || new MozWebSocket(c);
				d._webSocket.onopen = function(f) {
					d._doOpen(f);
					if (e) {
						d._doSend(e)
					}
					d._reConnectCount = 0;
					d._doHeartBeat()
				};
				d._webSocket.onerror = function(f) {
					if (d._reConnectCount > 2) {
						if (d._intervalId) {
							clearInterval(d._intervalId)
						}
						a.paError("无法连接消息服务，请稍后刷新页面重试。")
					}
					d._doError(f)
				};
				d._webSocket.onclose = function(f) {
					d._doClose(f)
				};
				d._webSocket.onmessage = function(f) {
					d._doMessage(f)
				}
			} else {
				a.paWarn("您的浏览器不支持webSocket!")
			}
		},
		_doOpen : function(c) {
			this._isConnected = true;
			if (this._settings.onOpen) {
				this._settings.onOpen(c)
			}
		},
		_doMessage : function(c) {
			if (this._settings.onMessage) {
				this._settings.onMessage(c.data)
			}
		},
		_doSend : function(c) {
			if (this._webSocket.readyState != this._webSocket.OPEN) {
				if (this._reConnectCount < 3) {
					this._reConnectCount++;
					this._init(c)
				} else {
					a.paError("无法连接消息服务，请稍后刷新页面重试。")
				}
			} else {
				if (this._settings.onSend) {
					this._settings.onSend(c)
				}
				this._webSocket.send(c)
			}
		},
		_doClose : function(c) {
			this._isConnected = false;
			if (this._settings.onClose) {
				this._settings.onClose(c)
			}
			if (this._webSocket.close() != null) {
				this._webSocket = null
			}
		},
		_doError : function(c) {
			if (this._settings.onError) {
				this._settings.onError(c)
			}
		},
		_doHeartBeat : function() {
			var c = this;
			if (c._intervalId) {
				clearInterval(c._intervalId)
			}
			c._intervalId = setInterval(function() {
				c._doSend("0")
			}, c._heartBeatInterval)
		}
	};
	a.websocket = function(c, d) {
		return new b(c, d)
	}
})(jQuery);
