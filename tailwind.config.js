/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["costumFonts, sans-serif"],
      },
      backgroundSize: {
        full: "100%",
      },
      colors: {
        bgColor: "#eff5ff",
        darkBlue: "#022959",
        grey: "#9699aa",
        inputBorder: "#d6d9e6",
        activeInput: "#483eff",
        skyBlue: "#bee2fd",
        red: "#ee374a",
        light: "#f8f9ff",
      },
    },
  },
  plugins: [],
};
