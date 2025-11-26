import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import path from 'path';

const projectRoot = path.resolve(__dirname, './'); 

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': path.resolve(projectRoot, './src'), 
    },
  },
});