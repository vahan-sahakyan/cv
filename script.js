'use strict';

const copyToClipboard = element => {
  let range = document.createRange();
  range.selectNode(document.querySelector(element));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand('copy');
  window.getSelection().removeAllRanges(); // to deselect
};
const links = {
  github: 'https://github.com/vahan-sahakyan',
  linkedin: 'https://www.linkedin.com/in/vahan-sahakyan/',
};
const addGoTo = (element, url) => {
  document.querySelector(element).addEventListener('click', e => {
    e.preventDefault();
    window.open(url);
  });
};
addGoTo('.ln-svg', links.linkedin);
addGoTo('.gh-svg', links.github);
