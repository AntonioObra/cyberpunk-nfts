/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      // or have default horizontal padding
      center: true,
      padding: "0.75rem",
      md: {
        padding: "2rem",
      },

      // default breakpoints but with 40px removed
    },
    extend: {
      fontFamily: {
        sans: ["Saira Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
