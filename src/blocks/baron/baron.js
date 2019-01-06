const ready = require('../../js/documentReady.js');
const baron = require('baron');

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
