// Theme configuration for Akordium

export const themeConfig = {
  colors: {
    primary: {
      DEFAULT: "#3b2e83", // Dark Blue-Purple
      light: "#4d3ea5",
      dark: "#2a2161",
    },
    secondary: {
      DEFAULT: "#673b75", // Medium Purple
      light: "#7a4889",
      dark: "#542e61",
    },
    tertiary: {
      DEFAULT: "#c1565b", // Brick Red
      light: "#d4686d",
      dark: "#a44549",
    },
    accent: {
      DEFAULT: "#944868", // Purple-Pink
      light: "#a85a7a",
      dark: "#803656",
    },
    base: {
      DEFAULT: "#fcfcfc", // Off-white background
      foreground: "#3b2e83", // Primary text color
      subtle: "#f5f5f7", // Subtle background variation
      muted: "#eaeaec", // Muted background
      hover: "#f0f0f2", // Hover state
    },
  },
  fonts: {
    sans: "Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
    heading: "Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
  },
  spacing: {
    container: {
      padding: "2rem",
      maxWidth: "1400px",
    },
  },
  borderRadius: {
    small: "0.25rem",
    medium: "0.5rem",
    large: "1rem",
  },
  shadows: {
    small: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    medium: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    large: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
  transitions: {
    default: "0.3s ease",
    fast: "0.15s ease",
    slow: "0.5s ease",
  },
};

// Helper functions
export function getColor(path: string): string {
  const parts = path.split(".");
  let result: any = themeConfig.colors;

  for (const part of parts) {
    if (result[part] === undefined) {
      return "";
    }
    result = result[part];
  }

  return typeof result === "string" ? result : "";
} 