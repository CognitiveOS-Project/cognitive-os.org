---
title: "FAQ"
description: "Frequently asked questions about CognitiveOS — what it is, how to install it, supported hardware, and architecture."
sidebar_position: 5
keywords: [FAQ, CognitiveOS questions, AI OS, installation help, supported hardware]
---

# Frequently Asked Questions

## What is CognitiveOS?

CognitiveOS is an **AI-native operating system** where artificial intelligence is the foundation, not an application. It replaces app-centric computing with **intent-centric computing** — you state goals, and the AI operates the machine directly.

There are no apps, no browsers, no permission dialogs. The OS itself is intelligent.

## How do I install CognitiveOS?

1. **Download** a bootable image from the [GitHub releases](https://github.com/CognitiveOS-Project/cognitiveos-alpine-distro/releases/latest) page
2. **Write** the image to a USB drive or SD card using `dd`:
   ```bash
   sudo dd if=cognitiveos-<version>-standard-x86_64.iso of=/dev/sdX bs=4M status=progress
   ```
3. **Boot** from the media

You can also run CognitiveOS in Docker:
```bash
docker pull ghcr.io/cognitiveos-project/cognitiveos:<version>-standard-x86_64
docker run -it ghcr.io/cognitiveos-project/cognitiveos:<version>-standard-x86_64
```

## What hardware does CognitiveOS support?

CognitiveOS supports five hardware classes:

| Class | Min RAM | Architecture | Use Case |
|-------|---------|-------------|----------|
| **Titan** | 16 GB | ARM64 | Full AI with 235B parameter model |
| **Standard** | 8 GB | x86_64 | Desktop/laptop with 1.5B + 8B models |
| **Gateway** | 4 GB | x86_64 | Headless server, network inference |
| **Edge** | 2 GB | ARM64 / ARMv7 | Raspberry Pi 4/5, embedded |
| **Micro** | 512 MB | ARMv7 | Raspberry Pi Zero, minimal IoT |

## What is the Cognitive Package Manager (cpm)?

`cpm` is the package manager for CognitiveOS. It installs, removes, and manages `.cgp` cognitive patches — self-contained bundles that extend the OS with new capabilities.

```bash
cpm install <package>     # Install a patch
cpm remove <package>      # Remove a patch
cpm list                  # List installed patches
cpm search <query>        # Search the registry
```

## What are MCP bridges?

MCP (Model Context Protocol) bridges connect the AI inference engine to hardware peripherals. Each bridge exposes device-specific tools (GPIO, audio, display, networking) that the AI can invoke to interact with the physical world.

## Is CognitiveOS open source?

Yes. CognitiveOS is released under the **MIT license**. The source code is available across 10+ repositories under the [CognitiveOS-Project](https://github.com/CognitiveOS-Project) GitHub organization.

## Can I contribute?

Absolutely. See the [Contributing](/docs/contributing) guide for how to get started. The project welcomes contributions in Go, C/C++, Shell, and documentation.
