$( document ).ready(function() {
  $('.js-library-code-toggler').on('click', function(){
    $(this).closest('.js-library-code-parent').find('.js-library-code').slideToggle();
  });
});
