'use strict';

var head = document.head || document.getElementsByTagName('head')[0];

var i;
function src(el, flag) {
  if (el) {
    if (flag) {
      if (i === undefined) {
        i = document.createElement('i');
        i.className = 'preloader';
      }
      el.appendChild(i);
    } else if (i) {
      i.remove();
    }
  }
}

module.exports = src;