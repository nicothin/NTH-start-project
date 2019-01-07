/* global document */

const autosize = require('autosize');
const ready = require('../../js/utils/documentReady.js');

ready(function(){

  autosize(document.querySelectorAll('textarea'));

});
