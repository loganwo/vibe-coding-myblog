
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
plugins: [react()],
base: '/vibe-coding-myblog/', // ⚠️ 這裡要改成你的 repo 名稱
});
