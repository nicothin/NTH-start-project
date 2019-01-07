Из файлов `sprite-png/png/` генерируется файл спрайта `sprite-png/img/sprite-ЧИСЛОВОЙ_ИНДЕКС.svg`.

<p class="alert  alert--warning">Блок не имеет классов, упоминаемых в разметке. Чтобы взять его в сборку, упомяните <code>sprite-png</code> в <code>config.js#alwaysAddBlocks</code>.</p>

**Стилевой файл блока генерируется автоматически** и содержит примеси для использования спрайтов.

Пример использования для конкретного селектора:

<pre class="code">
  <code>.selector {</code>
  <code>  @include sprite($icon-left); // $icon-left — $ИМЯ-ФАЙЛА-КАРТИНКИ</code>
  <code>}</code>
</pre>
