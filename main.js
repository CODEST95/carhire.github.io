 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function(Tsh) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	Tsh(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		Tsh('.js-fullheight').css('height', Tsh(window).height());
		Tsh(window).resize(function(){
			Tsh('.js-fullheight').css('height', Tsh(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if(Tsh('#ftco-loader').length > 0) {
				Tsh('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   Tsh.Scrollax();

	var carousel = function() {
		Tsh('.carousel-car').owlCarousel({
			center: true,
			loop: true,
			autoplay: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
		Tsh('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	Tsh('nav .dropdown').hover(function(){
		var Tshthis = Tsh(this);
		// 	 timer;
		// clearTimeout(timer);
		Tshthis.addClass('show');
		Tshthis.find('> a').attr('aria-expanded', true);
		// Tshthis.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		Tshthis.find('.dropdown-menu').addClass('show');
	}, function(){
		var Tshthis = Tsh(this);
			// timer;
		// timer = setTimeout(function(){
			Tshthis.removeClass('show');
			Tshthis.find('> a').attr('aria-expanded', false);
			// Tshthis.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			Tshthis.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	Tsh('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		Tsh(window).scroll(function(){
			var Tshw = Tsh(this),
					st = Tshw.scrollTop(),
					navbar = Tsh('.ftco_navbar'),
					sd = Tsh('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var counter = function() {
		
		Tsh('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !Tsh(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = Tsh.animateNumber.numberStepFactories.separator(',')
				Tsh('.number').each(function(){
					var Tshthis = Tsh(this),
						num = Tshthis.data('number');
						console.log(num);
					Tshthis.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		Tsh('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !Tsh(this.element).hasClass('ftco-animated') ) {
				
				i++;

				Tsh(this.element).addClass('item-animate');
				setTimeout(function(){

					Tsh('body .ftco-animate.item-animate').each(function(k){
						var el = Tsh(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		Tsh(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = Tsh('.navbar-toggler');
		 	Tsh('html, body').animate({
		    scrollTop: Tsh(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		Tsh('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	Tsh('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  Tsh('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


	Tsh('#book_pick_date,#book_off_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	Tsh('#time_pick').timepicker();



})(jQuery);

