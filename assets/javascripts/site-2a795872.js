'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

window.interact.watchApplyDiscount = function() {

  var panel  = $('#apply-discount');
  var links  = $('.cart__apply-discount-link');
  var arrows = $('.promo-code-arrow');

  panel.hidden = true;
  panel.hide();
  panel.removeClass('hidden');

  links.click(function() {
    panel.hidden = !panel.hidden;
    if (panel.hidden == true) {
      panel.slideUp("fast");
      arrows.removeClass('arrow--up');
      arrows.addClass('arrow--down');
    }
    else {
      panel.slideDown("fast");
      arrows.removeClass('arrow--down');
      arrows.addClass('arrow--up');
    }
  });
};
/**
* Image/copy carousel
*
* @method objectCarousel
* @param {String} parent - jQuery element selection string for carousel wrapper element
*/


'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

window.interact.objectCarousel = function(parent){

  var carousel         = $(parent);

  var carouselDots     = $('.carousel__dot', carousel);
  var carouselArrows   = $('.carousel__arrow', carousel);
  var carouselObjects  = $('.carousel__grouping', carousel);

  var objectClass      = '.carousel__object';
  var leftArrowClass   = 'carousel__arrow--left';

  var duration         = 500;
  var pauseTiming      = 5000;
  var isAnimating      = false;
  var totalStates      = (carouselDots.length - 1);
  var animationTimeout = null;

  var currentState     = 0;
  var nextStateRight   = 1;
  var nextStateLeft    = totalStates;

  /**
  * Animates items into the next state
  *
  * @method animateNextState
  * @param {String} direction - direction of movement ('left or 'right')
  * @param {Int} nextState - index of incoming state
  */

  var animateNextState = function(direction, nextState){
    preventOverflow();
    resetAutomaticInterval();

    shiftTo(direction);
    shiftFrom(direction, nextState);
    setupStates(nextState);
    updateDots(nextState);
  }

  /**
  * Protects against rapid-fire click events for cleaner animations
  *
  * @method preventOverflow
  */

  var preventOverflow = function(){
    isAnimating = true;

    setTimeout(function(){
      isAnimating = false;
    }, (duration + 10));
  }

  /**
  * Resets automatic state change interval
  *
  * @method resetAutomaticInterval
  */

  var resetAutomaticInterval = function(){
    clearTimeout(animationTimeout);

    animationTimeout = setTimeout(function(){
      animateNextState('right', nextStateRight);
    }, pauseTiming);
  }

  /**
  * Shifts current items out of view
  *
  * @method shiftTo
  * @param {String} direction - direction of movement ('left or 'right')
  */

  var shiftTo = function(direction){
    var marginLeft = ('left' == direction) ? '100%' : '-100%';

    $.each(carouselObjects, function(index, wrapper){
      var objBlock = $(objectClass, $(wrapper)).eq(currentState);
      $(objBlock).animate({marginLeft: marginLeft, opacity: 0}, duration, function(){
        $(this).addClass('hidden').removeClass('active').removeAttr('style');
      });
    });
  }

  /**
  * Shifts next items into view
  *
  * @method shiftTo
  * @param {String} direction - direction of movement ('left or 'right')
  * @param {Int} nextState - index of incoming state
  */

  var shiftFrom = function(direction, nextState){
    var marginLeft = ('left' == direction) ? '-100%' : '100%';

    $.each(carouselObjects, function(index, wrapper){
      var objBlock = $(objectClass, $(wrapper)).eq(nextState);
      $(objBlock).css({marginLeft: marginLeft, opacity: 0}).addClass('active').removeClass('hidden');
      $(objBlock).animate({marginLeft: 0, opacity: 1}, duration, function(){
        $(this).removeAttr('style');
      });
    });
  }

  /**
  * Calculates next states based upon current transition
  *
  * @method setupStates
  * @param {Int} nextState - new state to calculate from
  */

  var setupStates = function(nextState){
    currentState   = nextState;
    nextStateLeft  = (0 == nextState) ? totalStates : (nextState - 1);
    nextStateRight = (totalStates == nextState) ? 0 : (nextState + 1);
  };

  /**
  * Update dot styling to match current state
  *
  * @method updateDots
  * @param {Int} nextState - new state to calculate from
  */

  var updateDots = function(nextState){
    carouselDots.eq(nextState).addClass('active');
    carouselDots.not(':eq(' + nextState + ')').removeClass('active');
  }

  /**
  * Arrow click events
  */

  carouselArrows.on('click touchend', function(evt){
    evt.preventDefault();
    if (isAnimating){ return false; }

    if ($(this).hasClass(leftArrowClass)){
      animateNextState('left', nextStateLeft);
    }
    else {
      animateNextState('right', nextStateRight);
    }
  });

  /**
  * Dot click events
  */

  carouselDots.on('click touchend', function(evt){
    evt.preventDefault();
    if (isAnimating || $(this).hasClass('active')){ return false; }

    var dotState = $(this).index();
    var direction = (dotState < currentState) ? 'left' : 'right';

    animateNextState(direction, dotState);
  });

  /**
  * Initiate timing state changes
  */

  animationTimeout = setTimeout(function(){
    animateNextState('right', nextStateRight);
  }, pauseTiming);
};
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
'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

