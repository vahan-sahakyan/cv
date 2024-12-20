"use strict";

init();

///////////////////////
// DARK MODE

onThemeChange(updateTheme);

///////////////////////
// PDF MODE

const pdfModeBtn = document.querySelector(".pdf-mode-btn");
let isPdfMode = true;
const togglePdfMode = (function () {
  return function (enable = undefined) {
    document.getElementById("pdf-mode-css").disabled =
      enable !== undefined ? !enable : isPdfMode;
    isPdfMode = enable ?? !isPdfMode;
  };
})();

const rotate = (function () {
  let degree = 0;
  return function (times = 1) {
    document.querySelector(".a4").style.transform = `rotate(${(degree +=
      90 * times)}deg)`;
  };
})();

///////////////////////
// HELPERS

/** Initialize the page settings */
function init() {
  updateTheme();
}
/** Updates the theme based on prefered color-scheme */
function updateTheme() {
  const { matches: isLight } = themeMatchMedia();
  document.getElementById("dark-css").disabled = isLight;
}
/** @returns {MediaQueryList} */
function themeMatchMedia() {
  return window.matchMedia("(prefers-color-scheme: light)");
}
/** @param {function} handler */
function onThemeChange(handler) {
  themeMatchMedia().addEventListener("change", handler);
}
/** @param {[string, string]} linkEntryTuple */
function attachOnClickUrlOpener([element, url]) {
  document.querySelector(element).addEventListener("click", (e) => {
    e.preventDefault();
    window.open(url);
  });
}
/** @param {string} str @returns {string} */
function classToWord(str) {
  return str.replace(
    /\.(\w)(\w+)/g,
    /** @param {...string} groups @returns {string} */
    (_, ...groups) => groups[0].toUpperCase() + groups[1]
  );
}
/** Switch between display modes: [true: screenshot, false: normal] */
const screenshotMode = (function () {
  let enabled = false;
  return function (enable) {
    if ([undefined, null].includes(enable))
      return console.error(new UsageError(enable, "boolean"));
    if (enable && !enabled) {
      enabled = !enabled;
      togglePdfMode(true);
      rotate(3);
    } else if (!enable && enabled) {
      enabled = !enabled;
      togglePdfMode(false);
      rotate(1);
    } else if (!enable) {
      togglePdfMode(false);
    } else if (enable) {
      togglePdfMode(true);
    }
    return 0;
  };
})();

///////////////////////
// CUSTOM EXCEPTIONS

class UsageError extends Error {
  constructor(passed, needed) {
    super();
    this.name = "UsageException";
    console.log(passed);
    this.message = `
      \nYou've passed "${passed !== null ? passed : null}" value.
      \nTry to pass a ${needed} value instead
    `;
  }
}

///////////////////////
// AVAILABLE ACTIONS

window.actions = {
  screenshotMode,
  togglePdfMode,
  rotate,
};
