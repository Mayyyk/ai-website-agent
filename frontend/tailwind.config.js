/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "../backend/**/*.json" // Include JSON from the backend
  ],
  theme: {
      extend: {},
  },
  plugins: [],
};

