/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	const lenis = new Lenis({
		duration: .5,	
	})


	lenis.on('scroll', ScrollTrigger.update);
	gsap.ticker.add((time) => {
		lenis.raf(time * 1000)
	});
	gsap.ticker.lagSmoothing(0);

	/*
preloader
====start====
*/
	let preloader = document.querySelector("#preloader");
	
	if (preloader) {
		preloader.classList.add("preloaded");
		setTimeout(function () {
			
		}, 1000 ) ;
	}
	setTimeout(() => {
		var a = document.querySelectorAll(".btn-spin a");
		a.forEach(function (a) {
			a.addEventListener("mouseover", function () {
				var c, b, d;
				!a.classList.contains("animating") &&
				!a.classList.contains("mouseover") &&
				(a.classList.add("animating", "mouseover"),
					(c = a.innerText.split("")),
					setTimeout(function () {
						a.classList.remove("animating");
					}, (c.length + 1) * 50),
					(b = a.dataset.animation),
					b || (b = "vt-spin"),
					(a.innerText = ""),
					c.forEach(function (b) {
						b == " " && (b = "&nbsp;"), (a.innerHTML += '<span class="letter">' + b + "</span>");
					}),
					(d = a.querySelectorAll(".letter")),
					d.forEach(function (a, c) {
						setTimeout(function () {
							a.classList.add(b);
						}, 50 * c);
					}));
			}),
			a.addEventListener("mouseout", function () {
				a.classList.remove("mouseover");
			});
		});
	}, 100);
		/*
ScrollUp
====start====
*/
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	/*

	/*
Wow Animation
====Start====
*/
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	$(window).on("load", function () {
		Splitting();
	});
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	/*
Background Image
====start====
*/
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});
	/*
Header Area
====start====
*/
	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}

	TXTheaderSticky();
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="far fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.log-header-section').addClass('sticky-on')
		} else {
			jQuery('.log-header-section').removeClass('sticky-on')
		}
	});
	$(function(o){
		0 < o(".navSidebar-button").length &&
		o(".navSidebar-button").on("click", function (e) {
			e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
		}),
		0 < o(".close-side-widget").length &&
		o(".close-side-widget").on("click", function (e) {
			e.preventDefault(), o(".info-group").removeClass("isActive");
		}),
		o(".xs-sidebar-widget").on("click", function (e) {
			e.stopPropagation();
		})
	});
	// offcanvas-start
	$('.offcanvas_toggle').on('click', function() {
		$('.overlay, .offcanvas_box_active').addClass('active');
	});

	$('.overlay, .offcanvas_box_close').on('click', function() {
		$('.offcanvas_box_active').removeClass('active');
		$('.overlay').removeClass('active');
	});

	$(document).on('keydown', function(event) {
		if (event.key === 'Escape') {
			$('.offcanvas_box_active').removeClass('active');
			$('.overlay').removeClass('active');
		}
	});
	// search-popup-start
	$('.search_btn_toggle').on('click', function() {
		$('.overlay, .search_box_active').addClass('active');
	});

	$('.overlay, .search_box_close').on('click', function() {
		$('.search_box_active').removeClass('active');
		$('.overlay').removeClass('active');
	});
	$('.vartcal_toggle').on('click', function(){
		$('.vt-vertical-menu').toggleClass("active");
	});
	$(document).on('keydown', function(event) {
		if (event.key === 'Escape') {
			$('.search_box_active').removeClass('active');
			$('.overlay').removeClass('active');
		}
	});



