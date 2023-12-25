/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        dark: "#1E1E1E",
        gray: "#ececec",
        primary: "#ff7755",
        secondary: "#3adc93",
        "primary-light-10": "#ff8566",
        "secondary-light-10": "#4ee09e",
        "primary-light-50": "#ffbbaa",
        "secondary-light-50": "#9deec9",
      },
    },
  },
  plugins: [],
};
