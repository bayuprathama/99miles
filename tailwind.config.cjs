/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    fontFamily: {
      hind: ['Hind', 'system-ui'],
    },
    backgroundImage: {
      hero: "url('https://res.cloudinary.com/dk7ghcqgs/image/upload/v1675443601/shoes-hero_mqk9vg.png')",
    },
  },
  plugins: [],
}
