/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.3)",
          "200": "rgba(29, 26, 26, 0.4)",
          "300": "rgba(128, 128, 128, 0.41)",
          "400": "rgba(128, 128, 128, 0.6)",
          "500": "rgba(128, 128, 128, 0.4)",
          "600": "rgba(128, 128, 128, 0.8)",
        },
        black: "#000",
        darkolivegreen: {
          "100": "#77815c",
          "200": "rgba(119, 129, 92, 0.7)",
        },
      },
      fontFamily: {
        raleway: "Raleway",
        "clash-display": "'Clash Display'",
      },
      borderRadius: {
        "11xl": "30px",
        mini: "15px",
        "381xl": "400px",
        "731xl": "750px",
      },
    },
    fontSize: {
      "6xl": "25px",
      "26xl": "45px",
      xl: "20px",
      "11xl": "30px",
      "41xl": "60px",
      "46xl": "65px",
      "16xl": "35px",
      "68xl": "87px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
