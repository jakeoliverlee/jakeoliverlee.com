module.exports = {
  darkMode: 'class',
  prefix: '',
  content: [".src/expressjs/pages/home/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
],
}

