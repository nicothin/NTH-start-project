document.addEventListener('DOMContentLoaded', function(){
  if (window.isMobile !== undefined) {
    // console.log(isMobile);
    if(isMobile.any) {
      var rootClasses = ' is-mobile';
      for (key in isMobile) {
        if(typeof isMobile[key] === 'boolean' && isMobile[key] && key !== 'any') rootClasses += ' is-mobile--'+key;
        if(typeof isMobile[key] === 'object' && key !== 'other') {
          for (type in isMobile[key]) {
            if(isMobile[key][type]) rootClasses += ' is-mobile--'+key+'-'+type;
          }
        }
      }
      document.documentElement.className += rootClasses;
    }
  }
  else {
    console.log('Классы для мобильных не добавлены: в сборке отсутствует isMobile.js');
  }
});
