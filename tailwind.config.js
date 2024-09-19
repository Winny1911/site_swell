/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path according to your project structure
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

