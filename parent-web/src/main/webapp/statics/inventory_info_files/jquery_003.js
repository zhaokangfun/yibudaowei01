;(function ($) {
    /**
     *渲染表单请先在页面加入一个DIV并给其一个唯一id，如：id='box';
     *渲染复选表单方法：$('#box').setInputForm(data,options,callback);
     *@data:为请求的数据，格式[{},{},{},...];
     *@options默认为{type: 'radio',idKey:'id',txtKey:'txt'} 复选将type设置成'checkbox';
     *@callback(data,obj)为点击表单触发的回调;data是被选中的数据,obj为所点击的li原生DOM元素;
    */
    /**********************************方法***************************************/
    $.fn.extend({
		
        /**
         * 单/复选框方法: 初始化表单 若为单选框则在则配置options{type: 'radio'},若为复选框则配置options{type: 'checkbox'}
         */
        setInputForm: function(data,options,callback) {
           new SetInputFormList($(this),data,options,callback);
           return $(this);
        },
        /**
         * 单/复选框方法: 获取指定元素下所有input单/复选框JQuery对象集合
         */
        getAllInputEls: function(callback){
        	var jqInput = $(this).find("ul li input");
            if(callback){
            	callback(jqInput);
            }
            return $(this);
        },
        /**
         * 单/复选框方法: 获取指定元素下所有被选中的input单/复选框JQuery对象集合
         */
        getInputCheckedEls: function(callback){
            var jqInput = $(this).find("ul li input[checked='true']");
            if(callback){
            	callback(jqInput);
            }
            return $(this);
        },
        /**
         * 单/复选框方法: 获取被选中的数据，data格式:[{},{},{},...]，单选则为[{}]
         */
        getCheckedData: function(){
            var checkedData = [];
            $(this).find('ul li input').each(function(){
                if($(this).prop('checked')){
                    checkedData.push($(this).parent().data('tempdata'));
                }
            });
            return checkedData;
        },
        /**
         * 复选框方法: 选中所有复选框(不包括已禁用的复选框)
         */
        checkedAll: function(){
            if($(this).find('ul').hasClass('checkbox-box')){
                $(this).find('ul li').each(function(){
                    if(!$(this).hasClass('disabled')){
                        $(this).find('input').prop('checked',true);
                        $(this).find('span').addClass('active');
                    }
                });
            }
            return $(this);
        },
		/**
         * 单复选框方法: 取消选中所有单复选框(不包括已禁用的复选框)
         */
        cancelCheckedAll: function(){
            $(this).find('ul li').each(function(){
                if(!$(this).hasClass('disabled')){
                    $(this).find('input').prop('checked',false);
                    $(this).find('span').removeClass('active');
                }
            });
            return $(this);
        },
        /**
         * 单/复选框方法: 选中指定的选项框(不包括已禁用的选项框),
         * 参数options可为数组，如：[0,1,2]表示选中第0,1和2个复选框；单选如[0]
         * 也可为对象，如：[{userid:'test1'},{userid:'test2'}]表示选中userid为'test1'和userid为'test2'的复选框(选中两个)；
         * 单选框时,如：[{userid:'test',name:'xxx'}]表示选中userid为'test'且name为'xxx'的单选框(只选中1个)；
         */
        checkedItem: function(options){
            if($(this).find('ul').hasClass('checkbox-box')){
                if(!isNaN(options[0])){
                    for(var i=0; i<options.length; i++){
                        var tempLi = $(this).find('ul li').eq(options[i]);
                        if(!tempLi.hasClass('disabled')){
                            tempLi.find('input').prop('checked',true);
                            tempLi.find('span').addClass('active');
                        }
                    }
                }else if(options[0] instanceof Object){
                	for(var j=0; j<options.length; j++){
                		$(this).find('ul li').each(function(){
                			var flag = true;
                            var tempdata = $(this).data('tempdata');
                            for(i in options[j]){
                            	if(($(this).hasClass('disabled')) || (tempdata[i] != options[j][i])){
                            		flag = false;
                            		break;
                                }
                            }
                            if(flag){
                            	 $(this).find('input').prop('checked',true);
                                 $(this).find('span').addClass('active');
                            }
                            
                        });
                		
                	}
                    
                }
            }else if($(this).find('ul').hasClass('radio-box')){
                if(!isNaN(options[0])){
                    var tempLi = $(this).find('ul li').eq(options[0]);
                    if(!tempLi.hasClass('disabled')){
                        $(this).find('li input').prop('checked',false);
                        $(this).find('li span').removeClass('active');
                        tempLi.find('input').prop('checked',true);
                        tempLi.find('span').addClass('active');
                    }
                }else if(options[0] instanceof Object){
                    $(this).find('ul li').each(function(){
                        var flag = true;
                        for(i in options[0]){
                            var tempdata = $(this).data('tempdata');
                            if($(this).hasClass('disabled') || (tempdata[i] != options[0][i])){
                                flag = false;
                                break;
                            }
                        }
                        if(flag){
                            $(this).parent().find('li input').prop('checked',false);
                            $(this).parent().find('li span').removeClass('active');
                            $(this).find('input').prop('checked',true);
                            $(this).find('span').addClass('active');
                        }
                    });
                }
            }
            return $(this);
        },
        /**
         * 复选框方法:取消选中指定的复选框(不包括已禁用的复选框);
         * 也可为对象，如：[{userid:'test1'},{userid:'test2'}]表示取消选中userid为'test1'和userid为'test2'的复选框；
         * 单选框时,如：[{userid:'test',name:'xxx'}]表示取消选中userid为'test'且name为'xxx'的单选框；
         */
        cancelCheckedItem: function(options){
            if($(this).find('ul').hasClass('checkbox-box')){
                if(!isNaN(options[0])){
                    for(var i=0; i<options.length; i++){
                        var tempLi = $(this).find('ul li').eq(options[i]);
                        if(!tempLi.hasClass('disabled')){
                            tempLi.find('input').prop('checked',false);
                            tempLi.find('span').removeClass('active');
                        }
                    }
                }else if(options[0] instanceof Object){
                    for(var j=0; j<options.length; j++){
                		$(this).find('ul li').each(function(){
                			var flag = true;
                            var tempdata = $(this).data('tempdata');
                            for(i in options[j]){
                            	if(($(this).hasClass('disabled')) || (tempdata[i] != options[j][i])){
                            		flag = false;
                            		break;
                                }
                            }
                            if(flag){
                            	$(this).find('input').prop('checked',false);
                                $(this).find('span').removeClass('active');
                            }
                            
                        });
                		
                	}
                }
            }
            return $(this);
        },
        /**
         * 单/复选框方法: 	
         */
        disabledAll: function(){
            $(this).find('ul li').addClass('disabled');
            return $(this);
        },
        /**
         * 单/复选框方法: 禁用指定的选项框;
         * 参数options可为数组，如：[0,1,2]表示选中第0,1和2个复选框；单选如[0]
         * 也可为对象，如：[{userid:'test1'},{userid:'test2'}]表示禁用userid为'test1'和userid为'test2'的复选框；
         * 单选框时,如：[{userid:'test',name:'xxx'}]表示禁用userid为'test'且name为'xxx'的单选框(只选中1个)；
         */
        disabledItem: function(options){
            if(!isNaN(options[0])){
                for(var i=0; i<options.length; i++){
                    $(this).find('ul li').eq(options[i]).addClass('disabled');
                }
            }else if(options[0] instanceof Object){
            	for(var j=0; j<options.length; j++){
            		
            		$(this).find('ul li').each(function(){
            			var flag = true;
                        var tempdata = $(this).data('tempdata');
                        for(i in options[j]){
                        	if(tempdata[i] != options[j][i]){
                        		flag = false;
                        		break;
                            }
                        }
                        if(flag){
                        	$(this).addClass('disabled');
                        }
                    });
            		
            	}
                
            }
            return $(this);
        },
        /**
         * 单/复选框方法: 取消禁用(所有的选项框)
         */
        cancelDisabledAll: function(){
            $(this).find('ul li').removeClass('disabled');
            return $(this);
        },
        /**
         * 单/复选框方法: 取消禁用(指定的选项框);
         * 参数options可为数组，如：[0,1,2]表示选中第0,1和2个复选框；单选如[0]
         * 也可为对象，如：[{userid:'test1'},{userid:'test2'}]表示取消禁用userid为'test1'和userid为'test2'的复选框；
         * [{userid:'test',name:'xxx'}]表示取消禁用userid为'test'且name为'xxx'的单选框；
         */
        cancelDisabledItem: function(options){
            if(!isNaN(options[0])){
                for(var i=0; i<options.length; i++){
                    $(this).find('ul li').eq(options[i]).removeClass('disabled');
                }
            }else if(options[0] instanceof Object){
    			for(var j=0; j<options.length; j++){
            		
            		$(this).find('ul li').each(function(){
            			var flag = true;
                        var tempdata = $(this).data('tempdata');
                        for(i in options[j]){
                        	if(tempdata[i] != options[j][i]){
                        		flag = false;
                        		break;
                            }
                        }
                        if(flag){
                        	$(this).removeClass('disabled');
                        }
                    });
            		
            	}
            }
            return $(this);
        },
		
		
		/**
         * 若为拷贝的结构, 则需要调用以下方法初始化表单:$('#box').initInputForm(function(data, obj){  })
         */
		initInputForm: function(callback){
            var thisUL = $(this).find('ul');
            thisUL.find('li span').off('click').on('click', function(){
                var that = this;
                if(!$(this).parent().hasClass('disabled')){
                    if(thisUL.hasClass('radio-box')){
                        if(!$(this).prev('input').prop('checked')){
                            $(this).parent().parent().find('li input').prop('checked',false);
                            $(this).parent().parent().find('li span').removeClass('active');
                            $(this).prev('input').prop('checked',true);
                            $(this).addClass('active');
                        }
                        if(callback){
                            var data = [];
							thisUL.find('li input').each(function(){
								if($(this).prop('checked')&&$(this).next().hasClass('active')){
									var id = $(this).attr('id');
									var txt = $(this).next().text();
									var tmpObj = {};
									tmpObj.id = id;
									tmpObj.txt = txt;
									data.push(tmpObj);
								}
							});
                            callback(data,$(that).parent().get(0));
                        }
                    }else if(thisUL.hasClass('checkbox-box')){
                        if($(this).prev('input').prop('checked')){
                            $(this).prev('input').prop('checked',false);
                        }else{
                            $(this).prev('input').prop('checked',true);
                        }
                        $(this).toggleClass('active');
                        if(callback){
                            var data = [];
							thisUL.find('li input').each(function(){
								if($(this).prop('checked')&&$(this).next().hasClass('active')){
									var id = $(this).attr('id');
									var txt = $(this).next().text();
									var tmpObj = {};
									tmpObj.id = id;
									tmpObj.txt = txt;
									data.push(tmpObj);
								}
							});
                            callback(data,$(that).parent().get(0));
                        }
                    }
                    
                    
                }
            });
		}
		
		
    });
    
    
    /***************************************************************/
    
    function SetInputFormList(inputEl,data,options,callback){
        this._inputEl = inputEl;
        this._data = $.extend({}, this._data, data);
        this._d_options = $.extend({}, this._d_options, options);
        this._callback = callback;
        this._init();
    }

    SetInputFormList.prototype = {
        _data: [],
        _d_options: {
            type: 'radio',
            idKey: 'id',
            txtKey: 'txt'
        },
        _init:function(){
            this._initEls();
            this._bindEvent();
        },
        _initEls:function(){
            var self = this;
            this._inputEl.empty().append("<ul class='clear'></ul>");
            var thisUL = this._inputEl.find('ul').addClass(self._d_options.type+'-box');
            if(this._d_options.type=='radio'){
                $.each(this._data, function (i) {
                    var id = this[self._d_options.idKey];
                    var txt = this[self._d_options.txtKey];
                    var tempdata = this;
                    var liEls = $(
                        '<li class="radio-item clear">'
                        +'<input id=' + id + ' type="radio">'
                        +'<span title=' + txt + '>'+ txt +'</span>'
                        +'</li>'
                    );
                    liEls.data("tempdata",tempdata);
                    thisUL.append(liEls);
                });
            }else if(this._d_options.type=='checkbox'){
                $.each(this._data, function (i) {
                    var id = this[self._d_options.idKey];
                    var txt = this[self._d_options.txtKey];
                    var tempdata = this;
                    var liEls = $(
                        '<li class="checkbox-item clear">'
                        +'<input id=' + id + ' type="checkbox">'
                        +'<span title=' + txt + '>'+ txt +'</span>'
                        +'</li>'
                    );
                    liEls.data("tempdata",tempdata);
                    thisUL.append(liEls);
                });
            }
        },
        _bindEvent:function(){
            var self = this;
            var thisUL = this._inputEl.find('ul');
            this._inputEl.find('ul li span').off('click').on('click', function(){
                var that = this;
                if(!$(this).parent().hasClass('disabled')){
                    if(self._d_options.type=='radio'){
                        if(!$(this).prev('input').prop('checked')){
                            $(this).parent().parent().find('li input').prop('checked',false);
                            $(this).parent().parent().find('li span').removeClass('active');
                            $(this).prev('input').prop('checked',true);
                            $(this).addClass('active');
                        }
                        if(self._callback){
                            var data = $(that).parent().data('tempdata');
                            self._callback(data,$(that).parent().get(0));
                        }
                    }else if(self._d_options.type=='checkbox'){
                        if($(this).prev('input').prop('checked')){
                            $(this).prev('input').prop('checked',false);
                        }else{
                            $(this).prev('input').prop('checked',true);
                        }
                        $(this).toggleClass('active');
                        if(self._callback){
                        	var data = $(that).parent().data('tempdata');
                            self._callback(data,$(that).parent().get(0));
                        }
                    }
                    
                    
                }
            });
        }
    }

})(jQuery);