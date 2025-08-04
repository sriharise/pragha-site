import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-josefin-sans)'],
        heading: ['var(--font-jost)'],
      },
      colors: {
        green: {
          100: '#f0fdf4',
          200: '#dcfce7',
          600: '#16a34a',
          700: '#15803d',
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;