document.addEventListener('DOMContentLoaded', function(){

  function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
  }

  var charts = $$('.pie-chart');

  for (var i = 0; i < charts.length; i++) {
    var size = charts[i].getAttribute('data-size');
    if(!size) size = 100;
    var border = charts[i].getAttribute('data-border');
    if(!border) border = 20;
    var radius = (size / 2) - (border / 2);
    var fullStroke = 2 * 3.141592 * radius;
    var percentText = parseFloat(charts[i].textContent);
    var percent = fullStroke / 100 * percentText;
    var nameSpace = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(nameSpace, 'svg');
    var circle = document.createElementNS(nameSpace, 'circle');
    var circleBack = document.createElementNS(nameSpace, 'circle');
    var title = document.createElementNS(nameSpace, 'title');
    var span = document.createElement('span');
    span.className = 'pie-chart__descr';
    span.innerHTML = charts[i].textContent;

    svg.setAttribute('class', 'pie-chart__svg');
    svg.setAttribute('viewBox', '0 0 ' + size + ' ' + size);
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    circleBack.setAttribute('r', (size / 2));
    circleBack.setAttribute('class', 'pie-chart__circle-back');
    circleBack.setAttribute('cx', size / 2);
    circleBack.setAttribute('cy', size / 2);
    circle.setAttribute('class', 'pie-chart__circle');
    circle.setAttribute('r', radius);
    circle.setAttribute('cx', size / 2);
    circle.setAttribute('cy', size / 2);
    circle.setAttribute('stroke-dasharray', percent + ' ' + fullStroke);
    circle.setAttribute('stroke-width', border);
    title.textContent = charts[i].textContent;

    charts[i].textContent = '';
    svg.appendChild(title);
    svg.appendChild(circleBack);
    svg.appendChild(circle);
    charts[i].appendChild(svg);
    charts[i].appendChild(span);
  }

});
