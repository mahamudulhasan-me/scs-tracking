/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        p1: "#ed502e",
        p2: "#039be5",
        borderColor: "#cbd5e11a",
      },
      fontFamily: {
        bangla: ["sutonnyMJ"],
      },
    },
  },
  plugins: [],
};
