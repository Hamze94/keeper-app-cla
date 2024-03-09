module.exports = {
  content: ["./src/**/*.{html,js,jsx,node_modules/flowbite-react/lib/esm/**/*.js}"], // it means all html and js files inside src folder


  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}