---
layout: post
title: Красивый git log
description: Алиас для git, который выводит git log в приятном глазу виде
date: 2014-04-09 09:25
comments: true
categories: git cli runix
---
<p style="text-align: center;">
<a class="screenshot" href="http://monosnap.com/image/SjjpMWrXkdXmMwb4OYT0wyu3O6rxZB.png" rel="screenshot" style="margin: 0 auto;" title="Красивый git log"><img src="http://monosnap.com/image/SjjpMWrXkdXmMwb4OYT0wyu3O6rxZB.png" alt="pretty git log" style="max-width: 700px;" /></a>
</p>

Добавить alias:

	git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset' --abbrev-commit --date=relative"

Подсмотрел где-то в комментариях на хабре.  
Использовать через git lg.
