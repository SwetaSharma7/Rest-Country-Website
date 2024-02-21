import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["@fortawesome/free-solid-svg-icons"]
    }
  }
});


// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
