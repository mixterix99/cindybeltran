/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}", // Incluye la carpeta 'pages'
    "./src/**/*.{html,js}",   // Incluye la carpeta 'src'
    "./index.html"            // Asegúrate de incluir el archivo 'index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
