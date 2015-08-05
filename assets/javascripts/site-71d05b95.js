window.interact = {}, window.interact.watchApplyDiscount = function () {
  panel = $("#apply-discount"), links = $(".cart__apply-discount-link"), panel.hidden = !0, panel.hide(), panel.removeClass("hidden"), links.click(function () {
    panel.hidden = !panel.hidden, 1 == panel.hidden ? panel.hide() : panel.slideDown(150)
  })
}, window.interact.watchMobileMenu = function () {
  mobileMenuLink = $("#mobile-menu-link"), mobileMenu = $("#mobile-menu"), mobileMenu.hidden = !0, mobileMenu.hide(), mobileMenu.removeClass("hidden"), mobileMenuLink.click(function () {
    mobileMenu.hidden = !mobileMenu.hidden, 1 == mobileMenu.hidden ? mobileMenu.hide() : mobileMenu.show()
  })
}, jQuery(function () {
  console.log("site-71d05b95.js working"), window.interact.watchMobileMenu(), window.interact.watchApplyDiscount()
});
