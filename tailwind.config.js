module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        expand: "expand 2s cubic-bezier(0.8, 0, 1, 1) ",
      },
      keyframes: {
        expand: {
          from: {
            height: "0px",
          },
          to: {
            height: "200px",
          },
        },
        shrink: {
          to: {
            height: "0px",
          },
        },
      },
    },
  },
  plugins: [],
};
