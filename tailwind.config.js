module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        colored: '0 0 3px var(--box-shadow-color)',
      },
      transitionProperty: {
        visibility: 'visibility, opacity',
      },
    },
  },
  variants: {},
  plugins: [],
};
