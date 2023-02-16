/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f34068",

          "secondary": "#006b7f",

          "accent": "#ede700",

          "neutral": "#ffe4e6",

          "base-100": "#171717",

          "info": "#3ABFF8",

          "success": "#f3f4f6",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {},

  },
  //...
  plugins: [require("daisyui")],

}
