/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,css}"],
  theme: {
    extend: {
      boxShadow: {
        'outside': '-0px 0px 10px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
}
