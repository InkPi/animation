//TweenMax.to(target, duration, {vars: ex. delays, callbacks,eases})

//wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
  // wait until window is loaded - all images, links, css, scripts, fonts, and other media assets
  window.addEventListener("load", function(){
       // run animation code here
       TweenMax.to(".logo", 2, {x:600});

  });
});
