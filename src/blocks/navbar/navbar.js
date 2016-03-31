// Переключение открытого/закрытого положений navbar
document.getElementById('navbar-toggler').addEventListener('click', function(){
  this.closest('.navbar').classList.toggle('navbar--open');
});
