$(document).ready(function() {
	var s = $(".navigation_wrapper");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top & windowpos <=1000) {
			s.removeClass("stick");	
		} else {
			s.addClass("stick");
		}
	});
	$(".mobile_menu_button").on('click touch', function () {
	    $(".navigation_wrapper").toggleClass("mobile_open");
	});
});