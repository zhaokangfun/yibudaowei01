var sdk,currentInputDom;(function(a){var b='<div id="pop_recorder"><span class="close_recorder" title="关闭"></span><div class="bg_round_1"><div class="bg_round_2"><div class="a_box"></div><div class="b_box"><div class="start_recorder">开始</div><div class="icon_recorder"></div><div class="end_recorder"><span class="l_words">停止</span><span class="s_words">并录入</span></div></div></div></div><audio src="" style="display: none;" id="h5_audio" controls></audio></div>';$(".content-inner").append(b)})();function Iflytek(){this.isVoice=false;this.firstTime=true;this.init()}Iflytek.prototype={init:function(){var a=this;a.getStockParam()},initIflytek:function(a){var b=this;var d=null;var c="";if(this.isVoice){$(a).each(function(f,g){$(this).parent().css("position","relative");var h=$(this).offset().top-$(this).parent().offset().top+6;var e=$(this).parent().outerWidth()-$(this).offset().left+$(this).parent().offset().left-$(this).outerWidth(true)+6;if($(this).parent().find(".icon-voice").length==0){$(this).after('<i class="icon-voice" style="top:'+h+"px;right:"+e+'px">');$(this).css({"padding-right":"22px","box-sizing":"border-box"})}else{$(this).parent().find(".icon-voice").css({top:h,right:e})}});$(document).find(".icon-voice").off("click").on("click",function(){currentInputDom=$(this).siblings("input, textarea");if(b.firstTime){sdk=new IoTSDK({debug:true,host:"asrv3.hivoice.cn",port:"",mode:"medical",imei:"",userId:localStorage.getItem("medical_user_data")?JSON.parse(localStorage.getItem("medical_user_data")).userId:"userId",useFlash:false,variable:false,TPAdditionalService:"app_dinobot_service",TPUserId:"test0000",TPVersion:"v2",TPReturnType:"json",TPSessionId:"0",TPContext:"0"});sdk.on("ready",function(){b.firstTime=false;$("#pop_recorder").show()});sdk.on("error",function(f){if(f.code=="-61001"){$.paError("未连接麦克风",null)}else{$.paError(f.msg,null)}});sdk.on("result",function(f){console&&console.log("result:",f);c=currentInputDom.val();currentInputDom.val(c+(f.text?f.text:""));b.noticeWJserver(f.text?f.text:"")});sdk.on("stop",function(){$(".a_box").removeClass("rotate");$(".b_box").removeClass("starting");console.log("识别中...")});sdk.on("start",function(){$(".a_box").addClass("rotate");$(".b_box").addClass("starting");console.log("录音中...")})}else{$("#pop_recorder").show()}})}},hideVoice:function(){$(".icon-voice").hide();$("#pop_recorder").hide()},showVoice:function(){$(".icon-voice").show()},getStockParam:function(){var a=this;var c=JSON.parse(localStorage.getItem("medical_user_data")).clinicParams;for(var b=0;b<c.length;b++){if(c[b].parameterCode=="3009"){a.isVoice=c[b].parameterValue==2?false:true;break}}},noticeWJserver:function(a){var b=this;var e={osName:"web_api",callDate:new Date().Format("yyyy-MM-dd"),status:"1",consumeTimes:"",voiceText:a};var c={type:"POST",contentType:"application/json; charset=utf-8",url:ContextClinc_Server+"hivoice/saveHivoiceLog",data:JSON.stringify(e),dataType:"json",async:true,showMask:false};var d=Utils.myAjaxHandler(c);d.done(function(f){}).fail(function(f){}).always(function(){})}};function _start(){sdk.start()}function _stop(){sdk.stop()}$(document).find(".start_recorder").off("click").on("click",function(){_start()});$(document).find(".end_recorder").off("click").on("click",function(){_stop()});$(document).find(".close_recorder").off("click").on("click",function(){$(".a_box").removeClass("rotate");$(".b_box").removeClass("starting");$("#pop_recorder").hide();currentInputDom=$("");_stop()});