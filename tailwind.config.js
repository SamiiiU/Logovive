/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        zigzag: "zig 2s infinite",
      },
      keyframes: {
        zig: {
          '0%': { transform: 'translateX(-20%)' },
          '50%': { transform: 'translateX(20%)' },
          '100%': { transform: 'translateX(-20%)' },
        },
      },
    },
  },
  plugins: [],
};
