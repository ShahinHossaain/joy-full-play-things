/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      font1: ['Rancho', "cursive"],
      font2: ['EB Garamond', "serif"],
      font3: ['Poppins', "sans-serif"],
      font4: ['Work Sans', "sans-serif"]

    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0B0C10",

          "secondary": "#66FCF1",

          "accent": "#45A29E",

          "neutral": "#3D4451",

          "text": "#C5C6C7",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}