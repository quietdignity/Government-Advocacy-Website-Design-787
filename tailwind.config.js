/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-charcoal': '#2C2C2C',
        'ember-orange': '#E56B47',
        'warm-white': '#FEFDF8',
        'steel-blue': '#4A6FA5',
        'sage-gray': '#8B9A8E',
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}