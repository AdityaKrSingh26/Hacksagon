/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in-bounce': 'fadeIn 1s ease-out, bounce 0.5s ease-out',
        'text-fill': 'fillFromBottom 2s ease-in-out forwards',
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
        fillFromBottom: {
          '0%': { 'background-size': '100% 0%' },
          '100%': { 'background-size': '100% 100%' },
        }
      },
    },
  },
  plugins: [],
};
