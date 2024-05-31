/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        wiggle:'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "34%": {
            transform: "translate(30px, -200px) scale(1.1)"
          },
          "68%": {
            transform: "translate(-100px, -50px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        },
        wiggle:{
          '0% 100%' :{
            transform:'rotate(5deg)'
          },
          '50%' :{
            transform: 'rotate(-5deg) '
          }
        }
      },
      colors: {
        "primary": "#0097ed",
        "primaryhover": "#017abf",
        "darkprimary": "#1a1a1a",
        "white": "#ffffff"
      }
    },
  },
  plugins: [],
}