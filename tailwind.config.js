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
        growScale: {
          "0%": { transform: "scale(0) translate(50%,50%)" },
          "100%": { transform: "scale(1) translate(0%,0%)" },
        },
        shrinkScale: {
          "0%": { transform: "scale(1) translate(0%,0%)" },
          "100%": { transform: "scale(0) translate(50%,50%)" },
        },
        upToDown: {
          "0%": { bottom: "100%", right: "50%" },
          "100%": { bottom: "50%", right: "50%" },
        },
      },
      animation: {
        mouseInPaint: "growScale 0.3s ease-out",
        mouseOutPaint: "shrinkScale 0.3s ease-out",
        comeFromUp: "upToDown 0.5s ease-in-out",
      },
      backgroundImage: {
        menu_item: "linear-gradient(#37BBEC, #37BBEC)",
        registrationModal:
          "linear-gradient(146deg, #37BBEC66 17%, #C7ECFA99 39%, #FFD7C099 61%, #FF792C66 83%, #CC6123B3 100%)",
      },
      fontFamily: {
        iranYekan: ["IRANYEKAN"],
        fa: ["fa"],
      },
      transitionProperty: {
        menu_item_transition: "background-size 0.5s, color 0.5s",
        height: "height",
        top: "top",
        spacing: "padding margin",
        scale: "scale",
      },
    },
  },
  plugins: [require("tailwindcss-gradient")],
};
