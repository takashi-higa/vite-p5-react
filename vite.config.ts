import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { injectHtml, minifyHtml } from 'vite-plugin-html';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    minifyHtml(),
    injectHtml({
      data: {
        title: 'vite react p5',
      },
      tags: [
        {
          tag: 'meta',
          attrs: {
            name: 'description',
            content: 'デスクリプション',
          },
          injectTo: 'head',
        },
      ],
    }),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  css: {
    postcss: {
      plugins: [require('autoprefixer')()],
    },
  },
});
