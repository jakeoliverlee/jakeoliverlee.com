module.exports = {
  purge: [
    "./src/expressjs/pages/home/**/*.html",
    "./src/expressjs/pages/home/scripts/**/*.js",
  ],
  darkMode: "class",
  prefix: "",
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
