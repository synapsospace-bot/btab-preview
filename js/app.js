/**
 * BTAB DIGITAL AGENCY — BUBBLE POSTER INTERACTIVE ENGINE & DRUPAL 11 BEHAVIORS
 * Features:
 * - 100% Comprehensive Multilingual System (BG, EN, UA, RU) for every element
 * - Interactive Pop-able Bubble Canvas Physics Engine (Hero Wordmark)
 * - 4 Color Palette Themes Switcher (Cyan, Violet, Emerald, Sunset)
 * - Reactive Project Cost & Timeline Calculator
 * - Filterable Poster Portfolio & Localized Case Study Modal
 * - Drupal.behaviors integration
 */

(function () {
  'use strict';

  // ==========================================
  // 1. MASTER MULTILINGUAL DICTIONARY
  // ==========================================
  const i18n = {
    BG: {
      // Navbar
      navServices: "Услуги",
      navVault: "Сейф",
      navPortfolio: "Портфолио",
      navCalculator: "Калкулатор",
      navWhyUs: "Предимства",
      navContacts: "Контакти",
      navDiscuss: "Започнете проект →",
      brandSubtitle: "Дигитално Студио",

      // Hero
      heroBadge: "Приемаме проекти за 2026 в ЕС и цял свят",
      heroIssueTag: "#2026",
      heroBubbleHint: "● КЛИКНЕТЕ ВЪРХУ БАЛОНИТЕ. ТЕ СЕ ПУКАТ.",
      heroAsteriskNote: "Инженерно проектиране на уеб системи от следващо поколение.",
      heroTitle: "Бързи, сигурни и високодоходни сайтове за вашия бизнес.",
      heroDesc: "Уеб студио BTAB (Бургас, България). Проектираме модерни уебсайтове на Drupal 11, OpenCart и Headless архитектури с гарантирана скорост PageSpeed 99+ и чист код без излишни зависимости.",
      heroBtnCalc: "Изчислете стойност →",
      heroBtnPortfolio: "Вижте нашите работи",

      // Benchmark
      benchTitle: "Тест за скорост в реално време",
      benchLive: "Google PageSpeed: 99+",
      benchBtabTag: "Код на BTAB",
      benchBtabSub: "Моментално зареждане за 0.4s",
      benchOtherTag: "Обикновени шаблони",
      benchOtherSub: "Загуба на 45% от клиентите",
      benchLcp: "Първо съдържание (LCP)",
      benchCls: "Стабилност на макета (CLS)",
      benchScore: "PageSpeed Индекс",

      // Marquee Ribbons
      marquee1: "DRUPAL 11 АРХИТЕКТУРА ✱ СКОРОСТ 0.4s ✱ GOOGLE PAGESPEED 99+ ✱ OPENCART 4 ✱ ЧИСТ КОД ✱ БЕЗПЛАТНА ПОДДРЪЖКА 6 МЕСЕЦА ✱ БЪЛГАРИЯ & ЕС ✱",
      marquee2: "✱ 10+ ГОДИНИ В ЕС ✱ 150+ ИЗПЪЛНЕНИ ПРОЕКТА ✱ БУРГАС · СОФИЯ · ВАРНА · ЕС ✱ ОФИЦИАЛЕН ДОГОВОР И ГАРАНЦИЯ ✱ БЪРЗ УЕБ ДИЗАЙН ✱",

      // Trust Stats
      statYears: "Години опит на пазара в ЕС",
      statProjects: "Успешно реализирани проекта",
      statSpeed: "Средна скорост на зареждане",
      statSupport: "Безплатна техническа поддръжка",

      // Calculator
      calcEyebrow: "Интерактивен калкулатор",
      calcTitle: "Изчислете бюджета и сроковете на вашия сайт",
      calcDesc: "Изберете параметрите на вашия бъдещ проект, за да получите точна и реалистична оценка за разработка.",
      calcStep1: "1. Тип на проекта",
      calcStep2: "2. CMS платформа и технологии",
      calcStep3: "3. Допълнителни модули",

      calcLanding: "Лендинг страница",
      calcLandingSub: "от 5 дни · от 650€",
      calcCorporate: "Корпоративен сайт",
      calcCorporateSub: "от 12 дни · от 1250€",
      calcShop: "Онлайн магазин",
      calcShopSub: "от 18 дни · от 1850€",
      calcCatalog: "Продуктов каталог",
      calcCatalogSub: "от 14 дни · от 1400€",
      calcAudit: "SEO & Ускоряване",
      calcAuditSub: "от 3 дни · от 450€",

      calcDrupalName: "Drupal 11 (Препоръчано)",
      calcDrupalSub: "Максимална сигурност и мащаб",
      calcOpencartName: "OpenCart 3 / 4",
      calcOpencartSub: "За търговия и магазини",
      calcHeadlessName: "Headless / React",
      calcHeadlessSub: "Ултра бързи веб приложения",

      calcOptMulti: "Многоезичност (2-4 езика)",
      calcOptPayment: "Онлайн плащания (Stripe/Борика)",
      calcOptCrm: "Интеграция с CRM / Склад",
      calcOptAi: "AI Асистент / Чатбот",

      calcEstimateTitle: "Предварителна оценка",
      calcTimeLabel: "Приблизителен срок:",
      calcTimeDays: "работни дни",
      calcBenefit1: "Гарантирана скорост PageSpeed 95+",
      calcBenefit2: "Официален договор с гаранция",
      calcBenefit3: "6 месеца безплатна поддръжка",
      calcOrderBtn: "Поръчайте по това изчисление →",
      calcDisclaimer: "Окончателната стойност се фиксира в договора след одобряване на детайлното задание.",

      // Services Matrix
      servicesEyebrow: "Пълен цикъл услуги",
      servicesTitle: "Всичко необходимо за вашия успех в интернет",
      servicesDesc: "От архитектура на базата данни и UX дизайн до SEO класиране и автоматизация.",
      serviceBtnConsult: "Заявете консултация →",

      service1Title: "Разработка на Drupal 11",
      service1Desc: "Корпоративни портали, многоезични платформи и специализирани уеб системи с най-новите стандарти за сигурност и бързина.",
      service2Title: "Онлайн магазини (E-Commerce)",
      service2Desc: "Мащабируеми интернет магазини на OpenCart и Drupal Commerce с картови плащания (Stripe, Борика, myPOS) и складов синхрон.",
      service3Title: "SEO аудит & Скорост 99+",
      service3Desc: "Оптимизация на Core Web Vitals, почистване на кода и регистрация в търсачките за челни позиции в Google.",
      service4Title: "Редизайн & Модернизация",
      service4Desc: "Преобразуване на остарели сайтове в съвременни, стилни и удобни дигитални инструменти с висока конверсия.",
      service5Title: "ШИ Асистенти & Чатботове",
      service5Desc: "Интеграция на интелигентни AI агенти, автоматизация на заявки в WhatsApp и Telegram и директна връзка с CRM.",
      service6Title: "Аерозъемка & Медия",
      service6Desc: "Професионално 4K видеозаснемане с дрон на недвижими имоти и бизнес обекти, както и създаване на фотобанки.",

      // Vault
      vaultEyebrow: "Интерактивен стъклен сейф",
      vaultTitle: "Интерактивни папки на вашите решения: от код до гаранция",
      vaultDesc: "Движете курсора за 3D наклон на матовото стъкло. Кликнете, за да отворите папката и разгледате проектните файлове.",
      vaultHint: "● Движете курсора за 3D наклон · Кликнете за отваряне · Натиснете + за добавяне на файл",
      folder1Title: "E-Commerce Системи",
      folder2Title: "Портали на Drupal 11",
      folder3Title: "Договор & Гаранция",
      filesWord: "файла",
      folderAddToast: "Файлът е добавен към сейфа!",

      // Portfolio
      portfolioEyebrow: "Избрани проекти",
      portfolioTitle: "Реални резултати за реални бизнеси",
      portfolioDesc: "Вижте как оптимизираните сайтове на BTAB увеличават продажбите на нашите партньори.",
      filterAll: "Всички работи",
      filterShop: "Онлайн магазини",
      filterDrupal: "Корпоративни на Drupal",
      filterServices: "Услуги & Туризъм",

      // Why Us
      whyEyebrow: "Защо BTAB",
      whyTitle: "Без компромиси в качеството и сигурността",
      whyDesc: "Ние не просто правим уеб страници — ние изграждаме високоефективен дигитален актив за вашия бизнес.",
      why1Title: "📋 Договор и гаранция",
      why1Desc: "Работим 100% официално. Пълното техническо задание, сроковете и гаранционните задължения са фиксирани в договора.",
      why2Title: "🚀 Чист код без излишък",
      why2Desc: "Без тежки готови теми и ненужни плъгини, които забавят сайта. Всяка функция е оптимизирана за мигновен отговор.",
      why3Title: "🎓 Обучение и поддръжка",
      why3Desc: "Безплатна 6-месечна поддръжка. Обучаваме вас или ваш служител за лесна и бърза работа с административния панел.",

      // Contact & Brief
      contactEyebrow: "Свържете се с нас",
      contactTitle: "Готови ли сте да изведете бизнеса си на ново ниво?",
      contactDesc: "Обадете се, пишете ни в месинджърите или попълнете краткия бриф. Първата консултация е напълно безплатна.",
      contactStudioName: "Студио BTAB (България)",
      contactOfficeAddress: "Централен офис: ж.к. Лазур 130, Бургас 8000, България. Работим с клиенти от Бургас, София, Пловдив, Варна, ЕС и света.",
      contactHoursLabel: "Работно време:",
      contactHoursVal: "Понеделник — Петък: 09:00 — 18:00 (EET)",
      contactDirectPhone: "Директен телефон",
      contactDirectWhatsapp: "WhatsApp чат",
      contactDirectTg: "Telegram контакт",
      contactDirectEmail: "Имейл адрес",

      contactFormName: "Вашето име *",
      contactFormPhone: "Телефон или WhatsApp / Telegram *",
      contactFormEmail: "Имейл адрес *",
      contactFormService: "Интересува ме услуга",
      contactFormMsg: "Разкажете накратко за вашите цели",
      contactFormMsgPlaceholder: "Опишете ни вашия проект, целева аудитория или линк към съществуващ сайт...",
      contactFormGdpr: "Съгласен съм с обработката на личните ми данни (GDPR) за целите на запитването.",
      contactFormSubmit: "Изпратете запитване →",
      contactSuccessToast: "Благодарим ви! Запитването е получено успешно. Ще се свържем с вас в рамките на 2 часа.",

      // Contact Options
      optDrupal: "Корпоративен сайт на Drupal 11",
      optShop: "Онлайн магазин (OpenCart / Headless)",
      optLanding: "Лендинг страница (Landing Page)",
      optRedesign: "Редизайн и ускоряване (PageSpeed 99+)",
      optSeo: "SEO оптимизация и одит",
      optAi: "ШИ Чатбот и автоматизация",

      // Footer
      footerDesc: "Веб-студио BTAB (Бургас, България). Професионална разработка, дизайн, SEO оптимизация и поддръжка на бързи уебсайтове от 2016 година.",
      footerColServices: "Услуги",
      footerColNav: "Навигация",
      footerColContacts: "Контакти",
      footerRights: "Всички права запазени. Изработено с прецизност от BTAB.",

      // Case Study Modal
      modalDetailsTitle: "Детайли за проекта",
      modalClose: "Затвори",
      modalObjectiveLabel: "Проектно задание и реализация:",
      modalObjectiveText: "Командата на BTAB извърши пълен цикъл проектиране, въведе чист структуриран код, микроформати Schema.org и осигури светкавично отваряне на мобилни устройства.",
      modalResultLabel: "Ключов бизнес резултат:",
      modalOrderSimilar: "Заявете проект като този →",
      modalLocationLabel: "Пазар / Локация:",
      modalStackLabel: "Технологичен стек:"
    },

    EN: {
      // Navbar
      navServices: "Services",
      navVault: "Vault",
      navPortfolio: "Portfolio",
      navCalculator: "Calculator",
      navWhyUs: "Why Us",
      navContacts: "Contacts",
      navDiscuss: "Start Project →",
      brandSubtitle: "Digital Studio",

      // Hero
      heroBadge: "Available for new projects in EU & Worldwide",
      heroIssueTag: "#2026",
      heroBubbleHint: "● CLICK THE BUBBLES. THEY POP.",
      heroAsteriskNote: "Engineering next-generation web platforms with speed by default.",
      heroTitle: "High-speed, conversion-driven websites engineered for business.",
      heroDesc: "BTAB Digital Agency (Burgas, Bulgaria). We build modern, secure websites on Drupal 11, OpenCart, and Headless architectures with guaranteed PageSpeed 99+ and clean bloat-free code.",
      heroBtnCalc: "Calculate Cost →",
      heroBtnPortfolio: "View Case Studies",

      // Benchmark
      benchTitle: "Live Real-Time Speed Benchmark",
      benchLive: "Google PageSpeed: 99+",
      benchBtabTag: "BTAB Clean Code",
      benchBtabSub: "Instant 0.4s load",
      benchOtherTag: "Bloated Templates",
      benchOtherSub: "Losing 45% of visitors",
      benchLcp: "Largest Contentful Paint (LCP)",
      benchCls: "Layout Shift (CLS)",
      benchScore: "PageSpeed Index",

      // Marquee Ribbons
      marquee1: "DRUPAL 11 ARCHITECTURE ✱ 0.4s LOAD TIME ✱ GOOGLE PAGESPEED 99+ ✱ OPENCART 4 ✱ CLEAN CODE ✱ 6 MONTHS FREE WARRANTY ✱ BULGARIA & EU ✱",
      marquee2: "✱ 10+ YEARS IN EU ✱ 150+ LAUNCHED SITES ✱ BURGAS · SOFIA · EU · WORLDWIDE ✱ OFFICIAL CONTRACT & GUARANTEE ✱ HIGH-PERFORMANCE WEB ✱",

      // Trust Stats
      statYears: "Years in the EU Market",
      statProjects: "Delivered Web Projects",
      statSpeed: "Average Page Load Time",
      statSupport: "Free Technical Warranty",

      // Calculator
      calcEyebrow: "Interactive Estimator",
      calcTitle: "Instant budget & timeline calculator",
      calcDesc: "Select your project specifications to get a realistic budget and delivery timeline estimate.",
      calcStep1: "1. Project Scope",
      calcStep2: "2. CMS & Tech Stack",
      calcStep3: "3. Add-on Capabilities",

      calcLanding: "Landing Page",
      calcLandingSub: "from 5 days · from €650",
      calcCorporate: "Corporate Website",
      calcCorporateSub: "from 12 days · from €1250",
      calcShop: "E-Commerce Store",
      calcShopSub: "from 18 days · from €1850",
      calcCatalog: "Product Catalog",
      calcCatalogSub: "from 14 days · from €1400",
      calcAudit: "SEO & Speed Audit",
      calcAuditSub: "from 3 days · from €450",

      calcDrupalName: "Drupal 11 (Recommended)",
      calcDrupalSub: "Maximum security and scale",
      calcOpencartName: "OpenCart 3 / 4",
      calcOpencartSub: "Built for e-commerce stores",
      calcHeadlessName: "Headless / React",
      calcHeadlessSub: "Ultra-fast modern web apps",

      calcOptMulti: "Multilingual (2-4 languages)",
      calcOptPayment: "Online Payments (Stripe/Borica)",
      calcOptCrm: "CRM / ERP Integration",
      calcOptAi: "AI Bot / Automation",

      calcEstimateTitle: "Estimated Investment",
      calcTimeLabel: "Estimated Timeline:",
      calcTimeDays: "business days",
      calcBenefit1: "PageSpeed 95+ Guarantee",
      calcBenefit2: "Official EU Contract & Warranty",
      calcBenefit3: "6 Months Free Technical Support",
      calcOrderBtn: "Submit Brief With This Estimate →",
      calcDisclaimer: "Final quote is fixed in the official agreement following technical specification review.",

      // Services Matrix
      servicesEyebrow: "Full-Cycle Services",
      servicesTitle: "Everything your business needs to dominate online",
      servicesDesc: "From custom database design and responsive UX wireframes to top-tier SEO rankings and automation.",
      serviceBtnConsult: "Request Consultation →",

      service1Title: "Drupal 11 Engineering",
      service1Desc: "Corporate portals, multilingual enterprise systems, and custom web applications with strict security and speed compliance.",
      service2Title: "E-Commerce Development",
      service2Desc: "Scalable stores on OpenCart and Drupal Commerce with seamless card gateways (Stripe, Borica, myPOS) and warehouse sync.",
      service3Title: "SEO Audit & Speed 99+",
      service3Desc: "Core Web Vitals acceleration, schema markup, and search index optimization to land in top Google rankings.",
      service4Title: "Redesign & Modernization",
      service4Desc: "Upgrading outdated websites into sleek, responsive digital instruments that increase conversions on all devices.",
      service5Title: "AI Assistants & Chatbots",
      service5Desc: "Deploying intelligent AI agents trained on company data, connected to WhatsApp, Telegram, and automated CRM webhooks.",
      service6Title: "Aerial 4K Video & Media",
      service6Desc: "Professional drone videography for commercial real estate, industrial facilities, and high-impact web media.",

      // Vault
      vaultEyebrow: "Interactive Glass Vault",
      vaultTitle: "Living Project Folders: From Clean Code to Enterprise Delivery",
      vaultDesc: "Hover to lean the frosted glass in 3D space. Click to fan out project deliverables, invoices, and specs.",
      vaultHint: "● Hover to lean · Click to open · Press + to add file",
      folder1Title: "E-Commerce Systems",
      folder2Title: "Drupal 11 Portals",
      folder3Title: "Contract & Warranty",
      filesWord: "files",
      folderAddToast: "File added to the vault!",

      // Portfolio
      portfolioEyebrow: "Featured Projects",
      portfolioTitle: "Proven track record of high-converting results",
      portfolioDesc: "See how BTAB high-speed websites deliver measurable business growth across Europe and the UK.",
      filterAll: "All Projects",
      filterShop: "E-Commerce",
      filterDrupal: "Corporate & Drupal",
      filterServices: "Services & Tourism",

      // Why Us
      whyEyebrow: "Why BTAB",
      whyTitle: "No compromises in quality and security",
      whyDesc: "We don't just build web pages — we construct high-return digital assets for your company.",
      why1Title: "📋 Official Contract & Warranty",
      why1Desc: "We operate 100% officially within the EU. Comprehensive specifications, milestones, and guarantees are legally bound.",
      why2Title: "🚀 Clean Code Without Bloat",
      why2Desc: "No bloated pre-made themes or excessive plugins that drag down performance. Every line is tuned for rapid response.",
      why3Title: "🎓 Training & Handover Support",
      why3Desc: "Complimentary 6-month technical warranty. We train your staff for seamless content and catalog management.",

      // Contact & Brief
      contactEyebrow: "Get In Touch",
      contactTitle: "Ready to accelerate your digital presence?",
      contactDesc: "Call us, chat via WhatsApp/Telegram, or send a brief. The initial technical consultation is completely free.",
      contactStudioName: "BTAB Studio (Bulgaria)",
      contactOfficeAddress: "Headquarters: Lazur 130, Burgas 8000, Bulgaria. Serving clients in Burgas, Sofia, Plovdiv, Varna, EU, and worldwide.",
      contactHoursLabel: "Working Hours:",
      contactHoursVal: "Monday — Friday: 09:00 — 18:00 (EET)",
      contactDirectPhone: "Direct Phone Call",
      contactDirectWhatsapp: "WhatsApp Chat",
      contactDirectTg: "Telegram Contact",
      contactDirectEmail: "Email Address",

      contactFormName: "Your Full Name *",
      contactFormPhone: "Phone or WhatsApp / Telegram *",
      contactFormEmail: "Email Address *",
      contactFormService: "Service Needed",
      contactFormMsg: "Project Goals & Scope",
      contactFormMsgPlaceholder: "Describe your project goals, target audience, or paste a link to an existing website...",
      contactFormGdpr: "I agree to personal data processing (GDPR) for project consultation purposes.",
      contactFormSubmit: "Send Project Inquiry →",
      contactSuccessToast: "Thank you! Your brief has been received. Our team will contact you within 2 business hours.",

      // Contact Options
      optDrupal: "Corporate Website on Drupal 11",
      optShop: "E-Commerce Store (OpenCart / Headless)",
      optLanding: "Landing Page (High-Conversion)",
      optRedesign: "Redesign & Acceleration (PageSpeed 99+)",
      optSeo: "SEO Optimization & Speed Audit",
      optAi: "AI Chatbot & Automation",

      // Footer
      footerDesc: "BTAB Web Studio (Burgas, Bulgaria). High-speed web engineering, responsive UI/UX design, SEO optimization, and reliable technical maintenance since 2016.",
      footerColServices: "Services",
      footerColNav: "Navigation",
      footerColContacts: "Contacts",
      footerRights: "All rights reserved. Engineered with precision by BTAB.",

      // Case Study Modal
      modalDetailsTitle: "Case Study Details",
      modalClose: "Close",
      modalObjectiveLabel: "Project Scope & Execution:",
      modalObjectiveText: "BTAB executed full-cycle engineering: clean modular code, Schema.org semantic data, and blistering 0.4s mobile performance.",
      modalResultLabel: "Key Business Metric:",
      modalOrderSimilar: "Request Similar Project →",
      modalLocationLabel: "Target Market:",
      modalStackLabel: "Technology Stack:"
    },

    UA: {
      // Navbar
      navServices: "Послуги",
      navVault: "Сейф",
      navPortfolio: "Портфоліо",
      navCalculator: "Калькулятор",
      navWhyUs: "Переваги",
      navContacts: "Контакти",
      navDiscuss: "Замовити сайт →",
      brandSubtitle: "Диджитал Студія",

      // Hero
      heroBadge: "Відкриті для нових проектів у 2026 (ЄС та світ)",
      heroIssueTag: "#2026",
      heroBubbleHint: "● КЛІКАЙТЕ НА КУЛЬКИ. ВОНИ ЛОПАЮТЬСЯ.",
      heroAsteriskNote: "Інженерія високонавантажених та надшвидких веб-систем.",
      heroTitle: "Надшвидкі сайти та веб-системи, що приносять клієнтів.",
      heroDesc: "Веб-студія BTAB (Бургас, Болгарія). Розробляємо сучасні сайти на Drupal 11, OpenCart та Headless архітектурах із гарантованою швидкістю PageSpeed 99+, бездоганною безпекою та чистим кодом.",
      heroBtnCalc: "Розрахувати вартість →",
      heroBtnPortfolio: "Переглянути кейси",

      // Benchmark
      benchTitle: "Тест швидкості в реальному часі",
      benchLive: "Google PageSpeed: 99+",
      benchBtabTag: "Чистий код BTAB",
      benchBtabSub: "Миттєве відкриття за 0.4с",
      benchOtherTag: "Важкі конструктори",
      benchOtherSub: "Втрата 45% відвідувачів",
      benchLcp: "Рендеринг контенту (LCP)",
      benchCls: "Зсув макета (CLS)",
      benchScore: "Індекс PageSpeed",

      // Marquee Ribbons
      marquee1: "АРХІТЕКТУРА DRUPAL 11 ✱ ШВИДКІСТЬ 0.4s ✱ GOOGLE PAGESPEED 99+ ✱ OPENCART 4 ✱ ЧИСТИЙ КОД ✱ 6 МІСЯЦІВ ГАРАНТІЇ ✱ БОЛГАРІЯ & ЄС ✱",
      marquee2: "✱ 10+ РОКІВ НА РИНКУ ЄС ✱ 150+ УСПІШНИХ САЙТІВ ✱ БУРГАС · СОФІЯ · ЄС · СВІТ ✱ ОФІЦІЙНИЙ ЄВРОПЕЙСЬКИЙ ДОГОВІР ✱",

      // Trust Stats
      statYears: "Років досвіду на ринку ЄС",
      statProjects: "Успішно запущених сайтів",
      statSpeed: "Середній час завантаження",
      statSupport: "Безкоштовний супровід",

      // Calculator
      calcEyebrow: "Онлайн калькулятор",
      calcTitle: "Прозорий розрахунок бюджету та строків",
      calcDesc: "Оберіть параметри вашого проекту та отримайте точну орієнтовну вартість розробки.",
      calcStep1: "1. Формат проекту",
      calcStep2: "2. CMS та стек технологій",
      calcStep3: "3. Додатковий функціонал",

      calcLanding: "Лендінг / Односторінковий",
      calcLandingSub: "від 5 днів · від 650€",
      calcCorporate: "Корпоративний сайт",
      calcCorporateSub: "від 12 днів · від 1250€",
      calcShop: "Інтернет-магазин",
      calcShopSub: "від 18 днів · від 1850€",
      calcCatalog: "Каталог продукції",
      calcCatalogSub: "від 14 днів · від 1400€",
      calcAudit: "SEO аудит та прискорення",
      calcAuditSub: "від 3 днів · від 450€",

      calcDrupalName: "Drupal 11 (Рекомендовано)",
      calcDrupalSub: "Максимальна безпека та масштаб",
      calcOpencartName: "OpenCart 3 / 4",
      calcOpencartSub: "Для електронної комерції",
      calcHeadlessName: "Headless / React",
      calcHeadlessSub: "Ультрашвидкі сучасні додатки",

      calcOptMulti: "Мультимовність (2-4 мови)",
      calcOptPayment: "Онлайн-оплата (Stripe/Борика)",
      calcOptCrm: "Інтеграція з CRM / Складом",
      calcOptAi: "ШІ-асистент / Чат-бот",

      calcEstimateTitle: "Орієнтовна вартість",
      calcTimeLabel: "Термін розробки:",
      calcTimeDays: "робочих днів",
      calcBenefit1: "Гарантія швидкості PageSpeed 95+",
      calcBenefit2: "Офіційний європейський договір",
      calcBenefit3: "6 місяців безкоштовного супроводу",
      calcOrderBtn: "Замовити за цим розрахунком →",
      calcDisclaimer: "Остаточна сума фіксується у договорі після затвердження технічного завдання.",

      // Services Matrix
      servicesEyebrow: "Комплексні послуги",
      servicesTitle: "Повний спектр веб-розробки для масштабування бізнесу",
      servicesDesc: "Від архітектури бази даних і прототипів до виходу в ТОП пошуку Google та налаштування реклами.",
      serviceBtnConsult: "Замовити консультацію →",

      service1Title: "Розробка на Drupal 11",
      service1Desc: "Корпоративні портали, мультимовні платформи та індивідуальні веб-системи за найсучаснішими стандартами безпеки.",
      service2Title: "Інтернет-магазини (E-Commerce)",
      service2Desc: "Масштабовані онлайн-магазини на OpenCart та Drupal Commerce з підключенням еквайрингу (Stripe, Борика) та синхронізацією зі складом.",
      service3Title: "SEO аудит та Швидкість 99+",
      service3Desc: "Оптимізація Core Web Vitals, очищення коду та реєстрація в пошукових системах для перших позицій у Google.",
      service4Title: "Редизайн та Модернізація",
      service4Desc: "Перенесення застарілих сайтів на сучасні технології з підвищенням конверсії та повною адаптивністю під смартфони.",
      service5Title: "ШІ-Асистенти та Чат-боти",
      service5Desc: "Впровадження інтелектуальних AI-агентів, навчених на базі компанії, з інтеграцією у WhatsApp, Telegram та CRM.",
      service6Title: "Аерозйомка та Медіа",
      service6Desc: "Професійна 4K зйомка квадрокоптером об'єктів нерухомості та виробництва, створення якісних фотобанків.",

      // Vault
      vaultEyebrow: "Інтерактивний скляний сейф",
      vaultTitle: "Живі папки ваших проектів: від коду до гарантійного акту",
      vaultDesc: "Наведіть курсор для 3D нахилу матового скла. Клікніть, щоб відкрити папку та переглянути проектні файли й кейси.",
      vaultHint: "● Наведіть для 3D нахилу · Клікніть для відкриття · Тисніть + щоб додати файл",
      folder1Title: "E-Commerce Системи",
      folder2Title: "Портали на Drupal 11",
      folder3Title: "Договір та Гарантія",
      filesWord: "файли",
      folderAddToast: "Файл додано до сейфу!",

      // Portfolio
      portfolioEyebrow: "Наші кейси",
      portfolioTitle: "Реальні проекти, перевірені часом та ринком",
      portfolioDesc: "Ознайомтеся з проектами BTAB в Болгарії, Великобританії та країнах Євросоюзу.",
      filterAll: "Всі роботи",
      filterShop: "Інтернет-магазини",
      filterDrupal: "Корпоративні & Drupal",
      filterServices: "Послуги & Туризм",

      // Why Us
      whyEyebrow: "Чому BTAB",
      whyTitle: "Без компромісів у якості та безпеці",
      whyDesc: "Ми не просто створюємо сайти — ми розробляємо високоефективний прибутковий інструмент для вашого бізнесу.",
      why1Title: "📋 Офіційний договір та гарантія",
      why1Desc: "Працюємо 100% офіційно. Повне технічне завдання, строки виконання та гарантійні зобов'язання закріплені в договорі.",
      why2Title: "🚀 Чистий код без зайвого баласту",
      why2Desc: "Жодних важких готових тем та зайвих плагінів, що гальмують роботу. Кожен модуль написаний для блискавичного відгуку.",
      why3Title: "🎓 Навчання та супровід",
      why3Desc: "Безкоштовна 6-місячна підтримка. Навчаємо вас або співробітника швидкому управлінню матеріалами сайту.",

      // Contact & Brief
      contactEyebrow: "Зв’яжіться з нами",
      contactTitle: "Готові вивести ваш бізнес на новий рівень?",
      contactDesc: "Зателефонуйте, напишіть у WhatsApp / Telegram або надішліть заявку через форму. Консультація безкоштовна.",
      contactStudioName: "Студія BTAB (Болгарія)",
      contactOfficeAddress: "Центральний офіс: ж.к. Лазур 130, Бургас 8000, Болгарія. Працюємо з клієнтами з Бургаса, Софії, Варни, ЄС та світу.",
      contactHoursLabel: "Робочі години:",
      contactHoursVal: "Понеділок — П'ятниця: 09:00 — 18:00 (EET)",
      contactDirectPhone: "Прямий телефон",
      contactDirectWhatsapp: "Чат у WhatsApp",
      contactDirectTg: "Контакт у Telegram",
      contactDirectEmail: "Електронна пошта",

      contactFormName: "Ваше ім’я *",
      contactFormPhone: "Телефон або WhatsApp / Telegram *",
      contactFormEmail: "Електронна пошта *",
      contactFormService: "Бажана послуга",
      contactFormMsg: "Опишіть завдання та побажання",
      contactFormMsgPlaceholder: "Опишіть ваш проект, цільову аудиторію або додайте посилання на діючий сайт...",
      contactFormGdpr: "Я погоджуюся на обробку персональних даних (GDPR) з метою консультації.",
      contactFormSubmit: "Надіслати запит →",
      contactSuccessToast: "Дякуємо! Ваша заявка успішно надіслана. Наш фахівець зв'яжеться з вами протягом 2 годин.",

      // Contact Options
      optDrupal: "Корпоративний сайт на Drupal 11",
      optShop: "Інтернет-магазин (OpenCart / Headless)",
      optLanding: "Лендінг сторінка (Landing Page)",
      optRedesign: "Редизайн та прискорення (PageSpeed 99+)",
      optSeo: "SEO оптизація та аудит",
      optAi: "ШІ-чатбот та автоматизація",

      // Footer
      footerDesc: "Веб-студія BTAB (Бургас, Болгарія). Професійна розробка, адаптивний UI/UX дизайн, SEO оптимізація та надійна техпідтримка з 2016 року.",
      footerColServices: "Послуги",
      footerColNav: "Навігація",
      footerColContacts: "Контакти",
      footerRights: "Всі права захищено. Створено студією BTAB.",

      // Case Study Modal
      modalDetailsTitle: "Деталі проекту",
      modalClose: "Закрити",
      modalObjectiveLabel: "Проектне завдання та реалізація:",
      modalObjectiveText: "Команда BTAB провела повну технічну оптимізацію, впровадила чистий код, розмітку Schema.org та забезпечила миттєве завантаження 0.4с на мобільних пристроях.",
      modalResultLabel: "Ключовий бізнес-результат:",
      modalOrderSimilar: "Замовити схожий сайт →",
      modalLocationLabel: "Цільовий ринок:",
      modalStackLabel: "Технологічний стек:"
    },

    RU: {
      // Navbar
      navServices: "Услуги",
      navVault: "Сейф",
      navPortfolio: "Портфолио",
      navCalculator: "Калькулятор",
      navWhyUs: "Преимущества",
      navContacts: "Контакты",
      navDiscuss: "Заказать сайт →",
      brandSubtitle: "Диджитал Студия",

      // Hero
      heroBadge: "Принимаем заказы на 2026 в ЕС и по всему миру",
      heroIssueTag: "#2026",
      heroBubbleHint: "● КЛИКАЙТЕ ПО ШАРАМ. ОНИ ЛОПАЮТСЯ.",
      heroAsteriskNote: "Инженерия надежных и молниеносных веб-систем для бизнеса.",
      heroTitle: "Быстрые, оптимизированные сайты для роста вашего бизнеса.",
      heroDesc: "Веб-студия BTAB (Бургас, Болгария). Разрабатываем надежные сайты на Drupal 11, OpenCart и современных CMS с гарантированной скоростью PageSpeed 99+ и чистым кодом.",
      heroBtnCalc: "Рассчитать стоимость →",
      heroBtnPortfolio: "Посмотреть работы",

      // Benchmark
      benchTitle: "Тест скорости в реальном времени",
      benchLive: "Google PageSpeed: 99+",
      benchBtabTag: "Чистый код BTAB",
      benchBtabSub: "Молниеносные 0.4 сек",
      benchOtherTag: "Обычные шаблоны",
      benchOtherSub: "Потеря 45% клиентов",
      benchLcp: "Отрисовка контента (LCP)",
      benchCls: "Сдвиг макета (CLS)",
      benchScore: "Индекс PageSpeed",

      // Marquee Ribbons
      marquee1: "АРХИТЕКТУРА DRUPAL 11 ✱ СКОРОСТЬ 0.4s ✱ GOOGLE PAGESPEED 99+ ✱ OPENCART 4 ✱ ЧИСТЫЙ КОД ✱ 6 МЕСЯЦЕВ ГАРАНТИИ ✱ БОЛГАРИЯ & ЕС ✱",
      marquee2: "✱ 10+ ЛЕТ ОПЫТА В ЕС ✱ 150+ ВЫПОЛНЕННЫХ САЙТОВ ✱ БУРГАС · СОФИЯ · ЕС · МИР ✱ ОФИЦИАЛЬНЫЙ ДОГОВОР И ГАРАНТИЯ ✱",

      // Trust Stats
      statYears: "Лет опыта на рынке ЕС",
      statProjects: "Запущенных веб-сайтов",
      statSpeed: "Средняя скорость загрузки",
      statSupport: "Бесплатная техподдержка",

      // Calculator
      calcEyebrow: "Интерактивный калькулятор",
      calcTitle: "Прозрачный расчет стоимости и сроков сайта",
      calcDesc: "Выберите параметры вашего проекта и узнайте ориентировочный бюджет и сроки запуска.",
      calcStep1: "1. Формат проекта",
      calcStep2: "2. CMS и стек технологий",
      calcStep3: "3. Дополнительные опции",

      calcLanding: "Лендинг пейдж",
      calcLandingSub: "от 5 дней · от 650€",
      calcCorporate: "Корпоративный сайт",
      calcCorporateSub: "от 12 дней · от 1250€",
      calcShop: "Интернет-магазин",
      calcShopSub: "от 18 дней · от 1850€",
      calcCatalog: "Каталог продукции",
      calcCatalogSub: "от 14 дней · от 1400€",
      calcAudit: "SEO и оптимизация",
      calcAuditSub: "от 3 дней · от 450€",

      calcDrupalName: "Drupal 11 (Рекомендовано)",
      calcDrupalSub: "Максимальная безопасность и масштаб",
      calcOpencartName: "OpenCart 3 / 4",
      calcOpencartSub: "Для интернет-магазинов",
      calcHeadlessName: "Headless / React",
      calcHeadlessSub: "Ультрабыстрые современные приложения",

      calcOptMulti: "Мультиязычность (2-4 языка)",
      calcOptPayment: "Онлайн-оплата (Stripe/Борика)",
      calcOptCrm: "Интеграция с CRM / складом",
      calcOptAi: "ИИ-ассистент / Чат-бот",

      calcEstimateTitle: "Ориентировочная стоимость",
      calcTimeLabel: "Срок реализации:",
      calcTimeDays: "рабочих дней",
      calcBenefit1: "Гарантия PageSpeed 95+",
      calcBenefit2: "Официальный договор в ЕС",
      calcBenefit3: "6 месяцев гарантийной поддержки",
      calcOrderBtn: "Заказать по этой оценке →",
      calcDisclaimer: "Окончательная стоимость фиксируется в договоре после согласования технического задания.",

      // Services Matrix
      servicesEyebrow: "Комплексные услуги",
      servicesTitle: "Весь комплекс работ для уверенного лидерства в сети",
      servicesDesc: "От архитектуры данных и дизайна до SEO вывода в топ и последующей поддержки.",
      serviceBtnConsult: "Запросить консультацию →",

      service1Title: "Разработка на Drupal 11",
      service1Desc: "Корпоративные порталы, мультиязычные платформы и веб-системы по новейшим стандартам безопасности и производительности.",
      service2Title: "Интернет-магазины (E-Commerce)",
      service2Desc: "Масштабируемые онлайн-магазины на OpenCart и Drupal Commerce с приемом карт (Stripe, Борика) и синхронизацией со складом.",
      service3Title: "SEO аудит & Скорость 99+",
      service3Desc: "Оптимизация Core Web Vitals, очистка кода и регистрация в поисковых системах для первых мест в Google.",
      service4Title: "Редизайн & Модернизация",
      service4Desc: "Превращение устаревших сайтов в стильные, адаптивные инструменты с высокой конверсией на смартфонах.",
      service5Title: "ИИ-Ассистенты & Чат-боты",
      service5Desc: "Внедрение умных AI-агентов на данных компании с автоматизацией заявок в WhatsApp, Telegram и CRM.",
      service6Title: "Аэросъемка & Медиа",
      service6Desc: "Профессиональная 4K съемка с квадрокоптера объектов недвижимости и предприятий, создание фотобанков.",

      // Vault
      vaultEyebrow: "Интерактивный стеклянный сейф",
      vaultTitle: "Живые папки ваших проектов: от кода до гарантийных актов",
      vaultDesc: "Наведите курсор для 3D наклона матового стекла. Кликните, чтобы открыть папку и просмотреть проектные файлы.",
      vaultHint: "● Наведите для 3D наклона · Кликните для открытия · Нажмите + для добавления файла",
      folder1Title: "E-Commerce Системы",
      folder2Title: "Порталы на Drupal 11",
      folder3Title: "Договор и Гарантия",
      filesWord: "файла",
      folderAddToast: "Файл добавлен в сейф!",

      // Portfolio
      portfolioEyebrow: "Наши работы",
      portfolioTitle: "Реальные проекты для европейского и международного бизнеса",
      portfolioDesc: "Ознакомьтесь с сайтами, созданными и оптимизированными веб-студией BTAB.",
      filterAll: "Все работы",
      filterShop: "Интернет-магазины",
      filterDrupal: "Корпоративные & Drupal",
      filterServices: "Услуги & Туризм",

      // Why Us
      whyEyebrow: "Почему BTAB",
      whyTitle: "Без компромиссов в качестве и безопасности",
      whyDesc: "Мы не просто делаем веб-страницы — мы создаем надежный инструмент для увеличения прибыли компании.",
      why1Title: "📋 Официальный договор и гарантия",
      why1Desc: "Работаем 100% официально. Детальное техзадание, сроки и гарантийные обязательства зафиксированы в договоре.",
      why2Title: "🚀 Чистый код без балласта",
      why2Desc: "Никаких тяжелых шаблонов и лишних плагинов. Каждый модуль оптимизирован для молниеносного отклика.",
      why3Title: "🎓 Обучение и поддержка",
      why3Desc: "Бесплатная поддержка в течение 6 месяцев. Обучаем вас или вашего сотрудника быстрому управлению сайтом.",

      // Contact & Brief
      contactEyebrow: "Контакты",
      contactTitle: "Готовы обсудить ваш проект?",
      contactDesc: "Позвоните, напишите в WhatsApp / Telegram или оставьте заявку. Консультация по телефону или встреча бесплатно.",
      contactStudioName: "Студия BTAB (Болгария)",
      contactOfficeAddress: "Центральный офис: ж.к. Лазур 130, Бургас 8000, Болгария. Работаем с клиентами из Бургаса, Софии, Варны, ЕС и мира.",
      contactHoursLabel: "Рабочее время:",
      contactHoursVal: "Понедельник — Пятница: 09:00 — 18:00 (EET)",
      contactDirectPhone: "Прямой телефон",
      contactDirectWhatsapp: "WhatsApp чат",
      contactDirectTg: "Telegram контакт",
      contactDirectEmail: "Электронная почта",

      contactFormName: "Ваше имя *",
      contactFormPhone: "Телефон или WhatsApp / Telegram *",
      contactFormEmail: "Электронная почта *",
      contactFormService: "Интересующая услуга",
      contactFormMsg: "Кратко опишите задачи сайта",
      contactFormMsgPlaceholder: "Опишите ваш проект, целевую аудиторию или ссылку на действующий сайт...",
      contactFormGdpr: "Я подтверждаю свое согласие на обработку персональных данных (GDPR).",
      contactFormSubmit: "Отправить сообщение →",
      contactSuccessToast: "Спасибо! Сообщение успешно отправлено. Мы свяжемся с вами в течение 2 часов.",

      // Contact Options
      optDrupal: "Корпоративный сайт на Drupal 11",
      optShop: "Интернет-магазин (OpenCart / Headless)",
      optLanding: "Лендинг пейдж (Landing Page)",
      optRedesign: "Редизайн и ускорение (PageSpeed 99+)",
      optSeo: "SEO оптимизация и аудит",
      optAi: "ИИ-чатбот и автоматизация",

      // Footer
      footerDesc: "Веб-студия BTAB (Бургас, Болгария). Создание быстрых сайтов, дизайн, SEO оптимизация и поддержка с 2016 года.",
      footerColServices: "Услуги",
      footerColNav: "Навигация",
      footerColContacts: "Контакты",
      footerRights: "Все права защищены. Разработано в BTAB.",

      // Case Study Modal
      modalDetailsTitle: "Детали проекта",
      modalClose: "Закрыть",
      modalObjectiveLabel: "Проектная задача и реализация:",
      modalObjectiveText: "Команда BTAB выполнила оптимизацию кода, внедрение Schema.org и обеспечила скорость 0.4s на мобильных устройствах.",
      modalResultLabel: "Ключевой бизнес-результат:",
      modalOrderSimilar: "Заказать похожий сайт →",
      modalLocationLabel: "Целевой рынок:",
      modalStackLabel: "Технологический стек:"
    }
  };

  // ==========================================
  // 2. FULLY LOCALIZED PORTFOLIO DATABASE
  // ==========================================
  const portfolioItems = [
    {
      id: "magic-book",
      category: "shop",
      img: "assets/images/portfolio/magic-book.png",
      year: "UK Market",
      cms: "OpenCart 3 / PHP / MySQL",
      titles: {
        BG: "Magic Book UK — Детски книжарница",
        EN: "Magic Book UK — E-Commerce Store",
        UA: "Magic Book UK — Дитяча книгарня",
        RU: "Magic Book UK — Детский магазин"
      },
      tags: {
        BG: "E-Commerce",
        EN: "E-Commerce",
        UA: "Інтернет-магазин",
        RU: "E-Commerce"
      },
      descs: {
        BG: "Онлайн магазин на OpenCart 3 с интеграция на платежни системи за Великобритания, адаптивен дизайн и скорост PageSpeed 98.",
        EN: "Online store on OpenCart 3 featuring UK payment systems integration, responsive design, and PageSpeed 98 performance.",
        UA: "Інтернет-магазин на OpenCart 3 з інтеграцією платіжних систем Великобританії, мобільною версією та швидкістю PageSpeed 98.",
        RU: "Интернет-магазин на OpenCart 3 с интеграцией платежей Великобритании, адаптивной мобильной версией и PageSpeed 98."
      },
      metrics: {
        BG: "+38% ръст на поръчките от мобилни устройства",
        EN: "+38% mobile checkout conversion growth",
        UA: "+38% зростання замовлень з мобільних",
        RU: "+38% рост заказов со смартфонов"
      }
    },
    {
      id: "tochev",
      category: "drupal",
      img: "assets/images/portfolio/tochev.png",
      year: "Burgas, Bulgaria",
      cms: "Drupal 11 / Twig 3 / Cloudflare",
      titles: {
        BG: "Tochev & Co. — Строителна компания",
        EN: "Tochev & Co. — Construction Group",
        UA: "Tochev & Co. — Будівельна компанія",
        RU: "Tochev & Co. — Строительная компания"
      },
      tags: {
        BG: "Drupal 11",
        EN: "Drupal 11",
        UA: "Drupal 11",
        RU: "Drupal 11"
      },
      descs: {
        BG: "Официален сайт на строителна компания в Бургас. Каталог на жилищни сгради, етажни разпределения и мигновено зареждане.",
        EN: "Official website for a premier Bulgarian builder in Burgas. Residential catalog, interactive floorplans, and sub-second load times.",
        UA: "Офіційний сайт будівельної компанії в Бургасі. Каталог житлових комплексів, поверхові плани та миттєве завантаження.",
        RU: "Официальный сайт крупной строительной компании в Бургасе. Каталог жилых комплексов, поэтажные планы и быстрый отклик."
      },
      metrics: {
        BG: "0.4s време за пълно зареждане на каталога",
        EN: "0.4s instant page response rate",
        UA: "0.4s повне завантаження сторінок каталогу",
        RU: "0.4s загрузка сложных страниц каталога"
      }
    },
    {
      id: "freshgazon",
      category: "drupal",
      img: "assets/images/portfolio/freshgazon.png",
      year: "Bulgaria / EU",
      cms: "Drupal 11 / Schema.org / WebP",
      titles: {
        BG: "ФрешГазон — Тревни площи и дизайн",
        EN: "FreshGazon — Landscape Architecture",
        UA: "ФрешГазон — Рулонні газони та дизайн",
        RU: "ФрешГазон — Рулонные газоны и дизайн"
      },
      tags: {
        BG: "Drupal 11",
        EN: "Drupal 11",
        UA: "Drupal 11",
        RU: "Drupal 11"
      },
      descs: {
        BG: "Сайт за продажба на рулонни тревни площи и ландшафтно проектиране. Мощна SEO структура и висока мобилна скорост.",
        EN: "Web platform for rolled turf production and landscape design. Built on Drupal with rich SEO structure and instant responsiveness.",
        UA: "Сайт компанії з продажу рулонних газонів та ландшафтного дизайну на Drupal 11 із потужною структурою для Google.",
        RU: "Сайт компании по продаже рулонных газонов и ландшафтному дизайну. Мощная SEO-структура, высокая безопасность и мобильность."
      },
      metrics: {
        BG: "ТОП-3 в Google по целеви запитвания",
        EN: "Top-3 Google Search placement across Bulgaria",
        UA: "ТОП-3 у Google за ключовими запитами",
        RU: "ТОП-3 в Google по ключевым запросам"
      }
    },
    {
      id: "risuvaneponomera",
      category: "shop",
      img: "assets/images/portfolio/risuvaneponomera.jpg",
      year: "Bulgaria",
      cms: "OpenCart 3 / Fast Checkout",
      titles: {
        BG: "Risuvaneponomera — Картини по номера",
        EN: "Risuvaneponomera — Creative Art Store",
        UA: "Risuvaneponomera — Картини за номерами",
        RU: "Risuvaneponomera — Картины по номерам"
      },
      tags: {
        BG: "E-Commerce",
        EN: "E-Commerce",
        UA: "Інтернет-магазин",
        RU: "E-Commerce"
      },
      descs: {
        BG: "Редизайн и пренос на онлайн магазин за рисуване по номера. Оптимизиран процес на поръчка за мобилни телефони.",
        EN: "Redesign and performance overhaul of a creative e-commerce shop. Streamlined single-page checkout tailored for smartphones.",
        UA: "Редизайн та модернізація інтернет-магазину творчості. Спрощений чекаут та прискорення відкриття на смартфонах.",
        RU: "Редизайн и миграция интернет-магазина картин по номерам на современную платформу. Увеличение продаж со смартфонов на 65%."
      },
      metrics: {
        BG: "+65% завършени поръчки от телефони",
        EN: "+65% surge in mobile order completions",
        UA: "+65% зростання завершених покупок із мобільних",
        RU: "+65% рост завершенных заказов со смартфонов"
      }
    },
    {
      id: "santvalentin",
      category: "drupal",
      img: "assets/images/portfolio/santvalentin.jpg",
      year: "Bulgaria",
      cms: "Drupal 11 / Twig / Webform",
      titles: {
        BG: "САНТ ВАЛЕНТИН — Туроператор",
        EN: "SANT VALENTIN — Tour Operator",
        UA: "САНТ ВАЛЕНТИН — Дитячий туроператор",
        RU: "САНТ ВАЛЕНТИН — Туроператор"
      },
      tags: {
        BG: "Drupal 11",
        EN: "Drupal 11",
        UA: "Drupal 11",
        RU: "Drupal 11"
      },
      descs: {
        BG: "Цялостна миграция на действащ детски туроператор от Drupal 7 към Drupal 11 със запазване на 100% от SEO позициите.",
        EN: "Full-scale migration from legacy Drupal 7 to modern Drupal 11, preserving 100% of organic Google search equity.",
        UA: "Комплексна міграція активного дитячого туроператора з Drupal 7 на Drupal 11 зі 100% збереженням усіх позицій у Google.",
        RU: "Комплексная миграция туроператора с устаревшего Drupal 7 на новейшую платформу с сохранением всех SEO-позиций."
      },
      metrics: {
        BG: "100% запазен органичен трафик и заявки",
        EN: "100% SEO organic search equity preserved",
        UA: "100% збереження позицій та органічного трафіку",
        RU: "100% сохранение SEO позиций и заявок"
      }
    },
    {
      id: "all-boats",
      category: "shop",
      img: "assets/images/portfolio/all-boats.jpg",
      year: "EU Market",
      cms: "Drupal Catalog / WebP / Clean JS",
      titles: {
        BG: "ALL-BOATS — Надуваеми лодки",
        EN: "ALL-BOATS — Inflatable Boat Catalog",
        UA: "ALL-BOATS — Каталог надувних човнів",
        RU: "ALL-BOATS — Надувные лодки"
      },
      tags: {
        BG: "Каталог & Поръчки",
        EN: "Catalog & E-Commerce",
        UA: "Каталог & Замовлення",
        RU: "Каталог & E-Commerce"
      },
      descs: {
        BG: "Многоезичен каталог на лодки и извънбордови двигатели с бърза форма за запитвания и олекотена галерия.",
        EN: "Multilingual marine catalog for inflatable boats and outboards featuring high-speed photo galleries and booking forms.",
        UA: "Мультимовний каталог надувних човнів та моторів зі швидкою формою онлайн-замовлення та миттєвими фотогалереями.",
        RU: "Мультиязычный каталог надувных лодок и моторов с гибкой формой онлайн-заказа и высокой скоростью загрузки фото галерей."
      },
      metrics: {
        BG: "PageSpeed 99/100 за мобилна версия",
        EN: "PageSpeed 99/100 mobile score",
        UA: "PageSpeed 99/100 на смартфонах",
        RU: "PageSpeed 99/100 на мобильных устройствах"
      }
    },
    {
      id: "histours",
      category: "services",
      img: "assets/images/portfolio/histours.jpg",
      year: "International",
      cms: "Custom Drupal / Schema.org",
      titles: {
        BG: "HISTOURS — Екскурзоводски портал",
        EN: "HISTOURS — Guided City Tours",
        UA: "HISTOURS — Туристичний портал",
        RU: "HISTOURS — Экскурсионный портал"
      },
      tags: {
        BG: "Туризъм & Сервизи",
        EN: "Tourism & Travel",
        UA: "Туризм & Сервіси",
        RU: "Туризм & Сервисы"
      },
      descs: {
        BG: "Туристически портал за англоезични туристи. Оптимизация на медийно съдържание, интерактивни карти и онлайн резервации.",
        EN: "Tour booking portal for English-speaking travelers with optimized media delivery, interactive maps, and fast reservations.",
        UA: "Сервісний туристичний портал для англомовних мандрівників із швидкою онлайн-бронею та оптимізованими картами.",
        RU: "Сервисный туристический портал для англоязычных туристов. Оптимизация медиа-контента, заказ туров онлайн и интерактивная карта."
      },
      metrics: {
        BG: "Зареждане за 0.5s при тежки фотоматериали",
        EN: "0.5s load speed with high-res photography",
        UA: "Завантаження 0.5с при великій кількості фото",
        RU: "Загрузка 0.5s при обилии медиа-контента"
      }
    },
    {
      id: "happyhome",
      category: "services",
      img: "assets/images/portfolio/happyhome.jpg",
      year: "Burgas, Bulgaria",
      cms: "Drupal / Cloudflare / LazyLoad",
      titles: {
        BG: "HAPPY HOME — Недвижими имоти",
        EN: "HAPPY HOME — Real Estate Agency",
        UA: "HAPPY HOME — Агентство нерухомості",
        RU: "HAPPY HOME — Недвижимость"
      },
      tags: {
        BG: "Имоти & Каталог",
        EN: "Real Estate",
        UA: "Нерухомість",
        RU: "Недвижимость"
      },
      descs: {
        BG: "Агенция за недвижими имоти по Черноморието. Каталог с прецизни филтри по локации, цени и категории.",
        EN: "Coastal real estate agency portal in Bulgaria. High-performance property listings with instant AJAX filtering.",
        UA: "Агентство нерухомості на чорноморському узбережжі Болгарії. Каталог житла зі швидкою фільтрацією.",
        RU: "Агентство недвижимости в Болгарии. Каталог объектов с фильтрами по городам, ценам и типу жилья."
      },
      metrics: {
        BG: "Моментална филтрация на стотици обекти",
        EN: "Instant client search filtering with zero lag",
        UA: "Миттєва фільтрація каталогу сотень об'єктів",
        RU: "Мгновенная фильтрация каталога объектов"
      }
    },
    {
      id: "bulgarianriviera",
      category: "services",
      img: "assets/images/portfolio/bulgarianriviera.jpg",
      year: "Bulgaria",
      cms: "Drupal / WebP Converter / Caching",
      titles: {
        BG: "Bulgarian Riviera — Луксозни имоти",
        EN: "Bulgarian Riviera — Luxury Estates",
        UA: "Bulgarian Riviera — Елітна нерухомість",
        RU: "Bulgarian Riviera — Элитная недвижимость"
      },
      tags: {
        BG: "Имоти & Каталог",
        EN: "Luxury Real Estate",
        UA: "Нерухомість",
        RU: "Недвижимость"
      },
      descs: {
        BG: "Каталог на първокласни имоти. Автоматична компресия на хиляди фотоси с запазване на безупречна рязкост.",
        EN: "Luxury estate showcases with automatic high-fidelity WebP compression and instant edge caching.",
        UA: "Каталог елітної нерухомості на узбережжі з автоматичною оптимізацією тисяч зображень високої чіткості.",
        RU: "Сайт агентства элитной недвижимости на Черноморском побережье. Оптимизация сотен фотографий высокого разрешения."
      },
      metrics: {
        BG: "PageSpeed индекс 97+ при 4K галерии",
        EN: "97+ PageSpeed index with 4K galleries",
        UA: "Індекс швидкості 97+ з 4K фотогалереями",
        RU: "Рейтинг скорости 97+ с 4K фотогалереями"
      }
    },
    {
      id: "wordbg",
      category: "services",
      img: "assets/images/portfolio/wordbg.jpg",
      year: "Burgas, Bulgaria",
      cms: "Drupal 11 Multilingual",
      titles: {
        BG: "WORD.BG — Агенция за преводи",
        EN: "WORD.BG — Translation Agency",
        UA: "WORD.BG — Бюро перекладів",
        RU: "WORD.BG — Бюро переводов"
      },
      tags: {
        BG: "Многоезичен портал",
        EN: "Multilingual Agency",
        UA: "Мультимовний сайт",
        RU: "Многоязычный сервис"
      },
      descs: {
        BG: "Корпоративен сайт на три езика (BG, EN, RU) с онлайн калкулатор за изчисляване на стойността на писмен превод.",
        EN: "Corporate website across three languages (BG, EN, RU) featuring an instant price estimator for certified document translation.",
        UA: "Корпоративний сайт трьома мовами (BG, EN, RU) з інтерактивним калькулятором вартості перекладу документів.",
        RU: "Корпоративный сайт агентства языковых переводов на трех языках (BG, EN, RU). Удобный калькулятор оценки стоимости перевода."
      },
      metrics: {
        BG: "3 езика / 100% синхронизация на съдържанието",
        EN: "3 languages / Flawless unified content sync",
        UA: "3 мови / Миттєвий бриф та розрахунок",
        RU: "3 языка / Мгновенный бриф и расчет"
      }
    }
  ];

  let currentLang = 'BG';

  // ==========================================
  // 3. CALCULATOR DATA & STATE
  // ==========================================
  const pricingData = {
    type: {
      landing: { base: 650, days: 5 },
      corporate: { base: 1250, days: 12 },
      shop: { base: 1850, days: 18 },
      catalog: { base: 1400, days: 14 },
      audit: { base: 450, days: 3 }
    },
    cms: {
      drupal: { mult: 1.0 },
      opencart: { mult: 0.95 },
      headless: { mult: 1.25 }
    },
    addons: {
      multi: { cost: 250, days: 3 },
      payment: { cost: 200, days: 2 },
      crm: { cost: 300, days: 4 },
      ai: { cost: 350, days: 3 }
    }
  };

  let calcState = {
    type: "corporate",
    cms: "drupal",
    addons: new Set(["multi"])
  };

  function updateCalculator() {
    const typeObj = pricingData.type[calcState.type] || pricingData.type.corporate;
    const cmsObj = pricingData.cms[calcState.cms] || pricingData.cms.drupal;

    let total = typeObj.base * cmsObj.mult;
    let days = typeObj.days;

    calcState.addons.forEach(addonKey => {
      const addon = pricingData.addons[addonKey];
      if (addon) {
        total += addon.cost;
        days += addon.days;
      }
    });

    total = Math.round(total / 10) * 10;

    const priceEl = document.getElementById("calc-total-price");
    const daysEl = document.getElementById("calc-total-days");

    if (priceEl) priceEl.textContent = `€${total}`;
    if (daysEl) daysEl.textContent = `${days}`;
  }

  // ==========================================
  // 4. LANGUAGE SWITCHER (100% COMPREHENSIVE)
  // ==========================================
  function setLanguage(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;
    localStorage.setItem('btab_lang', lang);

    const dict = i18n[lang];

    // 1. Update textContent & placeholders for data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // 2. Update active button in switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // 3. Update Marquee Ribbons
    const marqueeTrack1 = document.getElementById('marquee-track-1');
    const marqueeTrack2 = document.getElementById('marquee-track-2');
    if (marqueeTrack1) {
      marqueeTrack1.innerHTML = `<span>${dict.marquee1}</span><span>${dict.marquee1}</span>`;
    }
    if (marqueeTrack2) {
      marqueeTrack2.innerHTML = `<span>${dict.marquee2}</span><span>${dict.marquee2}</span>`;
    }

    // 4. Update Select Dropdown options
    const serviceSelect = document.getElementById('contact-service');
    if (serviceSelect) {
      serviceSelect.options[0].text = dict.optDrupal;
      serviceSelect.options[0].value = dict.optDrupal;
      serviceSelect.options[1].text = dict.optShop;
      serviceSelect.options[1].value = dict.optShop;
      serviceSelect.options[2].text = dict.optLanding;
      serviceSelect.options[2].value = dict.optLanding;
      serviceSelect.options[3].text = dict.optRedesign;
      serviceSelect.options[3].value = dict.optRedesign;
      serviceSelect.options[4].text = dict.optSeo;
      serviceSelect.options[4].value = dict.optSeo;
      serviceSelect.options[5].text = dict.optAi;
      serviceSelect.options[5].value = dict.optAi;
    }

    document.documentElement.lang = lang.toLowerCase();

    // 5. Re-render dynamic portfolio & calculator & glass folders
    const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
    renderPortfolio(activeFilter);
    renderGlassFolders();
    updateCalculator();
  }

  // ==========================================
  // 5. PORTFOLIO RENDERING (100% LOCALIZED)
  // ==========================================
  function renderPortfolio(filter = 'all') {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const filtered = filter === 'all' 
      ? portfolioItems 
      : portfolioItems.filter(item => item.category === filter);

    filtered.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'portfolio-card';
      card.dataset.id = item.id;

      const issueNum = String(index + 1).padStart(2, '0');
      const title = item.titles[currentLang] || item.titles.EN;
      const tag = item.tags[currentLang] || item.tags.EN;
      const desc = item.descs[currentLang] || item.descs.EN;

      card.innerHTML = `
        <span class="portfolio-card-issue-tag">#${issueNum}</span>
        <div class="portfolio-thumb-wrap">
          <img src="${item.img}" alt="${title}" class="portfolio-thumb" loading="lazy" />
          <div class="portfolio-overlay">
            <span class="portfolio-tag">${tag}</span>
          </div>
        </div>
        <div class="portfolio-content">
          <h3 class="portfolio-card-title">${title}</h3>
          <p class="portfolio-card-desc">${desc}</p>
          <div class="portfolio-meta">
            <span><strong>${item.cms}</strong></span>
            <span>${item.year}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openCaseStudyModal(item, issueNum));
      grid.appendChild(card);
    });
  }

  // ==========================================
  // 5.5 INTERACTIVE GLASS FOLDER CARDS ENGINE
  // ==========================================
  const ART_PRESETS = {
    aurora: {
      style: "streak",
      colors: ["#f4efe9", "#e9c2b8", "#c2433f", "#2a1e2a", "#22395e", "#6f97c2", "#e5edf4"],
      scale: 0.7,
      warp: 1.4,
      angle: -0.62,
      gloss: 0.18,
    },
    ember: {
      style: "marble",
      colors: ["#07090c", "#16252c", "#3d5f68", "#1a1416", "#a3201a", "#ef4a2b", "#ff8a5c"],
      scale: 0.62,
      warp: 3.2,
      angle: -0.5,
      gloss: 0.55,
    },
    verdant: {
      style: "marble",
      colors: ["#070b08", "#173024", "#4f7a5a", "#141812", "#a7843a", "#e9cf87", "#fbf3d6"],
      scale: 0.7,
      warp: 3.4,
      angle: 2.1,
      gloss: 0.5,
    }
  };

  function hexToRgb(hex) {
    let h = hex.trim().replace(/^#/, "");
    if (h.length === 3) {
      h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    }
    const n = /^[0-9a-f]{6}$/i.test(h) ? parseInt(h, 16) : 0x808080;
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  function seededRng(seed) {
    let a = seed >>> 0;
    return function() {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function makeFbmNoise(seed) {
    const r = seededRng(seed);
    const perm = new Uint8Array(512);
    const grad = new Float32Array(512);
    const p = [];
    for (let i = 0; i < 256; i++) p.push(i);
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(r() * (i + 1));
      const t = p[i];
      p[i] = p[j];
      p[j] = t;
    }
    for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
    for (let i = 0; i < 256; i++) {
      const a = r() * Math.PI * 2;
      grad[i * 2] = Math.cos(a);
      grad[i * 2 + 1] = Math.sin(a);
    }
    const noise = (x, y) => {
      const xi = Math.floor(x);
      const yi = Math.floor(y);
      const xf = x - xi;
      const yf = y - yi;
      const X = xi & 255;
      const Y = yi & 255;
      const pY = perm[Y];
      const pY1 = perm[(Y + 1) & 255];
      const h00 = (perm[(X + pY) & 511]) * 2;
      const h10 = (perm[(X + 1 + pY) & 511]) * 2;
      const h01 = (perm[(X + pY1) & 511]) * 2;
      const h11 = (perm[(X + 1 + pY1) & 511]) * 2;
      const d00 = grad[h00] * xf + grad[h00 + 1] * yf;
      const d10 = grad[h10] * (xf - 1) + grad[h10 + 1] * yf;
      const d01 = grad[h01] * xf + grad[h01 + 1] * (yf - 1);
      const d11 = grad[h11] * (xf - 1) + grad[h11 + 1] * (yf - 1);
      const u = xf * xf * xf * (xf * (xf * 6 - 15) + 10);
      const v = yf * yf * yf * (yf * (yf * 6 - 15) + 10);
      return d00 + u * (d10 - d00) + v * (d01 - d00 + u * (d11 - d01 - d10 + d00));
    };
    return (x, y, octaves) => {
      let sum = 0;
      let amp = 0.5;
      for (let i = 0; i < octaves; i++) {
        sum += amp * noise(x, y);
        const nx = 1.6 * x + 1.2 * y + 7.1;
        y = -1.2 * x + 1.6 * y + 3.3;
        x = nx;
        amp *= 0.5;
      }
      return sum;
    };
  }

  function renderNoiseToCanvas(canvas, preset, seed) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;
    const colors = preset.colors.map(c => hexToRgb(c));
    const stops = colors.map((c, i) => ({ t: i / (colors.length - 1), c }));
    const scale = preset.scale || 0.7;
    const warp = preset.warp || 3.0;
    const streak = preset.style === "streak";
    const fbm = makeFbmNoise(seed * 977 + 13);
    const r = seededRng(seed + 1);
    const ox = r() * 50;
    const oy = r() * 50;
    const angle = (preset.angle || 0) + (r() - 0.5) * 0.5;
    const ca = Math.cos(angle);
    const sa = Math.sin(angle);
    const m = Math.min(w, h);

    const imgData = ctx.createImageData(w, h);
    const data = imgData.data;

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const u = (x - w / 2) / m;
        const v = (y - h / 2) / m;
        let px = (u * ca - v * sa) * scale;
        let py = (u * sa + v * ca) * scale;
        if (streak) {
          px *= 0.14;
          py *= 2.2;
        }
        px += ox;
        py += oy;

        const qx = fbm(px, py, 3);
        const qy = fbm(px + 5.2, py + 1.3, 3);
        const rx = fbm(px + warp * qx + 1.7, py + warp * qy + 9.2, 3);
        const ry = fbm(px + warp * qx + 8.3, py + warp * qy + 2.8, 3);
        let val = (fbm(px + warp * rx, py + warp * ry, 4) + 1) * 0.5;
        val = Math.max(0, Math.min(1, val));

        let c0 = stops[0].c;
        let c1 = stops[stops.length - 1].c;
        let factor = 0;
        for (let s = 0; s < stops.length - 1; s++) {
          if (val >= stops[s].t && val <= stops[s + 1].t) {
            c0 = stops[s].c;
            c1 = stops[s + 1].c;
            factor = (val - stops[s].t) / (stops[s + 1].t - stops[s].t);
            break;
          }
        }

        const red = Math.round(c0[0] + (c1[0] - c0[0]) * factor);
        const green = Math.round(c0[1] + (c1[1] - c0[1]) * factor);
        const blue = Math.round(c0[2] + (c1[2] - c0[2]) * factor);

        const idx = (y * w + x) * 4;
        data[idx] = red;
        data[idx + 1] = green;
        data[idx + 2] = blue;
        data[idx + 3] = 255;
      }
    }

    ctx.putImageData(imgData, 0, 0);
    canvas.dataset.ready = "true";
  }

  const vaultDocuments = {
    // 1. EU Service Agreement [SLA 2026]
    "sla-contract": {
      icon: "📜",
      badge: {
        BG: "Официален договор в ЕС (SLA 2026)",
        EN: "Official EU Service Agreement (SLA 2026)",
        UA: "Офіційний договір ЄС (SLA 2026)",
        RU: "Официальный договор в ЕС (SLA 2026)"
      },
      titles: {
        BG: "Европейски договор за уеб разработка и поддръжка",
        EN: "EU Web Development & Maintenance Agreement",
        UA: "Європейський договір на веб-розробку та супровід",
        RU: "Европейский договор на веб-разработку и поддержку"
      },
      tag: "Юридична гарантія",
      sub: "Болгарія · ЄС · 100% захист інтересів клієнта",
      intro: {
        BG: "Ние работим напълно официално като регистрирано юридическо лице в ЕС (Бургас, България). Всяка разработка започва с подписването на двустранен договор с детайлно техническо задание (ТЗ).",
        EN: "We operate fully transparently as a registered legal entity in the EU (Burgas, Bulgaria). Every project initiates with a legally binding bilateral agreement that strictly locks scope, deliverables, and timelines.",
        UA: "Ми працюємо 100% офіційно як зареєстрована юридична особа в ЄС (Бургас, Болгарія). Будь-який проект починається з підписання двостороннього договору з детальним технічним завданням (ТЗ).",
        RU: "Мы работаем полностью официально как юридическое лицо в ЕС (Бургас, Болгария). Каждый проект начинается с подписания двустороннего договора с детальным техническим заданием (ТЗ)."
      },
      clauses: {
        UA: [
          { title: "Фіксований бюджет без прихованих витрат", desc: "Сума фіксується у валюті EUR і не змінюється в процесі розробки. Оплата розбивається поетапно: 50% аванс і 50% лише після фінального тестування та приймання робіт." },
          { title: "Жорсткі строки з фінансовою неустойкою", desc: "У договорі зафіксовано конкретну дату запуску. За кожен день затримки з нашої вини передбачено фінансову компенсацію." },
          { title: "100% передача прав та відсутність прив'язки", desc: "Після завершення проекту ви отримуєте повні виключні майнові авторські права на сайт, чистий вихідний код і доступи до репозиторію." },
          { title: "SLA регламент реакції", desc: "У період гарантії та підтримки критичні збої усуваються з пріоритетом протягом 2 годин." }
        ],
        BG: [
          { title: "Фиксиран бюджет без скрити такси", desc: "Стойността е фиксирана в EUR и не се променя. Етапно плащане: 50% аванс и 50% след приемане на сайта." },
          { title: "Гарантирани срокове и неустойка", desc: "Фиксирана дата за пускане. За всеки ден закъснение по наша вина се начислява финансова компенсация." },
          { title: "100% авторски права и чист код", desc: "Получавате пълен контрол върху изходния код, достъп до Git и без зависимост от конкретен разработчик." },
          { title: "SLA реакция при инциденти", desc: "Критични проблеми се отстраняват с първостепенен приоритет в рамките на 2 часа." }
        ],
        EN: [
          { title: "Fixed Price Guarantee (Zero Hidden Fees)", desc: "Contracted in EUR with rigid phase billing: 50% initial commitment and 50% upon final client sign-off and deployment." },
          { title: "Strict Deadlines with Penalty Clauses", desc: "We commit to concrete milestone dates in writing. Any delay on our end carries contractually enforced penalties." },
          { title: "100% Full IP & Source Code Transfer", desc: "All intellectual property, clean Git repository access, and credentials belong entirely to you with zero vendor lock-in." },
          { title: "Guaranteed SLA Response Window", desc: "Critical uptime incidents and bugs are triaged and investigated with high priority within 2 hours." }
        ],
        RU: [
          { title: "Фиксированная стоимость без доплат", desc: "Цена фиксируется в EUR. Поэтапная оплата: 50% аванс и 50% только после полного согласования и тестирования." },
          { title: "Сроки с финансовой неустойкой", desc: "Четкая дата сдачи. За каждый день задержки предусмотрена компенсация." },
          { title: "100% передача прав на исходный код", desc: "Полные исключительные права, чистый код без шифрования и доступы к репозиторию." },
          { title: "SLA регламент реагирования", desc: "Критические сбои устраняются в приоритетном порядке в течение 2 часов." }
        ]
      },
      actionBtn: {
        BG: "Поискайте примерен договор (PDF) →",
        EN: "Request Sample Contract (PDF) →",
        UA: "Отримати зразок договору (PDF) →",
        RU: "Запросить образец договора (PDF) →"
      }
    },

    // 2. 6-Month Free Support Warranty
    "warranty-support": {
      icon: "🛡️",
      badge: {
        BG: "Гаранционен сертификат (180 дни)",
        EN: "Warranty Certificate (180 Days)",
        UA: "Гарантійний сертифікат (180 днів)",
        RU: "Гарантийный сертификат (180 дней)"
      },
      titles: {
        BG: "6 месеца безплатна гаранция и техническа поддръжка",
        EN: "6-Month Complimentary Technical Warranty & Support",
        UA: "6 місяців безкоштовної гарантії та технічного супроводу",
        RU: "6 месяцев бесплатной гарантии и техподдержки"
      },
      tag: "Безкоштовний супровід",
      sub: "Повний спокій після релізу вашого проекту",
      intro: {
        BG: "Ние не изоставяме проектите след тяхното пускане. Всеки наш клиент получава 6 месеца безплатен гаранционен надзор, мониторинг и бърза техническа помощ.",
        EN: "We do not walk away after launch. Every web system delivered by BTAB includes 6 months of comprehensive warranty, automated health monitoring, and expert technical support at zero extra charge.",
        UA: "Ми ніколи не залишаємо клієнта наодинці з новим сайтом. Кожен проект BTAB включає 6 місяців повноцінної гарантії, безперервного моніторингу та технічної допомоги без жодних додаткових платежів.",
        RU: "Мы не оставляем проекты после запуска. Каждый клиент получает 6 месяцев полной гарантии, мониторинга и технической помощи без каких-либо скрытых оплат."
      },
      clauses: {
        UA: [
          { title: "Безкоштовне виправлення будь-яких помилок", desc: "Якщо виявиться баг або неточність у роботі функціоналу — наші інженери усувають це негайно та безкоштовно." },
          { title: "Цілодобовий моніторинг працездатності (24/7)", desc: "Автоматичний моніторинг доступності сервера, SSL-сертифікатів та швидкості завантаження." },
          { title: "Оновлення безпеки Drupal та CMS", desc: "Встановлення важливих патчів безпеки для захисту сайту від вразливостей." },
          { title: "Персональне навчання вашої команди", desc: "Відеоінструкції та жива консультація з керування товарами, каталогом, замовленнями та текстами." }
        ],
        BG: [
          { title: "Безплатно отстраняване на грешки", desc: "Всеки бъг се коригира незабавно и напълно безплатно от нашия екип." },
          { title: "24/7 мониторинг на наличността", desc: "Непрекъснато следене на сървъра, SSL сертификатите и скоростта." },
          { title: "Пачове за сигурност на Drupal", desc: "Навременно инсталиране на обновления за защита от уязвимости." },
          { title: "Обучение на вашия персонал", desc: "Инструкции и видео ръководство за лесно управление на съдържанието." }
        ],
        EN: [
          { title: "Zero-Cost Bug Resolution", desc: "Any functional defect or edge-case bug identified within 180 days is patched swiftly at no cost." },
          { title: "24/7 Server & SSL Health Monitoring", desc: "Continuous automated monitoring of site availability, SSL certificate renewal, and response times." },
          { title: "Core & Security Updates", desc: "Scheduled deployment of security patches for Drupal 11 and OpenCart engines." },
          { title: "Staff Training & Documentation", desc: "Screen walkthroughs and written guidelines for editing content, prices, and orders." }
        ],
        RU: [
          { title: "Бесплатное исправление ошибок", desc: "Любые функциональные недочеты исправляются оперативно и без дополнительных счетов." },
          { title: "24/7 мониторинг доступности", desc: "Контроль работы сервера, SSL-сертификата и скорости ответа." },
          { title: "Обновления безопасности ядра", desc: "Установка всех критических патчей безопасности платформы." },
          { title: "Обучение ваших сотрудников", desc: "Наглядные инструкции по управлению товарами, заказами и текстами." }
        ]
      },
      actionBtn: {
        BG: "Активирайте поддръжка за проект →",
        EN: "Activate Project Warranty →",
        UA: "Активувати гарантію на проект →",
        RU: "Активировать гарантию на проект →"
      }
    },

    // 3. 100% Code Handover
    "code-ownership": {
      icon: "💻",
      badge: {
        BG: "Пълна собственост и GitHub",
        EN: "Full Ownership & Git Repo",
        UA: "100% Власність та GitHub",
        RU: "100% Собственность и GitHub"
      },
      titles: {
        BG: "Пълна собственост върху сорс кода и репозитория",
        EN: "100% Clean Code Ownership & Git Repository Transfer",
        UA: "Повна передача авторських прав на код та репозиторій",
        RU: "Полная передача прав на исходный код и репозиторий"
      },
      tag: "Відкритий код",
      sub: "Ніяких закритих модулів чи прив'язки до студії",
      intro: {
        BG: "Вие притежавате 100% от вашия сайт. Ние не използваме криптиран код или платени лицензи, които изискват абонамент. Проектът се предава изцяло във ваш GitHub/GitLab профил.",
        EN: "You own 100% of your digital asset. We write clean, documented code without encryption or proprietary lock-ins. The repository and deployment pipelines are transferred directly to your account.",
        UA: "Ви володієте 100% вашого сайту. Жодного закодованого коду чи платних підписок на студійні модулі. Проект повністю передається у ваш власний GitHub/GitLab профіль та на ваш сервер.",
        RU: "Вы владеете 100% своего сайта. Никакого зашифрованного кода или привязки к студии. Весь проект передается в ваш профиль GitHub/GitLab и на ваш хостинг."
      },
      clauses: {
        UA: [
          { title: "Прямий доступ до Git-репозиторію", desc: "Чиста історія комітів, документовані гілки та конфігурації збирання." },
          { title: "Незалежність від розробника", desc: "Будь-який кваліфікований розробник у майбутньому зможе легко підтримувати або масштабувати сайт." },
          { title: "Розгортання на вашому хостингу", desc: "Сайт налаштовується на ваших серверах (Hetzner, AWS, DigitalOcean, SuperHosting) з вашим повним доступом root." },
          { title: "Повний пакет документації", desc: "Архітектурний опис бази даних, API-ендпоінтів та інструкції з розгортання в один клік." }
        ],
        BG: [
          { title: "Директен достъп до Git хранилище", desc: "Чист сорс код, структурирани клонове и документация за разработка." },
          { title: "Пълна независимост", desc: "Всеки уеб специалист може да продължи развитието на системата." },
          { title: "Инсталация на ваш хостинг", desc: "Сайтът работи на ваши сървъри с пълен контрол на достъпа." },
          { title: "Пълна документация", desc: "Описание на архитектурата, модулите и базите данни." }
        ],
        EN: [
          { title: "Direct Git Repository Access", desc: "Clean commit history, structured branching, and automated CI/CD deployment scripts." },
          { title: "Zero Vendor Lock-In", desc: "Any professional engineer worldwide can easily maintain or extend the system." },
          { title: "Deployment to Your Cloud/Host", desc: "Provisioned directly on your infrastructure (AWS, Hetzner, DigitalOcean) with root access." },
          { title: "Engineering Documentation", desc: "Complete architectural breakdown of data schema, APIs, and environment configs." }
        ],
        RU: [
          { title: "Прямой доступ к Git репозиторию", desc: "Чистая история коммитов, понятная структура и документация." },
          { title: "Независимость от подрядчика", desc: "Любой программист сможет продолжить работу над сайтом." },
          { title: "Развертывание на вашем сервере", desc: "Сервер регистрируется на вас с полным контролем root-доступа." },
          { title: "Техническая документация", desc: "Описание архитектуры базы данных, модулей и настроек." }
        ]
      },
      actionBtn: {
        BG: "Обсъдете техническия стек →",
        EN: "Discuss Technical Stack →",
        UA: "Обговорити технічний стек →",
        RU: "Обсудить технический стек →"
      }
    },

    // 4. Checkout 0.4s & Payments
    "checkout-payments": {
      icon: "⚡",
      badge: {
        BG: "Платежна интеграция & Скорост",
        EN: "Payments & 0.4s Checkout Spec",
        UA: "Платіжна інтеграція та чекаут 0.4s",
        RU: "Платежная интеграция и чекаут 0.4s"
      },
      titles: {
        BG: "Спецификация за сигурни онлайн плащания (Stripe, Борика, myPOS)",
        EN: "High-Speed Payment Gateway & Mobile Checkout Architecture",
        UA: "Специфікація безпечних онлайн-платежів (Stripe, Борика, Apple Pay)",
        RU: "Спецификация безопасных онлайн-платежей (Stripe, Борика, Apple Pay)"
      },
      tag: "Фінтех інтеграція",
      sub: "Конверсійний чекаут з миттєвою обробкою транзакцій",
      intro: {
        BG: "Ние интегрираме сертифицирани платежни шлюзове в ЕС за сигурно приемане на дебитни и кредитни карти. Оптимизираният чекаут за 0.4 секунди намалява изоставените колички с до 38%.",
        EN: "We integrate enterprise-grade payment gateways compliant with EU regulations (PSD2/3D-Secure 2.0). Blazing-fast 0.4s checkout flows reduce shopping cart abandonment by up to 38%.",
        UA: "Ми підключаємо сертифіковані платіжні шлюзи для безпечного прийому карток у ЄС та по всьому світу. Оптимізований чекаут за 0.4 секунди скорочує відсоток покинутих кошиків на 38%.",
        RU: "Мы подключаем сертифицированные платежные шлюзы для безопасного приема карт в ЕС и по всему миру. Быстрый чекаут за 0.4 секунды снижает процент брошенных корзин на 38%."
      },
      clauses: {
        UA: [
          { title: "3D-Secure 2.0 та протоколи безпеки", desc: "Шифрування токенів за міжнародним стандартом PCI DSS. Дані карток ніколи не зберігаються на вашому сервері." },
          { title: "Apple Pay, Google Pay та картки Visa/Mastercard", desc: "Оплата в один дотик зі смартфона для максимальної конверсії клієнтів." },
          { title: "Складова синхронізація в реальному часі", desc: "Миттєве резервування залишків товарів у вашій 1С / МойСклад / CRM." },
          { title: "Автоматична фіскалізація та інвойси", desc: "Генерація PDF-рахунків та електронних чеків відповідно до законодавства ЄС." }
        ],
        BG: [
          { title: "3D-Secure 2.0 и PCI DSS сигурност", desc: "Криптиране на плащанията. Данните за картите не се съхраняват на сървъра ви." },
          { title: "Apple Pay, Google Pay и карти", desc: "Плащане с едно докосване от мобилни устройства." },
          { title: "Складова синхронизация в реално време", desc: "Автоматично намаляване на наличностите при всяка поръчка." },
          { title: "Автоматични фактури и разписки", desc: "Генериране на PDF фактури съгласно изискванията на НАП." }
        ],
        EN: [
          { title: "3D-Secure 2.0 & PCI DSS Certified", desc: "Tokenized transaction pipelines. Cardholder data never touches your core server." },
          { title: "1-Tap Mobile Checkout", desc: "Native Apple Pay, Google Pay, Visa and Mastercard support with frictionless checkout." },
          { title: "Real-Time Warehouse Inventory Sync", desc: "Instant stock reservation and webhook triggers into your ERP/CRM system." },
          { title: "Automated EU Invoicing & VAT", desc: "Instant PDF invoices generated with automated VAT/tax calculation per country." }
        ],
        RU: [
          { title: "3D-Secure 2.0 и PCI DSS защита", desc: "Токенизированные платежи. Данные карт не сохраняются на вашем сервере." },
          { title: "Apple Pay, Google Pay и карты", desc: "Оплата в один клик со смартфона с максимальной конверсией." },
          { title: "Синхронизация со складом", desc: "Мгновенное списание остатков товаров в CRM / учетной системе." },
          { title: "Автоматические инвойсы", desc: "Генерация счетов в PDF с расчетом налогов по странам ЕС." }
        ]
      },
      actionBtn: {
        BG: "Поръчайте онлайн магазин с плащания →",
        EN: "Order E-Commerce with Payments →",
        UA: "Замовити магазин з онлайн-оплатою →",
        RU: "Заказать магазин с онлайн-оплатой →"
      }
    },

    // 5. Twig 3 Design Tokens
    "twig-design": {
      icon: "🎨",
      badge: {
        BG: "Архитектурен шаблон Twig 3",
        EN: "Twig 3 Architecture Standard",
        UA: "Архітектурний стандарт Twig 3",
        RU: "Архитектурный стандарт Twig 3"
      },
      titles: {
        BG: "Модулна архитектура на тема на Drupal 11 (BEM & Design Tokens)",
        EN: "Modular Drupal 11 Twig 3 Design System Architecture",
        UA: "Модульна архітектура теми на Drupal 11 (BEM & Design Tokens)",
        RU: "Модульная архитектура темы на Drupal 11 (BEM & Design Tokens)"
      },
      tag: "UI/UX Інженерія",
      sub: "Чистий код без сторонніх фреймворків, що уповільнюють сайт",
      intro: {
        BG: "Всяка наша тема за Drupal 11 се разработва по методологията BEM и атомен дизайн. Това гарантира скорост на рендериране под 50ms и възможност за неограничено разширяване.",
        EN: "Every Drupal 11 theme we build adheres to BEM architecture and atomic design tokens. This guarantees HTML rendering times below 50ms and effortless scalability for future features.",
        UA: "Кожна наша тема для Drupal 11 розробляється за методологією BEM та атомарними дизайн-токенами. Це забезпечує швидкість генерації сторінки менше 50мс та легке розширення будь-якими новими розділами.",
        RU: "Каждая тема для Drupal 11 создается по методологии BEM и атомарному дизайну. Это гарантирует рендеринг быстрее 50мс и легкое масштабирование сайта."
      },
      clauses: {
        UA: [
          { title: "Компонентний підхід Drupal 11 (SDC)", desc: "Кожен блок ізольований і має власні стилі без конфліктів у глобальному CSS." },
          { title: "0 зайвих залежностей (Zero Bloat)", desc: "Без важких бібліотек типу jQuery або непотрібних 2-мегабайтних UI фреймворків." },
          { title: "Вбудовані темні та світлі теми", desc: "Підтримка CSS custom properties для швидкої зміни колірних палітр." },
          { title: "Повна адаптивність під всі екрани", desc: "Ідеальний вигляд на смартфонах, планшетах, ноутбуках та 4K моніторах." }
        ],
        BG: [
          { title: "SDC Компонентен подход", desc: "Всеки елемент е изолиран със собствени стилове." },
          { title: "0 излишен код", desc: "Без тежки библиотеки, които бавят зареждането." },
          { title: "Вградени теми", desc: "CSS променливи за мигновена промяна на цветовете." },
          { title: "Перфектна адаптивност", desc: "Пълен респонсив дизайн за всички размери екрани." }
        ],
        EN: [
          { title: "Single Directory Components (SDC)", desc: "Every UI block is fully encapsulated with zero CSS naming collisions." },
          { title: "Zero Bloat Policy", desc: "No heavy legacy libraries, no jQuery overhead, purely modern native standards." },
          { title: "Dynamic Tokenized Themes", desc: "CSS variables enable effortless switching of color palettes and typography." },
          { title: "Pixel-Perfect Responsiveness", desc: "Tested across mobile, tablet, desktop, and ultra-wide displays." }
        ],
        RU: [
          { title: "Компонентный подход SDC", desc: "Каждый блок изолирован со своими стилями без конфликтов." },
          { title: "Ноль лишних зависимостей", desc: "Никаких тяжелых библиотек, замедляющих открытие страниц." },
          { title: "Адаптивные CSS-переменные", desc: "Мгновенное переключение цветовых тем и стилей." },
          { title: "Адаптивность под все экраны", desc: "Безупречное отображение от смартфонов до 4K дисплеев." }
        ]
      },
      actionBtn: {
        BG: "Поръчайте корпоративен Drupal сайт →",
        EN: "Order Drupal 11 Portal →",
        UA: "Замовити портал на Drupal 11 →",
        RU: "Заказать портал на Drupal 11 →"
      }
    },

    // 6. Core Web Vitals 99+
    "speed-audit": {
      icon: "⚡",
      badge: {
        BG: "PageSpeed 99+ Стандарт",
        EN: "PageSpeed 99+ Standard",
        UA: "Стандарт PageSpeed 99+",
        RU: "Стандарт PageSpeed 99+"
      },
      titles: {
        BG: "Регламент за максимална скорост и Google Core Web Vitals",
        EN: "Google Core Web Vitals 99+ Performance Specification",
        UA: "Регламент максимальної швидкості та Google Core Web Vitals",
        RU: "Регламент максимальной скорости и Google Core Web Vitals"
      },
      tag: "Продуктивність",
      sub: "Миттєве відкриття за 0.4 секунди для перших місць у Google",
      intro: {
        BG: "Скоростта на зареждане е ключов фактор за класиране в Google и задържане на потребителите. Ние оптимизираме всеки байт, скрипт и изображение за оценка 99+ в Google PageSpeed.",
        EN: "Loading speed directly dictates Google organic search rankings and checkout conversions. We obsessively profile every byte, script, and image to guarantee scores of 99+ in PageSpeed Insights.",
        UA: "Швидкість завантаження є ключовим фактором для виходу в ТОП Google та високої конверсії. Ми оптимізуємо кожен байт коду, скрипти та зображення для оцінки 99+ у Google PageSpeed.",
        RU: "Скорость загрузки напрямую влияет на позиции в Google и конверсию. Мы оптимизируем каждый байт, скрипты и медиафайлы для оценки 99+ в Google PageSpeed."
      },
      clauses: {
        UA: [
          { title: "LCP (Largest Contentful Paint) < 0.5s", desc: "Основний контент сторінки з'являється миттєво без очікування користувачем." },
          { title: "CLS (Cumulative Layout Shift) = 0.00", desc: "Абсолютна стабільність макета: ніяких стрибків тексту чи кнопок під час завантаження." },
          { title: "Формати зображень WebP / AVIF", desc: "Стиснення картинок до 80% без втрати візуальної якості з ледачим завантаженням (lazy-loading)." },
          { title: "Серверне кешування Redis / Varnish", desc: "Миттєва віддача сторінок зі швидкістю відповіді сервера (TTFB) менше 50 мілісекунд." }
        ],
        BG: [
          { title: "LCP под 0.5 секунди", desc: "Съдържанието се зарежда моментално." },
          { title: "CLS = 0.00 стабилност", desc: "Няма разместване на елементите при отваряне." },
          { title: "WebP / AVIF компресия", desc: "Минимален размер на изображенията без загуба на качество." },
          { title: "Redis кеширане", desc: "Светкавичен отговор на сървъра под 50ms." }
        ],
        EN: [
          { title: "LCP Sub-0.5s Rendering", desc: "Primary page hero and content paint instantly in the user viewport." },
          { title: "Zero Layout Shift (CLS = 0.00)", desc: "Rock-solid layout geometry prevents jarring shifts during asset streaming." },
          { title: "Next-Gen WebP & AVIF Media", desc: "Automated media compression reduces payload weights by up to 80%." },
          { title: "High-Speed Redis / Varnish Caching", desc: "Server response times (TTFB) maintained under 50 milliseconds." }
        ],
        RU: [
          { title: "LCP быстрее 0.5 секунды", desc: "Контент страницы появляется мгновенно." },
          { title: "CLS = 0.00 стабильность", desc: "Никаких сдвигов элементов при загрузке." },
          { title: "Форматы WebP и AVIF", desc: "Сжатие картинок без потери четкости." },
          { title: "Кэширование Redis", desc: "Ответ сервера менее 50 миллисекунд." }
        ]
      },
      actionBtn: {
        BG: "Поръчайте скоростен сайт →",
        EN: "Order High-Speed Website →",
        UA: "Замовити надшвидкий сайт →",
        RU: "Заказать скоростной сайт →"
      }
    },

    // 7. GDPR Compliance 2026
    "gdpr-security": {
      icon: "🔒",
      badge: {
        BG: "Регламент за сигурност в ЕС (GDPR)",
        EN: "EU GDPR & Security Protocol",
        UA: "Європейський регламент безпеки (GDPR)",
        RU: "Европейский регламент безопасности (GDPR)"
      },
      titles: {
        BG: "Съответствие с GDPR 2026 и киберсигурност на уеб системите",
        EN: "EU GDPR 2026 Compliance & Cybersecurity Protocol",
        UA: "Відповідність вимогам GDPR 2026 та захист даних користувачів",
        RU: "Соответствие требованиям GDPR 2026 и кибербезопасность"
      },
      tag: "Безпека та конфіденційність",
      sub: "Захист від штрафів контролюючих органів ЄС та хакерських атак",
      intro: {
        BG: "Всички уебсайтове на BTAB се проектират с вградена защита по европейския регламент GDPR. Това предпазва вашия бизнес от санкции и осигурява максимално доверие от страна на клиентите.",
        EN: "All digital solutions engineered by BTAB feature built-in privacy and compliance by design under European GDPR statutes. Protect your business from regulatory liabilities and secure client trust.",
        UA: "Всі сайти BTAB створюються з дотриманням суворого регламенту GDPR Євросоюзу. Це гарантує захист вашого бізнесу від штрафів регуляторів ЄС та забезпечує повну довіру європейських клієнтів.",
        RU: "Все сайты BTAB разрабатываются с соблюдением требований GDPR Евросоюза. Это защищает ваш бизнес от штрафов и обеспечивает доверие клиентов в ЕС."
      },
      clauses: {
        UA: [
          { title: "Багаторівневий Cookie Consent менеджер", desc: "Користувач може обрати категорії файлів cookie (необхідні, аналітика, маркетинг) з фіксацією згоди." },
          { title: "Захист форм від спаму та SQL/XSS ін'єкцій", desc: "Автоматична валідація, санітизація полів та захист токенами CSRF без набридливих капч." },
          { title: "Політика конфіденційності та обробки даних", desc: "Готові типові юридичні документи відповідно до законодавства ЄС." },
          { title: "SSL шифрування та безпечні заголовки (HSTS, CSP)", desc: "Найвищий клас безпеки A+ на тестах SSL Labs." }
        ],
        BG: [
          { title: "Управление на съгласието за бисквитки", desc: "Гъвкав избор на категории бисквитки с водене на регистър." },
          { title: "Защита от спам и инжекции", desc: "CSRF защита и санитизация на всички форми." },
          { title: "Политика за поверителност", desc: "Пълен комплект правни документи за ЕС." },
          { title: "A+ SSL криптиране", desc: "HSTS и CSP хедъри за максимална сигурност." }
        ],
        EN: [
          { title: "Granular Cookie Consent Manager", desc: "Empower visitors to opt-in or reject analytics, functional, and marketing cookie buckets." },
          { title: "CSRF & Injection Defenses", desc: "Automated input sanitization, CSRF token validation, and anti-spam shields without intrusive captchas." },
          { title: "EU-Compliant Privacy Policy Templates", desc: "Complete boilerplate documentation tailored to your service model." },
          { title: "A+ SSL Cryptography & Security Headers", desc: "Hardened HSTS, CSP, and X-Frame-Options headers." }
        ],
        RU: [
          { title: "Менеджер согласия на cookies", desc: "Возможность выбора категорий cookies с сохранением согласия." },
          { title: "Защита от спама и инъекций", desc: "Защита CSRF и очистка всех входных данных." },
          { title: "Политика конфиденциальности", desc: "Готовые шаблоны документов по стандартам ЕС." },
          { title: "Класс безопасности SSL A+", desc: "Защитные заголовки HSTS и CSP." }
        ]
      },
      actionBtn: {
        BG: "Консултирайте се за сигурност →",
        EN: "Consult on GDPR & Security →",
        UA: "Отримати консультацію з безпеки →",
        RU: "Получить консультацию по безопасности →"
      }
    }
  };

  const vaultFoldersData = [
    {
      id: "folder-ecom",
      tone: "light",
      art: "aurora",
      seed: 42,
      titleKey: "folder1Title",
      action: "add",
      files: [
        { name: "Magic Book UK", meta: "OpenCart 3 · UK", caseId: "magic-book", docId: null },
        { name: "Varna Rent-a-Car", meta: "Stripe & Borica", caseId: "varna-rent", docId: null },
        { name: "Checkout 0.4s", meta: "Performance Spec", caseId: null, docId: "checkout-payments" }
      ]
    },
    {
      id: "folder-drupal",
      tone: "dark",
      art: "ember",
      seed: 108,
      titleKey: "folder2Title",
      action: "more",
      files: [
        { name: "Burgas Business Hub", meta: "Drupal 11 Portal", caseId: "business-hub", docId: null },
        { name: "Twig 3 Design Tokens", meta: "BEM Components", caseId: null, docId: "twig-design" },
        { name: "Core Web Vitals 99+", meta: "Speed Audit", caseId: null, docId: "speed-audit" },
        { name: "GDPR Compliance 2026", meta: "EU Security Spec", caseId: null, docId: "gdpr-security" }
      ]
    },
    {
      id: "folder-warranty",
      tone: "dark",
      art: "verdant",
      seed: 777,
      titleKey: "folder3Title",
      action: "add",
      files: [
        { name: "EU Service Agreement", meta: "SLA 2026", caseId: null, docId: "sla-contract" },
        { name: "6-Month Free Support", meta: "Warranty Deed", caseId: null, docId: "warranty-support" },
        { name: "100% Code Handover", meta: "GitHub & Hosting", caseId: null, docId: "code-ownership" }
      ]
    }
  ];

  function renderGlassFolders() {
    const grid = document.getElementById('vault-folders-grid');
    if (!grid) return;

    const dict = i18n[currentLang];
    grid.innerHTML = '';

    vaultFoldersData.forEach((folder) => {
      const root = document.createElement('div');
      root.className = 'gf-root';
      root.id = folder.id;
      root.dataset.tone = folder.tone;
      root.dataset.open = 'false';
      root.dataset.place = 'bottom-left';

      const title = dict[folder.titleKey] || folder.titleKey;

      root.innerHTML = `
        <div class="gf-stage">
          <div class="gf-tilt">
            <div class="gf-shadow"></div>
            
            <div class="gf-back">
              <canvas class="gf-art" width="364" height="296" style="width:364px;height:296px;"></canvas>
              <div class="gf-back-sheen"></div>
              <svg class="gf-rim gf-back-rim" viewBox="0 0 340 272" aria-hidden="true">
                <path d="M0 56A22 22 0 0 1 22 34L146 34C170 34 172 0 198 0L318 0A22 22 0 0 1 340 22L340 250A22 22 0 0 1 318 272L22 272A22 22 0 0 1 0 250Z"/>
              </svg>
            </div>

            <div class="gf-files"></div>

            <div class="gf-front">
              <div class="gf-tint"></div>
              <div class="gf-spec"></div>
              <svg class="gf-rim gf-front-rim" viewBox="0 0 340 198" aria-hidden="true">
                <defs>
                  <linearGradient id="gf-front-stroke-${folder.id}" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
                    <stop offset="30%" stop-color="#ffffff" stop-opacity="0.45"/>
                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0.12"/>
                  </linearGradient>
                </defs>
                <path d="M0 22A22 22 0 0 1 22 0L118 0C144 0 146 32 172 32L318 32A22 22 0 0 1 340 54L340 176A22 22 0 0 1 318 198L22 198A22 22 0 0 1 0 176Z" stroke="url(#gf-front-stroke-${folder.id})"/>
              </svg>
              <button type="button" class="gf-hit" aria-label="Open or close folder"></button>
              <div class="gf-label">
                <span class="gf-title">${title}</span>
                <span class="gf-meta">${folder.files.length} ${dict.filesWord}</span>
              </div>
            </div>

            ${folder.action === 'add' ? `
              <button type="button" class="gf-key gf-key--add" title="Add file to folder" aria-label="Add file">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>
            ` : `
              <button type="button" class="gf-key gf-key--more" title="More options" aria-label="More options">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="5" cy="12" r="2.2"/>
                  <circle cx="12" cy="12" r="2.2"/>
                  <circle cx="19" cy="12" r="2.2"/>
                </svg>
              </button>
            `}
          </div>
        </div>
      `;

      grid.appendChild(root);

      const canvas = root.querySelector('canvas.gf-art');
      if (canvas) {
        setTimeout(() => {
          renderNoiseToCanvas(canvas, ART_PRESETS[folder.art] || ART_PRESETS.aurora, folder.seed);
        }, 50);
      }

      renderFolderFiles(root, folder);

      root.addEventListener('pointermove', (e) => {
        const rect = root.getBoundingClientRect();
        const px = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width - 0.5) * 2));
        const py = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height - 0.5) * 2));
        root.style.setProperty('--gf-px', px.toFixed(3));
        root.style.setProperty('--gf-py', py.toFixed(3));
      });

      root.addEventListener('pointerleave', () => {
        root.style.setProperty('--gf-px', '0');
        root.style.setProperty('--gf-py', '0');
      });

      const hit = root.querySelector('.gf-hit');
      if (hit) {
        hit.addEventListener('click', () => {
          const isOpen = root.dataset.open === 'true';
          root.dataset.open = isOpen ? 'false' : 'true';
        });
      }

      const addBtn = root.querySelector('.gf-key--add');
      if (addBtn) {
        addBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const newIdx = folder.files.length + 1;
          const newFile = {
            name: `${title} #${newIdx}`,
            meta: `Verified Spec · 2026`,
            caseId: null
          };
          folder.files.push(newFile);
          renderFolderFiles(root, folder, true);

          const front = root.querySelector('.gf-front');
          if (front) {
            front.classList.remove('gf-front--bump');
            void front.offsetWidth;
            front.classList.add('gf-front--bump');
          }

          root.dataset.open = 'true';
          showToast(dict.folderAddToast || "✨ Файл додано до сейфу!");
        });
      }

      const moreBtn = root.querySelector('.gf-key--more');
      if (moreBtn) {
        moreBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isOpen = root.dataset.open === 'true';
          root.dataset.open = isOpen ? 'false' : 'true';
        });
      }
    });
  }

  function renderFolderFiles(root, folder, animateLast = false) {
    const filesContainer = root.querySelector('.gf-files');
    const metaEl = root.querySelector('.gf-label .gf-meta');
    const dict = i18n[currentLang];
    if (!filesContainer) return;

    if (metaEl) {
      metaEl.textContent = `${folder.files.length} ${dict.filesWord}`;
    }

    filesContainer.innerHTML = '';
    const total = folder.files.length;

    folder.files.forEach((file, index) => {
      const slot = index - (total - 1) / 2;
      const depth = total - 1 - index;
      const jx = ((index % 3) - 1) * 1.5;
      const jr = ((index % 2 === 0 ? 1 : -1) * 0.8);

      const slotDiv = document.createElement('div');
      slotDiv.className = 'gf-sheet-slot';
      slotDiv.style.setProperty('--gf-slot', slot.toFixed(2));
      slotDiv.style.setProperty('--gf-depth', depth.toString());
      slotDiv.style.setProperty('--gf-jx', `${jx}px`);
      slotDiv.style.setProperty('--gf-jr', `${jr}deg`);

      const sheetBtn = document.createElement('button');
      sheetBtn.type = 'button';
      sheetBtn.className = 'gf-sheet';
      if (animateLast && index === total - 1) {
        sheetBtn.classList.add('gf-sheet--drop');
      }

      sheetBtn.innerHTML = `
        <div class="gf-sheet-head">
          <span class="gf-sheet-name">${file.name}</span>
          <span class="gf-sheet-meta">${file.meta}</span>
        </div>
        <div class="gf-lines">
          <i></i><i></i><i></i><i></i>
        </div>
      `;

      sheetBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (file.caseId) {
          const item = portfolioItems.find(p => p.id === file.caseId);
          if (item) {
            openCaseStudyModal(item, '01');
            return;
          }
        }
        if (file.docId && vaultDocuments[file.docId]) {
          openDocumentModal(file.docId);
          return;
        }
        showToast(`📄 ${file.name} [${file.meta}] — ${folder.tone === 'dark' ? 'Secured in Vault' : 'Ready for deployment'}`);
      });

      slotDiv.appendChild(sheetBtn);
      filesContainer.appendChild(slotDiv);
    });
  }

  // ==========================================
  // 5.6 DOCUMENT VIEWER MODAL (VAULT SPECS & LEGAL)
  // ==========================================
  function openDocumentModal(docKey) {
    const doc = vaultDocuments[docKey];
    if (!doc) return;

    const modal = document.getElementById('case-modal');
    const titleEl = document.getElementById('modal-case-title');
    const bodyEl = document.getElementById('modal-case-body');
    if (!modal || !titleEl || !bodyEl) return;

    const lang = currentLang || 'BG';
    const badgeText = doc.badge[lang] || doc.badge.EN;
    const titleText = doc.titles[lang] || doc.titles.EN;
    const introText = doc.intro[lang] || doc.intro.EN;
    const clauses = doc.clauses[lang] || doc.clauses.EN;
    const btnText = doc.actionBtn[lang] || doc.actionBtn.EN;

    titleEl.innerHTML = `<span style="margin-right: 8px;">${doc.icon}</span> ${titleText}`;

    let clausesHtml = '';
    clauses.forEach((c, idx) => {
      clausesHtml += `
        <div style="background: var(--bg-surface-elevated); padding: 16px 20px; border-radius: 12px; border: 1px solid var(--border-subtle); margin-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: var(--accent-cyan); color: #000; font-size: 0.78rem; font-weight: 800; flex: none;">${idx + 1}</span>
            <strong style="color: var(--text-main); font-size: 1.02rem;">${c.title}</strong>
          </div>
          <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin: 0; padding-left: 34px;">${c.desc}</p>
        </div>
      `;
    });

    const clausesHeader = lang === 'UA' ? 'Ключові пункти та гарантії документа:' : (lang === 'BG' ? 'Ключови клаузи и гаранции:' : (lang === 'RU' ? 'Ключевые пункты и гарантии:' : 'Key Clauses & Enforced Guarantees:'));
    const downloadLabel = lang === 'UA' ? 'Завантажити типовий зразок' : (lang === 'BG' ? 'Свалете примерен образец' : (lang === 'RU' ? 'Скачать образец' : 'Download Sample Spec'));
    const downloadToastMsg = lang === 'UA' ? '📥 Зразок документа сформовано. Заповніть коротку форму або зв\'яжіться з нами для миттєвої відправки.' : (lang === 'BG' ? '📥 Образецът на документа е генериран. Свържете се с нас за детайли.' : '📥 Document sample generated.');

    bodyEl.innerHTML = `
      <div style="display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; align-items: center;">
        <span class="portfolio-tag" style="position: static; background: var(--accent-cyan); color: #000;">● ${doc.tag}</span>
        <span class="badge" style="border-color: var(--accent-emerald); color: var(--accent-emerald);">${badgeText}</span>
        <span class="badge">${doc.sub}</span>
      </div>

      <p style="color: var(--text-main); font-size: 1.04rem; line-height: 1.65; margin-bottom: 22px; font-weight: 500;">
        ${introText}
      </p>

      <h4 style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-dim); margin-bottom: 14px;">
        ${clausesHeader}
      </h4>

      <div style="margin-bottom: 24px;">
        ${clausesHtml}
      </div>

      <div style="display: flex; gap: 14px; flex-wrap: wrap; align-items: center; padding-top: 16px; border-top: 1px solid var(--border-subtle);">
        <a href="#contact" class="btn btn-cyan" onclick="document.getElementById('case-modal').classList.remove('active'); document.getElementById('contact-service').value='${titleText}'; document.getElementById('contact-message').value='Доброго дня! Хочу ознайомитися з документом: ${titleText} та отримати консультацію.';">
          ${btnText}
        </a>
        <button type="button" class="btn btn-secondary" onclick="showToast('${downloadToastMsg}'); document.getElementById('case-modal').classList.remove('active'); location.hash = '#contact';">
          ${downloadLabel}
        </button>
      </div>
    `;

    modal.classList.add('active');
  }

  // ==========================================
  // 6. LOCALIZED CASE STUDY MODAL
  // ==========================================
  function openCaseStudyModal(item, issueNum) {
    const modal = document.getElementById('case-modal');
    const titleEl = document.getElementById('modal-case-title');
    const bodyEl = document.getElementById('modal-case-body');

    if (!modal || !titleEl || !bodyEl) return;

    const dict = i18n[currentLang];
    const title = item.titles[currentLang] || item.titles.EN;
    const tag = item.tags[currentLang] || item.tags.EN;
    const desc = item.descs[currentLang] || item.descs.EN;
    const metric = item.metrics[currentLang] || item.metrics.EN;

    titleEl.textContent = `#${issueNum || '01'} ${title}`;
    bodyEl.innerHTML = `
      <div style="margin-bottom: 22px; border-radius: 14px; overflow: hidden; border: 1px solid var(--border-subtle); box-shadow: 0 10px 30px rgba(0,0,0,0.6);">
        <img src="${item.img}" alt="${title}" style="width: 100%; height: auto; display: block;" />
      </div>
      <div style="display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap;">
        <span class="portfolio-tag" style="position: static;">● ${tag}</span>
        <span class="badge">${dict.modalStackLabel} ${item.cms}</span>
        <span class="badge">${dict.modalLocationLabel} ${item.year}</span>
      </div>
      <h4 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--text-main);">${dict.modalObjectiveLabel}</h4>
      <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
        ${desc} ${dict.modalObjectiveText}
      </p>
      <div style="background: var(--bg-surface-elevated); padding: 18px 22px; border-radius: 12px; border: 1px solid var(--border-subtle); margin-bottom: 26px;">
        <span style="font-size: 0.76rem; text-transform: uppercase; color: var(--text-dim); display: block; margin-bottom: 4px; letter-spacing: 0.08em;">${dict.modalResultLabel}</span>
        <strong style="color: var(--accent-emerald); font-size: 1.3rem; font-family: var(--font-heading);">${metric}</strong>
      </div>
      <div style="display: flex; gap: 14px; flex-wrap: wrap;">
        <a href="#contact" class="btn btn-cyan" onclick="document.getElementById('case-modal').classList.remove('active'); document.getElementById('contact-service').value='${tag}';">
          ${dict.modalOrderSimilar}
        </a>
        <button type="button" class="btn btn-secondary" onclick="document.getElementById('case-modal').classList.remove('active');">
          ${dict.modalClose}
        </button>
      </div>
    `;

    modal.classList.add('active');
  }

  // ==========================================
  // 7. INTERACTIVE BUBBLE CANVAS PHYSICS ENGINE
  // ==========================================
  function initBubbleCanvas() {
    const canvas = document.getElementById('bubble-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    window.addEventListener('resize', () => {
      if (canvas.offsetWidth && canvas.offsetHeight) {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
      }
    });

    const paletteColors = [
      '#00f0ff', '#3b82f6', '#10b981', '#a855f7', '#38bdf8', '#06b6d4', '#60a5fa'
    ];

    class Bubble {
      constructor(x, y, r) {
        this.x = x || Math.random() * width;
        this.y = y || Math.random() * height;
        this.r = r || Math.random() * 22 + 10;
        this.origR = this.r;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.color = paletteColors[Math.floor(Math.random() * paletteColors.length)];
        this.alpha = Math.random() * 0.45 + 0.45;
        this.popping = false;
        this.particles = [];
      }

      update(mouse) {
        if (this.popping) {
          this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= 0.035;
          });
          return;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Bounce on borders
        if (this.x - this.r < 0 || this.x + this.r > width) this.vx *= -1;
        if (this.y - this.r < 0 || this.y + this.r > height) this.vy *= -1;

        // Mouse repelling interaction
        if (mouse.x !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            const force = (110 - dist) / 110;
            this.x += (dx / dist) * force * 5;
            this.y += (dy / dist) * force * 5;
          }
        }
      }

      draw() {
        if (this.popping) {
          this.particles.forEach(p => {
            if (p.alpha > 0) {
              ctx.save();
              ctx.globalAlpha = p.alpha;
              ctx.fillStyle = p.color;
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
              ctx.fill();
              ctx.restore();
            }
          });
          return;
        }

        ctx.save();
        ctx.globalAlpha = this.alpha;

        // Outer glow
        const grad = ctx.createRadialGradient(
          this.x - this.r * 0.3, this.y - this.r * 0.3, this.r * 0.1,
          this.x, this.y, this.r
        );
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.35, this.color);
        grad.addColorStop(1, 'rgba(6, 8, 14, 0.6)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();

        // Bubble highlight reflection
        ctx.beginPath();
        ctx.arc(this.x - this.r * 0.35, this.y - this.r * 0.35, this.r * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
        ctx.fill();

        ctx.restore();
      }

      pop() {
        if (this.popping) return;
        this.popping = true;
        for (let i = 0; i < 12; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 4 + 2;
          this.particles.push({
            x: this.x,
            y: this.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            r: Math.random() * 3 + 1.5,
            color: this.color,
            alpha: 1
          });
        }
      }
    }

    const bubbles = [];
    const bubbleCount = 65;
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(new Bubble());
    }

    const mouse = { x: null, y: null };

    canvas.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    // Click to POP!
    canvas.addEventListener('click', e => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      let poppedAny = false;
      bubbles.forEach(b => {
        if (!b.popping) {
          const d = Math.sqrt((b.x - clickX) ** 2 + (b.y - clickY) ** 2);
          if (d <= b.r + 14) {
            b.pop();
            poppedAny = true;
          }
        }
      });

      // If clicked empty space, spawn a pop splash!
      if (!poppedAny) {
        const tempBubble = new Bubble(clickX, clickY, 18);
        tempBubble.pop();
        bubbles.push(tempBubble);
      }
    });

    function animate() {
      ctx.clearRect(0, 0, width, height);

      bubbles.forEach((b, idx) => {
        b.update(mouse);
        b.draw();
        // Respawn popped bubbles
        if (b.popping && b.particles.every(p => p.alpha <= 0)) {
          bubbles[idx] = new Bubble();
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  // ==========================================
  // 8. TOAST NOTIFICATION
  // ==========================================
  function showToast(message) {
    let toast = document.getElementById('toast-notice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>✨</span> <div>${message}</div>`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4200);
  }

  // ==========================================
  // 9. DOM INITIALIZATION
  // ==========================================
  document.addEventListener('DOMContentLoaded', function () {
    // 1. Language Init
    const savedLang = localStorage.getItem('btab_lang') || 'BG';
    setLanguage(savedLang);

    // 2. Palette Theme Init
    const savedPalette = localStorage.getItem('btab_palette') || 'cyan';
    document.body.dataset.palette = savedPalette;

    document.querySelectorAll('.palette-dot-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const palette = btn.dataset.palette;
        document.body.dataset.palette = palette;
        localStorage.setItem('btab_palette', palette);
        showToast(`Тема активирана: ${palette.toUpperCase()}`);
      });
    });

    // 3. Language click handlers
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });

    // 4. Mobile Menu Toggle
    const toggleBtn = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (toggleBtn && navMenu) {
      toggleBtn.addEventListener('click', () => navMenu.classList.toggle('open'));
      navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('open'));
      });
    }

    // 5. Calculator Type Buttons
    document.querySelectorAll('.calc-type-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.calc-type-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        calcState.type = btn.dataset.type;
        updateCalculator();
      });
    });

    // 6. Calculator CMS Buttons
    document.querySelectorAll('.calc-cms-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.calc-cms-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        calcState.cms = btn.dataset.cms;
        updateCalculator();
      });
    });

    // 7. Calculator Addons Checkboxes
    document.querySelectorAll('.calc-check-item').forEach(item => {
      item.addEventListener('click', () => {
        const addon = item.dataset.addon;
        if (calcState.addons.has(addon)) {
          calcState.addons.delete(addon);
          item.classList.remove('checked');
        } else {
          calcState.addons.add(addon);
          item.classList.add('checked');
        }
        updateCalculator();
      });
    });

    // 8. Calculator Order Trigger
    const calcOrderBtn = document.getElementById('calc-order-trigger');
    if (calcOrderBtn) {
      calcOrderBtn.addEventListener('click', () => {
        const dict = i18n[currentLang];
        const price = document.getElementById('calc-total-price')?.textContent || '';
        const days = document.getElementById('calc-total-days')?.textContent || '';

        const msgInput = document.getElementById('contact-message');
        const serviceSelect = document.getElementById('contact-service');

        if (serviceSelect) {
          serviceSelect.selectedIndex = 0;
        }

        if (msgInput) {
          msgInput.value = `[${dict.calcEstimateTitle}] ${price} / ${days} ${dict.calcTimeDays}.`;
        }

        const contactSec = document.getElementById('contact');
        if (contactSec) {
          contactSec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // 9. Portfolio Filter Tabs
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPortfolio(btn.dataset.filter);
      });
    });

    // 10. Close Modal Listeners
    const modal = document.getElementById('case-modal');
    if (modal) {
      modal.addEventListener('click', e => {
        if (e.target === modal || e.target.closest('.modal-close-btn')) {
          modal.classList.remove('active');
        }
      });
    }

    // 11. Contact Form Submit
    const form = document.getElementById('project-brief-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = '...';
        btn.disabled = true;

        setTimeout(() => {
          showToast(i18n[currentLang].contactSuccessToast);
          form.reset();
          btn.textContent = originalText;
          btn.disabled = false;
        }, 700);
      });
    }

    // 12. Initialize Bubble Canvas
    initBubbleCanvas();
  });

  // Drupal 11 Behaviors Export
  if (typeof Drupal !== 'undefined') {
    Drupal.behaviors.btabThemeBehaviors = {
      attach: function (context, settings) {
        // Drupal specific behaviors
      }
    };
  }
})();
