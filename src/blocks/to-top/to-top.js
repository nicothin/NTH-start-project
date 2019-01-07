/* global document window performance requestAnimationFrame */

const ready = require('../../js/utils/documentReady.js');

ready(function(){

  if(document.getElementById('to-top')) {

    document.getElementById('to-top').addEventListener('click', function(e) {
      e.preventDefault();
      var scroll = window.pageYOffset;
      var targetTop = 0;
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
    }, false);

    window.addEventListener('scroll', visibilityToggle);
    visibilityToggle();

  }

  function visibilityToggle() {
    if(window.pageYOffset >= 500) {
      document.getElementById('to-top').classList.add('to-top--visible');
    }
    else {
      document.getElementById('to-top').classList.remove('to-top--visible');
    }
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

});
