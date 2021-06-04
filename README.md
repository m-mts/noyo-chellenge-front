
## Developing
node --version
    v16.2.0

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:
REST API service should be available on http://localhost:5000 (or can be configured in src/config.ts)
```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

--Currently prebuilded for static usage

for SSR rename svelte.config-SSR.js to svelte.config.js and

```bash
npm run build
```

to use nginx docker container for serve static files modify ./go with absolute path to build folder and run

```bash
./go
```
