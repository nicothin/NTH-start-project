(function(){

  var toggler = document.getElementById('main-nav-toggler');

  if(toggler){
    toggler.addEventListener('click', mainNavVisibleToggle);

    function mainNavVisibleToggle(e) {
      e.preventDefault();
      toggler.classList.toggle('burger--close');
      document.getElementById('main-nav').classList.toggle('main-nav--open');
    }
  }

}());
