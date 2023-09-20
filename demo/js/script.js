window.addEventListener('load', function() {
  const isFirstVisit = !localStorage.getItem('hasVisited');
  $('#pre-loader').delay(4500).hide(0);
  if (isFirstVisit) {
    load(25);
    localStorage.setItem('hasVisited', true);
    setTimeout(() => {
      $('.item-wrapper').addClass('entry-animation');
      $('.pre-loader').addClass('off');
    }, 3200);
  } else {
    $('.item-wrapper').addClass('entry-animation');
    $('#percentage').text('100%');
    $('.progress-inner').css('width','100%');
    preAnimation();
    $('.pre-loader').addClass('off');
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
    function mousemove() {
      var y = document.querySelectorAll('.light-cursor');
      $(y).mouseenter(() => {
        $('.cursor').addClass('light-mode');
      }).mouseleave(() => {
        $('.cursor').removeClass('light-mode');
      });
    }
    mousemove();
})(jQuery);

  $(document).mousemove(function(e) {
    var roundCursor = $('.cursor');
    var dot = $('.dot');
    roundCursor.css({ top: e.clientY, left: e.clientX });
    dot.css({ top: e.clientY, left: e.clientX });
  });
});