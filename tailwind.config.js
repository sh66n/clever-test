/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Include all page files
    "./components/**/*.{js,ts,jsx,tsx}", // Include all component files
    "./app/**/*.{js,ts,jsx,tsx}", // Include files if using the app directory (Next.js 13+)
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"], // Reference your font here
      },
    },
  },
  plugins: [],
};
