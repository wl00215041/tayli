/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'f3': '#080a09',
        'm2-mask': 'rgba(25,28,29,0.8)',
        'c10-card': '#2b2e32'
      }
    },
  },
  plugins: [],
}

