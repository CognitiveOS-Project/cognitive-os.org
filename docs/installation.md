---
title: "Installation"
description: "Install CognitiveOS on x86_64, Raspberry Pi (aarch64), or ARM devices. Download bootable images, write to USB/SD card, and boot."
sidebar_position: 2
keywords: [CognitiveOS install, bootable image, Raspberry Pi, Docker, Alpine Linux]
---

# Installation

## Prerequisites
 
- A 64-bit x86 machine, Raspberry Pi 4/5 (aarch64), or Raspberry Pi 3 (armv7)
- 2GB+ RAM (4GB recommended)
- A USB drive or SD card (8GB+) for bootable media
 
## Download
 
Pre-built bootable images are available on the [releases page](https://github.com/CognitiveOS-Project/cognitiveos-alpine-distro/releases):
 
| Image Variant | Platform | Best For |
|---------------|----------|----------|
| `standard-x86_64` | x86_64 | General purpose desktop/laptop |
| `gateway-x86_64` | x86_64 | Low-power x86 gateway nodes |
| `titan-aarch64` | aarch64 | High-performance ARM (RPi 4/5, etc.) |
| `edge-aarch64` | aarch64 | Power-efficient ARM edge devices |
| `edge-armv7` | armv7 | Legacy ARM hardware (RPi 3) |
| `micro-armv7` | armv7 | Extremely constrained embedded ARM |
| `distro-tarball` | All | Custom builds and portable installation |
 
## Writing to Media
 
### x86_64 (USB Drive)
 
```bash
# Download the ISO (replace <version> with latest release)
wget https://github.com/CognitiveOS-Project/cognitiveos-alpine-distro/releases/download/<version>/cognitiveos-<version>-standard-x86_64.iso
 
# Verify checksum
sha256sum cognitiveos-<version>-standard-x86_64.iso
 
# Write to USB (replace /dev/sdX with your USB device)
sudo dd if=cognitiveos-<version>-standard-x86_64.iso of=/dev/sdX bs=4M status=progress
sync
```
 
### ARM (SD Card)
 
```bash
# Download the image (replace <version> and <variant> with your choice)
wget https://github.com/CognitiveOS-Project/cognitiveos-alpine-distro/releases/download/<version>/cognitiveos-<version>-<variant>.img
 
# Write to SD card (replace /dev/mmcblk0 with your SD card)
sudo dd if=cognitiveos-<version>-<variant>.img of=/dev/mmcblk0 bs=4M status=progress
sync
```
 
## Booting
 
Insert the USB drive or SD card and boot from it. On first boot, CognitiveOS will initialize the AI environment and present a terminal prompt.
 
## Docker
 
If you just want to explore the runtime, pull a specific variant image:
 
```bash
# Example: Pull the standard x86_64 image
docker pull ghcr.io/cognitiveos-project/cognitiveos:<version>-standard-x86_64
docker run -it ghcr.io/cognitiveos-project/cognitiveos:<version>-standard-x86_64
```


## Building from Source

See the [Contributing](/docs/contributing) guide for build instructions.
