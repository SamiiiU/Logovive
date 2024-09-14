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
      },
      keyframes: {
        zig: {
          '0%': { transform: 'translateX(-20%)' },
          '50%': { transform: 'translateX(20%)' },
          '100%': { transform: 'translateX(-20%)' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(10%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
