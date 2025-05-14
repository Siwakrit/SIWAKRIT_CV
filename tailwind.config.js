/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'text-gradient': 'text-gradient 4s ease infinite',
        'border-glow': 'border-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'text-gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'border-glow': {
          '0%': {
            'box-shadow': '0 0 5px rgba(0, 128, 255, 0.3)',
            'border-color': 'rgba(0, 128, 255, 0.3)'
          },
          '100%': {
            'box-shadow': '0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 128, 255, 0.4)',
            'border-color': 'rgba(0, 255, 255, 0.8)'
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      colors: {
        'cyber': {
          'primary': '#00ffff',
          'secondary': '#00aaff',
          'dark': '#0a1929',
          'light': '#e6f7ff',
          'accent': '#ff00ff',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}