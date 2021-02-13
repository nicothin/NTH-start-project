import ready from 'Utils/documentReady.js';
import baron from 'baron';

ready(function(){

  baron({
    root: '#baron-demo',
    scroller: '.baron__scroller',
    bar: '.baron__bar',
    scrollingCls: 'baron--scrolling',
    draggingCls: 'baron--dragging',
    barOnCls: 'baron--scrollbar',
  });

});
