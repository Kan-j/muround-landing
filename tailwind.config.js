/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        // Override the default 'blue' accent color with a custom color
        accent: '#BD7117',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['bumblebee', 'dracula'],
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         "primary": "#a991f7",
  //         "secondary": "#f6d860",
  //         "accent": "#37cdbe",
  //         "neutral": "#3d4451",
  //         "base-100": "#ffffff",
  //       },
  //     },
  //     "dark",
  //     "cupcake",
  //   ],
  // }
}