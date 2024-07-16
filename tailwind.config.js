/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center:true,
        padding: {
          DEFAULT: '6px',
          sm: '2rem',
          md: '3rem',
          lg: '5rem',
          '2xl': '7rem'
        }
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"]
      },
      colors: {
        primary: {
          100: '#a5ffce',
          200: '#4ae290',
          300: '25c870',
        },
        neutral: {
          100: '#ffffff',
          200: '#dedee3',
          300: '#9797a1',
          400: '#595962',
          500: '#131316',
        },
        page: '#fcfcff',
      },
      backgroundImage: {
        banner: "url('/src/assets/images/banner/bg.png')",
        faq: "url('/src/assets/images/faq/bg.svg')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        custom: '95%',
      },
    },
  },
  plugins: [],
}