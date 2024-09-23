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
	jQuery(window).on('load', function(){
		jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
	});
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
Service Slider
====start====
*/
	var swiper2 = new Swiper(".vt-service-thumb", {
		spaceBetween: 0,
		slidesPerView: 6,
		freeMode: true,
		direction: 'vertical',
		mousewheel: true,
		speed: 1000,
		pagination: {
			el: ".vt-service-pagination",
			clickable: true,
		},

	});
	var swiper = new Swiper(".vt-service-slider", {
		slidesPerView: 1,
		spaceBetween: 10,
		mousewheel: {
			releaseOnEdges: true,
		},
		effect: 'fade',
		speed: 1000,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: swiper2,
		},
		pagination: {
			el: ".vt-service-pagination",
			clickable: true,
		},
		on: {
			slideChange: function () {
				if (this.isEnd) {
        // Customize behavior when reaching the end
					console.log('Reached the last slide');
				}
			},
			reachEnd: function () { 
      // Optionally handle specific actions when reaching the end
				console.log('End reached');
			},
			reachBeginning: function () {
      // Optionally handle specific actions when reaching the beginning
				console.log('Beginning reached');
			}
		}

	});
	
			/*
Service Slider 2
====start====
*/
	if ($('.vt-service-slider-2').length > 0 ) {
		var swiper2 = new Swiper(".vt-service-slider-2", {
			slidesPerView: 3,
			loop: true,
			spaceBetween: 32,
			roundLengths: true,
			speed: 1000,
			navigation: {
				nextEl: ".vt-ser-next",
				prevEl: ".vt-ser-prev",
			},
			breakpoints: {  
				'1400': {
					slidesPerView: 3,
				},
				'1300': {
					slidesPerView: 3,
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
				'767': {
					slidesPerView: 2 ,
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
			/*
Faq Active
====start====
*/
	$(document).on('click', '.vt-faq-item-area .accordion-item', function(){
		$(this).addClass('faq_active').siblings().removeClass('faq_active')
	});
	$('.counter').counterUp({
		delay: 15,
		time: 1500,
	});
				/*
Testimonial Slider
====start====
*/
	if ($('.vt-testimonial-slider').length > 0 ) {
		var swiper2 = new Swiper(".vt-testimonial-slider", {
			slidesPerView: 3,
			loop: true,
			spaceBetween: 32,
			roundLengths: true,
			centeredSlides: true,
			speed: 1000,
			navigation: {
				nextEl: ".vt-testi-next",
				prevEl: ".vt-testi-prev",
			},
			pagination: {
				el: ".vt-testi-pagination",
				clickable: true,
			},
			breakpoints: {  
				'1400': {
					slidesPerView: 3,
				},
				'1300': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 2,
				},
				'767': {
					slidesPerView: 2 ,
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
					/*
Client Logo Slider
====start====
*/
	if ($('.vt-contact-logo-slide').length > 0 ) {
		var swiper2 = new Swiper(".vt-contact-logo-slide", {
			loop: true,
			speed: 1000,
			slidesPerView: 3,
			spaceBetween: 50,
			roundLengths: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			breakpoints: {  
				'1400': {
					slidesPerView: 3,
				},
				'1300': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 3,
				},
				'768': {
					slidesPerView: 3,
				},
				'767': {
					slidesPerView: 3 ,
				},
				'576': {
					slidesPerView: 3,
				},
				'480': {
					slidesPerView: 2,
				},
				'0': {
					slidesPerView: 2,
				},
			},
		});
	};
	if ($('.vt-blog-dec-slide').length > 0 ) {
		var swiper2 = new Swiper(".vt-blog-dec-slide", {
			loop: true,
			speed: 1000,
			slidesPerView: 1,
			spaceBetween: 1,
			roundLengths: true,
			navigation: {
				nextEl: ".vt-video-prev",
				prevEl: ".vt-video-next",
			},
		});
	};
					/*
Txt-item-active
====start====
*/
	jQuery(window).on('load', function(){
		const boxes = gsap.utils.toArray('.txt_item_active');
		boxes.forEach(svg => {
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
	});

				/*
Testimonial Slider
====start====
*/
	if ($('.vt-testimonial-slider-2').length > 0 ) {
		var swiper2 = new Swiper(".vt-testimonial-slider-2", {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 0,
			speed: 1000,
			navigation: {
				nextEl: ".vt-testi-next-2",
				prevEl: ".vt-testi-prev-2",
			},
			pagination: {
				el: ".vt-testi-pagination-2",
				type: 'fraction',
				formatFractionCurrent: function (number) {
					if (number < 10) {
						return '0' + number;
					} else {
						return number;
					}
				}

			},
		});
	};

				/*
Service Scroll
====start====
*/
	gsap.utils.toArray('.vt-service-content-6').forEach((el, index) => { 
		let Vertex = gsap.timeline({
			scrollTrigger: {
				trigger: ".vt-service-section-6",
				scrub: 6,
				start: "top 20%",
				end: "bottom 20%",
				toggleActions: "play none none reverse", 
				markers: false
			}
		})

		Vertex
		.set(el, {transformOrigin: 'top bottom'})
		.fromTo(el, { x: 0  }, { x: -1200 , duration: 30, immediateRender: false})
	});
	jQuery(document).ready(function ($) {
		$('#pills-tab[data-mouse="hover"] a').hover(function(){
			$(this).tab('show');
		});
		$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
			var target = $(e.relatedTarget).attr('href');
			$(target).removeClass('active');
		})
	});
	$('.countdown_timer').each(function(){
		$('[data-countdown]').each(function() {
			var $this = $(this), finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function(event) {
				var $this = $(this).html(event.strftime(''
					+ '<li class="days_count"><strong>%D</strong><span>Days</span></li>'
					+ '<li class="hours_count"><strong>%H</strong><span>Hours</span></li>'
					+ '<li class="minutes_count"><strong>%M</strong><span>Mins</span></li>'
					+ '<li class="seconds_count"><strong>%S</strong><span>Secs</span></li>'));
			});
		});
	}); 
					/*
Animation
====start====
*/
	gsap.registerPlugin(ScrollTrigger);
	var st = jQuery(".tx-split-text");
	if(st.length == 0) return;
	gsap.registerPlugin(SplitText);
	st.each(function(index, el) {
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
		gsap.set(el, { perspective: 1000 });
		if( jQuery(el).hasClass('banner_title_line') ){
			gsap.set(el.split.words, {
				opacity: 0,
				y: 100,
				ease: "circ.out",
			});
		}
		el.anim = gsap.to(el.split.words, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
			},
			y: "0",
			scale: 1,
			opacity: 1,
			delay:1,
			duration: 1, 
			stagger: 0.25,
		});
	});
	gsap.utils.toArray(".vt-text p").forEach(e => {
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
	// Title Animation
	var st = $(".vt-title");
	if(st.length == 0) return;
	gsap.registerPlugin(SplitText);
	st.each(function(index, el) {
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
		gsap.set(el, { perspective: 1000  });

		if( $(el).hasClass('vt-title-ani') ){
			gsap.set(el.split.lines, {
				opacity: 0,
				rotationX: 90,
				ease: "power2.out",
			});
		}
		el.anim = gsap.to(el.split.lines, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
			},
			x: "0",
			y: "0",
			rotationX: 0,
			scale: 1,
			opacity: 1,
			duration: 1, 
			stagger: 0.2,
		});
	});
	let imageappear = document.querySelectorAll(".log-image-appear1");
	imageappear.forEach((container) => {
		let image = container.querySelector(".log-img-rvl_1");
		let ptx = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				toggleActions: "play none none none",
				start: "top 90%",
				end: "top 0%",
			}
		});
		ptx.set(container, { autoAlpha: 1 });
		ptx.from(container, 1.5, {
			xPercent: 100,
			ease: Power2.out
		});
		ptx.from(image, 1.5, {
			xPercent: -100,
			scale: 1.3,
			delay: -1.5,
			ease: Power2.out
		});
	});
	gsap.utils.toArray(' .appear_top').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 1,  y: "+=150"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
	});
	gsap.utils.toArray(' .anim_left').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 70%",
				end: "top 90%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 1,  x: "+=985"}, {opacity: 1, x: 0, duration: 2, stagger: 0.2, immediateRender: false})
	});
	gsap.utils.toArray(' .anim_right').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 90%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 1,  x: "-=985"}, {opacity: 1, x: 0, duration: 2, stagger: 0.2, immediateRender: false})
	});
	gsap.utils.toArray(' .top_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 90%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0,  y: "+=30"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
	});
	gsap.utils.toArray(' .appear_left').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 1,  x: "-=250"}, {opacity: 1, x: 0, duration: 1, immediateRender: false})
	});
	gsap.utils.toArray(' .vt-about-video').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 50%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 1,  width: "500", borderRadius: 400}, {opacity: 1, width: 1920, borderRadius: 0, duration: 2,stagger: 1, immediateRender: false})
	});
	gsap.utils.toArray(".img-parallax").forEach(function(container) {
		let image = container.querySelector("img");

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: true,
				pin: false,
			},
		}); 
		tl.from(image, {
			yPercent: -30,
			ease: "none",
		}).to(image, {
			yPercent: 30,
			ease: "none",
		}); 
	});
})(jQuery);