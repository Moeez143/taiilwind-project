/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#ee0181',
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
