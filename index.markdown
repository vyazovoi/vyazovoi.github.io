---
title: Paul Elms
layout: default
description: "Страничка Вязового Павла. Заметки про Mac OS X, Android, свободное ПО, iOS и не только."
keywords: "Павел Вязовой, Pavel Vyazovoi, Paul Elms, opensource, Свободное ПО, linux, android, macosx, osx, apple, ios, webdev, web development, emacs"
---
<img src="/images/photo.jpg" alt="Фото" title="Фото" style="float: right;">
  
_&laquo;Если тебе дадут линованную бумагу, пиши поперек&raquo;  
&copy; эпиграф к роману &laquo;451&deg; по Фаренгейту&raquo;_
  
###Об авторе

Меня зовут Павел Вязовой. Я родился в 1988 году, женат, есть сын. В настоящий момент работаю программистом в компании "ЛайтСофт".

Мои теги: Mac OS X, iOS, Emacs, свободное ПО, GNU/Linux, Android, Google Chrome OS.
	
Однажды я переводил свой блог в Google Translate и он перевёл "Павел Вязовой" как "Paul Elms". После этого моей жене пришло в голову зарегистрировать такой домен, а я стал использовать это имя как псевдоним.
    
Редактор блога -- [Marina Elms](http://marina.elms.pro)

###Блог
	
<ul>
	{% for post in site.posts limit:3 %}
  		<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
	{% endfor %}
	<a href="/blog/">Читать дальше</a>
</ul>
  
###Контакты
    
- E-mail: <a href="mailto:paul@elms.pro">paul@elms.pro</a>
- Skype: vyazovoi
- Google Talk: paul@elms.pro
- [twitter](http://twitter.com/vyazovoi)
- [github](http://github.com/vyazovoi)

<div class="clear"></div>
