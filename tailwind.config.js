/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#003366',
        secondary: '#50C878',
        accent: '#00FFFF',
        neutral: '#333333',
        silver: '#C0C0C0',
        gold: '#FFD700',
      },
    },
  },
  plugins: [],
};