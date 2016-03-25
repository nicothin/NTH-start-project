(function(){
  // получим все закрывающих элементы в Сообщениях
  var alertCloseBtns = [].slice.call(document.querySelectorAll('.alert .alert__close') || []);
  // Навесим отслеживание событий клика
  alertCloseBtns.forEach(function(item) {
    item.addEventListener('click', function(){
      // По клику поднимемся к родительскому Сообщению и скроем его
      this.closest('.alert').style.display = 'none';
    });
  });
}());
