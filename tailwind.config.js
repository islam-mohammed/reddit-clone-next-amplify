module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
