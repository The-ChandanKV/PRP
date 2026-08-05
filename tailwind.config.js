/** @type {import('tailwindcss').Config} */

/* __STITCH_THEME_INJECTED__ */
// Auto-merged from Google Stitch tailwind.config (full theme, no loss)
const __stitchThemeExtend = {
  colors: {
    "on-tertiary": "#3c0091",
    "surface-container": "#171f33",
    "inverse-surface": "#dae2fd",
    surface: "#0b1326",
    "on-secondary-container": "#00424e",
    "on-error": "#690005",
    "surface-dim": "#0b1326",
    "on-surface-variant": "#c7c4d8",
    "on-surface": "#dae2fd",
    "error-container": "#93000a",
    "on-primary": "#1d00a5",
    "on-error-container": "#ffdad6",
    "surface-container-high": "#222a3d",
    "tertiary-fixed": "#e9ddff",
    "tertiary-container": "#6f3dd9",
    "inverse-on-surface": "#283044",
    "on-tertiary-fixed-variant": "#5516be",
    "primary-fixed-dim": "#c3c0ff",
    "inverse-primary": "#4d44e3",
    "surface-bright": "#31394d",
    secondary: "#4cd7f6",
    "on-tertiary-fixed": "#23005c",
    "secondary-container": "#03b5d3",
    "on-primary-fixed": "#0f0069",
    "on-primary-container": "#dad7ff",
    "surface-container-highest": "#2d3449",
    "surface-variant": "#2d3449",
    outline: "#918fa1",
    "on-tertiary-container": "#e3d5ff",
    "on-background": "#dae2fd",
    background: "#0b1326",
    "on-secondary-fixed": "#001f26",
    "on-secondary-fixed-variant": "#004e5c",
    primary: "#c3c0ff",
    "on-secondary": "#003640",
    "primary-container": "#4f46e5",
    "secondary-fixed": "#acedff",
    "surface-container-low": "#131b2e",
    "on-primary-fixed-variant": "#3323cc",
    "secondary-fixed-dim": "#4cd7f6",
    "outline-variant": "#464555",
    tertiary: "#d0bcff",
    "primary-fixed": "#e2dfff",
    error: "#ffb4ab",
    "surface-container-lowest": "#060e20",
    "tertiary-fixed-dim": "#d0bcff",
    "surface-tint": "#c3c0ff",
  },
  borderRadius: {
    DEFAULT: "0.125rem",
    lg: "0.25rem",
    xl: "0.5rem",
    full: "0.75rem",
  },
  spacing: {
    xl: "40px",
    xs: "4px",
    lg: "24px",
    unit: "4px",
    margin: "32px",
    gutter: "24px",
    "2xl": "64px",
    md: "16px",
    transition_smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    sm: "8px",
  },
  fontFamily: {
    "mono-code": ["JetBrains Mono", "monospace"],
    "headline-md": ["Inter", "sans-serif"],
    "body-sm": ["Inter", "sans-serif"],
    "label-caps": ["Inter", "sans-serif"],
    "display-lg": ["Inter", "sans-serif"],
    "display-lg-mobile": ["Inter", "sans-serif"],
    "body-base": ["Inter", "sans-serif"],
  },
  fontSize: {
    "mono-code": [
      "14px",
      {
        lineHeight: "1.5",
        fontWeight: "400",
      },
    ],
    "headline-md": [
      "24px",
      {
        lineHeight: "1.3",
        letterSpacing: "-0.01em",
        fontWeight: "600",
      },
    ],
    "body-sm": [
      "14px",
      {
        lineHeight: "1.5",
        letterSpacing: "0em",
        fontWeight: "400",
      },
    ],
    "label-caps": [
      "12px",
      {
        lineHeight: "1",
        letterSpacing: "0.05em",
        fontWeight: "600",
      },
    ],
    "display-lg": [
      "48px",
      {
        lineHeight: "1.1",
        letterSpacing: "-0.02em",
        fontWeight: "700",
      },
    ],
    "display-lg-mobile": [
      "36px",
      {
        lineHeight: "1.2",
        letterSpacing: "-0.02em",
        fontWeight: "700",
      },
    ],
    "body-base": [
      "16px",
      {
        lineHeight: "1.6",
        letterSpacing: "0em",
        fontWeight: "400",
      },
    ],
  },
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...__stitchThemeExtend,
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          900: "#312e81",
          950: "#1e1b4b",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
