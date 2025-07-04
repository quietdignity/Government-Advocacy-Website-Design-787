/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced primary colors for better readability
        'navy-blue': '#1e293b',      // Lighter navy for better contrast
        'bright-orange': '#f97316',   // More vibrant orange
        'cream-white': '#ffffff',     // Pure white for maximum contrast
        'forest-green': '#16a34a',    // Brighter green
        'soft-gray': '#64748b',       // Better contrast gray
        'light-blue': '#f8fafc',      // Lighter blue background
        'warm-orange': '#fed7aa',     // Keep warm orange
        'dark-gray': '#334155',       // Lighter dark gray for better readability
        'medium-gray': '#64748b',     // Consistent medium gray
        'accent-blue': '#0ea5e9',     // Keep accent blue
        // Additional readable colors
        'text-primary': '#1e293b',    // Primary text color
        'text-secondary': '#475569',  // Secondary text color
        'text-muted': '#64748b',      // Muted text color
        'bg-primary': '#ffffff',      // Primary background
        'bg-secondary': '#f8fafc',    // Secondary background
        'bg-accent': '#fef3c7',       // Accent background
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}