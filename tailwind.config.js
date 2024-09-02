/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-color': '#FE9900',
        'light-blue': '#EFECF7',
        'custom-blue': '#012674',
        'custom-tan': '#FCE4CC',
        'slider1': '#444851',
        'slider2': '#036160',
        'slider3': '#422600',
        'slider4': '#484848',
        'hover': '#d88c1b',
      },
      borderColor: {
        'main-color': '#FE9900',
        'hover': '#d88c1b'
      },
      colors: {
        'main-color': "#FE9900",
        'hover': '#d88c1b'
      },
      ringColor:{
        'main-color': "#FE9900"
      },
      fontFamily: {
        'montserrat-thin': ['Montserrat-thin', 'sans-serif'],
        'montserrat-regular': ['Montserrat-regular', 'sans-serif'],
        'montserrat-medium': ['Montserrat-medium', 'sans-serif'],
        'montserrat-semi': ['Montserrat-semi', 'sans-serif'],
        'montserrat-black': ['Montserrat-black', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

