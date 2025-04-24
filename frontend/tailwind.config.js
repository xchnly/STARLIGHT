// tailwind.config.js
import forms from '@tailwindcss/forms'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warna1: '#5de0e6',
        warna2: '#004aad',
      }
    },
  },
  plugins: [
    forms,
  ],
}