/*
Faq Active
====start====
*/

	var selector = '.mt-testimonial-item';

	$(selector).on('click', function(){
		$(selector).removeClass('active');
		$(this).addClass('active');
	});
	$('.counter').counterUp({
		delay: 15,
		time: 1500,
	});

	if ($('.mt-sponsor-slide').length > 0 ) {
		var slider = new Swiper('.mt-sponsor-slide', {
			spaceBetween: 110,
			slidesPerView: 4,
			roundLengths: true,
			loop: true,
			loopAdditionalSlides: 30,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			speed: 400,
			breakpoints: {
				'1600': {
					slidesPerView: 4,
				},
				'1200': {
					slidesPerView: 4,
				},
				'992': {
					slidesPerView: 4,
				},
				'768': {
					slidesPerView: 4,
				},
				'576': {
					slidesPerView: 3,
					spaceBetween: 50,
				},
				'0': {
					slidesPerView: 2,
				},
			},
		});
	};

	if ($(".mt-portfolio-slider").length) {
		var swiper2 = new Swiper(".mt-portfolio-slider", {
			slidesPerView: 4,
			loop: true,
			spaceBetween: 48,
			speed: 1000,
			navigation: {
				nextEl: ".mt-port-next",
				prevEl: ".mt-port-prev",
			},
			breakpoints: {  
				'1400': {
					slidesPerView: 4,
				},
				'1300': {
					slidesPerView: 4,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 3,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'480': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	};
	jQuery('.mt-marquee-active').marquee({
		gap: 0,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	if ($(".progress-bar").length) {
		var $progress_bar = $('.progress-bar');
		$progress_bar.appear();
		$(document.body).on('appear', '.progress-bar', function() {
			var current_item = $(this);
			if (!current_item.hasClass('appeared')) {
				var percent = current_item.data('percent');
				current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
			}

		});
	};
	// services-1
	if($('.mt-service-slide').length) {
		let slider = new Swiper('.mt-service-slide', {
			loop: true,
			spaceBetween: 20,
			direction: 'vertical',
			speed: 500,
			autoplay: {
				delay: 5000,
			},

			navigation: {
				nextEl: ".mt-ser-next",
				prevEl: ".mt-ser-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					direction: 'horizontal',
				},
				576: {
					slidesPerView: 2,
					direction: 'horizontal',
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 3,
				},
				1600: {
					slidesPerView: 3,
				},
			},

		});
	}
	if ($(".mt-team-slider").length) {
		var swiper2 = new Swiper(".mt-team-slider", {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 0,
			speed: 1000,
			navigation: {
				nextEl: ".mt-team-next",
				prevEl: ".mt-team-prev",
			},
		});
	};
	if($('.mt-portfolio-slider-3').length) {
		let slider = new Swiper('.mt-portfolio-slider-3', {
			loop: true,
			spaceBetween: 32,
			speed: 500,
			autoplay: {
				delay: 5000,
			},

			navigation: {
				nextEl: ".mt-port-next",
				prevEl: ".mt-port-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 3,
				},
				1600: {
					slidesPerView: 3,
				},
			},

		});
	}
	// services-1
	if($('.mt-blog-slider').length) {
		let slider = new Swiper('.mt-blog-slider', {
			loop: true,
			spaceBetween: 20,
			speed: 500,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: ".blog-pagination",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 3,
				},
				1600: {
					slidesPerView: 3,
				},
			},

		});
	}
	var ltn__active_item = $('.feature-list-item')
	ltn__active_item.mouseover(function() {
		ltn__active_item.removeClass('active');
		$(this).addClass('active');
	});
	$(document).on('click', '.mt-faq-accordion .accordion-item', function(){
		$(this).addClass('faq_active').siblings().removeClass('faq_active')
	});
	jQuery(window).on('load', function(){
		if($('.title_text').length) {
			gsap.utils.toArray(".title_text").forEach(e => {
				let i = gsap.timeline({
					scrollTrigger: {
						trigger: e,
						start: "top 90%",
						duration: 2,
						end: "bottom 60%",
						scrub: !1,
						markers: !1,
						toggleActions: "play none none none"
					}
				}),
				t = new SplitText(e, {
					type: "lines"
				});
				gsap.set(e, {
					perspective: 400
				}), t.split({
					type: "lines"
				}), i.from(t.lines, {
					duration: 1,
					delay: .5,
					opacity: 0,
					rotationX: -80,
					force3D: !0,
					transformOrigin: "top center -50",
					stagger: .1
				})
			})
		}
		if($('.txaa-split-text-3').length) {
			var txasplit2 = $(".txaa-split-text-3");
			
			if(txasplit2.length == 0) ; gsap.registerPlugin(SplitText); txasplit2.each(function(index, el) {
				
				el.split = new SplitText(el, { 
					type: "lines",
					linesClass: "split-line"
				});
				
				if( $(el).hasClass('txaa-split-text-3-ani') ){
					gsap.set(el.split.lines, {
						color: "#3533ff",
						yPercent: -100,
					});
				}
				
				el.anim = gsap.to(el.split.lines, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
						end: "top 70%",
						markers: false,
						scrub: 1,
					},
					
					xPercent: 0,
					yPercent: 0,
					color: "inherit",
					opacity: 1,
					duration: .7,
					stagger: 0.2,
				});
				
			});
		}

		const active_card = gsap.utils.toArray('.txt_item_active');
		active_card.forEach(svg => {
			gsap.to(svg, {
				scrollTrigger: {
					trigger: svg,
					start: "top 100%",
					end: "bottom bottom",
					toggleClass: "active",
					duration: 3,
					delay:1,
					toggleActions: "play play play reverse",
					once: true,
				}
			});
		});
		let splitTextLines = gsap.utils.toArray(".mt-text p");
		splitTextLines.forEach(splitTextLine => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					duration: 2,
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
			gsap.set(splitTextLine, { perspective: 400 });
			itemSplitted.split({ type: "lines" })
			tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, top: 20, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
		});
		gsap.utils.toArray(' .appear_top').forEach((el, index) => {
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 2,
					start: "top 100%",
					end: "top 0%",
					toggleActions: "play none none reverse",
					markers: false
				}
			})

			tlcta
			.set(el, {transformOrigin: 'center center'})
			.from(el, { opacity: 1,  y: "+=250"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
		});
		gsap.utils.toArray(' .appear_left_1').forEach((el, index) => {
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 2,
					start: "top 100%",
					end: "top 0%",
					toggleActions: "play none none reverse",
					markers: false
				}
			})

			tlcta
			.set(el, {transformOrigin: 'center center'})
			.from(el, { opacity: 1,  x: "-=350"}, {opacity: 1, x: 0, duration: 1, immediateRender: false})
		});
		gsap.utils.toArray(' .appear_left_2').forEach((el, index) => {
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 2,
					start: "top 100%",
					end: "top 0%",
					toggleActions: "play none none reverse",
					markers: false
				}
			})

			tlcta
			.set(el, {transformOrigin: 'center center'})
			.from(el, { opacity: 1,  x: "-=250"}, {opacity: 1, x: 0, duration: 1, immediateRender: false})
		});
		gsap.utils.toArray(' .appear_right_1').forEach((el, index) => {
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 2,
					start: "top 100%",
					end: "top 0%",
					toggleActions: "play none none reverse",
					markers: false
				}
			})

			tlcta
			.set(el, {transformOrigin: 'center center'})
			.from(el, { opacity: 1,  x: "+=250"}, {opacity: 1, x: 0, duration: 1, immediateRender: false})
		});
		gsap.utils.toArray(' .appear_right_2').forEach((el, index) => {
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 2,
					start: "top 100%",
					end: "top 0%",
					toggleActions: "play none none reverse",
					markers: false
				}
			})

			tlcta
			.set(el, {transformOrigin: 'center center'})
			.from(el, { opacity: 1,  x: "+=350"}, {opacity: 1, x: 0, duration: 1, immediateRender: false})
		});
	});
})(jQuery);