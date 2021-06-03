const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      ...defaultTheme.fontSize,
      "4xl": "2.75rem",
      "5xl": ["3rem", "1.2"],
      "6xl": ["52px", "62px"],
    },
    colors: {
      ...defaultTheme.colors,
      black: "#151719",

      primary: { DEFAULT: "#6163ff", dark: "#6b6dff", 500: "#5658DD" },
      gray: {
        DEFAULT: "#9CA9B3",
        dark: "#25282C",
        darkHover: "#2a2d32",
        light: "#717D86",
      },
      green: {
        DEFAULT: "#1CB68B",
        light: "#73EFCC",
      },
    },
    fontFamily: {
      Inter: '"Inter"',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
