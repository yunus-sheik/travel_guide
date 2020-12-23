"use strict";

var toggleClass = function toggleClass(e) {
  var parentElement = e.parentNode.offsetParent;

  if (e.checked) {
    parentElement.classList.add("selectedCard");
  } else {
    parentElement.classList.remove("selectedCard");
  }
};