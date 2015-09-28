---
layout: post
title: Управление сервисами в homebrew OS X
description: Автоматический запуск сервисов, установленных через brew
date: 2015-09-28 11:50
comments: true
categories: OSX CLI
icon: Terminal_icon.png
---

Good news, everyone! Оказывается, есть хелпер для brew, который позволяет управлять сервисами (установленными через brew). То, что так неудобно делается в OS X, и так здорово в большинстве дистрибутивов Linux.

Установка:

    brew tap homebrew/services
    brew update

Всё! Использование:

    # справка по использованию
    brew services
    # запускаем сервис (будет загружаться после логина пользователя)
    brew service start redis
    # останавливаем сервис
    brew service stop redis
    # запускаем сервис через sudo (будет запускаться без логина пользователя и с правами root)
    sudo brew service start openvpn

Да это же ровно то, что нужно на девелоперской машине!