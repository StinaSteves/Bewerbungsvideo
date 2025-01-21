import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-lfs-files',
      closeBundle() {
        copyFileSync('Videos/Bewerbungsvideo.mp4', 'dist/Videos/Bewerbungsvideo.mp4');
      },
    },
  ],
  base: '/Bewerbungsvideo/', // Ersetze <repository-name> durch den Namen deines Repositories
});