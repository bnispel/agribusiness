$(document).ready(function(){	
	var list = document.querySelectorAll("div[data-image-src]");
	for (var i = 0; i < list.length; i++) {
	  var url = list[i].getAttribute('data-image-src');
	  list[i].style.backgroundImage="url('" + url + "')";
	}
	var list = document.querySelectorAll("span[data-count]");
	for (var i = 0; i < list.length; i++) {
	  var num = list[i].getAttribute('data-count');
	  list[i].textContent = num;
	}
});