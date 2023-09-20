// Import the tailwindcss module
const tailwindcss = require("tailwindcss");

// Define your Tailwind CSS configuration
module.exports = {
  // Specify the content to process (for PurgeCSS)
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Extend the default theme with your custom styles
  theme: {
    extend: {
      fontFamily: {
        turners: ["Lato"], // Example custom font family
      },
    },
    colors: {
      // Define custom colors
      red100: "#E83335",
      red200: "#C53030",
      red300: "#C53030",

      gray100: "#595959",
      gray200: "#555555",
      smoke: "#F5F5F5",
      gainsboro: "#DCDCDC",

      white: "#FFFFFF",
      black: "#000000",
      titanium: "#C6C5C0",
    },
  },

  // Enable the DaisyUI plugin
  // Note: Make sure you've installed DaisyUI using 'npm install daisyui'
  plugins: [tailwindcss("daisyui")], // Use tailwindcss function to load DaisyUI
};
