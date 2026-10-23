# 🎃 Dual iPixel Mega Halloween FX Suite

A web-based **Web Bluetooth** controller for dual **iPixel 32×32 LED Displays** (64×32 unified resolution) running animated retro Halloween pixel-art scenes.

Powered by [eraldonio/ipixel_remote_lib](https://github.com/eraldonio/ipixel_remote_lib).

## 🚀 Live Demo & Web App
- **GitHub Pages**: [https://eraldonio.github.io/ipixel-halloween/](https://eraldonio.github.io/ipixel-halloween/)

> **Note**: Web Bluetooth requires **Google Chrome, Microsoft Edge, or Opera** on Desktop or Android, served over HTTPS or localhost.

## ✨ Features
- **Unified 64×32 Matrix Canvas**: Treats two separate 32×32 displays as one seamless canvas.
- **Concurrent Dual BLE Transfers**: Automatically slices the 64×32 canvas and sends 32×32 PNG frames to both displays in parallel.
- **17 Curated Halloween Animations**:
  - 🎃 Jack-o'-Lantern (flickering candle + wide jagged grin spanning screens)
  - 💀 Cackling Demonic Skull (smooth anatomical dome with bouncing jaw)
  - 👻 Ghost Patrol (specter drifting across screen divide)
  - ☠️ Grim Reaper (high-contrast cowl with gleaming scythe and soul harvest)
  - 🩹 Shuffling Mummy (dragging lurch walk cycle with reaching arms)
  - 🧙 Flying Witch (broom flight across centered moon)
  - 🪦 Zombie Hand (lateral swaying claw with arched gothic tombstones)
  - 🦇 Swarm of Bats & Full Moon
  - 🕷️ Dual Blood Spiders (big center seam drop + small nimble drop)
  - 🐈‍⬛ Black Cat (tailwhip + blinking slit emerald eyes)
  - 👀 Monster Eyes in the Dark (predator multi-color glance & blinks)
  - 👁️ Floating Eyeball (tracking eye with red sclera veins)
  - ⚡ Haunted Manor (dual-side alternating lightning strikes)
  - 🔥 Inferno Hellfire (turbulent chaotic flame tongues & sparks)
  - 👻 Specter Swirl (CipriEnt Resurrect-64 palette trio)
  - 🩸 Blood Ritual Pentagram (occult star with rising blood sparks)
  - 📜 Neon Halloween Text Banner
- **Interactive Controls**:
  - Live Digital Twin simulator with real-time canvas preview
  - Category filters (*All, Monsters, Creatures, Atmosphere, Spooky FX, Text*)
  - `⇄ Swap Left/Right` display mapping button
  - Real-time Hardware Brightness slider (5–100%)
  - Speed / Frame-pacing slider (60ms–250ms)
  - `🔀 Auto-Playlist` cycling mode

## 🛠️ Local Development
```bash
python3 -m http.server 8080
```
Open `http://localhost:8080/` in Chrome or Edge.

## 📄 License
MIT
