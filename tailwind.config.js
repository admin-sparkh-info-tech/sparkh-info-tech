/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        deepblue: '#0A0A0A',
        accent: '#F68747',
        cyan: '#F68747',
        textMain: '#FFFFFF',
        textMuted: '#B0B0B0'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
}
