# Стартовый проект с gulp  ![Test Status](https://travis-ci.org/nicothin/NTH-start-project.svg?branch=master) [![devDependencies Status](https://david-dm.org/nicothin/NTH-start-project/dev-status.svg)](https://david-dm.org/nicothin/NTH-start-project?type=dev) [![dependencies Status](https://david-dm.org/nicothin/NTH-start-project/status.svg)](https://david-dm.org/nicothin/NTH-start-project)

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
      <td>Запустить задачу с названием ЗАДАЧА (список задач в <code>./gulpfile.js</code>)</td>
    </tr>
    <tr>
      <td><code>npm start check:favicons:update</code></td>
      <td>Проверка актуальности данных <a href="https://realfavicongenerator.net/">генератора favicon</a></td>
    </tr>
    <tr>
      <td><code>folder=src/img npm start img:opt</code></td>
      <td>Оптимизация изображений из папки <code>./src/img</code> (или любой другой)</td>
    </tr>
    <tr>
      <td><code>npm run build</code></td>
      <td>Сборка проекта без карт кода (сжатый вид, как результат работы)</td>
    </tr>
    <tr>
      <td><code>npm run deploy</code></td>
      <td>Сборка проекта без карт кода и отправка содержимого папки сборки на github-pages</td>
    </tr>
    <tr>
      <td><code>npm run test:style</code></td>
      <td>Проверка стилевой составляющей проекта <a href="https://stylelint.io/">stylelint</a></td>
    </tr>
    <tr>
      <td><code>npm start test:pug</code></td>
      <td>Проверка pug-файлов проекта <a href="https://github.com/nicothin/gulp-pug-lint">форкнутым gulp-pug-lint</a></td>
    </tr>
  </tbody>
</table>

Предполагается, что все команды вы выполняете в bash (для OSX и Linux это самый обычный встроенный терминал, для Windows это, к примеру, Git Bash). В Windows установку пакетов (`npm i`) нужно выполять в терминале, запущенном от имени администратора.



## Как начать новый проект c этим репозиторием

