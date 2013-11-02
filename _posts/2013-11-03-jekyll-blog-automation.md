---
layout: post
title: Автоматизация jekyll блога, часть вторая
date: 2013-11-03 01:59
comments: true
categories: jekyll workflow OSX hazel alfred 
href: 
icon: Terminal_icon.png
---

Я уже писал про [автоматизацию публикации в блог с hazel](/blog/2013/10/22/hazel-jekyll-automation/). Сегодня я немного доработал этот workflow и хочу поделиться. Возможно кому-то понравится такая идея, а реализация может быть и другой (т.к. я ещё не достаточно хорошо её отработал).

Покажу процесс от создания черновика до публикации на github за пять шагов:
<!--more-->

### Шаг 1

С помощью простого workflow для Alfred2 я открываю на редактирование черновик или создаю новый. Черновику я даю сразу правильное имя (без даты), например: jekyll-blog-automation. Пост на стадии черновика выглядит как обыкновенный markdown документ с одной оговоркой — только один заголовок первого уровня, который затем и станет заголовком поста.

![alfred workflow](https://www.monosnap.com/image/1NfhYioXB08PKbYJvo47ypTwn.png)
![blog post](https://www.monosnap.com/image/hsvV14yotADdzLMhB4hjLOusW.png)

### Шаг 2

Когда пост готов к публикации, я проставляю у него теги, которые затем станут тегами для публикации в блоге. И ещё проставляю специальный тег done. В OS X теперь это делается множеством способов, вот один из них:

![mavericks tags](https://www.monosnap.com/image/DqA3wrnud7alek8ZosUfay4Kk.png)

### Шаг 3

Если у черновика появляется тег done, то в дело вступает [Hazel](http://paul.elms.pro/blog/2013/10/18/hazel-vs-automator/). Сначала он запускает скрипт, который создает в посте yaml метаданные, проставляет в них теги, заголовок, дату и время и снимает с него тег done. Затем он перемещает черновик в папку _posts блога, переименовывает файл, добавляя к нему дату, и открывает его снова на редактирование.

![hazel rules](https://www.monosnap.com/image/A90ST5M6Ffv2lqJG4HZ0G6WJA.png)

Скрипт tagpost.sh:

{% highlight bash %}
#!/bin/sh

tags="`/Users/paul/bin/openmeta -t -p $1 | sed -E 's/\ [^\ ]+.md$//' | sed 's/done//'`"

title="`head $1 | grep -E -o '^# .*$' | tr -d '#'`"
date="`date +%Y-%m-%d`"
time="`date +%H:%M`"

perl -p -e 's/^#\ .*\n//' $1 > /tmp/tagpost

echo "---
layout: post
title:$title
date: $date $time
comments: true
categories: $tags
href: 
icon: _icon.png
---" > $1

cat /tmp/tagpost >> $1

/Users/paul/bin/openmeta -s $tags -p $1
{% endhighlight %}

### Шаг 4

Теперь у меня есть готовый к публикации пост, в котором я могу сделать необходимые мне правки метаданных:

![yaml](https://www.monosnap.com/image/4gz2lEGwWmMQxRWwEfWEhMqrg.png)

### Шаг 5

Я снова проставляю у него тег done и на этот раз hazel запускает скрипт, который отправляет пост на github:

{% highlight bash %}
#!/bin/sh

cd ~/Projects/vyazovoi.github.io
git add _posts/`basename $1`
git commit -m "automated blog post: `basename $1`"
git push
{% endhighlight %}

В общем, в этот workflow можно ещё много разных вещей подключить, например, предпросмотр с локально установленным jekyll. Выглядит всё это, возможно, слишком сложно, но на самом деле это довольно просто. На деле получается вот так: пишем текст, ставим теги, правим метаданные, отправляем в блог. Кроме того, прописанные у постов теги позволяют удобно ориентироваться среди них в Finder.

На самом деле jekyll + github может быть довольно удобной платформой для блога. Одно время я уже [предпринимал попытки отказаться](http://paul.elms.pro/blog/2013/05/04/novaia-platforma-dlia-blogha/) от неё в пользу удобного мобильного постинга. Но вопрос с мобильными публикациями уже решен, как-нибудь напишу и об этом в блог.