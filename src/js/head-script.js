// Браузер и ОС
document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
function cth(c){document.documentElement.classList.add(c)}
'ontouchstart' in window?cth('touch'):cth('no-touch');
if(typeof InstallTrigger!=='undefined')cth('firefox');
if(/constructor/i.test(window.HTMLElement)||(function(p){return p.toString()==="[object SafariRemoteNotification]"})(!window['safari']||(typeof safari!=='undefined'&&safari.pushNotification)))cth('safari');
if(/*@cc_on!@*/false||!!document.documentMode)cth('ie');
if(!(/*@cc_on!@*/false||!!document.documentMode)&&!!window.StyleMedia)cth('edge');
if(!!window.chrome&&(!!window.chrome.webstore||!!window.chrome.runtime))cth('chrome');
if(~navigator.appVersion.indexOf("Win"))cth('windows');
if(~navigator.appVersion.indexOf("Mac"))cth('osx');
if(~['iPad','iPhone','iPod'].indexOf(navigator.platform))cth('ios');
if(~navigator.appVersion.indexOf("Linux"))cth('linux');

// Добавление 1vh (использование: height: 100vh; height: calc(var(--vh, 1vh) * 100);) для фикса 100vh на мобилках
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Добавление css-scroll-size для борьбы с проблемами скроллируемых блоков
document.addEventListener("DOMContentLoaded", () => {
  const outer = document.createElement('div');
  const inner = document.createElement('div');
  outer.style.overflow = 'scroll';
  outer.classList.add('scrollbar');
  document.body.appendChild(outer);
  outer.appendChild(inner);
  const scrollbarSize = outer.offsetWidth - inner.offsetWidth;
  document.body.removeChild(outer);
  document.documentElement.style.setProperty('--css-scroll-size', `${scrollbarSize}px`);
});
