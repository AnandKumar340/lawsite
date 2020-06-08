(function($) {
"use strict";
	
	// Preloader
	function handlePreloader() { if($('.preloader').length){ $('.preloader').delay(200).fadeOut(500);	}	}
	// Header Style & Scroll to Top
	function headerStyle() {
	if($('.main-header').length){ var windowpos = $(window).scrollTop(); var siteHeader = $('.main-header'); var scrollLink = $('.scroll-to-top');
	if (windowpos >= 1) { siteHeader.addClass('fixed-header'); scrollLink.fadeIn(300); } else { siteHeader.removeClass('fixed-header');
	scrollLink.fadeOut(300); } } } headerStyle();
	// Dropdown Toggle
	if($('.main-header li.dropdown ul').length){ $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
	//Dropdown Button
	$('.main-header li.dropdown .dropdown-btn').on('click', function() {	$(this).prev('ul').slideToggle(500);	});
	//Disable dropdown parent link
	$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) { e.preventDefault();	});	}
	//Hidden Sidebar
	if($('.hidden-bar').length) { var hiddenBar = $('.hidden-bar');	var hiddenBarOpener = $('.nav-btn');	var hiddenBarCloser = $('.hidden-bar-closer');	$('.hidden-bar-wrapper').mCustomScrollbar();
	//Show Sidebar
	hiddenBarOpener.on('click', function () {	hiddenBar.addClass('visible-sidebar');	});
	//Hide Sidebar
	hiddenBarCloser.on('click', function () {	hiddenBar.removeClass('visible-sidebar');	}); }
	//Fixed Right Top Consultation Form Toggle
	if($('.main-header .header-upper .outer-box .nav-toggler').length){
	//Show Form
	$('.main-header .header-upper .outer-box .nav-toggler').on('click', function(e) { e.preventDefault();	$('body').addClass('background-visible');	});
	//Hide Form
	$('.form-back-drop').on('click', function(e) {	e.preventDefault();	$('body').removeClass('background-visible'); });
	$('.form-back-drop').on('click', function(e) { $('.hidden-bar').removeClass("visible-sidebar");	});
	$('.hidden-bar .hidden-bar-closer').on('click', function(e) {	$('body').removeClass("background-visible"); }); }	
	//Main Slider Carousel
	if ($('.main-slider-carousel').length) {
	$('.main-slider-carousel').owlCarousel({ animateOut: 'fadeOut', animateIn: 'fadeIn', loop:true, margin:0, nav:true, autoHeight: true, autoplayHoverPause: true, smartSpeed: 500, autoplay: 6000,
	navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
	responsive:{ 0:{ items:1 },	600:{ items:1 }, 800:{ items:1 }, 1024:{ items:1 },	1200:{items:1} } }); }
	// Single Item Carousel
	if ($('.single-item-carousel').length) {
	$('.single-item-carousel').owlCarousel({ animateOut: 'fadeOut', animateIn: 'fadeIn', loop:true, margin:0, nav:true, autoHeight: true, autoplayHoverPause: true, smartSpeed: 500, autoplay: 6000,
	navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
	responsive:{0:{	items:1	},600:{items:1},800:{items:1},1024:{items:1	},1200:{items:1	}}	}); }
	// Portfolio Carousel
	if ($('.portfolio-carousel').length) {
	$('.portfolio-carousel').owlCarousel({
	loop:true,	margin:30,	nav:true, singleItem:true, smartSpeed: 700,	autoHeight: false, autoplay: true, autoplayTimeout:10000,
	navText: [ '<span class="flaticon-back-7"></span>', '<span class="flaticon-right-arrow"></span>' ],
	responsive:{
	0:{ items:1	},	600:{items:2},800:{	items:3	},1024:{items:3	},1280:{items:4	},1500:{items:5	}	}	});    }
	// Services Carousel
	if ($('.services-carousel').length) {
	$('.services-carousel').owlCarousel({
	animateOut: 'fadeOut',animateIn: 'fadeIn',loop:true,margin:6,nav:true,smartSpeed: 500,autoplay: 6000,navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
	responsive:{ 0:{items:1},400:{items:2},	600:{items:2},	800:{items:2},	1024:{items:2},	1200:{items:2}	}	});  }
	// Testimonial Carousel
	if ($('.testimonial-carousel').length) {
	$('.testimonial-carousel').owlCarousel({
	loop:true,	margin:30,	nav:true,singleItem:true,smartSpeed: 700,autoHeight: false,	autoplay: true,	autoplayTimeout:10000,
	navText: [ '<span class="flaticon-back-7"></span>', '<span class="flaticon-right-arrow"></span>' ],
	responsive:{ 0:{items:1	},	600:{items:1},800:{	items:2	},	1024:{items:2	},	1280:{	items:2	},	1500:{	items:2	}	}	});	}	
	// Fact Counter
	if($('.count-box').length){
	$('.count-box').appear(function(){
	var $t = $(this),	n = $t.find(".count-text").attr("data-stop"),	r = parseInt($t.find(".count-text").attr("data-speed"), 10);				
	if (!$t.hasClass("counted")) {	$t.addClass("counted");	$({ countNum: $t.find(".count-text").text()	}).animate({ countNum: n	}, { duration: r,	easing: "linear",
	step: function() {	$t.find(".count-text").text(Math.floor(this.countNum));	},	complete: function() {	$t.find(".count-text").text(this.countNum);	} });}	},{accY: 0});	}
	// Tabs Box
	if($('.tabs-box').length){
	$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
	e.preventDefault();	var target = $($(this).attr('data-tab'));if ($(target).is(':visible')){
	return false;}else{ target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
	$(this).addClass('active-btn'); target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
	target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
	$(target).fadeIn(300); 	$(target).addClass('active-tab');	}	});	}
	// Sortable Masonary with Filters
	function sortableMasonry() {
	if($('.sortable-masonry').length){	var winDow = $(window);	// Needed variables
	var $container=$('.sortable-masonry .items-container');	var $filter=$('.filter-btns');	
	$container.isotope({
	filter:'*',
	masonry: {	columnWidth : '.masonry-item.col-lg-3' },
	animationOptions:{	duration:500,	easing:'linear'	}	});
	// Isotope Filter 
	$filter.find('li').on('click', function(){
	var selector = $(this).attr('data-filter');
	try {	$container.isotope({ filter	: selector,	animationOptions: {	duration: 500,	easing	: 'linear',	queue	: false	}}); } catch(err) {	}return false;	});
	winDow.on('resize', function(){
	var selector = $filter.find('li.active').attr('data-filter');
	$container.isotope({ filter	: selector,	animationOptions: {	duration: 500,	easing	: 'linear',	queue	: false	}	});	});
	var filterItemA	= $('.filter-btns li'); filterItemA.on('click', function(){	var $this = $(this);if ( !$this.hasClass('active')) {filterItemA.removeClass('active');	$this.addClass('active');}	});	}	}
	sortableMasonry();
	//Custom Seclect Box
	if($('.custom-select-box').length){ $('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');	}
	//Gallery Filters
	if($('.filter-list').length){	$('.filter-list').mixItUp({});	}
	//LightBox / Fancybox
	if($('.lightbox-image').length) {	$('.lightbox-image').fancybox({		openEffect  : 'fade',	closeEffect : 'fade',	helpers : {	media : {}	}});	}
	//Contact Form Validation
	if($('#contact-form').length){
	$('#contact-form').validate({	rules: {	firstname: { required: true	},	email: {required: true,	email: true	},	message: {	required: true	}	}});}
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
	$(".scroll-to-target").on('click', function() {	var target = $(this).attr('data-target');
	// animate
	$('html, body').animate({	scrollTop: $(target).offset().top	}, 1500); });	}
	// Elements Animation
	if($('.wow').length){var wow = new WOW(  { boxClass:     'wow', animateClass: 'animated', 	offset: 0, mobile: true, live:true });	wow.init();	}
	// Scrollig Script
	$(window).on('scroll', function() {	headerStyle();	});
	// loading Script
	$(window).on('load', function() {	handlePreloader();	sortableMasonry();	});	

})(window.jQuery);