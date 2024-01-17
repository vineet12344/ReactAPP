/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/App.jsx',
  './src/Components/FaqQuestion.jsx'
],
  theme: {
    extend: {
      backgroundImage: {
                'gradient-custom': 'linear-gradient(180deg, #06286E, #164EC0)',
                'flipped-card-custom': 'linear-gradient(to right, #43cea2 ,#185a9d)'
                 /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
              
                

              },
      borderColor:{
        'blue-gradient-custom ':'linear-gradient(90.26deg, #217EEC, #082299 102)'
      },
      
    },
  },
  plugins: [],
}



