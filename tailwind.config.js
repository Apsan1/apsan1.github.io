/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "40": "10rem",
        "40vw": "40vw",
        "50": "12.5rem",
        "50vw": "50vw",
        "70": "17.5rem",
        "80": "20rem",
        "60": "15rem",
        "60vw": "60vw",
        "70vw": "70vw",
        "80vw": "80vw",
        "85vw": "85vw"
      },
      screens: {
        "2xl": "1536px",
        "14promax": "200px",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "black"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) alternate, blink .7s steps(20) infinite",
      }
    },
  },
  plugins: [],
}

