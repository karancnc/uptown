var $ = jQuery.noConflict();

$(window).load(function () {
  setTimeout(function () {

  });
});

jQuery(window).scroll(function(){
  var sticky = jQuery('header'),
      scroll = jQuery(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
jQuery(document).ready(function ($) {
  // lenis scroll start
  if (!("ontouchstart" in document.documentElement)) {
		document.documentElement.className += " no-touch";
	} else {
		document.documentElement.className += " touch";
	}
  if($('html').hasClass('no-touch')){
      const lenis = new Lenis({
      autoRaf: true,
      });
  }
// lenis scroll end

//  mobile menu 
  if (jQuery(window).width() < 1024) {
      jQuery('.hambarger').click(function(){
        jQuery(this).toggleClass('open');
        jQuery('header .inner').toggleClass('open');
      });

  }

  // banner video
  if (jQuery(window).width() > 1023) {
  }
  jQuery('.banner ul li').hover(function () {
    jQuery('.banner .video_banner').css('opacity', '1');
    var _this = jQuery(this).attr('data-video')
    jQuery('.banner .ban_video').attr('src', _this);
    jQuery('.banner .comman_video').attr('src', '');

  });
  jQuery('.banner ul').mouseleave(function () {
    jQuery('.banner .video_banner').css('opacity', '0');
    var _this = jQuery(this).attr('data-video')
    jQuery('.banner .comman_video').attr('src', _this);
    jQuery('.banner .ban_video').attr('src', '');
  });
  // banner video

  // images_slider start
  if (jQuery('.images_slider').length > 0) {
    var activities_popup = jQuery(".images_slider .owl-carousel");
    activities_popup.owlCarousel({
      items: 1,
      margin: 0,
      //loop: true,
      nav: true,
      dots: false,
      rtl: true,
      //autoplay:true,
      navText: [
        '<img src="images/right_arrow.png" alt="Previous">',
        '<img src="images/right_arrow.png" alt="Next">'
      ],
    });
  }
  // images_slider end
// magnificPopup start
  $('.images_slider .col').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', 
    gallery:{
        enabled:true
      },
    zoom: {
      enabled: true, 
    
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
        opener: function(openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  
  });
  // magnificPopup end
  jQuery("footer input[type='checkbox']").on("change", function () {
    if (jQuery(this).is(":checked")) {
      jQuery("footer .footer_top .right_col label").addClass("checked");
    } else {
      jQuery("footer .footer_top .right_col label").removeClass("checked");
    }
  });
  // form focus 
  $("form .in").on("focus blur input", function () {
    if ($(this).val() !== "") {
        $(this).prev("h6").addClass("focus");
    } else if (!$(this).is(":focus")) {
        $(this).prev("h6").removeClass("focus");
    }
  });

//time_to_move video 
  jQuery('.time_to_move .vid').hover(function () {    
    var _this = jQuery(this).attr('data-video')
    jQuery('.time_to_move .vid video').attr('src', '');
    jQuery(this).children().attr('src', _this);

  });
  jQuery('.time_to_move').mouseleave(function () {
    jQuery('.time_to_move .vid video').attr('src', '');
  });




});

$(window).resize(function () {

});



