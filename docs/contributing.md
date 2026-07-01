---
sidebar_position: 4
---

# Contributing

CognitiveOS is open source (MIT) and welcomes contributions. The project spans 10+ repositories under the [CognitiveOS-Project](https://github.com/CognitiveOS-Project) organization.

## Getting Started

1. Browse the [SDLC repo](https://github.com/CognitiveOS-Project/sdlc) for the full implementation plan
2. Check existing issues across repositories
3. Join the discussion — reach out via GitHub issues

## Git Workflow

All repositories follow topic-branch workflow:

1. Branch from `development`, not `main`
2. Use topic branches: `feature/<name>`, `fix/<name>`, `bugfix/<name>`
3. Open a PR to `development` with a clear title and description
4. Merge via squash after review
5. Changes flow to `main` via a release PR

## Repository Roles

| Repo | What to Contribute |
|------|-------------------|
| [product-specs](https://github.com/CognitiveOS-Project/product-specs) | Standards, schemas, format specs |
| [sdlc](https://github.com/CognitiveOS-Project/sdlc) | CI, tooling, health checks |
| [cpm](https://github.com/CognitiveOS-Project/cpm) | Package manager features, bug fixes |
| [core-mcp-bridges](https://github.com/CognitiveOS-Project/core-mcp-bridges) | Hardware bridge implementations |
| [inference](https://github.com/CognitiveOS-Project/inference) | Model runner, CGo bindings |
| [cognitiveosd](https://github.com/CognitiveOS-Project/cognitiveosd) | Daemon, message bus |
| [cli](https://github.com/CognitiveOS-Project/cli) | TUI, user interface |
| [cognitiveos-distro](https://github.com/CognitiveOS-Project/cognitiveos-distro) | Image builder, Docker |
| [registry-server](https://github.com/CognitiveOS-Project/registry-server) | Package registry server |

## Building from Source

Clone the repositories and follow the build instructions in each repo's README. For the distro image specifically:

```bash
git clone https://github.com/CognitiveOS-Project/cognitiveos-distro.git
cd cognitiveos-distro
make iso        # Build x86_64 ISO
make rpi        # Build Raspberry Pi image
```

## License

All repositories are MIT licensed unless noted otherwise.
