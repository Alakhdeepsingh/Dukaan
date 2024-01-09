/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        fontFamily: {
          'galano': ['Galano Grotesque', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
}