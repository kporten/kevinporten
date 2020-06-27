module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
    },
    extend: {
      transitionProperty: {
        visibility: 'visibility, opacity',
      },
    },
  },
  variants: {},
  plugins: [],
};
