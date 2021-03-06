$(document).ready(function() {
	var login = {
		init : function() {
			this.tabChange();
			this.typeChange();
		},
		tabChange : function() {
			// 点击登录方式时触发事件
			$(".choice span").on("click", function() {
				var idx = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				if (idx == 0) {
					$(".codes-login").show();
					$(".dynamic-codes-login").hide();
					// 设置登录方式为密码登录
					$(".codes-login").attr("data-is-curr", 1);
					$(".dynamic-codes-login").attr("data-is-curr", 0);
					$(".error-tip").html("");
				} else {
					$(".codes-login").hide();
					$(".dynamic-codes-login").show();
					// 设置登录方式为动态码登录
					$(".dynamic-codes-login").attr("data-is-curr", 1);
					$(".codes-login").attr("data-is-curr", 0);
					$(".error-tip").html("");
				}
			});

			// 点击切换图片按钮触发事件
			$(".tab").on("click", function(e) {
				e.preventDefault();
				var val = $("#recordNum").val();
				$("#recordNum").val(parseInt(val) + 1)
				if (val % 2 == 0) {
					$(".tab").css({
						"background" : "url(/resources/images/pc/login/sz/er.png) no-repeat"
					});
					$(".code-type").show();
					$(".erweima-type").hide();
					$("p.explain").hide();
				} else {
					$(".tab").css({
						"background" : "url(/resources/images/pc/login/sz/computer.png) no-repeat"
					});
					$(".code-type").hide();
					$(".erweima-type").show();
					$("p.explain").show();
				}
			});
			
			// 记住我按钮
			$(".checkbox").on("click", function() {
				var val = $("#checkedNum").val();
				$("#checkedNum").val(parseInt(val) + 1);
				if (val % 2 == 0) {
					$(".js_rembpws").addClass("selected");
				} else {
					$(".js_rembpws").removeClass("selected");
				}
			});
		},
		typeChange : function() {
			$(".erweima-type>div").mouseout(function() {
				$(".phone").css({
					'transition' : '0.2s',
					"right" : "-168px"
				});
				$(".erweima").css({
					'transition' : '0.5s',
					'left' : '117px'
				});
			});
			
			$(".erweima-type>div").mouseover(function() {
				$(".erweima").css({
					'transition' : '0.5s',
					'left' : '25px'
				});
				$(".phone").css({
					'transition' : '0.5s',
					"right" : "27px"
				});
			});
		}
	}
	login.init();
	
	// 顶部logo跳转
	$(".logo-wrap .logo>em").click(function() {
		window.location.href = _wwwHost;
	});
	
	// 本地收藏
	$("a.collect").click(function() {
		var url = window.location;
		var title = document.title;
		var ua = navigator.userAgent.toLowerCase();
		if (ua.indexOf("360se") > -1) {
			alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
		} else if (ua.indexOf("msie 8") > -1) {
			window.external.AddToFavoritesBar(url, title); //IE8
		} else if (document.all) {
			try {
				window.external.addFavorite(url, title);
			} catch (e) {
				alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
			}
		} else if (window.sidebar) {
			window.sidebar.addPanel(title, url, "");
		} else {
			alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
		}
	});
	$("a.registerJump").click(function() {
		window.location.href= _wwwHost + "/cloudclinic";
	});
});
