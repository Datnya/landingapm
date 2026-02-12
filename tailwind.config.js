/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B2C535",
        secondary: "#171717",
        accent: "#CDCDCD",
      },
    },
  },
  plugins: [],
}
