import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	build: { outDir: 'dist', assetsDir: 'assets' },
	plugins: [reactRefresh(), svgr()],
	server: { open: '/' },
	publicDir: 'public',
	root: './',
	base: '/',
});
