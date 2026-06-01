// ========== إدارة الوضع الليلي ==========
(function() {
    const darkToggle = document.getElementById('darkToggle');
    const darkModeStyle = document.getElementById('dark-mode-style');
    const darkIcon = darkToggle.querySelector('i');
    
    const savedMode = localStorage.getItem('basma-dark-mode');
    
    if (savedMode === 'enabled') {
        enableDarkMode();
    }
    
    darkToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        darkModeStyle.disabled = false;
        darkIcon.classList.remove('fa-moon');
        darkIcon.classList.add('fa-sun');
        darkToggle.title = 'الوضع النهاري';
        localStorage.setItem('basma-dark-mode', 'enabled');
    }
    
    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        darkModeStyle.disabled = true;
        darkIcon.classList.remove('fa-sun');
        darkIcon.classList.add('fa-moon');
        darkToggle.title = 'الوضع الليلي';
        localStorage.setItem('basma-dark-mode', 'disabled');
    }
})();