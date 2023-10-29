const themes = require('./src/theme');

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
      colors: {
        'theme-bg': 'var(--theme-bg)',
        'theme-text': 'var(--theme-text)',
        'theme-border': 'var(--theme-border)',
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
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
