// vite.config.js
import { defineConfig } from 'vite'; 
import angular from 'vite-plugin-angular'; 

export default defineConfig({ 
  plugins: [angular()], 
  server: { 
    allowedHosts: ['All'], 
  }, 
});