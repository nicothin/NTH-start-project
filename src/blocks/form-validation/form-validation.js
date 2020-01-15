/* global document */

const closest = require('closest');
const ready = require('../../js/utils/documentReady.js');

ready(function(){

  // Для всех форм страницы
  const forms = Array.from(document.querySelectorAll('form[data-check-form]'));
  forms.forEach(function(form){
    // Подпишемся на событие отправки
    form.addEventListener('submit', function(e){
      let valid = true;
      // Проверим все текстовые инпуты
      const fieldsText = Array.from(form.querySelectorAll('input[data-check-pattern]'));
      fieldsText.forEach(function(input){
        if(!checkFieldText(input)) valid = false;
      });
      // Проверим все чекбоксы
      const fieldsCheckbox = Array.from(form.querySelectorAll('input[data-check-state]'));
      fieldsCheckbox.forEach(function(input){
        if(!checkFieldCheckbox(input)) valid = false;
      });
      // Если были ошибки, не отправляем форму
      if(!valid) e.preventDefault();
    });
  });

  // Для всех проверяемых текстовых полей
  const fieldsText = Array.from(document.querySelectorAll('input[data-check-pattern]'));
  fieldsText.forEach(function(input){
    let hasBeenAlreadyBlured = false;
    input.addEventListener('blur', function(){ 
      checkFieldText(input); 
      if(!hasBeenAlreadyBlured) hasBeenAlreadyBlured = true;
    });
    input.addEventListener('input', function(){ if(hasBeenAlreadyBlured) checkFieldText(input); });
  });

  // Для всех проверяемых чекбоксов
  const fieldsCheckbox = Array.from(document.querySelectorAll('input[data-check-state]'));
  fieldsCheckbox.forEach(function(input){
    input.addEventListener('change', function(){ checkFieldCheckbox(input); });
  });

  function checkFieldText(input) {
    const regExp = new RegExp(input.dataset.checkPattern, 'gi');
    const result = regExp.test(input.value);
    const errorClass = 'field-text--error';
    const parent = closest(input, '.field-text');
    result ? parent.classList.remove(errorClass) : parent.classList.add(errorClass);
    return result;
  }

  function checkFieldCheckbox(input) {
    const trueVal = input.dataset.checkState == 'on' ? true : false;
    const result = trueVal === input.checked
    const errorClass = 'field-checkbox__input-wrap--error';
    const parent = closest(input, '.field-checkbox__input-wrap');
    result ? parent.classList.remove(errorClass) : parent.classList.add(errorClass);
    return result;
  }
});
