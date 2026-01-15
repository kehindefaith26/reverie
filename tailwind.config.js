/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#6A1B1A',
        gold: '#C7A86D',
        cream: '#F4EDE2',
        'powder-blue': '#B0E0E6',
      },
      fontFamily: {
        header: ['"Dai Banna SIL"', 'serif'],
        body: ['Lato', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
        handwriting: ['Autography', 'cursive', 'sans-serif'],
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(to bottom, #6A1B1A 0%, #220908 100%)',
      }
    },
  },
  plugins: [],
}
