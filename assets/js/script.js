// 1 pre-loader animtions

// Inside Strict Function

// 2 Mouse action on images --home page
// 3 Menu Control --conditions to apply when click event on hamburger menu
// 4 Owl carousel
// 5 Circle Progress Bar
// 6 Progress Bar

// Strict Functions Ends

// 7 Customize cursor
// 8 Connect-spin Animation 


// 1 pre-loader animtions

window.addEventListener('load', function() {
  let preLoaderElement = document.getElementById("pre-loader");
  let pageLoaderElement = document.getElementById("page-loader");
  $('#pre-loader').delay(4500).hide(0);
  $('#page-loader').delay(1500).hide(0);
  // Check if it's the first visit on the main page using sessionStorage
  const isFirstVisitMain = !sessionStorage.getItem('hasVisitedMain');

  if (preLoaderElement) {
    if (isFirstVisitMain) {
      sessionStorage.setItem('hasVisitedMain', true); // Set the flag for first visit on the main page
      load(25);
      setTimeout(() => {
        $('.pre-loader').css('top','-103vh');
        $('.content').css('display','block');
      }, 3200);
    } else {
      $('#percentage').text('100%');
      $('.progress-inner').css('width', '100%');
      preAnimation();
      $('.pre-loader').css('top','-103vh');
      $('.content').css('display','block');
    }

    // Retrieve the current page URL
    const currentPageURL = window.location.href;

    // Check if it's the first visit for the current page using sessionStorage
    const isFirstVisitInner = !sessionStorage.getItem('hasVisitedInner-' + currentPageURL);

    if (isFirstVisitInner) {
      sessionStorage.setItem('hasVisitedInner-' + currentPageURL, true); // Set the flag for first visit on the current inner page
    }
  }

  if (pageLoaderElement) {
    // Check if it's the first visit for the current page using sessionStorage
    const currentPageURL = window.location.href;
    const isFirstVisitInner = !sessionStorage.getItem('hasVisitedInner-' + currentPageURL);

    if (isFirstVisitInner) {
      sessionStorage.setItem('hasVisitedInner-' + currentPageURL, true); // Set the flag for first visit on the current inner page
      setTimeout(() => {
        $('.page-loader').css('top','-103vh');
        $('.content').css('display','block');
      }, 500);
    } else {
      $('.page-loader').css('top','-103vh');
      $('.content').css('display','block');
    }
  }
});


function preAnimation(){
    let loadText = document.querySelector('.d12');
    let footerText = document.querySelector('.pre-footer p');

    loadText.animate(
      [
        { transform: 'translateY(0%)' },
        { transform: 'translateY(-120%)' }
      ],
      {
        duration: 500,
        easing: 'ease-in-out',
        fill: 'forwards'
      }
    );
    footerText.animate(
      [
        {opacity:'1'},
        {opacity:'0'}
      ],
      {
        duration: 500,
        easing: 'ease-in-out',
        fill: 'forwards'
      }
    )
}
function load(time) {
  let percentage = document.querySelector('#percentage');
  let value = 0;
  percentage.innerHTML = value + '%';
  setInterval(() => {
    if (value < 100) {
      value++;
      percentage.innerHTML = value+'%';
      document.querySelector('.progress-inner').style.width = value + '%';
      if(value == 100){
        preAnimation();
      }
    }
  },time); 
}

$(document).ready(function() {
  (function($) {
      "use strict";

      $(document).ready(()=>{AOS.init({once:'true'});})
      $(document).on('scroll',()=>{AOS.refresh();});
      $(document).on('scroll', skillFill);
      $(document).ready(()=>{initalizeCarousel();})

      // 2 Mouse action on images --home page

      function mousemove() {
        var onImg = document.querySelectorAll('#home .item-wrapper .items .image');
        $(onImg).mouseenter(() => {
          $('.cursor').addClass('onimg');
          $('.cursor').addClass('vector');
          $('.vector').css('background-position','center')
          $('.dot').addClass('inactive');
        }).mouseleave(() => {
          $('.cursor').removeClass('onimg');
          $('.cursor').removeClass('vector');
          $('.dot').removeClass('inactive');
        });
      }

      // 3 Menu Control --conditions to apply when click event on hamburger menu

      function menuControl() {
          $(document).on('click', '.menu-icon', function() {
              $(this).toggleClass('active');
              $('.mobile-hamburger').toggleClass('active');
              // $('#logo').toggleClass('inactive');
              $('.item-wrapper').toggleClass('inactive');
              $('footer').toggleClass('inactive');
          });
      }

      // 4 Owl carousel

      function initalizeCarousel(){
        if ($('.owl-carousel').length) {
          $('.owl-carousel').owlCarousel({
            loop: true,
            items: 1,
            autoWidth: true,
            margin: 10,
            center: true,
            smartSpeed: 1500,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
              1000: {
                items: 2,
                margin:94
              },
            }
          });
        }
      }

      // 5 Circle Progress Bar

      function animateBackground() {
        let elements = document.querySelectorAll('.circle-progress');
        elements.forEach(function(element) {
          let circleValue = element.dataset.circle;
          let color = element.dataset.color;
          let color1 = element.dataset.color1;
          let circleDegrees = (circleValue / 100) * 360;
          $({ angleValue: 0 }).delay(0).animate({ angleValue: circleDegrees }, {
            duration: 1000,
            easing: 'linear',
            step: function() {
              element.style.background = `conic-gradient(${color1} ${this.angleValue}deg, ${color} 0deg)`;
            }
          });
        });
      }

      // 6 Progress Bar

      function skillFill() {
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
      
        $('.skill-fill:not(.animation-done)').each(function () {
          var progressBar = $(this);
          var progressFill = progressBar.data('fill');
          var progressBarTop = progressBar.offset().top;
      
          if (progressBarTop <= viewportBottom) {
            progressBar.animate({ width: progressFill },1, function() {
              $(this).addClass('animation-done');
            });
          }
        });
    }
      
    mousemove();
    menuControl();
    animateBackground();

  })(jQuery);
  
    // 8 Customize cursor

    $(document).mousemove(function(e) {
      var roundCursor = $('.cursor');
      var dot = $('.dot');
      roundCursor.css({ top: e.clientY, left: e.clientX });
      dot.css({ top: e.clientY, left: e.clientX });
    });
});

// 9 Connect-Spin Animation //

$(document).ready(function() {
  const animationElements = $('.animation-spin');

  function checkInView() {
    const windowHeight = $(window).height();
    const windowTop = $(window).scrollTop();
    const windowBottom = windowTop + windowHeight;

    animationElements.each(function() {
      const element = $(this);
      const elementTop = element.offset().top;
      const elementBottom = elementTop + element.outerHeight();

      if (elementBottom >= windowTop && elementTop <= windowBottom) {
        element.addClass('connect-spin');
      } else {
        // Remove the class if the element is not in view
        element.removeClass('connect-spin');
      }
    });
  }
  
  $(window).on('scroll resize', checkInView).trigger('scroll');
});


// 10 Add spin for connect container //

// function isElementInViewport(el) {
//   var rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// function handleScroll() {
//   var connectSection = document.getElementById('connect');

//   if (isElementInViewport(connectSection)) {
//     connectSection.classList.add('spin');
//     window.removeEventListener('scroll', handleScroll);
//   }
// }
// window.addEventListener('scroll', handleScroll);


