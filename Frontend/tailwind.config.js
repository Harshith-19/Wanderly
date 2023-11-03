/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary-dark)",
        primaryDark: "var(--color-primary)",
        primaryLight: "var(--color-primary-light)",
        bgPrimary: "#FFFFFF",
        bgSecondary: "#DFD7F9",
        secondaryLight: "#212832",
      },
    },
  },
  plugins: [],
};
