# Проект с gulp

<table>
  <thead>
    <tr>
      <th>Команда</th>
      <th>Результат</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="22%"><code>npm i</code></td>
      <td>Установить зависимости</td>
    </tr>
    <tr>
      <td><code>npm start</code></td>
      <td>Запустить сборку, сервер и слежение за файлами</td>
    </tr>
    <tr>
      <td><code>port=3004 npm start</code></td>
      <td>Запустить сборку, сервер (на указанном порту) и слежение за файлами</td>
    </tr>
    <tr>
      <td><code>npm start ЗАДАЧА</code></td>
      <td>Запустить задачу с названием ЗАДАЧА (список задач в <code>gulpfile.js</code>)</td>
    </tr>
    <tr>
      <td><code>npm run build</code></td>
      <td>Сборка проекта без карт кода (минифицированый вид, как результат работы)</td>
    </tr>
    <tr>
      <td><code>npm run deploy</code></td>
      <td>Сборка проекта без карт кода и отправка содержимого папки сборки на GH-pages (для корректного сообщения адреса просмотра введите его в <code>./package.json</code>)</td>
    </tr>
  </tbody>
</table>



## Парадигма

- Используется именование классов, файлов и переменных по БЭМ.
- Список использованных в проекте БЭМ-блоков и оп. файлов указан в `./package.json`.
- Каждый БЭМ-блок в своей папке внутри `./src/blocks/` (стили, js, картинки, разметка; обязателен только стилевой файл).
- Есть глобальные файлы: стилевые, js, шрифты, картинки.
- Диспетчер подключения стилей `./src/scss/style.scss` генерируется автоматически при старте любой gulp-задачи.
- Для разметки можно использовать [микрошаблонизацию](https://www.npmjs.com/package/gulp-file-include). А можно и не использовать.



### Блоки

Каждый блок лежит в `./src/blocks/` в своей папке. Каждый блок — как минимум, папка и одноимённый scss-файл.

Возможное содержимое блока:

```bash
demo-block/               # Папка блока
  img/                    # Изображения, используемые блоком и обрабатываемые автоматикой сборки
  some-folder/            # Какая-то сторонняя папка, не обрабатываемые автоматикой
  demo-block.scss         # Главный стилевой файл блока
  demo-block--mod.scss    # Отдельный файл БЭМ-модификатора блока
  demo-block.js           # Главный js-файл блока
  demo-block--mod.js      # js-файл для отдельного БЭМ-модификатора блока
  demo-block.html         # Варианты разметки (как документация блока или как вставляемый микрошаблонизатором фрагмент)
  readme.md               # Какое-то пояснение
```



### Удобное создание нового блока


```bash
# формат: node createBlock.js [имя блока] [доп. расширения через пробел]
node createBlock.js block # создаст только папку блока, block.html и block.scss
node createBlock.js new-block js pug # создаст папку блока, new-block.html, new-block.scss, new-block.js, new-block.pug
node createBlock.js new-block js img # создаст папку блока, new-block.html, new-block.scss, new-block.js, подпапку img/
```

Если блок уже существует, файлы не будут затёрты, но создадутся те файлы, которые ещё не существуют.



## Подключение блоков

Настройки подключаемых файлов указаны в `./package.json`, в секции `configProject`:

```json
"blocks": {
  "page-header": [],
  "page-footer": [
    "__extra-element",
    "--extra-modifier"
  ]
},
"addCssBefore": [
  "./src/scss/variables.scss"
],
"addCssAfter": [
  "./src/scss/print.scss"
],
"addJsBefore": [
  "./src/js/jquery.3.1.1.min.js"
],
"addJsAfter": [
  "./src/js/global-script.js"
],
"addImages": [
  "./src/img/"
],
```

При указанной записи в обработку будут взяты следующие папки и файлы (в указанной последовательности):

```bash
css:
 [ './src/scss/variables.scss',
   './src/blocks/page-header/page-header.scss',
   './src/blocks/page-footer/page-footer.scss',
   './src/blocks/page-footer/page-footer__extra-element.scss',
   './src/blocks/page-footer/page-footer--extra-modifier.scss',
   './src/scss/print.scss' ],
js:
 [ './src/js/jquery.3.1.1.min.js',
   './src/blocks/page-header/page-header.js',
   './src/blocks/page-footer/page-footer.js',
   './src/blocks/page-footer/page-footer__extra-element.js',
   './src/blocks/page-footer/page-footer--extra-modifier.js',
   './src/js/global-script.js' ],
img:
 [ './src/img/',
   './src/blocks/page-header/img',
   './src/blocks/page-footer/img' ]
```



## Назначение папок

```bash
build/          # Сюда собирается проект, здесь работает сервер автообновлений.
src/            # Исходные файлы
  _include/     # - фрагменты html для самого верха (секция head) и самого низа (перед закрывающим body) страницы
  blocks/       # - блоки (компоненты) проекта
  css/          # - можно положить добавочные css-файлы
  img/          # - можно положить добавочные картинки
  js/           # - можно положить добавочные js-файлы
  scss/         # - папка с диспетчером подключений стилей и глобальными файлами
  index.html    # - главная страница проекта
```



## Комментирование для разработчиков

Для html-файлов можно использовать комментарии вида `<!--DEV Комментарий -->` — такие комментарии не попадут в собранный html.
