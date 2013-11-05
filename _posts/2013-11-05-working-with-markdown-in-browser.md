---
layout: post
title: Работа с markdown документами в браузере и публикация в блог на github
description: Обзор трёх сервисов для редактирования markdown в браузере и публикации на github в jekyll-блоге
date: 2013-11-05 14:19
comments: true
categories: markdown jekyll 
href: 
icon: Writing_icon.png
---

Как-то давно я писал про [выбор платформы для блога]({% post_url 2013-05-04-novaia-platforma-dlia-blogha %}). Тогда мне не нравилась в jekyll+github блоге его привязанность к git. Мне хотелось публиковать заметки на ходу, прямо с iPhone. С тех пор мне так ни разу и не приходилось опубликовать заметку с телефона, но зато я нашел способ это сделать. В общем, сегодняшний обзор будет на тему браузерных markdown-редакторов, их работы на iPhone и публикации на GitHub.
<!--more-->

## [Prose](http://prose.io)

Этот markdown-редактор создан специально для GitHub. Это готовый workflow для ведения jekyll-блога в браузере. Отличительные черты — понимает специфику GitHub и jekyll: yaml метаданные редактируются в отдельном диалоге, сохранение черновиков в _drafts.

Адаптирован для экрана мобильного телефона. Не очень удобно на iPhone, конечно, но на iPad будет очень даже. При сохранении делает коммит, можно ввести описание.

[Prose.io](http://prose.io)

<a class="screenshot" href="https://www.monosnap.com/image/KwnPrHnwl0hc0SOorRwIg8aEn.png" rel="prose" title=""><img src="https://www.monosnap.com/image/KwnPrHnwl0hc0SOorRwIg8aEn.png" alt="prose.io" /></a>
<a class="screenshot" href="https://www.monosnap.com/image/dsCrdSoKVIqVjPs3SllnFnBok.png" rel="prose" title=""><img src="https://www.monosnap.com/image/dsCrdSoKVIqVjPs3SllnFnBok.png" alt="prose.io" /></a>
<a class="screenshot" href="https://www.monosnap.com/image/fCm3HmmQeTFv9RqgOTfimvYtD.png" rel="prose" title=""><img src="https://www.monosnap.com/image/fCm3HmmQeTFv9RqgOTfimvYtD.png" alt="prose.io" /></a>
<a class="screenshot" href="https://www.monosnap.com/image/Be9GK00IIVtALk0RmGIf7pvrF.png" rel="prose" title=""><img src="https://www.monosnap.com/image/Be9GK00IIVtALk0RmGIf7pvrF.png" alt="prose.io" /></a>
<a class="screenshot" href="https://www.monosnap.com/image/LlYodtZvvj0cylHTOPv4CW5S9.png" rel="prose" title=""><img src="https://www.monosnap.com/image/LlYodtZvvj0cylHTOPv4CW5S9.png" alt="prose.io yaml" /></a>

## [StackEdit](https://stackedit.io)

Этот редактора гораздо круче, чем prose.io, в плане работы с markdown и интеграции с разными сервисами. Но, в отличие от prose, не умеет редактировать существующие файлы на github, только публиковать новые (в проекты или в gist). Зато поддерживает Markdown Extra, MathJax, SmartyPants, подсветку синтаксиса, всякие плюшки типа вставки TOC. Умеет полноценно работать с Dropbox и Google Drive, а также экспортировать документы в Blogger, Gist, GitHub, SSH Server (не пробовал, звучит заманчиво), Tumblr и WordPress.

При публикации на GitHub просит ввести репо, ветку и путь к файлу. Короче говоря, в плане блоггинга на GitHub он с Prose.io не поспорит, у него другие задачи. Зато сам по себе редактор замечательный. На iPhone можно пользоваться только в горизонтальном расположении, т.к. в вертикальном не дает посмотреть preview и в общем неудобен. На iPad — нормально. Но без удобной работы с Github на iOS и так [хватает хороших редакторов]({% post_url 2013-10-20-1writer-markdown-ios %}).

[Stackedit.io](https://stackedit.io)

<a class="screenshot" href="https://www.monosnap.com/image/NYGncIuq4RrsOqAVYUysxUtD5.png" rel="stackedit" title=""><img src="https://www.monosnap.com/image/NYGncIuq4RrsOqAVYUysxUtD5.png" alt="stackedit.io" /></a>
<a class="screenshot" href="https://www.monosnap.com/image/RoO07Ocb8PvJTlcKtMRQ4KTYk.png" rel="stackedit" title=""><img src="https://www.monosnap.com/image/RoO07Ocb8PvJTlcKtMRQ4KTYk.png" alt="stackedit.io" /></a>

## [Draft](https://draftin.com)

Этот редактор попал в обзор только за то, что это отличный инструмент для написания текстов в Markdown. А ещё, он удобен для совместного редактирования текстов, т.к. умеет подсвечивать изменения, сделанные другим пользователем, и поддерживает версии документа.

Draft умеет работать с несколькими хранилищами файлов помимо собственного: Dropbox, Google Drive, Evernote, Box, FTP. У него скромная поддержка Markdown-дополнений, можно комментировать текст и вносить правки — это удобно для согласования материала с редактором.

Мега-фича: Хемингуэй-mode, "пиши сейчас, редактируй позже". Короче говоря, вам отключат клавишу backspace.

[Draft](https://draftin.com)

<a class="screenshot" href="https://www.monosnap.com/image/CweUEgwZlC9e4eGSTTqB7IZWl.png" rel="draft" title=""><img src="https://www.monosnap.com/image/CweUEgwZlC9e4eGSTTqB7IZWl.png" alt="draftin" /></a>
<a class="screenshot" href="https://www.monosnap.com/image/8oz19E187QjukJvJTe0zQ9hOl.png" rel="draft" title=""><img src="https://www.monosnap.com/image/8oz19E187QjukJvJTe0zQ9hOl.png" alt="draftin preview" /></a>