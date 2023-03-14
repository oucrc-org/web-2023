/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        oucrc: {
          primary: '#DDD',
          secondary: '#333',
          accent: '#37CDBE',
          neutral: '#3D4451',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FF8300',
          error: '#C60000',
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: '#262626',
        secondary: '#595959',
        subtext: '#A8A8A8',
        heading: '#BBBBBB',
        divider: '#DADADA',
        blockquote: '#F8F8F8',
        blockquoteSidebar: '#CACACA',
        highlight: '#F3F3F3',
        footer: '#3B3B3B',
      },
      fontSize: {
        h1: '1.8em',
        h2: '1.6em',
        h3: '1.4em',
        h4: '1.2em',
        h5: '1.0em',
        h6: '0.8em',
      },
      opacity: {
        90: '.9',
      },
      scale: {
        101: '1.01',
        103: '1.03',
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
        120: '30rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#000',
            /**
             * 本文の気に入らないスタイルは、ここにJSSを書いて上書きすること
             */
            pre: {
              padding: '1em',
            },
          },
        },
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
