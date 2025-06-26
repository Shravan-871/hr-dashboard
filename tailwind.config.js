/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: 'class',
    content: [
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          background: 'var(--background)',
          foreground: 'var(--foreground)',
        }
      }
    },
    plugins: [],
  };
  
export default config;
  
