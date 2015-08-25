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
