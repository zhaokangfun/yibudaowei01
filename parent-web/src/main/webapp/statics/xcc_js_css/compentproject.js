$(function() {
    $("#list_div").show();
    $("#add_edit_div").hide();
    $("#btn_add").on("click",
    function() {
        $("#list_div").hide();
        $("#add_edit_div").show();
        compentproj_js.clearRoyalty();
        var a = $(".left-column-list .current").attr("value");
        $("#examFlagsele").SetWJZSDropdownSelectedData(a);
        compentproj_js.royaltyValidate()
    });
    compentproj_js.initPage()
});
var curPage = 1;
var exam_api = {
    exam_add: ContextClinc_Server + "mdcexam/add",
    exam_update: ContextClinc_Server + "mdcexam/update",
    exam_page_list: ContextClinc_Server + "mdcexam/list",
    exam_detail: ContextClinc_Server + "mdcexam/examdetail",
    exam_enbale: ContextClinc_Server + "mdcexam/enable",
    treatment_list: ContextClinc_Server + "intentInput/getMdcDictTreatment",
    dictdrug_list: ContextClinc_Server + "intentInput/listMaterials",
    sample_list: ContextClinc_Server + "intentInput/getMdcExamSample",
    bodyposition_list: ContextClinc_Server + "intentInput/getMdcExamPosition",
    exam_thinkInit: ContextClinc_Server + "mdcexam/thinkInit",
    exam_getThinkInfoById: ContextClinc_Server + "mdcexam/getThinkInfoById"
};
var dataSource = [];
var samples = [];
var bodyposts = [];
var oleExamInfo = {};
var examUnits = {
    1 : "次",
    2 : "项"
};
var royaltys = [{
    id: 0,
    txt: "提成比例"
},
{
    id: 1,
    txt: "固定金额"
}];
var examFlags = {
    1 : "检验",
    2 : "检查",
    3 : "治疗"
};
var examPlaces = {
    1 : "诊所",
    2 : "外送"
};
var examUnitsData = [{
    id: 1,
    txt: "次"
},
{
    id: 2,
    txt: "项"
}];
var examFlagsData = [{
    id: 1,
    txt: "检验"
},
{
    id: 2,
    txt: "检查"
},
{
    id: 3,
    txt: "治疗"
}];
var examPlacesData = [{
    id: 1,
    txt: "诊所"
},
{
    id: 2,
    txt: "外送"
}];
var examItemTypes = {
    1 : "诊疗",
    3 : "材料"
};
var examItemTypesData = [{
    id: 1,
    txt: "诊疗"
},
{
    id: 3,
    txt: "材料"
}];
var statusData = [{
    id: 0,
    txt: "启用"
},
{
    id: 1,
    txt: "停用"
}];
var compentproj_js = Class.create({
    initPage: function() {
        var b = this;
        $("#btn_search").off("click").on("click",
        function() {
            var d = {
                currentPage: 1
            };
            compentproj_js.loadExamListData(d)
        });
        $("#searchTxt").off("input propertychange").on("input propertychange",
        function() {
            var d = {
                currentPage: 1
            };
            compentproj_js.loadExamListData(d)
        });
        $("#btn_add").on("click",
        function() {
            compentproj_js.addData()
        });
        $("#btn_save").on("click",
        function() {
            compentproj_js.saveData()
        });
        $("#btn_cancel").on("click",
        function() {
            $("#list_div").show();
            $("#add_edit_div").hide()
        });
        $("#examName").on("keyup",
        function() {
            compentproj_js.SetPYValue();
            compentproj_js.SetWBValue()
        });
        var c = {
            idKey: "id",
            txtKey: "txt",
            isNeedAll: false,
            isNeedClear: false
        };
        $("#royalty").WJZSDropdown(royaltys, c,
        function(d, e) {
            compentproj_js.royaltyValidate()
        });
        $("#zxPrice").change(compentproj_js.isRoyaltyAmount);
        var a = $("#status");
        a.WJZSDropdown(statusData, {
            isNeedAll: true,
            isNeedClear: false
        },
        function(e, f) {
            var d = {
                currentPage: 1
            };
            compentproj_js.loadExamListData(d)
        });
        a.SetWJZSDropdownSelectedData(0);
        $("#examFlagsele").WJZSDropdown(examFlagsData, {
            isNeedAll: false,
            isNeedClear: false
        },
        function(d, e) {
            var g = e.txt;
            var f = e.id;
            $(this).parents(".drop").find("input").val(g);
            $(this).parents(".drop").find("input").attr("val", f);
            $(this).parents(".drop-menu").hide("");
            if (f && f == "1") {
                $("#examSampleId").find("input").eq(0).val("");
                compentproj_js.enableOrDisableSelect("examSampleId", 0);
                $("#examSampleId").find("input").eq(0).attr("placeholder", "");
                if (samples.length > 0) {
                    $("#examSample").WJZSDropdown(samples, {
                        idKey: "EXAM_SAMPLE_ID",
                        txtKey: "EXAM_SAMPLE_NAME",
                        isNeedClear: false,
                        isNeedAll: false
                    },
                    function(h, i) {})
                } else {
                    compentproj_js.getSampleDatas()
                }
                $("#title_examSample").html("<i class='necessary'>*</i>标本：")
            } else {
                if (f && f == "2") {
                    $("#examSampleId").find("input").eq(0).val("");
                    compentproj_js.enableOrDisableSelect("examSampleId", 0);
                    $("#examSampleId").find("input").eq(0).attr("placeholder", "");
                    if (bodyposts.length > 0) {
                        $("#examSample").WJZSDropdown(bodyposts, {
                            idKey: "EXAM_POSITION_ID",
                            txtKey: "EXAM_POSITION_NAME",
                            isNeedClear: false,
                            isNeedAll: false
                        },
                        function(h, i) {})
                    } else {
                        compentproj_js.getBodyPostionsDatas()
                    }
                    $("#title_examSample").html("部位：")
                } else {
                    $("#examSampleId").find("input").eq(0).val("");
                    $("#examSampleId").find("input").eq(0).attr("placeholder", "不可编辑");
                    compentproj_js.enableOrDisableSelect("examSampleId", 1);
                    $("#title_examSample").html("标本/部位：")
                }
            }
        });
        $("#examUnitsele").WJZSDropdown(examUnitsData, {
            isNeedAll: false,
            isNeedClear: false
        },
        function(d, e) {});
        $("#examPlacesele").WJZSDropdown(examPlacesData, {
            isNeedAll: false,
            isNeedClear: false
        },
        function(d, e) {});
        $("#btn_add_item").on("click",
        function() {
            var f = compentproj_js.cloneExamItemTableDataTr();
            b.renderHasThinkTable(f.find(".has-think-table"));
            var e = $("#examItemTableBody");
            f.appendTo(e);
            var d = $("<a href='javascript:;'> 删除  </a>");
            d.appendTo(f.find(".exam-item-tr-operateTd"));
            d.on("click",
            function() {
                $(this).parent().parent().remove();
                compentproj_js.appendPrice()
            })
        });
        $("#projectItemlist li").on("click",
        function(e) {
            $(this).addClass("current").siblings().removeClass("current");
            $("#searchTxt").val("");
            var d = {
                currentPage: 1
            };
            compentproj_js.loadExamListData(d)
        });
        $(".common-table").on("click", ".drop",
        function(d) {
            $(".drop-menu").hide("fast");
            $(this).find(".drop-menu").show()
        });
        $("#examFlag").on("click", ".drop",
        function(d) {
            $(".drop-menu").hide("fast");
            $(this).find(".drop-menu").show()
        });
        compentproj_js.getSampleDatas();
        compentproj_js.loadExamListData()
    },
    renderHasThinkTable: function(d) {
        var a = this;
        var e = d.parents("tr").find(".exam-item-tr-examFlagId input").attr("val");
        var c = {
            columns: [{
                display: "项目编码",
                dataKey: "DRUG_CODE",
                width: 100
            },
            {
                display: "项目名称",
                dataKey: "DRUG_NAME",
                width: 100
            }],
            extraParams: {
                limitRows: 20,
                examFlag: e,
            },
            selectFirst: true,
            formatResult: function(f) {
                return f.DRUG_CODE || f.TREATMENT_CODE
            },
            formatMatch: function(h, g, f) {
                return h.ITEM_NAME + "--" + h.ITEM_CODE
            },
            matchContains: "word",
            autoFill: false,
            width: 500,
            multiple: false,
            multipleSeparator: ", ",
            highlight: function(g, f) {
                return g.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + f.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>")
            },
            scroll: true,
            scrollHeight: 180,
            forceConnect: true,
            canedit: true,
            ajaxOptions: {
                method: "POST"
            }
        };
        var b;
        if (e == "1") {
            b = exam_api.treatment_list;
            c.columns.splice(0, c.columns.length);
            c.columns = [{
                display: "项目编码",
                dataKey: "TREATMENT_CODE",
                width: 100
            },
            {
                display: "项目名称",
                dataKey: "TREATMENT_NAME",
                width: 100
            }]
        } else {
            if (e == "3") {
                b = exam_api.dictdrug_list;
                c.columns.splice(0, c.columns.length);
                c.columns = [{
                    display: "项目编码",
                    dataKey: "DRUG_CODE",
                    width: 100
                },
                {
                    display: "项目名称",
                    dataKey: "DRUG_NAME",
                    width: 100
                }]
            } else {
                return
            }
        }
        if (d.data("typeahead")) {
            d.data("typeahead").options.ajaxOptions.url = b;
            d.data("typeahead").options.columns = c.columns;
            d.data("typeahead").options.extraParams["examFlag"] = e;
            d.data("typeahead").cache.flush()
        } else {
            c.ajaxOptions.url = b;
            d.autocomplete(b, c).result(function(g, j, i) {
                var f = d.parent("td").parent("tr");
                var k = d.parents("tr").find(".exam-item-tr-examFlagId input").attr("val");
                var h = a.checkItemExist((j.DRUG_ID || j.TREATMENT_ID), f);
                if (h) {
                    $.paError("该项目已经存在！");
                    f.find(".exam-item-tr-itemTd").attr("itemId", "");
                    f.find(".exam-item-tr-itemTd").val("");
                    f.find(".exam-item-tr-nameTd").text("");
                    f.find(".exam-item-tr-priceTd").text("");
                    f.find(".exam-item-tr-qtyTd input").val("");
                    compentproj_js.appendPrice();
                    return
                }
                if (k == "3") {
                    f.find(".exam-item-tr-itemTd").attr("itemId", j.DRUG_ID);
                    f.find(".exam-item-tr-itemTd").val(j.DRUG_CODE);
                    f.find(".exam-item-tr-nameTd").text(j.DRUG_NAME || "");
                    f.find(".exam-item-tr-priceTd").text(j.DRUG_RETAIL_PRICE || "1")
                } else {
                    if (k == "1") {
                        f.find(".exam-item-tr-itemTd").attr("itemId", j.TREATMENT_ID);
                        f.find(".exam-item-tr-itemTd").val(j.TREATMENT_CODE);
                        f.find(".exam-item-tr-nameTd").text(j.TREATMENT_NAME || "");
                        f.find(".exam-item-tr-priceTd").text(j.TREATMENT_PRICE || "1")
                    }
                }
                compentproj_js.appendPrice()
            })
        }
    },
    checkItemExist: function(e, c) {
        var b = c.siblings(".data-tr");
        for (var a = 0; a < b.length; a++) {
            var d = $(b[a]).find(".exam-item-tr-itemTd").attr("itemid");
            if (e == d) {
                return true
            }
        }
        return false
    },
    royaltyValidate: function() {
        if ($("#royalty").attr("val") == 0) {
            $("#clone").empty().append('<input type="text" class="input-text validate(min(0),max(100), decimal(2),notspace)" id="royaltyContent">').ketchup();
            $("#rateUnit").html("%")
        } else {
            $("#rateUnit").html("元");
            this.isRoyaltyAmount()
        }
    },
    isRoyaltyAmount: function() {
        var a = $("#zxPrice").val() || 0;
        if ($("#royalty").attr("val") == 1 && !isNaN(a)) {
            $("#clone").empty().append('<input type="text" class="input-text validate(min(0),max(' + a + '), decimal(2),notspace)" id="royaltyContent">').ketchup()
        } else {
            if (isNaN(a)) {
                $("#clone").empty().append('<input type="text" class="input-text validate(min(0),max(0), decimal(2),notspace)" id="royaltyContent">').ketchup()
            }
        }
    },
    loadExamListData: function(b) {
        var c = $(".left-column-list .current").attr("value");
        if (c == "" || c == undefined) {
            $.paError("未选中项目分类");
            return
        }
        var a = {
            examFlag: c,
            keyword: $("#searchTxt").val(),
            disabled: $.trim($("#status").attr("val")),
            currentPage: (b == undefined || b == null) ? curPage: b.currentPage,
            pageSize: 20
        };
        a.ajaxopts = {
            type: "POST",
            url: exam_api.exam_page_list,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            showMask: true
        };
        a.callback = function(d) {
            dataSource = d.data.dataSource;
            curPage = d.data.currentPage;
            compentproj_js.refreshTable()
        };
        $("#my-page").generatePagination(a)
    },
    refreshTable: function() {
        var a = $("#tablelist");
        a.html("");
        for (var c = 0; c < dataSource.length; c++) {
            var d = dataSource[c];
            var e = $("<tr id='" + d.EXAM_ID + "'></tr>");
            e.appendTo(a);
            if (d.DISABLED == 0) {
                enabledHtm = '<a href="javascript:;" onclick=compentproj_js.enableData(\'' + d.EXAM_ID + "',1) WJPerm='DICT04-DISABLE,CLINICSETUP07-DISABLE'>停用 </a>"
            } else {
                enabledHtm = '<a href="javascript:;" onclick=compentproj_js.enableData(\'' + d.EXAM_ID + "',0) WJPerm='DICT04-ENABLE,CLINICSETUP07-ENABLE'>启用 </a>"
            }
            var b = "";
            if (d.EXAM_FLAG == 1) {
                b = d.EXAM_SAMPLE_NAME == null ? "": d.EXAM_SAMPLE_NAME
            } else {
                if (d.EXAM_FLAG == 2) {
                    b = d.EXAM_POSITION_NAME == null ? "": d.EXAM_POSITION_NAME
                }
            }
            e.append("<td width='8%'>" + (c + 1) + "</td><td width='15%'>" + (d.EXAM_CODE || "") + "</td><td width='18%'>" + (d.EXAM_NAME || "") + "</td><td width='8%'>" + (examUnits[d.EXAM_UNIT] || "") + "</td><td width='10%'>" + (d.ZH_PRICE || "") + "</td><td width='10%'>" + b + "</td><td width='10%'>" + (d.EXAM_PLACE == null ? "": examPlaces[d.EXAM_PLACE]) + '</td><td><a href="javascript:;" onclick=compentproj_js.editData(\'' + d.EXAM_ID + "') WJPerm='DICT04-UPDATE,CLINICSETUP07-SAVE'>编辑</a>" + enabledHtm + "</td>")
        }
        renderPermissionControl()
    },
    addData: function() {
        compentproj_js.resetEditor();
        var b = $(".left-column-list .current").attr("value");
        if (b) {
            var a = "#examFlag .wjzs-drop-menu li[value='" + b + "']";
            $(a).click()
        }
        $("#list_div").hide();
        $("#add_edit_div").show();
        $("#add_edit_div").ketchup()
    },
    editData: function(a) {
        compentproj_js.resetEditor();
        compentproj_js.getExamInfo(a);
        $("#add_edit_div").ketchup()
    },
    enableData: function(f, a) {
        var d = compentproj_js.findItemData(f);
        if (d != undefined) {
            if (a == undefined || a === "") {
                $.paError("参数异常");
                return
            }
            var b = {
                examId: f,
                disabled: a
            };
            var c = {
                method: "POST",
                url: exam_api.exam_enbale,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(b),
                dataType: "json",
                showMask: true
            };
            var e = Utils.myAjaxHandler(c);
            e.done(function(g) {
                if (g != null && g.errorCode == SUCCESSCODE) {
                    $.paSuccess("更新成功");
                    compentproj_js.loadExamListData()
                } else {
                    $.paError(g.errorMessage)
                }
            }).fail(function(g) {
                $.paError("请求异常")
            }).always(function() {})
        }
    },
    saveData: function() {
        var b = $("#add_edit_div").ableToFinish();
        if (!b) {
            return
        }
        var a = compentproj_js.getEditedExamData();
        var f = "";
        if (a.isOk) {
            f = compentproj_js.validateData(a)
        } else {
            return
        }
        if (f != "") {
            $.paError(f);
            return
        }
        var d = (a.exam.examId == "" ? exam_api.exam_add: exam_api.exam_update);
        var c = {
            method: "POST",
            url: d,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(a),
            dataType: "json",
            showMask: true
        };
        var e = Utils.myAjaxHandler(c);
        e.done(function(g) {
            if (g != null && g.errorCode == SUCCESSCODE) {
                $("#add_edit_div").hide();
                $("#list_div").show();
                compentproj_js.loadExamListData();
                $.paSuccess("保存成功")
            } else {
                $.paError(g.errorMessage)
            }
        }).fail(function(g) {
            $.paError("请求异常")
        }).always(function() {})
    },
    getEditedExamData: function() {
        var f = {};
        f.exam = {};
        f.isOk = false;
        f.exam.pExamId = $("#pExamId").val();
        f.exam.examId = $("#examId").val();
        f.exam.examCode = $("#examCode").val();
        f.exam.examName = $("#examName").val();
        f.exam.wbCode = $("#wbCode").val();
        f.exam.pyCode = $("#pyCode").val();
        f.exam.remark = $("#remark").val();
        f.exam.zhPrice = $("#zhPrice").val();
        f.exam.zxPrice = $("#zxPrice").val();
        f.exam.examFlag = getSelectIdValue("examFlag");
        f.exam.examUnit = getSelectIdValue("examUnit");
        f.exam.examPlace = getSelectIdValue("examPlace");
        f.exam.examSampleId = getSelectIdValue("examSampleId");
        f.royaltyStatus = $("#royalty").attr("val");
        f.royaltyContent = $("#royaltyContent").val();
        var g = [];
        var k = {};
        var c = $("#examItemTableBody").find(".data-tr");
        var b = 0;
        for (var e = 0,
        h = c.length; e < h; e++) {
            var l = {},
            d = c[e];
            l.examItemId = $(d).attr("id") == undefined ? "": $(d).attr("id");
            l.examItemType = $(d).attr("data-project-type");
            l.itemId = $(d).find(".exam-item-tr-itemTd").attr("itemid");
            l.examItemPrice = $(d).find(".exam-item-tr-priceTd").text();
            l.examItemNum = $(d).find(".exam-item-tr-qtyTd").find("input").val();
            var j = l.itemId + "-" + l.examItemType;
            var a = k[j] == undefined ? false: true;
            if (a) {
                $.paError("明细数据不允许重复，行号：[" + (k[j] + 1) + "行   与  " + (e + 1) + " 行]");
                return f
            } else {
                k[j] = e
            }
            if (l.examItemType == undefined || l.examItemType == "") {
                $.paError("明细记录项目分类不能为空，记录行[" + (e + 1) + "]");
                return result
            }
            if (l.itemId == undefined || l.itemId == "") {
                $.paError("明细记录项目编号不能为空，记录行[" + (e + 1) + "]");
                return f
            }
            if (l.examItemNum == undefined || l.examItemNum == "") {
                $.paError("明细记录数量不能为空，记录行[" + (e + 1) + "]");
                return f
            }
            b = b + (l.examItemPrice * l.examItemNum);
            g.push(l)
        }
        f.examItems = g;
        f.exam.examPrice = b;
        f.isOk = true;
        return f
    },
    validateData: function(b) {
        var a = "";
        if (b.exam.examCode == "") {
            a = "组合编码不能为空";
            return a
        }
        if (b.exam.examName == "") {
            a = "组合名称不能为空";
            return a
        }
        if (b.exam.examFlag == undefined || b.exam.examFlag == "") {
            a = "组合类型不能为空";
            return a
        } else {
            if (b.exam.examFlag == 1 && (b.exam.examSampleId == "" || b.exam.examSampleId == undefined)) {
                a = "检验标本不能为空";
                return a
            }
        }
        if (b.exam.examUnit == "") {
            a = "单位不能为空";
            return a
        }
        if (b.exam.examPlace == "") {
            a = "检验地点不能为空";
            return a
        }
        if (b.examItems == undefined || b.examItems.length == 0) {
            a = "组合项目明细记录不能为空";
            return a
        }
        if (b.exam.zxPrice == "") {
            a = "执行单价不能为空";
            return a
        }
        if (!b.exam.zxPrice.match(/^[0-9]+\.{0,1}[0-9]{0,2}$/)) {
            a = "执行单价输入非法";
            return a
        }
        return a
    },
    resetEditor: function() {
        $("#examId").val("");
        $("#examCode").val("");
        $("#examName").val("");
        $("#examSampleId").val("");
        $("#wbCode").val("");
        $("#pyCode").val("");
        $("#remark").val("");
        $("#zhPrice").val("");
        $("#zxPrice").val("");
        setSelectIdValue("examFlag", 1);
        setSelectIdValue("examUnit", 1);
        setSelectIdValue("examPlace", 1);
        compentproj_js.resetExamItemTable()
    },
    initEditor: function(b) {
        $("#examId").val(b.EXAM_ID);
        $("#examCode").val(b.EXAM_CODE);
        $("#examName").val(b.EXAM_NAME);
        $("#wbCode").val(b.WB_CODE);
        $("#pyCode").val(b.PY_CODE);
        $("#remark").val(b.REMARK);
        $("#zhPrice").val(b.EXAM_PRICE);
        $("#zxPrice").val(b.ZX_PRICE);
        setSelectIdValue("examFlag", b.EXAM_FLAG);
        setSelectIdValue("examUnit", b.EXAM_UNIT);
        if (b.EXAM_PLACE != null || b.EXAM_PLACE != undefined) {
            setSelectIdValue("examPlace", b.EXAM_PLACE)
        } else {
            setSelectIdValue("examPlace", 0)
        }
        var a = "#examFlag .drop-menu li[value='" + b.EXAM_FLAG + "']";
        $(a).click();
        if (b.EXAM_FLAG == "1") {
            if (samples.length > 0) {
                $("#examSample").WJZSDropdown(samples, {
                    idKey: "EXAM_SAMPLE_ID",
                    txtKey: "EXAM_SAMPLE_NAME",
                    isNeedClear: false,
                    isNeedAll: false
                },
                function(c, d) {})
            } else {
                compentproj_js.getSampleDatas()
            }
            setSelectIdValue("examSampleId", b.EXAM_SAMPLE_ID)
        } else {
            if (b.EXAM_FLAG == "2") {
                if (bodyposts.length > 0) {
                    $("#examSample").WJZSDropdown(bodyposts, {
                        idKey: "EXAM_POSITION_ID",
                        txtKey: "EXAM_POSITION_NAME",
                        isNeedClear: false,
                        isNeedAll: false
                    },
                    function(c, d) {})
                } else {
                    compentproj_js.getBodyPostionsDatas()
                }
                setSelectIdValue("examSampleId", b.EXAM_SAMPLE_ID)
            } else {
                setSelectIdValue("examSampleId", 0)
            }
        }
        compentproj_js.refreshExamItemTable(b)
    },
    refreshExamItemTable: function(c) {
        var l = this;
        var e = $("#examItemTableBody");
        e.html("");
        var b = $('<tr class="th-tr"><th>项目分类</th><th>项目编号</th><th>项目名称</th><th>单价</th><th>数量</th><th>操作</th></tr>');
        b.appendTo(e);
        var g = c.examItems;
        if (g && g.length > 0) {
            for (var d = 0; d < g.length; d++) {
                var k = g[d];
                var j = compentproj_js.cloneExamItemTableDataTr();
                j.attr("id", k.EXAM_ITEM_ID);
                j.find(".exam-item-tr-examFlagId").attr("val", k.EXAM_ITEM_TYPE);
                j.find(".exam-item-tr-examFlagId input").attr("val", k.EXAM_ITEM_TYPE).val(examItemTypes[k.EXAM_ITEM_TYPE]);
                j.attr("data-project-type", k.EXAM_ITEM_TYPE);
                j.find(".exam-item-tr-itemTd").attr("itemid", k.ITEM_ID);
                var m = "";
                var a = "";
                if (k.EXAM_ITEM_TYPE == 1) {
                    m = k.TREATMENT_NAME;
                    a = k.TREATMENT_CODE
                } else {
                    m = k.DRUG_NAME;
                    a = k.DRUG_CODE
                }
                j.find(".exam-item-tr-itemTd").find("input").val(a);
                j.find(".exam-item-tr-nameTd").attr("id", m);
                j.find(".exam-item-tr-nameTd").html(m);
                var f = k.EXAM_ITEM_TYPE == 1 ? k.TREATMENT_PRICE: k.EXAM_ITEM_PRICE;
                j.find(".exam-item-tr-priceTd").html(f);
                j.find(".exam-item-tr-qtyTd").attr("id", k.EXAM_ITEM_NUM);
                j.find(".exam-item-tr-qtyTd").find("input").val(k.EXAM_ITEM_NUM);
                var h = $("<a href='javascript:;'> 删除  </a>");
                h.appendTo(j.find(".exam-item-tr-operateTd"));
                h.on("click",
                function() {
                    $(this).parent().parent().remove();
                    compentproj_js.appendPrice()
                });
                l.renderHasThinkTable(j.find(".has-think-table"));
                j.appendTo(e)
            }
        }
    },
    cloneSmallTableTd: function() {
        return $("<td style='position: relative;' class='exam-item-tr-itemTd'><input type='text' class='input-text has-think-table'></td>")
    },
    refreshSmallTable: function(e, k, f) {
        var c = f.find(".small-table-ware-tbody");
        c.html("");
        for (var g = 0; g < k.length; g++) {
            var l = k[g];
            var b = e.examFlag == 1 ? l.TREATMENT_ID: l.DRUG_ID;
            var d = e.examFlag == 1 ? l.TREATMENT_CODE: l.DRUG_CODE;
            var a = e.examFlag == 1 ? l.TREATMENT_NAME: l.DRUG_NAME;
            var h = e.examFlag == 1 ? l.TREATMENT_PRICE: l.DRUG_RETAIL_PRICE;
            if (!h) {
                h = 0
            }
            var j = $("<tr id='" + b + "'><td id='" + d + "'>" + d + "</td><td id='" + a + "'>" + a + "</td><td style='display:none;' id='" + h + "'>" + h + "</td></tr>");
            j.appendTo(c);
            j.on("click",
            function(i) {
                compentproj_js.smallTableRowClickHandler(f, i)
            })
        }
        c.find("tr").hover(function() {
            $(this).find("td").css({
                color: "#fff",
                "background-color": "#01a9db"
            })
        },
        function() {
            $(this).find("td").css({
                color: "#242f44",
                "background-color": "#fff"
            })
        });
        f.show()
    },
    smallTableRowClickHandler: function(a, c) {
        var b = c.target.tagName;
        var d = {};
        if ("TD" == b || "td" == b) {
            d.id = c.target.parentElement.id;
            d.code = c.target.parentElement.childNodes[0].id;
            d.name = c.target.parentElement.childNodes[1].id;
            d.price = c.target.parentElement.childNodes[2].id
        }
        a.parents("tr").find(".exam-item-tr-itemTd").attr("id", d.id);
        a.parents("tr").find(".exam-item-tr-itemTd").find("input").val(d.code);
        a.parents("tr").find(".exam-item-tr-nameTd").attr("id", d.name);
        a.parents("tr").find(".exam-item-tr-nameTd").html(d.name);
        a.parents("tr").find(".exam-item-tr-priceTd").attr("id", d.price);
        a.parents("tr").find(".exam-item-tr-priceTd").html(d.price);
        a.hide()
    },
    cloneExamItemTableDataTr: function() {
        var j = this;
        var h = $("<tr class='data-tr'>                  <td class='exam-item-tr-examFlagId'>                    <div class='drop'>                      <input type='text' class='input-text' readonly='readonly'>                      <i class='drop-icon'></i>                    </div>                  </td>              </tr>");
        var i = {
            idKey: "id",
            txtKey: "txt",
            isNeedClear: false
        };
        var e = h.find(".input-text");
        e.WJZSDropdown(examItemTypesData, i,
        function(l, m) {
            var o = m.id;
            var n = $(l.currentTarget);
            var k = n.parents("tr").attr("data-project-type");
            if (k == undefined || k != o) {
                n.parents("tr").attr("data-project-type", o);
                n.parents("tr").find(".exam-item-tr-examFlagId").attr("val", o);
                n.parents("tr").find(".exam-item-tr-itemTd").attr("id", "");
                n.parents("tr").find(".exam-item-tr-itemTd").find("input").val("");
                n.parents("tr").find(".exam-item-tr-nameTd").attr("id", "");
                n.parents("tr").find(".exam-item-tr-nameTd").html("");
                n.parents("tr").find(".exam-item-tr-priceTd").attr("id", "");
                n.parents("tr").find(".exam-item-tr-priceTd").html("");
                n.parents("tr").find(".exam-item-tr-qtyTd").find("input").val("");
                j.renderHasThinkTable(n.parents("tr").find(".has-think-table"))
            }
        });
        var d = 1;
        e.SetWJZSDropdownSelectedData(d);
        var f = compentproj_js.cloneSmallTableTd();
        f.appendTo(h);
        var b = $("<td class='exam-item-tr-nameTd'></td>");
        b.appendTo(h);
        var a = $("<td class='exam-item-tr-priceTd'></td>");
        a.appendTo(h);
        var g = $("<td class='exam-item-tr-qtyTd' ><input class='input-text qtyTdclass' type='text'></td>");
        g.appendTo(h);
        g.find(".qtyTdclass").on("input propertychange",
        function() {
            compentproj_js.appendPrice()
        });
        var c = $("<td class='exam-item-tr-operateTd'></td>");
        c.appendTo(h);
        h.attr("data-project-type", "1");
        return h
    },
    resetExamItemTable: function() {
        var c = this;
        var b = $("#examItemTableBody");
        b.html("");
        var d = $('<tr class="th-tr"><th>项目分类</th><th>项目编号</th><th>项目名称</th><th>单价</th><th>数量</th><th>操作</th></tr>');
        d.appendTo(b);
        var e = compentproj_js.cloneExamItemTableDataTr();
        c.renderHasThinkTable(e.find(".has-think-table"));
        e.appendTo(b);
        var a = $("<a href='javascript:;'> 删除  </a>");
        a.appendTo(e.find(".exam-item-tr-operateTd"));
        a.on("click",
        function() {
            $(this).parent().parent().remove()
        })
    },
    findItemData: function(d) {
        var a;
        for (var b = 0; b < dataSource.length; b++) {
            var c = dataSource[b];
            if (c.EXAM_ID == d) {
                a = c;
                break
            }
        }
        return a
    },
    getExamInfo: function(c) {
        var a = {
            method: "POST",
            contentType: "application/json; charset=utf-8",
            url: exam_api.exam_detail,
            data: JSON.stringify({
                examId: c
            }),
            dataType: "json",
            showMask: true
        };
        var b = Utils.myAjaxHandler(a);
        b.done(function(d) {
            if (d != null && d.errorCode == SUCCESSCODE) {
                oleExamInfo = d.data;
                compentproj_js.initEditor(oleExamInfo);
                $("#list_div").hide();
                $("#add_edit_div").show();
                compentproj_js.clearRoyalty();
                compentproj_js.royaltyValidate();
                if (oleExamInfo.ROYALTY_RATE != null) {
                    $("#royaltyContent").val(oleExamInfo.ROYALTY_RATE * 10000 / 100)
                } else {
                    if (oleExamInfo.ROYALTY_AMOUNT != null) {
                        $("#royalty").SetWJZSDropdownSelectedData(1);
                        $("#rateUnit").html("元");
                        compentproj_js.royaltyValidate();
                        $("#royaltyContent").val(oleExamInfo.ROYALTY_AMOUNT)
                    }
                }
            } else {
                $.paError(d.errorMessage)
            }
        }).fail(function(d) {
            $.paError("请求异常")
        }).always(function() {})
    },
    getSampleDatas: function() {
        var a = {
            method: "POST",
            contentType: "application/json; charset=utf-8",
            url: exam_api.sample_list,
            data: JSON.stringify({
                keyword: ""
            }),
            dataType: "json"
        };
        var b = Utils.myAjaxHandler(a);
        b.done(function(d) {
            if (d != null && d.errorCode == SUCCESSCODE) {
                samples = d.data;
                var c = {
                    idKey: "EXAM_SAMPLE_ID",
                    txtKey: "EXAM_SAMPLE_NAME",
                    isNeedClear: false,
                    isNeedAll: false
                };
                $("#examSample").WJZSDropdown(samples, c,
                function(e, f) {})
            } else {
                $.paError(d.errorMessage)
            }
        }).fail(function(c) {
            $.paError("请求异常")
        }).always(function() {})
    },
    getBodyPostionsDatas: function() {
        var a = {
            method: "POST",
            url: exam_api.bodyposition_list,
            data: {
                keyword: ""
            },
            dataType: "json"
        };
        var b = Utils.myAjaxHandler(a);
        b.done(function(d) {
            if (d != null && d.errorCode == SUCCESSCODE) {
                bodyposts = d.data;
                var c = {
                    idKey: "EXAM_POSITION_ID",
                    txtKey: "EXAM_POSITION_NAME",
                    isNeedClear: false,
                    isNeedAll: false
                };
                $("#examSample").WJZSDropdown(bodyposts, c,
                function(e, f) {})
            } else {
                $.paError(d.errorMessage)
            }
        }).fail(function(c) {
            $.paError("请求异常")
        }).always(function() {})
    },
    appendPrice: function() {
        var a = 0;
        $(".data-tr").each(function() {
            var c = $(this).find($(".exam-item-tr-priceTd")).text();
            var b = $(this).find($(".exam-item-tr-qtyTd input")).val();
            a += c * b
        });
        $("#zhPrice").val(Math.round(a * 100) / 100);
        $("#zxPrice").val(Math.round(a * 100) / 100);
        compentproj_js.isRoyaltyAmount()
    },
    thinkProjectShowData: function(c, b) {
        var d = compentproj_js.getProjectInfoByProjectType(c, b, compentproj_js.refreshSmallTable);
        if (d != undefined && d != "") {}
        var a = "";
        b.show()
    },
    getProjectInfoByProjectType: function(e, b) {
        var d = "";
        if (e.examFlag == "1") {
            d = exam_api.treatment_list
        } else {
            d = exam_api.dictdrug_list
        }
        var a = {
            method: "POST",
            url: d,
            data: e,
            dataType: "json"
        };
        var c = Utils.myAjaxHandler(a);
        c.done(function(g) {
            if (SUCCESSCODE == g.errorCode) {
                var f = g.data;
                compentproj_js.refreshSmallTable(e, f, b)
            } else {
                $.paError(status.errorMessage)
            }
        }).fail(function(f) {
            $.paError("请求异常")
        }).always(function() {});
        return ""
    },
    SetPYValue: function() {
        var b = $("#examName").val();
        var a = hz2JP(b);
        $("#pyCode").val(a)
    },
    SetWBValue: function() {
        var b = $("#examName").val();
        var a = hz2WB(b);
        $("#wbCode").val(a)
    },
    enableOrDisableSelect: function(b, a) {
        if (a == 1) {
            $("#" + b).removeClass("drop");
            $("#" + b + " input").attr("disabled", "disabled");
            $("#" + b + " i").hide()
        } else {
            $("#" + b).addClass("drop");
            $("#" + b + " input").removeAttr("disabled");
            $("#" + b + " i").show()
        }
    },
    clearRoyalty: function() {
        $("#rateUnit").html("%");
        $("#royaltyContent").val("");
        $("#royalty").SetWJZSDropdownSelectedData(0)
    }
});
function putThinkDataIn(a) {
    var b = {
        method: "POST",
        url: exam_api.exam_getThinkInfoById,
        data: {
            pExamId: a
        },
        dataType: "json"
    };
    var c = Utils.myAjaxHandler(b);
    c.done(function(d) {
        if (d != null && d.errorCode == SUCCESSCODE) {
            $("#pExamId").val(a);
            compentproj_js.initEditor(d.data);
            $("#examId").val("");
            if (d.data.treatmentNotInList.length > 0) {
                $.paError("子项" + d.data.treatmentNotInList + "不存在，请到诊疗项目字典进行添加")
            }
        } else {
            $.paError(d.errorMessage)
        }
    }).fail(function(d) {
        $.paError("请求异常")
    }).always(function() {})
};