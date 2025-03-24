import { defineConfig, Preset } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTypography from "@twind/preset-typography";

export default {
  ...defineConfig({
    presets: [
      presetTailwind() as Preset,
      presetAutoprefix() as Preset,
      presetTypography() as Preset
    ],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      rules: [
        ['animate-accordion-down', { animation: 'accordion-down 0.2s ease-out' }],
        ['animate-accordion-up', { animation: 'accordion-up 0.2s ease-out' }],
      ],
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "#3a2f7d", // Deep purple
            foreground: "#ffffff",
            light: "#5a4a9d", // Lighter purple for hover states
            dark: "#2a1f5d", // Darker purple for dark mode
          },
          secondary: {
            DEFAULT: "#c75d5d", // Coral/salmon
            foreground: "#ffffff",
            light: "#e77d7d", // Lighter coral for hover states
            dark: "#a73d3d", // Darker coral for dark mode
          },
          tertiary: {
            DEFAULT: "#F05D23", // Orange
            foreground: "#ffffff",
            light: "#F27D4D", // Lighter orange for hover states
            dark: "#C74D23", // Darker orange for dark mode
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        },
      },
    },
  }),
  selfURL: import.meta.url,
};
