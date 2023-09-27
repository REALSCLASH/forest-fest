/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}, ./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      }, 
      colors: {
        "gm-blackblue": "#09081A",
        "gm-lblue": "#084D73",
        "gm-dblue": "rgb(255 115 179)",
        "gm-phink": "#FE7066",
        "gm-llblue": "#A3CDF2",
        "pinkki": "#FE7066",
      },

      fontFamily: {
        'bebas': ['Bebas Neue', 'sans'],
      },
      
      
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
  ],
};
