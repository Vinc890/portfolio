/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blacky': '#0B0C10',
        'blue-grey': '1F2833',
        'grey': 'C5C6C7',
        'bluey': '66FCF1',
        'greeny': '45A29E',
      },
    },
  },
  plugins: [],
}