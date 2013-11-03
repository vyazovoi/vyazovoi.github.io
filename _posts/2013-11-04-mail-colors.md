---
layout: post
title: Цвета вместо флажков в Mail.app
date: 2013-11-04 00:02
comments: true
categories: OSX alfred AppleScript
href: 
icon: Mail_icon.png
---

Сам я в данный момент использую [Airmail](https://itunes.apple.com/us/app/airmail/id573171375?mt=12&uo=4&at=10l4tL&ct=searchlink), но давно хотел поделиться одной интересной фишкой для Mail.

Как-то нашел workflow для Alfred, позволяющее проставлять у писем флажки и … цвета. Таким образом узнал, что Mail.app умеет раскрашивать письма в списке.

Вот сам workflow: [mail color](http://cl.ly/252H150J4420)  
А вот для флажков: [mail flag](http://cl.ly/2T2z210p0K0l)

Выглядит это так: <!--more-->

<a class="screenshot" href="https://www.monosnap.com/image/8pYu4KxY0w5rzIZ0C3kSl9jkf.png" rel="screenshot" title="mail color alfred workflow"><img src="https://www.monosnap.com/image/8pYu4KxY0w5rzIZ0C3kSl9jkf.png" alt="mail.app background colors" style="width: 250px" /></a>

Те, у кого нет Alfred, могут прикрутить этот AppleScript к любой другой запускалке скриптов (пример с красным цветом):

{% highlight applescript %}
tell application "Mail"
	set maillist to selection
	repeat with i from 1 to number of items in maillist
		set this_item to item i of maillist
		if class of this_item is message then
			set background color of this_item to red
		end if
	end repeat
end tell
{% endhighlight %}

Проверенные варианты цветов: red, orange, yellow, green, purple, gray, **none**.