document.addEventListener('click', function(event) {
  event.preventDefault();
  if(event.target.dataset.toggle === 'off-canvas') {
    document.getElementById('off-canvas').classList.toggle('off-canvas--open');
  }
});
