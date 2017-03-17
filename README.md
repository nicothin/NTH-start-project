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
      <td><code>npm start ЗАДАЧА</code></td>
      <td>Запустить задачу с названием ЗАДАЧА (список задач в <code>gulpfile.js</code>)</td>
    </tr>
    <tr>
      <td><code>npm run build</code></td>
      <td>Сборка проекта без карт кода (сжатый вид, как результат работы)</td>
    </tr>
    <tr>
      <td><code>npm run deploy</code></td>
      <td>Сборка проекта без карт кода и отправка содержимого папки сборки на GH-pages (для корректного сообщения адреса просмотра введите его в <code>./package.json</code>)</td>
    </tr>
  </tbody>
</table>



## Парадигма

- Используется именование классов, файлов и переменных по БЭМ.
- Список использованных в проекте БЭМ-блоков и доп. файлов указан в `./package.json`.
- Каждый БЭМ-блок в своей папке внутри `./src/blocks/` (стили, js, картинки, разметка; обязателен только стилевой файл).
- Есть глобальные файлы: стилевые, js, шрифты, картинки.
- Диспетчер подключения стилей `./src/scss/style.scss` генерируется автоматически при старте любой gulp-задачи.
- Для разметки можно использовать [микрошаблонизацию](https://www.npmjs.com/package/gulp-file-include). А можно и не использовать.



### Стили

Файл-диспетчер подключений (`.src/scss/style.scss`) формируется автоматически на основании указанных в `./package.json` блоков и доп. файлов. Писать в этот файл что-либо руками бессмысленно: при старте автоматизации файл будет перезаписан.



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



### Подключение блоков

Настройки подключаемых файлов указаны в `./package.json`, в секции `configProject`.

`blocks` — объект с блоками, используемыми на проекте. Каждый блок — отдельная папка с файлами, по умолчанию лежат в `./src/blocks/`.

Каждое подключение блока — массив, который можно оставить пустым или указать файлы элементов или модификаторов, если они написаны в виде отдельных файлов. В обоих случаях в обработку будут взяты одноименные стилевые файлы, js-файлы и картинки из папки `img/` блока.

`addCssBefore` — массив с дополнительными стилевыми файлами, которые будут взяты в компиляцию ПЕРЕД стилевыми файлами блоков.

`addCssAfter` — массив с дополнительными стилевыми файлами, которые будут взяты в компиляцию ПОСЛЕ стилевых файлов блоков.

`singleCompiled` — массив стилевых файлов, которые будут скомпилированы по отдельности.

`addJsBefore` — массив js-файлов, которые будут взяты в обработку (конкатенация/сжатие) ПЕРЕД js-файлами блоков.

`addJsAfter` — массив js-файлов, которые будут взяты в обработку (конкатенация/сжатие) ПОСЛЕ js-файлаов блоков.

`addImages` — массив дополнительных изображений, добавляемый ПЕРЕД массивом изображений из блоков (внимание: при совпадении имен файлов, файлы из блоков имею бОльший приоритет и затрут файлы из этого массива)

`copiedCss` — массив css-файлов, которые копируются в папку сборки, подпапку `css/`

`copiedJs` — массив js-файлов, которые копируются в папку сборки, подпапку `js/`

**ВНИМАНИЕ!** Это JSON. Это строгий синтаксис, у последнего элемента в любом контексте не должно быть запятой в конце строки.

#### Пример секции в `./package.json`

```json
"configProject": {
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
  "singleCompiled": []
  "addJsBefore": [
    "./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/jquery-migrate/dist/jquery-migrate.min.js"
  ],
  "addJsAfter": [
    "./src/js/global-script.js"
  ],
  "addImages": [
    "./src/img/*.{jpg,jpeg,gif,png,svg}"
  ],
  "copiedCss": [],
  "copiedJs": [],
  "dirs": {
    "srcPath": "./src/",
    "buildPath": "./build/",
    "blocksDirName": "blocks"
  }
}
```

В результате в обработку будут взяты (в указанной последовательности):

```bash
css:
 [ './src/scss/variables.scss',
   './src/blocks/page-header/page-header.scss',
   './src/blocks/page-footer/page-footer.scss',
   './src/blocks/page-footer/page-footer__extra-element.scss',
   './src/blocks/page-footer/page-footer--extra-modifier.scss',
   './src/scss/print.scss' ],
js:
 [ './node_modules/jquery/dist/jquery.min.js',
   './node_modules/jquery-migrate/dist/jquery-migrate.min.js',
   './src/blocks/page-header/page-header.js',
   './src/blocks/page-footer/page-footer.js',
   './src/blocks/page-footer/page-footer__extra-element.js',
   './src/blocks/page-footer/page-footer--extra-modifier.js',
   './src/js/global-script.js' ],
img:
 [ './src/img/*.{jpg,jpeg,gif,png,svg}',
   './src/blocks/page-header/img/*.{jpg,jpeg,gif,png,svg}',
   './src/blocks/page-footer/img/*.{jpg,jpeg,gif,png,svg}' ]
```



### Удобное создание нового блока

Предусмотрена команда для быстрого создания файловой структуры нового блока.

```bash
# формат: node createBlock.js ИМЯБЛОКА [доп. расширения через пробел]
node createBlock.js block-1 # создаст папку блока, block-1.html, block-1.scss и подпапку img/ для этого блока
node createBlock.js block-2 js pug # создаст папку блока, block-2.html, block-2.scss, block-2.js, block-2.pug и подпапку img/ для этого блока
```

Если блок уже существует, файлы не будут затёрты, но создадутся те файлы, которые ещё не существуют.



## Назначение папок

```bash
build/          # Папка сборки, здесь работает сервер автообновлений.
src/            # Исходные файлы
  _include/     # - фрагменты html для вставки на страницы
  blocks/       # - блоки проекта
  css/          # - можно положить добавочные css-файлы (нужно подключить в copiedCss, иначе игнорируются)
  fonts/        # - можно положить шрифты проекта (будут автоматически скопированы в папку сборки)
  img/          # - можно положить добавочные картинки (нужно подключить в addImages, иначе игнорируются)
  js/           # - можно положить добавочные js-файлы (нужно подключить в addJsBefore или addJsAfter, иначе игнорируются)
  scss/         # - стили (всё, кроме style.scss нужно подключить в addCssBefore, addCssAfter или singleCompiled, иначе оно будет проигнорировано)
  index.html    # - главная страница проекта
  components-demo.html # - библиотека блоков
```



## Комментирование для разработчиков

Для html-файлов можно использовать комментарии вида `<!--DEV Комментарий -->` — такие комментарии не попадут в собранный html.
