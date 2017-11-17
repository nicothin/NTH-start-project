document.addEventListener('DOMContentLoaded', function(){

  // Автор кода — Лия Веру

  function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
  }

  $$('.pie-chart').forEach(function(pie) {
    var p = pie.textContent;
    pie.style.animationDelay = '-' + parseFloat(p) + 's';
    pie.setAttribute('data-percent', p)
  });

});
