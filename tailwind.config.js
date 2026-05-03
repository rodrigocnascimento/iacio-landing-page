/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#0A2463',
        'cyan': '#00D9FF',
        'dark-gray': '#2A2A2A',
        'light-gray': '#f5f5f5',
      },
      boxShadow: {
        'hover': '0 10px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}