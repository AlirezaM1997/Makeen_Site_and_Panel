module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundPosition:{
      '50_50':'50% 50%'
    },
    backgroundSize:{
      '0_100':'0% 100%',
      '100_100':'100% 100%',
    },
    extend: {
      backgroundImage: {
        'menu_item': "linear-gradient(#37BBEC, #37BBEC)",
      },
      fontFamily: {
        iranYekan: ["IRANYEKAN"],
      },
      transitionProperty: {
        'menu_item_transition': 'background-size 0.5s, color 0.5s',
      }
    },
  },
  plugins: [
    require('tailwindcss-gradient'),
  ],
}