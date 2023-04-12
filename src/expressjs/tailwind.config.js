/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  prefix: '',
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  variants: {
    extend: {
      textOpacity: ['dark']
    }
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
}

