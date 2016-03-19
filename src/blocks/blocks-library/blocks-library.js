// Не работает в IE11
ready(function(){
  // Открытие/закрытие блока с кодом
  var codeShowTriggers = document.querySelectorAll('.blocks-library__code-show-trigger');
  for (var i = 0; i < codeShowTriggers.length; i++) {
    codeShowTriggers[i].addEventListener('click', function(){
      this.closest('.blocks-library__code-wrapper').querySelector('.blocks-library__code').classList.toggle('blocks-library__code--shown');
    });
  }
});
