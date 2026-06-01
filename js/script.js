// ========== الوظائف الرئيسية ==========
(function() {
    
    // ========== إدارة اللغة ==========
    let currentLang = localStorage.getItem('basma-lang') || 'ar';
    const langToggle = document.getElementById('langToggle');
    const langText = langToggle.querySelector('.lang-text');
    
    applyLanguage(currentLang);
    
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        applyLanguage(currentLang);
        localStorage.setItem('basma-lang', currentLang);
    });
    
    function applyLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = translations[lang].dir;
        langText.textContent = lang === 'ar' ? 'EN' : 'AR';
        
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        document.title = lang === 'ar' 
            ? 'الجمعية الثقافية الشبابية بصمة | Basma' 
            : 'Basma Cultural Youth Association | بصمة';
        
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
    }
    
    // ========== شريط التنقل ==========
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // ========== زر العودة للأعلى ==========
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // ========== السنة الحالية ==========
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    document.body.style.opacity = '1';
    
})();