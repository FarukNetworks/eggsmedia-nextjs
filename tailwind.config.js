/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '0rem'
      },
    },
    screens: {
      'xs': '480px',
      'sm': '767px',
      'md': '990px',
      'lg': '1200px',
      'xl': '1600px',
      '2xl': '1920px'
    },
    colors: {
      primary: '#D883BB',
      secondary: '#5BC5CE',
      white: '#ffffff',
      black: '#000000',
      orange: '#FD9834',
      gray: '#F8F8F8',
      darkPurple: '#AD6996',
      borderColor: '#bdbdbd',
    }
  },
  plugins: [],
};