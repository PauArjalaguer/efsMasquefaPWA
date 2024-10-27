/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily: {
      'body': ['"Montserrat"'],
     
    },
    extend: {
      colors: {
        'azure': {
          '50': '#f5f7fa',
          '100': '#e9edf5',
          '200': '#cfdae8',
          '300': '#a5bbd4',
          '400': '#7497bc',
          '500': '#537aa4',
          '600': '#41628b',
          '700': '#354f6f',
          '800': '#2f435d',
          '900': '#2b3a4f',
          '950': '#1c2635',
        },
      },
    },
  },
  plugins: [],
}