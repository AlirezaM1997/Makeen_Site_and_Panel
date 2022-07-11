module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundPosition: {
      "50_50": "50% 50%",
    },
    backgroundSize: {
      "0_100": "0% 100%",
      "100_100": "100% 100%",
    },
    extend: {
      keyframes: {
        changeScale: {
          "0%" : { transform: "scale(0) translate(50%,50%)" },
          "100%": { transform: "scale(1) translate(0%,0%)"},
        },
      },
      animation: {
        hoverPaint: 'changeScale 0.3s ease-out',
      },
      backgroundImage: {
        menu_item: "linear-gradient(#37BBEC, #37BBEC)",
      },
      fontFamily: {
        iranYekan: ["IRANYEKAN"],
        fa: ["fa"],
      },
      transitionProperty: {
        menu_item_transition: "background-size 0.5s, color 0.5s",
        'height' :"height",
        'top' :"top",
        'spacing':'padding'
      },
    },
  },
  plugins: [require("tailwindcss-gradient")],
};
