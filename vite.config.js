import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Bewerbungsvideo/', // Ersetze <repository-name> durch den Namen deines Repositories
});