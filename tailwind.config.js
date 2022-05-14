module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#0FCFEC",
          
 "secondary": "#19D3AE",
          
 "accent": "#19D3AE",
          
 "neutral": "#191D24",
          
 "base-100": "#fff",
           
 "info": "#3ABFF8",
          
 "success": "#36D399",
          
 "warning": "#FBBD23",
          
 "error": "#F87272",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}
