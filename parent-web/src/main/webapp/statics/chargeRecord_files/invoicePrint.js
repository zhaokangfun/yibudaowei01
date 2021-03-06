var InvoicePrintModel=Class.create({convertCurrency:function(g){var w=new Array("零","壹","贰","叁","肆","伍","陆","柒","捌","玖");var f=new Array("","拾","佰","仟");var x=new Array("","万","亿","兆");var e=new Array("角","分","毫","厘");var d="整";var a="元";var t=1000000000000000;var v;var b;var s="";var l;if(g==""){return""}g=parseFloat(g);if(g>=t){return""}if(g==0){s=w[0]+a+d;return s}g=g.toString();if(g.indexOf(".")==-1){v=g;b=""}else{l=g.split(".");v=l[0];b=l[1].substr(0,4)}if(parseInt(v,10)>0){var h=0;var y=v.length;for(var u=0;u<y;u++){var o=v.substr(u,1);var k=y-u-1;var j=k/4;var r=k%4;if(o=="0"){h++}else{if(h>0){s+=w[0]}h=0;s+=w[parseInt(o)]+f[r]}if(r==0&&h<4){s+=x[j]}}s+=a}if(b!=""){var c=b.length;for(var u=0;u<c;u++){var o=b.substr(u,1);if(o!="0"){s+=w[Number(o)]+e[u]}}}if(s==""){s+=w[0]+a+d}else{if(b==""){s+=d}}return s},printInvoice:function(c){var a="";var b=session_cache.getCache("recordPayData");if(c.pricingCharge){c.chargeDate=c.pricingCharge.chargeDate;if(c.pricingCharge.payKind==2){a=b.T21.filter(function(d){return d.dictItemCode==c.pricingCharge.payType})[0].dictItemName;a+=","+b.T21.filter(function(d){return d.dictItemCode==c.pricingCharge.payType2nd})[0].dictItemName;c.payType=a}else{a=b.T21.filter(function(d){return d.dictItemCode==c.pricingCharge.payType})[0].dictItemName;c.payType=a}}if(c.invoiceTag=="INVOICE_GD"){InvoicePrintModel.printInvoiceGD(c)}else{if(c.invoiceTag=="INVOICE_JS"){InvoicePrintModel.printInvoiceJS(c)}else{if(c.invoiceTag=="INVOICE_SX"){InvoicePrintModel.printInvoiceSX(c)}else{if(c.invoiceTag=="INVOICE_HB"){InvoicePrintModel.printInvoiceHB(c)}else{if(c.invoiceTag=="INVOICE_SC_TAG1"){InvoicePrintModel.printInvoiceSC_1(c)}else{if(c.invoiceTag=="INVOICE_SC_TAG2"){InvoicePrintModel.printInvoiceSC_2(c)}else{if(c.invoiceTag=="INVOICE_AH"){InvoicePrintModel.printInvoiceAH(c)}}}}}}}},printInvoiceGD:function(c){var a={url:ContextClinc_Server+"charge/printInvoice",dataType:"json",type:"POST",data:JSON.stringify(c),contentType:"application/json;charset=utf-8",async:false,showMask:true};var b=Utils.myAjaxHandler(a);b.done(function(k){if(k!=null&&k.errorCode==SUCCESSCODE){var j=null;var d=null;for(var e=0;e<k.data.length;e++){if(k.data[e].invoice&&k.data[e].items){j=k.data[e].invoice;d=k.data[e].items}}LODOP=getLodop();LODOP.PRINT_INITA(1,1,750,395,"");LODOP.SET_PRINT_PAGESIZE(1,"185mm","100mm","");LODOP.ADD_PRINT_TEXT(31,112,100,20,j.acographySerialNo);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(79,129,120,20,j.patientName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(77,265,20,20,"√");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");if(j.patientGender==1){LODOP.ADD_PRINT_TEXT(103,116,20,20,"√");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}else{LODOP.ADD_PRINT_TEXT(103,146,20,20,"√");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}var f=new Date();LODOP.ADD_PRINT_TEXT(49,498,45,20,f.getFullYear());LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",3);LODOP.ADD_PRINT_TEXT(49,575,25,20,f.getMonth()+1);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(49,624,25,20,f.getDate());LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(103,449,80,20,fmoney(j.totalMoney));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");for(var e in d){var g=d[e];LODOP.ADD_PRINT_TEXT(201-(2-((g.orderNum-1)%3))*24,38+(parseInt((g.orderNum-1)/3))*148,65,20,g.itemName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",2);LODOP.ADD_PRINT_TEXT(201-(2-((g.orderNum-1)%3))*24,121+(parseInt((g.orderNum-1)/3))*135,70,20,fmoney(g.itemMoney));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",2)}var h=accMul(parseFloat(j.totalMoney),100);for(var e=0;e<8;e++){LODOP.ADD_PRINT_TEXT(250,460-e*38,25,20,charge_model.chineseNumber_split(h,e));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",3)}LODOP.ADD_PRINT_TEXT(250,523,130,20,fmoney(j.totalMoney));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",2);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(325,441,100,20,j.employeeName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(6,610,90,20,j.invoiceNoPre+j.invoiceNo);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");if(c.invoicePrint_sup){LODOP.ADD_PRINT_TEXT(6,36,35,20,"补打");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",8)}operateType()}})},printInvoiceJS:function(c){var a={url:ContextClinc_Server+"charge/printInvoice",dataType:"json",type:"POST",data:JSON.stringify(c),contentType:"application/json;charset=utf-8",async:false,showMask:true};var b=Utils.myAjaxHandler(a);b.done(function(g){if(g!=null&&g.errorCode==SUCCESSCODE){var l=null;var n=null;var f=[];for(var k=0;k<g.data.length;k++){if(g.data[k].invoice&&g.data[k].items){l=g.data[k].invoice;n=g.data[k].items}else{f.push(g.data[k])}}LODOP=getLodop();LODOP.SET_PRINT_STYLEA(0,"FontName","宋体");LODOP.SET_PRINT_STYLEA(0,"FontSize",11);LODOP.PRINT_INITA(1,1,750,395,"");LODOP.SET_PRINT_PAGESIZE(1,"235mm","125mm","");LODOP.ADD_PRINT_TEXT("18mm","8mm",100,20,c.chargeNo);LODOP.ADD_PRINT_TEXT("18mm","60mm",200,20,userInfo_aclc.clinicName);LODOP.ADD_PRINT_TEXT("23mm","3mm",100,40,l.patientName);var e="男";if(l.patientGender=="2"){e="女"}if(l.patientGender=="3"){e="保密"}LODOP.ADD_PRINT_TEXT("23mm","32mm",50,20,e);LODOP.ADD_PRINT_TEXT("23mm","53mm",100,20,c.paymentTypeName);LODOP.ADD_PRINT_TEXT("31mm","4mm",100,20,"名称");LODOP.ADD_PRINT_TEXT("31mm","53mm",100,20,"规格");LODOP.ADD_PRINT_TEXT("31mm","105mm",100,20,"数量");LODOP.ADD_PRINT_TEXT("31mm","120mm",100,20,"单价");LODOP.ADD_PRINT_TEXT("31mm","135mm",100,20,"金额");var d=30+3;for(var m in f){d=d+4;if(d>90){break}LODOP.ADD_PRINT_TEXT(d+"mm","4mm",200,20,f[m].itemName);LODOP.ADD_PRINT_TEXT(d+"mm","53mm",180,20,f[m].specification);LODOP.ADD_PRINT_TEXT(d+"mm","105mm",100,20,f[m].amount);LODOP.ADD_PRINT_TEXT(d+"mm","120mm",100,20,f[m].price);LODOP.ADD_PRINT_TEXT(d+"mm","135mm",100,20,f[m].money)}var h=InvoicePrintModel.convertCurrency(l.totalMoney);LODOP.ADD_PRINT_TEXT("101mm","11mm",300,20,InvoicePrintModel.convertCurrency(l.totalMoney));LODOP.ADD_PRINT_TEXT("101mm","103mm",100,20,l.totalMoney);LODOP.ADD_PRINT_TEXT("113mm","73mm",100,20,l.employeeName);LODOP.ADD_PRINT_TEXT("113mm","98mm",45,20,c.chargeDate.substr(0,4));LODOP.SET_PRINT_STYLEA(0,"Alignment",3);LODOP.ADD_PRINT_TEXT("113mm","114mm",25,20,c.chargeDate.substr(5,2));LODOP.ADD_PRINT_TEXT("113mm","124mm",25,20,c.chargeDate.substr(8,2));if(c.invoicePrint_sup){LODOP.ADD_PRINT_TEXT(10,36,35,20,"补打");LODOP.SET_PRINT_STYLEA(0,"FontSize",8)}var j=14+4;for(var o in n){LODOP.ADD_PRINT_TEXT(j+"mm","182mm",100,20,l.acographySerialNo);j+=3.8;LODOP.ADD_PRINT_TEXT(j+"mm","180mm",100,20,l.patientName);j+=3.8;LODOP.ADD_PRINT_TEXT(j+"mm","180mm",100,20,n[o].itemName);j+=3.8;LODOP.ADD_PRINT_TEXT(j+"mm","180mm",100,20,n[o].itemMoney);j+=3.8;LODOP.ADD_PRINT_TEXT(j+"mm","180mm",150,20,c.chargeDate);j+=3.8;LODOP.ADD_PRINT_TEXT(j+"mm","182mm",100,20,l.employeeName);j+=3.8;LODOP.ADD_PRINT_TEXT(j+"mm","182mm",100,20,c.chargeNo);j+=13.9}if(n.length==1){LODOP.ADD_PRINT_TEXT("62mm","182mm",100,20,"作废");LODOP.ADD_PRINT_TEXT("102mm","182mm",100,20,"作废")}else{if(n.length==2){LODOP.ADD_PRINT_TEXT("102mm","182mm",100,20,"作废")}}operateType()}})},printInvoiceSX:function(c){var a={url:ContextClinc_Server+"charge/printInvoice",dataType:"json",type:"POST",data:JSON.stringify(c),contentType:"application/json;charset=utf-8",async:false,showMask:true};var b=Utils.myAjaxHandler(a);b.done(function(f){if(f!=null&&f.errorCode==SUCCESSCODE){var e=null;var j=null;var m=[];for(var h=0;h<f.data.length;h++){if(f.data[h].invoice&&f.data[h].items){e=f.data[h].invoice;j=f.data[h].items}else{m.push(f.data[h])}}LODOP=getLodop();LODOP.PRINT_INITA(1,1,750,395,"");LODOP.SET_PRINT_PAGESIZE(1,"120mm","200mm","");LODOP.ADD_PRINT_TEXT("19mm","15mm",100,20,c.chargeNo);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("24mm","14mm",120,20,e.patientName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("24mm","42mm",20,20,(e.patientGender=="1")?"男":"女");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("24mm","65mm",120,20,c.paymentTypeName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");var d=40;for(var k in m){d=d+4;if(d>106){break}var o=m[k].itemName+"["+(m[k].specification==null?"":m[k].specification)+"]*"+m[k].amount;LODOP.ADD_PRINT_TEXT(d+"mm","9mm",250,20,o);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(d+"mm","75mm",100,20,m[k].money);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");if(o.length>23){d=d+4}}LODOP.ADD_PRINT_TEXT("111mm","9mm",250,20,"总计药品【"+m.length+"】条，共计："+e.totalMoney+"元");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");var g=InvoicePrintModel.convertCurrency(e.totalMoney);LODOP.ADD_PRINT_TEXT("118mm","23mm",300,20,InvoicePrintModel.convertCurrency(e.totalMoney));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("118mm","62mm",100,20,e.totalMoney);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("118mm","85mm",80,20,c.payType);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("128mm","25mm",100,20,e.totalMoney);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("134mm","20mm",150,20,userInfo_aclc.clinicName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("134mm","64mm",45,20,c.chargeDate.substr(0,4));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",3);LODOP.ADD_PRINT_TEXT("134mm","82mm",25,20,c.chargeDate.substr(5,2));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("134mm","91mm",25,20,c.chargeDate.substr(8,2));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("150mm","15mm",100,20,c.chargeDate);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");var l=157;for(var n in m){l=l+4;if(l>180){break}LODOP.ADD_PRINT_TEXT(l+"mm","9mm",250,20,m[n].itemName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(l+"mm","75mm",100,20,m[n].price+"*"+m[n].amount);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");if(m[n].itemName.length>23){l=l+4}}LODOP.ADD_PRINT_TEXT("183mm","9mm",250,20,"总计药品【"+m.length+"】条，共计："+e.totalMoney+"元");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("189mm","14mm",150,20,c.departmentName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");if(c.invoicePrint_sup){LODOP.ADD_PRINT_TEXT(6,36,35,20,"补打");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",8)}operateType()}})},printInvoiceHB:function(c){var a={url:ContextClinc_Server+"charge/printInvoice",dataType:"json",type:"POST",data:JSON.stringify(c),contentType:"application/json;charset=utf-8",async:false,showMask:true};var b=Utils.myAjaxHandler(a);b.done(function(j){if(j!=null&&j.errorCode==SUCCESSCODE){var h=null;var d=null;for(var e=0;e<j.data.length;e++){if(j.data[e].invoice&&j.data[e].items){h=j.data[e].invoice;d=j.data[e].items}}LODOP=getLodop();LODOP.PRINT_INITA(1,1,750,395,"");LODOP.SET_PRINT_PAGESIZE(1,"135mm","100mm","");LODOP.ADD_PRINT_TEXT("23mm","22mm",160,20,c.chargeDate);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("30mm","18mm",160,20,h.patientName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("30mm","77mm",160,20,c.departmentName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");for(var e in d){var f=d[e];LODOP.ADD_PRINT_TEXT(36+(e*5)+"mm","18mm",150,20,f.itemName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(36+(e*5)+"mm","56mm",150,20,fmoney(f.itemMoney));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}var g=InvoicePrintModel.convertCurrency(h.totalMoney);LODOP.ADD_PRINT_TEXT("85mm","33mm",260,20,g+"(￥"+h.totalMoney+")");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("92mm","27mm",160,20,h.employeeName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");if(c.invoicePrint_sup){LODOP.ADD_PRINT_TEXT(10,36,35,20,"补打");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",8)}operateType()}})},printInvoiceSC_1:function(c){var a={url:ContextClinc_Server+"charge/printInvoice",dataType:"json",type:"POST",data:JSON.stringify(c),contentType:"application/json;charset=utf-8",async:false,showMask:true};var b=Utils.myAjaxHandler(a);b.done(function(k){if(k!=null&&k.errorCode==SUCCESSCODE){var j=null;var d=null;for(var e=0;e<k.data.length;e++){if(k.data[e].invoice&&k.data[e].items){j=k.data[e].invoice;d=k.data[e].items}}LODOP=getLodop();LODOP.PRINT_INITA(1,1,750,395,"");LODOP.SET_PRINT_PAGESIZE(1,"82mm","101mm","");LODOP.ADD_PRINT_TEXT("2mm","22mm",160,20,"收据号:"+c.chargeNo);if(c.departmentName!=null&&c.departmentName!=""){LODOP.ADD_PRINT_TEXT("18mm","12mm",160,20,"执行科室："+c.departmentName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",2)}LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("38mm","26mm",120,20,j.patientName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("62mm","44mm",120,20,fmoney(j.totalMoney)+" "+c.payType);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("71mm","44mm",120,20,fmoney(j.totalMoney));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");var h=InvoicePrintModel.convertCurrency(j.totalMoney);LODOP.ADD_PRINT_TEXT("75mm","28mm",180,20,h);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");var f=new Date();LODOP.ADD_PRINT_TEXT("80mm","41mm",45,20,f.getFullYear());LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",3);LODOP.ADD_PRINT_TEXT("80mm","57mm",25,20,f.getMonth()+1);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("80mm","62mm",25,20,f.getDate());LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("80mm","28mm",65,20,j.employeeName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",1);LODOP.ADD_PRINT_TEXT("84mm","25mm",180,20,j.clinicName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");for(var e in d){var g=d[e];LODOP.ADD_PRINT_TEXT(47+(e*5)+"mm","18mm",65,20,g.itemName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",2);LODOP.ADD_PRINT_TEXT(47+(e*5)+"mm","46mm",70,20,fmoney(g.itemMoney));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",2)}if(c.invoicePrint_sup){LODOP.ADD_PRINT_TEXT("2","10mm",35,20,"补打");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",8)}operateType()}})},printInvoiceSC_2:function(c){var a={url:ContextClinc_Server+"charge/printInvoice",dataType:"json",type:"POST",data:JSON.stringify(c),contentType:"application/json;charset=utf-8",async:false,showMask:true};var b=Utils.myAjaxHandler(a);b.done(function(k){if(k!=null&&k.errorCode==SUCCESSCODE){var j=null;var d=null;for(var e=0;e<k.data.length;e++){if(k.data[e].invoice&&k.data[e].items){j=k.data[e].invoice;d=k.data[e].items}}LODOP=getLodop();LODOP.PRINT_INITA(1,1,750,395,"");LODOP.SET_PRINT_PAGESIZE(1,"85mm","101mm","");LODOP.ADD_PRINT_TEXT("15mm","12mm","40mm","5mm",c.invoiceNoPre+c.invoiceNo);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",8);LODOP.ADD_PRINT_TEXT("25.5mm","20mm","40mm","5mm",j.patientName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",8);for(var e in d){var g=d[e];LODOP.ADD_PRINT_TEXT(41+(e*7)+"mm","11mm","32mm","6mm",g.itemName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",1);LODOP.SET_PRINT_STYLEA(0,"FontSize",8);LODOP.ADD_PRINT_TEXT(41+(e*7)+"mm","43mm","30mm","6mm",fmoney(g.itemMoney));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"Alignment",1);LODOP.SET_PRINT_STYLEA(0,"FontSize",8)}LODOP.ADD_PRINT_TEXT("62mm","43mm","30mm","6mm",fmoney(j.totalMoney)+" "+c.payType);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",8);LODOP.ADD_PRINT_TEXT("77mm","43mm","30mm","6mm",fmoney(j.totalMoney));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",8);var h=InvoicePrintModel.convertCurrency(j.totalMoney);LODOP.ADD_PRINT_TEXT("84mm","23mm","50mm","6mm",h);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",8);LODOP.ADD_PRINT_TEXT("89mmmm","25mm","17.99mm","4mm",j.employeeName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",8);var f=new Date();LODOP.ADD_PRINT_TEXT("89mm","39mm","10mm","4mm",f.getFullYear());LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",8);LODOP.ADD_PRINT_TEXT("89mm","50mm","7mm","4mm",f.getMonth()+1);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",8);LODOP.ADD_PRINT_TEXT("89mm","60mm","7mm","4mm",f.getDate());LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",8);LODOP.ADD_PRINT_TEXT("91mm","25mm","50mm","4mm",j.clinicName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",8);if(c.invoicePrint_sup){LODOP.ADD_PRINT_TEXT("4","10mm",35,20,"补打");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",8)}operateType()}})},printInvoiceAH:function(c){var a={url:ContextClinc_Server+"charge/printInvoice",dataType:"json",type:"POST",data:JSON.stringify(c),contentType:"application/json;charset=utf-8",async:false,showMask:true};var b=Utils.myAjaxHandler(a);b.done(function(d){if(d!=null&&d.errorCode==SUCCESSCODE){var f=null;var k=null;for(var h=0;h<d.data.length;h++){if(d.data[h].invoice&&d.data[h].items){f=d.data[h].invoice;k=d.data[h].items}}LODOP=getLodop();LODOP.PRINT_INITA(1,1,"241mm","93mm","");LODOP.SET_PRINT_PAGESIZE(1,"241mm","93mm","");LODOP.SET_PRINT_MODE("TRYLINKPRINTER_NOALERT",true);LODOP.ADD_PRINT_TEXT("11.5mm","30mm","50mm","4.5mm",f.clinicName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("16.5mm","30mm","25mm","4.5mm",f.patientName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");var g=new Date();var m=g.getFullYear()+"/"+(g.getMonth()+1)+"/"+g.getDate();LODOP.ADD_PRINT_TEXT("22.5mm","93mm","20mm","4.5mm",m);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");for(var h in k){var l=k[h];var e=0;var j=0;if(l.itemName=="西药费"){LODOP.ADD_PRINT_TEXT("35mm","39mm","13mm","4.5mm",fmoney(l.itemMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}else{if(l.itemName=="手术费"){LODOP.ADD_PRINT_TEXT("35mm","83mm","13mm","4.5mm",fmoney(l.itemMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}else{if(l.itemName=="中成药费"){LODOP.ADD_PRINT_TEXT("40mm","39mm","13mm","4.5mm",fmoney(l.itemMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}else{if(l.itemName=="化验费"){LODOP.ADD_PRINT_TEXT("40.mm","83mm","13mm","4.5mm",fmoney(l.itemMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}else{if(l.itemName=="中草药费"||l.itemName=="中草药"||l.itemName=="草药费"){e=e+l.itemMoney;LODOP.ADD_PRINT_TEXT("45.mm","39mm","13mm","4.5mm",e>0?fmoney(e.toFixed(2)):"");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}else{if(l.itemName=="输血费"){LODOP.ADD_PRINT_TEXT("45mm","83mm","13mm","4.5mm",fmoney(l.itemMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}else{if(l.itemName=="检查费"){LODOP.ADD_PRINT_TEXT("50.mm","39mm","13mm","4.5mm",fmoney(l.itemMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}else{if(l.itemName=="治疗费"){LODOP.ADD_PRINT_TEXT("55.mm","39mm","13mm","4.5mm",fmoney(l.itemMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}else{if(l.itemName=="输氧费"){LODOP.ADD_PRINT_TEXT("50.mm","83mm","13mm","4.5mm",fmoney(l.itemMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}else{if(l.itemName=="材料费"){LODOP.ADD_PRINT_TEXT("55.mm","83mm","13mm","4.5mm",fmoney(l.itemMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}else{if(l.itemName=="放射费"){LODOP.ADD_PRINT_TEXT("59.5mm","39mm","13mm","4.5mm",fmoney(l.itemMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}else{j=j+l.itemMoney;LODOP.ADD_PRINT_TEXT("59.5mm","83mm","13mm","4.5mm",j>0?fmoney(j.toFixed(2)):"");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}}}}}}}}}}}LODOP.ADD_PRINT_TEXT(34+(h*4.5)+"mm","119mm","30mm","4.5mm",l.itemName+":"+fmoney(l.itemMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(34+(h*4.5)+"mm","156mm","30mm","4.5mm",l.itemName+":"+fmoney(l.itemMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT(34+(h*4.5)+"mm","194mm","30mm","4.5mm",l.itemName+":"+fmoney(l.itemMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑")}LODOP.ADD_PRINT_TEXT("65.5mm","54mm","20mm","4.5mm",fmoney(f.totalMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("69mm","59mm","45mm","4.5mm",InvoicePrintModel.convertCurrency(f.totalMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("83mm","35mm","30mm","4.5mm",f.employeeName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("83mm","85mm","30mm","4.5mm",c.chargeNo);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("22mm","132mm","20mm","4.5mm",f.patientName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("22mm","167mm","20mm","4.5mm",f.patientName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("22mm","204mm","20mm","4.5mm",f.patientName);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("67mm","133mm","20mm","4.5mm",fmoney(f.totalMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("67mm","167mm","20mm","4.5mm",fmoney(f.totalMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("67mm","204mm","20mm","4.5mm",fmoney(f.totalMoney.toFixed(2)));LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("77.5mm","133mm","20mm","4.5mm",m);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("77.5mm","167mm","20mm","4.5mm",m);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.ADD_PRINT_TEXT("77.5mm","204mm","20mm","4.5mm",m);LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");if(c.invoicePrint_sup){LODOP.ADD_PRINT_TEXT("5mm","15mm",35,20,"补打");LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");LODOP.SET_PRINT_STYLEA(0,"FontSize",8)}operateType()}})}});