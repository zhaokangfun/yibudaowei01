/**
 * Created by WANGHONGLIANG909 on 2017-03-22.
 */



////禁止backspace键返回
function banBackSpace(e) {
    var ev = e || window.event;
    //各种浏览器下获取事件对象
    var obj = ev.relatedTarget || ev.srcElement || ev.target || ev.currentTarget;
    //按下Backspace键
    if (ev.keyCode == 8) {
        var tagName = obj.nodeName //标签名称
            //如果标签不是input或者textarea则阻止Backspace
            //如果是富文本编辑器，则不阻止Backspace
        if (tagName != 'INPUT' && tagName != 'TEXTAREA' && !$(e.target).parents().hasClass('rich_text_editor')) {
            return stopIt(ev);
        }
        var tagType = obj.type.toUpperCase(); //标签类型
        //input标签除了下面几种类型，全部阻止Backspace
        if (tagName == 'INPUT' && (tagType != 'TEXT' && tagType != 'TEXTAREA' && tagType != 'PASSWORD')) {
            return stopIt(ev);
        }
        //input或者textarea输入框如果不可编辑则阻止Backspace
        if ((tagName == 'INPUT' || tagName == 'TEXTAREA') && (obj.readOnly == true || obj.disabled == true)) {
            return stopIt(ev);
        }
    }
}

function stopIt(ev) {
    if (ev.preventDefault) {
        //preventDefault()方法阻止元素发生默认的行为
        ev.preventDefault();
    }
    if (ev.returnValue) {
        //IE浏览器下用window.event.returnValue = false;实现阻止元素发生默认的行为
        ev.returnValue = false;
    }
    return false;
}


var dragPop = {
    modal: ".popup",
    popdrag: function() {
        var _this = this;
        $(_this.modal).each(function() {
            $(this).css("left", "initial!important").find(".poptitle").on("mousedown", function(e) {
                var left = e.clientX,
                    top = e.clientY,
                    $this = $(this).css('cursor', 'move');
                var right = Number($(this).parents(".popup").css('right').replace(/px$/, ''));
                var pretop = Number($(this).parents(".popup").css('top').replace(/px$/, ''));
                var inthis = this;
                $(this).off("mousemove").on("mousemove", function(event) {
                    _this.mouseMove(event, left, top, right, pretop, inthis);
                }).off("mouseup").on("mouseup", function(event) {
                    _this.mouseUp(event, inthis);
                });
            });
        });
    },
    mouseMove: function(e, left, top, right, pretop, inthis) {
        var target = $(inthis).parents(".popup");
        var wrapperWidth = $("body").width();
        var wrapperHeight = $("body").height();
        var l = 0;
        if (wrapperWidth - target.width() - Number(target.css('right').replace(/px$/, '')) <= 0 && left - e.clientX > 0) {
            l = wrapperWidth - target.width();
        } else {
            if (Number(target.css('right').replace(/px$/, '')) <= 0 && left - e.clientX < 0) {
                l = 0;
            } else {
                l = left - e.clientX + right;
            }
        }
        var t = pretop + e.clientY - top;
        t = Math.max((e.clientY - top + pretop) || 0, -target.position().top);
        t = Math.min(t, wrapperHeight - target.height() - 70);
        target.css({ 'right': l, 'top': t });
    },
    mouseUp: function(e, inthis) {
        var el = inthis;
        $(el).css('cursor', 'default');
        $(el).off("mousemove").off("mouseup");
    }
};

/**
 * 初始化Class
 */
var Class = (function() {
    function create() {
        var obj = arguments[0];
        return obj || undefined
    }

    return {
        create: create
    }
})();

/**
 * 后台传值的成功码
 */
var SUCCESSCODE = "E0000000";

/**
 * 无权限
 */
var NOPERMISSION = "E1SP0004";

/**
 * 默认分页配置
 */
var defaultPageinfo = {
    "currentPage": 1,
    "pageSize": 10,
    "totalPage": 0
};

/**
 * 监听父窗口的大小改变事件
 *
 */
function onParentWindowResize() {
    if (typeof window.addEventListener != 'undefined') {
        window.addEventListener('message', onResizeMessage, false);
    } else if (typeof window.attachEvent != 'undefined') {
        //for ie
        window.attachEvent('onmessage', onResizeMessage);
    }
}

function onResizeMessage(event) {
    var data = event.data;
    if (typeof data === 'string') {
        data = $.parseJSON(data);
    }
    if (data && data.type == 1) {
        window.parentWindowWidth = data.winWidth;
        window.parentWindowHeight = data.winHeight;
        window.iframeHeight = data.iframeHeight;
        var top = 0;
        var subMenu = $("#sub-menu");
        if (subMenu.length > 0 && subMenu.is(":visible")) {
            top = 50;
        }
        if ($('body>div').hasClass('tab-nav') && $("body>div.tab-nav").is(":visible")) {
            top = 50;
        }
        $(".content-inner:visible").height(data.iframeHeight - top);
    } else if (data && data.type == 2) {
        window.currentModel = data.currentModel;
        window.currentMenu = data.currentMenu;
    }
}

