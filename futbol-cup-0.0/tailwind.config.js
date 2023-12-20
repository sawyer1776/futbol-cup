/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      red: colors.red,
      lime: colors.lime,
      green: colors.green,
      amber: colors.amber,
      yellow: colors.yellow,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      stone: colors.stone,
      'alt-300': '#689995',
      'alt-500': '#327470',
      'alt-600': '#1f5855',
      'alt-800': '#092e2b',
      'alt-950': '#011817',
      'trans-300': 'rgba(2, 6, 23, 0.3)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
