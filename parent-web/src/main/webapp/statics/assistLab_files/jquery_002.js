/**
 * Created by GONGOUYANG545 on 2017/6/19.
 */
;
(function ($) {

    var WJZS_cellDataKey = 'drop_data';
    var WJZS_allDataKey = 'all_drop_data';
    var WJZS_versionKey = 'wj-version';
    var WJZS_checkedDataKey = 'checked_data';

    function WJZSDropCheckboxList(inputEl, data, checkedData, options, callback) {
        var self = this;
        //通过idkey值，形成完整的checkData值
        self.fillDataCell(checkedData,data,options);
        this._inputEl = inputEl;
        this._dropEl = inputEl.parent();
        this._data = $.extend({}, this._data, data);
        this._checkedData = checkedData;
        this._version = new Date().getTime();
        this._options = options;
        this._d_options = $.extend({}, this._d_options, this._options);
        this._callback = callback;
        this._init();
    }

    WJZSDropCheckboxList.prototype = {
        _data: [],
        _checkedData:[],
        _d_options: {
            idKey: 'id',
            txtKey: 'txt',
            isNeedAll: false,
            isNeedClear: true,
            oneSelected:false
        },
        //特殊值，门诊数量
        _sNum:0,
        _KEY: {
            UP: 38,
            DOWN: 40,
            DEL: 46,
            TAB: 9,
            RETURN: 13,
            ESC: 27,
            COMMA: 188,
            PAGEUP: 33,
            PAGEDOWN: 34,
            BACKSPACE: 8
        },
        _dropEl: null,
        _inputEl: null,
        _itemEl: null,
        _callback: null,
        _cellDataKey: WJZS_cellDataKey,
        _allDataKey: WJZS_allDataKey,
        _checkedDataKey:WJZS_checkedDataKey,
        _version: null,
        _versionKey: WJZS_versionKey,
        _timer: null,

        _init: function () {
            this._initData();
            this._initEls();
            this._bindEvent();
        },

        _initData: function () {
            var dropData = [];
            $.merge(dropData, this._data);
            this._data = dropData;
        },

        _initEls: function () {
            var self = this;
            //数据
            this._inputEl.data(this._allDataKey, this._data);
            this._dropEl.data(this._versionKey, this._version);
            this._inputEl.prop("readonly", true);
            //选中后项目的显示区域

            this._itemEl = this._dropEl.find('.wjzs-drop-show');
            if(!this._itemEl[0]){
                this._dropEl.prepend('<div class="wjzs-drop-show"></div>');
                this._itemEl = this._dropEl.find('.wjzs-drop-show');
            }

            if (this._dropEl.hasClass('drop')) {
                this._dropEl.addClass('drop-checkbox-wrap');
                this._dropEl.find('.wjzs-drop-menu').remove();
                var ulEl = $('<ul class="wjzs-drop-menu dsn checkbox-box wjzs-drop-checkbox-menu"></ul>');
                $.each(this._data, function (i) {
                    var id = this[self._d_options.idKey];
                    var txt = this[self._d_options.txtKey];
                    var liEl = $('<li class="drop-item checkbox-item" title="' + txt + '" value="' + id + '" data-value="' + id + '">' + '</li>').addClass(i % 2 == 0 ? "drop_even" : "drop_odd").addClass(i == 0 ? "drop_over" : "");
                    liEl.html('<input id=' + id + ' type="checkbox" class="" >'+'<span>'+txt + '</span>');
                    liEl.data(self._cellDataKey, this);
                    liEl.data(self._versionKey, self._version);
                    ulEl.append(liEl);
                });

                this._dropEl.append(ulEl);
            }else{
                var d = $('<div class="drop drop-checkbox-wrap"></div>');
                this._dropEl.append(d);
            }
            self._initCheckedData();
        },

        _initCheckedData:function () {
            var self = this;
            var val = '',text='',str='';
            var menu = self._dropEl.find('.wjzs-drop-menu');
            var liEl = self._dropEl.find('.wjzs-drop-menu>li');
            var inputStr = '';
            this._inputEl.data(this._checkedDataKey, this._checkedData);
            self._sNum = 0;
            //通过idkey值，形成完整的checkData值
            self.fillDataCell(self._checkedData,self._data,self._options);
            if(!self._checkedData||(self._checkedData&&self._checkedData.length==0)){
                self._sNum = 0;
            }else{
                for(var k in self._checkedData){
                    if(self._checkedData[k][self._d_options.dKey]=='门诊'){
                        self._sNum++;
                    }
                }
            }
            liEl.children('span').removeClass('active');
            liEl.children('input').removeAttr('checked');
            liEl.removeClass('active');
            for(var i in self._checkedData){
                val = self._checkedData[i][self._d_options.idKey];
                if(self._d_options.txtKey2&&self._d_options.txtKey2.length>0){
                     text = self._checkedData[i][self._d_options.txtKey2];
                }else{
                    text = self._checkedData[i][self._d_options.txtKey];
                }
                inputStr+=text+' ';
                liEl.each(function () {
                   if($(this).attr('value')==val){
                       $(this).children('span').addClass('active');
                       $(this).children('input')[0].checked = true;
                       $(this).addClass('active');
                       //$(this).children('input').attr('checked',true);
                   }
                });
                str += '<span class="drop-checkbox-item" value="'+val+'" > <i class="close">×</i>'+text+'</span>';
            }
            self._inputEl.val(inputStr).attr('val', inputStr).blur() ;

            self._itemEl.html(str);

            //展示
            if(liEl.length>0){
                self.menuTopShow(self._inputEl,menu,liEl);
            }
            
        },

        _bindEvent: function () {
            var self = this;
            this._dropEl.find('li').click(function (event) {
                event.stopPropagation();
                var liEl = $(this);
                var version = liEl.data(self._versionKey);
                var flag = true;
                if (liEl.hasClass('drop-item') && version == self._version) {
                    var paInput = self._inputEl;
                    var checkboxThis = $(this).find('input');
                    var checkboxFlag = checkboxThis[0].checked;
                    var cellData = liEl.data(self._cellDataKey);
                    var pType = cellData[self._d_options.dKey];

                    paInput.removeClass('pawjzs-error');
                    self._dropEl.removeClass('pawjzs-error');
                    //checkbox
                    if(checkboxFlag){
                        //数据
                        self.delData(cellData[self._d_options.idKey]);
                        flag = false;
                    }else{
                        //数据
                        if(self._d_options.oneSelected && self._checkedData.length > 0){
                            $.paWarn(self._d_options.oneSelected);
                        }else{
                            if(pType=='门诊'){
                                self._sNum++;
                            }
                            if(self._sNum>=2){
                                $.paWarn('门诊科室只可单选',1000);
                                self._sNum = 1;
                            }else{
                                self._checkedData.push(cellData);
                                flag = true;
                            }
                        }
                    }
                    paInput.data(self._checkedDataKey,self._checkedData);
                    //展示
                    self._initCheckedData();
                    if(self._callback){
                        self._callback(event, self._checkedData,cellData,flag);
                    }

                }

            }).on("mouseover", function () {
                $(this).addClass("drop_over").siblings().removeClass("drop_over");
            });

            //点击页面其他地方使下拉菜单收回
            $(document).click(function (e) {
                if (!$(e.target).closest(".drop").length) {
                    $(".wjzs-drop-checkbox-menu").hide('fase');
                    $('.wjzs-drop-checkbox-menu').scrollTop(0);
            }
            });

            this._dropEl.delegate(".drop-checkbox-item","click",function(event){
                event.stopPropagation();
                var id = $(this).attr('value');
                var delCell = self.delData(id);
                if(self._callback){
                    self._callback(event, self._checkedData,delCell,false);
                }

                self._initCheckedData();
            });


            this._dropEl.on('click', function (event) {
                var version = $(this).data(self._versionKey);
                var menu = $(this).find('.wjzs-drop-checkbox-menu');
                if (!$(this).hasClass('disabled') && menu.length > 0 && version == self._version) {
                    $(".wjzs-drop-checkbox-menu").hide('fast');
                    $('.wjzs-drop-checkbox-menu').scrollTop(0);
                    var inputObj = $(this).find('.input-text');
                    menu.show();
                    menu.scrollTop(0);
                    var input = $(this).find('input');
                    var listItems = menu.find('li:visible');
                    if(listItems.length>0){
                        self.menuTopShow(input,menu,listItems);
                    }


                }
            });

        },

        menuTopShow:function (input,menu,listItems) {
            var self = this;
            var h = self._itemEl.outerHeight(true);
            self._dropEl.height(h);
            var offset = input.offset();
            var posTop = self._dropEl.outerHeight(true)-2;
            var maxHeight = 142;
            var lineHeight = 28;
            var borderHeight = 2;
            var menuHeight = listItems.length * lineHeight + borderHeight;
            menuHeight = menuHeight > maxHeight ? maxHeight : menuHeight;
            var parentWinHeight = window.parentWindowHeight ? window.parentWindowHeight : $(window).height();
            var popH = $(self._dropEl).parents('.popup').outerHeight(true);
            if(popH>0){
                parentWinHeight = Math.min(popH,parentWinHeight);
            }

            var parentTop = 90;
            if ((offset.top + menuHeight + parentTop) > parentWinHeight) {
                //往上面弹出
                posTop = -menuHeight;
            }
            menu.css({top: posTop});
        },
        delData:function (id) {
            var self = this;
            var idKey = self._d_options.idKey;
            var dKey = self._d_options.dKey;
            var pType = '';
            var n = 0;
            var cellData = {};
            for(var i in self._checkedData){
                if(self._checkedData[i][idKey] == id){
                    pType = self._checkedData[i][dKey];
                    cellData = self._checkedData[i];
                    if(pType=='门诊'){
                        self._sNum--;
                    }
                    n = i;
                    break;
                }
            }
            self._checkedData.splice(n,1);
            return cellData;
        },

        //通过id值，获得该条数据
        getData:function (id,data,options) {
            var cellData = {};
            for(var i in data){
                if(data[i][options.idKey] == id){
                    cellData = data[i];
                    break;
                }
            }
            return cellData;
        },

        //通过idkey值，形成完整的checkData值
        fillDataCell:function (cellDataList,data,options) {
            var f = false,self = this;
            for(var i in cellDataList){
                f = typeof(cellDataList[i]) == "object" && Object.prototype.toString.call(cellDataList[i]).toLowerCase() == "[object object]" && !cellDataList[i].length;
                if(f){
                    if(!cellDataList[i][options.txtKey]||!cellDataList[i][options.txtKey2]){
                        cellDataList[i] = self.getData(cellDataList[i][options.idKey],data,options);
                    }
                }else{
                    cellDataList[i] = self.getData(cellDataList[i],data,options);
                }
            }
            return cellDataList;
        }
    };


    var  WJZS_DropCheckbox = {},WJZS_DropCheckBoxNum = 0;
    $.fn.extend({
        WJZSDropCheckbox: function (data,checkedData, options, callback) {
            var id = $(this).attr('id');
            WJZS_DropCheckBoxNum++;
            if(!id){
                id = 'WJZS_DropCheckbox' + WJZS_DropCheckBoxNum;
                $(this).attr('id',id);
            }
            WJZS_DropCheckbox[id] = new WJZSDropCheckboxList($(this), data,checkedData, options, callback);
        },

        GetWJZSDropCheckboxSelectedData: function () {
            return $(this).data(WJZS_checkedDataKey);
        },
        GetWJZSDropCheckboxAllData: function () {
            return $(this).data(WJZS_allDataKey);
        },

        SetWJZSDropCheckboxSelectedData:function (checkedData,options) {
            var id = $(this).attr('id'),f;
            var w = WJZS_DropCheckbox[id];
            if(w){
                w._checkedData = checkedData||[];
                if(options){
                    w._options = options;
                }
                w._initCheckedData();
            }


        },
        cleanDropCheckboxItem: function(){
            var menu = $(this).parent().find('.wjzs-drop-menu');
            menu.remove();
        }
    });

})(jQuery);

