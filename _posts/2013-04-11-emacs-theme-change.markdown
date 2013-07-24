---
layout: post
title: "Смена цветовой схемы Emacs по времени восхода и захода солнца"
date: 2013-04-11 11:09
categories: emacs runix
description: "Переключение дневной и ночной цветовой схемы в Emacs"
keywords: emacs, GNU Emacs, color-theme, цветовые схемы
---
Я давно хотел поделиться интересными сниппетами из моего конфига Emacs. Сам конфиг я публиковать не хочу, потому что в нём половина кода не работает, другая половина содержит какие-то пароли и личные данные, которые я не вынес в отдельный файл. А вот этот сниппет опубликую. Даже не сниппет, а пример конфигурации готового пакета [theme-changer](https://github.com/hadronzoo/theme-changer).

Есть такой пакет для Emacs: [theme-changer](https://github.com/hadronzoo/theme-changer). Он умеет переключать цветовую схему по времени восхода и захода солнца. А настраивается он вот так:

    common-lisp theme-changer config http://emacswiki.org/emacs/ColorTheme#toc18 emacswiki
    (setq calendar-location-name "Dallas, TX") 
    (setq calendar-latitude 32.85)
    (setq calendar-longitude -96.85)
    
    (require 'theme-changer)
    (change-theme 'color-theme-solarized-light 'color-theme-solarized-dark)

Значения latitude и longitude можно узнать несколькими способами. Во-первых, можно просто тыкнуть в google maps и скопировать координаты. Кроме того можно найти свой город в википедии и там в шаблоне справа будет ссылка на сервис geohack, откуда нужно скопировать координаты в десятичном формате.

Кстати, лично я предпочитаю схему xemacs днём (самая лучшая схема, по моему мнению) и схему zen-and-art ночью. Последняя не входит в color-theme, установить её можно рецептом el-get.