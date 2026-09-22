import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF9",
        foreground: "#18181B",
        muted: "#71717A",
        border: "#E4E4E7",
        surface: "#F4F4F5",
        accent: {
          DEFAULT: "#7DB8E8",
          light: "#EAF3FC",
          dark: "#5A9BD4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
