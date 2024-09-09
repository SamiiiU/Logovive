/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',   // Custom screen size for extra small devices
        'sm': '600px',   // Small devices
        'md': '860px',   // Medium devices (tablets)
        'lg': '1024px',  // Large devices (desktops)
        'xl': '1300px',  // Extra large devices
        '2xl': '1536px', // 2x large devices
      },
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
