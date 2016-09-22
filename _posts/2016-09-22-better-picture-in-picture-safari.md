---
layout: post
title: '«Более лучший» Picture In Picture для Safari'
description: PiP в Safari (10.12 Sierra) по горячей клавише на любом сайте, картинка в картинке на vk.com, youtube, vimeo и т.д.
date: '2016-09-22 02:00'
comments: true
categories: macOS Safari
href: null
icon: Safari_icon.png
---
В Safari 10 (macOS Sierra) анонсирован режим "Picture In Picture" (на самом деле был спрятан уже и в Safari 9). Это когда онлайн-видео проигрывается не на странице, а в отдельном плавающем окне, которое расположено всегда поверх всех окон. Примерно так же, как и в iOS 9+, только должно работать для любого html5 видео в Safari (так же замечено в iTunes).

Но, чтобы запустить PiP на YouTube, нужно дважды вызвать контекстное меню (сначала появляется контекстное меню плеера youtube, затем системное, где уже есть нужная опция). На том же vimeo в плеер встраивается отдельная кнопка для PiP, но появляется она только после паузы и повторного воспроизведения. А на других сайтах вообще не удается запустить PiP таким способом.

Для решения этой проблемы кто-то создал расширение для Safari: <https://github.com/arnoappenzeller/PiPifier>

<a class="screenshot" href="https://monosnap.com/file/FqNabhb3zO9OMPCd6uQM34lrftB85C.png" rel="screenshot" title="PiP на VK.com" sl-processed="1"><img src="https://monosnap.com/file/FqNabhb3zO9OMPCd6uQM34lrftB85C.png" alt="PiP на VK.com" class="img-thumbnail img-responsive"></a>

Но у расширения есть свои недостатки:

1. Оно почему-то не работает в полноэкранном Safari
2. Т.к. реализовано в виде native extension, приходится тащить вместе с расширением бесполезное приложение-пустышку, без которого расширение не работает
3. На YouTube оно работает только после того как пользователь тыкнул в видео курсором (мышкой, трекпадом), отправка события клика работает, но не помогает

В общем, я запилил свой простейший вариант в виде Automator Workflow, который (automator в смысле) в очередной раз доказал свою полезность. Плюсы:

1. Работает в full screen
2. Можно повесить действие на горячую клавишу, так же доступно через меню Safari
3. На YouTube работает без предварительного клика по видео

**Инструкция:**

1. [Скачать сервис](https://cloud.mail.ru/public/24G1/QG4LSG5pn)
2. Запустить, будет предложено установить его, согласиться на установку
3. В настройках системы назначить какое-нибудь сочетание клавиш на переключение текущего видео в режим PiP и обратно:

<!-- <https://cloud.mail.ru/public/gMLj/fcVwQQWfZ> -->

<a class="screenshot" href="https://monosnap.com/file/Nm4i6aO8kfBWJTPVY4P5cIm1iHvVFs.png" rel="screenshot" title="picture in picture hotkey"><img src="https://monosnap.com/file/Nm4i6aO8kfBWJTPVY4P5cIm1iHvVFs.png" alt="picture in picture hotkey" /></a>

Сам скрипт:

```AppleScript
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
