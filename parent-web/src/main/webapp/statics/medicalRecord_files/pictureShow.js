$(function(){pictureShow.init()});var pictureShow={init:function(){$(".popcontent .close").click(function(){$("#photo_slide").hide()});$(".pictureLink").click(function(){$("#photo_slide").show()});$(".photo-browse .normal-btn").click(function(){var a=$(".img .ds img").attr("src");window.open(a)});if($("#photo_slide").attr("fatherName")=="medicalRecord"){pictureShow.getPictureData()}},photoBrower:function(g){if(!g||g.length<1){$(".pictureLink").parent().hide();return}var c=g.split("#");var l=$(this);var p=0;var i=l.parent().parent().find(".src_pic");var t=i.size();var f=0;$(".photo-browse ul li").remove();for(var o=0;o<c.length;o++){var h="<li><a><img src='"+ContextPath_FileServer+c[o]+"' ></a ></li>";$(".photo-browse").find("ul").append(h)}$(".img li").eq(p).show().addClass("ds");var k=p;function q(){var j=$(".img li").size();if(j>1){k--;$(".img li").eq(k+1).fadeOut(100).removeClass("ds");if(k==-1){k=j-1}$(".img li").eq(k).fadeIn(100).addClass("ds");$(".out").find(".img .ds img").css({"max-width":"685px",height:"auto",top:"50%",left:"50%",transform:"translate(-50%,-50%)"})}}function n(){var j=$(".img li").size();if(j>1){k++;if(k==j){k=0}$(".img li").eq(k).fadeIn(100).addClass("ds");$(".img li").eq(k-1).fadeOut(100).removeClass("ds");$(".out").find(".img .ds img").css({"max-width":"685px",height:"auto",top:"50%",left:"50%",transform:"translate(-50%,-50%)"})}}$(".out .left").unbind("click");$(".out .left").click(function(){q()});$(".out .right").unbind("click");$(".out .right").click(function(){n()});$(document).on("selectstart",".img-resize",function(){return false});var s=navigator.appName;var d=navigator.appVersion;var b=d.split(";");if(b[1]){var e=b[1].replace(/[ ]/g,"")}if(s=="Microsoft Internet Explorer"&&e=="MSIE8.0"){var a=$(document).find(".out .img img");var m=a.width();var r=a.height();a.css({"margin-left":-m/2,"margin-top":-r/2})}$(".out #rotate").off("click").on("click",function(j){var v=j||event;v.preventDefault();f++;var u=$(document).find(".out .img .ds img");u.css({top:"50%",left:"50%","transform-origin":"0 0",transform:"rotate("+90*f+"deg) translate(-50%,-50%)"})});$(".out #narrow").off("click").on("click",function(j){var w=j||event;w.preventDefault();var v=$(document).find(".out .img .ds img");var u=v.width()*0.8;var y=v.height()*0.8;var x=y/u;u=u<100?100:u;y=y<(100*x)?(100*x):y;v.css({width:u+"px",height:y+"px","max-width":"none",top:"50%",left:"50%",transform:"rotate("+90*f+"deg) translate(-50%,-50%)"})});$(".out #enlarge").off("click").on("click",function(j){var w=j||event;w.preventDefault();var v=$(document).find(".out .img .ds img");var u=v.width()*1.2;var x=v.height()*1.2;v.css({width:u+"px",height:x+"px","max-width":"none",top:"50%",left:"50%",transform:"rotate("+90*f+"deg) translate(-50%,-50%)"})});$(".out").on("mousedown",".img .ds img",function(j){var z=j||event;z.preventDefault();var x=this;var y=$(document).find(".out .img .ds img");var w=y.width();var A=y.height();var v=z.clientX-$(x).offset().left+$(document).scrollLeft();var u=z.clientY-$(x).offset().top+$(document).scrollTop();$(x).on("mousemove",function(B){var C=B||event;C.preventDefault();if(f%2==0){$(x).css({left:C.clientX-v+w/2+"px",top:C.clientY-u+A/2+"px"})}else{$(x).css({left:C.clientX-v+A/2+"px",top:C.clientY-u+w/2+"px"})}});$(document).on("mouseup",function(){$(x).off("mousemove");$(x).off("mouseup")})})},getPictureData:function(){var c={EMPI_ID:empiId,TRIAGE_ID:triageId};var a={type:"POST",contentType:"application/json; charset=utf-8",url:ContextClinc_Server+"nurPreexam/getNurPreexamDataNew",data:JSON.stringify(c),dataType:"json",async:true,showMask:true};var b=Utils.myAjaxHandler(a);b.done(function(d){if(!d.errorMessage){if(d.data){$(".pictureLink").parent().parent().show();if(!d.data.PHOTOS||d.data.PHOTOS.length<1){$(".pictureLink").parent().parent().hide()}else{pictureShow.photoBrower(d.data.PHOTOS)}}}else{$.paWarn(d.errorMessage,null)}}).fail(function(d){$.paError("请求异常",null)}).always(function(){})}};