// Не работает в IE11
ready(function(){

  // Открытие/закрытие блока с кодом
  var codeShowTriggers = document.querySelectorAll('.blocks-library__code-show-trigger');
  for (var i = 0; i < codeShowTriggers.length; i++) {
    codeShowTriggers[i].addEventListener('click', function(){
      this.closest('.blocks-library__code-wrapper').querySelector('.blocks-library__code').classList.toggle('blocks-library__code--shown');
    });
  }

  // Изменение размера шрифта на произвольном блоке
  var parent, fontSizeEm;
  $('.js-font-resizer')
    .css('font-size', '1em')
    .append('<div class="js-font-resizer__btns"><button class="btn btn--sm js-button-plus">+</button><button class="btn  btn--sm js-button-null">0</button><button class="btn  btn--sm js-button-minus">-</button></div>')
    .on('click', 'button.js-button-plus', function(){
      parent = $(this).closest('.js-font-resizer');
      fontSizeEm = /(\d*\.?\d?)(em)/g.exec(parent.attr('style'));
      parent.css('font-size', parent.css('font-size', parseFloat(fontSizeEm[0], 10) + 0.1 + 'em') );
    }).on('click', 'button.js-button-minus', function(){
      parent = $(this).closest('.js-font-resizer');
      fontSizeEm = /(\d*\.?\d?)(em)/g.exec(parent.attr('style'));
      parent.css('font-size', parent.css('font-size', parseFloat(fontSizeEm[0], 10) - 0.1 + 'em') );
    }).on('click', 'button.js-button-null', function(){
      parent = $(this).closest('.js-font-resizer');
      parent.css('font-size', '1em' );
    });

});
