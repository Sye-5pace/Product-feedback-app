const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
   pwa: {
    name: 'Product Feedback App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // Optional Workbox configuration
    workboxPluginMode: 'InjectManifest', // Or 'GenerateSW' for more control
    workboxOptions: {
      swSrc: './src/registerServiceWorker.ts', // Path to your service worker
      // Other Workbox options
    }
  }
})
