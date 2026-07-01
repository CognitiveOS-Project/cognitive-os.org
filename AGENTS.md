# cognitive-os.org

Project website + documentation for CognitiveOS.

## What's here

- `src/pages/index.tsx` — Landing page (refined terminal aesthetic)
- `docs/` — User documentation (markdown)
- `docusaurus.config.ts` — Docusaurus config
- `CNAME` — GitHub Pages custom domain (`cognitive-os.org`)

## Build/deploy

```bash
npm ci
npm run build   # outputs to build/
```

Push `main` — GitHub Pages auto-deploys via `.github/workflows/pages.yml`.

## Git workflow

Follow root workspace conventions: topic branches from `development`, PR to `development`, then merge to `main` on release.
