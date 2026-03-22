/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#e9edff",
          200: "#cfd6ff",
          300: "#aeb9ff",
          400: "#8894ff",
          500: "#5f6df7",
          600: "#4450db",
          700: "#363fb1",
          800: "#2d358d",
          900: "#272f70",
        },
        accent: "#cba56c",
        ink: "#111827",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(17, 24, 39, 0.12)",
        card: "0 16px 40px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(95,109,247,0.35), transparent 35%), radial-gradient(circle at 80% 10%, rgba(203,165,108,0.2), transparent 25%)",
      },
    },
  },
  plugins: [],
};
