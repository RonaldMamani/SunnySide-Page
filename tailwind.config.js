/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerMob': "url(./src/assets/mobile/image-header.jpg)",
        'eggMob': "url(./src/assets/mobile/image-transform.jpg)",
        'shakeMob': "url(./src/assets/mobile/image-stand-out.jpg)",
        'orangeMob': "url(./src/assets/mobile/image-photography.jpg)",
        'cherryMob': "url(./src/assets/mobile/image-graphic-design.jpg)",

        'header': "url(./src/assets/desktop/image-header.jpg)",
        'egg': "url(./src/assets/desktop/image-transform.jpg)",
        'shake': "url(./src/assets/desktop/image-stand-out.jpg)",
        'orange': "url(./src/assets/desktop/image-photography.jpg)",
        'cherry': "url(./src/assets/desktop/image-graphic-design.jpg)",
      }
    },
  },
  plugins: [],
}