1. Клонировать этот репозиторий в новую папку (`git clone https://github.com/nicothin/NTH-start-project.git new-project`, см. [шпаргалку](https://github.com/nicothin/web-development/tree/master/git#%D0%9A%D0%BB%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F)) и зайти в неё (`cd new-project`).
2. Стереть историю разработки этого репозитория (`rm -rf .git`), инициировать новый (`git init`), создать удалённый репозиторий и привязать его (`git remote add origin АДРЕС`, см. [шпаргалку](https://github.com/nicothin/web-development/tree/master/git#%D0%A3%D0%B4%D0%B0%D0%BB%D1%91%D0%BD%D0%BD%D1%8B%D0%B5-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B8)).
3. Отредактировать `README.md`, `package.json` (название проекта, автор, лицензия, сторонние пакеты и пр.) и `projectConfig.json` (нужные на проекте блоки, сторонние пакеты). Удалив пакет из `package.json`, не забудьте убрать его из сборки в `projectConfig.json`.
4. Установить зависимости (`npm i`).
5. Запустить сервер разработки (`npm start`).

Если при вызове `npm start` ничего не происходит, смотрите `./projectConfig.json` (вероятно, он содержит синтаксическую ошибку, проверить можно [линтером](http://jsonlint.com/)).



## Парадигма

- Именование классов по БЭМ, разметка в [pug](https://pugjs.org/) и стилизация [Sass](http://sass-lang.com/). См. [Как работать с CSS-препроцессорами и БЭМ](http://nicothin.github.io/idiomatic-pre-CSS/)
- Каждый БЭМ-блок в своей папке внутри `./src/blocks/` (.scss, и .pug файлы обязательны).
- Список использованных в проекте БЭМ-блоков и доп. файлов указан в `./projectConfig.json`. Это главный конфигурационный файл проекта.
- Есть глобальные файлы: стилевые (стили печати), js (по умолчанию пуст), шрифты, картинки.
- Диспетчер подключения стилей `./src/scss/style.scss` генерируется автоматически при старте любой gulp-задачи (на основе данных из `./projectConfig.json`).
- Список pug-примесей `./src/pug/mixins.pug` генерируется автоматически при старте любой gulp-задачи (на основе данных из `./projectConfig.json`).
- Перед созданием коммита запускается проверка стилевых файлов, входящих в коммит и всех pug-файлов. При наличии ошибок коммит не происходит (ошибки будут выведены в терминал).
- Есть механизм быстрого создания нового блока: `node createBlock.js new-block` (создаёт файлы, папки, прописывает блок в `./projectConfig.json`).



## Разметка

Используется [pug](https://pugjs.org/api/getting-started.html). HTML никак не обрабатывается.

По умолчанию используются [наследование шаблонов](https://pugjs.org/language/inheritance.html) — все страницы (см. `./src/index.pug`) являются расширениями шаблонов, в страницах описывается только содержимое «шапки», «подвала» и контентной области посредством [блоков](https://pugjs.org/language/inheritance.html#block-append-prepend).

К.О. подсказывает, что если какие-то области («подвал»?) одинаковы на всех страницах, то их стоит писать в файле шаблона, а не в файлах страниц.



## Стили

Файл-диспетчер подключений (`./src/scss/style.scss`) формируется автоматически на основании указанных в `./projectConfig.json` блоков и доп. файлов. Писать в `./src/scss/style.scss` что-либо руками бессмысленно: при старте автоматизации файл будет перезаписан.

Используемый постпроцессинг:

1. [autoprefixer](https://github.com/postcss/autoprefixer)
2. [css-mqpacker](https://github.com/hail2u/node-css-mqpacker)
3. [postcss-import](https://github.com/postcss/postcss-import)
4. [postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg)
5. [gulp-cleancss](https://github.com/mgcrea/gulp-cleancss) (только в режиме сборки без карт кода)
6. [postcss-object-fit-images](https://github.com/ronik-design/postcss-object-fit-images) (в паре с [полифилом](https://github.com/bfred-it/object-fit-images))
7. [postcss-image-inliner](https://www.npmjs.com/package/postcss-image-inliner)

Для [postcss-image-inliner](https://www.npmjs.com/package/postcss-image-inliner) указано ограничение на размер файла в 5 Кб, файлы ищутся в `src/blocks/**/bg-img/`. Чтобы избежать конфликтов имен, добавляйте к именам изображений префикс (имя блока), например: `src/blocks/mega-block/bg-img/mega-block__avatar.png`

### Модульная сетка (flexbox)

По умолчанию в сборку берётся [файл с примесями](https://github.com/nicothin/NTH-start-project/blob/master/src/scss/mixins/grid-mixins.scss), возвращающими правила модульной сетки. Никаких селекторов в CSS не добавляет, нужно писать семантические селекторы и вызывать примеси, передавая им настройки сетки. Настройки по умолчанию вынесены в переменные (`$grid-columns: 12;` и `$grid-gutter-width: 30px;`).

Посмотреть примеры и попробовать вживую можно в [этом примере с codepen.io](https://codepen.io/nicothin/pen/aJEOwE?editors=1100).



## Блоки

Каждый блок лежит в `./src/blocks/` в своей папке. Каждый блок — как минимум, папка и одноимённые scss- и pug-файл.

Возможное содержимое блока:

```bash
demo-block/               # Папка блока
  img/                    # Изображения, используемые блоком и обрабатываемые автоматикой сборки
  bg-img/                 # Изображения для использования в стилях (не обрабатываются автоматикой сборки)
  demo-block.pug          # **Обязательный**. Разметка (pug-примесь, отдающая разметку блока, описание API примеси)
  demo-block.scss         # **Обязательный**. Стилевой файл блока
  demo-block.js           # js-файл блока
  demo-block--mod.scss    # Отдельный стилевой файл БЭМ-модификатора блока
  demo-block--mod.js      # js-файл для отдельного БЭМ-модификатора блока
  readme.md               # Описание для документации, подсказки
```



## Подключение блоков

Список используемых блоков и доп. файлов указан в `./projectConfig.json`. Список файлов и папок, взятых в обработку можно увидеть в терминале, если раскомментировать строку `console.log(lists);` в `gulpfile.js`.

**ВНИМАНИЕ!** `./projectConfig.json` — это JSON. Это строгий синтаксис, у последнего элемента в любом контексте не должно быть запятой в конце строки.

### `blocks`

Объект с блоками, используемыми на проекте. Каждый блок — отдельная папка с файлами, по умолчанию лежат в `./src/blocks/`.

Каждое подключение блока — массив, который можно оставить пустым или указать файлы элементов или модификаторов, если они написаны в виде отдельных файлов. В обоих случаях в обработку будут взяты одноименные стилевые файлы, pug-файл, js-файлы и картинки из папки `img/` блока.

Пример, подключающий 3 блока:

```
"blocks": {
  "page": [],
  "page-header": [],
  "page-footer": []
}
```

### `addCssBefore`

Массив с дополнительными стилевыми файлами, которые будут взяты в компиляцию ПЕРЕД стилевыми файлами блоков.

Пример, берущий в компиляцию переменные, примеси, функции и один дополнительный файл из папки зависимостей (он будет преобразован в css-импорт, который при постпроцессинге ([postcss-import](https://github.com/postcss/postcss-import)) будет заменен на содержимое файла).

```
"addCssBefore": [
  "./src/scss/variables.scss",
  "./src/scss/mixins.scss",
  "./src/scss/functions.scss",
  "../../node_modules/owl.carousel/dist/assets/owl.carousel.css"
],
```

### `addCssAfter`

Массив с дополнительными стилевыми файлами, которые будут взяты в компиляцию ПОСЛЕ стилевых файлов блоков.

```
"addCssAfter": [
  "./src/scss/print.scss"
],
```

### `singleCompiled`

Массив стилевых файлов, которые будут скомпилированы независимо.

Пример: указанный файл будет скомпилирован в папку сборки как `blocks-library.css`

```
"singleCompiled": [
  "./src/scss/blocks-library.scss"
],
```

### `addJsBefore`

Массив js-файлов, которые будут взяты в обработку (конкатенация/сжатие) ПЕРЕД js-файлами блоков.

Пример, добавляющий в список обрабатываемых js-файлов несколько зависимостей:

```
"addJsBefore": [
  "./node_modules/jquery/dist/jquery.min.js",
  "./node_modules/jquery-migrate/dist/jquery-migrate.min.js",
  "./node_modules/nouislider/distribute/nouislider.js"
],
```

### `addJsAfter`

Массив js-файлов, которые будут взяты в обработку (конкатенация/сжатие) ПОСЛЕ js-файлов блоков.

Пример, добавляющий в конец списка обрабатываемых js-файлов глобальный скрипт.

```
"addJsAfter": [
  "./src/js/global-script.js"
],
```

### `addImages`

Массив дополнительных изображений, добавляемый ПЕРЕД массивом изображений из блоков (внимание: при совпадении имен файлов, файлы из блоков имеют более высокий приоритет и затрут файлы из этого массива).

```
"addImages": [
  "./src/img/*.{jpg,jpeg,gif,png,svg,ico}"
],
```

### `copiedCss`

Массив css-файлов, которые копируются в папку сборки, подпапку `css/`

### `copiedJs`

Массив js-файлов, которые копируются в папку сборки, подпапку `js/`

### Пример `./projectConfig.json`

```json
{
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
  "singleCompiled": [],
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
pug:
 [ './src/blocks/page-header/page-header.pug',
   './src/blocks/page-footer/page-footer.pug' ]
```



## Удобное создание нового блока

Предусмотрена команда для быстрого создания файловой структуры нового блока. По умолчанию создаются: scss- и pug-файл, `readme.md` блока и его подпапки `img` и `bg-img`

```bash
# формат: node createBlock.js ИМЯБЛОКА [доп. расширения через пробел]
node createBlock.js block-test # создаст папку блока, block-test.pug, block-test.scss, подпапки img/ и bg-img/ для этого блока
```

Если блок уже существует, файлы не будут затёрты, но создадутся те файлы, которые ещё не существуют.



## Назначение папок

```bash
build/          # Папка сборки, здесь работает сервер автообновлений.
src/            # Исходные файлы
  blocks/       # - блоки проекта
  css/          # - можно положить добавочные css-файлы (нужно подключить в copiedCss, иначе игнорируются)
  fonts/        # - можно положить шрифты проекта (будут автоматически скопированы в папку сборки)
  img/          # - можно положить добавочные картинки (нужно подключить в addImages, иначе игнорируются)
  js/           # - можно положить добавочные js-файлы (нужно подключить в addJsBefore, addJsAfter или copiedJs, иначе игнорируются)
  pug/          # - примеси, шаблоны pug
  scss/         # - стили (файл style.scss скомпилируется, прочие нужно подключить в addCssBefore, addCssAfter или singleCompiled, иначе они будут проигнорированы)
  index.pug     # - главная страница проекта
  blocks-demo.pug # - библиотека блоков
```
