/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  darkMode: 'class',
  content: [
    "./node_modules/flowbite/**/*.js"
  ],

  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

