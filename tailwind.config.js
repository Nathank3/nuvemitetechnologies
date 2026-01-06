/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nuvemite: {
          blue: '#005A98',
          cyan: '#29AAE1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cyan': 'linear-gradient(to right, #29AAE1, #009DC2)',
      }
    },
  },
  plugins: [],
}
