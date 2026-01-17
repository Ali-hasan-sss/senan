import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    // Plugin to resolve figma:asset/ imports
    {
      name: 'figma-asset-resolver',
      resolveId(id) {
        if (id.startsWith('figma:asset/')) {
          // Extract the filename from figma:asset/filename.png
          const filename = id.replace('figma:asset/', '')
          // Resolve to the actual file path in src/assets
          return path.resolve(__dirname, './src/assets', filename)
        }
      },
    },
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0', // Allow access from network
    port: 5173, // Default Vite port
    strictPort: false, // Try next available port if 5173 is taken
  },
})
