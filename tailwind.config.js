/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Libre Baskerville', 'serif']
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1100px'
      }

    },
  },
  plugins: [],
}
