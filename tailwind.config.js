/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#54a0d7",
        "brand-orange": "#e75909",
        "brand-darkGray": "#5A5858",
        "brand-lightGray": "#D9D9D9",
        "brand-yellow": "#FBC600",
      },
    },
  },
  plugins: [nextui()],
};
