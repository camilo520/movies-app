import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "767px", min: "290px" },
      tablet: { max: "1023px", min: "768px" },
      desktop: { min: "1024px" },
    },
    extend: {
      animation: {
        "fade-in-scale": "fadeInScale 1s ease-in-out",
        "fade-in": "fadeIn 0.5s ease-in",
        "fade-out": "fadeOut 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-in-out",
        "slide-in-right": "slideInRight 0.8s ease-in-out",
        "fade-slide-in": "fadeSlideIn 1s ease-in-out",
        "slide-in-right-with-tilt": "slideInRightWithTilt 0.9s ease-in-out",
        "slide-out-right-with-tilt": "slideOutRightWithTilt 0.8s ease-in-out",
        rotateScreen: "rotateScreen 1.5s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeSlideIn: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },

        rotateScreen: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-90deg)" },
          "100%": { transform: "rotate(-90deg)" },
        },
        slideInRightWithTilt: {
          "0%": { transform: "translateX(100%) rotate(10deg)" },
          "100%": { transform: "translateX(0) rotate(0deg)" },
        },
        slideOutRightWithTilt: {
          "0%": { transform: "translateX(0) rotate(0deg)" },
          "100%": { transform: "translateX(150%) rotate(15deg)" },
        },
      },
      colors: {
        primary: "#c7f253",
        primaryHover: "#9FC637",
        secondary: "#8e9693",
        disabled: "#1d1b201f",
        textPrimary: "#1F3930",
        secondaryHover: "#5d6d68",
        scrollbarBg: "#f3f3f3",
        scrollbarThumb: "#C7F253",
      },
      fontFamily: {
        "dk-lemon": ["DK Lemon Yellow Sun", "sans-serif"],
        rubikOne: ["Rubik One", "sans-serif"],
      },
      borderWidth: {
        "2": "2px",
      },
      inset: {
        "1/10": "10%",
        "1/5": "20%",
        "2/5": "40%",
        "1/2": "50%",
        "3/5": "60%",
        "7/10": "70%",
        "4/5": "80%",
        "9/10": "90%",
      },
      boxShadow: {
        right: "4px 0 6px rgba(0, 0, 0, 0.2)",
        darkInset: "inset 0 0 20px rgba(0, 0, 0, 0.2)",
        shadowSteps: "0px 4px 4px 0px #143536",
        shadowFillBlank: "0px 0px 3.2px 0px #32394026 inset",
        shadowCards: "0px 4px 4px 0px #00000040;"
      },
      backgroundPointClickValidate: {
        "custom-gradient": "linear-gradient(180deg, #FEDBDB 0%, #E4B1B1 100%)",
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        'input[type="number"]::-webkit-inner-spin-button': {
          "-webkit-appearance": "none",
          margin: "0",
        },
        'input[type="number"]::-webkit-outer-spin-button': {
          "-webkit-appearance": "none",
          margin: "0",
        },
        'input[type="number"]': {
          "-moz-appearance": "textfield",
        },

        ".custom-scrollbar::-webkit-scrollbar": {
          width: "8px",
        },
        ".custom-scrollbar::-webkit-scrollbar-track": {
          background: "rgba(150, 150, 150, 0.5)",
          borderRadius: "10px",
          border: "solid 1px rgba(100, 100, 100, 0.1)",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb": {
          background: "rgba(100, 100, 100, 0.5)",
          borderRadius: "10px",
        },
        // Nuevo diseño de scrollbar para roles diferentes a estudiante 
        ".new-scrollbar::-webkit-scrollbar": {
          width: "6px",
        },
        ".new-scrollbar::-webkit-scrollbar-track": {
          background: "#E8E8E8",
          borderRadius: "10px",
          // border: "solid 2px #f44336",
        },
        ".new-scrollbar::-webkit-scrollbar-thumb": {
          background: "#16161699",
          borderRadius: "4px",
        },
        ".custom-checkbox .ant-checkbox-inner": {
          borderRadius: "2px",
          border: "1px solid #103E41",
        },
        ".custom-checkbox .ant-checkbox-input:checked + .ant-checkbox-inner": {
          backgroundColor: "#103E41", /* Fondo cuando está checado */
          borderColor: "#103E41" /* Borde cuando está checado */
        },
        ".custom-checkbox:hover .ant-checkbox-inner": {
          borderColor: "#103E41" /* Borde al hacer hover */
        },
        ".custom-checkbox .ant-checkbox-checked .ant-checkbox-inner": {
          backgroundColor: "#103E41", /* Fondo cuando está checado */
          borderColor: "#103E41", /* Borde cuando está checado */
        },

      });
    },
  ],
};

export default config;
