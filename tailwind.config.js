/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-100": "rgba(255,255,255,1)",
        "light-200": "rgba(255,250,241,1)",
        "light-300": "rgba(225,225,230,1)",
        "light-400": "rgba(196,196,204,1)",
        "light-500": "rgba(124,124,138,1)",
        "light-600": "rgba(118,121,123,1)",
        "light-700": "rgba(77,88,94,1)",
        "dark-100": "rgba(0,4,5,1)",
        "dark-200": "rgba(0,7,10,1)",
        "dark-300": "rgba(0,2,4,1)",
        "dark-400": "rgba(0,10,15,1)",
        "dark-500": "rgba(0,12,18,1)",
        "dark-600": "rgba(0,17,26,1)",
        "dark-700": "rgba(0,17,25,1)",
        "dark-800": "rgba(13,22,27,1)",
        "dark-900": "rgba(13,29,37,1)",
        "dark-1000": "rgba(25,34,39,1)",
        "tomato-100": "rgba(117,3,16,1)",
        "tomato-200": "rgba(146,0,14,1)",
        "tomato-300": "rgba(171,34,46,1)",
        "tomato-400": "rgba(171,77,85,1)",
        "carrot-100": "rgba(251,169,76,1)",
        "mint-100": "rgba(4,211,97,1)",
        "cake-100": "rgba(6,94,124,1)",
        "cake-200": "rgba(130,243,255,1)",
      },
      fontFamily: {
        roboto: `"Roboto", sans-serif`,
        poppins: `"Poppins", sans-serif`,
      },
      keyframes: {
        enteringTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0%" },
        },
        enteringLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0%" },
        },
        enteringRight: {
          "0%": { transform: "translateX(100%)", opacity: "0%" },
        },
      },
      animation: {
        "entering-from-top": "0.5s ease-in-out enteringTop 100ms backwards",
        "entering-from-left": "1s ease-in-out enteringLeft 400ms backwards",
        "entering-from-right": "1s ease-in-out enteringLeft 400ms backwards",
      },
    },
  },
  plugins: [],
};
