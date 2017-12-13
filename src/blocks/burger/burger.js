document.addEventListener('DOMContentLoaded', function(){

  function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
  }

  var burgers = $$('.burger');

  for (var i = 0; i < burgers.length; i++) {
    var burger = burgers[i];
    burger.addEventListener('click', showBurgerTarget);
    function showBurgerTarget() {
      var targetId = this.getAttribute('data-target-id');
      var targetClassToggle = this.getAttribute('data-target-class-toggle');
      if (targetId && targetClassToggle) {
        this.classList.toggle('burger--close');
        document.getElementById(targetId).classList.toggle(targetClassToggle);
      }
    }
  }

});
