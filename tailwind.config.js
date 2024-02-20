/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-brown-300': '#EDE0D4',
        'custom-brown-400': '#E6CCB2',
        'custom-brown-500': '#DDB892',
        'custom-brown-600': '#B08968',
        'custom-brown-700': '#7F5539',
        'custom-brown-800': '#9C6644',
      },
    },
  },
  plugins: [],
}

