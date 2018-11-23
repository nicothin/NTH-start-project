Из файлов папки `sprite-svg/svg/` в папку `sprite-svg/img/` будет сгенерирован файл спрайта `sprite.svg`, который далее будет скопирован в папку сборки. Стилевой файл блока не используется. SVG-файлы будут оптимизированы перед сборкой в спрайт. Сам спрайт имеет вид:

<pre class="code">
  <code>&lt;svg xmlns="http://www.w3.org/2000/svg"&gt;</code>
  <code>  &lt;symbol id="icon-boo" viewBox="0 0 30 30"&gt;&lt;path d="..."/&gt;&lt;/symbol&gt;</code>
  <code>  &lt;symbol id="icon-bs" viewBox="0 0 28 28"&gt;&lt;path d="..."/&gt;&lt;/symbol&gt;</code>
  <code> ...</code>
  <code>&lt;/svg&gt;</code>
</pre>

Для вставки на страницу используйте конструкции <code>svg &gt; use</code> со ссылками на <code>id</code> символа:

<pre class="code">
  <code>svg(width="32", height="32")</code>
  <code>  use(xlink:href="img/sprite.svg#icon-boo")</code>
</pre>

<p class="alert alert--warning">При использовании блока в проекте в сборку берётся <a href="https://www.npmjs.com/package/svg4everybody">svg4everybody</a>.</p>
