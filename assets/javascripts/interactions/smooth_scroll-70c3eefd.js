/**
* Attaches click/touch listener for in-page links
* to facilitate smooth scrolling
*
* @method smoothScroll
* @param {String} targets - jQuery element selection string
*/


'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

window.interact.smoothScroll = function (targets) {

  $(targets).on('click touchend', function(event) {
    event.preventDefault()

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          // pixels added to prevent landing on displeasing scroll-nav/fixed-nav transition point 
          scrollTop: (target.offset().top - 50)
        }, 750);
        return false;
      }
    }
  })
};
