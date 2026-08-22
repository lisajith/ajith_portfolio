import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tailwindscrollbar from 'tailwind-scrollbar'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      ...tailwindcss(), // Use Tailwind CSS properly
      apply: 'build', // Apply the plugin in the build process
    },
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Ajith Malle Portfolio',
        short_name: 'Ajith Portfolio',
        description: 'Personal Portfolio App of Ajith Malle',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/images/logo2.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/logo2.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})