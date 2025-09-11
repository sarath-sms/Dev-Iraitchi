import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build' // ← change output folder name here
  },
  plugins: [react(), VitePWA({
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'sw.js',
    registerType: 'autoUpdate',
    injectRegister: "script", // value changed false to script

    manifest: {
      name: 'frontend',
      short_name: 'iraitchi',
      description: 'iraitchi.com is an online platform that connects end customers with a wide range of fresh, high-quality meats—sourced directly from the market. We make it easy, fast, and reliable for you to order your choice of meat from the comfort of your home.', // built using @vite-pwa/p wa@latest .-- --template react
      background_color: "#26355D",
      theme_color: '#ffeb3b',
      icons: [{
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      }, {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      }, {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }, {
        src: 'maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      }],
    },

    injectManifest: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
    },

    devOptions: {
      enabled: true, // changes value false to true
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
    workbox: {
      additionalManifestEntries: [
        { url: "/index.html", revision: Date.now().toString() } // forces update
      ]
    }
  })],
})

