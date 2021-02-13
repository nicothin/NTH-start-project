/* global document */

const getScrollSize = function () {
  const outer = document.createElement('div');
  const inner = document.createElement('div');
  outer.style.overflow = 'scroll';
  outer.classList.add('scrollbar');
  document.body.appendChild(outer);
  outer.appendChild(inner);
  const scrollbarSize = outer.offsetWidth - inner.offsetWidth;
  document.body.removeChild(outer);
  return scrollbarSize;
}

export default getScrollSize;
