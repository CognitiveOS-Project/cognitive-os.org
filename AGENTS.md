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

## Process Enforcements (MANDATORY)

All work in this repo MUST follow the CognitiveOS Process Enforcements:

- `product-specs/docs/ENFORCEMENTS.md` — SPECv1, GHW, VibeLeading, ABSEv1
- `sdlc/docs/ENFORCEMENTS.md` — same content (mirror)

These enforcements are binding on every contributor, agent, and automation. No work may bypass them except on explicit user instruction (maintainer emergency).
