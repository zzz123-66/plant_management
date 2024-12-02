const themeSelector = document.getElementById('theme-selector');

// 初始化主題
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);
    themeSelector.value = savedTheme;
}

// 設定主題
function setTheme(theme) {
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-system');
    document.body.classList.add(`theme-${theme}`);
    if (theme === 'system') {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.add(isDarkMode ? 'theme-dark' : 'theme-light');
    }
    localStorage.setItem('theme', theme);
}

// 監聽主題選擇改變
themeSelector.addEventListener('change', (event) => {
    setTheme(event.target.value);
});

// 初始化
initTheme();

// 監聽系統主題變化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem('theme') === 'system') {
        setTheme('system');
    }
});
