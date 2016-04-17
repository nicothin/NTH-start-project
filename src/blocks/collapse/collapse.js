$('[data-toggle="collapse"]').on('click.nth.collapse', function(e){
  e.preventDefault();
  // Определим ID целевого элемента
  var $collapseBlockId = $(this).attr('href');
  if(!$collapseBlockId) {
    $collapseBlockId = $(this).data('target');
  }
  // Размернем или свернём целевой элемент
  $($collapseBlockId).slideToggle(250);
  // Найдем все триггеры открытия и переключим им классы
  var $triggers = $('[data-toggle="collapse"][href="'+$collapseBlockId+'"], [data-toggle="collapse"][data-target="'+$collapseBlockId+'"]');
  $triggers.each(function(){
    $(this).toggleClass($(this).data('toggle-this-class'));
  });
  // Сменим aria-expanded
  $triggers.each(function(){
    if($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', 'true');
    }
    else {
      $(this).attr('aria-expanded', 'false');
    }
  });
});
