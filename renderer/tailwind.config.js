const colors = require("tailwindcss/colors");
const { heroui } = require("@heroui/react");

module.exports = {
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
