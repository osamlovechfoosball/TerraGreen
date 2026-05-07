'use strict';

const SITE_CONFIG = Object.freeze({
  phoneDisplay: '0879 264 515',
  phoneInternational: '+359879264515',
  // Change this to the real business email before publishing.
  contactEmail: 'office@terragreen.bg',
  whatsappNumber: '359879264515',
  viberNumber: '+359879264515',
});

const translations = Object.freeze({
  bg: {
    pageTitle: 'TerraGreen | Зелена поддръжка на терени',
    skip: 'Към съдържанието',
    menu: 'Меню',
    brandSlogan: 'Зелена поддръжка на терени',
    altHero: 'Илюстрация на косене, почистване, фотоволтаични терени и зелена поддръжка',
    altBefore: 'Обрасъл терен преди поддръжка',
    altProcess: 'Работа на терен с техника',
    altAfter: 'Почистен и поддържан зелен терен',
    navHome: 'Начало',
    navServices: 'Услуги',
    navAbout: 'За нас',
    navContact: 'Контакти',
    heroEyebrow: 'Безплатен оглед • Собствена техника • Частни и бизнес клиенти',
    heroTitle: 'Професионална поддръжка, косене и почистване на зелени терени',
    heroLead:
      'TerraGreen помага на собственици, фирми и оператори на фотоволтаични централи да поддържат терени чисти, безопасни и проходими.',
    callNow: 'Обади се сега',
    sendPhotos: 'Изпрати снимки',
    checkInspection: 'Индивидуална оферта след оглед',
    checkTerrain: 'Подходящо за дворове, фирмени терени и соларни паркове',
    checkPlan: 'Еднократно почистване или редовна поддръжка',
    badgePv: 'PV терени',
    badgePvText: 'контрол на растителността',
    badgeFast: 'Бърза реакция',
    badgeFastText: 'оглед + оферта',
    trustEquipment: 'Собствена техника',
    trustClients: 'Частни и бизнес клиенти',
    trustSolar: 'Фотоволтаични централи',
    trustFlexible: 'Еднократно или абонаментно',
    servicesKicker: 'Услуги',
    servicesTitle: 'Зелена поддръжка за терени, дворове и обекти',
    servicesIntro:
      'Фокусът е практична работа на терен: косене, почистване, контрол на растителността, кастрене и подготовка на имоти за нормално използване.',
    serviceMowingTitle: 'Косене на трева и бурени',
    serviceMowingText:
      'Еднократно или редовно косене на дворове, парцели, зелени площи и обрасли участъци.',
    serviceCleaningTitle: 'Почистване на занемарени терени',
    serviceCleaningText:
      'Премахване на висока растителност, бурени, клони и подготовка на имота за достъп и използване.',
    servicePruningTitle: 'Рязане, кастрене и оформяне',
    servicePruningText:
      'Внимателна работа около огради, постройки, пътища, съоръжения и техническа инфраструктура.',
    servicePvTitle: 'Поддръжка на фотоволтаични централи',
    servicePvText:
      'Контрол на треви и растителност около панели, кабели, огради, пътища за достъп и сервизни зони.',
    serviceGreenTitle: 'Поддръжка на зелени площи',
    serviceGreenText:
      'Сезонна или абонаментна грижа за дворове, комплекси, бизнес сгради и обществени пространства.',
    serviceWasteTitle: 'Събиране на зелени отпадъци',
    serviceWasteText:
      'Подготвена зона след работа: събиране на окосена трева, клони и растителни отпадъци при договорка.',
    quoteKicker: 'Оферта',
    quoteTitle: 'Цената се определя според реалния терен',
    quoteText:
      'Площ, височина на растителността, достъп за техника, наклон, отпадъци и локация влияят на офертата. Затова водещата стъпка е безплатен оглед или снимки.',
    quoteButton: 'Заяви оглед',
    aboutKicker: 'За нас',
    aboutTitle: 'Подходът е прост: оглед, ясна оферта, техника и чист резултат',
    aboutText:
      'TerraGreen е временна работна марка за услуга, насочена към зелена поддръжка на терени в България. Сайтът е изграден така, че да показва надеждност, бърза комуникация и реални резултати.',
    clientsTitle: 'Работим с',
    clientHomes: 'Къщи, вили и частни дворове',
    clientPlots: 'Занемарени имоти и парцели',
    clientBusiness: 'Фирмени, складови и промишлени терени',
    clientComplexes: 'Жилищни комплекси и общи зелени площи',
    clientPv: 'Фотоволтаични паркове и технически обекти',
    proofKicker: 'Преди / След',
    proofTitle: 'Галерия за реални резултати',
    proofNote: 'Място за реални снимки от обекти — преди, по време и след работа.',
    galleryBefore: 'Преди',
    galleryProcess: 'Процес',
    galleryAfter: 'След',
    processTitle: 'Как работим',
    processOne: 'Обаждате се или изпращате снимки на терена.',
    processTwo: 'Уточняваме локация, достъп, площ и състояние.',
    processThree: 'Даваме оферта и изпълняваме коректно.',
    safetyKicker: 'Сигурност и коректност',
    safetyTitle: 'Подходящо позициониране за България и ЕС',
    safeCardOneTitle: 'Работа около инфраструктура',
    safeCardOneText: 'Внимание при огради, кабели, панели, пътища за достъп, сгради и технически зони.',
    safeCardTwoTitle: 'Ясна комуникация',
    safeCardTwoText: 'Телефонът е видим навсякъде, а заявката може да започне само със снимки и локация.',
    safeCardThreeTitle: 'Готовност за бизнес клиенти',
    safeCardThreeText: 'Подходящо за абонаментна поддръжка, повторяеми обекти и по-големи терени.',
    contactKicker: 'Контакти',
    contactTitle: 'Нуждаете се от поддръжка на терен?',
    contactText: 'Обадете се за безплатен оглед или изпратете снимки, локация и кратко описание на терена.',
    serviceArea: 'Работим в избран регион и околните населени места.',
    formName: 'Име',
    formPhone: 'Телефон',
    formLocation: 'Локация / населено място',
    formService: 'Услуга',
    formMessage: 'Описание',
    formHelp: 'Формата не записва данни на сървър. Ще отвори вашия имейл клиент с подготвено съобщение.',
    formSubmit: 'Изпрати запитване',
    optionMowing: 'Косене на трева и бурени',
    optionCleaning: 'Почистване на занемарен терен',
    optionPruning: 'Рязане и кастрене',
    optionPv: 'Фотоволтаична централа',
    optionSubscription: 'Абонаментна поддръжка',
    optionOther: 'Друго',
    chatWhatsapp: 'WhatsApp',
    chatViber: 'Viber',
    chatNote: 'Изпратете снимки на терена във WhatsApp или Viber за по-бърза ориентировъчна оферта.',
    mobileCall: 'Телефон',
    legalKicker: 'Правна информация',
    legalTitle: 'Поверителност, условия и бисквитки',
    legalIntro:
      'Кратка, прозрачна информация за посетители и клиенти. Текстовете са работни и трябва да се попълнят с реалните данни на фирмата преди публикуване.',
    privacySummary: 'Политика за поверителност',
    privacyP1:
      'TerraGreen обработва лични данни само когато се свържете с нас чрез телефон, имейл, WhatsApp, Viber или контактната форма. Обичайните данни са име, телефон, населено място, описание на терена и снимки, ако ги изпратите доброволно.',
    privacyP2:
      'Данните се използват единствено за отговор на запитване, подготовка на оферта, организиране на оглед и изпълнение на заявена услуга. Не продаваме лични данни и не използваме рекламно проследяване на сайта.',
    privacyItemOne: 'Администратор: TerraGreen / данните на реалната фирма се добавят преди публикуване.',
    privacyItemTwo:
      'Правно основание: преддоговорни отношения, договорно изпълнение, легитимен интерес за комуникация и законови задължения при счетоводни документи.',
    privacyItemThree:
      'Срок: запитванията се пазят само докато са необходими за комуникация, оферта, изпълнение или законово изискуемо съхранение.',
    privacyItemFour:
      'Права: достъп, корекция, изтриване, ограничаване, възражение и жалба до Комисията за защита на личните данни.',
    privacyNote:
      'Външните приложения WhatsApp и Viber имат собствени правила за поверителност. Използвайте ги само ако сте съгласни с техните условия.',
    termsSummary: 'Условия за ползване',
    termsP1:
      'Информацията в сайта описва услуги за зелена поддръжка на терени, но не представлява окончателна оферта. Крайната цена и срок се уточняват след снимки, разговор или оглед.',
    termsP2:
      'Клиентът следва да предостави точна локация, достъп до терена и информация за рискове като кабели, тръби, огради, панели, животни, опасни отпадъци или други ограничения.',
    termsP3:
      'Снимките и текстовете в сайта са защитени като съдържание на TerraGreen, освен ако не е посочено друго.',
    cookiesSummary: 'Бисквитки и локално съхранение',
    cookiesP1:
      'Сайтът не използва рекламни, аналитични или проследяващи бисквитки. Не се зареждат външни скриптове за маркетинг или статистика.',
    cookiesP2:
      'За удобство сайтът може да запази избрания език в localStorage на браузъра. Това не се използва за проследяване и може да бъде изтрито от настройките на браузъра.',
    privacyLink: 'Поверителност',
    termsLink: 'Условия',
    cookiesLink: 'Бисквитки',
    footerText: '© 2026 TerraGreen. Всички права запазени.',
    validationRequired: 'Моля, попълнете име и телефон.',
    validationPhone: 'Моля, въведете валиден телефонен номер.',
    formReady: 'Готово — отваряме имейл клиента с вашето запитване.',
    emailSubject: 'Запитване към TerraGreen',
    emailGreeting: 'Здравейте, TerraGreen,',
    emailName: 'Име',
    emailPhone: 'Телефон',
    emailLocation: 'Локация',
    emailService: 'Услуга',
    emailMessage: 'Описание',
  },
  en: {
    pageTitle: 'TerraGreen | Green land maintenance',
    skip: 'Skip to content',
    menu: 'Menu',
    brandSlogan: 'Green land maintenance',
    altHero: 'Illustration of mowing, cleaning, photovoltaic sites and green maintenance',
    altBefore: 'Overgrown land before maintenance',
    altProcess: 'Land maintenance work with equipment',
    altAfter: 'Clean and maintained green land',
    navHome: 'Home',
    navServices: 'Services',
    navAbout: 'About us',
    navContact: 'Contact',
    heroEyebrow: 'Free inspection • Own equipment • Private and business clients',
    heroTitle: 'Professional mowing, cleaning and green land maintenance',
    heroLead:
      'TerraGreen helps property owners, companies and photovoltaic site operators keep land clean, safe and accessible.',
    callNow: 'Call now',
    sendPhotos: 'Send photos',
    checkInspection: 'Custom quote after inspection',
    checkTerrain: 'Suitable for yards, business sites and solar parks',
    checkPlan: 'One-off cleaning or regular maintenance',
    badgePv: 'PV sites',
    badgePvText: 'vegetation control',
    badgeFast: 'Fast response',
    badgeFastText: 'inspection + quote',
    trustEquipment: 'Own equipment',
    trustClients: 'Private and business clients',
    trustSolar: 'Photovoltaic parks',
    trustFlexible: 'One-off or subscription',
    servicesKicker: 'Services',
    servicesTitle: 'Green maintenance for land plots, yards and sites',
    servicesIntro:
      'The focus is practical field work: mowing, cleaning, vegetation control, pruning and preparing properties for normal use.',
    serviceMowingTitle: 'Grass and weed mowing',
    serviceMowingText: 'One-off or regular mowing of yards, plots, green areas and overgrown zones.',
    serviceCleaningTitle: 'Overgrown land cleaning',
    serviceCleaningText: 'Removal of high vegetation, weeds and branches, preparing the property for access and use.',
    servicePruningTitle: 'Cutting, pruning and shaping',
    servicePruningText: 'Careful work around fences, buildings, roads, structures and technical infrastructure.',
    servicePvTitle: 'Photovoltaic site maintenance',
    servicePvText: 'Vegetation control around panels, cables, fences, access roads and service zones.',
    serviceGreenTitle: 'Green area maintenance',
    serviceGreenText: 'Seasonal or subscription care for yards, complexes, business buildings and public spaces.',
    serviceWasteTitle: 'Green waste collection',
    serviceWasteText: 'A prepared site after work: collecting grass, branches and green waste by agreement.',
    quoteKicker: 'Quote',
    quoteTitle: 'The price depends on the real site conditions',
    quoteText:
      'Area, vegetation height, equipment access, slope, waste and location affect the quote. That is why the first step is a free inspection or photos.',
    quoteButton: 'Request inspection',
    aboutKicker: 'About us',
    aboutTitle: 'The approach is simple: inspection, clear quote, equipment and a clean result',
    aboutText:
      'TerraGreen is a temporary working brand for a Bulgaria-focused green land maintenance service. The site is built to communicate reliability, fast contact and real results.',
    clientsTitle: 'We work with',
    clientHomes: 'Houses, villas and private yards',
    clientPlots: 'Overgrown properties and land plots',
    clientBusiness: 'Company, warehouse and industrial sites',
    clientComplexes: 'Residential complexes and shared green areas',
    clientPv: 'Photovoltaic parks and technical sites',
    proofKicker: 'Before / After',
    proofTitle: 'Gallery for real results',
    proofNote: 'Area for real project photos — before, during and after the work.',
    galleryBefore: 'Before',
    galleryProcess: 'Process',
    galleryAfter: 'After',
    processTitle: 'How it works',
    processOne: 'You call or send photos of the site.',
    processTwo: 'We confirm location, access, area and condition.',
    processThree: 'We provide a quote and complete the work properly.',
    safetyKicker: 'Safety and reliability',
    safetyTitle: 'Positioned well for Bulgaria and the EU',
    safeCardOneTitle: 'Work around infrastructure',
    safeCardOneText: 'Care around fences, cables, panels, access roads, buildings and technical zones.',
    safeCardTwoTitle: 'Clear communication',
    safeCardTwoText: 'The phone number is visible everywhere, and a request can start with photos and location only.',
    safeCardThreeTitle: 'Ready for business clients',
    safeCardThreeText: 'Suitable for subscription maintenance, recurring sites and larger land plots.',
    contactKicker: 'Contact',
    contactTitle: 'Need land maintenance?',
    contactText: 'Call for a free inspection or send photos, location and a short description of the site.',
    serviceArea: 'Available in the selected region and nearby settlements.',
    formName: 'Name',
    formPhone: 'Phone',
    formLocation: 'Location / town',
    formService: 'Service',
    formMessage: 'Description',
    formHelp: 'This form does not store data on a server. It opens your email app with a prepared message.',
    formSubmit: 'Send enquiry',
    optionMowing: 'Grass and weed mowing',
    optionCleaning: 'Overgrown land cleaning',
    optionPruning: 'Cutting and pruning',
    optionPv: 'Photovoltaic site',
    optionSubscription: 'Subscription maintenance',
    optionOther: 'Other',
    chatWhatsapp: 'WhatsApp',
    chatViber: 'Viber',
    chatNote: 'Send site photos on WhatsApp or Viber for a faster indicative quote.',
    mobileCall: 'Phone',
    legalKicker: 'Legal information',
    legalTitle: 'Privacy, terms and cookies',
    legalIntro:
      'Short, transparent information for visitors and clients. These texts are working placeholders and must be completed with the real company details before publication.',
    privacySummary: 'Privacy policy',
    privacyP1:
      'TerraGreen processes personal data only when you contact us by phone, email, WhatsApp, Viber or the contact form. Typical data includes name, phone number, location, site description and photos if you send them voluntarily.',
    privacyP2:
      'The data is used only to answer enquiries, prepare a quote, organise an inspection and provide the requested service. We do not sell personal data and do not use advertising tracking on this website.',
    privacyItemOne: 'Controller: TerraGreen / the real company details must be added before publication.',
    privacyItemTwo:
      'Legal basis: pre-contractual steps, contract performance, legitimate interest for communication and legal obligations for accounting documents.',
    privacyItemThree:
      'Retention: enquiries are kept only as long as needed for communication, quoting, service delivery or legally required storage.',
    privacyItemFour:
      'Rights: access, correction, deletion, restriction, objection and complaint to the Bulgarian Commission for Personal Data Protection.',
    privacyNote:
      'External apps such as WhatsApp and Viber have their own privacy rules. Use them only if you agree with their terms.',
    termsSummary: 'Terms of use',
    termsP1:
      'The website describes green land maintenance services, but it is not a final binding offer. Final price and timing are confirmed after photos, a call or an inspection.',
    termsP2:
      'The client should provide accurate location, access information and details about risks such as cables, pipes, fences, panels, animals, hazardous waste or other restrictions.',
    termsP3:
      'Photos and texts on the website are protected TerraGreen content unless stated otherwise.',
    cookiesSummary: 'Cookies and local storage',
    cookiesP1:
      'The website does not use advertising, analytics or tracking cookies. No external marketing or statistics scripts are loaded.',
    cookiesP2:
      'For convenience, the website may save the selected language in browser localStorage. This is not used for tracking and can be deleted from browser settings.',
    privacyLink: 'Privacy',
    termsLink: 'Terms',
    cookiesLink: 'Cookies',
    footerText: '© 2026 TerraGreen. All rights reserved.',
    validationRequired: 'Please fill in your name and phone number.',
    validationPhone: 'Please enter a valid phone number.',
    formReady: 'Done — opening your email app with the enquiry.',
    emailSubject: 'Enquiry to TerraGreen',
    emailGreeting: 'Hello TerraGreen,',
    emailName: 'Name',
    emailPhone: 'Phone',
    emailLocation: 'Location',
    emailService: 'Service',
    emailMessage: 'Description',
  },
});

