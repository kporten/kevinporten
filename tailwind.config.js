const colors = require('tailwindcss/colors');

const conicGradient = (theme, direction, colors) => {
  const params = [
    direction,
    ...colors.map((color) => theme(`colors.${color}`)),
  ];

  return `conic-gradient(${params.join(', ')})`;
};

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx'],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'conic-gradient': conicGradient(theme, 'from 300deg', [
          'cyan.500',
          'lightBlue.500',
          'blue.500',
          'cyan.500',
        ]),
      }),
      colors: {
        ...colors,
        twitter: '#1da1f2',
        xing: '#006567',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      minHeight: {
        'fill-available': '-webkit-fill-available',
      },
    },
  },
};
