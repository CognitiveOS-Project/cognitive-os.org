---
title: "What is CognitiveOS?"
description: "CognitiveOS is an AI-native operating system with intent-centric computing. No apps, no desktop — the AI operates the machine directly."
sidebar_position: 1
keywords: [CognitiveOS, AI operating system, intent-centric computing, AI-native OS]
---

# What is CognitiveOS?

CognitiveOS is an **AI-native operating system** — a complete reimagining of what an OS can be when artificial intelligence is the foundation, not an application.

## The Core Idea

Computing today is **app-centric**. Every task requires finding, opening, and learning an application. Managing files, switching windows, granting permissions — the OS does nothing meaningful; it is a blank slate that offloads every responsibility onto the user.

CognitiveOS replaces this with **intent-centric** computing:

```
1. Start the device
2. Ask AI (speak or text)
3. AI does something
```

That is the complete interaction model. The human sets goals. The AI operates the machine.

## Design Principles

- **AI is the OS, not an app** — The AI owns hardware, resources, software lifecycle, and interaction. No fallback desktop. No settings app.
- **One user: the AI** — No user accounts, no permission groups. The AI has unfettered hardware access.
- **Self-managing** — The AI discovers, installs, and removes its own capabilities. The human never touches a package manager.
- **Ephemeral interface** — No windows, no home screen, no app grid. UI exists only for the duration of a task.
- **Universal substrate** — Same architecture from a smartwatch to a server. The only difference is where the model runs.

## Architecture

CognitiveOS runs on Alpine Linux with a two-tier AI brain:

| Layer | Component | Role |
|-------|-----------|------|
| User | Bubble Tea TUI (cli) | Text-based interface |
| Message bus | cognitiveosd | System daemon, manages communication |
| Raw model | inference (local, MCU) | Fast, low-power inference |
| Wide model | inference (local/remote .gguf) | Full-capability model |
| Hardware | MCP Bridges | Display, audio, network, GPIO, serial |
| Substrate | Alpine Linux + /dev/fb0 | Linux kernel, framebuffer |

## Repositories

CognitiveOS is developed across 10 repositories under the [CognitiveOS-Project](https://github.com/CognitiveOS-Project) organization, covering specs, tooling, package management, bridges, inference, the daemon, CLI, distribution, and registry.

## Status

All 7 implementation phases are complete. The project is in active development. See the [sdlc](https://github.com/CognitiveOS-Project/sdlc) repo for the full implementation plan and [health checks](https://github.com/CognitiveOS-Project/sdlc/actions/workflows/healthcheck.yml).
