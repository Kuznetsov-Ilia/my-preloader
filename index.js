'use strict';

var head = document.head || document.getElementsByTagName('head')[0];

var i;
function src({el, offset = 0, className}) {
  var _i;
  var timer = setTimeout(() => {
    if (i === undefined) {
      i = document.createElement('i');
    }
    _i = i.cloneNode(true);
    _i.className = className;
    el.appendChild(i);
  }, offset);

  return function () {
    clearTimeout(timer);
    if (_i && _i.remove) {
      _i.remove();
    }
  }
}

module.exports = src;