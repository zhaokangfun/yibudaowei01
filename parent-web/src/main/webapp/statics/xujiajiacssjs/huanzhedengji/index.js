var SUCCESSCODE = "E0000000"
//是否第一次登录
var isFirstLogin = false
var isFirstLogin2 = false
var main_clinicPackageVersion = {}
var data_isShow_length = 0;

function IndexPage() {

    this.menuData = null;

    this.currentUser = null;

    //content上的菜单是否在滚动
    this.isMenuMove = false;

    // 当前工作站主菜单编码，默认是“今日就诊”
    this.DwsMenuCode = 'HZZX';

    this.indexPublicData = null;

    this.isInit = false;

    this.mydata = {};

    this.isFloatBar = true; //保存今日就诊姓名悬浮栏是悬浮状态  还是左侧固定状态  true为悬浮，false为左侧固定
    this.menuOptions = {
        currModel: "",
        menuData: null,
        blankheight: 0,
        cellheight: 100,
        startIndex: 0,
        displayType: 0,
        bottomheight: 40,
        topheight: 36,
        maxSingleMenuCount: 0
    };
    this.patientInfo = null;

    this._init();
}
IndexPage.prototype = {
    _init: function () {
        var that = this;
        that.isInit = true;
        that.getMaxSingleMenuCount();
        that._bindEvent();
        that.addMsgListener();
        that.forIntegral();
    },
    /////调用一级菜单点击
    firstMenuClicked: function (model) {
        if ($("li.side-nav-item, li.more-cell-li").length > 0) {
            $("li[model=" + model + "]").click();
        }
    },
    //////调用二级菜单点击
    secondMenuClicked: function (menu) {
        var child = $("#sub-menu").find("span[menu=" + menu + "]");
        if (child.length > 0) {
            child.click();
        }
    },
    getMaxSingleMenuCount: function () {
        var _this = this;
        var allheight = $(".side").height();
        var ulmaxheight = parseInt(allheight) - _this.menuOptions.bottomheight - _this.menuOptions.topheight - parseInt(_this.menuOptions.blankheight); //bottomheight：底部切换按钮高度，topheight：顶部切换按钮高度      - minuts
        var count = Math.floor(ulmaxheight / 100);
        _this.menuOptions.maxSingleMenuCount = count;
    },

    _bindEvent: function () {
        var self = this;

        $(window).resize(function () {
            self._generateMenu(self.menuOptions.startIndex);
        });

        self.fetchMenuData();

        fetchPermissionData();
        var interval;
        /*显示添加桌面快捷弹窗*/
        $("#c-name").on("click", function () {
            $('#desktopShortcutPop').fadeIn();
        });
        /*关闭添加桌面快捷弹窗*/
        $(".desktopShortcutPop_head>.close").on("click", function () {
            $('#desktopShortcutPop').fadeOut();
        });
        $(".desktopShortcutPop_content_foot>.btn").on("click", function () {
            $('#desktopShortcutPop').hide();
            window.open("https://download.pinganwj.com/download/云诊所.zip");
        });
        /*帮助&反馈下拉*/
        $('.helpItem ').on('click', function () {
            $('#help_feedback').fadeIn(200);
        }).on('mouseleave', function () {
            $('#help_feedback').fadeOut(200);
        });
        $("#help").on("click", function () {
            window.open("https://www.pinganwj.com/clinic-help/", "_blank");
        });
        $("#Account_box").delegate("li", "click", function () {
            if ($(this).attr('id') === 'changePwd') {
                $("#sub-menu").hide();
                $("#submenuOuter").hide();
                self.switchTab("../../clinic/main/modify_password.html");
            } else if ($(this).attr('id') === 'jumpToClinicCenter') {
                //                    $("#suggest").removeAttr("style");
                //                     Utils.renderPopup();
            } else if ($(this).attr('id') === 'licenseAgreement') {
                $("#protocol").show();
                if ($("#protocol").attr('isFinishGuide') && $("#protocol").attr('isFinishGuide') == 1) {
                    self.currentUser.isFinishGuide = 1;
                }
                if (self.currentUser.regFlag == '1' && self.currentUser.isFinishGuide == '1') {
                    $(".protocol-footBtn").addClass("dsn");
                    $(".agree-footBtn").removeClass("dsn");
                } else {
                    $(".protocol-footBtn").removeClass("dsn");
                    $(".agree-footBtn").addClass("dsn");
                }
            } else if ($(this).attr('id') === 'switchClinicLi') {
                $('#switchClinicPop').show();
            } else if ($(this).attr('id') === 'logout') {
                clearTimeout(interval);
                self.logout();
            }
        });

        $(document).on("click", "#switchClinic li", function () {
            $('#switchClinic li').removeClass('checked');
            $(this).addClass('checked');
        });
        $(document).on("click", "#sureClinic", function () {
            var clinicId = $('#switchClinic .checked').attr("clinicId");
            var loginName = $('#switchClinic .checked').attr("loginName");
            var userId = $('#switchClinic .checked').attr("userId");
            self.switchClinic(clinicId, userId);
        });
        $("#switchClinicPop").on("click", ".setDefaultClinic", function (e) {
            var clinicId = $(this).parent().attr("clinicId");
            var userId = $(this).parent().attr("userId");
            self.setDefaultClinic(clinicId, userId);
            e.stopPropagation();
            e.cancelBubble = true;
        })
        $("#switchClinicPop").on("click", ".defaultClinic", function (e) {
            e.stopPropagation();
            e.cancelBubble = true;
        })
        $(document).on("click", "#cancelClinic", function () {
            $('#switchClinicPop').hide();
        });
        $(document).on("topCross", function (e, fId, sId, urlParams) {
            self.crossModule(fId, sId, urlParams);
        });
        $(document).on("topSwitch", function (e, linkUrl, domA) {
            self.switchTab(linkUrl, domA);
        });

        /*账户下拉移入延迟1s显示，移出隐藏*/
        $(".accountInfo").click(function () {
            $("#Account_box").show()
            $(".accountInfo").mouseleave(function () {
                $("#Account_box").hide();
            })
        });
        /*移动版二维码移入延迟1s显示，移出隐藏*/
        $(".css_webapp").mouseenter(function () {
            var delayShowW = setTimeout(function () { $(".css_appimg_wrap").show(); }, 1000);
            $(".css_webapp").mouseleave(function () {
                clearTimeout(delayShowW);
                $(".css_appimg_wrap").hide();
            })
        });

        /*切换屏幕大小*/
        $("#screen-size").click(function () {
            var wrap = $(".wrapper");
            if (!wrap.hasClass("screenWidth")) {
                wrap.addClass("screenWidth");
            } else {
                wrap.removeClass("screenWidth");
            }
        });

        /*** ***/
        $(".bottom-more").on("click", function () {
            if ($(".bottom-more-panel").is(":hidden")) {
                $(".bottom-more-panel").fadeIn(200);
            } else {
                $(".bottom-more-panel").fadeOut(100);
            }
        });
        ////阻止弹出框冒泡
        $(".bottom-more-panel").on("click", function (event) {
            event.stopPropagation();
        });

        $(".more-close").on("click", function () {
            $(".bottom-more-panel").fadeOut(100);
        });
        /*悬浮广告*/
        $(".close-AD").on("click", function () {
            $(this).parent().remove();
        });

        $(document).on("click", function () {
            $('.message_remind_ul').hide();
        });
        $('.message_remind_box .message_remind_icon').on("click", function () {
            $('.message_remind_ul').toggle();
            return false;
        });
        /*积分规则*/
        $(".integral_info").mouseenter(function () {
            self.forIntegralTimer = setTimeout(function () {
                $(".integral_info_drop").show();
            }, 500);
        }).mouseleave(function () {
            clearTimeout(self.forIntegralTimer);
            $(".integral_info_drop").hide();
        });

        /**leftmenu event start!**/
        $("#side-more_next").on("click", function (event) {
            var cellCount = parseInt(self.getCellCount()); ////
            var startIndex = self.menuOptions["startIndex"];
            if (startIndex + cellCount < self.menuOptions.menuData.length) {
                self._generateMenu(startIndex + cellCount);
            }
        });
        $("#side-more_pre").on("click", function (event) {
            var cellCount = parseInt(self.getCellCount()); ////
            var startIndex = self.menuOptions["startIndex"];
            var currStart = 0;
            if (startIndex - cellCount > 0) {
                currStart = startIndex - cellCount;
            } else if (startIndex - cellCount <= 0) {
                currStart = 0;
            }
            if (startIndex == 0) { /////小于0返回最后一页
                //currStart = cellCount*(Math.ceil(parseInt(self.menuOptions["menuData"].length)/cellCount)-1);
            } else {
                self._generateMenu(currStart);
            }
        });
        $('#changeNavShowMode').on('click', function () {
            var displaytype = self.menuOptions["displayType"];
            if (displaytype == 0 || displaytype == 2) { ////普通模式
                $(".side").addClass("single-row-sm").removeClass("single-row-nor").removeClass("single-row");
                self.menuOptions["displayType"] = 1;
            } else {
                if (data_isShow_length <= self.menuOptions.maxSingleMenuCount) {
                    $(".side").addClass("single-row").removeClass("single-row-sm").removeClass("single-row-nor");
                    self.menuOptions["displayType"] = 2;
                } else { ////收缩模式
                    $(".side").removeClass("single-row-sm").addClass("single-row-nor").removeClass("single-row-sm").removeClass("single-row");
                    self.menuOptions["displayType"] = 0;
                }
            }
            self._generateMenu(self.menuOptions["startIndex"]);
        });


        $('.version_switch_box').on('click', function () {
            $('.version_switch_ul dsn').show();
        })

        //点击排序按钮
        $('#more-sort').on('click', function () {
            $('.bottom-more-panel').fadeOut(100);
            self._showTr(self.mydata);
            //排序弹框的样式
            var mypop = $('#select-sort');
            cH = $(window).height();
            cW = $(window).width();
            popCon = mypop.find('.popcontent');
            w = mypop.outerWidth(true);
            h = mypop.outerHeight(true);
            t = Math.max((cH - h) / 2, 0);
            r = Math.max((cW - w) / 2, 0);

            mypop.css({
                'top': t + 'px',
                'right': r + 'px'
            });
            $('#select-sort').show();
        })

        //点击排序按钮打钩
        $('#select-sort').delegate('.select-sort-checkbox', 'click', function () {
            $(this).toggleClass('select-sort-checkbox-checkbox-active');
            self.mydata[$(this).closest('tr').index()].isShow = $(this).hasClass('select-sort-checkbox-checkbox-active') ? 1 : 0;
        })

        //点击排序弹框的取消按钮
        $(document).on("click", "#cancelSort", function () {
            $('#select-sort').hide();
        });

        //点击排序弹框的确认按钮
        $(document).on("click", "#sureSort", function () {
            var params = [];
            for (var i = 0; i < self.mydata.length; i++) {
                var index = i + 1;
                var temp_data = {};
                temp_data.resourceName = self.mydata[i].name;
                temp_data.resourceCode = self.mydata[i].code;
                temp_data.resourceTypeCode = "MODULE";
                temp_data.indexNum = index;
                temp_data.resType = "B";
                temp_data.isShow = self.mydata[i].isShow;
                params.push(temp_data);
            }
            var options = {
                url: ContextClinc_Server + "user/setUserMenuSort",
                method: "POST",
                dataType: 'json',
                async: false,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(params)
            };

            var promise = Utils.myAjaxHandler(options);
            promise.done(function (msg) {
                $("#select-sort").hide();
                window.location.reload();
            }).fail(function (error) {
            }).always(function () {
            });
        });

        //点击排序弹框的上移
        $('#select-sort').delegate('.up-move', 'click', function () {
            if ($(this).closest('tr').index() > 0) {
                var index = $(this).closest('tr').index();
                var temp = self.mydata[index];
                self.mydata[index] = self.mydata[index - 1];
                self.mydata[index - 1] = temp;
                self._showTr(self.mydata);
            }
        })

        //点击排序弹框的下移
        $('#select-sort').delegate('.down-move', 'click', function () {
            var data = self.menuData = self.menuOptions.menuData;
            if ($(this).closest('tr').index() < data.length - 1) {
                var index = $(this).closest('tr').index();
                var temp = self.mydata[index];
                self.mydata[index] = self.mydata[index + 1];
                self.mydata[index + 1] = temp;
                self._showTr(self.mydata);
            }
        })

        //点击排序弹框的默认排序
        $('#default-sort').on('click', function () {
            var options = {
                url: ContextClinc_Server + "user/userDefaultMenu",
                dataType: 'json'
            };
            var promise = Utils.myAjaxHandler(options);
            promise.done(function (resultData) {
                self.indexPublicData = resultData;
                if (resultData) {
                    self.mydata = resultData.data.menu;
                    self._showTr(resultData.data.menu);
                }
            })
        })
		
		$('.main-cancel-reason-close').on('click',function(){
			$(this).closest('#showCancelReason').find('.close').click();
		})

        var options = {
            url: ContextClinc_Server + "/productOrder/selectOrderInfoByClinicId",
            method: "POST",
            dataType: 'json'
        };
        var promise = Utils.myAjaxHandler(options);
        var cover_year = "";
        var cover_month = "";
        var cover_day = "";
        promise.done(function (msg) {
            cover_year = new Date(msg.data.currentDate).getFullYear();
            cover_month = new Date(msg.data.currentDate).getMonth() + 1;
            cover_day = new Date(msg.data.currentDate).getDate();
            if (cover_day == 1) {
                if (cover_month == 1) {
                    cover_month = 12;
                } else {
                    cover_year++;
                    cover_month--;
                }
            } else {
                cover_year++;
            }
            cover_day = self.getMonthDay(cover_year, cover_month, cover_day - 1);
            $('#cover_year').html(cover_year);
            $('#cover_month').html(cover_month);
            $('#cover_day').html(cover_day);
            $('#cover_time').html(cover_year + '-' + cover_month + '-' + cover_day);
            $('#server_endtime').html(msg.data.endDate);
        }).fail(function (error) {
        }).always(function () {
        });

        $(document).delegate("#data-icon-click", "click", function () {
            $(this).prev('input').focus();
        })

        var mydoctorpop = $('#referralWindow');
        cH = $(window).height();
        cW = $(window).width();
        popCon = mydoctorpop.find('.popcontent');
        w = mydoctorpop.outerWidth(true);
        h = mydoctorpop.outerHeight(true);
        t = Math.max((cH - h) / 2, 0);
        r = Math.max((cW - w) / 2, 0);

        mydoctorpop.css({
            'top': t + 'px',
            'right': r + 'px'
        });
    },
    getMonthDay: function (year, month, day) {
        var self = this;
        if (day == 0) {
            switch (month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    return 31;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    return 30;
                    break;
                case 2:
                    if (self.isLeapYear(year)) {
                        return 29;
                    } else {
                        return 28;
                    }
                    break;
            }
        } else {
            return day;
        }
    },
    isLeapYear: function (year) {
        return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
    },

    handleWindowEvent: function () { },

    noticeFramePage: function () {
        var curObj = $('.side .current-page');
        var currentModel = curObj.attr("model");
        var currentMenu = null;
        if ($("#sub-menu").is(':visible')) {
            currentMenu = $("#sub-menu .selected", parent.document).attr("menu");
        } else {
            currentMenu = $("#sub-menu", parent.document).attr("menu");
        }
        $('iframe').each(function () {
            var item = $(this);
            var msg = {
                'type': 2,
                'currentModel': currentModel,
                'currentMenu': currentMenu
            };
            item.load(function () {
                item[0].contentWindow.postMessage(JSON.stringify(msg), "*");
            });
        });
    },

    addMsgListener: function () {
        if (typeof window.addEventListener != 'undefined') {
            window.addEventListener('message', this.handleIframeMsg, false);
        } else if (typeof window.attachEvent != 'undefined') {
            //for ie
            window.attachEvent('onmessage', this.handleIframeMsg);
        }
    },

    handleIframeMsg: function () {
        var data = event.data;
        if (data && data.type == "1") {
            SetWinSize(Number(data));
        }
    },

    needGuide: function () {
        var self = this;
        var options = {
            url: ContextClinc_Server + "guide/needGuide",
            method: "GET",
            dataType: 'json'
        };
        var promise = Utils.myAjaxHandler(options);
        promise.done(function (msg) {
            if (msg.data) {
                location.href = '../../clinic/guide/guidePage.html';
            }
        });
    },

    fetchMenuData: function () {
        var self = this
        var options = {
            url: ContextClinc_Server + "session/userLoginInfo",
            dataType: 'json'
        };
        var promise = Utils.myAjaxHandler(options);
        promise.done(function (resultData) {
            self.indexPublicData = resultData;
            if (resultData) {
                var user = resultData.data.clinicUserVO;
                if (!user) {
                    return;
                }
                self.currentUser = user;
                $("#u-name").text(user.userName);
                $("#c-name").text(user.clinicName);
                $(document).attr('title', user.clinicName);

                if (user.regFlag == '1' && user.isFinishGuide == '0') {
                    $("#protocol").show();
                    $(".protocol-footBtn").removeClass("dsn");
                    $(".agree-footBtn").addClass("dsn");
                } else {
                    $("#protocol").hide();
                }
                var clinicTags = user['clinic']['tags'];
                var bFlag = false;
                for (var n = 0, len = clinicTags.length; n < len; n++) {
                    if (clinicTags[n].tagCode == "ALLIANCE") {
                        bFlag = true;
                        break;
                    }
                }
                if (bFlag) {
                    $("#operating").removeClass("dsn").find(".icon-o-manual").on("click", function () {
                        $(document).trigger("getOperatingDoc", []);
                    });
                }

                //诊所
                var clinicList = resultData.data.employeeList;
                $("#switchClinic").empty();
                if (clinicList == null || clinicList.length <= 1) {
                    $("#switchClinicLi").remove();
                } else {
                    for (var i in clinicList) {
                        var item = clinicList[i];
                        if (item.clinicId != resultData.data.clinicId) {
                            if (item.defaultClinic == 1) {
                                $("#switchClinic").append('<li class="radio clear" clinicId="' + item.clinicId + '" loginName="' + item.employeeAccount + '"userId="' +
                                    item.userId + '"title="' + item.clinicName + '"><span class="switchClinicName fl">' + item.clinicName + '</span><span class="fr defaultClinic bg_half_theme_color text_theme_color">当前默认登录诊所</span></li>');
                            } else {
                                $("#switchClinic").append('<li class="radio clear" clinicId="' + item.clinicId + '" loginName="' + item.employeeAccount + '"userId="' +
                                    item.userId + '"title="' + item.clinicName + '"><span class="switchClinicName fl">' + item.clinicName + '</span><span class="fr setDefaultClinic">设为默认登录诊所</span></li>');
                            }

                        } else {
                            if (item.defaultClinic == 1) {
                                $("#switchClinic").append('<li class="radio clear checked" clinicId="' + item.clinicId + '" loginName="' + item.employeeAccount + '"userId="' +
                                    item.userId + '"title="' + item.clinicName + '"><span class="switchClinicName fl">' + item.clinicName + '</span><span class="fr defaultClinic bg_half_theme_color text_theme_color">当前默认登录诊所</span></li>');
                            } else {
                                $("#switchClinic").append('<li class="radio clear checked" clinicId="' + item.clinicId + '" loginName="' + item.employeeAccount + '"userId="' +
                                    item.userId + '"title="' + item.clinicName + '"><span class="switchClinicName fl">' + item.clinicName + '</span><span class="fr setDefaultClinic">设为默认登录诊所</span></li>');
                            }
                        }
                    }
                    var w, h, t, r, cH, cW, popCon, maxH;
                    var mypop = $('#switchClinicPop');
                    cH = $(window).height();
                    cW = $(window).width();
                    popCon = mypop.find('.popcontent');
                    w = mypop.outerWidth(true);
                    h = mypop.outerHeight(true);
                    t = Math.max((cH - h) / 2, 0);
                    r = Math.max((cW - w) / 2, 0);
                    mypop.css({
                        'top': t + 'px',
                        'right': r + 'px'
                    });
                }
                window.localStorage.setItem("medical_user_data", JSON.stringify(user));
                //处理认证与签约是否显示
                self.manageShowOrHide();
                var userData = JSON.parse(localStorage.getItem("medical_user_data"));
                if (userData.clinic.clinicChainType != 3 || userData.employee.regFlag != 1) {
                    $('#initClinicLi').hide()
                }
                if (!resultData.data.menu) {
                    return;
                }
                var newMenu = _.filter(resultData.data.menu, function (obj) {
                    if (obj.display != 0) {
                        return true;
                    }
                    return false;
                });
                if (!newMenu.length) {
                    return;
                }
                /****左侧菜单栏的初始化****/
                self.getParamValueByCode(newMenu);
                /********/

                if (resultData.data.loginOnlyStatus == 'true') {
                    interval = setInterval(self.heartBeat, "5000");
                }

                /**如果该用户不是诊所管理员，则不显示诊所中心链接**/
                if (self.currentUser.regFlag != 1) {
                    $("#jumpToClinicCenter").empty();
                    $("#switchVersion").hide();
                } else {
                    self.jumpToClinicCenter();
                }
                // 初始化WebSocket
                self.initWebsocket();
                // 初始化clinic门诊数据
                $(document).trigger("initialClinic", []);
            }
            //初始化诊所Logo
            self.initClinicLogo();
            //试用结束查询
            self.tryEndInfo();
        })

    },
    initClinicLogo: function () {
        $(".clinic_self_logo img").on("load", function () {
            $(this).parent().show();
        })
        var logoUrl = this.indexPublicData.data.clinicUserVO.clinic.clinicLogoPath;
        if (logoUrl) {
            $(".clinic_self_logo img").attr("src", SH_IMG_SERVER + logoUrl);
        }
    },
    tryEndInfo: function () {
        var msg = this.indexPublicData.data.initParams;
        var endFlag = msg.endFlag;
        var jumpUrl = msg.jumpUrl;
        var bg_try = $(".bg_try_end");
        if (endFlag == "true") {
            //显示试用结束弹窗
            bg_try.show().find(".try_end_btn").on("click", function () {
                window.location.href = jumpUrl;
            });
            window.endFlagTimer = setInterval(function () {
                if (bg_try.length == 0) {
                    var createDom = '<div class="bg_try_end">' +
                        '<div class="try_end_box">' +
                        '<div class="try_end_title">试用结束提醒</div>' +
                        '<div class="try_end_words">' +
                        '尊敬的用户：<br />' +
                        '您的患者人数已超过60位。为给诊所提供更加规范的医疗管理服务，根据万家平台规则，诊所须完善补充诊所相关资质并提交审核，方可继续使用云诊所。<br />' +
                        '请诊所管理员进入诊所中心>>基本设置，填写诊所资料并提交。' +
                        '</div>' +
                        '<div class="try_end_btn">' +
                        '立即完善资料' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                    $("body").append(createDom);
                } else {
                    if (bg_try.is(":hidden")) {
                        bg_try.show()
                    } else {
                        bg_try.css({
                            "position": "fixed",
                            "width": "100%",
                            "height": "100%",
                            "top": "0",
                            "left": "0"
                        })
                    }
                }

            }, 3000)
        } else {
            //隐藏试用结束弹窗
            bg_try.hide();
        }

    },
    //处理认证与签约是否显示
    manageShowOrHide: function () {
        var clinicChainType = config_cache.getCache("medical_user_data").clinic.clinicChainType
        if (clinicChainType != 0) {
            $('.approve_box').show();
            $('.contract').show();
        } else {
            $('.approve_box').hide();
            $('.contract').hide();
        }
        var auditResult = config_cache.getCache("medical_user_data").clinic.auditResult
        if (auditResult == '11' || auditResult == '02' || auditResult == '15') {
            $('.approve_box>.isApprove').show();
            $('.approve_box>.noApprove').hide();

        } else {
            $('.approve_box>.noApprove').show();
            $('.approve_box>.isApprove').hide();
        }
    },
    //获取url中的参数
    getUrlParam: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    },
    _theDefaultSeted: function () {
        return this.getUrlParam("displaymenu") ? this.getUrlParam("displaymenu") : false;
    },
    _initMenu: function (data, map) {
        var self = this;
        var _data = data;
        var _map = map;
        var keyvalue = {
            "3005": "NURTR",
            "3008": "CONSULT"
        };

        $.each(map, function (index, item) {
            var model = keyvalue["" + index];
            if ((model == 'NURTR' && item != 1) || (model == 'CONSULT' && item != 3)) {
                for (var i = 0; _data[i]; i++) {
                    if (_data[i].code == model) {
                        _data.splice(i, 1);
                    }
                }
            }
        });

        self.menuOptions.menuData = _data;
        self.menuOptions["currModel"] = _data.code;
        if (_data.length <= self.menuOptions.maxSingleMenuCount) {
            $(".side").addClass("single-row").removeClass("single-row-sm").removeClass("single-row-nor");
            self.menuOptions["displayType"] = 2;
        }
        self._generateMenu();
        if (self._theDefaultSeted()) {
            for (var m = 0; self.menuOptions.menuData[m]; m++) {
                if (self._theDefaultSeted() == self.menuOptions.menuData[m].iconUrl) {
                    var currmenu = self.menuOptions.menuData[m];
                }
            }
            self.menuOptions.currModel = currmenu.code;
            self.generateTab(currmenu.linkUrl, currmenu.subMenus);
            return;
        }
        $("#menu").children(".side-nav-item").eq(0).click();
    },

    //显示菜单排序列表
    _showTr: function (mydata, isDefault) {//左侧菜单数据，是否为默认数据
        $('#select-sort-table tbody').empty();
        for (var i = 0; i < mydata.length; i++) {
            var str_tr = '<tr>'
            str_tr += '<td>' + (i + 1) + '</td>'
            str_tr += '<td>' + mydata[i].name + '</td>'
            str_tr += '<td>'
            str_tr += '<span class="up-move">上移</span>'
            str_tr += '<span class="down-move">下移</span>'
            str_tr += '</td>'
            str_tr += '<td>'
            if (!isDefault && mydata[i].isShow) {
                str_tr += '<div class="select-sort-checkbox select-sort-checkbox-checkbox-active"></div>'
            } else {
                str_tr += '<div class="select-sort-checkbox"></div>'
            }
            str_tr += '</td>'
            str_tr += '</tr>';
            $('#select-sort-table tbody').append(str_tr)
        }
    },

    copyObj: function (obj) {
        var res = {};
        for (var key in obj) {
            res[key] = obj[key];
        }
        return res;
    },
    /**
     * 生成左侧功能菜单
     *
     * @param data 菜单信息JSON对象
     */
    _generateMenu: function (startIndex) {
        var _this = this;
        var data = _this.menuData = _this.menuOptions.menuData;

        data_isShow_length = 0;
        //用户想要显示的菜单数量
        for (var i = 0; i < data.length; i++) {
            if (data[i].isShow == true) {
                data_isShow_length++;
            }
        }

        if (_this.isInit) {
            if (data_isShow_length <= _this.menuOptions.maxSingleMenuCount) {
                $(".side").addClass("single-row");
                _this.menuOptions["displayType"] = 2
            }
        }

        var container = $("#menu");
        var navIcon = '<i class="side-nav-icon"></i>';
        var fragment = document.createDocumentFragment();
        var moreFragment = document.createDocumentFragment();
        var starti = startIndex || 0;
        //endi是左侧可以显示的数量
        var endi = (starti + parseInt(_this.getCellCount())) < data_isShow_length ? (starti + parseInt(_this.getCellCount())) : data_isShow_length;
        if (starti == 0) {
            $("#side-more_pre").removeClass("side-bak").addClass("side-bak_no");
        } else {
            $("#side-more_pre").removeClass("side-bak_no").addClass("side-bak");
        }
        //        console.log(endi)

        //        console.log(data_isShow_length)
        if (endi < data_isShow_length) {
            $("#side-more_next").removeClass("side-more_no").addClass("side-more");
        } else {
            $("#side-more_next").removeClass("side-more").addClass("side-more_no");
        }

        if (starti == 0 && endi >= data.length) {
            $(".bottom-more").hide();
        } else {
            $(".bottom-more").show();
        }

        //data_isShow_count是计数用的，确保左边菜单的数量等于endi
        var data_isShow_count = 0
        for (var i = starti; i < data.length; i++) {
            if (data[i].isShow) {
                if (data_isShow_count < endi) {
                    fragment.appendChild(_this.createLi(data[i]));
                } else {
                    moreFragment.appendChild(_this.createLi(data[i], "more"));
                }
                data_isShow_count++;
            } else {
                moreFragment.appendChild(_this.createLi(data[i], "more"));
            }
            var flag = true;
        }

        if (_this.isInit) {
            _this.mydata = [];
            for (var i = 0; i < data.length; i++) {
                _this.mydata[i] = _this.copyObj(data[i])
            }
        }

        _this.isInit = false;

        container.html("").append(fragment);
        $(".more-cell").html("").append(moreFragment).parents(".side").css("width", "200px");
        _this.menuOptions["startIndex"] = starti;
        //生成菜单之后需重新添加iconfont类名
        //_this.addIconFontClass();
    },

    getParamValueByCode: function (menudata) {
        var self = this;
        var _menudata = menudata;
        // 3005是否需要分诊 1是  ;3008登记模式1普通登记
        var item3005 = _.find(JSON.parse(window.localStorage.getItem("medical_user_data")).clinicParams, function (item) { return item.parameterCode == '3005'; });
        var item3008 = _.find(JSON.parse(window.localStorage.getItem("medical_user_data")).clinicParams, function (item) { return item.parameterCode == '3008'; });
        var map = {
            3005: item3005 ? item3005.parameterValue : 1,
            3008: item3008 ? item3008.parameterValue : 1
        };
        self._initMenu(_menudata, map);
    },

    ///每页能显示的个数
    getCellCount: function () {
        var _this = this;
        var allheight = $(".side").height();
        var multiple = 2;
        var minuts = 0;
        var bottomheight = 40;
        var topheight = 36;
        if (_this.menuOptions["displayType"] == 1) { //////小菜单模式
            _this.menuOptions["cellheight"] = 100;
            //minuts = 10;
            multiple = 2;
            $(".icon-more_menu").fadeOut(0);
            //bottomheight = 50;
        } else if (_this.menuOptions["displayType"] == 0) { /////普通模式
            _this.menuOptions["cellheight"] = 100;
            multiple = 2;
            ///bottomheight = 40;
            $(".icon-more_menu").fadeIn(0);
        } else {
            _this.menuOptions["cellheight"] = 100; //////少于6个的情况
            multiple = 1;
            //bottomheight = 40;
            $(".icon-more_menu").fadeIn(0);
        }
        var ulmaxheight = parseInt(allheight) - _this.menuOptions.bottomheight - _this.menuOptions.topheight - parseInt(_this.menuOptions.blankheight); //bottomheight：底部切换按钮高度，topheight：顶部切换按钮高度      - minuts
        var count = multiple * (Math.floor(ulmaxheight / 100));
        return count;
    },

    getCellIndexByCode: function (code) {
        var self = this;
        var data = self.menuOptions.menuData;
        for (var i = 0; data[i]; i++) {
            if (data[i].code == code) {
                return i;
            }
        }
        return 0;
    },

    crossMenu: function (code, fId, sId) {
        var self = this;

        var liEl = $("#" + fId);
        $('.side-nav-item').removeClass('current').removeClass('current-page');
        $('.more-cell-li').removeClass('current').removeClass('current-page');
        liEl.addClass('current').addClass('current-page');

        self.crossModule(fId, sId);
    },
    createLi: function (data, type) {
        var self = this;
        var item = data;
        if (item.display == 1) {
            var menuOne = document.createElement("li");
            menuOne.setAttribute("id", item.iconUrl);
            menuOne.setAttribute("model", item.code);
            if (type == "more") {
                menuOne.className = item.code == self.menuOptions["currModel"] ? "more-cell-li current current-page" : "more-cell-li";
            } else {
                menuOne.className = item.code == self.menuOptions["currModel"] ? "side-nav-item current current-page" : "side-nav-item";
            }

            var domP = document.createElement("p");
            domP.innerHTML = item.name;
            var icon = document.createElement("i");
            icon.className = "side-nav-icon " + "icon-" + item.iconUrl;

            menuOne.appendChild(icon);
            menuOne.appendChild(domP);

            $(menuOne).off("click").on("click", function () {
                self.resetDom();
                $(".side").find(".current").removeClass("current-page").removeClass("current");
                $(this).addClass("current-page").addClass("current");
                self.menuOptions["currModel"] = $(this).attr("model");
                self.generateTab(item.linkUrl, item.subMenus);
                $("#r-main").removeClass("has_slide_box_fixed");

            });
            return menuOne;
        }
    },
    resetDom: function () {
        $("#curPatCard").addClass("dsn");
        $("#finishVisit").addClass("dsn");
        $(".left-arrow").addClass("dsn");
        $(".right-arrow").addClass("dsn");
        $("#dd-ctrl").addClass("dsn");
    },

    generateTab: function (linkUrl, subMenu, menuCode) {
        var self = this;
        var subContainer = $("#sub-menu").empty();
        subContainer.removeClass("tab-nav-submenu");
        subContainer.addClass("tab-nav");
        $("#submenuOuter").show().removeClass("sub-menu-outer");
        if (subMenu && subMenu.length > 1) {
            // 当菜单是“今日就诊”时，特殊处理为不显示二级菜单
            if (subMenu[0].parentCode != self.DwsMenuCode) {
                subContainer.show();
                var subAry = [];
                for (var j = 0, size = subMenu.length; j < size; j++) {
                    (function (idx) {
                        var obj = subMenu[idx];
                        menuCode = menuCode ? menuCode : obj.code;
                        if (obj.display == 1) {
                            var menuTwo = $('<span id="' + obj.code + '" menu="' + obj.code + '">' + obj.name + '</span>');
                            // menuTwo.appendTo(subContainer);
                            subAry.push(menuTwo);
                            menuTwo.off("click").on("click", function () {
                                self.switchTab(obj.linkUrl, obj.code);
                            });
                        }
                    })(j);
                }
                subContainer.append(subAry);
            }
        } else if (subMenu && subMenu.length == 1) {
            var obj = subMenu[0];
            subContainer.attr("menu", obj.code).hide();
        } else {
            subContainer.hide();
        }
        this.switchTab(linkUrl, menuCode);

    },

    switchTab: function (linkUrl, domA) {
        var self = this;
        var myContent = $("#r-main"),
            vFrame = $("#paFrame");
        if (linkUrl) {
            var tmpVal = Utils.getCookie('cookie_pawj_medical_user_id');
            if (!tmpVal) {
                self.logout();
            }
            $("#" + domA).addClass('selected').siblings().removeClass("selected");
            //var tmp = 120;
            if ($("#sub-menu").is(":hidden")) {
                //tmp = 80;
                $(".content").css("padding-top", "10px");
            } else {
                var specified = $("#submenuOuter").hasClass("sub-menu-outer") ? 30 : 10;
                $(".content").css("padding-top", (parseInt($("#submenuOuter").height()) + specified) + "px")
            }
            if (vFrame && vFrame.length == 0) {
                $("<iframe height='100%' width='100%' src='" + linkUrl + "' id='paFrame' name='paFrame' scrolling='no'" +
                    " frameborder='no' marginheight='0' marginwidth='0' allowTransparency='true' onload='javascript:SetWinSize()'></iframe>").appendTo(myContent);
            } else {
                vFrame.attr("src", linkUrl);
            }
            self.noticeFramePage();
        } else {
            myContent.empty();
        }
        //显示转诊窗口
        $("#referralWindow").hide();
    },

    crossModule: function (fId, sId, urlParams) {
        var self = this,
            subMenu = null,
            linkUrl = null,
            menuCode = null;
        for (var i = 0, len = self.menuData.length; i < len; i++) {
            var item = self.menuData[i];
            if (item.iconUrl === fId) {
                subMenu = item.subMenus;
                linkUrl = urlParams ? item.linkUrl + urlParams : item.linkUrl;
                menuCode = item.code;
                break;
            }
        }
        var liEl = $("#" + fId);
        if (sId) {
            liEl.addClass('current').addClass('current-page');
            liEl.siblings().removeClass('current').removeClass('current-page');
            for (var j = 0, size = subMenu.length; j < size; j++) {
                var menuObj = subMenu[j];
                if (sId === menuObj.code) {
                    menuCode = menuObj.code;
                    linkUrl = urlParams ? menuObj.linkUrl + urlParams : menuObj.linkUrl;
                    break;
                }
            }
        }
        // 医生站顶部隐藏菜单
        $("#curPatCard").addClass("dsn");
        $("#finishVisit").addClass("dsn");
        $(".left-arrow").addClass("dsn");
        $(".right-arrow").addClass("dsn");
        $("#dd-ctrl").addClass("dsn");
        self.generateTab(linkUrl, subMenu, menuCode);
    },

    logout: function () {
        window.localStorage.removeItem("medical_user_data");
        /*Utils.myAjaxHandler({
        	url: Context_MEC_Web + "logout.do",
        });
        Utils.myAjaxHandler({
        	url: Context_CCM_Web + "logout.do",
        });
        Utils.myAjaxHandler({
        	url: Context_HOSP_Web + "logout.do",
        });
        Utils.myAjaxHandler({
        	url: Context_REFERRAL_Web + "logout.do",
        });
        Utils.myAjaxHandler({
        	url: Context_CLINICEXT_Web + "logout.do",
        });
        Utils.myAjaxHandler({
        	url: Context_GP_Web + "logout.do",
        });
        Utils.myAjaxHandler({
        	url: Context_TCM_Web + "logout.do",
        });
        Utils.myAjaxHandler({
        	url: Context_DENTAL_Web + "logout.do",
        });
        var peLogout = Context_MEC_Web + "logout.do";
        $("<iframe src='" + peLogout + "'></iframe>").appendTo($("body"));
        var ccmLogout = Context_CCM_Web + "logout.do";
        $("<iframe src='" + ccmLogout + "'></iframe>").appendTo($("body"));
        var hospLogout = Context_HOSP_Web + "logout.do";
        $("<iframe src='" + hospLogout + "'></iframe>").appendTo($("body"));
        var referralLogout = Context_REFERRAL_Web + "logout.do";
        $("<iframe src='" + referralLogout + "'></iframe>").appendTo($("body"));
        var extClinicLogout = Context_CLINICEXT_Web + "logout.do";
        $("<iframe src='" + extClinicLogout + "'></iframe>").appendTo($("body"));
        var gpLogout = Context_GP_Web + "logout.do";
        $("<iframe src='" + gpLogout + "'></iframe>").appendTo($("body"));
        var tcmLogout = Context_TCM_Web + "logout.do";
        $("<iframe src='" + tcmLogout + "'></iframe>").appendTo($("body"));
        var dentalLogout = Context_DENTAL_Web + "logout.do";
        $("<iframe src='" + dentalLogout + "'></iframe>").appendTo($("body"));*/
        var curHost = top.location.href;
        // curHost = curHost.lastIndexOf("/") === -1 ? curHost + "/" : curHost;
        if (curHost.indexOf("http://") > -1) {
            var url = "http://127.0.0.1:8080/pinganwj-clinic-web/logout.do";
        } else {
            curHost = curHost.substring(0, curHost.indexOf('com') + 3);
            if (curHost.indexOf("test") > -1 || curHost.indexOf("stg") > -1) {
                curHost += ":4443";
            }
            var url = curHost + "/logout.do";
        }
        //        setTimeout(function () {
        if (window.parent && window.parent.location && window.parent.location.href) {
            window.parent.location.href = url + "?cookie_pawj_medical_user_id=" + Utils.getCookie('cookie_pawj_medical_user_id');
        } else {
            window.location.href = url + "?cookie_pawj_medical_user_id=" + Utils.getCookie('cookie_pawj_medical_user_id');
        }
        //        }, 200);
    },

    switchClinic: function (clinicId, userId) {
        var params = {
            clinicId: clinicId,
            userId: userId
        };
        var options = {
            url: ContextClinc_Server + "clinicSwitch/switchUserLoginInfo",
            dataType: 'json',
            data: params,
            showMask: true
        };
        var promise = Utils.myAjaxHandler(options);
        promise.done(function (result) {
            // 诊疗记录id
            var errorMessage = result.errorMessage;
            var errorCode = result.errorCode;
            if (errorCode == "E2SP0111") {
                $.paError("诊所数据为空!");
                return;
            }
            if (errorCode == "E1SP0007") {
                $.paError("此诊所用户没有权限!");
                return;
            }
            if (errorCode != "E0000000") {
                $.paError("切换诊所失败!");
                return;
            }
            if (window.parent) {
                window.parent.location.reload()
            } else {
                window.location.reload();
            }
        }).fail(function (msg) {
            if (window.parent) {
                window.parent.location.reload()
            } else {
                window.location.reload();
            }
        });

    },
    setDefaultClinic: function (clinicId, userId) {
        var params = {
            clinicId: clinicId,
            userId: userId
        };
        var options = {
            url: ContextClinc_Server + "clinicSwitch/setDefaultLogin",
            dataType: 'json',
            data: params,
            showMask: true
        };
        var promise = Utils.myAjaxHandler(options);
        promise.done(function (result) {
            if (result.errorCode == "E0000000") {
                $.paSuccess("设置成功!");
                $("#switchClinicPop").find(".defaultClinic").toggleClass("setDefaultClinic").toggleClass("defaultClinic").toggleClass("bg_half_theme_color").toggleClass("text_theme_color").text("设为默认登录诊所");
                $("#switchClinicPop").find("li[clinicId=" + clinicId + "]").find(".setDefaultClinic").toggleClass("defaultClinic").toggleClass("setDefaultClinic").toggleClass("bg_half_theme_color").toggleClass("text_theme_color").text("当前默认登录诊所");
            }
        }).fail(function (msg) {
            $.paError("设置默认诊所失败!");
        });
    },

    jumpToClinicCenter: function () {
        var result = this.indexPublicData.data.initParams.jumpUrl
        $("#jumpToClinicCenter a").attr("href", result);
    },

    heartBeat: function () {
        var options = {
            url: ContextClinc_Server + "session/isSessionAlive",
            dataType: 'json'
        };
        var promise = Utils.myAjaxHandler(options);
        promise.done(function (data) {
            if (data.errorCode == 'E1SP0004') {
                var settings = {
                    msg: data.errorMessage,
                    cancelTxt: "取消",
                    saveTxt: "确定",
                    onYes: function () {
                        clearTimeout(interval);
                        $(".i-exit").click();
                    }
                };
                $.paConfirm(settings);
                $("#pa-cancel,#icon_close").hide();
                $("#cfm-msg").addClass("noteColor");
                $("#cover").show();
                clearTimeout(interval);
                return;
            }
        }).fail(function (msg) {
            $.paWarn("系统异常");
        });
    },

    //遍历主菜单增加图标class
    /*addIconFontClass: function(){
        var $menu = $('#menu').parents(".side");
        $menu.find('li').each(function () {
            var liId = $(this).attr('id');
            $(this).find('.side-nav-icon').addClass('icon-' + liId);
        })
    },*/

    initWebsocket: function () {
        var clinicId = config_cache.getCache("medical_user_data").clinicId;
        var userId = config_cache.getCache("medical_user_data").userId;
        var cookieUserId = Utils.getCookie('cookie_pawj_medical_user_id');
        PAWJ_Websocket.clinicId = clinicId;
        PAWJ_Websocket.userId = userId;
        var options = {
            wcUrl: ContextMsg_Ws_Server + "ws?cid=" + clinicId + "&uid=" + userId + "&cookie_pawj_medical_user_id=" + cookieUserId,
            onMessage: function (msg) {
                try {
                    var data = JSON.parse(msg);
                    if (data.type == 8) { // 添加微信会话消息
                        if (data.message == 'WS:1001') {
                            $.paError("建立会话失败，请稍后重试。");
                        }
                    } else if (data.type == 1) { // 微信消息  此版本暂时不上，先注释
                        if (window.frames['paFrame'].receiveWechatMessage) {
                            window.frames['paFrame'].receiveWechatMessage(data);
                        }
                    } else if (data.type == 2) { // 新增预约消息
                        $('.message_remind_box .message_remind_appt_index span').text(data.message).parent().show();
                        menuForIndex.calculateMessageRemindCount();
                    } else if (data.type == 3) { // 库存预警消息
                        $('.message_remind_box .message_remind_medicine_index span').text(data.message).parent().show();
                        menuForIndex.calculateMessageRemindCount();
                    } else if (data.type == 4) { // 新增微信消息  此版本暂时不上，先注释
                        if (window.frames['paFrame'].isOpenChat) {
                            if (!window.frames['paFrame'].isOpenChat(data.openId)) {
                                $('.message_remind_box .message_remind_wechat_index span').text(data.message).parent().show();
                                menuForIndex.calculateMessageRemindCount();
                            }
                        } else {
                            $('.message_remind_box .message_remind_wechat_index span').text(data.message).parent().show();
                            menuForIndex.calculateMessageRemindCount();
                        }
                    } else if (data.type == 9) { //问题反馈消息
                        $('.message_remind_box .message_remind_feedback_index span').text(data.message).parent().show();
                        menuForIndex.calculateMessageRemindCount();
                    } else if (data.type == 17) { //视频会诊
                        consultVideoConfirm(data.message);
                    } else if (data.type == 18) { //关闭视频会诊请求
                        removeVideoConfirm();
                    }
                } catch (e) {
                    //console.log(msg);
                }
            }
        };

        PAWJ_Websocket.websocket = $.websocket(options);
    },
    calculateMessageRemindCount: function () {
        var count = 0;
        $('.message_remind_box .message_remind_ul span').each(function () {
            var that = $(this);
            if (that.text()) {
                count += parseInt(that.text());
            }
        });

        if (count > 99) {
            $('.message_remind_box .message_remind_num').text('99+').show();
            $('.message_remind_no_tips').hide();
        } else if (count > 0) {
            $('.message_remind_box .message_remind_num').text(count).show();
            $('.message_remind_no_tips').hide();
        } else {
            $('.message_remind_box .message_remind_num').text('0').hide();
            $('.message_remind_no_tips').show();
        }
    },
    clickWebsocketMessage: function (messageType) {
        $('.message_remind_box .message_remind_ul').hide();
        if (messageType == 2) { // 新增预约消息
            // 跳转到预约管理-预约查询
            menuForIndex.crossMenu('APT', 'order_management', 'APT02');
            $('.message_remind_box .message_remind_appt_index').hide().find('span').text('0');
        } else if (messageType == 3) { // 库存预警消息
            // 跳转到库房管理-库存管理
            menuForIndex.crossMenu('DRUG', 'medicine_management', 'DRUG02');
            $('.message_remind_box .message_remind_medicine_index').hide().find('span').text('0');
        } else if (messageType == 4) { // 新增微信消息
            // 跳转到SCRM-粉丝管理-消息管理
            menuForIndex.crossMenu('SCRM', 'scrm_management', 'SCRM_MARKETING');

            $('.message_remind_box .message_remind_wechat_index').hide().find('span').text('0');
            messageType = 1;
        } else if (messageType == 9) { /*问题反馈消息*/
            $('.message_remind_box .message_remind_feedback_index').hide().find('span').text('0');
        }

        // 点击后清空未读消息数量
        menuForIndex.cleanWebsocketMessageCounter(messageType);
    },
    cleanWebsocketMessageCounter: function (messageType) {
        var options = {
            url: ContextClinc_Server + 'messagews/cleanCounter',
            method: "POST",
            data: { type: messageType },
            dataType: 'JSON',
            showMask: true
        };
        var promise = Utils.myAjaxHandler(options);
        promise.done(function (msg) {
            if (msg != null && msg.errorCode == SUCCESSCODE) {
                menuForIndex.calculateMessageRemindCount();
            }
        }).fail(function (error) {
            // $.paError("操作失败!");
        }).always(function () { });
    },

    //获取积分
    forIntegral: function () {
        var self = this;
        var options = {
            url: ContextClinc_Server + "memberIntegral/getMemberIntegralInfo",
            method: "POST",
            dataType: 'json'
        };
        var promise = Utils.myAjaxHandler(options);
        promise.done(function (msg) {
            if (msg != null && msg.errorCode == "E0000000") {
                $('#integral_num').text(msg.data.integralAvai);
                $('#integral_rules').attr('href', msg.data.integralRoleUrl);
            }
        }).fail(function (msg) {
            $.paError("积分获取失败!");
        });
    },
    //////关闭“更多”弹窗
    closeMore: function () {
        $(".more-close").click();
    }
};

window.PAWJ_Websocket = {};
/*
 *页面js执行入口
 */
$(function () {
    window.menuForIndex = new IndexPage();
});

function SetWinSize() { }