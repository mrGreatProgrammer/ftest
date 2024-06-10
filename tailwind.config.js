/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8D7FC7",
        secondary: "#EEEEFF",
        yellowCard: "#FFF1CB"
      }
    },
  },
  plugins: [],
}