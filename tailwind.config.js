/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing': "url('../landing.jpg')",
      },

      keyframes: {
        'elementIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        elementIn: '1s elementIn 0.2s forwards'
      },

    },
  },
  plugins: [],
}

