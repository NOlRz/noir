/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'scan': 'scan 8s linear infinite',
        'glitch': 'glitch 3s infinite',
        'blink': 'blink 1.5s steps(1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'bg-pulse': 'bg-pulse 8s ease-in-out infinite',
        'noise': 'noise 0.5s steps(10) infinite',
      },
      keyframes: {
        scan: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(100%)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            'box-shadow': '0 0 5px theme(colors.pink.300), 0 0 20px theme(colors.pink.300)',
            'text-shadow': '0 0 5px theme(colors.pink.300)'
          },
          '50%': { 
            'box-shadow': '0 0 20px theme(colors.pink.300), 0 0 40px theme(colors.pink.300)',
            'text-shadow': '0 0 20px theme(colors.pink.300)'
          },
        },
        'text-shimmer': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        'bg-pulse': {
          '0%, 100%': { 
            'background-size': '100% 100%',
            'opacity': '0.1'
          },
          '50%': { 
            'background-size': '120% 120%',
            'opacity': '0.2'
          }
        },
        'noise': {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-5%)' },
          '20%': { transform: 'translate(-10%,5%)' },
          '30%': { transform: 'translate(5%,-10%)' },
          '40%': { transform: 'translate(-5%,15%)' },
          '50%': { transform: 'translate(-10%,5%)' },
          '60%': { transform: 'translate(15%,0)' },
          '70%': { transform: 'translate(0,10%)' },
          '80%': { transform: 'translate(-15%,0)' },
          '90%': { transform: 'translate(10%,5%)' }
        },
      },
    },
  },
  plugins: [],
};