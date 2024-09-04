/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roxborough: ["Roxborough"],
        "amsterdam-four": ["Amsterdam-Four"],
        darkergrotesque: ["DarkerGrotesque"],
        lora: ["Lora"],
      },

      backgroundImage: {
        photo: "url('/src/assets/bgphoto.jpg')",
        photobw: "url('/src/assets/bgphotobw.png')",
        gradorange: "url('/src/assets/gradorange.png')",
        gradbg: "url('/src/assets/gradbg.png')",
        profilebg: "url('/src/assets/profilebg.png')",
        contactbg: "url('/src/assets/greekcontact.jpg')",
        ge: "url('/src/assets/ge.png')",
        portfolio: "url('/src/assets/portfolio.png')",
        kgraph: "url('/src/assets/kgraph.png')",
        cane: "url('/src/assets/blind.png')",
        yta: "url('/src/assets/yta.png')",
        twitter: "url('/src/assets/twitter.png')",
        robarm: "url('/src/assets/robarm.png')",
        
        grad1: "url('/src/assets/grad1.png')",
        grad2: "url('/src/assets/grad2.png')",
        grad3: "url('/src/assets/grad3.png')",
        grad4: "url('/src/assets/grad4.png')",
        grad5: "url('/src/assets/grad5.png')",
        grad6: "url('/src/assets/grad6.png')",
        grad7: "url('/src/assets/grad7.png')",
        grad8: "url('/src/assets/grad8.png')",
        grad9: "url('/src/assets/grad9.png')",
        grad10: "url('/src/assets/grad10.png')",
        grad11: "url('/src/assets/grad11.png')",
        grad12: "url('/src/assets/grad12.png')",
        grad13: "url('/src/assets/grad13.png')",
        grad14: "url('/src/assets/grad14.png')",
        grad15: "url('/src/assets/grad15.png')",
      },

      animation:{
        spintext : "spintext linear 20s infinite",
        marquee: "marqueeAnimation linear 20s infinite",
      },

      keyframes: {
        spintext: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marqueeAnimation: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
