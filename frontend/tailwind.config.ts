import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttonsColor: "#F6A90A",
        buttonsColorHover:"#BA8210",
        backgroundAuthColumn2: "#F4F3EF",
        borderColorInputs:"#F8C762"
      },
    },
  },
  plugins: [],
};
export default config;
