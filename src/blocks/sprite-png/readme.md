Из файлов папки `sprite-png/png/` в папку `sprite-png/img/` будет сгенерирован файл спрайта `sprite-ЧИСЛОВОЙ_ИНДЕКС.svg`, который далее будет скопирован в папку сборки.

**Стилевой файл блока генерируется автоматически** и содержит примеси для использования спрайтов. Отдельный файл элемента `sprite-png__demo.scss` содержит вызов примеси, генерирующей стили для всех составных частей спрайта. Пример использования части спрайта для конкретного селектора:

<pre class="code">
  <code>.selector {</code>
  <code>  // $temp-icon-left-arrow — $ИМЯ_ФАЙЛА_КАРТИНКИ ($ в начале)</code>
  <code>  @include sprite($temp-icon-left-arrow);</code>
  <code>}</code>
</pre>

Демонстрационный контент блока (иконки стрелок):

<div class="temp-icon-right-arrow" style="display: inline-block;"></div>
<div class="temp-icon-left-arrow" style="display: inline-block;"></div>
