/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'orange-pink': 'linear-gradient(to right, #ef572a, #e80e82)',
      },
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
        fadeUp: "fadeUp 500ms linear",
        fadeDownNav: "fadeDownNav 500ms linear",
        fadeRight: "fadeRight 500ms linear",
        fadeDown: "fadeDown 500ms linear",
      },
      keyframes: {
        zig: {
          '0%': { transform: 'translateX(-20%)' },
          '50%': { transform: 'translateX(20%)' },
          '100%': { transform: 'translateX(-20%)' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(50%)',  opacity : '0' },
          '100%': { transform: 'translateY(0)' , opacity : '100' },
        },
        fadeDown: {
          '0%': { transform: 'translateY(-100%)' , opacity : '0' },
          '100%': { transform: 'translateY(0)' , opacity : '100' },
        },
        fadeRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeDownNav: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
