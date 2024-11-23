document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button');
    const themeSun = document.getElementById('theme-sun');
    const themeMoon = document.getElementById('theme-moon');

    // Check saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        // Apply saved theme
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        themeSun.classList.toggle('hidden', savedTheme === 'dark');
        themeMoon.classList.toggle('hidden', savedTheme !== 'dark');
    } else {
        // No saved theme, apply system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', systemPrefersDark);
        themeSun.classList.toggle('hidden', systemPrefersDark);
        themeMoon.classList.toggle('hidden', !systemPrefersDark);
    }

    // Toggle theme on button click
    themeButton.addEventListener('click', () => {
        const isDarkMode = document.documentElement.classList.toggle('dark');
        themeSun.classList.toggle('hidden', isDarkMode);
        themeMoon.classList.toggle('hidden', !isDarkMode);

        // Save theme preference in localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});
