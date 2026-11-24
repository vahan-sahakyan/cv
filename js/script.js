"use strict";

/** Rotates the sheet by 90deg steps, for landscape screenshots */
const rotate = (function () {
  let degree = 0;
  return function (times = 1) {
    document.querySelector(".a4").style.transform = `rotate(${(degree += 90 * times)}deg)`;
  };
})();

window.actions = { rotate };