/**
 * 设置下拉框值
 * @param id 控件id
 * @param value 需要选中的key值
 */
function setSelectIdValue(id, value) {
    var vId = $("#" + id);
    var valText = vId.find("li[value='" + value + "']").text();
    vId.find("input").val(valText);
    vId.find("input").attr("val", value);
}

/**
 * 获取下拉框的选择值
 *
 * @param id
 * @returns 根据id获取自定义val属性值
 */
function getSelectIdValue(id) {
    return $("#" + id).find("input").attr("val");
}

function fetchPermissionData() {
    var tmpUrl = window.location.href;
    if (tmpUrl.indexOf('ccm') != -1) {
        ContextPath = Context_CCM_Server
    } else if (tmpUrl.indexOf('mec') != -1) {
        ContextPath = Context_MEC_Server
    } else if (tmpUrl.indexOf('hosp') != -1) {
        ContextPath = Context_HOSP_Server
    } else {
        ContextPath = ContextClinc_Server
    }
    var options = {
        url: ContextPath + "session/perms/list",
        dataType: 'json'
    };
    var promise = Utils.myAjaxHandler(options);
    promise.done(function(status) {
        if (status != null &&
            status.errorCode == SUCCESSCODE) {
            window.top.sessionUserPermissions = status.data;
            renderPermissionControl();
        } else {
            $.paAlert(status.errorMessage);
        }
    }).fail(function(msg) {
        $.paAlert("初始化权限控制失败!");
    });
}

function renderPermissionControl() {
    var permDomAttrName = "WJPerm";
    $('*[' + permDomAttrName + ']').each(function() {
        var values = $(this).attr(permDomAttrName);
        var valueList = values.split(",");
        for (var index = 0; index < valueList.length; index++) {
            var item = valueList[index];
            var existKey = window.top.sessionUserPermissions[item];
            if (existKey != undefined) {
                $(this).removeClass("wjPermDsn");
                break;
            };
            if ((index == valueList.length - 1) && existKey == undefined) {
                $(this).addClass("wjPermDsn");
            }
        }
    });
}

function norightclick(e) {
    e = e || event;
    if (e.button == 2) {
        var tag = e.srcElement || e.target;
        if (tag.type == "text" || tag.type == "textarea") {
            document.oncontextmenu = new Function("return true;")
        } else {
            document.oncontextmenu = new Function("return false;")
        }
    } else if (e.button == 0) {
        if ($(e.target).parents(".side").length > 0) {} else {
        	if(window.top.menuForIndex){
                window.top.menuForIndex.closeMore();
        	}
        }
    }
}


/**
 * [getPageSize 判断一页展示多少张卡片]
 *fBox为卡片父元素的父元素JQ的对象，一般为'.f_box',也可能是'.fuzhu_box'
 * sBox为卡片模板对象,一般为'#box_template'对象，若是动态生成的，则设置卡片默认宽度为cardWidth
 * mBox为卡片父元素JQ对象
 * cardWidth为卡片默认宽度
 * rowNum为卡片共有几行
 */
function getPageSize(fBox, sBox, mBox, cardWidth, rowNum) {
    if ($(fBox).parents(".cardBoxWrap-Info").length > 0) {
        var scrollWidth = $(fBox).parents(".cardBoxWrap-Info").get(0).offsetWidth - $(fBox).parents(".cardBoxWrap-Info").get(0).clientWidth;
    } else {
        var scrollWidth = 0;
    }
    var fBoxWidth = $(fBox).width() + scrollWidth;
    if ($(sBox).outerWidth(true)) {
        var sBoxWidth = $(sBox).outerWidth(true);
    } else {
        var sBoxWidth = cardWidth;
    }
    var oneWidth = parseInt(fBoxWidth / sBoxWidth) * sBoxWidth;
    oneWidth = oneWidth < sBoxWidth * 3 ? sBoxWidth * 3 : oneWidth;
    $(mBox).width(oneWidth);
    if (rowNum) {
        return parseInt(fBoxWidth / sBoxWidth) * rowNum;
    } else {
        return parseInt(fBoxWidth / sBoxWidth) * 3;
    }

}

/**
* 底部浮动滚条通用方法
* 表格增加类名："x_scroll_table"
* 表格父元素增加类名："x_scroll_table_box"
* 页面调用：$.xScrollTable()
*/

