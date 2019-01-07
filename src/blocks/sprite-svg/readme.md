Из файлов `sprite-svg/svg/` генерируется файл спрайта `sprite-svg/img/sprite.svg`.

<p class="alert  alert--warning">Блок не имеет классов, упоминаемых в разметке. Чтобы взять его в сборку, упомяните <code>sprite-svg</code> в <code>config.js#alwaysAddBlocks</code>.</p>

Для вставки на страницу используйте <code>svg &gt; use</code> со ссылками на <code>id</code> символа:

<pre class="code">
  <code>svg(width="32", height="32")</code>
  <code>  use(xlink:href="img/sprite.svg#icon-boo")</code>
</pre>

<p class="alert alert--warning">При использовании блока в проекте в сборку берётся <a href="https://www.npmjs.com/package/svg4everybody">svg4everybody</a>.</p>
