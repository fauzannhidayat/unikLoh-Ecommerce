/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    
    screens: {
      sm : '640px',
      md : '768px',
      lg : '968px',
      xl : '1200px'

    },

    backgroundImage: {
      hero : 'url(/img/berita1.png)',
    },
    extend: {},
  },
  plugins: [],
}

