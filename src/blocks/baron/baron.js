document.addEventListener('DOMContentLoaded', function(){

  // baron('.blocks-demo-custom-scroll');

  baron({
    root: '.baron',
    scroller: '.baron__scroller',
    bar: '.baron__bar',
    scrollingCls: 'baron--scrolling',
    draggingCls: 'baron--dragging'
  });

});
