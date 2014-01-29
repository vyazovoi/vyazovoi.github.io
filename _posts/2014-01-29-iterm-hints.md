---
layout: post
title: Пара советов по работе с iTerm2
description: Как убрать hotkey window iterm2 из mission control и позволить ему работать в полноэкранных приложениях
date: 2014-01-29 20:20
comments: true
categories: iTerm OSX 
href: https://code.google.com/p/iterm2/
icon: iTerm_icon.png
---

Если вы не используете "Hotkey Window" в [iTerm2](https://code.google.com/p/iterm2/), то вам это будет бесполезно.

Hotkey Window — специальный профиль для [iTerm2](https://code.google.com/p/iterm2/), который реализует тоже самое, что и [TotalTerminal](http://totalterminal.binaryage.com) для стандартного терминала.

### Убрать Hotkey Window из списка окон в Mission Control

По-умолчанию Hotkey Window отображается в Mission Control в виде невидимого окна (как-то так, да). Чтобы исправить это открываем настройки iTerm и ставим галочку на поле "Closing Hotkey Window restores focus to last window, but may switch Spaces".

### Позволить Hotkey Window окну открываться поверх Mission Control и полноэкранных окон

По-умолчанию, Hotkey Window не может открываться поверх полноэкранных окон и в Mission Control. Вместо этого, происходит переключение на обычный рабочий стол, что лично меня очень раздражает. Автор iTerm2 говорит что не смог найти нормально решения этой проблемы в Lion-Mavericks. На самом деле, если небольшой хак, у которого есть один минус: если вы пользуетесь не только Hotkey Window, но и обычным профилем, то не сможете переключаться на окна iTerm2 через ⌘TAB. Но в Mission Control такие окна все равно остаются, так что меня полностью устраивает такой хак.

Применить его очень просто, надо закрыть iTerm и в Info.plist программы поставить флаг LSUIElement в true:

    open /Applications/iTerm.app/Contents/Info.plist

У меня он открылся в редакторе Xcode для п-листов. Далее жмем там Editor > Add Item и вставляем в новое поле LSUIElement (его имя автоматически поменяется на другое), а значение меняем на "Да" (true, 1).

Надеюсь кому-то это поможет и избавит от рысканья по баг-трекеру.