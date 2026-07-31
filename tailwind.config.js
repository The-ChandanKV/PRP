/** @type {import('tailwindcss').Config} */

  /* __STITCH_THEME_INJECTED__ */
  // Auto-merged from Google Stitch tailwind.config (full theme, no loss)
  const __stitchThemeExtend = {
    "colors": {
      "surface-container-high": "#222a3d",
      "primary-fixed": "#e2dfff",
      "inverse-on-surface": "#283044",
      "surface-container-highest": "#2d3449",
      "on-secondary-fixed-variant": "#004e5c",
      "on-primary-fixed-variant": "#3323cc",
      "on-background": "#dae2fd",
      "secondary-fixed": "#acedff",
      "on-primary-container": "#dad7ff",
      "tertiary-fixed": "#e9ddff",
      "surface-tint": "#c3c0ff",
      "surface-container": "#171f33",
      "on-secondary": "#003640",
      "surface-container-lowest": "#060e20",
      "inverse-surface": "#dae2fd",
      "secondary": "#4cd7f6",
      "surface": "#0b1326",
      "on-primary": "#1d00a5",
      "surface-variant": "#2d3449",
      "on-error": "#690005",
      "on-surface": "#dae2fd",
      "on-secondary-container": "#00424e",
      "on-surface-variant": "#c7c4d8",
      "primary-fixed-dim": "#c3c0ff",
      "tertiary-fixed-dim": "#d0bcff",
      "secondary-fixed-dim": "#4cd7f6",
      "primary-container": "#4f46e5",
      "outline-variant": "#464555",
      "on-error-container": "#ffdad6",
      "on-tertiary-fixed-variant": "#5516be",
      "on-tertiary": "#3c0091",
      "secondary-container": "#03b5d3",
      "error-container": "#93000a",
      "surface-container-low": "#131b2e",
      "on-secondary-fixed": "#001f26",
      "background": "#0b1326",
      "on-primary-fixed": "#0f0069",
      "error": "#ffb4ab",
      "outline": "#918fa1",
      "on-tertiary-fixed": "#23005c",
      "on-tertiary-container": "#e3d5ff",
      "surface-bright": "#31394d",
      "tertiary": "#d0bcff",
      "surface-dim": "#0b1326",
      "inverse-primary": "#4d44e3",
      "tertiary-container": "#6f3dd9",
      "primary": "#c3c0ff"
    },
    "borderRadius": {
      "DEFAULT": "0.125rem",
      "lg": "0.25rem",
      "xl": "0.5rem",
      "full": "0.75rem"
    },
    "spacing": {
      "xl": "40px",
      "xs": "4px",
      "unit": "4px",
      "lg": "24px",
      "sm": "8px",
      "transition_smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      "md": "16px",
      "margin": "32px",
      "2xl": "64px",
      "gutter": "24px"
    },
    "fontFamily": {
      "mono-code": [
        "JetBrains Mono"
      ],
      "headline-md": [
        "Inter"
      ],
      "body-base": [
        "Inter"
      ],
      "label-caps": [
        "Inter"
      ],
      "body-sm": [
        "Inter"
      ],
      "display-lg-mobile": [
        "Inter"
      ],
      "display-lg": [
        "Inter"
      ]
    },
    "fontSize": {
      "mono-code": [
        "14px",
        {
          "lineHeight": "1.5",
          "fontWeight": "400"
        }
      ],
      "headline-md": [
        "24px",
        {
          "lineHeight": "1.3",
          "letterSpacing": "-0.01em",
          "fontWeight": "600"
        }
      ],
      "body-base": [
        "16px",
        {
          "lineHeight": "1.6",
          "letterSpacing": "0em",
          "fontWeight": "400"
        }
      ],
      "label-caps": [
        "12px",
        {
          "lineHeight": "1",
          "letterSpacing": "0.05em",
          "fontWeight": "600"
        }
      ],
      "body-sm": [
        "14px",
        {
          "lineHeight": "1.5",
          "letterSpacing": "0em",
          "fontWeight": "400"
        }
      ],
      "display-lg-mobile": [
        "36px",
        {
          "lineHeight": "1.2",
          "letterSpacing": "-0.02em",
          "fontWeight": "700"
        }
      ],
      "display-lg": [
        "48px",
        {
          "lineHeight": "1.1",
          "letterSpacing": "-0.02em",
          "fontWeight": "700"
        }
      ]
    }
  };
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { ...__stitchThemeExtend, 
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          900: '#312e81',
          950: '#1e1b4b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
