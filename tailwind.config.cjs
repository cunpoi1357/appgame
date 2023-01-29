/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
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
          'e2': '#e2e2e2',
          'e6': '#e6e6e6',
          'eb': '#ebebeb',
          'cc': '#cccccc'
        },
        'white-f8': '#f8f8f8',
        'white-f0': '#f0f0f0',
        'brown': {
          '6b': '#6b2e0f',
          'ad': '#ad4105'
        },
        orange: {
          'e2': '#e28637',
          'd5': '#d5762b',
          'cc': '#cc7129',
        },

        'blue': {
          '3b': '#3b5998'
        },
        'red': {
          'dd': '#dd4b39'
        }
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}