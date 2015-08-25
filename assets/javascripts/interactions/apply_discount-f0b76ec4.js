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