const state = {
  language: readStoredLanguage() || 'bg',
};

const languageToggle = document.querySelector('[data-language-toggle]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const form = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem('terraGreenLanguage');
    return stored === 'en' || stored === 'bg' ? stored : null;
  } catch (_error) {
    return null;
  }
}

function storeLanguage(language) {
  try {
    window.localStorage.setItem('terraGreenLanguage', language);
  } catch (_error) {
    // Storage can be disabled in private browsing. The website still works.
  }
}

function applyContactConfig() {
  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.setAttribute('href', `tel:${SITE_CONFIG.phoneInternational}`);
  });

  document.querySelectorAll('[data-phone-display]').forEach((node) => {
    node.textContent = SITE_CONFIG.phoneDisplay;
  });

  document.querySelectorAll('[data-chat-link="whatsapp"]').forEach((link) => {
    const text = encodeURIComponent('Здравейте, интересувам се от зелена поддръжка на терен. Мога да изпратя снимки и локация.');
    link.setAttribute('href', `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`);
  });

  document.querySelectorAll('[data-chat-link="viber"]').forEach((link) => {
    link.setAttribute('href', `viber://chat?number=${encodeURIComponent(SITE_CONFIG.viberNumber)}`);
  });
}

function applyLanguage(language) {
  const copy = translations[language] || translations.bg;

  document.documentElement.lang = language;
  document.title = copy.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (key && Object.prototype.hasOwnProperty.call(copy, key)) {
      element.textContent = copy[key];
    }
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    const mappings = element.getAttribute('data-i18n-attr')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

    mappings.forEach((mapping) => {
      const [attribute, key] = mapping.split(':').map((part) => part.trim());
      if (attribute && key && Object.prototype.hasOwnProperty.call(copy, key)) {
        element.setAttribute(attribute, copy[key]);
      }
    });
  });

  if (languageToggle) {
    languageToggle.textContent = language === 'bg' ? 'EN' : 'BG';
    languageToggle.setAttribute('aria-label', language === 'bg' ? 'Switch to English' : 'Превключи на български');
  }

  document.querySelectorAll('.contact-link[href^="mailto:"]').forEach((link) => {
    const label = link.querySelector('span:last-child');
    if (label) label.textContent = SITE_CONFIG.contactEmail;
    link.setAttribute('href', `mailto:${SITE_CONFIG.contactEmail}?subject=${encodeURIComponent(copy.emailSubject)}`);
  });
}

