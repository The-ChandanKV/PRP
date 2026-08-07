/** @type {import('tailwindcss').Config} */

/* __STITCH_THEME_INJECTED__ */
// Auto-merged from Google Stitch tailwind.config (full theme, no loss)
const __stitchThemeExtend = {
  colors: {
    "on-tertiary": "#3c0091",
    "on-primary-fixed": "#0f0069",
    outline: "#918fa1",
    "on-secondary": "#003640",
    "primary-fixed": "#e2dfff",
    "on-secondary-fixed-variant": "#004e5c",
    "secondary-fixed-dim": "#4cd7f6",
    "on-tertiary-container": "#e3d5ff",
    "inverse-on-surface": "#283044",
    "surface-variant": "#2d3449",
    "on-error-container": "#ffdad6",
    "on-tertiary-fixed-variant": "#5516be",
    "tertiary-fixed-dim": "#d0bcff",
    surface: "#0b1326",
    "on-secondary-fixed": "#001f26",
    "on-background": "#dae2fd",
    "tertiary-fixed": "#e9ddff",
    "secondary-container": "#03b5d3",
    secondary: "#4cd7f6",
    error: "#ffb4ab",
    primary: "#c3c0ff",
    "error-container": "#93000a",
    "surface-container-highest": "#2d3449",
    background: "#0b1326",
    "on-primary": "#1d00a5",
    "surface-container-lowest": "#060e20",
    "surface-bright": "#31394d",
    "on-surface-variant": "#c7c4d8",
    "surface-container": "#171f33",
    "on-surface": "#dae2fd",
    "on-primary-container": "#dad7ff",
    "inverse-surface": "#dae2fd",
    "inverse-primary": "#4d44e3",
    "outline-variant": "#464555",
    "on-tertiary-fixed": "#23005c",
    "surface-tint": "#c3c0ff",
    "surface-container-low": "#131b2e",
    "tertiary-container": "#6f3dd9",
    "on-primary-fixed-variant": "#3323cc",
    tertiary: "#d0bcff",
    "surface-container-high": "#222a3d",
    "on-error": "#690005",
    "on-secondary-container": "#00424e",
    "secondary-fixed": "#acedff",
    "primary-fixed-dim": "#c3c0ff",
    "primary-container": "#4f46e5",
    "surface-dim": "#0b1326",
  },
  borderRadius: {
    DEFAULT: "0.125rem",
    lg: "0.25rem",
    xl: "0.5rem",
    full: "0.75rem",
  },
  spacing: {
    transition_smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    xs: "4px",
    unit: "4px",
    sm: "8px",
    "2xl": "64px",
    gutter: "24px",
    xl: "40px",
    margin: "32px",
    lg: "24px",
    md: "16px",
  },
  fontFamily: {
    "display-lg": ["Inter"],
    "mono-code": ["JetBrains Mono"],
    "body-base": ["Inter"],
    "label-caps": ["Inter"],
    "headline-md": ["Inter"],
    "body-sm": ["Inter"],
    "display-lg-mobile": ["Inter"],
  },
  fontSize: {
    "display-lg": [
      "48px",
      {
        lineHeight: "1.1",
        letterSpacing: "-0.02em",
        fontWeight: "700",
      },
    ],
    "mono-code": [
      "14px",
      {
        lineHeight: "1.5",
        fontWeight: "400",
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
    "label-caps": [
      "12px",
      {
        lineHeight: "1",
        letterSpacing: "0.05em",
        fontWeight: "600",
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
    "display-lg-mobile": [
      "36px",
      {
        lineHeight: "1.2",
        letterSpacing: "-0.02em",
        fontWeight: "700",
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
