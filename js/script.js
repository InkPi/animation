//TweenMax.to(target, duration, {vars: ex. delays, callbacks,eases})

//wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
  // wait until window is loaded - all images, links, css, scripts, fonts, and other media assets
  window.addEventListener("load", function(){
       // run animation code here
       // TweenMax.to(".logo", 2, {x:600});
       // TweenMax.to(".logo", 2, {x:600, onComplete:complete});
       var gradient = TweenMax.to(".bg", 5, {backgroundColor:"#B76E79"});
       var flower = TweenMax.to(".crown", 3, {x:500, y:-300, opacity: 0.7, delay: 0.3});
       var doge = TweenMax.to(".logo", 2, {x:600, opacity:0.5, scale: 2});
       var title= TweenMax.from(".title", 2, {x:500, opacity:0, scale:0.5, delay: 0.5});

  });
});
