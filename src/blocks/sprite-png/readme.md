Из файлов `sprite-png/png/` генерируется файл спрайта `sprite-png/img/sprite-ЧИСЛОВОЙ_ИНДЕКС.svg`.

**Стилевой файл блока генерируется автоматически** и содержит примеси для использования спрайтов.

Пример использования для конкретного селектора:

<pre class="code">
  <code>.selector {</code>
  <code>  @include sprite($icon-left); // $icon-left — $ИМЯ-ФАЙЛА-КАРТИНКИ</code>
  <code>}</code>
</pre>
