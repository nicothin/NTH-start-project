/* global document window performance requestAnimationFrame */

const ready = require('../../js/utils/documentReady.js');

ready(function(){

  var links = document.querySelectorAll('[href^="#"][data-scroll-link]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
      var hash = this.href.replace(/[^#]*(.*)/, '$1');
      if(hash && hash !== '#') {
        e.preventDefault();
        var scroll = window.pageYOffset;
        var targetTop = getOffsetRect(document.querySelector(hash)).top - 10; // С поправкой в 10px
        var scrollDiff = (scroll - targetTop) * -1;
        animate({
          duration: 500,
          timing: function(timeFraction) {
            return Math.pow(timeFraction, 4); // https://learn.javascript.ru/js-animation
          },
          draw: function(progress) {
            var scrollNow = scroll + progress * scrollDiff;
            window.scrollTo(0,scrollNow);
          }
        });
      }
    }, false);
  }

  function animate(_ref) {
    var timing = _ref.timing,
        draw = _ref.draw,
        duration = _ref.duration;
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
      var timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
      var progress = timing(timeFraction);
      draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  function getOffsetRect(elem) {
    var box = elem.getBoundingClientRect()
    var body = document.body
    var docElem = document.documentElement
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
    var clientTop = docElem.clientTop || body.clientTop || 0
    var clientLeft = docElem.clientLeft || body.clientLeft || 0
    var top  = box.top +  scrollTop - clientTop
    var left = box.left + scrollLeft - clientLeft
    return { top: Math.round(top), left: Math.round(left) }
  }

});
