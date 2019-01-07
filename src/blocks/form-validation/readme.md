Включается при указании на теге `form` атрибута `data-check-form`.

Для текстовых полей: по событию `blur` содержимое поля анализируется на соответствие регулярному выражению из атрибута `data-check-pattern`.

Для чекбоксов: по событию `change` проверяется соответствия состояния и `data-check-state="on"` (`off`).

<p class="alert  alert--warning">Блок не имеет классов, упоминаемых в разметке. Чтобы взять его в сборку, упомяните <code>form-validation</code> в <code>config.js#alwaysAddBlocks</code>.</p>

<p class="alert  alert--warning">Pug «умно» обрабатывает строки, убирая обратный слеш (<code>\</code>), этот символ в pug нужно экранировать: не <code>\d</code>, а <code>\\d</code>. <br>См. пример кода ниже.</p>
