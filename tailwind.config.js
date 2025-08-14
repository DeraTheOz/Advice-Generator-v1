//** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightCyan: "var(--light-cyan)",
        neonGreen: "var(--neon-green)",
        grayishBlue: "var(--grayish-blue)",
        darkGrayishBlue: "var(--dark-grayish-blue)",
        darkBlue: "var(--dark-blue)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        custom: "28px",
      },
      boxShadow: {
        "3xl": "0 0 20px 2px var(--neon-green)",
      },
    },
  },
  plugins: [],
};
