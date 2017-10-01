$(window).load(function() {
	var introStart = 0;

	if ($('body').hasClass('home')) {
		setTimeout(function() {
			$('#loader').addClass('out');
		}, 50+introStart);
		setTimeout(function() {
			$('#loader').fadeOut('fast');
		}, 150+introStart);
	}
	if ($('body').hasClass('sub')) {
		setTimeout(function() {
			$('#loader').addClass('out');
		}, 50+introStart);
		setTimeout(function() {
			$('#loader').fadeOut('fast');
		}, 150+introStart);
	}

});