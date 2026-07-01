---
sidebar_position: 2
---

# Installation

## Prerequisites

- A 64-bit x86 machine or Raspberry Pi (3B+ or newer)
- 2GB+ RAM (4GB recommended)
- A USB drive (8GB+) for bootable media

## Download

Pre-built bootable images are available on the [releases page](https://github.com/CognitiveOS-Project/cognitiveos-distro/releases/latest):

| Image | Platform |
|-------|----------|
| `cognitiveos-<version>-x86_64.iso` | x86_64 desktop/laptop |
| `cognitiveos-<version>-aarch64.img` | Raspberry Pi (SD card) |
| `cognitiveos-distro-<version>-<arch>.tar.gz` | Distro tarball for custom builds |

## Writing to USB (x86_64)

```bash
# Download the ISO
wget https://github.com/CognitiveOS-Project/cognitiveos-distro/releases/latest/download/cognitiveos-<version>-x86_64.iso

# Verify checksum (recommended)
sha256sum cognitiveos-<version>-x86_64.iso

# Write to USB (replace /dev/sdX with your USB device)
sudo dd if=cognitiveos-<version>-x86_64.iso of=/dev/sdX bs=4M status=progress
sync
```

## Writing to SD Card (Raspberry Pi)

```bash
# Download the image
wget https://github.com/CognitiveOS-Project/cognitiveos-distro/releases/latest/download/cognitiveos-<version>-aarch64.img

# Write to SD card (replace /dev/mmcblk0 with your SD card)
sudo dd if=cognitiveos-<version>-aarch64.img of=/dev/mmcblk0 bs=4M status=progress
sync
```

## Booting

Insert the USB drive or SD card and boot from it. On first boot, CognitiveOS will initialize the AI environment and present a terminal prompt.

## Docker

If you just want to explore the runtime:

```bash
docker pull ghcr.io/CognitiveOS-Project/cognitiveos-distro:latest
docker run -it ghcr.io/CognitiveOS-Project/cognitiveos-distro:latest
```

## Building from Source

See the [Contributing](/docs/contributing) guide for build instructions.
