//col reverse
$(function() {
	var $col1 = $('.page_id_15 .col-1').clone();
    $('.page_id_15 .col-1').remove();
    $col1.insertAfter('.col-2');
});

//bx slider
$(document).ready(function(){
	$('.bxslider').bxSlider({
		slideWidth: 734,
		minSlides: 5,
		maxSlides: 5,
		moveSlides: 3,
		slideMargin: 11,
		pager: false
	});
});
