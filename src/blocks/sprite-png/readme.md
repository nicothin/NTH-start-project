Из файлов `sprite-png/png/` будет сгенерирован файл спрайта `sprite-png/img/sprite-ЧИСЛОВОЙ_ИНДЕКС.svg`, который будет скопирован в папку сборки.

**Стилевой файл блока генерируется автоматически** и содержит примеси для использования спрайтов.

Пример использования для конкретного селектора:

<pre class="code">
  <code>.selector {</code>
  <code>  // $temp-icon-left-arrow — $ИМЯ_ФАЙЛА_КАРТИНКИ ($ в начале)</code>
  <code>  @include sprite($temp-icon-left-arrow);</code>
  <code>}</code>
</pre>
