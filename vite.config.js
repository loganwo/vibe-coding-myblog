import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ 修改 base 为你的 GitHub repo 名称
// 如果 repo 是 "myblog"，这里要写 "/myblog/"
export default defineConfig({
  plugins: [react()],
  base: '/vibe-coding-myblog/'
})

