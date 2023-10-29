const themes = require('./src/theme');
function pxToRem(px, baseFontSize = 16) {
  const rem = px / baseFontSize;
  return `${rem}rem`;
}

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: themes.default.default,
      themes: themes.default.themes,
    }),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1920px',
        // Max width breakpoints
        // Especially useful for classes added with javascript that we only at breakpoints without having to use matchMedia.
        'max-md': { max: '1023px' },
      },
      colors: {
        primary: '#0065FF',
        secondary: '#112950',
        white: '#ffffff',
        bodygray: '#474747',
        success: '#74e0ac',
        warning: '#ffec00',
        danger: '#ef3249',
        border: '#412168',
        bordergray: '#919b9d',
        transparentcolor: '#bfcacc1a',
        skyblue: '#5da7e5',
        purple: '#552b88',
        satisfieseablue: '#0046af',
        lightgray: '#f6f7f8',
      },
      fontSize: {
        'font-0': pxToRem(0),
        base: pxToRem(16),
        'font-75': pxToRem(75),
        'font-60': pxToRem(60),
        'font-56': pxToRem(56),
        'font-47': pxToRem(47),
        'font-40': pxToRem(40),
        'font-34': pxToRem(34), // for Quote fix
        'font-25': pxToRem(25),
        'font-24': pxToRem(24),
        'font-32': pxToRem(32),
        'font-22': pxToRem(22),
        'font-20': pxToRem(20),
        'font-19': pxToRem(19),
        'font-16': pxToRem(16),
        'font-15': pxToRem(15),
        'font-14': pxToRem(14),
        'font-12': pxToRem(12),
      },
      lineHeight: {
        'line-82': pxToRem(82),
        'line-70': pxToRem(70),
        'line-60': pxToRem(60),
        'line-44': pxToRem(44),
        'line-41': pxToRem(41),
        'line-36': pxToRem(36),
        'line-32': pxToRem(32),
        'line-31': pxToRem(31),
        'line-28': pxToRem(28),
        'line-27': pxToRem(27),
        'line-25': pxToRem(25),
        'line-24': pxToRem(24),
        'line-16': pxToRem(16),
        'line-0': 0,
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      letterSpacing: {
        normal: '0',
      },
    },
  },
};

// theme: {
//       colors: {
//         blue: '#1fb6ff',
//         purple: '#7e5bef',
//         pink: '#ff49db',
//         orange: '#ff7849',
//         green: '#13ce66',
//       },
//   },