/************************使用文档************************************/
/*调用的dom格式和单选下拉框相同*/
/*
 * 1）初始化上级科室下拉框
 * $("#departmentDrop").WJZSDropCheckbox(datas,s_datas, dropOptions,callback});
 * datas: 所有下拉框的数据，json数组
 * s_datas：选中的下拉框的数据，json数组
 * dropOptions：json对象，id:对应列的id值，唯一；txtKey：下拉框显示的文本名称，为科室名称及科室属性（括号内为科室属性）；txtKey2：显示区域显示的科室名;dKey:科室属性
 * callback：选中后或删除选项后的回调函数callback(event, d, cell, flag),
 *      d:为选中的数据，json数组;cell:为当前选择列的数据;flag：代表当前操作室添加还是删除。true：代表添加，false代表删除;
 *
 * 2）初始化过后，获得选中列表的数据
 * $("#departmentDrop").GetWJZSDropCheckboxSelectedData();
 *
 * 3）初始化过后，重置选中列表中的数据
 * $("#departmentDrop").SetWJZSDropCheckboxSelectedData(s_datas);
 * s_datas：选中的下拉框的数据，json数组（类似s_datas2，s_datas4）或者idKey的数据组成的数组（类似：s_datas3）
 *
 * 4）初始化过后，获得所有下拉框的数据
 * $("#departmentDrop").GetWJZSDropCheckboxAllData();
 * */

