/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Cabin', 'sans-serif'], // For headings
        body: ['Work Sans', 'sans-serif'], // For body text
      },
    },
  },
  plugins: [],
};
