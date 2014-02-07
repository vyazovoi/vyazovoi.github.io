---
layout: post
title: Смена дневной и ночной цветовых схем в VIM
description: Несколько способов автоматического изменения цветовых схем в VIM
date: 2014-02-07 12:26
comments: true
categories: vim OSX
icon: MacVim_icon.png
---

Я предпочитаю светлые цветовые схемы редактора кода, но пользоваться могу ими только днем. К вечеру приходится переключаться на менее привлекательную темную схему. Кроме того, на ярком солнце светлые темы предпочтительней.

Я уже писал про то, как менять [цветовые схемы по времени восхода и захода солнца в Emacs]({% post_url 2013-04-11-emacs-theme-change %}). Для VIM у меня есть даже больше вариантов, сейчас я ими поделюсь.

## По времени

Самое простое – переключать цветовые схемы по времени. Реализация очень простая:

	function MyColors()
	
	  let morning=6
	  let night=19
	
	  if strftime("%H") >= morning && strftime("%H") <= night
	    if &background == "dark"
	      set background=light
	    endif
	  elseif &background == "light"
	    set background=dark
	  endif
	
	  execute ":AirlineRefresh"
	
	endfunction
	
	if has("autocmd")
	  autocmd VimEnter * call MyColors()
	  autocmd bufwritepost * call MyColors()
	endif

Таким образом, мы можем не только переключать цветовые схемы, но и свойство background (это нужно для вимовского варианта solarized).

Вызов AirlineRefresh нужен после изменения темы, иначе он не переисовывается корректно.

Также можно настроить разные схемы для терминала и GUI, делается это примерно так:

	if has('gui_running')
	  set background=light
	else
	  set background=dark
	endif

## Вариант по времени №2

Есть ещё плагин для вима, который переключает цветовые схемы четыре раза в день. Но он переключает именно цветовые схемы, так что для популярной темы solarized не подходит (там нужно переключать свойство background).

Устанавливаем плагин, настраиваем темы (отдельно для gui и терминала) и время для переключения:

	Bundle 'daf-/vim-daylight'
	
	let g:daylight_morning_color_gvim = "Tomorrow"
	let g:daylight_afternoon_color_gvim = "solarized"
	let g:daylight_evening_color_gvim = "Tomorrow-Night"
	let g:daylight_late_color_gvim = "jellybeans"
	
	let g:daylight_morning_color_term = "Tomorrow"
	let g:daylight_afternoon_color_term = "mayansmoke"
	let g:daylight_evening_color_term = "Tomorrow-Night"
	let g:daylight_late_color_term = "jellybeans"
	
	let g:daylight_late_hour = 21
	let g:daylight_morning_hour = 7
	let g:daylight_afternoon_hour = 12
	let g:daylight_evening_hour = 18

## Переключение по восходу и заходу солнца

Это уже интереснее. Для настройки плагина необходимо указать свои координаты, где их взять я уже писал в заметке для [Emacs]({% post_url 2013-04-11-emacs-theme-change %}).

	Bundle 'cadadr/vim-sunflower'
	let g:sunflower_lat=53
	let g:sunflower_long=58
	let g:sunflower_colorscheme_day='solarized'
	let g:sunflower_colorscheme_night='jellybeans'

Минус реализации в том, что переключает только темы. С solarized работать не будет. Но исправить ведь очень легко, если кому-то захочется.

## Переключение по датчику освещения макбука

Это самое интересное, подумываю утащить к себе в Emacs. Ведь можно средь бела дня сидеть с наглухо закрытыми шторами, или вечером при искусственном освещении. Только нужно правильно настроить чувствительность, потому что будет очень неудобно, если тема будет меняться много раз за день.

Настроек у плагина никаких нет, потому что он просто меняет свойство background. В этом заключается и минус: с популярной темой solarized будет работать из коробки, а переключаться между разными темами не будет. Но я думаю каждый пользователь вима в состоянии хакнуть плагин и поменять set background на colorscheme.

В общем, просто устанавливаем плагин:

    Bundle 'Dinduks/vim-holylight'