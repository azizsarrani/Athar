(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 40;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
  
    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();
  
      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
      }
    });
  });

  // jQuery counterUp (used in Whu Us section)
//   jQuery(document).ready(function($) {
//     $('[data-toggle="counter-up"]').counterUp({
//         delay: 10,
//         time: 1000
//     });
// });

  // This caused an error because 
  // $('[data-toggle="counter-up"]').counterUp({
  //   delay: 10,
  //   time: 1000
  // });

  // Porfolio isotope and filter
  // $(window).on('load', function () {
  //   var portfolioIsotope = $('.portfolio-container').isotope({
  //     itemSelector: '.portfolio-item'
  //   });
  //   $('#portfolio-flters li').on( 'click', function() {
  //     $("#portfolio-flters li").removeClass('filter-active');
  //     $(this).addClass('filter-active');
  
  //     portfolioIsotope.isotope({ filter: $(this).data('filter') });
  //   });
  // });

  // // Testimonials carousel (uses the Owl Carousel library)
  // $(".testimonials-carousel").owlCarousel({
  //   autoplay: true,
  //   dots: true,
  //   loop: true,
  //   items: 1
  // });

  // // Clients carousel (uses the Owl Carousel library)
  // $(".clients-carousel").owlCarousel({
  //   autoplay: true,
  //   dots: true,
  //   loop: true,
  //   responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
  //   }
  // });

})(jQuery);


// (function ($) {
//   "use strict";


//   /*==================================================================
//   [ Validate ]*/
//   // var input = $('.validate-input .input100');
//   // if(input.length == 2)
//   // {
//   //   location.href =  'http://google.com';
//   // }

//   $("loginBtn").click(function() {
//     alert('hiii');
//     var input = $('.validate-input .input100');
//     console.log(input.length);
//     console.log("ji")
//     // if(input.length == 2)
//     // {
//     //   location.href =  'http://google.com';
//     // }
//     var check = true;

//     for(var i=0; i<input.length; i++) {
//         if(validate(input[i]) == false){
//             showValidate(input[i]);
//             check=false;
//         }
//     }

//     if(check  === true)
//     {
//       location.href = 'http://google.com';
//     }
//     // return check;
//   });

//   // document.getElementById('login100-form-btn').onclick = function(){
//   //   var check = true;

//   //   for(var i=0; i<input.length; i++) {
//   //       if(validate(input[i]) == false){
//   //           showValidate(input[i]);
//   //           check=false;
//   //       }
//   //   }

//   //   if(check  === true)
//   //   {
//   //     location.href = 'http://google.com';
//   //   }
//     // return check;
// // }

//   // $('.validate-form').on('submit',function(){
//   //     var check = true;

//   //     for(var i=0; i<input.length; i++) {
//   //         if(validate(input[i]) == false){
//   //             showValidate(input[i]);
//   //             check=false;
//   //         }
//   //     }

//   //     if(check  === true)
//   //     {
//   //       location.href = 'http://google.com';
//   //     }
//   //     // return check;
//   // });


//   $('.validate-form .input100').each(function(){
//       $(this).focus(function(){
//          hideValidate(this);
//       });
//   });

//   function validate (input) {
//       if($(input).attr('type') === 'username' || $(input).attr('type') === 'password')
//       {
//         if($(input).val().trim() === '' || $(input).val().trim() !== 'hi')
//         {
//           return false;
//         }
//         return true;
//       }

//       // if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//       //     if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//       //         return false;
//       //     }
//       // }
//       // else {
//       //     if($(input).val().trim() == ''){
//       //         return false;
//       //     }
//       // }
//   }

//   function showValidate(input) {
//       var thisAlert = $(input).parent();

//       $(thisAlert).addClass('alert-validate');
//   }

//   function hideValidate(input) {
//       var thisAlert = $(input).parent();

//       $(thisAlert).removeClass('alert-validate');
//   }
  
  

// })(jQuery);

// (function ($) {
//   "use strict";


//   function validateUsername()
// })

// (function ($){
//   // console.log("hlelo");
// })

function onLogin()
{
  var sadaraUser = "Sadarax2100";
  var sadaraPass = "12345";

  var customsUser = "CustomsEntryx6402";
  var customsPass = "246824";

  var input = $('.validate-input .input100');

  var username = $(input[0]).val().trim();
  var password = $(input[1]).val().trim();

  console.log(username);
  console.log(username === '');

  

  if( (username === sadaraUser) && (password === sadaraPass))
  {
    window.location.href = '../SadaraDashboard/build/index.html';
  } else if((username == customsUser) && (password == customsPass))
  {
    window.location.href = '../CustomsDashboard/build/index.html';
  } else
  {
    var error = document.getElementById("error message");
    error.style.display = "block";  // <-- Set it to block
    error.style.color = "red";
    // alert("Both a username and password are required");
  }
  
}
