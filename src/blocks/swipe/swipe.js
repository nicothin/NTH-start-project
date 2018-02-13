document.addEventListener('DOMContentLoaded', function(){

  if(document.getElementById('swipe-demo')) {

    window.mySwipe = new Swipe(document.getElementById('swipe-demo'), {
      startSlide: 0,
      speed: 400,
      auto: 3000,
      draggable: true,
      continuous: true,
      disableScroll: true,
      stopPropagation: true,
      callback: function(index, elem, dir) {},
      transitionEnd: function(index, elem) {}
    });

    // включить видимость блока (по умолчанию скрыт)
    document.getElementById('swipe-demo').classList.add('swipe--enable');

  }
});
