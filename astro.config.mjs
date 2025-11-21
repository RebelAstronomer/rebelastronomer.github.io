// @ts-check

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@config': '/src/config',
        '@lib': '/src/lib',
        '@api': '/src/api',
        '@pages': '/src/pages',
        '@types': '/src/types',
        '@utils': '/src/utils',
        '@layouts': '/src/layouts',
        '@styles': '/src/styles',
        '@content': '/src/content',
      },
    },
  },

  integrations: [mdx(), sitemap()],
})
