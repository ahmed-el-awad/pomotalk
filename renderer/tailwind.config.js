const colors = require("tailwindcss/colors");
const { heroui } = require("@heroui/react");

// silences the "As of Tailwind CSS v3.0, 'color' has been renamed to 'anotherColor'"
// might not be necessary when updating tailwind to a different version
// https://github.com/tailwindlabs/tailwindcss/discussions/15127#discussioncomment-13096744
delete colors.lightBlue;
delete colors.warmGray;
delete colors.trueGray;
delete colors.coolGray;
delete colors.blueGray;

module.exports = {
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      temp: {
        1: colors.slate["100"],
        2: colors.slate["200"],
        3: colors.slate["300"],
        4: colors.slate["400"],
        5: colors.slate["500"],
      },
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
