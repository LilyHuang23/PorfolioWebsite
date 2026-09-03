// ---------- Theme (light / dark mode), persisted across pages ----------
const toggleIcon = document.querySelector('.toggle-icon');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleIcon?.classList.add('bx-sun');
}

toggleIcon?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleIcon.classList.toggle('bx-sun');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// ---------- Mobile navigation menu ----------
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon?.addEventListener('click', () => {
    navbar?.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
    menuIcon.classList.toggle('bx-menu');
});

navbar?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon?.classList.remove('bx-x');
        menuIcon?.classList.add('bx-menu');
    });
});

// ---------- Bilingual (繁體中文 / English) support ----------
const translations = {
    'zh-Hant': {
        'nav.home': '首頁',
        'nav.projects': '作品集',
        'nav.resume': '履歷',
        'nav.contact': '聯絡方式',

        'title.home': 'Lily Huang 作品集網站',
        'title.projects': '作品集 - Lily Huang',
        'title.resume': '我的履歷 - Lily Huang',
        'title.contact': '聯絡我 - Lily Huang',

        'home.greeting': '嗨，我是',
        'home.welcome': '歡迎來到我的作品集網站！',
        'home.viewResume': '查看履歷',
        'profession.web': '網頁開發者',
        'profession.engineer': '軟體工程師',
        'profession.designer': '服裝設計師',

        'contact.title': '讓我們保持聯繫',
        'contact.text': '感謝你瀏覽我的作品集！希望你會喜歡。以下是我的聯絡資訊，歡迎隨時與我聯繫！',
        'contact.socialText': '與我聯繫',
        'label.fullName': '姓名',
        'label.email': '電子郵件',
        'label.phone': '電話',
        'label.message': '訊息',
        'submit.btn': '送出',

        'resume.heading': '我的履歷',
        'resume.subheading': '以下是我的履歷預覽，你也可以點擊下方按鈕在 Google 雲端硬碟中開啟或下載完整版本。',
        'resume.openBtn': '在 Google 雲端硬碟開啟',

        'projects.heading': '我的作品集',
        'projects.subheading': '這裡收錄了我開發過的一些網站與工具專案。',
        'project.viewCode': '查看程式碼',
        'project.viewDemo': '查看展示',
        'project.viewSite': '查看網站',

        'project.p1.title': '大阪旅遊手冊',
        'project.p1.desc': '完全使用 Claude AI 開發的大阪旅遊手冊，整理行程規劃、景點與美食資訊。',
        'project.p2.title': 'KOKAKU 商業網站',
        'project.p2.desc': '使用 Vue 3 開發的商業網站，目前正在準備串接金流服務。',
        'project.p3.title': '甜點成本計算機',
        'project.p3.desc': '使用 HTML、CSS、JavaScript 開發的甜點成本計算工具，未來計畫擴充為完整的後台管理系統。',
        'project.p4.title': 'Round Table Games 商業網站',
        'project.p4.desc': '使用 WordPress 架設的商業網站專案。',
        'project.p5.title': 'SewingMaster 部落格',
        'project.p5.desc': '套用模板打造的裁縫主題部落格網站。',
        'project.p6.title': 'Wix 個人網站',
        'project.p6.desc': '使用 Wix 架設的個人網站作品。',

        'footer.text': '© 2026 Lily Huang. All rights reserved.',
    },
    en: {
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.resume': 'Resume',
        'nav.contact': 'Contact',

        'title.home': 'Lily Huang Portfolio Website',
        'title.projects': 'Projects - Lily Huang',
        'title.resume': 'My Resume - Lily Huang',
        'title.contact': 'Contact Me - Lily Huang',

        'home.greeting': 'Hi, I am',
        'home.welcome': 'Welcome to my Portfolio website!',
        'home.viewResume': 'View Resume',
        'profession.web': 'Web Developer',
        'profession.engineer': 'Software Engineer',
        'profession.designer': 'Fashion Designer',

        'contact.title': "Let's get in touch",
        'contact.text': 'Thank you for reviewing my portfolio! I hope you like it. Here is some of my contact information, feel free to reach out anytime!',
        'contact.socialText': 'Contact with me',
        'label.fullName': 'Full Name',
        'label.email': 'Email',
        'label.phone': 'Phone',
        'label.message': 'Message',
        'submit.btn': 'Send',

        'resume.heading': 'My Resume',
        'resume.subheading': 'A preview of my resume is shown below. You can also open or download the full version from Google Drive using the button below.',
        'resume.openBtn': 'Open in Google Drive',

        'projects.heading': 'My Projects',
        'projects.subheading': 'A collection of websites and tools I have built.',
        'project.viewCode': 'View Code',
        'project.viewDemo': 'View Demo',
        'project.viewSite': 'View Site',

        'project.p1.title': 'Osaka Travel Guide',
        'project.p1.desc': 'An Osaka travel guidebook built entirely with Claude AI, organizing itineraries, attractions, and food recommendations.',
        'project.p2.title': 'KOKAKU Business Website',
        'project.p2.desc': 'A business website built with Vue 3, currently being prepared for payment gateway integration.',
        'project.p3.title': 'Dessert Cost Calculator',
        'project.p3.desc': 'A dessert product cost calculator built with HTML, CSS, and JavaScript, planned to grow into a full back-office system.',
        'project.p4.title': 'Round Table Games Business Website',
        'project.p4.desc': 'A business website project built with WordPress.',
        'project.p5.title': 'SewingMaster Blog',
        'project.p5.desc': 'A sewing-themed blog site built from a template.',
        'project.p6.title': 'Wix Personal Website',
        'project.p6.desc': 'A personal website built on the Wix platform.',

        'footer.text': '© 2026 Lily Huang. All rights reserved.',
    },
};

function getInitialLang() {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'zh-Hant') return saved;
    return navigator.language && navigator.language.toLowerCase().startsWith('zh') ? 'zh-Hant' : 'en';
}

function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;

    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-value]').forEach((el) => {
        const key = el.getAttribute('data-i18n-value');
        if (dict[key] !== undefined) el.value = dict[key];
    });

    const titleKey = document.body.getAttribute('data-i18n-title');
    if (titleKey && dict[titleKey]) document.title = dict[titleKey];

    const langToggle = document.querySelector('#lang-toggle');
    if (langToggle) langToggle.textContent = lang === 'zh-Hant' ? 'EN' : '中';

    localStorage.setItem('lang', lang);
}

let currentLang = getInitialLang();
applyLanguage(currentLang);

document.querySelector('#lang-toggle')?.addEventListener('click', () => {
    currentLang = currentLang === 'zh-Hant' ? 'en' : 'zh-Hant';
    applyLanguage(currentLang);
});
