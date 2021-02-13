/* global document */

import ready from 'Utils/documentReady.js';
import autosize from 'autosize';

ready(function() {

  autosize(document.querySelectorAll('textarea'));

});
