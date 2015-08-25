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
