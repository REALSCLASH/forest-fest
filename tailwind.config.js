/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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
        "gm-picotee-blue": "rgba(44, 39, 133, 1)",
        "gm-dark-slate-blue": "rgba(76, 63, 134, 1)",
        "gm-midnight-blue": "rgba(40, 32, 107, 1)",
        "gm-turquoise-green": "rgba(158, 206, 180, 1)",
        "gm-pale-spring-bud": "rgba(254, 193, 3, 1)",
        "gm-pale-rose": "#a93969",
      },
    },
  },
  plugins: [],
};
