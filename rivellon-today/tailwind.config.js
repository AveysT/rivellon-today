/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rivellon: {
          bg: '#0a0a0a',      // Deepest black/grey
          panel: '#161313',   // Panel background
          paper: '#e0d2b4',   // Kept for text areas if needed, but darker
        },
        ink: {
          DEFAULT: '#e0d2b4', // Light text for dark mode (re-using paper colorish)
          muted: '#8a8a8a',
        },
        blood: {
          DEFAULT: '#8a1c1c',
          bright: '#b92b2b',
        },
        gold: {
          DEFAULT: '#c8aa6e',
          light: '#e6cfa3',
          dark: '#8a6c3c',
          metallic: '#9d7d40',
        },
      },
      fontFamily: {
        serif: ['"Cinzel"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        handwriting: ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        'paper-texture': "url('/paper-texture.jpg')", // Placeholder
      }
    },
  },
  plugins: [],
}
