---
layout: post
title: "Правильная установка ctags с расширенной поддержкой PHP в OS X"
date: 2013-10-03 15:09
comments: true
categories: OSX PHP
icon: Aquamacs_icon.png
---
На github есть [форк ctags с расширенной поддержкой PHP](https://github.com/zargener/ctags). Скорее всего, мы не скоро дождемся этого в основной ветке, поэтому проще всего установить этот форк самостоятельно прямо сейчас. Вопрос только в том, как это правильно сделать.

У вас уже установлен [homebrew](http://brew.sh)? Если нет, устанавливайте:

	ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"

В homebrew уже есть рецепт для сборки и установки ctags, нужно только правильно отредактировать его.

Сначала делаем так:

	brew update
	brew edit ctags

Откроется рецепт на редактирование, меняем в нем следующее:

1. Url меняем на следующий:

		url 'https://github.com/vyazovoi/ctags/archive/master.zip'

2. Обычно brew берет номер версии из имени файла, но в master.zip нет информации о версии, поэтому на следующей строке после url добавляем:

		version '5.8'

3. Комментируем символом "#" строку с sha:

		# sha1 '482da1ecd182ab39bbdc09f2f02c9fba8cd20030'

Всё, закрываем редактор с сохранением изменений и запускаем сборку ctags:

	brew install ctags

Он сам подтянет за собой все зависимости и соберет ctags (как в портах freebsd или портеже gentoo).

P.S. А ещё можно установить **brew-cask** и после этого можно устанавливать многие программы без сборки: brew cask install evernote, brew cask install aquamacs, brew cask install iterm2 и т.д.

P.P.S. Вот только проблема — textmate вообще никак работает с ctags, поэтому я возвращаюсь к Emacs.