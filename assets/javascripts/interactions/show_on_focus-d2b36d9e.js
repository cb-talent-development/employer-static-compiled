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
