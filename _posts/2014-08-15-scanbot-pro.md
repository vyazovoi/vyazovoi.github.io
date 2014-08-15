---
layout: post
title: Новый Scanbot Pro и новый workflow работы с документами
description: Самый простой способ подшивать бумажки в электронном виде с текстовым (OCR) слоем
date: 2014-08-15 14:25
comments: true
categories: OSX Workflow iOS
href: https://scanbot.io
icon: Scanbot_icon.png
---

В твиттере я назвал релиз новой версии Scanbot важным событием и не зря. Я тут недавно [писал]({% post_url 2014-08-09-ocr-workflow %}) как я делаю сканы документов при помощи Scanbot и затем накладываю текстовый слой при помощи пакета tesseract. Тут недавно вышла новая версия Scanbot и я категорически советую обратить на неё внимание.

В новом Scanbot появилась опция "Pro", которая активируется через встроенные покупки. Эта опция разблокирует важнейшие функции: OCR документов и умные имена файлов.

<a class="screenshot" href="http://monosnap.com/image/FQEXoXZXCInwFjWMtLPi8AfttPwBC3.png" rel="screenshot" title="Scanbot Pro features"><img src="http://monosnap.com/image/FQEXoXZXCInwFjWMtLPi8AfttPwBC3.png" alt="Scanbot Pro features" /></a>

Умные имена файлов это настройка, позволяющая указать с каким именем Scanbot будет создавать документы. В имя файла можно подставить различные параметры, но самой интересной мне показалась возможность подставить туда адрес, где был сделан снимок (страна, город, улица, дом).

<a class="screenshot" href="http://monosnap.com/image/jQaMGo183YffzaGEZeMbst0qqrKf0q.png" rel="screenshot" title="Smart file naming in Scanbot Pro"><img src="http://monosnap.com/image/jQaMGo183YffzaGEZeMbst0qqrKf0q.png" alt="Smart file naming in Scanbot Pro" /></a>

OCR документов нисколько не теряет в качестве по сравнению с моим [предыдущим]({% post_url 2014-08-09-ocr-workflow %}) способом обработки сканов, потому что на сервере Scanbot использует тоже tesseract.

Также Pro-версия разблокирует цветовые темы интерфейса и редактирование документа. Хотя с редактированием могу ошибаться – мне кажется оно доступно и в обычном варианте. Подробнее о Scanbot Pro можно прочитать [здесь](https://scanbot.io/en/pro.html).

Хочу напомнить о том, что Scanbot умеет автоматически выгружать документы в облачное хранилище. Таким образом, Scanbot максимально упростил работу со сканами документов: фотографируем одну или несколько страниц и нажимаем "сохранить". В фоне программа выполнит распознавание и загрузит документ в облако. На момент написания этого текста поддерживаются: Dropbox, Evernote, Google Drive, OneDrive, Box, Яндекс, любой WebDav сервер и некий Telekom Cloud (wtf?). Документы с OCR слоем затем очень удобно находить в Spotlight и копировать из них информацию. Качество распознавания на русском языке полностью удовлетворяет мои потребности (к сожалению, мне не с чем сравнить кроме того же tesseract).

Ещё одно преимущество Scanbot перед всеми сканерами документов, которые я пробовал – красивый интерфейс и удобство использования. Особенно отмечу его камеру – она в реальном времени дает подсказки "слишком темно, ближе, дальше, не двигайте" и сама спускает затвор в нужный момент. Работа со Scanbot – одно удовольствие.

<a class="screenshot" href="http://monosnap.com/image/6iXYbvI7o847VGc44Wc0ZLUG67Y6Ix.png" rel="screenshot" title="Scanbot iOS"><img src="http://monosnap.com/image/6iXYbvI7o847VGc44Wc0ZLUG67Y6Ix.png" alt="Scanbot iOS" /></a>
<a class="screenshot" href="http://monosnap.com/image/vTLN6OaKZEKRlKbieqs4z479fAhfWz.png" rel="screenshot" title="Слишком темно"><img src="http://monosnap.com/image/vTLN6OaKZEKRlKbieqs4z479fAhfWz.png" alt="Слишком темно" /></a>
<a class="screenshot" href="http://monosnap.com/image/jQ2IBqE3SXRSn88HtxbJyuc6nF3j1E.png" rel="screenshot" title="Не двигайте"><img src="http://monosnap.com/image/jQ2IBqE3SXRSn88HtxbJyuc6nF3j1E.png" alt="Не двигайте" /></a>
<a class="screenshot" href="http://monosnap.com/image/HWXixUMIsevtWYTFC5qsDadsiWDRLl.png" rel="screenshot" title="Редактирование документа"><img src="http://monosnap.com/image/HWXixUMIsevtWYTFC5qsDadsiWDRLl.png" alt="Редактирование документа" /></a>
<a class="screenshot" href="http://monosnap.com/image/ceu5wXQtD8ZeJQ1dMTcysVQOLNnOOI.png" rel="screenshot" title="OCR"><img src="http://monosnap.com/image/ceu5wXQtD8ZeJQ1dMTcysVQOLNnOOI.png" alt="OCR" /></a>

Есть ещё несколько моментов, которые я хотел бы отметить. Во-первых, Scanbot очень здорово оптимизирует размер документа. Когда я использовал собственный велосипед с ghostscript и tesseract, у меня размер файла увеличивался с 800кб до 5мб. Во-вторых, Scanbot есть не только для [iOS](https://itunes.apple.com/app/id834854351?at=10lbPv), но и для [Android](https://scanbot.io/). А ещё он умеет сканировать QR-коды и добавлять подпись на документы.

Единственная фича, которую я сейчас хочу от Scanbot для iOS – автоматическое удаление документа после успешной загрузки в облако.

И насчет геолокации: не всегда удобно оставлять адрес сканирования в имени файла. Поэтому есть идея добавить в hazel или automator скрипт, который будет переносить геолокацию из имени файла в мета-теги. В OS X задокументировано для этого специальное поле "kMDItemNamedLocation". Это позволит искать в spotlight по названию улицы, а может быть в перспективе получится реализовать и карту, на которой документы будут отображаться маркерами. Ещё можно показывать местоположение документа на карте по запросу, пример у меня уже есть с exif-тегами. Если что-то сделаю, то обязательно поделюсь в блоге.