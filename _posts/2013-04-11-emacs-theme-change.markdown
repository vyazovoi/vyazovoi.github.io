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

    (setq calendar-location-name "Dallas, TX") 
    (setq calendar-latitude 32.85)
    (setq calendar-longitude -96.85)
    
    (require 'theme-changer)
    (change-theme 'solarized-light 'solarized-dark)

Значения latitude и longitude можно узнать несколькими способами. Во-первых, можно просто тыкнуть в google maps и скопировать координаты. Кроме того можно найти свой город в википедии и там в шаблоне справа будет ссылка на сервис geohack, откуда нужно скопировать координаты в десятичном формате.

## Emacs 24 vs пакет color-theme

В Emacs 24 появился свой механизм тем на замену пакету color-theme. Сниппет выше – пример конфигурации уже для встроенного механизма тем. Для старого пакета color-theme конфигурация будет выглядеть следующим образом:

    (setq calendar-location-name "Dallas, TX") 
    (setq calendar-latitude 32.85)
    (setq calendar-longitude -96.85)
    
    (require 'theme-changer)
    (setq theme-changer-mode "color-theme")
    (change-theme 'color-theme-solarized-light 'color-theme-solarized-dark)

Кстати, лично я предпочитаю схему xemacs днём (самая лучшая схема, по моему мнению) и схему zen-and-art ночью.  
**UPD:** уже переключился на solarized.
