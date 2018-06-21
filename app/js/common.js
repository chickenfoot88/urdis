$(function() {

	// preloader
	$(window).load(function(){
		$('.load_inner').fadeOut();
		$('.loader').delay(400).fadeOut('slow');
	});

	//E-mail Ajax Send
	$(".form-callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.success').addClass('visible');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$('.success').removeClass('visible');
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	$('a[href="#form-callback"]').click(function() {
		$('#form-callback .formname').val($(this).data('form'));
	});

	// Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($('html').hasClass('chrome')) {
			$.smoothScroll();
			console.log('this is chrome');
		}
	} catch(err) {

	};

	// Top Menu SuperFish Plugin
	$(".top-line .sf-menu").superfish({
	  cssArrows: false,
	  delay: 200,
	  hoverClass: 'no-class'
	});

	var owl = $(".slider");
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		nav: true,
		navText: ""
	});

	$('.next').click(function functionName() {
		owl.trigger('next.owl.carousel');
	})
	$('.prev').click(function functionName() {
		owl.trigger('prev.owl.carousel');
	})

	$(".sf-menu").after('<div id="my-menu">');
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style", "");
	$("#my-menu").find("ul").removeClass("sf-menu");
	$("#my-menu").mmenu({
		extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: "Меню"
		}
		});

	var api = $("#my-menu").data("mmenu");
	api.bind("closed", function () {
		$(".toggle-mnu").removeClass("on");
	});

	$(".mobile-mnu").click(function() {
		var mmAPI = $("#my-menu").data("mmenu");
		mmAPI.open();
		var triggerMnu = $(this).find(".toggle-mnu");
	  triggerMnu.toggleClass("on");
	  $(".main-mnu").slideToggle();
	  return false;
	});

	// Equal Heights Services Items
	$('.sect-services__item h4').equalHeights();

	// Equal Heights News Items
	$('.sect-news__item p').equalHeights();
	$('.sect-news__item h4').equalHeights();

	// Equal Heights Links Items
	$('.sect-links__item').equalHeights();


	// Form Popup
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

});
