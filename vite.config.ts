import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  root: 'src',
  define: {
    'process.env': {},
  },
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: "import {jsx} from '@emotion/react';",
  },
});