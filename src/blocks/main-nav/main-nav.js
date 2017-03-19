(function(){

  var toggler = document.getElementById('main-nav-toggler');

  toggler.addEventListener('click', mainNavVisibleToggle);

  function mainNavVisibleToggle(e) {
    e.preventDefault();
    toggler.classList.toggle('main-nav__toggler--close');
    document.getElementById('main-nav').classList.toggle('main-nav--open');
  }

}());
