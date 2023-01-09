/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#fbf7f4",
      textPrimary: "#20194B",
      textSecondary: "#DFDEE4",
      "white-100": "#FFFFFF",
      "white-200": "#F6F6F6",
      lightShade: "#F1F4F7",
      "primary-200": "#eee6e2",
      "pink-100": "#FBEDFF",
      "green-100": "#E8FCE8",
      "beige-200": "#F7BFAE",
      "beige-100": "#4B86F5",
      "blue-200": "#4B86F5",
      "blue-100": "#E5F4FF",
    },
  },
  plugins: [],
};
