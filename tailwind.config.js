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
      }
      ,
      backgroundImage: {
        wave: "url('/src/assets/images/background.svg')",
      }
    },
  },
  plugins: [],
}

