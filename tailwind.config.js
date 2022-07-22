/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
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
        xs: '220px',
        sm: '377px',
        md: '420px',
        '2xl': '700px',
      },
      inset: {
        14.5: '60px',
      },
      maxWidth: {
        xxs: '124px',
        '2xs': '162px',
        'xs/1.18': '220px',
        xs: '260px',
        'sm/1.3': '280px',
        sm: '377px',
        md: '420px',
        '2xl': '700px',
      },
      width: {
        4.5: '17px',
      },
      maxHeight: {
        xs: '185px',
      },
      minHeight: {
        xs: '50px',
        xxs: '53px',
        sm: '185px',
      },
      colors: {
        primary: {
          900: '#34495E',
          800: '#0577D0',
          425: '#D8EDFD',
          200: '#EFF8FF',
          100: '#F2F5FF',
          50: '#F8F8F8',
        },
        neutral: {
          800: '#6C859E',
          600: '#c3c5c7',
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
      gap: {
        1.5: '0.375rem',
        2.5: '0.625rem',
        2.7: '0.6875rem',
      },
      margin: {
        2.5: '0.625rem',
        13: '3.125rem',
      },
      padding: {
        1.5: '0.3125rem',
        2.3: '0.5625rem',
        2.5: '0.625rem',
        3.5: '0.875rem',
        4.5: '1.125rem',
      },
    },
  },
  plugins: [
    require('./plugin'),
    plugin(({ addComponents }) => {
      addComponents({
        '.flex-wrapper': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.text-body-1': {
          fontSize: '12px',
          lineHeight: '116%',
        },
        '.text-body-2': {
          fontSize: '12px',
          lineHeight: '15px',
        },
        '.text-body-3': {
          fontSize: '10px',
          lineHeight: '116%',
        },
        '.text-body-4': {
          fontSize: '18px',
          lineHeight: '21px',
        },
        '.text-body-5': {
          fontSize: '14px',
          lineHeight: '16px',
        },
        '.text-h2': {
          fontSize: '24px',
          lineHeight: '28px',
        },
        '.text-h3': {
          fontSize: '18px',
          lineHeight: '21px',
        },
        '.text-value': {
          fontSize: '20px',
          lineHeight: '23px',
        },
        '.text-value-2': {
          fontSize: '16px',
          lineHeight: '19px',
        },
        '.text-price': {
          fontSize: '32px',
          lineHeight: '38px',
        },
      });
    }),
  ],
};
