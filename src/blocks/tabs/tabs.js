document.addEventListener('DOMContentLoaded', function(){

  // в процессе разработки

  document.addEventListener('click', function(event) {
    if(event.target.dataset.toggle === 'tab') {
      event.preventDefault();
      var target = event.target.hash === undefined ? event.target.dataset.target : event.target.hash;
      console.log( target );
      if ( target !== undefined ) {
        console.log( document.querySelector(target) );
      }
    }
  });

});
