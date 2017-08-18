

// Home script
// ------------------------------------------------------------
//
	jQuery(function() {
		var body = $('body');
		var header = $('header');
		var nav = $('nav');
		var nava = $('#nava');
		var navb = $('#navb');
		var navc = $('#navc');
		var navd = $('#navd');
		var home = $('#push');
		var bridge = $('#bridge');
		var content = $('#content');
		var feature = $('#feature');
		var footer = $('#footer');
		var tagline = $('#tagline');
		var navToggle = true;
		var loadDelay = 1200;
		var introStart = 1000;


// Intro sequence
// ------------------------------------------------------------
//
	$(window).load(function() {
		setTimeout(function() {

			nav.removeClass('hide');
			header.removeClass('hide');
			$('.wrap').removeClass('hide');
			$('.base').removeClass('hide');

			setTimeout(function() {
				home.addClass('reveal');
			}, 1200);
			setTimeout(function() {
				nava.addClass('full');
			}, 2400);

		// logo slogan expand
			var sloganStartTimer = setTimeout(function() {
				nava.addClass('hover');
			}, 4500);
			var sloganStopTimer = setTimeout(function() {
				nava.removeClass('hover');
			}, 10800);

		// waypoints
			setTimeout(function() {
				// fold transitions
				home.waypoint({
					handler: function(event, direction) {
					body.toggleClass('fold');}, offset: '-5%'
				});
				feature.waypoint({
					handler: function(event, direction) {
					body.toggleClass('foldb');}, offset: '150%'
				});
				// nav style
				content.waypoint({
					handler: function(event, direction) {
					nav.toggleClass('sticky');}, offset: '30%'
				});
				feature.waypoint({
					handler: function(event, direction) {
					nav.toggleClass('featurebg');}, offset: 60
				});
				footer.waypoint({
					handler: function(event, direction) {
					nav.toggleClass('featurebg');}, offset: 60
				});
			}, 2000);

		}, 1000+introStart);
	});

// lock iOS scroll
	var lockscroll = document.getElementById('lockscroll');
	lockscroll.addEventListener('touchmove', function(e) {
		e.preventDefault();
	}, false);
	var navslide = document.getElementById('navslide');
	navslide.addEventListener('touchmove', function(e) {
		e.preventDefault();
	}, false);

// autoscroll to top
	var callbackScroll = { 
		callbackAfter: function () {
			navToggle = true;
			return navToggle;
		}
	};
	setTimeout(function() {
		smoothScroll.animateScroll(null, '#home', callbackScroll);
	}, 400);

// header parallax scroll
	// if (!navigator.userAgent.match(/(iPhone|iPod|iPad)/i)){
		$(document).scroll(function(){
			var headerTagline = tagline,
				offsetTagline = headerTagline.offset().top,
				yPosTagline = -($(window).scrollTop()/headerTagline.data('speed'));
			headerTagline.css({'-webkit-transform':'translateY('+yPosTagline+'px)','transform':'translateY('+yPosTagline+'px)'});
		});
	// }

// browser cycle animation trigger
	setTimeout(function() {
		cycleGo = $(function() {
			browserCycle();
		});
		cycleLoop = setInterval(function() {
			browserCycle();
		}, 6400*2);
	}, 2400*2);

// active nav item
	$(".nav").on('click', 'a', function() {
		$('.nav').removeClass('active');
		$(this).closest('.nav').addClass('active');
		navToggle = false;
		return navToggle;
	});

// page links & transitions
	$(body).on('mouseup', '#navlink', function(event) {
		event.preventDefault();
		$(this).closest('.button').addClass('active');
		var subPath = '/'+$(this).attr('data-pathname')+'/';
		if ((event.which == 1)) {
			$('body').addClass('out').addClass('next');
			var subDelay = setTimeout(function() {
				location.href = subPath;
			}, loadDelay);
		} else {
			window.open(subPath, '_blank');
		}
	});

// outline view toggle
	$(body).on('mouseup', '#outlines', function(event) {
		event.preventDefault();
		$('body').toggleClass('outlines');
	});

});


// Browser cycle animation
// ------------------------------------------------------------
//
	function browserCycle() {
		if ($('.multibrowser').hasClass('cycle')) {
			prepa = setTimeout(function() {
				$('.cycle').addClass('prepa');
			}, 200*2);
			stepa = setTimeout(function() {
				$('.cycle').removeClass('prepa');
				$('.cycle').removeClass('stepd');
				$('.cycle').addClass('stepa');
			}, 1000*2);
			prepb = setTimeout(function() {
				$('.cycle').addClass('prepb');
			}, 1800*2);
			stepb = setTimeout(function() {
				$('.cycle').removeClass('prepb');
				$('.cycle').removeClass('stepa');
				$('.cycle').addClass('stepb');
			}, 2600*2);
			prepc = setTimeout(function() {
				$('.cycle').addClass('prepc');
			}, 3400*2);
			stepc = setTimeout(function() {
				$('.cycle').removeClass('prepc');
				$('.cycle').removeClass('stepb');
				$('.cycle').addClass('stepc');
			}, 4200*2);
			prepd = setTimeout(function() {
				$('.cycle').addClass('prepd');
			}, 5000*2);
			stepd = setTimeout(function() {
				$('.cycle').removeClass('prepd');
				$('.cycle').removeClass('stepc');
				$('.cycle').addClass('stepd');
			}, 5800*2);
		}
	}

// smooth scroll
	smoothScroll.init();
