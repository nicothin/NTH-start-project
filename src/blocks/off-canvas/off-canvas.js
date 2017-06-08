document.addEventListener('DOMContentLoaded', function(){

  document.addEventListener('click', function(event) {
    if(event.target.dataset.toggle === 'off-canvas') {
      event.preventDefault();
      offCanvasToggle();
    }
    // возможность совместить переключение off-canvas и встроенную функ-сть
    if(event.target.dataset.toggleNative === 'off-canvas') {
      offCanvasToggle();
    }
  });

  // реакция на свайп
  // document.addEventListener('touchstart', handleTouchStart, false);
  // document.addEventListener('touchmove', handleTouchMove, false);
  // var xDown = null;
  // var yDown = null;
  // function handleTouchStart(evt) {
  //   xDown = evt.touches[0].clientX;
  //   yDown = evt.touches[0].clientY;
  // };
  // function handleTouchMove(evt) {
  //   if ( ! xDown || ! yDown ) {
  //     return;
  //   }

  //   var xUp = evt.touches[0].clientX;
  //   var yUp = evt.touches[0].clientY;

  //   var xDiff = xDown - xUp;
  //   var yDiff = yDown - yUp;
  //   if(Math.abs( xDiff )+Math.abs( yDiff )>100){ //to deal with to short swipes

  //     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
  //       if ( xDiff > 0 ) {/* left swipe */
  //         document.getElementById('off-canvas').classList.remove('off-canvas--open');
  //       } else {/* right swipe */
  //         document.getElementById('off-canvas').classList.add('off-canvas--open');
  //       }
  //     }
  //     // else {
  //     //   if ( yDiff > 0 ) {/* up swipe */
  //     //     alert('Up!');
  //     //   } else { /* down swipe */
  //     //     alert('Down!');
  //     //   }
  //     // }
  //     /* reset values */
  //     xDown = null;
  //     yDown = null;
  //   }
  // };

  function offCanvasToggle() {
    document.getElementById('off-canvas').classList.toggle('off-canvas--open');
  }

});
