/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/css/**/*.{html,js}",
    "./src/js/**/*.{html,js}",
    "./*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
      },
      fontFamily: {
        sans: "Figtree"
      },
      colors: {
        'primary': '#e11d48',

        'light-primary': '#f5f5f5',
        'light-secondary': '#ffffff',
        'dark-primary': '#0f111a',
        'dark-secondary': '#141824',

        'light-hover': '#d4d4d4',
        'dark-hover': '#1f2937',

        'light-active': '#e5e5e5',
        'dark-active': '#334155',

        'light-border': '#d4d4d4',
        'dark-border': '#334155',

        'light-text-primary': '#0a0a0a',
        'light-text-secondary': '#737373',
        'dark-text-primary': '#ffffff',
        'dark-text-secondary': '#9ca3af',
      }
    },
  },
  plugins: [
  ]
}

