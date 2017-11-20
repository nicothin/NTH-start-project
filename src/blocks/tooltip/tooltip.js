document.addEventListener('DOMContentLoaded', function() {

  var allTooltips = document.querySelectorAll('.tooltip');

  Array.prototype.forEach.call(allTooltips, function (tooltip) {

    var tooltipBtn = tooltip.querySelector('.tooltip__btn');
    var messageWrap = document.createElement('span');
    var message = tooltipBtn.getAttribute('data-tooltip-content');

    messageWrap.setAttribute('role', 'status');
    tooltip.appendChild(messageWrap);

    tooltipBtn.addEventListener('click', function () {
      messageWrap.innerHTML = '';
      // window.setTimeout(function() {
        messageWrap.innerHTML = '<span class="tooltip__bubble">'+ message +'</span>';
      // }, 100);
    });

    document.addEventListener('click', function (e) {
      if (tooltipBtn != e.target) {
        messageWrap.innerHTML = '';
      }
    });

    tooltipBtn.addEventListener('keydown', function(e) {
      if ((e.keyCode || e.which) === 27)
        messageWrap.innerHTML = '';
      });
    });

});
