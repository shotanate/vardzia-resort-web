import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          main: "#92264a",
        },
      },
      container: {
        center: true,
      },
      fontFamily: {
        "archyedt-bold": ["var(--font-archyedt-bold)"],
        "archyedt-thin": ["var(--font-archyedt-thin)"],
        "firago-regular": ["var(--font-firago-regular)"],
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideUp: "slideUp 0.5s ease-out forwards",
      },
    },
  },
} satisfies Config;
