$(document).ready(function(){

  // Заполняем блоки, демонстрирующие код
  $('.docs-demo').each(function() {
    var codeHtml =$(this).find('.docs-demo__demo').html();
    var codeArray = $("<div>").text(codeHtml).html().split('\n');
    if(!codeArray[codeArray.length]) {
      codeArray.splice((codeArray.length - 1), 1); // убираем последний элемент
    }
    if(!codeArray[0]) {
      codeArray.splice(0, 1); // убираем первый элемент
    }
    var tab = codeArray[0].match( /^\s*/ );
    codeArray.forEach(function(item, i) {
      codeArray[i] = '<span class="code__line">'+codeArray[i].replace( tab, '' )+'</span>';
    });
    $(this).find('.code__syntax').append(codeArray);
    // console.log(codeArray);
  });

  // Обрабатываем клик показа/сокрытия блока с кодом
  $('.docs-content__code-trigger').on('click', function() {
    $(this).closest('.docs-content__code-wrapper').find('.docs-content__code-demo').slideToggle(150);
  });

});
