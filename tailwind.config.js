/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a56db',
        'primary-dark': '#1e40af',
        'primary-light': '#3b82f6',
      },
    },
  },
  plugins: [],
  // 避免与 MUI 样式冲突
  corePlugins: {
    preflight: false,
  },
};
