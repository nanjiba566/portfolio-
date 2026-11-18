/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        navy: {
          50:  '#f0f4fb',
          100: '#dce7f4',
          200: '#b8cfe9',
          300: '#89a8d8',
          400: '#6d90c7',
          500: '#3b5d96',
          600: '#2e4a7d',
          700: '#243b6b',
          800: '#1a2d52',
          900: '#111f3a',
        },
      },
    },
  },
  plugins: [],
}
