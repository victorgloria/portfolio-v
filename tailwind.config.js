/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"inter"', ...defaultTheme.fontFamily.sans],
        platypi: ['platypi', 'serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'cream': '#FBF5EB',
        'burntorange': '#FD9F12',
        'electricblue': '#1050FE',
        'oceanblue': '#1644C3',
        'darkblue': '#0A1637',
      }
    },
  },
  plugins: [],
}

