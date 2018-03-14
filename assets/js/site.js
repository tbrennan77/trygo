var Site = (function() {
  "use strict";

  var init = function() {
    modalInit();
  }

  var modalInit = function() {
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
  }

  var modalClose = function(e) {
    e.preventDefault();

    document.querySelector(".modal.is-open").classList.remove("is-open");
  }

  return {
    init: init
  };
})();

Site.init();
