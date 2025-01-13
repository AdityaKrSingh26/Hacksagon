/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in-bounce': 'fadeIn 1s ease-out, bounce 0.5s ease-out',
        'text-border-and-fill': 'textBorderFill 5s ease-in-out forwards, fillFromBottom 2s ease-in-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        textBorderFill: {
          '0%': { color: 'transparent', '-webkit-text-stroke': '2px white' },
          '100%': { color: 'transparentS', '-webkit-text-stroke': '0' },
        },
        fillFromBottom: {
          '0%': { 'background-size': '100% 0%' },
          '100%': { 'background-size': '100% 100%' },
        }
      },
    },
  },
  plugins: [],
};
