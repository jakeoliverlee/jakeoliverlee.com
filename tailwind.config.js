module.exports = {
  purge: [
    "./src/expressjs/pages/home/**/*.html",
    "./src/expressjs/pages/home/**/*.js",
  ],
  darkMode: "class",
  prefix: "",
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
