const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '400px',
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        'sm': '700px',
        'md':'950px',
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
    },
  },
  plugins: [],
};
