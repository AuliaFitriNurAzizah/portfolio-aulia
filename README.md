# Portfolio: Aulia Fitri Nur Azizah

Portfolio website built with React 18 and Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

## Edit the content

Almost everything lives in `src/data.js`: profile, skills, experience, education,
certificates, projects and contact links.

- **Photo**: put the file in `public/` (for example `public/foto.jpg`), then set `photo: "/foto.jpg"` in `src/data.js`.
- **Projects**: fill the `PROJECTS` array in `src/data.js`. The Projects section shows up automatically.
- **Colors**: change the CSS variables at the top of `src/styles.css`.

## Build and deploy

```bash
npm run build
```

The output is in `dist/`.

- **Vercel / Netlify**: import the GitHub repository. Build command `npm run build`, output directory `dist`.
- **GitHub Pages**: add `base: "/<repo-name>/"` to `vite.config.js`, build, then publish `dist/`.