function toggleLanguage() {
  state.language = state.language === 'bg' ? 'en' : 'bg';
  storeLanguage(state.language);
  applyLanguage(state.language);
}

function closeMobileMenu() {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileMenu.hidden = true;
  document.body.classList.remove('no-scroll');
}

function toggleMobileMenu() {
  if (!menuToggle || !mobileMenu) return;
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  mobileMenu.hidden = isOpen;
  document.body.classList.toggle('no-scroll', !isOpen);
}

function normalizePhone(value) {
  return String(value).replace(/[\s().-]/g, '').trim();
}

function isValidPhone(value) {
  const normalized = normalizePhone(value);
  return /^\+?[0-9]{7,15}$/.test(normalized);
}

function buildEmailBody(fields, copy) {
  const serviceLabel = fields.service.options[fields.service.selectedIndex]?.textContent || '';
  const lines = [
    copy.emailGreeting,
    '',
    `${copy.emailName}: ${fields.name.value.trim()}`,
    `${copy.emailPhone}: ${fields.phone.value.trim()}`,
    `${copy.emailLocation}: ${fields.location.value.trim() || '-'}`,
    `${copy.emailService}: ${serviceLabel}`,
    '',
    `${copy.emailMessage}:`,
    fields.message.value.trim() || '-',
  ];

  return lines.join('\n');
}

