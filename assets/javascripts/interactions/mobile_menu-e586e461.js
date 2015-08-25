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