$.xScrollTable = function(options){
	var _default = {
		childDom: ".x_scroll_table",
		parentDom: ".x_scroll_table_box",
		createInDom: ".content-inner",
		yScrollDom: ".tab-content"
	}
	_default = $.extend({}, _default, options);
	var createDomTrue = "<div class=x_scroll_table_box_true><div class=x_scroll_table_true></div></div>";
	if($(".x_scroll_table_box_true").length == 0){
		$(_default.createInDom).append(createDomTrue);
	}
	
	var x_scroll_style = "\
			<style>\
				.x_scroll_table_box_true{position:fixed;width:100%;height:16px;left:0;bottom:0;overflow-y:hidden;overflow-x:auto;background:#f9f9f9;z-index:2222;}\
				.x_scroll_table_true{height:1px;}\
			</style>\
		";
	if($("head").html().indexOf("x_scroll_table_box_true") < 0){
		$("head").append(x_scroll_style);
	}
	//$(_default.yScrollDom).scrollTop(200);
    //var innerScrollTop = $(_default.yScrollDom).scrollTop();
    //$(_default.yScrollDom).scrollTop(0);
    var trueBox = $(_default.parentDom);
    function refreshScroll(){
    	if($(_default.childDom).width() > $(_default.parentDom).width() && trueBox.offset().top + trueBox.height() > $(window).height()){
			$(".x_scroll_table_box_true").show();
			trueBox.css("overflow-x", "hidden");
			var scale = $(_default.childDom).width()/$(_default.parentDom).width();
            var scrollWidth = $(".x_scroll_table_box_true").width();
            $(".x_scroll_table_true").width(scale*scrollWidth);
            $(_default.parentDom).scrollLeft(10000);
            var maxScrollSpace = $(_default.parentDom).scrollLeft();
            $(".x_scroll_table_box_true").scrollLeft(10000);
            var aMaxScrollSpace =  $(".x_scroll_table_box_true").scrollLeft();
            $(_default.parentDom).scrollLeft(0);
            $(".x_scroll_table_box_true").scrollLeft(0);
            $(".x_scroll_table_box_true").off("scroll").on("scroll", function (e) {
                var toLeft = $(".x_scroll_table_box_true").scrollLeft() * maxScrollSpace / aMaxScrollSpace;
                $(_default.parentDom).scrollLeft(toLeft);
            });
		}else{
			$(".x_scroll_table_box_true").hide();
			trueBox.css("overflow-x", "auto");
		}
    }
    refreshScroll();
    var timer = null;
    $(window).on("resize", function(){
    	clearTimeout(timer);
    	timer = setTimeout(function(){
        	refreshScroll();
    	}, 300);
    });
}

$(function() {

    $(".drop").on('click', function(event) {
        if (!$(this).hasClass('disabled')) {
            $(".drop-menu").hide('fast');

            var input = $(this).find('input');
            var menu = $(this).find('.drop-menu');
            var listItems = menu.find('li[hidden!="hidden"]');
            var offset = input.offset();
            var posTop = input.outerHeight(true);
            var maxHeight = 142;
            var lineHeight = 28;
            var borderHeight = 2;
            var menuHeight = (listItems.length * lineHeight + borderHeight) > maxHeight ? maxHeight : (listItems.length * 28 + 2);
            var parentWinHeight = window.parentWindowHeight ? window.parentWindowHeight : $(window).height();
            var parentTop = 70;
            if ((offset.top + menuHeight + parentTop) > parentWinHeight) {
                //往上面弹出
                posTop = -menuHeight;
            }
            menu.css({ top: posTop });
            menu.show();
        }
    });
    $("body").on("click", ".drop-menu li", function(event, isPresentTxt) {
        var text = $(this).text();
        var val = $(this).attr("value");
        var paInput = $(this).parents('.drop').find('input');

        //展示值
        if (!$(this).parents('.drop').hasClass('prentFalse')) {
            paInput.val(text);
        }
        //实际值
        paInput.attr("val", val);
        paInput.blur();
        $(this).parents('.drop-menu').hide('');
    });

    //点击页面其他地方使下拉菜单收回
    $("body").click(function(e) {
        if (!$(e.target).closest(".drop").length) {
            $(".drop-menu").hide();
        }
        //收回联想框
        if (!$(e.target).closest(".think-box").length) {
            $(".think-box").hide();
        }
    });

    // 复选框
    $(".checkboxes").on('click', 'li', function(event) {
        $(this).hasClass('checked') ? $(this).removeClass('checked') : $(this).addClass('checked');
    });
    //单选
    $(".radio").on('click', function(event) {
        if (!$(this).hasClass('checked')) {
            $(this).addClass('checked').siblings().removeClass('checked');
        }
    });
    // 弹窗关闭
    $(".close").on('click', function(event) {
        $(this).parents(".popup").hide();
    });
    //搜索框增加回车事件
    $(".js_search_btn").siblings("input").on("keyup", function(e) {
        var e = e || event;
        if (e.keyCode == 13) {
            $(this).siblings(".js_search_btn").click();
        }
    })

    //监听父窗口的resize事件，把父窗口的大小信息挂在iframe上
    onParentWindowResize();
    //IE判断
    if (navigator.userAgent.indexOf('MSIE') >= 0 || !!window.ActiveXObject || "ActiveXObject" in window) {
        $(document).find("head").append('<style>.common-table tr:hover{box-shadow:0 0 0 transparent, 0 0 0 transparent!important;}</style>');
    }
    // 屏蔽右键
    document.oncontextmenu = new Function("return false;"); // for IE5+
    document.onmousedown = norightclick;


    dragPop.popdrag();

    ////禁止backspace键返回
    document.onkeypress = banBackSpace;
    document.onkeydown = banBackSpace;

    //防止页面后退
    if (history.pushState) {
        history.pushState(null, null, document.URL);
    }
    window.addEventListener('popstate', function() {
        history.pushState(null, null, document.URL);
    });
});