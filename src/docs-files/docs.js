document.addEventListener('DOMContentLoaded', function(){

  // Проверим запись показа панели доков
  var panelShown = localStorage.getItem('panelShown');
  if(!panelShown) {
    localStorage.setItem('panelShown', '0');
  }
  console.log(panelShown);
  if(panelShown === '1') {
    document.getElementById('in-lib-block-info').classList.add('in-lib-block-info--visible');
  }

  // Следим за кликом и показываем/прячем панель, пишем состояние в LS
  var toggler = document.getElementById('in-lib-block-info__toggler');
  var panel = document.getElementById('in-lib-block-info');
  toggler.onclick = function(){
    if(panel.classList.contains('in-lib-block-info--visible')) {
      panel.classList.remove('in-lib-block-info--visible');
      localStorage.setItem('panelShown', '0');
    }
    else {
      panel.classList.add('in-lib-block-info--visible');
      localStorage.setItem('panelShown', '1');
    }
  }

});
