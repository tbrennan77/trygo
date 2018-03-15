var Site = (function() {
  "use strict";

  var init = function() {
    modalInit();
    flickityInit();
  }


  // Modal
  // ==================================================
  var modalVideo;
  var modalInit = function() {
    // Initialize YouTube Video API
    var script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";

    var firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    window.onYouTubeIframeAPIReady = function() {
      modalVideo = new YT.Player("modal-video-player");
    }

    // Bind event handlers
    var modalOpenLinks = document.querySelectorAll(".js-modal");
    if (modalOpenLinks.length) {
      modalOpenLinks.forEach(function(el) {
        el.addEventListener("click", modalOpen);
      });
    }

    var modalCloseLinks = document.querySelectorAll(".js-modal-close");
    if (modalCloseLinks.length) {
      modalCloseLinks.forEach(function(el) {
        el.addEventListener("click", modalClose);
      });
    }
  }

  var modalOpen = function(e) {
    e.preventDefault();

    var target = this.getAttribute("data-modal");

    document.querySelector(".modal[data-modal=" + target + "]").classList.add("is-open");
    modalVideo.playVideo();
  }

  var modalClose = function(e) {
    e.preventDefault();

    document.querySelector(".modal.is-open").classList.remove("is-open");
    modalVideo.stopVideo();
  }


  // Flickity
  // ==================================================
  var flickityInit = function() {
    var $flickity = document.querySelector(".js-flickity");
    var flickity = new Flickity($flickity, {
      pageDots: false,
      wrapAround: true,
    });
  }

  return {
    init: init
  };
})();

Site.init();
