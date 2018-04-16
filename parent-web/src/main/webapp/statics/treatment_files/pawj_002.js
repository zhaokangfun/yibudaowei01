/**
 * Created by WANGHONGLIANG909 on 2017-03-15.
 */
/**
 * objEl 查找范围
 * options 配置
 * 	|-necessary 是否更改查找的class
 * 	|-clz 新的class，默认为e-switch
 * 	|-dynamic 是否每次扫描
 * callback 回调函数 将当前光标所在的元素返回
 * 
 */
;
(function ($) {

    function KeyBoardHandler(objEl, options, callback) {
        this._element = objEl;
        this._settings = $.extend({}, this._settings, options);
        this._callback = callback;
        this._init();
    }

    KeyBoardHandler.prototype = {
        _element: null,
        _settings: {},
        _callback: null,

        _init: function () {
            var eType = this._settings.eType;
            if (!eType || eType == 'c_switch') {
                this._cursorSwitch();
            }
        },

        _searchNextEle: function (i, enterNextArray) {
        	var that = this;
            if (i < enterNextArray.length - 1) {
                var next = $(enterNextArray[i + 1]);
                if (!next.is(":visible")) {
                    return that._searchNextEle(i + 1, enterNextArray);
                } else {
                    return next;
                }
            }
        },

		_searchAllEle: function () {
			var that = this;
			var allEle = that._element.find("input[type='text']:visible:not(:disabled), input[type='password']:visible:not(:disabled), input[type='email']:visible:not(:disabled), input[type='number']:visible:not(:disabled)");
            if (that._settings.necessary) {
                var vClz = that._settings.clz ? "." + that._settings.clz : ".e-switch";
                allEle = allEle.filter(vClz);
            }
			return allEle;
		},
		
		_cursorFocus: function (ele, curEl) {
			var that = this;
			ele.select().focus().click();
			if(that._callback && that._callback instanceof Function) {
				that._callback(curEl);
			}
		},

        _cursorSwitch: function () {
            var that = this;
            if (that._element.length > 1) {
                return;
            }
            var inputItems = that._searchAllEle();
            that._element.off('keyup').on('keyup', function (e) {
                if (e.keyCode == 13) {
                    var bFlag = true;
                    // 如果每次扫描，则每次都获取包含指定class的元素
                    if(that._settings.dynamic) {
                    	inputItems = that._searchAllEle();
                    }
                    inputItems.each(function (index, ele) {
                        if ($(ele).is(":focus")) {
                            bFlag = false;
                            if (index === (inputItems.length - 1)) {
                                that._cursorFocus(inputItems.eq(0), $(ele));
                            } else {
                                var nextItem = that._searchNextEle(index, inputItems);
                                that._cursorFocus(nextItem, $(ele));
                            }
                            return bFlag;
                        }
                    });
                    if (bFlag) {
                    	that._cursorFocus(inputItems.eq(0), inputItems.eq(0));
                    }
                }
            });
        }
    };

    $.fn.extend({
        paKeyHandle: function (options, callback) {
            new KeyBoardHandler($(this), options, callback);
        }
    });

})(jQuery);