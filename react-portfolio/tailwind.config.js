/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        qa: {
          blue: '#2563eb', // Indigo/Blue
          teal: '#0d9488', // Emerald/Teal (Pass)
          red: '#e11d48',  // Rose/Red (Fail)
          dark: '#0f172a',
          card: '#1e293b'
        }
      }
    },
  },
  plugins: [],
}
