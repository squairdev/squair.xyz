/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      animation: {
        'spin-reverse': 'spin-reverse 1s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
            from: {
               transform: 'rotate(360deg)',
            },
            to: {
               transform: 'rotate(0deg)',
            },
        },
      },
    }
  },
};

export default config;