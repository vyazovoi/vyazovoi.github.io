---
layout: post
title: Быстрое сохранение web-страниц без рекламы в pdf
description: Делаем клиппер веб-страниц в pdf с AppleScript
date: 2014-01-27 19:30
comments: true
categories: workflow 
icon: AppleScript_icon.png
---

Если вспомнить, что есть хорошего в [Evernote]({% post_url 2013-09-26-evernote %}), то это будет точно его браузерный плагин. С его помощью можно быстро сохранить страницу или отдельный фрагмент в подшивку.

Я предпочитаю хранить информацию в виде файлов на своём компьюетере, поэтому я решил поискать другой способ сохранять нужную мне информацию. У меня уже есть браузерные букмарклеты для сохранения частей страницы в формате markdown, но это подходит только для сохранения текста с форматированием. Если нужно сохранить изображения или дизайн в первоначальном виде, то можно сделать скриншот веб-страницы целиком (при помощи webkit2png), а можно сделать печать в pdf. Печать в PDF предпочтительнее, потому что к изображению сохраняется ещё текстовый слой, так что его можно искать через spotlight и копировать из доумента. Преимущество "печати" ещё в том, что у многих сайтов css для печати сам скрывает рекламу и оформление. Но я сделал себе скрипт, который позволяет сохранить веб-страницу "как есть" (если нужно оформление всей страницы) или только текста (через instapaper mobilizer). Если повесить скрипт на хоткей, то можно сохранять страницы быстро.

А вот что мне интересно — расскажите кто как сохраняет контент из браузера?

А пока вот оба варианта скрипта:

{% highlight applescript %}
tell application "Safari"
    set theURL to URL of front document
    set theTitle to name of current tab of window 1 as text
end tell

tell application "Paparazzi!"
    launch hidden
    set minsize to {1024, 768}
    capture ("http://mobilizer.instapaper.com/m?u=" & theURL) min size minsize
    repeat while busy
        -- To wait until the page is loaded.
    end repeat
    save as PDF in (POSIX path of "/Users/paul/Desktop") & "/" & theTitle & ".pdf"
    quit
end tell
{% endhighlight %}

{% highlight applescript %}
tell application "Safari"
    set theURL to URL of front document
    set theTitle to name of current tab of window 1 as text
end tell

tell application "Paparazzi!"
    launch hidden
    set minsize to {1024, 768}
    capture theURL min size minsize
    repeat while busy
        -- To wait until the page is loaded.
    end repeat
    save as PDF in (POSIX path of "/Users/paul/Desktop") & "/" & theTitle & ".pdf"
    quit
end tell
{% endhighlight %}