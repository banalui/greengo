$(document).ready(function(){

	/*$("input").blur(function(){

		if($(this).val()){
			$(this).addClass("used");
		}
		else{
			$(this).removeClass("used");
		}
	});
	$('.dropdown-toggle').dropdown()*/
});

function myFunction(){
	console.log("Clicked Search");
	$(".upperpartheading4 label").append('<div class="searchwindowdiv">SearchWindow</div>');
	$(".searchwindowdiv").height(150);
	$(".searchwindowdiv").width(200);
	$(".searchwindowdiv").css("background-color", "orange");
	/*$(".searchwindowdiv").css("position", "absolute");
	$(".searchwindowdiv").css("top", "100px");
	$(".searchwindowdiv").css("right", "350px");*/
}

