function StructTree(b,a){this.init(b,a);this.bindEvent();if(this.data){this.render(this.data)}else{this.ajaxHandler()}}StructTree.prototype={init:function(b,a){if(typeof b!="string"){this.element=$(b)}else{this.element=$("#"+b)}this.id="id";if(a.id){this.id=a.id}this.name="name";if(a.name){this.name=a.name}this.children="children";if(a.children){this.children=a.children}this.selectCallBack=null;if(a.selectCallBack){this.selectCallBack=a.selectCallBack}this.treeType=1;if(a.treeType){this.treeType=a.treeType}this.url=null;if(a.url){this.url=a.url}this.contentType=null;if(a.contentType){this.contentType=a.contentType}this.data=null;if(a.data){this.data=a.data}if(a.wrapDataFn){this.wrapDataFn=a.wrapDataFn}this.ajaxParamCallBackFn=null;if(a.ajaxParamCallBackFn){this.ajaxParamCallBackFn=a.ajaxParamCallBackFn}this.onInitedCallBackFn=null;if(a.onInitedCallBackFn){this.onInitedCallBackFn=a.onInitedCallBackFn}this.isInitedFlag=false;this.selectNodeId=null;this.checkbox=false;if(a.checkbox){this.checkbox=a.checkbox}},render:function(e,f){var b=this;if(this.isInitedFlag){if(e.length==0){this.element.find("."+f).parent().find("span").hide();return}else{var c=null;var d=null;c=this.traversalTree(e,b.getNodeById(f));c.show();d=this.element.find("."+f).parent();d.addClass("parent");d.toggleClass("open");d.append(c)}return}else{var c=null;var a=$('<div class="treeM">');c=this.traversalTree(e);c.show();a.append(c);this.element.append(a);this.isInitedFlag=true;if(this.onInitedCallBackFn){this.onInitedCallBackFn(this)}return}},bindEvent:function(){var a=this;a.element.on("click","a",function(){var b=$(this).data("item");a.element.find("a").removeClass("active");$(this).addClass("active");a.selectNodeId=b.id;a.selectCallBack(b);if(a.treeType==2){if($(this).parent().hasClass("parent")){if(!$(this).parent().hasClass("open")){$(this).parent().toggleClass("open");$(this).parent().children("ul").toggle()}return}else{if(!b.clickFlag){a.ajaxHandler(b);b.clickFlag=1;return}}}else{if($(this).parent().hasClass("parent")){if(!$(this).parent().hasClass("open")){$(this).parent().toggleClass("open");$(this).parent().children("ul").toggle()}return}}});a.element.on("click","span",function(c){var b=$(this).parent().children("a").data("item");if(a.treeType==2){if($(this).parent().hasClass("parent")){$(this).parent().toggleClass("open");$(this).parent().children("ul").toggle();return}else{if(!b.clickFlag){a.ajaxHandler(b);b.clickFlag=1;return}}}else{if($(this).parent().hasClass("parent")){$(this).parent().toggleClass("open");$(this).parent().children("ul").toggle();return}}});if(a.checkbox){a.element.on("click","i",function(b){$(this).toggleClass("active")})}},ajaxHandler:function(d){var a=this;var b={method:"POST",url:this.url,dataType:"json"};if(a.contentType){b.contentType=a.contentType}if(d){var c={};for(var f in d){if(typeof d[f]!="object"){c[f]=d[f]}}b.data=c}if(a.ajaxParamCallBackFn){b.data=a.ajaxParamCallBackFn(b.data)}var e=Utils.myAjaxHandler(b);e.done(function(g){if(g!=null&&g.errorCode==SUCCESSCODE){var h=g.data;if(a.wrapDataFn){h=a.wrapDataFn(h)}a.render(h,d?d.id:false)}else{$.paError(g.errorMessage)}}).fail(function(g){}).always(function(){})},traversalTree:function(b,e){var j=this;var d=$("<ul>");for(var c=0,f=b.length;c<f;c++){var h=b[c];h.parentNode=null;if(e){h.parentNode=e}var g=$('<li class="tree-item">');var a=$('<a class="tree-name">');if(j.checkbox){a.addClass("checkbox");g.append($('<i class="tree-checkbox">'))}a.addClass(h.id);a.attr("title",h[this["name"]]);a.html(h[this["name"]]);$(a).data("item",h);if(this.treeType==2){g.append($('<span class="tree-mark">'));g.append(a);if(h[this["children"]]){g.addClass("parent");g.append(this.traversalTree(h[this["children"]],h))}}else{if(h[this["children"]]){g.append($('<span class="tree-mark">'));g.append(a);g.addClass("parent");g.append(this.traversalTree(h[this["children"]],h))}else{g.append(a)}}d.append(g)}d.css("display","none");return d},getSelectedNode:function(){var a=this.element.find("."+this.selectNodeId).data("item");return a},expandAll:function(){var a=this.element;a.find("li").addClass("open");a.find("ul").show()},selectNode:function(a){this.element.find("."+this.selectNodeId).trigger("click")},selectFirstRootNode:function(){this.element.find("a:first").trigger("click")},getNodeById:function(a){return this.element.find("."+a).data("item")},selectAllCheckbox:function(){this.element.find("i").addClass("active")},selectNoneCheckbox:function(){this.element.find("i").removeClass("active")},selectAllChildsCheckbox:function(){this.element.find("."+this.selectNodeId).parent().find("i").addClass("active")},selectNoneChildsCheckbox:function(){this.element.find("."+this.selectNodeId).parent().find("i").removeClass("active")},getAllSelectCheckboxs:function(){var b=[];var a=this.element.find("i.active");a.each(function(c){b.push($(this).parent().find("a").data("item"))});return b},selectCheckboxById:function(a){this.element.find("a."+a).parent().find("i").addClass("active")},selectOneCheckboxById:function(a){this.element.find("a."+a).parent().children("i").addClass("active")}};