const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '400px',
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        sm: '700px',
        md: '950px',
      },
      width: {
        97: '97%',
        95: '95%',
        90: '90%',
      },
      height: {
        97: '97%',
        95: '95%',
        90: '90%',
        '50rem': '50rem',
      },
      keyframes: {
        swing: {
          '0%,4%': { transform: 'rotate(0deg)' },
          '4%,10%': { transform: 'rotate(115deg)' },
          '10%,17%': { transform: 'rotate(95deg)' },
          '17%,23%': { transform: 'rotate(107deg)' },
          '23%,100%': { transform: 'rotate(105deg)' },
        },
      },
      animation: {
        swing: 'swing 20s infinite',
      },
    },
  },
  plugins: [],
};
