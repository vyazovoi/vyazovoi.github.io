---
layout: post
title: Универсальная бесплатная пипетка для OS X с better touch tool
date: 2013-12-13 14:15
comments: true
categories: OSX Workflow
icon: DigitalColorMeter_icon.png
---

Задача, с которой я сталкиваюсь регулярно — получить цвет элемента на веб-странице или в макете в пригодном для использования в css виде. Это можно сделать через веб-инспектор браузера, но гораздо быстрее и удобнее делать с помощью "пипетки".

В OS X есть предустановленное приложение "Колориметр Digital Color", но оно не позволяет получить цвет в hex формате сразу в буфер обмена. Кроме этого приложения, в системе есть встроенный color-picker, который используют различные приложения. В нём есть и история цветов, и разнообразные палитры. Не хватает только двух вещей: hex-формата и удобного способа вызывать эту пипетку когда нам нужно.

Во-первых, хочу всем рекомендовать бесплатную утилиту [Better Touch Tool](http://www.boastr.net/). Особенно тем, кто работает с трекпадом макбука или magick trackpad: она позволяет настроить огромное количество действий на жесты трекпада. Кроме того, она позволяет настраивать клавиатурные сочетания, управление окнами с помощью мыши (window snapping), увеличение скорости трекпада при зажатии кнопки (у меня fn+⌃), перемещение окон при зажатии fn и т.д. Сложно описать все возможности программы.

С помощью Better Touch Tool можно задать жест или клавиатурное сочетание для вызова стандартной пипетки:
<!--more-->

<a class="screenshot" href="https://www.monosnap.com/image/MlTsxxtEMVHb9hQZCTiX7k8B9.png" rel="screenshot" title="Вызов пипетки в Better Touch Tool на последовательности тапов"><img src="https://www.monosnap.com/image/MlTsxxtEMVHb9hQZCTiX7k8B9.png" alt="better touch tool" /></a>

Если нет желания использовать Better Touch Tool, то вызвать пипетку можно через AppleScript:

{% highlight applescript %}
choose color
{% endhighlight %}

Можно даже обработать выбранный цвет, т.к. пипетка возвращает его при завершении.

Теперь осталось добавить в стандартную пипетку немного фич. Здесь в силу вступают возможности расширения всех стандартных компонентов системы OS X, пипетку они не обошли стороной. Оказывается, к ней можно устанавливать плагины.

Для веб-разработчиков будет полезен бесплатный плагин [Hex Color Picker](http://wafflesoftware.net/hexpicker/). Он позволяет скопировать цвет в hex стандартным сочетанием ⌘C. Единственный важный момент — необходимо сразу поставить у него опцию "Don't generate calibrated colors", иначе цвета будут определены не точно.

<a class="screenshot" href="https://www.monosnap.com/image/PXg8UIeXBw4jzOBM5dgnxGfm0.png" rel="screenshot"><img src="https://www.monosnap.com/image/PXg8UIeXBw4jzOBM5dgnxGfm0.png" alt="hex color picker" /></a>

Ещё один интересный бесплатный плагин — [Developer Color Picker](http://www.panic.com/~wade/picker/). Он будет полезен OS X и iOS разработчикам. Hex-значения он тоже умеет копировать.

<a class="screenshot" href="https://www.monosnap.com/image/A9oYJjVUNeHMyHH7Yrjbs4xul.png" rel="screenshot"><img src="https://www.monosnap.com/image/A9oYJjVUNeHMyHH7Yrjbs4xul.png" alt="developer color picker" /></a>

Таким образом по магическому движению пальцев на трекпаде у меня всегда под рукой палитра и пипетка, при этом никаких лишних программ в менюбаре. Настоящий unix-way!

Конечно, это уступает по удобству или возможностям профессиональным инструментам вроде [xScope][5343-001] или [Color Schemer Studio][5343-002], но достаточно удобно для меня. И не приходится загромождать меню-бар отдельными утилитами для каждой мелочи. Я предпочитаю не использовать отдельные программы для таких мелочей как таймер или пипетка, всё можно реализовать скриптами в alfred или без него.

[5343-001]: https://itunes.apple.com/us/app/xscope/id447661441?mt=12&uo=4&at=10l4tL&ct=searchlink
[5343-002]: https://itunes.apple.com/us/app/colorschemer-studio/id417896628?mt=12&uo=4&at=10l4tL&ct=searchlink