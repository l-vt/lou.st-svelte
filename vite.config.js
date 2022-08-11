import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import preprocess from "svelte-preprocess";
import image from "svelte-image";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: {
      ...image()
    }
  }), preprocess()],

})
