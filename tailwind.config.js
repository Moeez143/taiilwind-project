/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#3238f2',
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
