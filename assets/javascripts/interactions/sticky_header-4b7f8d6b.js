/**
* JS cleanup for the sticky header. Hides the static header when scroll hits
* the top of the element
*
* @method stickyHeader
* @param {String} fixedTarget - jQuery element selection string for the fixed header
* @param {String} staticTarget - jQuery element selection string for the static header
*/


'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

window.interact.stickyHeader = function(fixedTarget, staticTarget){

  var fixedHeader     = $(fixedTarget);
  var staticHeader    = $(staticTarget);

  if (!staticHeader.length) { return false; }

  var transitionStart = staticHeader.offset().top - 15;

  $(window).scroll(function(){
    if ($(window).scrollTop() >= transitionStart){
      staticHeader.css({opacity: 0});
      fixedHeader.css({opacity: 1, zIndex: 10000});
    }
    else {
      staticHeader.css({opacity: 1});
      fixedHeader.css({opacity: 0, zIndex: 5000});
    }
  });
};