window.interact.watchMobileMenu = function() {

  var mobileMenuLink = $('#mobile-menu-link');
  var mobileMenu     = $('#mobile-menu');

  mobileMenu.hidden = true;
  mobileMenu.hide();
  mobileMenu.removeClass('hidden');

  $(window).resize(function() {
    mobileMenu.hidden = true;
    mobileMenu.hide();
  });

  mobileMenuLink.click(function() {
    mobileMenu.hidden = !mobileMenu.hidden;
    if (mobileMenu.hidden == true) {
      mobileMenu.hide();
    }
    else {
      mobileMenu.show()
    };
  });
};
'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

window.interact.modal = function(modalName, openLink) {

  var openLinks  = $('.' + openLink);
  var closeLinks = $('.close-modal');
  var modalBack  = $('#modal-background');
  var modalWrapper = $('.modal__positioning');
  var modalForm  = $('#' + modalName);
  var video, videoSource;

  // modals start with '.hidden' in HTML to prevent load order race between HTML/JS
  modalForm.hide();
  modalBack.hide();
  modalWrapper.hide();
  modalForm.removeClass('hidden');
  modalBack.removeClass('hidden');
  modalWrapper.removeClass('hidden');

  // binding to all close links; click on one modal hides all modals
  closeLinks.click(function() {
    event.preventDefault();

    video = $('#' + modalName + " iframe")

    if (video.length > 0) {
      // nukes (then restores) video source to stop playback
      // actual pausePlayback API requires cross origin Window message, possibly blocked
      videoSource = $(video).attr("src");
      $(video).attr("src","");
      $(video).attr("src",videoSource);
    };

    modalForm.hide();
    modalBack.hide();
    modalWrapper.hide();
  });

  openLinks.click(function() {
    event.preventDefault();

    // required
    modalForm = $('#' + modalName);
    video = $('#' + modalName + " iframe")

    // guards against showing background when modal not found
    if (modalForm.length >= 1) {

      // default modals can scroll, but located at the top of the page
      // .modal--video does not scroll, position fixed
      if (!modalForm.hasClass("modal--video")) {
        window.scrollTo(0, 0);
      };

      modalBack.show();
      modalForm.show();
      modalWrapper.show();
    }
    else {
      console.log("ERROR: link asked for a modal named #" + modalName + " but it wasn't found on the page.");
    };
  });
};
'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

window.interact.securityCodeHelper = function (target, payload) {

  var input;
  var visa       = /^4[0-9]{6,}/;
  var mastercard = /^5[1-5][0-9]{5,}/;
  var amex       = /^3[47][0-9]{5,}/;
  var discover   = /^6(?:011|5[0-9]{2})[0-9]{3,}/;

  $(payload).hide();
  $(payload).removeClass("hidden");

  $(target).keyup(function() {
    input = $(target).val();

    // remove whitespace chars
    input = input.replace(/\s+/g, '');
    input = input.replace(/-+/g, '');

    if (visa.test(input) || discover.test(input) || mastercard.test(input)) {
      $(payload + " #amex").hide();
      $(payload + " #visa").show();
      $(payload + " div").text("3 digit code on back of card.");
      $(payload).fadeIn("fast");
    }
    else if (amex.test(input)) {
      $(payload + " #amex").show();
      $(payload + " #visa").hide();
      $(payload + " div").text("4 digit code on front of card.");
      $(payload).fadeIn("fast");
    }
    else {
      $(payload).hide();
    };
  });
};
'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

window.interact.showOnFocus = function (target,payload) {

  $(payload).hide();
  $(payload).removeClass("hidden");

  $(target).focus(function() {
    $(payload).fadeIn("fast");
  });

  $(target).blur(function() {
    $(payload).hide();
  });
};
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



'use strict';
if(typeof window.interact === 'undefined') { window.interact = {} }

jQuery(function(){
  // modals must be added manually, this is a likely refactor if this gets hard
  // arguements are ( 'my-modal-id' , 'class-on-links-to-open' ) just like that.
  window.interact.modal('modal--email-us', 'modal-open--email-us');
  window.interact.modal('modal--change-billing-address', 'modal-open--change-billing-address');
  window.interact.modal('modal--change-company-address', 'modal-open--change-company-address');

  window.interact.modal('modal--video-sports', 'modal-open--video-sports');
  window.interact.modal('modal--video-wynn', 'modal-open--video-wynn');
  window.interact.modal('modal--video-nucor', 'modal-open--video-nucor');
  window.interact.modal('modal--video-vitamin', 'modal-open--video-vitamin');
  window.interact.modal('modal--video-rockwater', 'modal-open--video-rockwater');
  window.interact.modal('modal--video-novo', 'modal-open--video-novo');

  window.interact.watchMobileMenu();

  window.interact.watchApplyDiscount();

  window.interact.showOnFocus('#password-field', '#password-helper');

  window.interact.securityCodeHelper('card-number-field', '#security-code-helper');

  window.interact.smoothScroll('.product-subnav a[href*=#]:not([href=#])');

  window.interact.objectCarousel('.header--home, .home__top-carousel');
  window.interact.objectCarousel('.home__background-cover.home__stories');

  window.interact.stickyHeader('.sticky-nav', '#overview-link-anchor');

  window.interact.loadExpensiveThings();

});
