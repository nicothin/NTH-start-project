document.addEventListener('DOMContentLoaded', function(){

  baron({
    root: '.baron', // Блок, в котором будет кастомный скролл
    scroller: '.baron__scroller',
    bar: '.baron__bar',
    scrollingCls: 'baron--scrolling',
    draggingCls: 'baron--dragging',
    barOnCls: 'baron--scrollbar',
  });

});
