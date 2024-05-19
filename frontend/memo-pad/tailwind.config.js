/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      //colors used in the project
      colors: {
        'primary': '#2B85FF',
        'secondary': '#EF863E',
      },
    },
  },
  plugins: [],
}

