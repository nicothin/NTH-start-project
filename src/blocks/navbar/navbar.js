$('#navbar-toggler').on('click', function(){
  $(this).closest('.navbar')
    .find('.navbar__slidable-content').slideToggle(250) // Показываем блок панели
    .end()
    .find('.navbar__toggler-icon').toggleClass('navbar__toggler-icon--open'); // Меняем вид иконки
});
