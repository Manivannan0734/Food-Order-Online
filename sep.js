
	
          
              
  $('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;

    function move(newIndex) {
    var animateLeft, slideLeft;

    advance();

    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');

    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
      display: 'none'
      });
      $slides.eq(newIndex).css({
      left: 0
      });
      $group.css({
      left: 0
      });
      currentIndex = newIndex;
    });
    }

    function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
      } else {
      move(0);
      }
    }, 4000);
    }

    $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
    });

    $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
    });

    $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');

    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
    });

    advance();
  });




const counter = document.querySelector('.counter');
const add = document.querySelector('.add');
const sub = document.querySelector('.sub');
let count = 0;
add.addEventListener("click",()=>{
  count++;
  counter.innerHTML=count;

})

sub.addEventListener("click",()=>{
  count = count-1;
  counter.innerHTML=count;

})

const cntr = document.querySelector('.cntr');
const ad = document.querySelector('.ad');
const sb = document.querySelector('.sb');
let ca = 0;
ad.addEventListener("click",()=>{
  ca++;
  cntr.innerHTML=ca;

})

sb.addEventListener("click",()=>{
  ca = ca-1;
  cntr.innerHTML=ca;

})
 

const cntr3 = document.querySelector('.cntr3');
const ad3 = document.querySelector('.ad3');
const sb3 = document.querySelector('.sb3');
let ca3 = 0;
ad3.addEventListener("click",()=>{
  ca3++;
  cntr3.innerHTML=ca3;

})

sb3.addEventListener("click",()=>{
  ca3 = ca3-1;
  cntr3.innerHTML=ca3;

})

const roastCounter = document.querySelector('.roastCounter');
const adroast = document.querySelector('.adroast');
const subroast = document.querySelector('.subroast');
let rcounter= 0;
adroast.addEventListener("click",()=>{
  rcounter++;
  rcounter.innerHTML=rcounter;

})

subroast.addEventListener("click",()=>{
  rcounter = rcounter-1;
  rcounter.innerHTML=rcounter;

})










