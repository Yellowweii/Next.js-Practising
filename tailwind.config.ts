import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        transfer: "transfer 2s ease-in-out infinite alternate",
        move: "move 2s ease-in-out infinite alternate",
      },
      keyframes: {
        transfer: {
          "0%": { transform: "translateY(-15px)" },
          "100%": { transform: "translateY(0px)", scale: "1.03" },
        },
        move: {
          "0%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
