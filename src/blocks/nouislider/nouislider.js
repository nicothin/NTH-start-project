document.addEventListener('DOMContentLoaded', function(){

  if(document.getElementById('demo-nouislider')) {

    var demoNoUiSlider = document.getElementById('demo-nouislider');
    var demoNoUiSliderStartInput = document.getElementById('demo-nouislider-start');
    var demoNoUiSliderEndInput = document.getElementById('demo-nouislider-end');
    noUiSlider.create(demoNoUiSlider, {
      start: [demoNoUiSliderStartInput.value, demoNoUiSliderEndInput.value],
      connect: true,
      step: 1,
      range: {
        'min': 0,
        'max': 100
      }
    });
    demoNoUiSlider.noUiSlider.on('update', function( values, handle ) {
      var value = values[handle];
      if ( handle ) {
        demoNoUiSliderEndInput.value = Math.round(value);
      } else {
        demoNoUiSliderStartInput.value = Math.round(value);
      }
    });
    demoNoUiSliderEndInput.addEventListener('change', function(){
      demoNoUiSlider.noUiSlider.set([null, this.value]);
    });
    demoNoUiSliderStartInput.addEventListener('change', function(){
      demoNoUiSlider.noUiSlider.set([this.value, null]);
    });

  }

});
