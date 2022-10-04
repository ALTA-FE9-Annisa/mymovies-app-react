/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      abu: {
        50: "#EBEEF5",
        100: "#C3C8D4",
        200: "#A8AEBF",
        300: "#8E95A9",
        600: "#0D1818",
      },
      secondary: {
        500: "#1EA5FC",
        600: "#121829",
      },
      tertary: {
        600: "#9257CC",
      },
    },
  },
  plugins: [],
};
