/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },},
  },
  plugins: [
    flowbite
  ],
}