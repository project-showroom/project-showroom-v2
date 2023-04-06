/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/pages/**/**/*.{js,ts,jsx,tsx}',
    './src/**/components/**/*.{js,ts,jsx,tsx}',
    './src/**/features/**/**/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        128: '32rem',
        320: '80rem',
      },
      width: {
        128: '32rem',
        320: '80rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
