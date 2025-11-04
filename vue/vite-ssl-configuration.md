# Vite SSL Certificate Configuration

```ts
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    https: {
      // Here is the configuration, you will need to create your own certificates with mkcert
      // Install mkcert with a package manager like choco, brew, apt, etc
      key: fs.readFileSync(path.resolve(__dirname, './src/certs/localhost+2-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, './src/certs/localhost+2.pem')),
    },
  },
})
```