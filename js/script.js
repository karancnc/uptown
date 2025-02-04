var $ = jQuery.noConflict();

$(window).load(function () {
  setTimeout(function () {

  });
});


// on click scroll to section
// jQuery('.foundation_futures .inner a, .dropmenu_gallery_link li a').on('click', function (e) {
//   var hash = jQuery(this).prop("hash").substr(1);
//   scrollbar.scrollTo(0, jQuery('.'+hash).attr('data-scroll'), 600);
// });

// jQuery(window).on("load", function () {
//   jQuery('.portfolio_sec .wrap').each(function(){
//     var targetOffset = jQuery(this).offset().top;
//     var wrapperOffset = jQuery('#full_wrapper').offset().top;
//     var scrollToPosition = targetOffset - wrapperOffset - 50;
//     jQuery(this).attr('data-scroll',scrollToPosition);
//   });
//   var hash = window.location.hash.slice(1);
//   if (hash) {
//     var targetElement = jQuery('.' + hash);
//     if (targetElement.length) {
//       var targetOffset = targetElement.offset().top;
//       var wrapperOffset = jQuery('#full_wrapper').offset().top;
//       var scrollToPosition = targetOffset - wrapperOffset - 50;
//       scrollbar.scrollTo(0, scrollToPosition, 500);
//     }
//   }
// });




jQuery(document).ready(function () {

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




});

$(window).resize(function () {

});

var scrollbar = Scrollbar.init(document.querySelector('#full_wrapper'), {
  speed: 0.7,
  damping: 0.1
});


function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// scrollbar.addListener(() => {
//   $(".count").each(function () {
//     var $this = $(this);
//     if (isElementInViewport(this) && !$this.hasClass('counted')) { 
//       var countTo = parseFloat($this.attr("data-number"));

//       $({ countNum: 0 }).animate(
//         { countNum: countTo },
//         {
//           duration: 850,
//           easing: "swing",
//           step: function () {
//             $this.text(this.countNum.toLocaleString("en", { 
//               minimumFractionDigits: (countTo % 1 !== 0 ? 1 : 0) 
//             }));
//           },
//           complete: function () {
//             $this.text(this.countNum.toLocaleString("en", { 
//               minimumFractionDigits: (countTo % 1 !== 0 ? 1 : 0) 
//             }));
//             $this.addClass('counted'); 
//           }
//         }
//       );
//     }
//   });
// });


scrollbar.addListener((status) => {
  var scrollTop = status.offset.y;
  var header = jQuery('header');

  if (scrollTop >= 100) {
    header.addClass('fixed');
  } else {
    header.removeClass('fixed');
  }
});


// image Show animate
(function ($) {
  $.fn.visible = function (partial) {
    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      top = $t.offset().top,
      bottom = top + $t.height(),
      compareTop = partial === true ? bottom : top,
      compareBottom = partial === true ? top : bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
})(jQuery);

// Wait for the Smooth Scrollbar's 'scroll' event, which is different from the regular window scroll
scrollbar.addListener(function () {
  var win = $(window);
  var allMods = $(".animate");

  allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      setTimeout(function () {
        el.addClass("come-in");
      }, i * 50);
    }
  });
});

