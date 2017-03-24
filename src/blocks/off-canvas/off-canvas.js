document.addEventListener('click', function(event) {
  if(event.target.dataset.toggle === 'off-canvas') {
    event.preventDefault();
    document.getElementById('off-canvas').classList.toggle('off-canvas--open');
  }
});
