
  document.addEventListener('DOMContentLoaded', function() {



  var typed =  new Typed('#typed', {
    startDelay: 2000,

    cursorChar: '|',
    // shuffle: true,

    strings: [
    'learning with', 
    'presenting to',    
    'having fun with', 
    'working on stuff for',
    'discovering new things with'
 
    // 'working on stuff',
    // 'working on stuff',
    // 'working on stuff'

    ],
    

    typeSpeed: 70,
    backSpeed: 0,
    backDelay: 1500,
    fadeOut: true,
    loop: true

  });

});




  // new Typed('#typed5', {
  //   strings: ['1 Some <i>strings</i> with', '2 Some <strong>HTML</strong>', '3 Chars &times; &copy;'],
  //   typeSpeed: 0,
  //   backSpeed: 0,
  //   shuffle: true,
  //   cursorChar: '_',
  //   smartBackspace: false,
  //   loop: true
  // });


function openForm() {

   
  var getAllDisappear = document.getElementsByClassName('disappear');
  for (var i = 0; i < getAllDisappear.length; ++i) {
      getAllDisappear[i].style.animation = "fadeOut 1s forwards";
  }

    document.getElementById("form_overlay").style.animation = "test 1.5s 0.3s forwards";
    document.getElementById("overlay-content").style.animation = "fadeIn 1s 1s forwards";

}


function closeForm() {

  var getAllDisappear = document.getElementsByClassName('disappear');
  for (var i = 0; i < getAllDisappear.length; ++i) {
      getAllDisappear[i].style.animation = "fadeIn 1s forwards";
  }

  document.getElementById("form_overlay").style.animation = "test2 1s forwards";
  document.getElementById("overlay-content").style.animation = "fadeOut 0.2s forwards";

}

//////////////////////////////////////////////////////

function openAbout() {

  var getAllDisappear = document.getElementsByClassName('disappear');
  for (var i = 0; i < getAllDisappear.length; ++i) {
      getAllDisappear[i].style.animation = "fadeOutHalf 1s forwards";
  }

    document.getElementById("about_overlay").style.animation = "aboutAnimation 1.5s 0.3s forwards";
    document.getElementById("about_overlay_content").style.animation = "fadeIn 1s 1s forwards";

}


function closeAbout() {
  var getAllDisappear = document.getElementsByClassName('disappear');
  for (var i = 0; i < getAllDisappear.length; ++i) {
      getAllDisappear[i].style.animation = "fadeInHalf 1s forwards";
  }
  document.getElementById("about_overlay").style.animation = "aboutAnimationClose 0.2s forwards";
  document.getElementById("about_overlay_content").style.animation = "fadeOut 0.2s forwards";

}
