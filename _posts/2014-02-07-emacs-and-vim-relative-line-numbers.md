---
layout: post
title: Относительная нумерация строк в Emacs и VIM
description: Использование относительной нумерации строк увеличивает продуктивность работы в Emacs и VIM
date: 2014-02-07 14:32
comments: true
categories: emacs vim 
icon: Emacs_icon.png
---

Я не стану в очередной раз писать, что многие пользователи Emacs и VIM используют свои редакторы не эффективно, применяя к ним принципы работы с "обычными" редакторами кода типа Sublime Text и Textmate. Скажу только что среди всего прочего, для эффективного использования можно применять цифровые префиксы.

Например, если мне в Emacs надо удалить десять строк подряд: то я могу выжать комбинацию C-1 C-0 C-k. Это значит с зажатым контролом нажать по очереди 10 и k. Таким образом, Emacs повторит удаление строки 10 раз.

Отвлекаясь от темы, скажу что у меня контрол висит на капслоке и на return. Поэтому сложные емаксовые комбинации выжимать очень удобно. С дефолтным расположением контролов я бы использовал vim или один из "вимификаторов" емакса. Как настроить таким образом OS X я тоже напишу. А заодно и обновлю статью про переключение раскладок в Linux под OS X.

Итак, возвращаемся к теме: выжать числовой префикс удобнее, чем выделять эти строки или 10 раз нажимать C-k. Особенно если строк не 10, а скажем 30. Есть конечно и другие способы навигации и редактирования, но числовые префиксы – один из них, не самый худший.

Но... это не работает так хорошо, если нет относительной нумерации строк. Когда она включена, достаточно просто посмотреть на номер той строки, до которой необходимо выполнить удаление строк (или любое другое действие). Числовые префиксы можно использовать не только для работы со строками само собой, но для строк это удобно.

В vim относительная нумерация строк появилась, кажется, в версии 7.3. Включается она очень просто:

    set number
    set relativenumber

А в Emacs у меня есть два варианта. Во-первых, старый кусок кода, который устанавливает две полосы номеров строк: обычную и относительную. Но он гадит в Messages варнингами (но работает):

	(eval-after-load "linum"
	  '(defun linum-update (buffer)
	     "Update line numbers for all windows displaying BUFFER."
	     ;; this is only change but couldn't find better way to do it, tried
	     ;; linum-before-update-hook but it runs in an excursion so I couldn't get
	     ;; current line number
	     (setq linum-last-pos (line-number-at-pos))
	     (with-current-buffer buffer
	       (when linum-mode
	         (setq linum-available linum-overlays)
	         (setq linum-overlays nil)
	         (save-excursion
	           (mapc #'linum-update-window
	                 (get-buffer-window-list buffer nil 'visible)))
	         (mapc #'delete-overlay linum-available)
	         (setq linum-available nil)))))
	
	(defun linum-relativenumber-format (line-number)
	  (let ((diff (abs (- line-number linum-last-pos))))
	    (concat (propertize (format "%5d" line-number)
	                        'face 'linum-line)
	            (propertize (format "%3d" diff)
	                        'face (cond ((zerop diff) 'linum-zero)
	                                    ((eq 1 line-number) 'linum-top)
	                                    (t 'linum))))))
	
	;; (setq linum-format 'dynamic)
	(setq linum-format 'linum-relativenumber-format)

Во-вторых, в melpa и в рецептах el-get есть пакет linum-relative. Он заменяет обычную нумерацию на относительную. Работает из коробки, только я поменял у него оформление текущей строки через customize-face linum-relative-current-face.