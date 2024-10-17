/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-border': 'linear-gradient(to bottom, #FF69B4, #FFFF00)',
      },
    },
  },
  plugins: [],
};
