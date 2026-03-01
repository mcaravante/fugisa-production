/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // VAG Rounded para títulos y logotipo
        title: ['VAG Rounded', 'sans-serif'],
        // Century Gothic para subtítulos y bajada de logotipo
        subtitle: ['Century Gothic', 'sans-serif'],
        // Poppins para cuerpo de texto
        body: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
          light: '#EF4444',
        },
        secondary: {
          DEFAULT: '#1F2937',
          light: '#374151',
        },
      },
    },
  },
  plugins: [],
}
