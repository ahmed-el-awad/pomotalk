import colors from "tailwindcss/colors";

export default {
  content: [
    "../renderer/pages/**/*.{js,ts,jsx,tsx}",
    "../renderer/components/**/*.{js,ts,jsx,tsx}",
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
  plugins: [],
};
