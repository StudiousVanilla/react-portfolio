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
        xl:'1500px'
      },
      width: {
        '1/10': '10%',
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
        hinge: {
          '0%,4%': { transform: 'rotate(0deg)' },
          '4%,10%': { transform: 'rotate(69deg)' },
          '10%,17%': { transform: 'rotate(59deg)' },
          '17%,23%': { transform: 'rotate(61deg)' },
          '23%,100%': { transform: 'rotate(59deg)' },
        },
        lilBounce: {
          '0%,20%,50%,100%': { 
            transform: 'translateY(0%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '30%': { 
            transform: 'translateY(-5%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)' 
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        }
      },
      animation: {
        hinge: 'hinge 20s infinite',
        lilBounce: 'lilBounce 4s infinite',
        wiggle: 'wiggle 10s ease-in-out infinite 3.54s',
      },
    },
  },
  plugins: [],
};
