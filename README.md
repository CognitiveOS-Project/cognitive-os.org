# cognitive-os.org

CognitiveOS project website + documentation — [cognitive-os.org](https://cognitive-os.org)

## Tech Stack

- **[Docusaurus](https://docusaurus.io/)** — React-based static site generator
- Landing page with refined terminal aesthetic
- Markdown documentation at `/docs/`
- Hosted on **GitHub Pages** with custom domain

## Development

```bash
npm ci
npm run start    # local dev server with hot reload
npm run build    # production build → build/
```

## Contributing

1. Branch from `development`, not `main`
2. Use topic branches: `feature/<name>`, `fix/<name>`, `bugfix/<name>`
3. Open a PR to `development` with a clear title and description
4. Merge via squash after review
5. Changes flow to `main` via a release PR (auto-deploys via GitHub Pages)

See the [SDLC repo](https://github.com/CognitiveOS-Project/sdlc) for the full contribution guide.

## Author

**Jean Machuca** — [GitHub](https://github.com/jeanmachuca) · [Sponsor](https://github.com/sponsors/jeanmachuca)
