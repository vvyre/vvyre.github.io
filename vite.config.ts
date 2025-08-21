import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: `/vvyre.github.io/`,
  plugins: [react({ jsxImportSource: '@emotion/react' }), tsconfigPaths()],
})
