/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mountain': '#010b24',
      },
    },
    fontFamily: {
      signature: ["Dancing Script"]
    },
  },
  plugins: [],
}