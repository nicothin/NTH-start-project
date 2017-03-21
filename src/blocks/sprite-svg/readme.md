# svg-спрайт с использованием символов

**ВНИМАНИЕ!** Чтобы использовать ссылки на внешние svg-файлы со спрайтами, используйте [svg4everybody](https://www.npmjs.com/package/svg4everybody) (включен в сборку по умолчанию).

Из файлов папки `svg/` в папку `img/` будет сгенерирован файл спрайта `sprite-svg.svg`.

Сам спрайт имеет вид:

```html
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="icon-1" viewBox="0 0 30 30"><path fill="#444" d="..."/></symbol>
  <symbol id="icon-2" viewBox="0 0 28 28"><path fill="#444" d="..."/></symbol>
</svg>
```

Для вставки на страницу используйте конструкции `svg > use` со ссылками на `id` символа:

```html
<svg width="30" height="30"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite-svg.svg#temp-icon-right-arrow"></use></svg>
```
