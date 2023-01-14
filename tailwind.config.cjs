/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'navy': '#0a192f',
      'light-navy': '#112240',
      'lightest-navy': '#233554',
      'slate': '#8892b0',
      'light-slate': '#a8b2d1',
      'lightest-slate': '#ccd6f6',
      'mywhite': '#e6f1ff',
      'mygreen': '#64ffda',
      'mydarkgreen': 'rgba(100,255,218,0.7)'

    },
    boxShadow: {
      'none': '0 0 #0000',
      'c1': '2px 2px 5px 0 rgba(0,0,0, 0.3)',
      'c2': '4px 4px 15px 0 rgba(0,0,0, 0.5)',
      '3xl': '5px 5px 10px 0 rgba(0,0,0, 0.3)',
      '4xl': '10px 10px 20px 0 rgba(0,0,0, 0.5)'
    }

  },
  plugins: [
    require('flowbite/plugin'),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],

}
