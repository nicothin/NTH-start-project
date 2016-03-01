Файлы из этой папки никуда не копируются. Предполагается использовать [fontsquirell](http://www.fontsquirrel.com/tools/webfont-generator) или [jaicab.com/localFont/](http://jaicab.com/localFont/) для создания CSS со шрифтами. Сам CSS-файл, сгенерированный сервисом нужно скопировать в глобальный CSS.

На момент создания этого документа (1.03.2016) плагинов для gulp, корректно кодирующих WOFF в base64 не существует.

Символы, которые имеет смысл брать в шрифт:

 !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~¢£¥¨©«®´¸»ˆ˚˜ЁАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяё‐‑‒–—―‘’‚“”„…‰‹›€™

Приложен конфиг для [fontsquirrel.com](http://www.fontsquirrel.com/tools/webfont-generator)
