---
layout: post
title: "Продвинутый SpeedTest в Alfred2"
date: 2013-10-02 16:30
comments: true
categories: OSX Alfred Workflow
icon: Alfred2_icon.png
---
Тут вот Влад [опубликовал](http://macosworld.ru/alfred-speedtest-workflow/) workflow для speedtest. Но мне не нравится, когда Alfred служит просто лаунчером для консольных утилит, у меня для этого и iTerm под рукой висит. Мне нравится, когда Alfred служит более удобным UI к привычным вещам. Поэтому я решил добавить немного скриптовой магии к этому workflow и поделиться ей с вами.

В отличие от оригинала здесь можно указать номер сервера, до которого будем замерять скорость. А также есть список серверов с выбором нужного сервера в Alfred.

Парсинг списка серверов у меня получился каким-то медленным (мешанина из sed, grep и tr), поэтому я добавил возможность выводить только n ближайших к вам серверов, где n передается аргументом в Alfred. Кроме того, список серверов кешируется на 5 дней (число дней взял с потолка).

[Скачать Speedtest workflow](https://github.com/vyazovoi/AlfredWorkflows/blob/master/Speedtest.alfredworkflow?raw=true).

Ещё, в отличие от оригинала, скрипт speedtest_cli.py я положил внутрь самого workflow.