module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        bgAnim: "bgKf 8s infinite",
      },
      keyframes:{
        bgKf:{
          "0%":{
            transform: "translate(0px,0px) scale(0.8)"
          },
          "25%":{
            transform: "translate(-180px,90px) scale(1)"
          },
          "50%":{
            transform: "translate(0px,0px) scale(1.5)"
          },
          "75%":{
            transform: "translate(210px,-60px) scale(1)"
          },
          "100%":{
            transform: "translate(0px,0px) scale(0.8)"
          }
        }
      },
      fontFamily:{
        workSansFont: "'Work Sans', sans-serif;",
      }
    },
  },
  plugins: [],
}
