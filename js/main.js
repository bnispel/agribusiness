$(document).ready(function() {
	var s = $(".navigation_wrapper");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top & windowpos <=1000) {
			s.addClass("stick");
		} else {
			s.removeClass("stick");	
		}
	});
	$(".mobile_menu_button").click(function(){
	    $(".navigation_wrapper").toggleClass("mobile_open");
	});
});