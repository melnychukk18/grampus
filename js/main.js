$(document).ready(function(){
	$('.service').mouseenter(function(){
		if ($('html').width() > 992) {
		$(this).find('p').fadeIn();
		$(this).find('h3').fadeIn();
		};
	}).mouseleave(function(){
		if ($('html').width() > 992) {
		$(this).find('p').css('display','none');
		$(this).find('h3').css('display','none');
		};
	});

	$('.portfolio-work').mouseenter(function(){
		if ($('html').width() > 768) {
		$(this).find('.portfolio-work-description').css('display','block');
		};
	}).mouseleave(function(){
		if ($('html').width() > 768) {
		$(this).find('.portfolio-work-description').css('display','none');
		};
	});
});