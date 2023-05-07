module.exports = {
  purge: [
    "./src/expressjs/pages/home/**/*.html",
    "./src/expressjs/pages/home/**/*.js",
  ],
  darkMode: "media",
  prefix: "",
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
