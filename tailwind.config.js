/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#FFB5C8',
          light: '#FFD6E3',
          deep: '#FF8FAD',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8CC82',
          dark: '#A07830',
        },
        cream: '#FFF5F8',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
