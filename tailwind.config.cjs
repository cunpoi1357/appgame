/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        violet: '#958cf4',
        gray: {
          a9: '#a9a9a9',
          '91': '#919191',
          '58': '#585858',
          '54': '#545454',
          'ec': '#ececec',
          '8c': '#8c8c8c',
          '81': '#818181',
          'aa': '#aaaaaa',
          'f4': '#f4f4f4',
          'f6': '#f6f6f6',
          'e2': '#e2e2e2'
        },
        'white-f8': '#f8f8f8'

      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}