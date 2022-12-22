/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"], // Ensure fonts with spaces have " " surrounding it.
      serif: ["Merriweather", "serif"],
      sans: ["sans-serif"],
    },
  },
  plugins: [],
};
