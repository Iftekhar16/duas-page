/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'dark1': '#0e0f15',
        'dark2': '#393939',
        
        'gray1': '#868686',
        'gray2': '#E8F0F5',
        'gray3': '#F7F8FA',
        
        'light1': '#FFFFFF',

        'accent1': '#1FA45B',
      },
      boxShadow: {
        'logo-light': '0 4px 20px 0px #1FA45B40',
      }
    },
  },
  plugins: [],
};