function setStatus(message, isError = false) {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.classList.toggle('is-error', isError);
}

function handleFormSubmit(event) {
  event.preventDefault();
  if (!form) return;

  const copy = translations[state.language] || translations.bg;
  const fields = {
    name: form.elements.name,
    phone: form.elements.phone,
    location: form.elements.location,
    service: form.elements.service,
    message: form.elements.message,
  };

  Object.values(fields).forEach((field) => {
    if (field && typeof field.setAttribute === 'function') {
      field.removeAttribute('aria-invalid');
    }
  });

  if (!fields.name.value.trim() || !fields.phone.value.trim()) {
    fields.name.setAttribute('aria-invalid', String(!fields.name.value.trim()));
    fields.phone.setAttribute('aria-invalid', String(!fields.phone.value.trim()));
    setStatus(copy.validationRequired, true);
    return;
  }

  if (!isValidPhone(fields.phone.value)) {
    fields.phone.setAttribute('aria-invalid', 'true');
    setStatus(copy.validationPhone, true);
    return;
  }

  const subject = encodeURIComponent(copy.emailSubject);
  const body = encodeURIComponent(buildEmailBody(fields, copy));
  const mailto = `mailto:${SITE_CONFIG.contactEmail}?subject=${subject}&body=${body}`;

  setStatus(copy.formReady, false);
  window.location.href = mailto;
}

function initDynamicButtons() {
  const buttons = document.querySelectorAll('.dynamic-button, .button');

  buttons.forEach((button) => {
    button.addEventListener('pointermove', (event) => {
      const rect = button.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      button.style.setProperty('--pointer-x', `${x}%`);
      button.style.setProperty('--pointer-y', `${y}%`);
    });

    button.addEventListener('pointerleave', () => {
      button.style.removeProperty('--pointer-x');
      button.style.removeProperty('--pointer-y');
    });
  });
}

function initRevealAnimations() {
  const elements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  elements.forEach((element) => observer.observe(element));
}

function initSmoothCloseOnNav() {
  document.querySelectorAll('.mobile-nav a, .mobile-cta a').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function init() {
  applyContactConfig();
  applyLanguage(state.language);
  initDynamicButtons();
  initRevealAnimations();
  initSmoothCloseOnNav();

  if (languageToggle) {
    languageToggle.addEventListener('click', toggleLanguage);
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }

  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMobileMenu();
  });
}

init();
