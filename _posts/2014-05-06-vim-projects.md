---
layout: post
title: Управление проектами в Vim
description: Управление проектами в Vim и быстрый запуск среды с помощью Alfred
date: 2014-05-06 17:00
comments: true
categories: vim Alfred Workflow runix OSX
icon: MacVim_icon.png
---

Я над многими проектами целиком и полностью работаю или в MacVim, или в Sublime Text.

На тему Vim vs Sublime мне тоже очень хочется много всяких мыслей
написать, но не сейчас. А сейчас расскажу как можно организовывать
проекты в Vim не хуже, чем в Sublime Text.

У Sublime Text управление проектами организовано очень удобно: проект
это файл, в котором описаны вложенные директории, любые настройки
(например, отступы или используемый для этого проекта набор линтеров).

Т.к. проекты хранятся в файлах, то очень легко сделать alfred workflow
для быстрого доступа к проектам.

Примерно такого же я хотел и от Vim. И вот что получилось:

1. Для работы с проектами в Vim можно использовать сессии. Сессия это
	 файл, такой же как и основной конфиг Vim. Когда он выполняется можно
сделать что угодно: установить рабочую директорию, открыть боковую
панель с файлами проекта, переключить tags-файлы и т.д. Возможностей
даже больше, чем у проектов Sublime. Файлы сессий создаются в ~/.vim/sessions.
Для запуска используется vim -S ~/.vim/sessions/project.vim или :source из запущенного инстанса.

3. Для выбора проекта можно использовать плагин [startify](https://github.com/mhinz/vim-startify).
Он отображает последние открытые файлы и все сессии из ~/.vim/sessions.

4. Запускать таким образом сессии не очень удобно, поэтому я предлагаю
	 использовать для этого Alfred. Ниже я приложил ссылки на workflow Vim
проектов. Просто набираем "vims часть_имени_проекта" и выбираем нужный проект, он откроется в новом окне
MacVim.

<i class="icon-cloud-download"></i>[Скачать Vim workflow](https://github.com/vyazovoi/AlfredWorkflows/blob/master/VimSessions.alfredworkflow?raw=true)

Простой пример файла проекта:

	cd ~/Projects/projectname
	set tags=""
	set tags+=~/Sites/include/tags
	set tags+=~/Projects/projectname/tags
	let g:syntastic_php_phpcs_args="--report=csv --standard=/Users/paul/Documents/LSCS/LS"
	args app/index.php app/includes/* css/*
	edit app/index.php
	vertical sb css/default.css
