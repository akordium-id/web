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
          // Base colors
          base: {
            DEFAULT: "#fcfcfc", // Off-white background
            foreground: "#3b2e83", // Primary text color
          },
          primary: {
            DEFAULT: "#3b2e83", // Dark Blue-Purple
            foreground: "#ffffff",
            light: "#4d3ea5", // Lighter version for hover
            dark: "#2a2161", // Darker version
          },
          secondary: {
            DEFAULT: "#673b75", // Medium Purple
            foreground: "#ffffff",
            light: "#7a4889", // Lighter version for hover
            dark: "#542e61", // Darker version
          },
          tertiary: {
            DEFAULT: "#c1565b", // Brick Red
            foreground: "#ffffff",
            light: "#d4686d", // Lighter version for hover
            dark: "#a44549", // Darker version
          },
          accent: {
            DEFAULT: "#944868", // Purple-Pink
            foreground: "#ffffff",
            light: "#a85a7a", // Lighter version for hover
            dark: "#803656", // Darker version
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
        typography: {
          DEFAULT: {
            css: {
              maxWidth: 'none',
              color: 'inherit',
            },
          },
        },
      },
    },
  }),
  selfURL: import.meta.url,
};
