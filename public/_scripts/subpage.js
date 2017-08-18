

// Subpage script
// ------------------------------------------------------------
//
	jQuery(function() {
		var body = $('body');
		var header = $('header');
		var nav = $('nav');
		var nava = $('#nava');
		var navb = $('#navb');
		var navc = $('#navc');
		var home = $('#push');
		var content = $('#content');
		var feature = $('#feature');
		var title =$('#title');
		var visualtop =$('.fout');
		var visualbot =$('.fin');
		var navToggle = true;
		var loadDelay = 1200;
		var introStart = 1000;

	// jQuery(function() {
	// 	var body = $('body');
	// 	var header = $('header');
	// 	var nav = $('nav');
	// 	var nava = $('#nava');
	// 	var navb = $('#navb');
	// 	var navc = $('#navc');
	// 	var navd = $('#navd');
	// 	var home = $('#push');
	// 	var bridge = $('#bridge');
	// 	var content = $('#content');
	// 	var feature = $('#feature');
	// 	var footer = $('#footer');
	// 	var tagline = $('#tagline');
	// 	var navToggle = true;
	// 	var loadDelay = 1200;
	// 	var introStart = 1000;


// Intro sequence
// ------------------------------------------------------------
//
	$(window).load(function() {
		setTimeout(function() {

			nav.removeClass('hide');
			header.removeClass('hide');
			$('.next').removeClass('hide');

			setTimeout(function() {
				$('section').removeClass('bgfade');
				$('.base').removeClass('hide');
			}, 600);
			setTimeout(function() {
				nava.addClass('full');
			}, 1800);

		// waypoints
			setTimeout(function() {
				// fold transitions
				home.waypoint({
					handler: function(event, direction) {
					body.toggleClass('fold');}, offset: '-5%'
				});
				content.waypoint({
					handler: function(event, direction) {
					body.toggleClass('foldb');}, offset: '-120%'
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
				// visual nav fade
				if (window.matchMedia('(max-height: 901px)').matches) {
					if (!navigator.userAgent.match(/(iPhone|iPod|iPad)/i)){
						visualtop.waypoint({
							handler: function(event, direction) {
							nav.toggleClass('fade');}, offset: 60
						});	
						visualbot.waypoint({
							handler: function(event, direction) {
							nav.toggleClass('fade');}, offset: '25%'
						});
					}
				}
			}, 500);

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
		smoothScroll.animateScroll(null, '#sub', callbackScroll);
	}, 400);

// header parallax scroll
	// if (!navigator.userAgent.match(/(iPhone|iPod|iPad)/i)){
		$(document).scroll(function(){
			var headerTitle = title,
				offsetTitle = headerTitle.offset().top,
				yPosTitle = -($(window).scrollTop()/headerTitle.data('speed'));
			headerTitle.css({'-webkit-transform':'translateY('+yPosTitle+'px)','transform':'translateY('+yPosTitle+'px)'});
		});
	// }

// video play click trigger
	// var video = document.getElementById('video');
	// if (body.hasClass('splash')) {
	// 	video.addEventListener('click',function(){
	// 		video.play();
	// 	},false);
	// }

// active nav item
	$(".nav").on('click', 'a', function() {
		$('.nav').removeClass('active');
		$(this).closest('.nav').addClass('active');
		navToggle = false;
		return navToggle;
	});

// mobile visual zoom
	// $(".visual.zoom").on('click', function() {
	// 	$(this).toggleClass('vzoom');
	// });

// page links & transitions
	nava.on('mouseup', function(event) {
		event.preventDefault();
		if ((event.which == 1)) {
			body.addClass('out').addClass('return');
			setTimeout(function() { 
				location.href='/';
			}, loadDelay);
		} else {
			window.open('/', '_blank');
		}
	});
	body.on('mouseup', '#navb #navlink', function(event) {
		event.preventDefault();
		var subpagePath = '/'+$(this).attr('data-pathname')+'/';
		if ((event.which == 1)) {
			body.addClass('out').addClass('prev');
			var subpageDelay = setTimeout(function() {
				location.href = subpagePath;
			}, loadDelay);
		} else {
			window.open(subpagePath, '_blank');
		}
	});
	body.on('mouseup', '#navc #navlink', function(event) {
		event.preventDefault();
		var subpagePath = '/'+$(this).attr('data-pathname')+'/';
		if ((event.which == 1)) {
			body.addClass('out').addClass('next');
			$('.next').addClass('active');
			var subpageDelay = setTimeout(function() { 
				location.href = subpagePath;
			}, loadDelay);
		} else {
			window.open(subpagePath, '_blank');
		}
	});
	$('section.content').on('mouseup', '#navlink', function(event) {
		event.preventDefault();
		var subpagePath = '/'+$(this).attr('data-pathname')+'/';
		if ((event.which == 1)) {
			$('body').addClass('out').addClass('next');
			var subpageDelay = setTimeout(function() {
				location.href = subpagePath;
			}, loadDelay);
		} else {
			window.open(subpagePath, '_blank');
		}
	});

// outline view toggle
	$(body).on('mouseup', '#menu', function(event) {
		event.preventDefault();
		$('body').toggleClass('outlines');
	});

});

// smooth scroll
	smoothScroll.init();
