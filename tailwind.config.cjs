/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    fontFamily: {
      hind: ['Hind', 'system-ui'],
    },
    backgroundImage: {
      hero: "url('./images/shoes-hero.png')",
    },
  },
  plugins: [],
}
