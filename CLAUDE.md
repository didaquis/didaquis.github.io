# CLAUDE.md

## Overview

Personal website of Dídac García, live at https://didaquis.github.io/. A single-page
Next.js 13 site (pages router) exported to static HTML and published to GitHub Pages.
Source and deployment pipeline live in this one repository; the built output is never
committed.

## Commands

```bash
nvm use          # Node 22, per .nvmrc
npm ci
npm run dev      # dev server at http://localhost:3000
npm run lint     # eslint --ext .jsx,.js .
npm run export   # next build && next export -> out/
```

There are no tests and no test runner in this project.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`: `npm ci` → `npm run lint` →
`npm run export` → upload `out/` → deploy to Pages. **Lint failures block the deploy**,
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
- **No `next.config.js`.** Defaults apply, which is fine because the site is served from
  the domain root (a GitHub user page), so no `basePath`/`assetPrefix` is needed. Adding a
  path prefix would break the absolute `/assets/...` links in `_document.js`.

## Conventions

ESLint config (`.eslintrc.js`) enforces the house style and is not merely advisory since
it gates deploys:

- **Tab indentation**, single quotes, **no semicolons**.
- Object curly spacing required; `curly` braces required on all blocks.
- `React` is a global (Next.js auto-import); do not add `import React`.
- `no-console` and `no-unused-vars` are warnings, not errors.

`/docs/` and `/out/` and `/.next/` are gitignored.
