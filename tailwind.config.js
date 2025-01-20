/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        smd: '760px', 
        md: '840px',
      },
      animation: {
        'fade-in-bounce': 'fadeIn 1s ease-out, bounce 0.5s ease-out',
        'text-fill': 'fillFromBottom 2s ease-in-out forwards',
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out forwards',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
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
        },
      },
    },
  },
  plugins: [],
};
