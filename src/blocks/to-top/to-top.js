$( document ).ready(function() {

  var t0;

  $('#toTop').hide().on('click', function(event){
    event.preventDefault();
    $('body').animate({scrollTop:0}, 300);
  });

  $(window).on('scroll', function(){
    clearTimeout(t0);
    t0 = setTimeout(function () {
        showScrollTopButton();
      }, 100);
  });

  showScrollTopButton();

  function showScrollTopButton(){
    if ( $(document).scrollTop() >= 500 ) {
      $('#toTop').fadeIn();
    }
    else {
      $('#toTop').fadeOut();
    }
  }

});
