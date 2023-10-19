/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'oval': "url('../assets/oval.svg')",
      //   // You can define more background images here as needed.
      // },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      }
    },
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant('children','&>*')
    })
  ],
}