/***************************使用例子***************************************/
/**
 var datas = [
 {"DEPARTMENT_NAME":"ceshizhuanke","DEPARTMENT_ID":"c60ee0480f434fd2b13859823208603b","CLINIC_ID":"a018f483-7002-4baa-ab90-604bb27d721b","DEPARTMENT_TYPE":0,"DEPARTMENT_CODE":"1","PARENT_ID":null,'DEPARTMENT_TYPE':'门诊'},
 {"DEPARTMENT_NAME":"科室管理测试01","DEPARTMENT_ID":"c2d370fde2c14d9d8983858fdfacc2cb","CLINIC_ID":"a018f483-7002-4baa-ab90-604bb27d721b","DEPARTMENT_TYPE":3,"DEPARTMENT_CODE":"0123456","PARENT_ID":null,'DEPARTMENT_TYPE':'门诊'},
 {"DEPARTMENT_NAME":"体检科","DEPARTMENT_ID":"3D611A4B0BB59EC2E053CA3214AC30F4","CLINIC_ID":"aflag018f483-7002-4baa-ab90-604bb27d721b","DEPARTMENT_TYPE":4,"DEPARTMENT_CODE":"101","PARENT_ID":null,'DEPARTMENT_TYPE':'门诊s'},
 {"DEPARTMENT_NAME":"一般检查","DEPARTMENT_ID":"3D611A4B0BB39EC2E053CA3214AC30F4","CLINIC_ID":"a018f483-7002-4baa-ab90-604bb27d721b","DEPARTMENT_TYPE":1,"DEPARTMENT_CODE":"109","PARENT_ID":null,'DEPARTMENT_TYPE':'门诊s'},
 {"DEPARTMENT_NAME":"妇科","DEPARTMENT_ID":"3D611A4B0BAE9EC2E053CA3214AC30F4","CLINIC_ID":"a018f483-7002-4baa-ab90-604bb27d721b","DEPARTMENT_TYPE":1,"DEPARTMENT_CODE":"102","PARENT_ID":null,'DEPARTMENT_TYPE':'门诊s'}];

 var dropOptions = {
        idKey : 'DEPARTMENT_ID',
        txtKey : 'DEPARTMENT_NAME',
        txtKey2: 'DEPARTMENT_NAME',
        dKey:'DEPARTMENT_TYPE'
    };

 var s_datas = [];

 var s_datas2 = [
 {"DEPARTMENT_ID":"c60ee0480f434fd2b13859823208603b"},
 {"DEPARTMENT_ID":"c2d370fde2c14d9d8983858fdfacc2cb"}];

 var s_datas3 = ["3D611A4B0BB59EC2E053CA3214AC30F4","3D611A4B0BAE9EC2E053CA3214AC30F4"];

 var s_datas4= [
 {"DEPARTMENT_NAME":"一般检查","DEPARTMENT_ID":"3D611A4B0BB39EC2E053CA3214AC30F4","CLINIC_ID":"a018f483-7002-4baa-ab90-604bb27d721b","DEPARTMENT_TYPE":1,"DEPARTMENT_CODE":"109","PARENT_ID":null,'DEPARTMENT_TYPE':'门诊s'},
 {"DEPARTMENT_NAME":"妇科","DEPARTMENT_ID":"3D611A4B0BAE9EC2E053CA3214AC30F4","CLINIC_ID":"a018f483-7002-4baa-ab90-604bb27d721b","DEPARTMENT_TYPE":1,"DEPARTMENT_CODE":"102","PARENT_ID":null,'DEPARTMENT_TYPE':'门诊s'}];


 **/

//   $("#departmentDrop").WJZSDropCheckbox(datas,s_datas, dropOptions);
//    $("#departmentDrop").SetWJZSDropCheckboxSelectedData(s_datas2);
//    $("#departmentDrop").SetWJZSDropCheckboxSelectedData(s_datas3);
//   $("#departmentDrop").SetWJZSDropCheckboxSelectedData(s_datas4);
