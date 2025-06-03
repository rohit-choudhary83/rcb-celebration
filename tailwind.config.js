/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ballSpinMove: {
          '0%': { transform: 'translateX(-100%) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateX(100vw) rotate(1080deg)', opacity: '1' },
        },
      },
      animation: {
        ballSpinMove: 'ballSpinMove 2s linear forwards',
      },
    },
  },
  plugins: [],
};
