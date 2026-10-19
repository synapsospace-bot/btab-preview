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
      navHome: "Начало",
      navAbout: "За нас",
      navVault: "Сейф & Гаранции",
      navServices: "Услуги",
      breadcrumbHome: "Начало",
      breadcrumbServices: "Услуги",
      breadcrumbVault: "Сейф & Гаранции",
      breadcrumbPortfolio: "Портфолио",
      breadcrumbAbout: "За студиото",
      breadcrumbContacts: "Контакти",

      // Subpage Headers & Content
      servicesPageBadge: "Инженерна разработка на уеб системи",
      servicesPageTitle: "Пълен спектър от услуги за дигитален растеж в ЕС",
      servicesPageDesc: "От защитени корпоративни портали на Drupal 11 до високонатоварени онлайн магазини с целева скорост до 0.4s (PageSpeed 95–100) и чист код без излишен баласт.",
      servicesProcessTitle: "Нашият 4-етапен инженерен процес",
      step1Title: "01. Анализ & Архитектура",
      step1Desc: "Анализ на бизнес процесите, изграждане на информационна архитектура и схема на данните.",
      step2Title: "02. UX/UI Проектиране",
      step2Desc: "Индивидуален дизайн без тежки библиотеки, адаптивен за всички екрани и мобилни устройства.",
      step3Title: "03. Чист код & Оптимизация",
      step3Desc: "Разработка на Drupal 11 / OpenCart с PageSpeed 95–100, семантичен код и нулево забавяне.",
      step4Title: "04. Тестване & 6м Гаранция",
      step4Desc: "Стрес-тестове, проверка за киберсигурност, официален договор и 6 месеца безплатен съпорт.",
      servicesAllBtn: "Вижте детайли за всички услуги →",

      vaultPageBadge: "Официални гаранции & 100% сигурност",
      vaultPageTitle: "Интерактивен сейф на договорите, SLA и стандартите на BTAB",
      vaultPageDesc: "Всички проектни документи, 180-дневна техническа гаранция, пълен достъп до Git репозиторията и европейски стандарти GDPR в прозрачен вид.",
      vaultPillar1Title: "📜 Европейски SLA 2026 договор",
      vaultPillar1Desc: "Фиксирани етапи, срокове и финансови гаранции съгласно законодателството на ЕС.",
      vaultPillar2Title: "🔒 100% Собственост и Git код",
      vaultPillar2Desc: "Предаваме пълните изходни файлове, бази данни и Git история без скрити лицензи.",
      vaultPillar3Title: "🛡️ 180 дни безплатна гаранция",
      vaultPillar3Desc: "Моментално отстраняване на всякакви забележки след пускане на сайта в експлоатация.",
      vaultAllBtn: "Отворете пълния сейф на гаранциите →",

      aboutPageBadge: "10+ години опит в България и ЕС",
      aboutPageTitle: "Инженерно уеб студио BTAB — бързина, надеждност и резултати",
      aboutPageDesc: "Ние вярваме в чистия код, отсъствието на ненужен баласт и строгите европейски стандарти за сигурност. Базирани в Бургас, работим с клиенти от цяла Европа.",
      aboutPhilosophyTitle: "Нашата инженерна философия",
      aboutPhil1Title: "1. Нулев баласт (Zero Bloat)",
      aboutPhil1Desc: "Отказваме се от тежки WordPress шаблони с десетки бавни плъгини. Пишем чист семантичен код, осигуряващ зареждане под 0.5s.",
      aboutPhil2Title: "2. Архитектура на Drupal 11",
      aboutPhil2Desc: "Използваме водещата корпоративна платформа в света с доказана устойчивост на хакерски атаки и неограничена мащабируемост.",
      aboutPhil3Title: "3. Европейски стандарт и SLA",
      aboutPhil3Desc: "Официални фактури, спазване на GDPR регламентите и фиксирани гаранции за изпълнение в договорените срокове.",
      aboutOfficeBadge: "Централен офис Бургас",
      aboutOfficeTitle: "Дигитално инженерство в сърцето на Черноморието",
      aboutOfficeDesc: "Нашият централен офис се намира в ж.к. Лазур 130 в гр. Бургас. Проектираме системи за клиенти от България, Германия, Великобритания и цяла Европа.",

      portfolioPageBadge: "Доказани резултати",
      portfolioPageTitle: "Портфолио от завършени системи и сайтове с PageSpeed 95–100",
      portfolioPageDesc: "Разгледайте реалните резултати, метрики и архитектурни решения, които внедрихме за нашите клиенти.",
      portfolioAllBtn: "Вижте цялото портфолио на студиото →",

      contactsPageBadge: "Директна връзка с инженерите",
      contactsPageTitle: "Свържете се със студио BTAB за консултация и бриф",
      contactsPageDesc: "Централен офис в Бургас, бърза реакция в месинджърите или официална среща. Консултацията по архитектура е безплатна.",
      contactsOfficeTitle: "Офис в Бургас",
      contactsOfficeDesc: "гр. Бургас 8000, ж.к. Лазур 130",
      contactsScheduleTitle: "Работно време",
      contactsScheduleDesc: "Пон – Пет: 09:00 – 18:00 (EET)",
      contactsDirectTitle: "Бърз контакт",
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
      heroDesc: "Уеб студио BTAB (Бургас, България). Проектираме модерни уебсайтове на Drupal 11, OpenCart и Headless архитектури с целева скорост до 0.4s (PageSpeed 95–100) и чист код без излишни зависимости.",
      heroBtnCalc: "Изчислете стойност →",
      heroBtnPortfolio: "Вижте нашите работи",

      // Benchmark
      benchTitle: "Тест за скорост в реално време",
      benchLive: "Google PageSpeed: 95–100",
      benchBtabTag: "Код на BTAB",
      benchBtabSub: "Моментално зареждане за 0.4s",
      benchOtherTag: "Обикновени шаблони",
      benchOtherSub: "Загуба на 45% от клиентите",
      benchLcp: "Първо съдържание (LCP)",
      benchCls: "Стабилност на макета (CLS)",
      benchScore: "PageSpeed Индекс",

      // Marquee Ribbons
      marquee1: "DRUPAL 11 АРХИТЕКТУРА ✱ СКОРОСТ 0.4s ✱ GOOGLE PAGESPEED 95–100 ✱ OPENCART 4 ✱ ЧИСТ КОД ✱ БЕЗПЛАТНА ПОДДРЪЖКА 6 МЕСЕЦА ✱ БЪЛГАРИЯ & ЕС ✱",
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
      calcBenefit1: "Оптимизирано за PageSpeed 95–100",
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
      service3Title: "SEO аудит & Скорост 0.4s",
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
      vaultHint: "● Движете курсора за 3D наклон · Докоснете папката, за да разгледате SLA договора и файловете",
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
      contactReassurance: "⚡ Отговор до 2 часа в рамките на работния ден · Безплатен предварителен одит и консултация",
      contactSuccessToast: "Благодарим ви! Запитването е получено успешно. Ще се свържем с вас в рамките на 2 часа.",

      // Contact Options
      optDrupal: "Корпоративен сайт на Drupal 11",
      optShop: "Онлайн магазин (OpenCart / Headless)",
      optLanding: "Лендинг страница (Landing Page)",
      optRedesign: "Редизайн и ускоряване (PageSpeed 95–100)",
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
      navHome: "Home",
      navAbout: "About",
      navVault: "Vault & SLA",
      navServices: "Services",
      breadcrumbHome: "Home",
      breadcrumbServices: "Services",
      breadcrumbVault: "Vault & SLA",
      breadcrumbPortfolio: "Portfolio",
      breadcrumbAbout: "About Studio",
      breadcrumbContacts: "Contacts",

      // Subpage Headers & Content
      servicesPageBadge: "Next-Gen Web Engineering",
      servicesPageTitle: "Full-Cycle Web Engineering & High Performance for EU",
      servicesPageDesc: "From ultra-secure Drupal 11 enterprise portals to high-converting eCommerce with PageSpeed 95–100 and zero code bloat.",
      servicesProcessTitle: "Our 4-Stage Engineering Process",
      step1Title: "01. Analysis & Architecture",
      step1Desc: "Business analysis, database schema modeling, and UX journey mapping.",
      step2Title: "02. Responsive UX/UI",
      step2Desc: "Bespoke clean interface design without heavy frameworks, tuned for high mobile conversion.",
      step3Title: "03. Clean Code & Speed",
      step3Desc: "Development on Drupal 11 / OpenCart with target sub-second load times (PageSpeed 95–100) and strict security.",
      step4Title: "04. QA & 6-Mo Warranty",
      step4Desc: "Cybersecurity validation, stress testing, official EU contract, and 6-month free warranty.",
      servicesAllBtn: "Explore all services & tech stacks →",

      vaultPageBadge: "Official Legal Guarantees & Code Security",
      vaultPageTitle: "Interactive Vault of Contracts, SLA, and Engineering Standards",
      vaultPageDesc: "All deliverables, 180-day SLA warranty certificates, 100% Git ownership handover, and EU GDPR compliance visualized in real 3D.",
      vaultPillar1Title: "📜 European SLA 2026 Contract",
      vaultPillar1Desc: "Fixed milestones, strict timelines, and financial guarantees compliant with EU legislation.",
      vaultPillar2Title: "🔒 100% Code Ownership & Git",
      vaultPillar2Desc: "Full handover of source repositories, clean databases, and assets without vendor lock-in.",
      vaultPillar3Title: "🛡️ 180-Day Free Technical Warranty",
      vaultPillar3Desc: "Immediate patch response and continuous monitoring after production launch.",
      vaultAllBtn: "Open full guarantee vault & SLA →",

      aboutPageBadge: "10+ Years Engineering Excellence in the EU",
      aboutPageTitle: "BTAB Digital Engineering — Speed, Reliability, and Measurable ROI",
      aboutPageDesc: "We believe in pure code, zero bloat, and rigid European quality standards. Headquartered in Burgas, Bulgaria, serving clients across the EU.",
      aboutPhilosophyTitle: "Our Engineering Philosophy",
      aboutPhil1Title: "1. Zero Bloat Philosophy",
      aboutPhil1Desc: "We reject bloated multipurpose themes with dozens of slow plugins. We write pure semantic code delivering sub-0.5s loading speeds.",
      aboutPhil2Title: "2. Drupal 11 Architecture",
      aboutPhil2Desc: "We leverage the world's leading enterprise open-source CMS, offering military-grade security and unlimited scalability.",
      aboutPhil3Title: "3. European Standards & SLA",
      aboutPhil3Desc: "Official VAT invoicing, full GDPR compliance, and legally backed delivery warranties.",
      aboutOfficeBadge: "Burgas Headquarters",
      aboutOfficeTitle: "Digital Engineering on the Black Sea Coast",
      aboutOfficeDesc: "Our main engineering office is located at Lazur 130, Burgas. Delivering platforms for clients in Bulgaria, UK, Germany, and Europe.",

      portfolioPageBadge: "Proven Performance Cases",
      portfolioPageTitle: "Case Studies & Live Projects Powered by High-Speed Architectures",
      portfolioPageDesc: "Explore real business metrics, architectural blueprints, and speed benchmarks delivered for our partners.",
      portfolioAllBtn: "View all agency case studies →",

      contactsPageBadge: "Direct Engineering Connection",
      contactsPageTitle: "Connect with BTAB Studio for Technical Brief & Consultation",
      contactsPageDesc: "Burgas headquarters, instant responses on WhatsApp and Telegram, or on-site meeting. Free architectural consultation.",
      contactsOfficeTitle: "Burgas Office",
      contactsOfficeDesc: "Lazur 130, 8000 Burgas, Bulgaria",
      contactsScheduleTitle: "Working Hours",
      contactsScheduleDesc: "Mon – Fri: 09:00 – 18:00 (EET)",
      contactsDirectTitle: "Direct Channels",
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
      heroDesc: "BTAB Digital Agency (Burgas, Bulgaria). We build modern, secure websites on Drupal 11, OpenCart, and Headless architectures with target sub-second load times (PageSpeed 95–100) and clean bloat-free code.",
      heroBtnCalc: "Calculate Cost →",
      heroBtnPortfolio: "View Case Studies",

      // Benchmark
      benchTitle: "Live Real-Time Speed Benchmark",
      benchLive: "Google PageSpeed: 95–100",
      benchBtabTag: "BTAB Clean Code",
      benchBtabSub: "Instant 0.4s load",
      benchOtherTag: "Bloated Templates",
      benchOtherSub: "Losing 45% of visitors",
      benchLcp: "Largest Contentful Paint (LCP)",
      benchCls: "Layout Shift (CLS)",
      benchScore: "PageSpeed Index",

      // Marquee Ribbons
      marquee1: "DRUPAL 11 ARCHITECTURE ✱ 0.4s LOAD TIME ✱ GOOGLE PAGESPEED 95–100 ✱ OPENCART 4 ✱ CLEAN CODE ✱ 6 MONTHS FREE WARRANTY ✱ BULGARIA & EU ✱",
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
      calcBenefit1: "PageSpeed 95–100 Architecture Target",
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
      service3Title: "SEO Audit & Sub-Second Speed",
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
      vaultHint: "● Hover to lean · Tap folder to inspect SLA contracts, source code & certificates",
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
      contactReassurance: "⚡ Response within 2 business hours · Free preliminary audit & consultation included",
      contactSuccessToast: "Thank you! Your brief has been received. Our team will contact you within 2 business hours.",

      // Contact Options
      optDrupal: "Corporate Website on Drupal 11",
      optShop: "E-Commerce Store (OpenCart / Headless)",
      optLanding: "Landing Page (High-Conversion)",
      optRedesign: "Redesign & Acceleration (PageSpeed 95–100)",
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
      navHome: "Головна",
      navAbout: "Про студію",
      navVault: "Сейф & Гарантії",
      navServices: "Послуги",
      breadcrumbHome: "Головна",
      breadcrumbServices: "Послуги",
      breadcrumbVault: "Сейф & Гарантії",
      breadcrumbPortfolio: "Портфоліо",
      breadcrumbAbout: "Про студію",
      breadcrumbContacts: "Контакти",

      // Subpage Headers & Content
      servicesPageBadge: "Інженерна розробка веб-систем",
      servicesPageTitle: "Повний спектр послуг для диджитал-масштабування в ЄС",
      servicesPageDesc: "Від захищених корпоративних порталів на Drupal 11 до високонавантажених інтернет-магазинів із цільовою швидкістю до 0.4с (PageSpeed 95–100) та чистим кодом без зайвого баласту.",
      servicesProcessTitle: "Наш 4-етапний інженерний процес",
      step1Title: "01. Аналіз & Архітектура",
      step1Desc: "Аналіз бізнес-процесів, моделювання бази даних та проектування користувацьких сценаріїв.",
      step2Title: "02. UX/UI Проектування",
      step2Desc: "Індивідуальний дизайн без важких бібліотек, оптимізований під високу конверсію на смартфонах.",
      step3Title: "03. Чистий код & Швидкість",
      step3Desc: "Розробка на Drupal 11 / OpenCart з показником PageSpeed 95–100 та нульовим баластом.",
      step4Title: "04. Тестування & 6м Гарантія",
      step4Desc: "Стрес-тести, перевірка кібербезпеки, європейський договір та 6 місяців безкоштовної гарантії.",
      servicesAllBtn: "Дізнатися детальніше про всі послуги →",

      vaultPageBadge: "Офіційні гарантії & 100% безпека",
      vaultPageTitle: "Інтерактивний сейф договорів, SLA та інженерних стандартів BTAB",
      vaultPageDesc: "Всі проектні документи, 180-денна технічна гарантія, передача повного коду в Git та європейські стандарти GDPR у прозорому вигляді.",
      vaultPillar1Title: "📜 Європейський SLA 2026 договір",
      vaultPillar1Desc: "Фіксовані етапи, терміни та фінансові гарантії згідно із законодавством Євросоюзу.",
      vaultPillar2Title: "🔒 100% Власність та код у Git",
      vaultPillar2Desc: "Передаємо всі вихідні файли, бази даних та історію Git без прив'язки до розробника.",
      vaultPillar3Title: "🛡️ 180 днів безкоштовної гарантії",
      vaultPillar3Desc: "Миттєве усунення будь-яких технічних нюансів після запуску сайту в роботу.",
      vaultAllBtn: "Відкрити повний сейф гарантій та SLA →",

      aboutPageBadge: "10+ років досвіду в Болгарії та ЄС",
      aboutPageTitle: "Інженерна веб-студія BTAB — швидкість, надійність та результати",
      aboutPageDesc: "Ми віримо в чистий код, відсутність цифрового баласту та суворі європейські стандарти безпеки. Штаб-квартира в Бургасі, клієнти по всій Європі.",
      aboutPhilosophyTitle: "Наша інженерна філософія",
      aboutPhil1Title: "1. Нульовий баласт (Zero Bloat)",
      aboutPhil1Desc: "Ми відмовляємося від важких шаблонів із десятками повільних плагінів. Пишемо чистий семантичний код із відкриттям до 0.5с.",
      aboutPhil2Title: "2. Архітектура на Drupal 11",
      aboutPhil2Desc: "Використовуємо провідну корпоративну платформу світу із бездоганною стійкістю до кібератак та необмеженим масштабуванням.",
      aboutPhil3Title: "3. Європейський стандарт та SLA",
      aboutPhil3Desc: "Офіційні рахунки, дотримання регламенту GDPR та юридичні гарантії дотримання дедлайнів.",
      aboutOfficeBadge: "Центральний офіс Бургас",
      aboutOfficeTitle: "Диджитал-інженерія на узбережжі Чорного моря",
      aboutOfficeDesc: "Наш головний офіс розташований у м. Бургас, ж.к. Лазур 130. Створюємо веб-системи для бізнесу в Болгарії, Великобританії, Німеччині та ЄС.",

      portfolioPageBadge: "Доведені результати",
      portfolioPageTitle: "Портфоліо реалізованих систем та сайтів із швидкістю 0.4с (PageSpeed 95–100)",
      portfolioPageDesc: "Ознайомтеся з реальними метриками, архітектурними рішеннями та результатами наших клієнтів.",
      portfolioAllBtn: "Переглянути всі кейси студії →",

      contactsPageBadge: "Прямий зв’язок з інженерами",
      contactsPageTitle: "Зв’яжіться зі студією BTAB для консультації та брифу",
      contactsPageDesc: "Центральний офіс у Бургасі, оперативний зв'язок у месенджерах або особиста зустріч. Консультація безкоштовна.",
      contactsOfficeTitle: "Офіс у Бургасі",
      contactsOfficeDesc: "м. Бургас 8000, ж.к. Лазур 130",
      contactsScheduleTitle: "Графік роботи",
      contactsScheduleDesc: "Пн – Пт: 09:00 – 18:00 (EET)",
      contactsDirectTitle: "Прямі канали",
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
      heroDesc: "Веб-студія BTAB (Бургас, Болгарія). Розробляємо сучасні сайти на Drupal 11, OpenCart та Headless архітектурах із цільовою швидкістю до 0.4с (PageSpeed 95–100), бездоганною безпекою та чистим кодом.",
      heroBtnCalc: "Розрахувати вартість →",
      heroBtnPortfolio: "Переглянути кейси",

      // Benchmark
      benchTitle: "Тест швидкості в реальному часі",
      benchLive: "Google PageSpeed: 95–100",
      benchBtabTag: "Чистий код BTAB",
      benchBtabSub: "Миттєве відкриття за 0.4с",
      benchOtherTag: "Важкі конструктори",
      benchOtherSub: "Втрата 45% відвідувачів",
      benchLcp: "Рендеринг контенту (LCP)",
      benchCls: "Зсув макета (CLS)",
      benchScore: "Індекс PageSpeed",

      // Marquee Ribbons
      marquee1: "АРХІТЕКТУРА DRUPAL 11 ✱ ШВИДКІСТЬ 0.4s ✱ GOOGLE PAGESPEED 95–100 ✱ OPENCART 4 ✱ ЧИСТИЙ КОД ✱ 6 МІСЯЦІВ ГАРАНТІЇ ✱ БОЛГАРІЯ & ЄС ✱",
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
      calcBenefit1: "Архітектурний стандарт PageSpeed 95+",
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
      service3Title: "SEO аудит та Швидкість 0.4с",
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
      vaultHint: "● Наведіть для 3D нахилу · Торкніться папки, щоб переглянути SLA договір та сертифікати",
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
      contactReassurance: "⚡ Відповідь протягом 2 годин у робочий час · Безкоштовний попередній аудит та консультація",
      contactSuccessToast: "Дякуємо! Ваша заявка успішно надіслана. Наш фахівець зв'яжеться з вами протягом 2 годин.",

      // Contact Options
      optDrupal: "Корпоративний сайт на Drupal 11",
      optShop: "Інтернет-магазин (OpenCart / Headless)",
      optLanding: "Лендінг сторінка (Landing Page)",
      optRedesign: "Редизайн та прискорення (PageSpeed 95–100)",
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
      navHome: "Главная",
      navAbout: "О студии",
      navVault: "Сейф & Гарантии",
      navServices: "Услуги",
      breadcrumbHome: "Главная",
      breadcrumbServices: "Услуги",
      breadcrumbVault: "Сейф & Гарантии",
      breadcrumbPortfolio: "Портфолио",
      breadcrumbAbout: "О студии",
      breadcrumbContacts: "Контакты",

      // Subpage Headers & Content
      servicesPageBadge: "Инженерная разработка веб-систем",
      servicesPageTitle: "Полный спектр услуг для масштабирования бизнеса в ЕС",
      servicesPageDesc: "От защищенных корпоративных порталов на Drupal 11 до высоконагруженных интернет-магазинов с целевой скоростью до 0.4с (PageSpeed 95–100) и чистым кодом.",
      servicesProcessTitle: "Наш 4-этапный инженерный процесс",
      step1Title: "01. Анализ & Архитектура",
      step1Desc: "Анализ бизнес-процессов, проектирование структуры базы данных и сайта.",
      step2Title: "02. UX/UI Проектирование",
      step2Desc: "Индивидуальный дизайн без тяжелых библиотек, адаптированный под мобильные устройства.",
      step3Title: "03. Чистый код & Скорость",
      step3Desc: "Разработка на Drupal 11 / OpenCart с целевой скоростью до 0.4с (PageSpeed 95–100) и чистым кодом.",
      step4Title: "04. Тестирование & 6м Гарантия",
      step4Desc: "Стресс-тесты, проверка безопасности, официальный договор и 6 месяцев гарантии.",
      servicesAllBtn: "Узнать подробнее обо всех услугах →",

      vaultPageBadge: "Официальные гарантии & 100% безопасность",
      vaultPageTitle: "Интерактивный сейф договоров, SLA и стандартов разработки BTAB",
      vaultPageDesc: "Все проектные документы, 180-дневная техническая гарантия, передача исходного кода в Git и стандарты GDPR.",
      vaultPillar1Title: "📜 Европейский SLA 2026 договор",
      vaultPillar1Desc: "Фиксированные этапы, сроки и финансовые гарантии по законодательству ЕС.",
      vaultPillar2Title: "🔒 100% Собственность и Git код",
      vaultPillar2Desc: "Передача исходников, базы данных и репозитория Git без скрытых лицензий.",
      vaultPillar3Title: "🛡️ 180 дней гарантийного обслуживания",
      vaultPillar3Desc: "Мгновенное устранение любых замечаний после сдачи проекта в эксплуатацию.",
      vaultAllBtn: "Открыть полный сейф гарантий и SLA →",

      aboutPageBadge: "10+ лет опыта в Болгарии и ЕС",
      aboutPageTitle: "Инженерная веб-студия BTAB — скорость, надежность и результат",
      aboutPageDesc: "Мы верим в чистый код, отсутствие лишнего балласта и строгие европейские стандарты качества. Офис в Бургасе, клиенты по всей Европе.",
      aboutPhilosophyTitle: "Наша инженерная философия",
      aboutPhil1Title: "1. Нулевой балласт (Zero Bloat)",
      aboutPhil1Desc: "Отказываемся от тяжелых шаблонов с десятками плагинов. Пишем чистый семантический код для загрузки быстрее 0.5с.",
      aboutPhil2Title: "2. Архитектура Drupal 11",
      aboutPhil2Desc: "Используем ведущую корпоративную платформу мира с высочайшей защитой от взломов и масштабируемостью.",
      aboutPhil3Title: "3. Европейский стандарт и SLA",
      aboutPhil3Desc: "Официальный договор, соблюдение GDPR и жесткая фиксация сроков и гарантий.",
      aboutOfficeBadge: "Центральный офис Бургас",
      aboutOfficeTitle: "Диджитал-инженерия на побережье Черного моря",
      aboutOfficeDesc: "Наш главный офис расположен в г. Бургас, ж.к. Лазур 130. Создаем решения для клиентов из Болгарии, Великобритании, Германии и ЕС.",

      portfolioPageBadge: "Доказанные результаты",
      portfolioPageTitle: "Портфолио реализованных систем и сайтов со скоростью 0.4с (PageSpeed 95–100)",
      portfolioPageDesc: "Ознакомьтесь с реальными метриками, архитектурой и результатами, внедренными для клиентов.",
      portfolioAllBtn: "Смотреть все кейсы студии →",

      contactsPageBadge: "Прямая связь с инженерами",
      contactsPageTitle: "Свяжитесь со студией BTAB для консультации и брифа",
      contactsPageDesc: "Центральный офис в Бургасе, оперативная связь в мессенджерах или личная встреча. Консультация бесплатна.",
      contactsOfficeTitle: "Офис в Бургасе",
      contactsOfficeDesc: "г. Бургас 8000, ж.к. Лазур 130",
      contactsScheduleTitle: "График работы",
      contactsScheduleDesc: "Пн – Пт: 09:00 – 18:00 (EET)",
      contactsDirectTitle: "Прямые каналы",
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
      heroDesc: "Веб-студия BTAB (Бургас, Болгария). Разрабатываем надежные сайты на Drupal 11, OpenCart и современных CMS с целевой скоростью до 0.4с (PageSpeed 95–100) и чистым кодом.",
      heroBtnCalc: "Рассчитать стоимость →",
      heroBtnPortfolio: "Посмотреть работы",

      // Benchmark
      benchTitle: "Тест скорости в реальном времени",
      benchLive: "Google PageSpeed: 95–100",
      benchBtabTag: "Чистый код BTAB",
      benchBtabSub: "Молниеносные 0.4 сек",
      benchOtherTag: "Обычные шаблоны",
      benchOtherSub: "Потеря 45% клиентов",
      benchLcp: "Отрисовка контента (LCP)",
      benchCls: "Сдвиг макета (CLS)",
      benchScore: "Индекс PageSpeed",

      // Marquee Ribbons
      marquee1: "АРХИТЕКТУРА DRUPAL 11 ✱ СКОРОСТЬ 0.4s ✱ GOOGLE PAGESPEED 95–100 ✱ OPENCART 4 ✱ ЧИСТЫЙ КОД ✱ 6 МЕСЯЦЕВ ГАРАНТИИ ✱ БОЛГАРИЯ & ЕС ✱",
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
      calcBenefit1: "Архитектурный стандарт PageSpeed 95+",
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
      service3Title: "SEO аудит & Скорость 0.4с",
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
      vaultHint: "● Наведите для 3D наклона · Нажмите на папку, чтобы открыть SLA договор и сертификаты",
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
      contactReassurance: "⚡ Ответ в течение 2 часов в рабочее время · Бесплатный предварительный аудит и консультация",
      contactSuccessToast: "Спасибо! Сообщение успешно отправлено. Мы свяжемся с вами в течение 2 часов.",

      // Contact Options
      optDrupal: "Корпоративный сайт на Drupal 11",
      optShop: "Интернет-магазин (OpenCart / Headless)",
      optLanding: "Лендинг пейдж (Landing Page)",
      optRedesign: "Редизайн и ускорение (PageSpeed 95–100)",
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
    },
    {
      id: "yachting-burgas",
      category: "services",
      img: "assets/images/portfolio/yachting-burgas.jpg",
      year: "Burgas & Sozopol",
      cms: "Drupal 11 / Twig 3 / Booking Engine",
      titles: {
        BG: "Black Sea Yachting — Чартер и круизи",
        EN: "Black Sea Yachting — Luxury Charters",
        UA: "Black Sea Yachting — Оренда яхт та круїзи",
        RU: "Black Sea Yachting — Аренда яхт и круизы"
      },
      tags: {
        BG: "Резервации",
        EN: "Booking Engine",
        UA: "Бронювання",
        RU: "Бронирование"
      },
      descs: {
        BG: "Система за онлайн резервации на ветроходни яхти и лодки по Черноморието с интерактивен календар за наличност и депозити.",
        EN: "Online charter booking platform for Black Sea yachts featuring interactive availability calendar and instant deposit checkout.",
        UA: "Платформа онлайн-бронювання яхт та катерів із інтерактивним календарем зайнятості та прийомом авансових платежів.",
        RU: "Платформа онлайн-бронирования яхт и катеров с интерактивным календарем доступности и онлайн-предоплатой."
      },
      metrics: {
        BG: "+54% директни резервации без посредници",
        EN: "+54% direct booking increase without OTAs",
        UA: "+54% прямих бронювань без посередників",
        RU: "+54% прямых бронирований без посредников"
      }
    },
    {
      id: "nordic-timber",
      category: "shop",
      img: "assets/images/portfolio/nordic-timber.jpg",
      year: "EU / Germany",
      cms: "OpenCart 4 / B2B Export Portal",
      titles: {
        BG: "Nordic Timber EU — B2B Експорт на дървесина",
        EN: "Nordic Timber EU — B2B Wood Export",
        UA: "Nordic Timber EU — B2B Експорт пиломатеріалів",
        RU: "Nordic Timber EU — B2B Экспорт древесины"
      },
      tags: {
        BG: "B2B Платформа",
        EN: "B2B E-Commerce",
        UA: "B2B Платформа",
        RU: "B2B Платформа"
      },
      descs: {
        BG: "Оптови онлайн каталог с динамично калкулиране на логистични разходи и ДДС по европейските директиви за Германия и Скандинавия.",
        EN: "Wholesale B2B export catalog featuring automated EU VAT calculation, dynamic freight quoting, and multi-currency invoicing.",
        UA: "Оптовий експортний каталог із динамічним розрахунком логістики, ПДВ за директивами ЄС та мультивалютними рахунками.",
        RU: "Оптовый экспортный каталог с автоматическим расчетом логистики, европейского НДС и мультивалютными инвойсами."
      },
      metrics: {
        BG: "€1.2M оборот през първите 8 месеца",
        EN: "€1.2M B2B transaction volume in 8 months",
        UA: "€1.2M B2B оборот за перші 8 місяців",
        RU: "€1.2M B2B оборот за первые 8 месяцев"
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
    let filtered = filter === 'all' 
      ? portfolioItems 
      : portfolioItems.filter(item => item.category === filter);

    // Support data-limit attribute (e.g. data-limit="6" on index.html)
    const limit = parseInt(grid.dataset.limit, 10);
    if (!isNaN(limit) && limit > 0 && filter === 'all') {
      filtered = filtered.slice(0, limit);
    }

    filtered.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'portfolio-card';
      card.dataset.id = item.id;

      const issueNum = String(index + 1).padStart(2, '0');
      const title = item.titles[currentLang] || item.titles.EN;
      const tag = item.tags[currentLang] || item.tags.EN;
      const desc = item.descs[currentLang] || item.descs.EN;
      const metric = item.metrics[currentLang] || item.metrics.EN;

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
          <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.22); border-radius: 8px; padding: 6px 12px; margin-bottom: 14px; font-size: 0.82rem; color: var(--accent-emerald); font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
            <span>📈</span> <span>${metric}</span>
          </div>
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

    // 6. Core Web Vitals 95–100
    "speed-audit": {
      icon: "⚡",
      badge: {
        BG: "PageSpeed 95–100 Стандарт",
        EN: "PageSpeed 95–100 Standard",
        UA: "Стандарт PageSpeed 95–100",
        RU: "Стандарт PageSpeed 95–100"
      },
      titles: {
        BG: "Регламент за максимална скорост и Google Core Web Vitals",
        EN: "Google Core Web Vitals 95–100 Performance Specification",
        UA: "Регламент максимальної швидкості та Google Core Web Vitals",
        RU: "Регламент максимальной скорости и Google Core Web Vitals"
      },
      tag: "Продуктивність",
      sub: "Миттєве відкриття за 0.4 секунди для перших місць у Google",
      intro: {
        BG: "Скоростта на зареждане е ключов фактор за класиране в Google и задържане на потребителите. Ние оптимизираме всеки байт, скрипт и изображение за целева оценка 95–100 в Google PageSpeed.",
        EN: "Loading speed directly dictates Google organic search rankings and checkout conversions. We obsessively profile every byte, script, and image to target scores of 95–100 in PageSpeed Insights.",
        UA: "Швидкість завантаження є ключовим фактором для виходу в ТОП Google та високої конверсії. Ми оптимізуємо кожен байт коду, скрипти та зображення для цільової оцінки 95–100 у Google PageSpeed.",
        RU: "Скорость загрузки напрямую влияет на позиции в Google и конверсию. Мы оптимизируем каждый байт, скрипты и медиафайлы для целевой оценки 95–100 в Google PageSpeed."
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
  ,

    // 8. E-Commerce Core & Storefront
    "ecom-core": {
      icon: "🛒",
      badge: {
        UA: "Архітектура ядра інтернет-магазину",
        BG: "Архитектура на ядрото на онлайн магазина",
        EN: "Storefront & Core Engine Architecture",
        RU: "Архитектура ядра интернет-магазина"
      },
      titles: {
        UA: "Ядро інтернет-магазину: Вітрина, каталог, швидкий Checkout та платформи",
        BG: "Ядро на онлайн магазина: Витрина, каталог, бърз Checkout и платформи",
        EN: "E-Commerce Core: High-Conversion Storefront, Instant Checkout & CMS",
        RU: "Ядро интернет-магазина: Витрина, каталог, быстрый Checkout и платформы"
      },
      tag: "E-Commerce Ядро",
      sub: "Каталог · Вітрина · One-Step Checkout · CMS рушії",
      intro: {
        UA: "Ядро інтернет-магазину — це фундамент усієї системи електронної комерції, який безпосередньо впливає на конверсію відвідувачів у реальних покупців. Ми проектуємо сучасні, надшвидкі вітрини зі швидкістю завантаження менше 0.4 секунди та створюємо безшовний шлях клієнта від знайомства з каталогом до успішної оплати.",
        BG: "Ядрото на онлайн магазина е фундамента на дигиталната търговия, който пряко определя конверсията на посетителите в клиенти. Ние проектираме ултрабързи витрини със скорост под 0.4 сек. и интуитивен път на клиента от каталога до завършване на поръчката.",
        EN: "The storefront and core engine form the operational foundation of modern e-commerce. We engineer sub-0.4s fast, highly responsive storefronts and friction-free user journeys from product discovery to instant one-step checkout.",
        RU: "Ядро интернет-магазина — фундамент электронной коммерции, напрямую определяющий конверсию посетителей в покупателей. Мы проектируем сверхбыстрые витрины со скоростью загрузки до 0.4 секунды и бесшовный путь клиента от каталога до оплаты."
      },
      clauses: {
        UA: [
          { title: "Інтерактивна вітрина та миттєвий каталог", desc: "Адаптивний Mobile-First / PWA інтерфейс, розумний AJAX-пошук з автодоповненням і виправленням помилок, фасетні фільтри за параметрами, брендами та ціною без перезавантаження сторінки, а також високонверсійні картки товарів з 360°/відео-оглядами, вибором модифікацій і розрахунком доставки." },
          { title: "Швидкісний кошик і One-Step Checkout", desc: "Односторінкове оформлення замовлення без зайвих полів, автоматичне підтягування міст і відділень пошти за геолокацією, покупка в 1 клік, тригери збереження покинутих кошиків та інтеграція промокодів, що знижує показник покинутих кошиків на 35–45%." },
          { title: "Особистий кабінет покупця (Self-Service)", desc: "Зручний кабінет клієнта: відстеження статусу замовлення в реальному часі, історія покупок з можливістю повторити замовлення в 1 клік, збережені адреси доставки, списки бажаного (Wishlist) зі сповіщеннями про зниження цін та накопичувальний баланс бонусів." },
          { title: "Вибір та налаштування платформи / рушія", desc: "Експертне впровадження платформ під завдання бізнесу: OpenCart, Shopify, WooCommerce, Magento (Adobe Commerce), інтеграція з Horoshop та Prom.ua, або індивідуальна високопродуктивна Headless розробка на Drupal 11 + Next.js." }
        ],
        BG: [
          { title: "Интерактивна витрина и каталог на продуктите", desc: "Mobile-First / PWA интерфейс, интелигентно AJAX търсене с подсказки, фасетни филтри по характеристики и конвертиращи продуктови карти с варианти и 360° преглед." },
          { title: "Оптимизирана количка и One-Step Checkout", desc: "Поръчка на една страница без излишни полета, автоматично попълване на данни, бърза поръчка с 1 клик и автоматични тригери за изоставени колички." },
          { title: "Клиентски профил (Self-Service)", desc: "Проследяване на поръчки в реално време, история на покупките с повторна поръчка с 1 клик, запазени адреси, списък с любими продукти (Wishlist) и бонус точки." },
          { title: "Платформи и технологии за онлайн магазини", desc: "Професионално внедряване на OpenCart, Shopify, WooCommerce, Magento (Adobe Commerce), интеграции с пазарни платформи или кастъм Headless разработки с Drupal 11." }
        ],
        EN: [
          { title: "Interactive Storefront & High-Speed Catalogue", desc: "Mobile-First / PWA responsive UI, faceted attribute filtering, instant AJAX predictive search, and high-converting product detail pages with variant matrices and 360° media." },
          { title: "Frictionless One-Step Checkout & Cart", desc: "Streamlined single-page checkout, geolocation autofill, 1-click buy, and automated abandoned cart recovery sequences lowering abandonment rates by up to 45%." },
          { title: "Client Account & Self-Service Portal", desc: "Real-time order tracking, 1-click re-ordering, saved shipping addresses, Wishlist price-drop alerts, and integrated customer loyalty reward wallets." },
          { title: "Platform & CMS Engine Architecture", desc: "Engineered on OpenCart, Shopify, WooCommerce, Magento (Adobe Commerce), marketplace connectors (Horoshop, Prom), or decoupled Headless Drupal 11 + Next.js." }
        ],
        RU: [
          { title: "Интерактивная витрина и каталог товаров", desc: "Mobile-First интерфейс, фасетные фильтры без перезагрузки, умный живой AJAX-поиск с подсказками и карточки товаров с выбором модификаций и видео." },
          { title: "Оптимизированная корзина и One-Step Checkout", desc: "Одностраничное оформление заказа без лишних полей, автозаполнение адресов по геолокации, покупка в 1 клик и триггеры возврата брошенных корзин." },
          { title: "Личный кабинет покупателя (Self-Service)", desc: "Отслеживание статусов заказов в реальном времени, повтор заказа в один клик, адресная книга, список избранного (Wishlist) и бонусный баланс." },
          { title: "Платформы и движки интернет-магазинов", desc: "Внедрение и оптимизация: OpenCart, Shopify, WooCommerce, Magento (Adobe Commerce), интеграция с Prom.ua и Horoshop или индивидуальная разработка на Drupal 11." }
        ]
      },
      actionBtn: {
        UA: "Замовити ядро інтернет-магазину →",
        BG: "Поръчайте ядро за онлайн магазин →",
        EN: "Order E-Commerce Core Development →",
        RU: "Заказать разработку ядра магазина →"
      }
    },

    // 9. E-Commerce Payments & Acquiring
    "ecom-payments": {
      icon: "💳",
      badge: {
        UA: "Платіжна інфраструктура та еквайринг",
        BG: "Платежни шлюзове и еквайринг",
        EN: "Payment Gateways & Transaction Security",
        RU: "Платежные шлюзы и эквайринг"
      },
      titles: {
        UA: "Оплата й фінанси: Міжнародний еквайринг, фіскалізація (ПРРО) та антифрод",
        BG: "Плащания и финанси: Международен еквайринг, фискализация и антифрод",
        EN: "Payments & Financial Operations: Gateways, Fiscalization & Antifraud",
        RU: "Оплата и финансы: Международный эквайринг, фискализация (ПРРО) и антифрод"
      },
      tag: "Платежі та фінанси",
      sub: "Stripe · Borica · Monobank · Apple/Google Pay · ПРРО",
      intro: {
        UA: "Безвідмовна та безпечна платіжна інфраструктура гарантує прийом оплат від покупців з будь-якої точки світу в національних та міжнародних валютах (EUR, USD, BGN, UAH). Ми забезпечуємо пряму інтеграцію з банками, сервісами фіскалізації та інтелектуальним захистом від шахрайства.",
        BG: "Надеждната и сигурна платежна инфраструктура гарантира приемане на плащания от всяка точка на света във валути EUR, USD, BGN. Интегрираме директно банки, модерни платежни шлюзове, фискализация и защита срещу измами.",
        EN: "A robust, bulletproof payment architecture enables seamless transaction settlement from global shoppers in multiple currencies. We integrate Tier-1 acquirers, automated fiscalization, and real-time fraud defense.",
        RU: "Безотказная платежная инфраструктура гарантирует прием платежей со всего мира во всех популярных валютах. Мы настраиваем интеграцию с банками, сервисами фискализации и защитой от мошенничества."
      },
      clauses: {
        UA: [
          { title: "Платіжні шлюзи та швидкий еквайринг", desc: "Пряме підключення провідних провайдерів: Stripe, PayPal, Borica (Болгарія/ЄС), Revolut Pay, Monobank (Mono Pay, покупка частинами), LiqPay, WayForPay з підтримкою Apple Pay та Google Pay в 1 клік." },
          { title: "Автоматична фіскалізація та програмні РРО (ПРРО)", desc: "Миттєва генерація та фіскалізація електронних чеків (Checkbox, Вчасно.Каса, Cashalot, інтеграція з НАП Болгарії / шлюзами ЄС) з автодоставкою чека на email та в SMS." },
          { title: "Інтелектуальний антифрод і 3D Secure 2.0", desc: "Багаторівневий захист від шахрайських операцій, чарджбеків та крадіжки даних з відповідністю стандарту PCI DSS Level 1, оцінкою ризику транзакцій та перевіркою IP/BIN карти." },
          { title: "Автоматизовані повернення коштів (Refunds & Voids)", desc: "Миттєве повне або часткове повернення грошей на картку покупця безпосередньо з панелі замовлень без ручного входу в банківський кабінет." }
        ],
        BG: [
          { title: "Платежни шлюзове и онлайн еквайринг", desc: "Интеграция на водещи системи: Stripe, PayPal, Борика (ЕС), Revolut Pay, Monobank, с поддръжка на Apple Pay и Google Pay с едно докосване." },
          { title: "Автоматична фискализация и касови бележки", desc: "Издаване на електронни касови бележки (НАП съвместимост, Checkbox) с автоматично изпращане по имейл и SMS." },
          { title: "Антифрод защита и 3D Secure 2.0", desc: "Защита срещу измами и chargeback претенции съгласно PCI DSS Level 1 с интелигентен анализ на риска." },
          { title: "Автоматизирано възстановяване на средства (Refunds)", desc: "Бързо пълно или частично връщане на суми към клиентската карта директно от административния панел." }
        ],
        EN: [
          { title: "Payment Gateways & Direct Acquiring", desc: "Turnkey checkout integrations for Stripe, PayPal, Borica (EU), Revolut Pay, Monobank, LiqPay, WayForPay with native 1-tap Apple Pay and Google Pay." },
          { title: "Automated Fiscalization & Cloud Receipts", desc: "Automated generation and tax authority registry synchronization (Checkbox, EU Fiscal Gateways) with instant SMS and email receipt dispatch." },
          { title: "Intelligent Antifraud & 3D Secure 2.0", desc: "Multi-layered defense against chargebacks and fraudulent cards backed by PCI DSS Level 1 compliance, IP/BIN validation, and real-time risk scoring." },
          { title: "Automated Refunds & Reversals", desc: "One-click partial or full refunds triggered directly from the store order management dashboard without manual banking logins." }
        ],
        RU: [
          { title: "Платежные шлюзы и быстрый эквайринг", desc: "Подключение ведущих провайдеров: Stripe, PayPal, Borica (ЕС), Revolut Pay, Monobank (Mono Pay, покупка частями), LiqPay, WayForPay с поддержкой Apple Pay и Google Pay." },
          { title: "Автоматическая фискализация (ПРРО)", desc: "Мгновенное формирование фискальных чеков (Checkbox, Вчасно.Касса, Cashalot, налоговые шлюзы ЕС) с отправкой на email и по SMS." },
          { title: "Антифрод защита и 3D Secure 2.0", desc: "Защита от мошеннических транзакций и чарджбеков по стандарту PCI DSS Level 1 с анализом риска и IP/BIN проверкой." },
          { title: "Автоматические возвраты средств (Refunds)", desc: "Быстрый полный или частичный возврат денег на карту покупателя напрямую из панели управления магазином." }
        ]
      },
      actionBtn: {
        UA: "Підключити платіжні системи →",
        BG: "Свържете платежни системи →",
        EN: "Integrate Payment Gateways →",
        RU: "Подключить платежные системы →"
      }
    },

    // 10. E-Commerce Backend & Operations
    "ecom-backend": {
      icon: "⚙️",
      badge: {
        UA: "Операційний бекенд, склад та ERP",
        BG: "Бекенд операции и ERP синхронизация",
        EN: "Backend Operations, WMS & ERP Sync",
        RU: "Операционный бэкенд, склад и ERP"
      },
      titles: {
        UA: "Бекенд і операції: Управління товарами (PIM), облік замовлень (OMS) та ERP",
        BG: "Бекенд и операции: Управление на продукти (PIM), поръчки (OMS) и ERP",
        EN: "Backend & Operations: PIM Catalogue, OMS Processing & ERP Sync",
        RU: "Бэкенд и операции: Управление товарами (PIM), учет заказов (OMS) и ERP"
      },
      tag: "Бекенд та автоматизація",
      sub: "PIM · WMS склад · ERP / CRM облік · Дропшипінг",
      intro: {
        UA: "Ефективний бекенд автоматизує щоденну рутину інтернет-магазину: синхронізує залишки з фізичними складами, оновлює ціни в реальному часі, обробляє сотні замовлень за секунди та повністю виключає людські помилки менеджерів.",
        BG: "Ефективният бекенд автоматизира рутината: синхронизира наличностите със складовете, обновява цените в реално време, обработва стотици поръчки и елиминира грешките на персонала.",
        EN: "A high-performance backend streamlines e-commerce operations: real-time stock sync with physical warehouses, automated order dispatch, and deep two-way ERP/CRM integration.",
        RU: "Эффективный бэкенд автоматизирует рутину: синхронизирует остатки со складами, обновляет цены в реальном времени, обрабатывает заказы и исключает человеческие ошибки."
      },
      clauses: {
        UA: [
          { title: "Управління товарами, цінами та залишками (PIM & WMS)", desc: "Централізована база десятків тисяч артикулів (SKU), облік залишків по кількох складах у реальному часі, гнучка матриця цін (роздріб, опт, дилери, валюти EUR/USD/UAH) та автоматичне списання залишків." },
          { title: "Автоматизована обробка замовлень (OMS)", desc: "Маршрутизація замовлень за статусами (Новий → В обробці → Оплачено → Відправлено), авто-бронювання товарів на складі, поділ замовлення на кілька відправлень та автоматичні сповіщення клієнта." },
          { title: "Двостороння інтеграція з ERP, CRM та 1С / BAS", desc: "Безперервний API-обмін у реальному часі з BAS / 1C, Бітрікс24, KeyCRM, SalesDrive, SAP, Microsoft Dynamics: автоматичний імпорт номенклатури, синхронізація залишків і передача замовлень." },
          { title: "Постачальники та дропшипінг-автоматизація", desc: "Автоматичний парсинг і синхронізація прайсів постачальників через XML, YML, CSV, JSON та REST API, автоматичний перерахунок націнки за правилами та авто-маршрутизація відправлень партнерам." }
        ],
        BG: [
          { title: "Управление на продукти, цени и наличности (PIM & WMS)", desc: "Централизирана база за десетки хиляди артикули (SKU), складов отчет в реално време, ценови нива (дребно, едро, партньори) и автоматично отписване на стока." },
          { title: "Автоматизирана обработка на поръчки (OMS)", desc: "Маршрутизация по статуси, автоматично резервиране на наличности, разпределяне по складове и моментални нотификации към клиенти." },
          { title: "Интеграция със счетоводство и CRM (ERP / BAS)", desc: "Двупосочен API обмен в реално време с 1C / BAS, Bitrix24, ERP системи, KeyCRM: синхронизация на остатъци, цени и фактури." },
          { title: "Интеграция с доставчици и дропшипинг", desc: "Автоматичен импорт и обновяване на ценови листи през XML, CSV, API, правила за надценки и директна препратка на товарителници." }
        ],
        EN: [
          { title: "PIM Catalogue & Real-Time Warehouse (WMS)", desc: "Centralized management of 50,000+ SKUs across multiple fulfillment hubs, live inventory deduction, tiered wholesale pricing, and automated out-of-stock masking." },
          { title: "Order Management System (OMS Automation)", desc: "Status-driven order lifecycles, automated warehouse allocation, invoice generation, split shipments, and real-time tracking webhook triggers." },
          { title: "Two-Way ERP & CRM Synchronization", desc: "Bi-directional REST API syncing with BAS / 1C, Bitrix24, KeyCRM, SAP, Microsoft Dynamics: real-time stock levels, ledger sync, customer profiles, and invoices." },
          { title: "Supplier Data Pipelines & Dropshipping", desc: "Automated supplier catalog ingestion (XML, YML, CSV, JSON APIs), configurable price markups, and direct dropshipping fulfillment pipelines." }
        ],
        RU: [
          { title: "Управление товарами, ценами и остатками (PIM & WMS)", desc: "Централизованная база десятков тысяч SKU, учет остатков по нескольким складам в реальном времени, гибкая матрица цен (розница, опт, дилеры) и авто-списание." },
          { title: "Автоматизированная обработка заказов (OMS)", desc: "Маршрутизация заказов по статусам, авто-бронирование товаров на складе, разделение на несколько отправлений и уведомления клиентов." },
          { title: "Интеграция с учетом: ERP, CRM и 1С / BAS", desc: "Непрерывный обмен данными по API с BAS / 1C, Битрикс24, KeyCRM, SalesDrive, SAP: синхронизация остатков, цен, клиентов и счетов." },
          { title: "Поставщики и дропшиппинг-автоматизация", desc: "Автоматический парсинг прайсов поставщиков (XML, YML, CSV, JSON, API), расчет наценки по формулам и прямая передача заказов партнерам." }
        ]
      },
      actionBtn: {
        UA: "Налаштувати автоматизацію бекенду →",
        BG: "Настройте бекенд автоматизация →",
        EN: "Configure Backend Automation →",
        RU: "Настроить автоматизацию бэкенда →"
      }
    },

    // 11. E-Commerce Shipping & Logistics
    "ecom-delivery": {
      icon: "🚚",
      badge: {
        UA: "Логістична інфраструктура та кур'єри",
        BG: "Логистика и куриерски модули",
        EN: "Shipping & Courier Logistics Architecture",
        RU: "Логистическая инфраструктура и курьеры"
      },
      titles: {
        UA: "Доставка й логістика: Інтеграція з перевізниками, розрахунок тарифів та ТТН",
        BG: "Доставка и логистика: Интеграция с куриери, изчисляване на цени и товарителници",
        EN: "Shipping & Logistics: Courier APIs, Dynamic Rates, Tracking & Waybills",
        RU: "Доставка и логистика: Интеграция с перевозчиками, расчет тарифов и ТТН"
      },
      tag: "Логістичний модуль",
      sub: "Speedy · Econt · Нова Пошта · Калькулятор · ТТН",
      intro: {
        UA: "Швидка та прозора доставка — ключовий фактор повторних покупок. Ми підключаємо провідні кур'єрські служби Болгарії, ЄС та України, автоматизуємо вибір відділень та поштоматів на карті, розрахунок вартості та масовий друк накладних.",
        BG: "Бързата и прозрачна доставка е ключов фактор за лоялността на клиентите. Интегрираме водещите куриерски служби в България и ЕС, автоматизираме избора на офиси и генерацията на товарителници.",
        EN: "Frictionless shipping logistics drive recurring purchases. We integrate premier European and national courier networks with live branch selectors, real-time rate calculators, and one-click waybill generation.",
        RU: "Быстрая и прозрачная доставка — ключевой фактор удовлетворенности покупателей. Мы подключаем ведущие службы доставки Болгарии, ЕС и Украины, автоматизируя выбор отделений и печать накладных."
      },
      clauses: {
        UA: [
          { title: "Інтеграція з кур'єрськими службами та перевізниками", desc: "Офіційні API-модулі для Speedy, Econt, DHL, DPD, UPS (ЄС), а також Нова Пошта та Укрпошта: автоматичний вибір відділень, поштоматів або кур'єрської адресної доставки на інтерактивній карті." },
          { title: "Динамічний розрахунок вартості та термінів доставки", desc: "Миттєвий розрахунок тарифу безпосередньо в кошику за вагою, габаритами (об'ємна вага) та відстанню, а також налаштування безкоштовної доставки від певної суми замовлення." },
          { title: "Створення та масовий друк накладних (ТТН / Waybills)", desc: "Генерація накладних в 1 клік з панелі адміністрування магазину, друк термостікерів і маркувань зі штрихкодами, замовлення кур'єра для забору партій відправлень зі складу." },
          { title: "Онлайн-трекінг та SMS/Viber/TG сповіщення", desc: "Автоматичне оновлення статусів посилок у кабінеті клієнта, інтерактивний віджет відстеження та автоматична відправка номерів ТТН з посиланнями на трекінг." }
        ],
        BG: [
          { title: "Интеграция с куриерски служби в България и ЕС", desc: "Пълна интеграция със Speedy, Econt, DHL, DPD, UPS: избор на офиси, автомати и доставка до адрес през интерактивна карта." },
          { title: "Динамично изчисляване на такси и срокове", desc: "Точен калкулатор за доставка според тегло, обем и локация с правила за безплатна доставка над определена сума." },
          { title: "Генериране и печат на товарителници (Waybills)", desc: "Създаване на товарителница с 1 клик от административния панел, масов печат на етикети с баркод и заявка за куриер." },
          { title: "Проследяване на пратки в реално време", desc: "Автоматични нотификации със статус на пратката и линк за проследяване през SMS и Viber/Telegram." }
        ],
        EN: [
          { title: "Carrier API Integrations (EU & Global)", desc: "Official API connectors for Speedy, Econt, DHL, DPD, UPS, Nova Poshta: interactive branch & automated locker pickers directly in checkout." },
          { title: "Dynamic Rate Engines & Geolocation Shipping", desc: "Precise volumetric weight calculations, zone-based rate matrices, and rule-driven free delivery thresholds displayed transparently in cart." },
          { title: "Batch Waybill Creation & Barcode Label Printing", desc: "Generate official courier shipping manifests and barcode thermal stickers in one click, plus automated courier pickup dispatching." },
          { title: "Live Parcel Tracking & Milestone Notifications", desc: "Webhook-driven shipping status synchronization, branded tracking portals, and automatic SMS/Telegram/email status broadcasts." }
        ],
        RU: [
          { title: "Интеграция с курьерскими службами и перевозчиками", desc: "Официальные API для Speedy, Econt, DHL, DPD, UPS (ЕС), Новая Почта: выбор отделений, почтоматов и курьерской доставки на карте." },
          { title: "Динамический расчет стоимости и сроков доставки", desc: "Точный расчет тарифа в корзине по весу, объему и расстоянию, а также бесплатная доставка от суммы заказа." },
          { title: "Создание и печать накладных (ТТН / Waybills)", desc: "Генерация накладных в 1 клик из панели магазина, массовая печать термоэтикеток со штрихкодами и вызов курьера." },
          { title: "Онлайн-трекинг и SMS/Viber уведомления", desc: "Автоматическое обновление статусов посылок в кабинете клиента и отправка номеров ТТН со ссылками на отслеживание." }
        ]
      },
      actionBtn: {
        UA: "Підключити модулі доставки →",
        BG: "Свържете модули за доставка →",
        EN: "Integrate Logistics Modules →",
        RU: "Подключить модули доставки →"
      }
    },

    // 12. E-Commerce Marketing & Sales
    "ecom-marketing": {
      icon: "📈",
      badge: {
        UA: "Трафік, конверсія та маркетплейси",
        BG: "Маркетинг, пазари и аналитика",
        EN: "Traffic Acquisition, Marketplaces & Analytics",
        RU: "Трафик, конверсия и маркетплейсы"
      },
      titles: {
        UA: "Маркетинг і продажі: SEO, Google Merchant, маркетплейси та сквозна аналітика",
        BG: "Маркетинг и продажби: SEO, Google Merchant, маркетплейси и уеб аналитика",
        EN: "Marketing & Sales: SEO, Google Shopping Feeds, Marketplaces & GA4",
        RU: "Маркетинг и продажи: SEO, Google Merchant, маркетплейсы и сквозная аналитика"
      },
      tag: "Маркетинг та продажі",
      sub: "SEO · Google Shopping · Маркетплейси · CRM · GA4",
      intro: {
        UA: "Запуск онлайн-магазину — це лише перший крок. Щоб отримувати системний прибуток, потрібні автоматизовані канали залучення клієнтів: вивантаження на маркетплейси, реклама в Google Shopping, email-маркетинг та точна веб-аналітика.",
        BG: "Стартирането на сайта е само първата стъпка. За постоянен ръст са нужни автоматизирани канали: износ към големи маркетплейси, реклама в Google Shopping, ремаркетинг и детайлна уеб аналитика.",
        EN: "Building a storefront is only stage one. To scale revenue predictably, we build multi-channel sales pipelines: synchronized marketplace feeds, automated Google Shopping campaigns, retention CRM, and GA4 tracking.",
        RU: "Запуск онлайн-магазина — только первый шаг. Для системной прибыли необходимы автоматизированные каналы привлечения: выгрузка на маркетплейсы, реклама в Google Shopping, CRM и сквозная аналитика."
      },
      clauses: {
        UA: [
          { title: "Технічне SEO та Google Merchant Center", desc: "Семантична мікророзмітка Schema.org (Product, Offer, Reviews), автоматичні автооновлювані XML/RSS фіди для Google Shopping / Performance Max та генерація метатегів фільтрів і категорій." },
          { title: "Інтеграція з глобальними та локальними маркетплейсами", desc: "Автоматична вивантаження товарів та двостороння синхронізація залишків і цін з Amazon, eMAG, Rozetka, Prom.ua, OLX та майданчиками перевізників (Econt/Speedy Bazar)." },
          { title: "CRM-маркетинг, розсилки та програми лояльності", desc: "Автоматичні ланцюжки email / SMS / push-сповіщень (покинуті кошики, вітальні серії, реактивація клієнтів), накопичувальні бонусні програми та гнучкий генератор промокодів." },
          { title: "Сквозна аналітика: GA4 Ecommerce, Meta Pixel & ROI", desc: "Повне налаштування подій електронної комерції GA4 (view_item, add_to_cart, purchase), Meta Conversions API (CAPI), когортний аналіз та точний розрахунок вартості залучення клієнта (CAC/ROAS)." }
        ],
        BG: [
          { title: "Техническо SEO и Google Merchant Center", desc: "Schema.org микроданни (Product, Offer), автоматични фийдове за Google Shopping и автоматизирани мета-тагове за филтри и категории." },
          { title: "Интеграция с маркетплейси (Amazon, eMAG)", desc: "Автоматичен експорт на продукти и синхронизация на цени и наличности с Amazon, eMAG, OLX и каталозите на куриерите (Econt/Speedy Bazar)." },
          { title: "CRM маркетинг и програми за лоялност", desc: "Автоматични съобщения за изоставени колички, персонализирани промокодове и имейл/SMS кампании за задържане на клиенти." },
          { title: "Сквозна уеб аналитика (GA4 & Meta Pixel)", desc: "Настройка на Enhanced Ecommerce събития, Meta Conversions API (CAPI), измерване на ROI и стойност на придобиване на клиент (CAC)." }
        ],
        EN: [
          { title: "Technical E-Commerce SEO & Google Merchant Feeds", desc: "Schema.org structured data (Product, Offer, AggregateRating), automated dynamic XML feeds for Google Shopping, and automated template-based SEO meta tags." },
          { title: "Marketplace Syndication (Amazon, eMAG, Global)", desc: "Two-way inventory and order sync across Amazon, eMAG, eBay, local marketplace catalogs (Econt/Speedy Bazar), expanding your digital reach." },
          { title: "Automated CRM Retention & Loyalty Engines", desc: "Event-triggered email/SMS/push sequences (abandoned cart, post-purchase win-backs), tiered customer reward wallets, and dynamic coupon rules." },
          { title: "End-to-End Analytics (GA4, Meta CAPI & ROAS)", desc: "Full Enhanced Ecommerce funnel implementation (view_item, add_to_cart, purchase), Meta Server-Side Conversions API, and customer acquisition cost (CAC) tracking." }
        ],
        RU: [
          { title: "Техническое SEO и Google Merchant Center", desc: "Семантическая разметка Schema.org (Product, Offer), автообновляемые XML-фиды для Google Shopping и автогенерация метатегов для фильтров." },
          { title: "Интеграция с маркетплейсами (Amazon, eMAG, Prom)", desc: "Выгрузка товаров и двусторонняя синхронизация остатков и цен с Amazon, eMAG, Rozetka, Prom.ua, OLX и витринами курьеров (Econt/Speedy Bazar)." },
          { title: "CRM-маркетинг, рассылки и программы лояльности", desc: "Триггерные email / SMS рассылки (брошенные корзины, реактивация), накопительные скидки и генератор персональных промокодов." },
          { title: "Сквозная аналитика: GA4 Ecommerce, Meta Pixel & ROI", desc: "Полная настройка событий электронной коммерции GA4, Meta Conversions API (CAPI), когортный анализ и точный расчет стоимости привлечения (CAC/ROAS)." }
        ]
      },
      actionBtn: {
        UA: "Налаштувати канали продажів →",
        BG: "Настройте канали за продажби →",
        EN: "Configure Sales & Marketing Channels →",
        RU: "Настроить каналы продаж →"
      }
    },

    // 13. E-Commerce Customer Support & AI Agents
    "ecom-support": {
      icon: "🤖",
      badge: {
        UA: "ШІ-асистенти та клієнтський сервіс",
        BG: "ШИ асистенти и клиентска поддръжка",
        EN: "AI Agents & 24/7 Omnichannel Support",
        RU: "ИИ ассистенты и клиентский сервис"
      },
      titles: {
        UA: "Підтримка клієнтів: ШІ асистенти, месенджери, Helpdesk та система відгуків",
        BG: "Поддръжка на клиенти: ШИ ботове, месинджъри, Helpdesk и отзиви",
        EN: "Customer Support: AI Agents, Omnichannel Helpdesk & Verified Reviews",
        RU: "Поддержка клиентов: ИИ ассистенты, мессенджеры, Helpdesk и система отзывов"
      },
      tag: "Підтримка та ШІ",
      sub: "AI Agents · Месенджери · Helpdesk · Відгуки",
      intro: {
        UA: "Сучасний покупець очікує відповіді на питання протягом лічених секунд у зручному для нього каналі. Ми інтегруємо розумних AI-асистентів, які консультують 24/7, омніканальні системи підтримки та інструменти соціального доказу (відгуки й рейтинги).",
        BG: "Съвременният купувач очаква мигновен отговор в удобен за него канал. Интегрираме умни ШИ асистенти с 24/7 достъп, омниканални хелпдеск системи и доказателства за доверие (отзиви и рейтинги).",
        EN: "Modern consumers demand instant resolution inside their messaging channel of choice. We deploy 24/7 LLM-powered sales agents, unified operator helpdesks, and authenticated social proof rating engines.",
        RU: "Современный покупатель ожидает ответа в течение секунд в удобном для него канале. Мы внедряем умных ИИ ассистентов 24/7, омниканальные хелпдески и системы отзывов реальных клиентов."
      },
      clauses: {
        UA: [
          { title: "ШІ асистенти та розумні чат-боти (AI Agents)", desc: "Автономні ШІ-консультанти нового покоління на базі LLM, навчені на базі асортименту вашого магазину: підбирають розмір, знаходять аналоги, перевіряють статус доставки та відповідають 24/7 у WhatsApp, Telegram і чаті сайту." },
          { title: "Омніканальний онлайн-чат та Helpdesk для операторів", desc: "Єдина консоль для менеджерів: всі діалоги з сайту, пошти, WhatsApp, Viber та Telegram зводяться в один інтерфейс зі збереженням історії переписок та картки покупця." },
          { title: "Інтерактивний FAQ та центр самообслуговування", desc: "Структурована база знань з живим пошуком відповіді на типові питання щодо оплати, доставки, повернення або гарантійних зобов'язань, яка знижує рутинне навантаження на 60–70%." },
          { title: "Система верифікованих відгуків і фото-рейтингів", desc: "Автоматичний збір оцінок та відгуків після отримання замовлення, премодерація, фото- та відеовідгуки реальних покупців, що підвищує конверсію карток товарів на 30–40%." }
        ],
        BG: [
          { title: "ШИ асистенти и умни чат-ботове (AI Agents)", desc: "Интелигентни ботове, обучени върху вашия продуктов каталог: консултират денонощно в WhatsApp, Telegram и уеб чата, препоръчват размери и следят пратки." },
          { title: "Омниканален Helpdesk и уеб чат за оператори", desc: "Единен екран за мениджъри: запитванията от сайта, месинджърите и имейлите се обединяват в една хронология на клиента." },
          { title: "Интерактивна база знания и FAQ", desc: "Динамични отговори на чести въпроси относно плащания, доставка и връщане, спестяващи до 70% от времето на персонала." },
          { title: "Верифицирани клиентски отзиви и рейтинги", desc: "Автоматично събиране на рецензии със снимки след доставка, което вдига конверсията на продуктовите страници с над 30%." }
        ],
        EN: [
          { title: "Autonomous AI Shopping Agents & LLM Chatbots", desc: "Generative AI sales reps fine-tuned on your catalog: recommending products, resolving size queries, and verifying order milestones 24/7 across WhatsApp, Telegram, and web." },
          { title: "Unified Omnichannel Helpdesk & Live Chat", desc: "Consolidated operator console aggregating customer tickets from live chat, email, Telegram, and WhatsApp into unified customer profile cards." },
          { title: "Dynamic Self-Service FAQ & Knowledge Base", desc: "Instant predictive answers for shipping policies, warranties, and payment guidelines reducing manual repetitive tickets by 60–70%." },
          { title: "Verified Customer Reviews & Photo Ratings", desc: "Automated post-delivery review requests with photo/video uploads and review moderation, increasing cart conversions by 30–40%." }
        ],
        RU: [
          { title: "ИИ ассистенты и умные чат-боты (AI Agents)", desc: "Автономные консультанты на базе LLM, обученные по каталогу товаров: подбирают товары, проверяют статус заказа и отвечают 24/7 в WhatsApp, Telegram и на сайте." },
          { title: "Омниканальный онлайн-чат и Helpdesk", desc: "Единая панель для операторов: все диалоги с сайта, почты и мессенджеров сводятся в единый интерфейс с карточкой клиента." },
          { title: "Интерактивный FAQ и база знаний", desc: "Быстрые ответы на частые вопросы по оплате, доставке и гарантии, снижающие нагрузку на менеджеров на 60–70%." },
          { title: "Система проверенных отзывов и рейтингов", desc: "Автоматический сбор отзывов с фото после получения заказа, модерация и повышение доверия к товарам." }
        ]
      },
      actionBtn: {
        UA: "Підключити ШІ-підтримку →",
        BG: "Свържете ШИ поддръжка →",
        EN: "Deploy AI Customer Support →",
        RU: "Подключить ИИ-поддержку →"
      }
    },

    // 14. E-Commerce Security & Legal Compliance
    "ecom-security": {
      icon: "🔒",
      badge: {
        UA: "Юридичний захист та кібербезпека",
        BG: "Правна защита и киберсигурност",
        EN: "Legal Compliance & Cyber Protection",
        RU: "Юридическая защита и кибербезопасность"
      },
      titles: {
        UA: "Безпека й юридичне: Захист даних GDPR, сертифікати SSL, оферта та правила повернення",
        BG: "Сигурност и право: Защита на данни по GDPR, SSL сертификати, оферта и правила за връщане",
        EN: "Security & Legal Compliance: GDPR 2026, SSL Hardening, Terms of Service & Refunds",
        RU: "Безопасность и право: Защита данных по GDPR, SSL сертификаты, оферта и правила возврата"
      },
      tag: "Безпека та комплаєнс",
      sub: "GDPR 2026 · Оферта · Повернення · A+ SSL",
      intro: {
        UA: "Юридична прозорість та кібербезпека захищають ваш бізнес від штрафів європейських регуляторів і хакерських атак, викликаючи максимальну довіру у платоспроможних покупців.",
        BG: "Правната коректност и киберсигурността предпазват бизнеса от солидни глоби по европейските директиви и хакерски атаки, изграждайки безусловно доверие у клиентите.",
        EN: "Legal transparency and enterprise-grade cybersecurity insulate your business from EU regulatory penalties and data breaches while earning the highest confidence from international shoppers.",
        RU: "Юридическая прозрачность и кибербезопасность защищают бизнес от штрафов регуляторов ЕС и хакерских атак, формируя максимальное доверие клиентов."
      },
      clauses: {
        UA: [
          { title: "Повна відповідність європейському регламенту GDPR 2026", desc: "Granular Cookie Consent банер з вибором категорій згоди, ведення аудиторського логу згод, шифрування персональних даних та реалізація права на видалення даних покупця." },
          { title: "Комплект юридичних документів для онлайн-торгівлі", desc: "Публічна оферта (Terms of Service), Політика конфіденційності (Privacy Policy), Регламент доставки та правила повернення товару протягом 14 днів згідно норм ЄС та України." },
          { title: "Криптографічний захист A+ SSL та відповідність PCI DSS", desc: "Сучасні SSL/TLS сертифікати з обов'язковим шифруванням HSTS, CSP та захистом від перехоплення даних. Безпечна обробка карткових платежів без збереження на сервері." },
          { title: "Захист від спаму, DDoS-атак та автоматичні бекапи", desc: "Підключення Cloudflare WAF для фільтрації шкідливого трафіку, захист кошика та форм від спам-ботів і парсерів, а також регулярні автоматичні бекапи на ізольований сервер." }
        ],
        BG: [
          { title: "Пълно съответствие с европейския регламент GDPR 2026", desc: "Многостепенен панел за съгласие с бисквитките (Cookie Consent), регистър на съгласията и пълна защита на личните данни." },
          { title: "Правен пакет за онлайн търговия в ЕС", desc: "Общи условия (Публична оферта), Политика за поверителност и ясни правила за връщане на стока до 14 дни." },
          { title: "Криптиране A+ SSL и съответствие с PCI DSS", desc: "HSTS, CSP хедъри и изолация на картовите плащания, отговарящи на международните банкови стандарти." },
          { title: "Защита от спам, DDoS атаки и архивиране", desc: "Cloudflare WAF филтрация, защита на формуляри от ботове и ежедневни автоматични резервни копия." }
        ],
        EN: [
          { title: "Full EU GDPR 2026 Compliance Architecture", desc: "Granular category-based Cookie Consent banner, audit compliance consent logs, personal data encryption, and user data erasure request pipelines." },
          { title: "E-Commerce Legal Package & Consumer Protection", desc: "Enforceable Terms of Service (Public Offer), EU Privacy Policy, and 14-day statutory consumer return/refund policy workflows." },
          { title: "A+ SSL Cryptography & PCI DSS Isolation", desc: "HSTS, CSP, and XSS defensive headers. Zero cardholder data stored on local servers, guaranteeing strict PCI DSS payment safety." },
          { title: "Cloudflare WAF & Automated Isolated Backups", desc: "Cloudflare enterprise firewall mitigating DDoS floods and malicious scraper bots, plus automated nightly offsite database backups." }
        ],
        RU: [
          { title: "Полное соответствие регламенту GDPR 2026 (ЕС)", desc: "Баннер Cookie Consent с выбором категорий, журнал согласий, шифрование персональных данных и поддержка права на удаление данных." },
          { title: "Пакет юридических документов для онлайн-торговли", desc: "Публичная оферта, Политика конфиденциальности и правила возврата товара в течение 14 дней по стандартам ЕС и Украины." },
          { title: "Криптографическая защита A+ SSL и PCI DSS", desc: "Сертификаты SSL с HSTS и CSP защитой, безопасная обработка карт через банковские шлюзы без сохранения на сервере." },
          { title: "Защита от DDoS, спама и резервное копирование", desc: "Интеграция Cloudflare WAF, защита корзины от спам-ботов и регулярное автоматическое резервное копирование." }
        ]
      },
      actionBtn: {
        UA: "Отримати аудит безпеки магазину →",
        BG: "Получете одит на сигурността →",
        EN: "Request Security & Compliance Audit →",
        RU: "Получить аудит безопасности магазина →"
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
      action: "more",
      files: [
        { 
          name: { UA: "01. Ядро магазину", BG: "01. Ядро на магазина", EN: "01. Storefront & Core", RU: "01. Ядро магазина" }, 
          meta: { UA: "Каталог · Вітрина · CMS", BG: "Каталог · Витрина · CMS", EN: "Catalog · Storefront · CMS", RU: "Каталог · Витрина · CMS" }, 
          caseId: null, 
          docId: "ecom-core" 
        },
        { 
          name: { UA: "02. Оплата & Еквайринг", BG: "02. Плащания & Еквайринг", EN: "02. Payments & Acquiring", RU: "02. Оплата & Эквайринг" }, 
          meta: { UA: "Stripe · Borica · ПРРО", BG: "Stripe · Борика · Фискализация", EN: "Stripe · Borica · Fiscal", RU: "Stripe · Borica · ПРРО" }, 
          caseId: null, 
          docId: "ecom-payments" 
        },
        { 
          name: { UA: "03. Бекенд & Операції", BG: "03. Бекенд & Операции", EN: "03. Backend & Operations", RU: "03. Бэкенд & Операции" }, 
          meta: { UA: "PIM · WMS · ERP · CRM", BG: "PIM · WMS · ERP · CRM", EN: "PIM · WMS · ERP · CRM", RU: "PIM · WMS · ERP · CRM" }, 
          caseId: null, 
          docId: "ecom-backend" 
        },
        { 
          name: { UA: "04. Доставка & Логістика", BG: "04. Доставка & Логистика", EN: "04. Shipping & Logistics", RU: "04. Доставка & Логистика" }, 
          meta: { UA: "Speedy · Econt · ТТН", BG: "Speedy · Econt · Товарителници", EN: "Speedy · Econt · Waybills", RU: "Speedy · Econt · ТТН" }, 
          caseId: null, 
          docId: "ecom-delivery" 
        },
        { 
          name: { UA: "05. Маркетинг & Продажі", BG: "05. Маркетинг & Продажби", EN: "05. Marketing & Sales", RU: "05. Маркетинг & Продажи" }, 
          meta: { UA: "SEO · Google · Marketplaces", BG: "SEO · Google · Пазари", EN: "SEO · Google · Marketplaces", RU: "SEO · Google · Marketplaces" }, 
          caseId: null, 
          docId: "ecom-marketing" 
        },
        { 
          name: { UA: "06. Підтримка & AI Agents", BG: "06. Поддръжка & AI Ботове", EN: "06. Support & AI Agents", RU: "06. Поддержка & AI Боты" }, 
          meta: { UA: "ШІ агенти · Helpdesk", BG: "ШИ агенти · Helpdesk", EN: "AI Agents · Helpdesk", RU: "ИИ агенты · Helpdesk" }, 
          caseId: null, 
          docId: "ecom-support" 
        },
        { 
          name: { UA: "07. Безпека & Юридичне", BG: "07. Сигурност & Право", EN: "07. Security & Legal", RU: "07. Безопасность & Право" }, 
          meta: { UA: "GDPR · Оферта · SSL", BG: "GDPR · Оферта · SSL", EN: "GDPR · Legal Terms · SSL", RU: "GDPR · Оферта · SSL" }, 
          caseId: null, 
          docId: "ecom-security" 
        }
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
        { name: "Core Web Vitals 95–100", meta: "Speed Audit", caseId: null, docId: "speed-audit" },
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

      if (folder.files.length > 5) {
        root.style.setProperty('--gf-open-spread', '26px');
        root.style.setProperty('--gf-open-fan', '3.2deg');
        root.style.setProperty('--gf-open-stack', '16px');
      }

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

      const fileName = typeof file.name === 'object' ? (file.name[currentLang] || file.name.UA || file.name.EN) : file.name;
      const fileMeta = typeof file.meta === 'object' ? (file.meta[currentLang] || file.meta.UA || file.meta.EN) : file.meta;

      sheetBtn.innerHTML = `
        <div class="gf-sheet-head">
          <span class="gf-sheet-name">${fileName}</span>
          <span class="gf-sheet-meta">${fileMeta}</span>
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
        showToast(`📄 ${fileName} [${fileMeta}] — ${folder.tone === 'dark' ? 'Secured in Vault' : 'Ready for deployment'}`);
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
