'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

window.interact.loadExpensiveThings = function() {

  window.interact.isMobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));

  // Homepage 
  var video = "<video autoplay class='header__bg-video large-screen-only' id='background-video' loop muted poster='data:image/gif,AAAA' preload> <source src='/assets/images/iStock_000014241093BigWeb.mp4' type='video/mp4'> </video>"

  if (!window.interact.isMobile && $("body").hasClass("home-page")) {
    $("#background-video-wrapper").append(video);
  };  

};  
