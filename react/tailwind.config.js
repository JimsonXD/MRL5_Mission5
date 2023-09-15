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
      transparent: "transparent",
      current: "currentColor",
      turnersblue: "#0073cf",
      turnersgrey: "#9a9b9c",
      red: "#FF0000",
      lightgrey: "#d1d5db",
      darkgrey: "#363636",
      black: "#000000",
      white: "#ffffff",
      green: "#008000",
      platinum: "#E5E4E2"
    },
  },
  plugins: [require("daisyui")],
};
