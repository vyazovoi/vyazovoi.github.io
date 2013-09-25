---
layout: post
title: "Про TaskPaper, вводный пост"
comments: true
categories: OSX iOS Обзоры TaskPaper Workflow Emacs
icon: TaskPaper_icon.png
---
Я предпочитаю использовать в своем рабочем процессе простые форматы, такие как plain-text файлы, Markdown, org-mode и т.д. Считаю [org-mode](http://orgmode.org) образцовым инструментом для самого широкого спектра задач. Для меня это инструмент боллее универсальный, чем электронные таблицы или latex. Org-mode настолько крут, что он даже поддерживается в github, наряду с markdown. Но сейчас я расскажу не про org-mode, а про [TaskPaper](https://itunes.apple.com/ru/app/id424281111?mt=12), который является его очень минималистичным аналогом.

Кстати, если кто-то хочет познакомиться с org-mode, предлагаю почитать вот эту конфигурацию для представления о возможностях этого пакета: [Bernt Hansen org-mode setup](http://doc.norang.ca/org-mode.html). Настоятельно рекомендую этот невероятной крутости сетап всем, кто хоть немного интересуется Emacs и org-mode. <!--more-->

## Приятно познакомиться, TaskPaper

TaskPaper преследует ту же самую идею, что и Markdown. Это простой текстовый формат для списков задач. Его удобно парсить, его удобно редактировать в любом текстовом редакторе, для него легко писать различные скрипты, его можно распечатать без какой-либо дополнительной обработки.

Но TaskPaper может быть использован не только для списков задач, но и как простой аутлайнер.

Вот пример обычного TaskPaper документа:

	Проект A:
		- Задача проекта A
		- Вторая задача проекта A
			- Вложенная задача
			- Ещё вложенная задача
			Заметка ко второй задаче
		Заметка к проекту
		Ещё заметка к проекту
		Вложенный проект:
			- Задача вложенного проекта
			- Задача вложенного проекта 2
				- Ещё задача
				И заметка
	Проект Б:
		- Задача с высоким приоритетом @priority(100500)
		- Завершенная задача @done(2013-09-24)
		- Задача, запланированная на сегодня @today
		- Задача, которая будет выполняться следующей @na @today
		- Задача с примерами тегов @home @remind(2013-09-25 11:50) @ответственный(Вася)

При этом выглядеть такой документ в программе [TaskPaper](https://itunes.apple.com/ru/app/id424281111?mt=12) будет вот так:

<a class="screenshot" href="https://www.monosnap.com/image/hsKii0xB3s9jc15cCSveGhFcc.png" rel="screenshot1"><img src="https://www.monosnap.com/image/hsKii0xB3s9jc15cCSveGhFcc.png" alt="TaskPaper" /></a>
<a class="screenshot" href="https://www.monosnap.com/image/57pdrACQpkQw9kvgWxIoiCOvS.png" rel="screenshot1" title="Фильтр по тегу @today"><img src="https://www.monosnap.com/image/57pdrACQpkQw9kvgWxIoiCOvS.png" alt="TaskPaper" /></a>

Сама программа TaskPaper стоит дорого и я пока не решился её покупать. Но TaskPaper — это не только одноименная программа, но и сам формат описания списков задач простым текстом. Кроме того, сама программа TaskPaper мне не показалась удобной (нет того удобства, какое было в Emacs для файлов формата org-mode).

## Альтернативные программы

В официальной wiki есть [список](http://www.hogbaysoftware.com/wiki/TaskPaperRelatedProjects) программ и расширений для работы с TaskPaper файлами. Среди прочих, там есть и TextMate Bundle, и Taskpaper.el для Emacs.

Я решил попробовать работать с TaskPaper используя только TextMate 2 и различные скрипты. Первая проблема, с которой я столкнулся: TextMate bundle не полностью поддерживает формат: он не поддерживает теги. Вплоть до того, что в этом бандле используется другой способ отметить задачу как выполненную. Скорее всего, я буду дорабатывать этот bundle. И в первую очередь — поддержку тегов.

Выглядит предыдущий пример в TextMate вот так:

<a class="screenshot" href="https://www.monosnap.com/image/KCWGzuc3e3GOtwIZbMJ6zDTRX.png" rel="screenshot" title="TaskPaper документ в TextMate 2"><img src="https://www.monosnap.com/image/KCWGzuc3e3GOtwIZbMJ6zDTRX.png" alt="TaskPaper in TextMate 2" /></a>

Кроме того, т.к. это plain text, то TaskPaper-файлы можно хранить в Dropbox, искать по ним в [nvAlt](http://brettterpstra.com/projects/nvalt/), Spotlight, grep и т.д.

Т.к. я только начал использовать TaskPaper, у меня пока нет большой коллекции трюков для него. Но пару вещей я покажу уже сейчас.

## Скрипты и трюки

Первое что я хотел бы показать, это скрипт next actions от евангелиста OS X [Brett Terpstra](http://brettterpstra.com).

Сам скрипт можно взять на [github](https://github.com/vyazovoi/na). Этот скрипт предназначен для работы с задачами, помеченными тегом @na. Этот тег означает next action из терминологии GTD. У каждого проекта или группы задач, одна задача должна быть выбрана как next action. Это та задача, которая будет выполняться, когда ты приступаешь к проекту. Но, на самом деле, никто не мешает отметить несколько задач этим тегом, чтобы выделить самые приоритетные задачи.

Функции этого скрипта:

- Без аргументов выводить na задачи из taskpaper файла в текущей директории.
- С аргументом -r выводить задачи рекурсивно (в скрипте задается количество уровней вложенности).
- С аргументом -a добавлять задачу в проект Inbox в файле todo.taskpaper в текущей директории.
- Выводить next actions из указанной директории, например: na Pro Blo выведет задачи из файла ./Projects/Blog/blog.taskpaper или любого другого со схожим путём к файлу.

Подробнее о том, как использовать скрипт, можно прочитать в [readme](https://github.com/vyazovoi/na/blob/master/readme.md).

И ещё одна вкусняшка: скрипт прописывается в PROMPT_COMMAND, таким образом он выводит все next задачи при переходе в директорию с taskpaper файлом. Получается что удобнее всего создавать отдельные для проектов taskpaper-файлы в директории проекта. Для этого в bash есть такой алиас:

	alias tp='touch todo.taskpaper && open -a TextMate.app todo.taskpaper'

Он создает файл todo.taskpaper в текущей директории и открывает его в TextMate.

Для того, чтобы быстро находить и открывать списки задач по проектам, ну и вообще не потеряться в куче taspaper-файлов, можно использовать Alfred. Для этого достаточно создать простой Workflow, который будет искать только по этим файлам. Мой вариант можно скачать [здесь](https://github.com/vyazovoi/AlfredWorkflows/raw/master/Todo.alfredworkflow). Я очень хочу сделать такой Workflow для Alfred, который будет не только находить списки задач, но и позволит работать с задачами внутри списков — вывод, фильтрация, проставление тегов, добавление задач. Если я это сделаю, то обязательно опубликую Workflow в блоге.

## TaskPaper на iOS

TaskPaper [есть и на iOS](https://itunes.apple.com/ru/app/id354540092?mt=8).

<a class="screenshot" href="https://www.monosnap.com/image/Cx6j9cBIxZFewCPKxbKuoKU1S.png" rel="ios" title="Выбор проекта"><img style="width: 250px;" src="https://www.monosnap.com/image/Cx6j9cBIxZFewCPKxbKuoKU1S.png" alt="iOS TaskPaper" /></a>
<a class="screenshot" href="https://www.monosnap.com/image/W5sHGfw8Z8q3hcc933yY8l0mb.png" rel="ios"><img style="width: 250px;" src="https://www.monosnap.com/image/W5sHGfw8Z8q3hcc933yY8l0mb.png" alt="iOS TaskPaper" /></a>