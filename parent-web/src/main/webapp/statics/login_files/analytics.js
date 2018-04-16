function buttonCollect(buttonName){
	var url = "https://image.pinganwj.com/analytics/analytics.js?v=1&type=2&content="+ buttonName + "&date="+new Date().getTime() + parseInt(Math.random() * 1000000);
	$.ajax({
 		type : 'post',
 		url : url,
 		dataType : 'json',
 		error : function(request) {
 			
 		},
 		success : function(result) {
 		}
 	});
}
