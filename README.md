# Стартовый проект с gulp  ![Test Status](https://travis-ci.org/nicothin/NTH-start-project.svg?branch=master) [![devDependencies Status](https://david-dm.org/nicothin/NTH-start-project/dev-status.svg)](https://david-dm.org/nicothin/NTH-start-project?type=dev) [![dependencies Status](https://david-dm.org/nicothin/NTH-start-project/status.svg)](https://david-dm.org/nicothin/NTH-start-project)


## Парадигма

- Именование классов по БЭМ, разметка в [pug](https://pugjs.org/) и стилизация [Sass](http://sass-lang.com/). См. [Как работать с CSS-препроцессорами и БЭМ](http://nicothin.github.io/idiomatic-pre-CSS/)
- Каждый БЭМ-блок в своей папке внутри `src/blocks/`.
- Список использованных в проекте доп. файлов указан в `config.js`.
- Есть глобальные файлы: стилевые (стили печати), js (по умолчанию пуст), шрифты, картинки.
- Список pug-примесей `src/pug/mixins.pug` генерируется автоматически, содержит `include` всех существующих pug-файлов блоков.
- Диспетчер подключения стилей `src/scss/style.scss` генерируется автоматически.
- Входная точка обработки js (`src/js/entry.js`) генерируется автоматически.
- Перед созданием коммита запускается проверка файлов, входящих в коммит. При наличии ошибок коммит не происходит, ошибки выводятся в терминал.
- Есть механизм быстрого создания нового блока: `node createBlock.js new-block` (создаёт папки и scss-файл). После имени нового блока можно дописать нужные расширения.


## Команды

`npm start` — сборка проекта **без библиотеки блоков**, слежение.

`npm run wlib` — сборка проекта с библиотекой блоков, слежение.

`npm run deploy` — cборка проекта (с библиотекой) и отправка содержимого папки сборки на gh-pages (не сработает, если проект не имеет репозитория на github.com).


## Структура

```bash
build/               # Папка сборки
src/                 # Исходники
  blocks/            # Блоки
  favicon/           # Фавиконки
  fonts/             # Шрифты
  img/               # Доп. изображения
  pages/             # Страницы проекта
  pug/               # Служебные pug-файлы
  scss/              # Служебные стилевые файлы
```


## Как это работает

При `npm start` (запускается дефолтная задача gulp):

1. Создаётся глобальный объект `nth` с настройками проекта.
5. Очищается папка сборки (`build/`).
5. Записывается `src/pug/mixins.pug` и компилируются файлы страниц (`src/pages/**/*`).
5. Из скомпилированных страниц извлекаются все классы уровня БЭМ-блока и записываются в `nth.blocksFromHtml`.
5. Генерируются спрайты, в папку сборки копируются доп. файлы и картинки.
5. Записывается `src/scss/style.scss`, в котором:
    - Импорты файлов из `config.js#addStyleBefore`.
    - Импорты файлов БЭМ-блоков, использующихся на проекте (если их scss-файлы существуют).
    - Импорты файлов из `config.js#addStyleAfter`.
5. Записывается `src/js/entry.js`, в котором:
    - `require` файлов из `config.js#addJsBefore`.
    - `require` файлов БЭМ-блоков, использующихся на проекте (если их js-файлы существуют).
    - `require` файлов из `config.js#addJsAfter`.
5. Компилируются и обрабатываются PostCSS-ом стили (`src/scss/style.scss`), собирается скрипт (`src/js/entry.js`).
5. Запускается локальный сервер и слежение за файлами для пересборки.


## Как начать новый проект c этим репозиторием

1. Клонировать этот репозиторий в новую папку (`git clone https://github.com/nicothin/NTH-start-project.git new-project`, см. [шпаргалку](https://github.com/nicothin/web-development/tree/master/git#%D0%9A%D0%BB%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F)) и зайти в неё (`cd new-project`).
2. Стереть историю разработки этого репозитория (`rm -rf .git`), инициировать новый (`git init`), создать удалённый репозиторий и привязать его (`git remote add origin АДРЕС`, см. [шпаргалку](https://github.com/nicothin/web-development/tree/master/git#%D0%A3%D0%B4%D0%B0%D0%BB%D1%91%D0%BD%D0%BD%D1%8B%D0%B5-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B8)).
3. Отредактировать `LICENSE`, `README.md`, `package.json` (название проекта, автор, лицензия, необходимые пакеты и пр.) и `config.js` (нужные на проекте блоки, сторонние пакеты). Удалив пакет из `package.json`, не забудьте убрать его из `config.js`.
4. Установить зависимости (`npm i`).
5. Запустить сервер разработки (`npm start`).


## Разметка

Используется [pug](https://pugjs.org/api/getting-started.html). HTML никак не обрабатывается.

По умолчанию используются [наследование шаблонов](https://pugjs.org/language/inheritance.html) — все страницы (см. `src/index.pug`) являются расширениями шаблонов, в страницах описывается только содержимое «шапки», «подвала» и контентной области посредством [блоков](https://pugjs.org/language/inheritance.html#block-append-prepend).

Каждый блок (в `src/blocks/`) может содержать pug-файл с одноименной примесью, который будет взят includ-ом в файле `src/pug/mixins.pug`.


## Стили

Диспетчер подключений (`src/scss/style.scss`) формируется автоматически, писать в него что-либо руками бессмысленно: при старте автоматизации файл будет перезаписан.

Используемый постпроцессинг:

1. [autoprefixer](https://github.com/postcss/autoprefixer)
2. [css-mqpacker](https://github.com/hail2u/node-css-mqpacker)
3. [postcss-import](https://github.com/postcss/postcss-import)
4. [postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg)
6. [postcss-object-fit-images](https://github.com/ronik-design/postcss-object-fit-images) (в паре с [полифилом](https://github.com/bfred-it/object-fit-images))


## Скрипты

Точка входа (`src/js/entry.js`) формируется автоматически, писать в него что-либо руками бессмысленно: при старте автоматизации файл будет перезаписан. Точка входа обрабатывается webpack-ом (с babel-loader).

Для глобальных действий предусмотрен `src/js/script.js` (см. `config.js#addJsAfter` и `config.js#addJsBefore`).

Каждый блок может содержать одноимённый js-файл. При условии использования блока в разметке (или упоминания в `config.js#alwaysAddBlocks`) такой js-файл будет взят в сборку.


### Модульная сетка (flexbox)

По умолчанию в сборку берётся [файл с примесями](https://github.com/nicothin/NTH-start-project/blob/master/src/scss/mixins/grid-mixins.scss), возвращающими правила модульной сетки. Никаких селекторов в CSS не добавляет, нужно писать семантические селекторы и вызывать примеси, передавая им настройки сетки. Настройки по умолчанию вынесены в переменные (`$grid-columns: 12;` и `$grid-gutter-width: 30px;`).

Посмотреть примеры и попробовать вживую можно в [этом примере с codepen.io](https://codepen.io/nicothin/pen/aJEOwE?editors=1100).


## Блоки

Каждый блок лежит в `src/blocks/` в своей папке.

Возможное содержимое блока:

```bash
demo-block/               # Папка блока.
  bg-img/                 # Изображения для использования в стилях (не обрабатываются автоматикой сборки).
  img/                    # Изображения, используемые блоком и обрабатываемые автоматикой сборки.
  demo-block.pug          # Разметка (pug-примесь, отдающая разметку блока, описание API примеси).
  demo-block.scss         # Стилевой файл блока.
  demo-block.js           # js-файл блока.
  readme.md               # Описание для документации, подсказки.
```


## Подключение блоков

Если блок (css-класс блока) использован в разметке, то блок будет взят в сборку.

Если нужно взять в сборку блок без использования его класса в разметке, нужно упомянуть блок в `config.js#alwaysAddBlocks`.


## Удобное создание нового блока

Предусмотрена команда для быстрого создания файловой структуры нового блока. По умолчанию создаются: scss-файл и подпапки `img`, `bg-img`

```bash
# формат: node createBlock.js ИМЯБЛОКА [доп. расширения через пробел]
node createBlock.js block-test # создаст папку блока, block-test.scss, подпапки img/ и bg-img/ для этого блока
node createBlock.js block-test pug js # создаст папку блока, block-test.scss, block-test.pug, block-test.js, подпапки img/ и bg-img/ для этого блока
```

Если блок уже существует, файлы не будут затёрты, но создадутся те файлы, которые ещё не существуют.


## Нравится проект?

Ставьте звезду в верхнем правом углу и/или [угостите меня кофе](https://money.yandex.ru/to/41001252765094), переведя сколь угодно символическую сумму.
