/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-card': [
          '0px 1px 0px 0px #1A1A1A12',
          '0px 1px 0px 0px #CCCCCC80 inset',
          '0px -1px 0px 0px #0000002B inset',
          '-1px 0px 0px 0px #00000021 inset',
          '1px 0px 0px 0px #00000021 inset',
        ].join(', '),
      },
    },
  },
  plugins: [],
}