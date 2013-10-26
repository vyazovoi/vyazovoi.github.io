---
layout: post
title: "Теги Mavericks, openmeta теги и openmeta cli"
date: 2013-10-27 00:58
comments: true
categories: OSX CLI Workflow Hazel
href: 
icon: 
---
Наличие системы тегирования в OS X прямо из коробки это самое значимое по практической полезности нововведение Mavericks. Теперь я могу проставлять теги прямо из Finder, и это сделано довольно удобно. Могу проставить теги в диалоге сохранения файла. У тегов теперь есть цветные метки. Ещё могу вот так сделать:

<a class="screenshot" href="https://www.monosnap.com/image/FnpXPhqvwKDkllbvHj75AAY0q.png" rel="screenshot" title=""><img src="https://www.monosnap.com/image/FnpXPhqvwKDkllbvHj75AAY0q.png" alt="mavericks tags" /></a>
<!--more-->

В общем всё круто, кроме одного: ещё есть ряд приложений, которые работают со старыми openmeta тегами. Есть множество скриптов, которые были завязаны на openmeta cli. Остаётся только ждать обновлений.

[Hazel](/blog/2013/10/18/hazel-vs-automator/) уже обновился до версии 3.2 и поддерживает оба варианта тегов. Вместе с Finder они позволяют автоматизировать [многие](/blog/2013/10/22/hazel-jekyll-automation/) [задачи](/blog/2013/10/18/hazel-clean-desktop/). А теперь ещё и openmeta cli подтянулся (скорее всего - неофициальный билд). Вот сообщение, которое только что опубликовал [Brett Terpstra](http://brettterpstra.com) в твиттере:

> @ttscoff: openmeta CLI compiled for Mavericks (uses both OM and Mavericks tags). http://t.co/p1PkQRCigr Just in case you need it.

Итак, скачать openmeta cli с поддержкой openmeta и Mavericks тегов одновременно можно [здесь](http://ckyp.us/8HPT).

Теперь у меня осталось только одно приложение без поддержки Mavericks тегов, это [nvalt](http://brettterpstra.com/projects/nvalt/). Но, т.к. автор его как раз сам Brett Terpstra, то я надеюсь на скорое обновление.

А вот ещё скрипт для переноса openmeta тегов в новый формат: [gist/Zettt/5880737](https://gist.github.com/Zettt/5880737). Но, я уже предлагал более простой и надежный способ перенести теги [здесь](http://paul.elms.pro/blog/2013/10/23/mavericks-tags/).