/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#1E3A8A',
        'bright-orange': '#FB923C',
        'cream-white': '#FFFBF5',
        'forest-green': '#047857',
        'soft-gray': '#6B7280',
        'light-blue': '#DBEAFE',
        'warm-orange': '#FED7AA',
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}