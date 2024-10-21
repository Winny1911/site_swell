/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors:{
        primaryBlue: '#41A3E0',
      },
      scale: {
        30: '0.3',
        35: '0.35',
        60: '0.6',
      },
      backgroundImage: {
        wave: "url('/src/assets/images/background.svg')",
      }
    },
  },
  plugins: [],
}

