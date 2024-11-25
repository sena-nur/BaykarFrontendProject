/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Ensure Tailwind scans these files for class names
  theme: {
    extend: {
      colors: {
        "custom-text": "#78350f", // Amber/900
        "custom-bg": "#fffbeb", // Amber/50
        "blue-gray-200": "#e2e8f0",
        "blue-gray-900": "#0f172a",
        white: "#ffffff",
      },
    },
  },
  variants: {},
  plugins: [],
};
