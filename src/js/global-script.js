/*
  Поиск ближайшего родителя по селектору
  https://github.com/oneuijs/You-Dont-Need-jQuery/blob/master/README-ru.md#1.6
*/

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    } else {
      el = el.parentElement;
    }
  }
  return null;
}



// Свой код с jQuery

// $( document ).ready(function() {

// });
