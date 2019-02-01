/* global document */

const closest = require('closest');
const ready = require('../../js/utils/documentReady.js');

ready(function(){

  var fields = document.querySelectorAll( '.field-num' );
  Array.prototype.forEach.call( fields, function( field ) {
    const input = field.querySelector('.field-num__input');
    const btnPlus = field.querySelector('.field-num__btn--plus');
    const btnMinus = field.querySelector('.field-num__btn--minus');
    const valueMin = input.getAttribute('min') ? input.getAttribute('min') : -Infinity;
    const valueMax = input.getAttribute('max') ? input.getAttribute('max') : Infinity;
    const valueStep = input.getAttribute('step') ? input.getAttribute('step') : 1;
    // console.log(input, btnMinus, btnPlus);
    // console.log(valueMin, valueMax, valueStep);
    // Нажатия кнопок
    field.addEventListener('click', function(event){
      if(event.target.classList.contains('field-num__btn')) {
        // это клик по кнопке
      }
    });
  });

});
