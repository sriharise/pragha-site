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
        sans: ['"Inter"', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['"Playfair Display"', '"Georgia"', 'serif'],
        testimonial: ['"Cormorant Garamond"', '"Times New Roman"', 'serif'],
      },
      colors: {
        brand: {
          primary: '#0F3D3E',
          secondary: '#FFBD33',
          accent: '#FF6F61',
          teal: '#008080',
        },
        surface: '#FAFAFA',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
