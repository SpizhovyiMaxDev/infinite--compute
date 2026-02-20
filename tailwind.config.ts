import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surfacePrimaryDark: "#00002B",
        surfaceAccent: "#13FF89",
        textOnSurface: "#FFFCF8",
        textHeadings: "#00002B",
        textBody: "#273356",
        textOnSurfaceSecondary: "#858396",
        surfaceSecondary: "#F2F2F2",
        surfacePage: "#FFFCF8",
        surfacePrimary: "#FFFCF8",
        surfaceTertiaryDark: "#08082D",
        surfaceQuaternaryDark: "#101042",
        iconPrimary: "#101A36",
        iconOnSurface: "#FAFAFA",
        borderPrimary: "#E8E8E8",
        borderOnSurface: "#FFFCF8",
        borderAccent: "#13FF89",
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.05" }],
        "heading-h1": ["clamp(2.5rem, 8vw, 4.5rem)", { lineHeight: "1.1" }],
        "heading-h2": ["clamp(1.8rem, 5vw, 2.5rem)", { lineHeight: "1.1" }],
        "heading-h3": ["clamp(1.5rem, 4vw, 2.125rem)", { lineHeight: "1.25" }],
        "heading-h4": ["clamp(1.25rem, 3vw, 1.625rem)", { lineHeight: "1.25" }],
        "body-large": ["1.125rem", { lineHeight: "1.25" }],
        "body-medium": ["1rem", { lineHeight: "1.3" }],
        "body-small": ["0.875rem", { lineHeight: "1.3" }],
        "body-caption": ["1.125rem", { lineHeight: "1.25" }],
      },
      fontFamily: {
        sans: ['"TWK Lausanne"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      spacing: {
        "component-padding-inner-medium": "6px",
        "component-padding-width-large": "16px",
        "component-height-medium": "42px",
        "container-padding-inner-xsmall": "6px",
        "container-padding-inner-small": "16px",
        "container-padding-inner-medium": "24px",
        "component-padding-inner-large": "8px",
        "component-height-large": "52px",
        "container-padding-inner-large": "32px",
        "container-content-padding-inner": "64px",
        "section-padding-width": "24px",
        "section-padding-height": "124px",
        "container-padding-width-large": "32px",
        "container-padding-height-large": "32px",
        "container-padding-inner-xlarge": "48px",
      },
      borderColor: {
        primary: "#E8E8E8",
        onSurface: "#FFFCF8",
        accent: "#13FF89",
      },
      borderRadius: {
        pill: "6px",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, #00002B 0%, #08082D 50%, #0E112B 100%)",
        "surface-gradient":
          "linear-gradient(to bottom, #00002B, #101042)",
      },
    },
  },
  plugins: [],
} satisfies Config;
