/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'custom': '30rem',
      },
      colors:{
        'bg1': '#0A192F', 
        'textGreen': '#64ffda',
        'textLight': '#ccd6f6',
        'textDark': '#8829b0'
      }
    },
  },
  plugins: [],
}