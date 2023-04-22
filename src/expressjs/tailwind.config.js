/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  prefix: '',
  content: ["./pages/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
],
}

