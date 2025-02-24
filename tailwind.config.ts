import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1280px" },
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      navmd: { max: "870px" },
    },
    backgroundImage: {
      bg2: 'url("../assets/bg-2.jpg")',
      jobbg:'url("../assets/Job-Portal-Page/footer/officebg.jpg")',
    },
    extend: {
      animation: {
        "animate-bounce": "bounce 0.8s linear infinite",
        "spin-slow": "spin 6s linear infinite",
        "bounce-slow": "bounce 8s linear infinite",
        "bounce-moderate": "bounce 3s linear infinite",
        "spin-super-slow": "spin 15s linear infinite",
        "spin-10": "spin 10s linear infinite",
        "spin-15": "spin 15s linear infinite",
        "marqueer2l": "marquee2r 15s linear infinite",
        'marqueenew': 'marqueenew 15s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee2': 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee2r: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueenew: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      boxShadow: {
        md: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
        "3xl":
          "0 6px 20px 0 rgba(0, 0, 0, 0.15),0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        newd: "0px 0px 40px 0px #7B90FF26",
        "5xl": "0px 4px 10px rgba(0, 0, 0, 0.1)",
        sqbntsh: "0px 8px 20px rgba(0, 0, 0, 0.3)",
        sqbntsh2: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        "9xl": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        "2x9xl": "rgba(99, 99, 99, 0.5) 0px 4px 16px 0px",
        '24xl':'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      },
      dropShadow: {
        sm: "0px 0px 40px rgba(123, 144, 255, 0.1)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Use Roboto as the default sans-serif font
      },
      backgroundImage: {
        jobback:
          'url("https://jobi-nextjs.vercel.app/_next/static/media/img_27.26aeb87c.jpg")',
        univer: "linear-gradient(45deg, #f7edf8 30%, #fef1e8 90%)",
        cardlinkbg: "linear-gradient(45deg, #FFA500 30%, #FF4500 90%)",
        howwebtn: "linear-gradient(to right, #FFA07A, #FF6347)",
        tablecol: "linear-gradient(45deg, #f7edf8 30%, #fef1e8 90%)",
        coursehero:"linear-gradient(to right,black,#004a2d)",
        addmisscard:'url("../assets/Admisssion2024/backcard.webp")',
        predictorhero:'url("../assets/CollegePredictor/background.png")'
      },
      transitionProperty: {
        filter: "filter 0.3s",
      },
    },
  },
  variants: {},
  plugins: [],
};

export default config;
