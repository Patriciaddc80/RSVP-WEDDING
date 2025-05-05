/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          light: '#B5651D', // Original
          DEFAULT: '#8B4513', // Darker shade
          dark: '#B5651D', // Same as light mode
          hover: '#D4AF37', // Same as light mode
          active: '#B5651D', // Same as light mode
          disabled: '#D4AF37', // Same as light mode
        },
        secondary: {
          light: '#D4AF37', // Original gold
          DEFAULT: '#B8860B', // Darker gold
          dark: '#D4AF37', // Same as light mode
          hover: '#B5651D', // Same as light mode
          active: '#B5651D', // Same as light mode
          disabled: '#D4AF37', // Same as light mode
        },
        background: {
          light: '#FFF5F5', // Original
          DEFAULT: '#FFFFFF',
          dark: '#000000', // Black background
        },
        text: {
          light: '#4A4A4A', // Light mode text
          DEFAULT: '#333333',
          dark: '#FFFFFF', // White text for dark mode
        },
        accent: {
          light: '#F8E8E8', // Light accent
          DEFAULT: '#E8D8D8',
          dark: '#B5651D', // Same as primary light
        },
        gold: '#d4af37'
      },
      fontFamily: {
        gathering: ['Great Vibes', 'cursive'],
        raleway: ['Raleway', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.jpg')",
      }
    },
  },
  plugins: [],
}