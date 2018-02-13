;
$(document).ready(function () {
	$('.mobile-menu').click(function () {
		//$(this).closest('.navigation').toggleClass('active');
		$(this).closest('.navigation').find('ul.container').slideToggle();
	});
	// parallax block
	$('.parallax').parallax({imageSrc: 'images/slider.jpg'});
	// end parallax block	
});
