/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#080809",
        secondary: "#94A3B8",
        tertiary: "#121316",
        titanium: "#E2E8F0",
        "slate-card": "#18191B",
        "black-100": "#0E0F11",
        "black-200": "#15161A",
        "white-100": "#F8FAFC",
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
        "card-hover": "0 20px 40px -15px rgba(255, 255, 255, 0.05)",
        titanium: "0 4px 20px -2px rgba(226, 232, 240, 0.15)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to bottom, #080809, #121316)",
      },
    },
  },
  plugins: [],
}