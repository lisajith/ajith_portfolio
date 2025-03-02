import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tailwindscrollbar from 'tailwind-scrollbar'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      ...tailwindcss(), // Use Tailwind CSS properly
      apply: 'build', // Apply the plugin in the build process
    },
    react()
  ],
})
