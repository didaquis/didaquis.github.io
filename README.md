# didaquis.github.io

My personal website, live at [didaquis.github.io](https://didaquis.github.io/).

Built with [Next.js](https://nextjs.org/) and exported as a static site. This repository
holds both the source code and the deployment pipeline: there is no separate build repo.

## Requirements

Node 22 (see [`.nvmrc`](.nvmrc)). With [nvm](https://github.com/nvm-sh/nvm) installed,
run `nvm use` to switch to it.

## Development

```bash
npm ci
npm run dev
```

The site is then served at http://localhost:3000.

Other scripts:

- `npm run lint` — run ESLint. The deploy pipeline runs this too, so a failing lint
  blocks a deploy.
- `npm run build` — build the static site into `out/`. Useful to check the production
  output locally.

## Deployment

Pushing to `main` deploys the site. No manual steps.

The [deploy workflow](.github/workflows/deploy.yml) installs dependencies, runs the
linter, builds the static site and publishes `out/` to GitHub Pages. Deployment status
is visible under the repository's Actions tab.

Pages is configured to deploy from GitHub Actions rather than from a branch, so the
built output is never committed.

## Structure

```
pages/       Next.js routes
components/  React components
data/        Work history and education entries
public/      Static assets served as-is
```

## Credits

The original design started from [Compass](https://github.com/excentris/compass), a
Jekyll theme by Eduardo Rubio, released under the MIT licence. The stylesheet has since
been rewritten, but the layout and the colour palette come from there.
