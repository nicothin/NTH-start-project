Дополнительные стили для картинок с указанным `object-fit: ...;` добавится с помощью PostCSS-плагина на этапе постобработки css.

<p class="alert  alert--warning">Блок не имеет классов, упоминаемых в разметке. Чтобы взять его в сборку, упомяните <code>object-fit-polyfill</code> в <code>config.js#alwaysAddBlocks</code>.</p>

Инструменты: [полифил](https://github.com/bfred-it/object-fit-images), [PostCSS-плагин, реализующий автоматическое применение полифила](https://github.com/ronik-design/postcss-object-fit-images).
