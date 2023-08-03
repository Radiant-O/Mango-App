/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'screenImg': "url('@/assets/img/worldmappp.png')",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        "pacifico": ["Pacifico", "cursive"],
        "poppins": ["Poppins", "sans-serif"],
        "montserrat": ["montserrat", "san-serif"]
      },
      colors: {
        'bgDark': "#222840",
        'bgLight': "#384064"
      },
    },
  },
  plugins: [],
}