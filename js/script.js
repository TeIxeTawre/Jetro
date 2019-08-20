let container = $('main .container');

let line = $('.line');
let recent = $('.recent');

let widthContainer = container.width();

let wW = $(window).width();
let wL = (wW - widthContainer)/2-10;

let winBool = false;



jQuery(document).ready(function(e) {

	if (wL < 0)
		wL = 0;

	line.css('width', wL+'px');


	$(window).resize(function() {
		widthContainer = container.width();
	    wW = $(window).width();
		wL = (wW - widthContainer)/2-10;
		line.css('width', wL+'px');
		if ( $('.humb').is(":visible") == false) {
			$('body').removeClass('active-menu');
			$('nav ul').css('opacity', '1');
			winBool = false;
		}
		if (winBool == false && $('.humb').is(":visible") == true) {
			$('nav ul').css('opacity', '0');
			winBool = true;
		}
	});

	$('#header-carousel').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		items: 1,
		autoplay: true,
		autoplayTimeout: 12000,
		smartSpeed: 450,
		autoplayHoverPause: true,
		margin: 30
	});

	$('.humb').on('click', function(event) {
		event.preventDefault();
		$('body').toggleClass('active-menu');
		$('nav ul').css('opacity', '1');
		if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))) {
		    $('body').toggleClass('active-scroll');
		}
	});

	recent.find('.row').css('display', 'none');
	recent.find('.all').css('display', 'flex');

	$('.filter a').on('click', function(event) {
		event.preventDefault();
		recent.find('.filter-active').removeClass('filter-active');
		$(this).addClass('filter-active');
		let index = $('.filter-active').parent().index();
		recent.find('.row').css('display', 'none');
		recent.find('.row').eq(index).css('display', 'flex');
	});

});