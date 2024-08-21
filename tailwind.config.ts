import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        twhite: '#FFFFFF',
        tlightgray : '#F3F4F6',
        tgray : '#D1D5DB',
        tdarkgray : '#6B7280',
        tdark : '#1D1D1D',
        tyellow : '#F2D604',
        tgreen : '#01B130',
        tred : '#CB0101',
        tblue : '#006EFF',
        tdark2 : '#0065EA',
        tdarkblue1 : '#171923',
        tdarkblue2 : '#292C3B',
      },
    },
  },
  plugins: [],
};
export default config;
