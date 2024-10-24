(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.loop').owlCarousel({
      center: true,
      items:1,
      loop:true,
      autoplay: true,
      nav: true,
      margin:0,
      responsive:{ 
          1200:{
              items:5
          },
          992:{
              items:3
          },
          760:{
            items:2
        }
      }
  });
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


 // Menu elevator animation (without changing URL hash)
$('.scroll-to-section a[href]').on('click', function(e) {
  e.preventDefault();  // Prevent default anchor behavior

  var ref = $(this).attr('href');  // Get the href attribute (e.g., "about")
  console.log('Anchor clicked, href:', ref);  // Debug log for href

  var target = $('#' + ref);  // Find the target element using the href as ID (e.g., #about)
  console.log('Target element:', target);  // Debug log for target

  if (target.length) {
    var width = $(window).width();
    console.log('Window width:', width);  // Debug log for window width

    // Close mobile menu if applicable
    if (width < 991) {
      console.log('Closing mobile menu since width < 991');
      $('.menu-trigger').removeClass('active');
      $('.header-area .nav').slideUp(200);
    }

    // Smooth scroll to the target section
    console.log('Scrolling to target offset:', target.offset().top + 1);  // Debug log for scrolling position
    $('html, body').animate({
      scrollTop: target.offset().top + 1  // Scroll to the target element
    }, 700, function() {
      console.log('Scroll animation completed');  // Debug log after animation completion
      // You can optionally update the URL here, but it won't include the #
      // window.location.hash = ref;
    });
  } else {
    console.warn('Target element not found for href:', ref);  // Warn if target not found
  }
});




  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }


  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
  });


	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }
})(window.jQuery);


function switchLanguage() {
  const language = document.getElementById('language-selector').value;

  if (language === 'de') {
    // For German
    window.location.href = '/de'; // Replace '/de' with the URL path for the German version of the site
  } else {
    // For English (default)
    window.location.href = '/'; // Replace '/' with the URL path for the English version
  }
}


