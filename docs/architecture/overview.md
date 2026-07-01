---
sidebar_position: 3
---

# Architecture Overview

CognitiveOS runs on **Alpine Linux**, chosen for its small footprint, security, and package management. The system is organized into distinct layers that communicate through well-defined interfaces.

## System Diagram

```
┌─────────────────────────────────────────────────────┐
│                    User (Human)                      │
├─────────────────────────────────────────────────────┤
│                    Bubble Tea TUI (cli)              │
├─────────────────────────────────────────────────────┤
│         cognitiveosd (daemon — message bus)          │
├──────────────────┬──────────────────────────────────┤
│   Raw Model      │    Wide Model (inference)         │
│   (local, MCU)   │    (local or remote .gguf)       │
├──────────────────┴──────────────────────────────────┤
│  MCP Bridges: display, audio, network, gpio, serial  │
├─────────────────────────────────────────────────────┤
│              Alpine Linux + /dev/fb0                 │
└─────────────────────────────────────────────────────┘
```

## Layer Descriptions

### User Interface (cli)

The primary interface is a **Bubble Tea TUI** — a terminal-based UI built with Go. No desktop environment, no window manager. The TUI renders ephemeral interfaces for each task and disappears when the task completes.

### Message Bus (cognitiveosd)

`cognitiveosd` is the system daemon that acts as a message bus. It:

- Routes intent from the user interface to the appropriate model
- Manages hardware resources through MCP bridges
- Coordinates software lifecycle (install, update, remove capabilities)
- Maintains system state

### Inference Engine

Two models run in parallel:

- **Raw Model** — A lightweight, low-power model that runs on local hardware (MCU-class). Handles basic system operations, wake word detection, and quick responses.
- **Wide Model** — A full-capability model that runs locally via `.gguf` files or remotely. Handles complex reasoning, natural language understanding, and task planning.

Both are accessed through CGo bindings in the `inference` repository.

### MCP Bridges

Hardware is accessed through **MCP (Model Context Protocol) bridges** — Go programs that expose hardware capabilities as MCP tools:

- **display** — Framebuffer (`/dev/fb0`) for visual output
- **audio** — Audio input/output
- **network** — Network connectivity (Wi-Fi, Ethernet)
- **gpio** — GPIO pins for sensors and actuators
- **serial** — Serial port communication

## Repositories

| Repo | Role |
|------|------|
| [product-specs](https://github.com/CognitiveOS-Project/product-specs) | Standards and schemas |
| [sdlc](https://github.com/CognitiveOS-Project/sdlc) | SDLC tooling and CI |
| [cpm](https://github.com/CognitiveOS-Project/cpm) | Package manager |
| [core-mcp-bridges](https://github.com/CognitiveOS-Project/core-mcp-bridges) | MCP bridge interfaces |
| [inference](https://github.com/CognitiveOS-Project/inference) | Model runner |
| [cognitiveosd](https://github.com/CognitiveOS-Project/cognitiveosd) | System daemon |
| [cli](https://github.com/CognitiveOS-Project/cli) | TUI frontend |
| [cognitiveos-distro](https://github.com/CognitiveOS-Project/cognitiveos-distro) | Alpine image builder |
| [registry-server](https://github.com/CognitiveOS-Project/registry-server) | Package registry |
