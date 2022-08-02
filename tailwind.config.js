const responsiveTextPlugin = require('./responsiveTextPlugin');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      screens: {
        xl: '1440px',
      },
      gridTemplateRows: {
        12: 'repeat(12, minmax(0, 1fr))',
      },
      minWidth: {
        xs: '16px',
        '2xs': '50px',
        '3xs': '53px',
        '4xs': '106px',
        '5xs': '124px',
        '6xs': '150px',
        '7xs': '162px',
        '8xs': '185px',
        '9xs': '220px',
        '10xs': '256px',
        '11xs': '260px',
        sm: '280px',
        '2sm': '363px',
        '3sm': '377px',
        md: '400px',
        '2md': '420px',
        xl: '700px',
      },
      maxWidth: {
        xs: '16px',
        '2xs': '50px',
        '3xs': '53px',
        '4xs': '106px',
        '5xs': '124px',
        '6xs': '150px',
        '7xs': '162px',
        '8xs': '185px',
        '9xs': '220px',
        '10xs': '256px',
        '11xs': '260px',
        sm: '280px',
        '2sm': '363px',
        '3sm': '377px',
        md: '400px',
        '2md': '420px',
        xl: '700px',
      },
      maxHeight: {
        '8xs': '185px',
      },
      minHeight: {
        '2xs': '50px',
        '3xs': '53px',
        '6xs': '150px',
        '8xs': '185px',
        '2sm': '363px',
      },
      colors: {
        primary: {
          900: '#34495E',
          800: '#0577D0',
          700: '#0FBBF1',
          425: '#D8EDFD',
          200: '#EFF8FF',
          100: '#F2F5FF',
          50: '#F8F8F8',
        },
        neutral: {
          800: '#6C859E',
          600: '#c3c5c7',
          525: '#DFDFDF',
          500: '#DDF0FF',
          425: '#F1F1F1',
        },
        uplift: {
          700: '#2ECC71',
          500: '#B5FFD4',
        },
        fall: {
          700: '#E74C3C',
          500: '#FFC6B5',
        },
        body: '#F8F8F8',
        modal: '#efefef',
        mainOrange: '#F1C40F',
      },
      borderWidth: {
        DEFAULT: '1px',
        none: '0',
        xs: '2px',
        sm: '4px',
        md: '8px',
      },
      spacing: {
        1.5: '0.3125rem',
        1.7: '0.375rem',
        2.3: '0.5625rem',
        2.5: '0.625rem',
        2.7: '0.6875rem',
        3.5: '0.875rem',
        4.3: '1.0625rem',
        4.5: '1.125rem',
        5.5: '1.375rem',
        7.5: '1.875rem',
        13: '3.125rem',
        14.5: '3.75rem',
      },
      text: {
        'body-1': {
          DEFAULT: {
            fontSize: '12px',
            lineHeight: '14px',
          },
        },
        'body-2': {
          DEFAULT: {
            fontSize: '12px',
            lineHeight: '15px',
          },
        },
        'body-3': {
          DEFAULT: {
            fontSize: '10px',
            lineHeight: '116%',
          },
        },
        'body-4': {
          DEFAULT: {
            fontSize: '18px',
            lineHeight: '21px',
          },
        },
        'body-5': {
          DEFAULT: {
            fontSize: '14px',
            lineHeight: '16px',
          },
        },
        'body-6': {
          DEFAULT: {
            fontSize: '12px',
            lineHeight: '100%',
          },
        },
        'h-2': {
          DEFAULT: {
            fontSize: '24px',
            lineHeight: '28px',
          },
        },
        'h-3': {
          DEFAULT: {
            fontSize: '18px',
            lineHeight: '21px',
          },
        },
        value: {
          DEFAULT: {
            fontSize: '20px',
            lineHeight: '23px',
          },
        },
        'value-2': {
          DEFAULT: {
            fontSize: '16px',
            lineHeight: '19px',
          },
        },
        price: {
          DEFAULT: {
            fontSize: '32px',
            lineHeight: '38px',
          },
        },
      },
    },
  },
  plugins: [
    require('./plugin'),
    responsiveTextPlugin({
      extraFonts: [{ name: 'serif', multiplicator: 1.08 }],
    }),
    plugin(({ addComponents, addUtilities }) => {
      addComponents({
        '.flex-wrapper': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
      addUtilities(
        {
          '.scrollbar-hide': {
            /* IE and Edge */
            '-ms-overflow-style': 'none',
            /* Firefox */
            'scrollbar-width': 'none',
            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },

          '.scrollbar-default': {
            /* IE and Edge */
            '-ms-overflow-style': 'auto',
            /* Firefox */
            'scrollbar-width': 'auto',
            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'block',
            },
          },
        },
        ['responsive'],
      );
    }),
  ],
};
