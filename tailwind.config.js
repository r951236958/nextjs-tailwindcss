const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'mdeia', // or 'media' or 'class'
  theme: {
    colors: {
yellow: colors.yellow,
    },
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        blueGray: colors.blueGray,
      },
    },
  },
  variants: [
    'responsive',
    'group-hover',
    'focus-within',
    'first',
    'last',
    'odd',
    'even',
    'hover',
    'focus',
    'active',
    'visited',
    'disabled',
  ],
  plugins: [],
}
