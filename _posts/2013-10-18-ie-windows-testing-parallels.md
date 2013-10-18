---
layout: post
title: "Скрипт загрузки виртуальных машин с разными версиями IE для тестирования верстки"
date: 2013-10-18 14:42
comments: true
categories: OSX Веб-разработка
icon: ParallelsDesktop_icon.png
---
Может кому-то пригодится, чтобы не составлять список на загрузку вручную. Этот скрипт выгрузит с помощью curl в текущую директорию все виртуальные машины с разными версиями Windows и IE. Виртуалки под Parallels Desktop.

Сами виртуалки отсюда: [modern.ie](http://www.modern.ie/ru-ru/virtualization-tools#downloads).

В виртулках триальный windows, поэтому не сохраняйте изменения и всё, можно легально (насколько я понял) тестировать вёрстку и какие-то проекты.

[Прямая ссылка на скрипт](http://d.pr/n/snpa+)
<!--more-->

Его содержимое:

{% highlight bash %}
# Инструкции
# 1. Загрузите все SFX- и RAR-файлы для виртуальной машины.
# 2. Из терминала выполните загруженный файл, набрав chmod +x filename.sfx только для SFX-файла.
# 3. Запустите SFX-файл из терминала, например при помощи./filename.sfx, и он распакуется в PVM-файл, который можно будет открыть при помощи Parallels.

# Альтернативный вариант извлечения
# Если у вас возникли проблемы при использовании самораспаковывающегося архива, то, независимо от используемой платформы размещения, вы сможете установить программу, которая распаковывает RAR-файлы, и использовать ее для распаковки виртуальной машины.

echo "IE6 XP"

curl -O "https://az412801.vo.msecnd.net/vhd/IEKitV1_Final/Parallels/OSX/IE6_XP/IE6.XP.For.MacParallels.sfx"
curl -O "https://az412801.vo.msecnd.net/vhd/md5/IE6.XP.For.MacParallels.txt"

echo "IE8 XP"

curl -O "https://az412801.vo.msecnd.net/vhd/IEKitV1_Final/Parallels/OSX/IE8_XP/IE8.XP.For.MacParallels.sfx"
curl -O "https://az412801.vo.msecnd.net/vhd/md5/IE8.XP.For.MacParallels.txt"

echo "IE7 Vista"

curl -O "https://az412801.vo.msecnd.net/vhd/IEKitV1_Final/Parallels/OSX/IE7_Vista/IE7.Vista.For.MacParallels.part0{1.sfx,2.rar,3.rar,4.rar}"
curl -O "https://az412801.vo.msecnd.net/vhd/md5/IE7.Vista.For.MacParallels.part0{1,2,3,4}.txt"

echo "IE8 Win7"

curl -O "https://az412801.vo.msecnd.net/vhd/IEKitV1_Final/Parallels/OSX/IE8_Win7/IE8.Win7.For.MacParallels.part0{1.sfx,2.rar,3.rar,4.rar}"
curl -O "https://az412801.vo.msecnd.net/vhd/md5/IE8.Win7.For.MacParallels.part0{1,2,3,4}.txt"

echo "IE9 Win7"

curl -O "https://az412801.vo.msecnd.net/vhd/IEKitV1_Final/Parallels/OSX/IE9_Win7/IE9.Win7.For.MacParallels.part0{1.sfx,2.rar,3.rar,4.rar}"
curl -O "https://az412801.vo.msecnd.net/vhd/md5/IE9.Win7.For.MacParallels.part0{1,2,3,4}.txt"

echo "IE10 Win7"

curl -O "https://az412801.vo.msecnd.net/vhd/IEKitV1_Final/Parallels/OSX/IE10_Win7/IE10.Win7.For.MacParallels.part0{1.sfx,2.rar,3.rar,4.rar}"
curl -O "https://az412801.vo.msecnd.net/vhd/md5/IE10.Win7.For.MacParallels.part0{1,2,3,4}.txt"

echo "IE11 RP Win7"

curl -O "https://az412801.vo.msecnd.net/vhd/IEKitV1_Final/Parallels/OSX/IE11_Win7_2/IE11.Win7.For.MacParallels.part0{1.sfx,2.rar,3.rar,4.rar}"
curl -O "https://az412801.vo.msecnd.net/vhd/md5/IE11.Win7.For.MacParallels.part0{1.sfx,2.rar,3.rar,4.rar}.2.txt"

echo "IE10 Win8"

curl -O "https://az412801.vo.msecnd.net/vhd/IEKitV1_Final/Parallels/OSX/IE10_Win8/IE10.Win8.For.MacParallels.part0{1.sfx,2.rar,3.rar,4.rar,5.rar}"
curl -O "https://az412801.vo.msecnd.net/vhd/md5/IE10.Win8.For.MacParallels.part0{1,2,3,4,5}.txt"

echo "IE 11 Preview Win8.1"

curl -O "https://az412801.vo.msecnd.net/vhd/IEKitV1_Final/Parallels/OSX/IE11_Win81/IE11.Win8.1Preview.For.MacParallels.part{1.sfx,2.rar,3.rar}"
curl -O "https://az412801.vo.msecnd.net/vhd/md5/IE11.Win8.1Preview.For.MacParallels.part{1.sfx,2.rar,3.rar}.txt"
{% endhighlight %}