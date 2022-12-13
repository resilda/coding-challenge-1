/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      sans: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto'],
    },
    zIndex: {
      top: 1000,
    },
    extend: {
      colors: {
        mono: {
          0: 'var(--dark)',
          1: 'var(--light)',
        },
        gray: {
          1: 'var(--gray-1)',
          2: 'var(--gray-2)',
          3: 'var(--gray-3)',
        },
        primary: {
          1: 'var(--primary-1)',
          2: 'var(--primary-2)',
          3: 'var(--primary-3)',
        },
        status: {
          0: 'var(--status-0)',
          1: 'var(--status-1)',
          2: 'var(--status-2)',
        },
        error: 'var(--error)',
        warning: 'var(--warning)',
        success: 'var(--success)',
        info: 'var(--info)',
      },
      screens: {
        '2xl': '1600px',
      },
      boxShadow: {
        'right-2': '2px 0px 2px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
