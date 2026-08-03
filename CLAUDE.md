# CLAUDE.md

## Overview

Personal website of Dídac García, live at https://didaquis.github.io/. A single-page
Next.js 16 site (pages router) exported to static HTML and published to GitHub Pages.
Source and deployment pipeline live in this one repository; the built output is never
committed.

## Commands

```bash
nvm use          # Node 22, per .nvmrc
npm ci
npm run dev      # dev server at http://localhost:3000
npm run lint     # eslint .
npm run build    # next build -> out/ (static export)
```

There are no tests and no test runner in this project.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`: `npm ci` → `npm run lint` →
`npm run build` → upload `out/` → deploy to Pages. **Lint failures block the deploy**,
so run `npm run lint` before pushing. GitHub Pages is configured to deploy from Actions,
not from a branch.

## Architecture

The whole site is one route, `pages/index.js`, which composes five presentational
components in fixed order: `Header`, then inside `.content` → `MyCard`, `AboutMe`,
`WorkHistory`, `Education`.

- **All components are stateless arrow functions returning JSX.** No props, no hooks, no
  client-side state anywhere. Content (jobs, education entries, links) is hardcoded
  literal JSX inside each component — updating the site's text means editing the
  component, not a data file.
- **`components/Header.js` is not a visual header.** It renders only `next/head` content:
  title, favicons, canonical URL, Open Graph and Twitter Card tags. The visible header
  card is `components/MyCard.js`. When changing the site title, description, or portrait,
  update every duplicated occurrence in `Header.js` — the strings repeat across the plain,
  OG, and Twitter meta blocks.
- **Styling is plain global CSS in `public/`, not CSS Modules or a framework.**
  `pages/_document.js` loads `normalize.css`, `main.css`, Font Awesome 4.7, and Roboto
  Mono via `<link>` tags from `/assets/`. Class names in components refer to selectors in
  `public/assets/main.css`; icons use Font Awesome 4 `fa fa-*` span syntax.
- **`next.config.js` holds one setting: `output: 'export'`.** That is what makes `next
  build` emit the static `out/` directory. Do not add `basePath`/`assetPrefix`: the site
  is served from the domain root (a GitHub user page), and a path prefix would break the
  absolute `/assets/...` links in `_document.js`. `images.unoptimized` is not needed
  either, because no component uses `next/image`.

## Conventions

ESLint config (`eslint.config.js`, flat config) enforces the house style and is not
merely advisory since it gates deploys:

- **Tab indentation**, single quotes, **no semicolons**.
- Object curly spacing required; `curly` braces required on all blocks.
- `React` is a global (Next.js auto-import); do not add `import React`.
- `no-console` and `no-unused-vars` are warnings, not errors.

There is no `.eslintignore` (flat config dropped it); `out/` and `.next/` are excluded
via the `ignores` entry at the top of `eslint.config.js`. The config lints both `.js` and
`.jsx`, which is why the `lint` script needs no `--ext` flag.

`/docs/` and `/out/` and `/.next/` are gitignored.
