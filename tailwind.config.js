module.exports = {
    purge: [],
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
     darkMode: false, 
     theme: {
      screens: {
        'sm': {'min': '320px', 'max': '580px'},
        'md': {'min': '581px', 'max': '999px'},
        'lg': {'min': '1000px', 'max': '1400px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }