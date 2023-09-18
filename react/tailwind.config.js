/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        turners: ["Lato"],
      },
    },
    colors: {
      red: "#FF0000",
      ruby: "#E0115F",
      glowred: "##FF355E",
      lightgrey: "#d1d5db",
      darkgrey: "#363636",
      platinum: "#E5E4E2",
      silver: "#808080",
      black: "#000000",
      white: "#ffffff",
    },
  },
  plugins: [require("daisyui")],
};
