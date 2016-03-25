(function(){
  // получим все закрывающих элементы в Алертах
  var alertCloseBtns = [].slice.call(document.querySelectorAll('.alert .alert__close') || []);
  // Навесим отслеживание событий клика
  alertCloseBtns.forEach(function(item) {
    item.addEventListener('click', function(){
      // По клику поднимемся к родительскому Алерту и скроем его
      this.closest('.alert').style.display = 'none';
    });
  });
}());
