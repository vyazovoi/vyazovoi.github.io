---
layout: post
title: "Рецепты Hazel: чем Hazel отличается от Automator"
date: 2013-10-18 12:35
comments: true
categories: OSX Hazel Automator Workflow
icon: Hazel_icon.png
---
Задачу из [предыдущего поста](http://paul.elms.pro/blog/2013/10/18/hazel-clean-desktop/) можно решить и с помощью Automator, поэтому я решил написать чем Hazel выгодно отличается от Automator (ведь стоит Hazel немало).

В Hazel есть много триггеров и действий, которые в Automator надо ещё как-то реализовать. Кроме того, Hazel следить за изменениями в файлах, а не только за появлением новых как Folder Actions в Automator

В отличие от Automator, Hazel умеет работать с openmeta тегами. Я использую это для папки с заметками nvalt. Если я тегирую заметку тегом #done, то hazel сразу отправляет её в архив.

**UPD:** hazel обновился и теперь наряду с openmeta тегами поддерживает и Mavericks теги. А вот Automator в Mavericks почему-то не научился работать с тегами, это удивительно.

Ещё лучше на вопрос из заголовка ответят скриншоты доступных триггеров и действий в Hazel (обратите внимание — список триггеров не влез в экран):
<!--more-->

<a class="screenshot" href="https://www.monosnap.com/image/xOtmn6UWWjiap7FKWgnhDv2Y2.png" rel="screenshot" title="Список часто используемых атрибутов"><img src="https://www.monosnap.com/image/xOtmn6UWWjiap7FKWgnhDv2Y2.png" alt="hazel атрибуты" style="width: 200px;" /></a>
<a class="screenshot" href="https://www.monosnap.com/image/cXupe49q8wV69hCMlikJW58EL.png" rel="screenshot" title="Список действий"><img src="https://www.monosnap.com/image/cXupe49q8wV69hCMlikJW58EL.png" alt="hazel actions" style="width: 200px;" /></a>
<a class="screenshot" href="https://www.monosnap.com/image/lJDhF2BIdtmvyikyEyxv8wbKl.png" rel="screenshot" title="Полный список атрибутов (обратите внимание на положение скролла)"><img src="https://www.monosnap.com/image/lJDhF2BIdtmvyikyEyxv8wbKl.png" alt="hazel атрибуты" /></a>