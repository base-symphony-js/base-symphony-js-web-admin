/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-seri'],
      },
      colors: {
        white: '#FFF',
        black: '#000',
        dark: '#343434',
        general: '#091F5A',
        primary: '#004BCE',
        secondary: '#9C27B0',
        optional: '#DAEDFF',
        'dark-optional': '#171B21',
        'dark-gray': '#4F4F4F',
        'light-gray': '#989898',
        info: '#0288D1',
        success: '#2BCE75',
        error: '#FF4848',
        warning: '#F2CA20',
      },
    },
    screens: {
      xs: '0px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
  },
  plugins: [],
}
