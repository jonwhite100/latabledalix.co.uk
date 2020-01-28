window.addEventListener('load', function () {
	// Animate loader off screen
	jQuery('.se-pre-con').fadeOut('slow');

	// Stop carousel from autoplaying
	jQuery('#carouselJumbotron').carousel({
		interval: 8000,
	// 	// wrap: false,
	// 	// pause: 'hover',
		ride: true,
	});

});

jQuery(document).ready(function ($) {
	// script to shrink header
	// $(window).scroll(function () {
	// 	if ($(window).scrollTop() > 100) {
	// 		$('.navbar').addClass('shrink');
	// 	} else {
	// 		$('.navbar').removeClass('shrink');
	// 	}
	// });

	// scroll to an id smoothly: taniarascia.com/smooth-scroll-to-id-with-jquery/
	$('a[href^="#"]').click(function (e) {
		var position = $($(this).attr('href')).offset().top - 100;

		e.preventDefault();

		$('body, html').animate({
			scrollTop: position,
		}, 330, 'linear');
	});

	// image  function to apply the image source URL to the parent div (and them hide <img />)
	$('.img-to-parent').each(function () {
		$(this).css('background-image', 'url(' + $(this).find('img').attr('src') + ')');
		$(this).find('img').remove();
	});

	// animate.css - add animate and fadeIn with a staggered delay
	// to all card-flip (scrollReveal hides them on unseen tabs)
	function addAnimatedClasses() {
		var cardFlipClass = document.querySelectorAll('.tab-pane.active .card');

		cardFlipClass.forEach(function (element, index) {
			element.classList.add('animated', 'fadeIn', 'delay-' + index + 's');
		});
	}

	addAnimatedClasses();

	$('.nav-pills a').on('shown.bs.tab', function () {
		addAnimatedClasses();
	});

	// 'Find out more' in card-pricing button to open hidden content
	$(document).on('click', '[id^=contactOption]', function () {
		var num = this.id.split('contactOption')[1];

		// populate the select list with the chosen option
		$('select.hosting-options > option:eq(' + num + ')').attr('selected', true);

		// scroll to Form and focus on first input
		$('html, body').animate({
			scrollTop: $('#hostingEnquiryForm').offset().top - 100,
		}, 330, function () {
			$('form [name="your-name"]').focus();
		});
	});

	// using ScrollReveal
	ScrollReveal().reveal('.card', { interval: 200 });
});
