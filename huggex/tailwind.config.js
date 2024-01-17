/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/App.jsx',
  './src/Components/FaqQuestion.jsx'
],
  theme: {
    extend: {
      backgroundImage: {
                'gradient-custom': 'linear-gradient(180deg, #06286E, #164EC0)',
              },
      borderColor:{
        'blue-gradient-custom ':'linear-gradient(90.26deg, #217EEC, #082299 102)'
      },
    },
  },
  plugins: [],
}



