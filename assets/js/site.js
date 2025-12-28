document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('darkModeToggle');
    const icon = toggleBtn.querySelector('i');
    const label = toggleBtn.querySelector('span');

    // 1. Load saved preference (default = dark)
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'light') {
        document.body.classList.remove('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
        label.textContent = 'DARK';
    } else {
        document.body.classList.add('dark-mode');
        icon.classList.replace('fa-sun', 'fa-moon');
        label.textContent = 'LIGHT';
    }

    // 2. Toggle on click
    toggleBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');

        if (isDark) {
            icon.classList.replace('fa-sun', 'fa-moon');
            label.textContent = 'LIGHT';
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.replace('fa-moon', 'fa-sun');
            label.textContent = 'DARK';
            localStorage.setItem('theme', 'light');
        }
    });
});
