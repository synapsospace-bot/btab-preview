# Інструкція зі встановлення та налаштування теми BTAB на Drupal 11

Цей посібник створено для власника сайту та адміністраторів веб-студії **BTAB.EU**. Тема розроблена за стандартами **Drupal 11** з використанням шаблонізатора **Twig 3**, мікроформатів SEO та інтерактивного стилю **Bubble Poster Design** (з анімаціями бульбашок, фізикою зіткнень, 4 палітрами та біжучими стрічками).

---

## 1. Структура архіву `btab_theme.zip`

Архів містить повноцінну автономну тему оформлення:
```text
btab_theme/
├── btab_theme.info.yml         # Метадані теми, сумісність з Drupal 11, оголошення регіонів
├── btab_theme.libraries.yml    # Підключення CSS, JS, Google Fonts
├── btab_theme.theme            # Препроцес функції Twig (preprocess_page, preprocess_html)
├── config/
│   └── install/
│       └── btab_theme.settings.yml # Базові налаштування теми
├── css/
│   └── main.css                # Повний набір стилів Bubble Poster, темні теми, палітри, сітки
├── js/
│   └── app.js                  # Фізичний рушій кульок HTML5 Canvas, 100% переклади (BG, EN, UA, RU), калькулятор
├── images/
│   ├── logo.svg                # Фірмовий векторний логотип BTAB
│   └── portfolio/              # 10 реальних кейсів студії (оптимізовані WebP/JPG/PNG)
└── templates/
    └── layout/
        ├── html.html.twig           # Каркас HTML5, OpenGraph, Favicon
        ├── page--front.html.twig    # Головна сторінка з Bubble Poster Hero та біжучими стрічками
        ├── page.html.twig           # Внутрішні сторінки Drupal
        └── region.html.twig         # Обертка регіонів
```

---

## 2. Швидке встановлення теми в Drupal 11

### Спосіб А: Через Drush (Рекомендовано для розробників)
1. Розпакуйте папку `btab_theme` у директорію вашого сайту:
   ```bash
   /web/themes/custom/btab_theme
   ```
2. Виконайте в терміналі:
   ```bash
   drush theme:install btab_theme
   drush config:set system.theme default btab_theme -y
   drush cache:rebuild
   ```

### Спосіб Б: Через панель керування Drupal 11
1. Завантажте папку `btab_theme` на сервер у `/themes/custom/btab_theme`.
2. Перейдіть у панель адміністратора: **Управління (Manage) → Оформлення (Appearance)** (`/admin/appearance`).
3. Знайдіть у списку тему **BTAB Modern Bubble Poster Theme**.
4. Натисніть **Встановити та призначити за замовчуванням (Install and set as default)**.
5. Очистіть кеш: **Керування → Конфігурація → Розробка → Продуктивність → Очистити весь кеш (Clear all caches)**.

---

## 3. Налаштування багатомовності (BG, EN, UA, RU)

Тема повністю підтримує 4 мови без жодного мовного змішування.
1. Увімкніть стандартні модулі ядра Drupal:
   - `Language`
   - `Content Translation`
   - `Interface Translation`
   - `Configuration Translation`
2. Перейдіть у **/admin/config/regional/language**:
   - Додайте мови: **Болгарська (BG)** (Основна/Default), **Англійська (EN)**, **Українська (UA)**, **Російська (RU)**.
3. Всі блоки та елементи теми мають атрибути `data-i18n` і автоматично синхронізуються як на фронтенді через `app.js`, так і через стандартний перекладач інтерфейсу Drupal `|t`.

---

## 4. Налаштування блоків та регіонів

Тема має наступні стандартні регіони:
- `header` — Верхня навігація та логотип.
- `hero` — Інтерактивна секція Bubble Poster (якщо вимкнено блок, відображається дефолтний віджет із кульками та тестом швидкості).
- `highlighted` — Важливі сповіщення / акції.
- `content` — Основний вміст (ноди, сторінки, бриф).
- `sidebar_first` — Бічна колонка для блогу або каталогу.
- `footer` — Підвал сайту з контактами та юридичною інформацією.

Керування блоками здійснюється в: **/admin/structure/block**.

---

## 5. Підключення домену `btab.eu` та SSL

1. **DNS Налаштування (Cloudflare / Хостинг)**:
   - `A` запис: `@` → IP адреса вашого сервера.
   - `CNAME` запис: `www` → `btab.eu`.
2. **Конфігурація Nginx**:
   ```nginx
   server {
       listen 80;
       server_name btab.eu www.btab.eu;
       return 301 https://$host$request_uri;
   }

   server {
       listen 443 ssl http2;
       server_name btab.eu www.btab.eu;
       root /var/www/btab.eu/web;

       ssl_certificate /etc/letsencrypt/live/btab.eu/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/btab.eu/privkey.pem;

       location / {
           try_files $uri /index.php?$query_string;
       }

       location ~ '\.php$|^/update.php' {
           fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
           fastcgi_index index.php;
           include fastcgi_params;
           fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       }

       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2)$ {
           expires max;
           log_not_found off;
           add_header Cache-Control "public, no-transform";
       }
   }
   ```
3. Отримання безкоштовного SSL сертифіката:
   ```bash
   certbot --nginx -d btab.eu -d www.btab.eu
   ```

---

## 6. Як змінити ціни, контакти чи додати новий кейс

- **Зміна контактів / телефонів**: відредагуйте блок у Drupal або файл `templates/layout/page--front.html.twig`.
- **Калькулятор цін**: базові розцінки (€650, €1250, €1850 тощо) та терміни налаштовуються у файлі `js/app.js` у об'єкті `calcState` та функції `updateCalculator()`.
- **Додавання робіт у портфоліо**: об'єкт `portfolioItems` у файлі `js/app.js` містить масиви назв, описів та міток для всіх 4 мов. Достатньо додати новий елемент, і він автоматично отримає номер (#11, #12...), фільтр та модальне вікно.
