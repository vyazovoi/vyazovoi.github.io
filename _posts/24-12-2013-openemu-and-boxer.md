---
layout: post
title: Будущее ретро-гейминга уже здесь, в OS X!
date: 2013-12-24 20:05
comments: true
categories: OSX Игры Обзоры
icon: Invaders_icon.png
description: "Про OpenEmu и фронтенд для dosbox Boxer, эмуляция приставок и старых игр NES, Денди, Sega Mega Drive, Nintendo в Mac OS X"
---
Я люблю современные игры, играю на PS3 и Wii (если их ещё можно считать современными), но люблю играть и в лучшие из старых добрых игр под DOS и консоли того времени. Но пост будет не о моих предпочтениях, а о замечательных находках, о которых я довольно давно уже хотел написать. Речь пойдет о программах для запуска старых добрых игр в OS X.

С одной стороны — Windows лучше подходит для игр, чем OS X. В том числе и для старых: например, там есть замечательный эмулятор Project64 (N64), которого нет для других ОС. Но, с другой стороны, в OS X подход "все должно быть простым, красивым, и работать из коробки", работает и для такой "гиковской" темы, как эмуляция ретро-платформ. Предлагаю просто заценить две наикрутейшие программы для OS X…
<!--more-->

## Boxer — DOS с человеческим лицом

[Boxer](http://boxerapp.com/) это фронтенд для Dosbox. Я могу описать его так:

- красивый интерфейс
- добавление новых игр простым перетаскиванием образов дисков, дискет или каталогов в программу
- каталог игр с обложками

Кстати, каталог реализован просто в директории с красивым фоном и пакетами с играми:

<a class="screenshot" href="http://monosnap.com/image/GRSSrc7OMUgREgVhb2ISYKoBA.png" rel="screenshot" title="Каталог с играми в Finder"><img src="http://monosnap.com/image/GRSSrc7OMUgREgVhb2ISYKoBA.png" alt="boxer catalog" /></a>

А вот ещё скриншоты:

<a class="screenshot" href="http://monosnap.com/image/0BZO14g4otXXS1Qk7FvQHWmYV.png" rel="screenshot"><img src="http://monosnap.com/image/0BZO14g4otXXS1Qk7FvQHWmYV.png" alt="boxer" /></a>
<a class="screenshot" href="http://monosnap.com/image/aK2A9zYVi73e41X0M5Vsvrgsw.png" rel="screenshot"><img src="http://monosnap.com/image/aK2A9zYVi73e41X0M5Vsvrgsw.png" alt="boxer" /></a>
<a class="screenshot" href="http://monosnap.com/image/4cqrg5PAsu8ZYrxuKAGxmt0Ar.png" rel="screenshot"><img src="http://monosnap.com/image/4cqrg5PAsu8ZYrxuKAGxmt0Ar.png" alt="boxer" /></a>

## OpenEmu — шедевр эмуляции

[OpenEmu](http://openemu.org/) — фронтенд для различных программ эмуляции самых разнообразных платформ. Представляет из себя красивый каталог игр (обложки, рейтинги). Полностью абстрагирует пользователя от самих эмуляторов и их конфигурации. Особое внимание советую обратить на конфигурацию контроллеров (см. скриншоты ниже) и поддержку различных геймпадов (PS3/4, xbox, wiimote, USB HID, iphone с joypad connect и множество других bluetooth и usb геймпадов).

В стабильную версию входят следующие плагины:

- Game Boy Advance
- Game Boy Color
- NeoGeo Pocket Color
- NES
- Nintendo DS
- Sega 32X
- Sega Game Gear
- Sega Genesis
- Sega Master System
- SNES
- TurboGrafx-16
- Virtual Boy

Но можно скачать экспериментальную сборку, в которой очень большой список поддерживаемых платформ. В него входят пока ещё нестабильные плагины, но многие из них уже сейчас готовы к применению.

И это не просто запускалка эмуляторов, которые я уже видел под Windows и даже под Linux. В интерфейсе OpenEmu поддерживается управление сохранениями, а сама эмуляция запускается в интерфейсе OpenEmu, а не в стандартном интерфейсе эмулятора.

Перейдем от слов к скриншотам:

<a class="screenshot" href="http://monosnap.com/image/RvnkI8MGolvBtgXt8nXVonwxk.png" rel="screenshot"><img src="http://monosnap.com/image/RvnkI8MGolvBtgXt8nXVonwxk.png" alt="openemu" /></a>
<a class="screenshot" href="http://monosnap.com/image/oAzN8KoUGGYBSG7t7NClz6jrF.png" rel="screenshot"><img src="http://monosnap.com/image/oAzN8KoUGGYBSG7t7NClz6jrF.png" alt="openemu" /></a>

А вот так настраиваются контроллеры:

<a class="screenshot" href="http://monosnap.com/image/PFwggPw8629wmVjOWw9Qp12Np.png" rel="screenshot"><img src="http://monosnap.com/image/PFwggPw8629wmVjOWw9Qp12Np.png" alt="openemu" /></a>
<a class="screenshot" href="http://monosnap.com/image/xoKPo0QHex8FvGcG90XUPzw8W.png" rel="screenshot"><img src="http://monosnap.com/image/xoKPo0QHex8FvGcG90XUPzw8W.png" alt="openemu" /></a>
<a class="screenshot" href="http://monosnap.com/image/SOv9iW8datRjG3MnBPcsAdqt4.png" rel="screenshot"><img src="http://monosnap.com/image/SOv9iW8datRjG3MnBPcsAdqt4.png" alt="openemu" /></a>

Для настройки кнопок можно нажимать их прямо на изображении контроллера. В общем все классно, не хватает пока ещё работы с архивами (в идеале — 7z, но можно и zip) и объединения нескольких ромов одной игры в коллекцию, с выбором интересующей версии.