document.addEventListener('DOMContentLoaded', function(){

  var tabsParentClassName = 'tabs';
  var shownTabClassName = 'tabs__content-item--active';

  document.addEventListener('click', function(event) {
    if(event.target.dataset.toggle === 'tab') {
      event.preventDefault();
      var target = event.target.hash === undefined ? event.target.dataset.target : event.target.hash;
      // console.log( target );
      if ( target !== undefined ) {
        var tabsParent = document.querySelector(target).closest('.'+tabsParentClassName);
        tabsParent.querySelectorAll('.'+shownTabClassName).forEach(function(item){
          item.classList.remove(shownTabClassName);
        });
        tabsParent.querySelector(target).classList.add(shownTabClassName);
      }
    }
  });

  // Добавление метода .closest() (полифил, собственно)
  (function(e){
   e.closest = e.closest || function(css){
     var node = this;

     while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
     }
     return null;
   }
  })(Element.prototype);

});
