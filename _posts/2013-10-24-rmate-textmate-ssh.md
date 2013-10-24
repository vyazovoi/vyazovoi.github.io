---
layout: post
title: "Редактирование файлов по SSH в Textmate2"
date: 2013-10-24 15:44
comments: true
categories: OSX
href: http://macromates.com
icon: TextMate_icon.png
---
Textmate уже потерял былую славу (имхо), но вот эта фишка до сих пор удерживает его от удаления с моего компьютера. Кстати, если кто-то не знает — textmate 2 на время разработки бесплатен.

Благодаря скрипту rmate можно редактировать удаленные файлы. Выглядит это так: находясь на удаленном сервере можно использовать комманду rmate /path/to/file чтобы редактировать файлы в локальном textmate 2. Все изменения моментально применяются на сервере, все очень прозрачно и никаких задержек.

Сам скрипт rmate написан на ruby. Но если на сервере нет возможности использовать ruby, тогда есть вариант этого скрипта на bash ([тыц][bashrmate]), который работает ничуть не хуже (я не заметил разницы).
<!--more-->

Сначала необходимо залить на сервер сам файл rmate, дать ему права на выполнение и поместить его в $PATH. Например, так:

	scp /Applications/TextMate.app/Contents/Frameworks/Preferences.framework/Versions/A/Resources/rmate example.com:/usr/local/bin


Затем проверить опцию "Accept rmate connections":

<a class="screenshot" href="https://www.monosnap.com/image/awK04nCcufODrJwJkMomGhxfr.png" rel="screenshot" title=""><img src="https://www.monosnap.com/image/awK04nCcufODrJwJkMomGhxfr.png" alt="rmate settings" /></a>

Теперь почти всё готово, но нам нужно поднять ssh-туннель до сервера, чтобы это работало. Для этого подключаться к серверу нужно так:

	ssh -R 52698:localhost:52698 example.com

Или прописать это в конфигурацию ssh:

	Host example.com RemoteForward 52698 localhost:52698

Или даже так:

	Host * RemoteForward 52698 localhost:52698

Более подробное описание в [официальном блоге](http://blog.macromates.com/2011/mate-and-rmate/).

**UPD:** обалденное дополнение от @cybem, [rmate и sublime text](http://canadian-fury.com/2012/06/26/using-textmate-2-s-rmate-with-sublime-text-2/). Кроссплатформенно и с нормальной поддержкой [ctags в php](http://paul.elms.pro/blog/2013/10/03/osx-ctags-php-homebrew/).

[bashrmate]: https://github.com/aurora/rmate "Порт rmate на bash"