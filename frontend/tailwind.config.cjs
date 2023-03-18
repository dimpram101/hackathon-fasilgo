/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
          roboto: "'Roboto', serif",
          inter: "'Inter', sans-serif",
          archivo: "'Archivo', sans-serif"
      },

        fontWeight: {
          extrabold: '1000',
          extralight: '100'
      }

    }
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
