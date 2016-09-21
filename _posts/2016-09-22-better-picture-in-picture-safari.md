---
layout: post
title: \"Более лучший\" Picture In Picture для Safari
description: PiP в Safari (10.12 Sierra) по горячей клавише на любом сайте
date: '2016-09-22 02:00'
comments: true
categories: macOS Safari
href: null
icon: Safari_icon.png
---
В Safari 10 (macOS Sierra) анонсирован режим "Picture In Picture" (на самом деле был зашит уже и в Safari 9). Это когда онлайн-видео проигрывается не на странице, а в отдельном плавающем окне, которое расположено всегда поверх всех окон. Примерно так же, как и в iOS 9, только должно работать для любого html5 видео в Safari (так же замечено в iTunes).

Проблема текущей реализации только вот в чем: чтобы запустить PiP на YouTube, нужно дважды вызвать контекстное меню (сначала появляется контекстное меню плеера youtube, затем системное, где уже есть нужная опция). На том же vimeo в плеер встраивается отдельная кнопка для PiP, но появляется она только после паузы и повторного воспроизведения. А на других сайтах вообще не удается запустить PiP таким способом.

Для решения этой проблемы кто-то создал расширение для Safari: https://github.com/arnoappenzeller/PiPifier

Но у расширения есть свои недостатки:

1. Оно почему-то не работает в полноэкранном Safari
2. Т.к. реализовано в виде native extension, приходится тащить вместе с расширением бесполезное приложение-пустышку, без которого расширение не работает
3. На YouTube оно работает только после того как пользователь тыкнул в видео курсором (мышкой, трекпадом), отправка события клика работает, но не помогает

В общем, я запилил свой простейший вариант в виде Automator Workflow, который (automator в смысле) в очередной раз доказал свою полезность. Плюсы:

1. Работает в full screen
2. Можно повесить действие на горячую клавишу, так же доступно через меню Safari
3. На YouTube работает без предварительного клика по видео

Ссылка на workflow, нужно запустить его в macOS, оно предложить установить его в систему: https://cloud.mail.ru/public/gMLj/fcVwQQWfZ

Назначить горячую клавишу как обычно в настройках системы, клавиатура, сервисы. Если сервис не появится в меню Safari, то вот альтернативный вариант, который после перезагрузки системы должен все-таки появиться, правда уже у всех приложений: https://cloud.mail.ru/public/24G1/QG4LSG5pn

Собственно суть:

```
on run {input, parameters}

	set pipscript to "
		var video = document.querySelectorAll('video')[0];
		if (video !== undefined && video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === 'function') {
			video.webkitSetPresentationMode(video.webkitPresentationMode === 'picture-in-picture' ? 'inline' : 'picture-in-picture');
		}
	"

	tell application "Safari"
		activate
		do JavaScript pipscript in document 1 # in current tab of first window
	end tell

	return input
end run
```
