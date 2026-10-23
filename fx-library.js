// fx-library.js - Curated High-Definition Halloween Animations for 64x32 Dual iPixel Displays

export const FX_LIST = [
  // Curated Monsters & Figures
  { id: 'eyes', name: '🎃 Jack-o\'-Lantern (Dual Eyes + Flame Flicker)', cat: 'Monsters' },
  { id: 'skull', name: '💀 Cackling Demonic Skull (Rounded Anatomical)', cat: 'Monsters' },
  { id: 'ghost', name: '👻 Ghost Patrol Across Screens', cat: 'Monsters' },
  { id: 'reaper', name: '☠️ Grim Reaper with Enhanced Contrast Cloak & Scythe', cat: 'Monsters' },
  { id: 'mummy', name: '🩹 Shuffling Mummy (Lurching & Dragging Walk)', cat: 'Monsters' },
  { id: 'witch', name: '🧙 Witch Flying on Broom Across Moon', cat: 'Monsters' },
  { id: 'zombie-hand', name: '🪦 Zombie Hand (L/R Grasp & Arched Tombstones)', cat: 'Monsters' },

  // Creatures & Spookies
  { id: 'bats', name: '🦇 High-Contrast Swarm of Bats & Full Moon', cat: 'Creatures' },
  { id: 'spider', name: '🕷️ Dual Blood Spiders (Big & Small Descending Drops)', cat: 'Creatures' },
  { id: 'black-cat', name: '🐈‍⬛ Black Cat with Tail Whip & Blinking Slit Eyes', cat: 'Creatures' },
  { id: 'creepy-eyes', name: '👀 Monster Eyes in Dark (Multi-color Gaze)', cat: 'Creatures' },
  { id: 'eyeball-bounce', name: '👁️ Floating Eyeball Tracking Observer', cat: 'Creatures' },

  // Atmospheric, Magic & Curated Spooky FX
  { id: 'haunted-manor', name: '⚡ Haunted Manor (Dual-Side Branching Lightning)', cat: 'Atmosphere' },
  { id: 'flame-wall', name: '🔥 Inferno Hellfire Simulation (Turbulent Spark Tongue Fire)', cat: 'Atmosphere' },
  { id: 'ghostly-trio', name: '👻 Specter Swirl & Spectral Soul Flames (CipriEnt)', cat: 'Spooky FX' },
  { id: 'blood-altar-circle', name: '🩸 Blood Ritual Pentagram & Sanguine Sparks (CipriEnt)', cat: 'Spooky FX' },

  // Text
  { id: 'text-ticker', name: '📜 Neon Halloween Countdown & Messages', cat: 'Text' }
];

// 1. Jack-o'-Lantern
export function renderEyes(ctx, t) {
  ctx.fillStyle = '#050200';
  ctx.fillRect(0, 0, 64, 32);

  const flicker = 0.72 + 0.28 * Math.sin(t * 0.45) * Math.cos(t * 0.19);
  const r = Math.floor(255 * flicker);
  const g = Math.floor((90 + 35 * Math.sin(t * 0.35)) * flicker);
  ctx.fillStyle = `rgb(${r}, ${g}, 0)`;

  // Left Eye (Screen 0)
  ctx.beginPath();
  ctx.moveTo(11, 19); ctx.lineTo(23, 19); ctx.lineTo(17, 8); ctx.closePath(); ctx.fill();

  // Right Eye (Screen 1)
  ctx.beginPath();
  ctx.moveTo(41, 19); ctx.lineTo(53, 19); ctx.lineTo(47, 8); ctx.closePath(); ctx.fill();

  // Grin spanning both screens
  ctx.beginPath();
  ctx.moveTo(10, 24); ctx.lineTo(18, 29); ctx.lineTo(25, 24);
  ctx.lineTo(32, 29);
  ctx.lineTo(39, 24); ctx.lineTo(46, 29); ctx.lineTo(54, 24);
  ctx.lineTo(50, 31); ctx.lineTo(14, 31); ctx.closePath(); ctx.fill();
}

// 2. Cackling Demonic Skull (Rounded skull dome, curved cheekbones, less boxy)
export function renderSkull(ctx, t) {
  ctx.fillStyle = '#050207';
  ctx.fillRect(0, 0, 64, 32);

  const jawOpen = (t % 6 < 3) ? 3 : 0;

  // Smooth rounded cranium dome across seam (x: 21 to 43)
  ctx.fillStyle = '#dedede';
  ctx.beginPath();
  ctx.ellipse(32, 12, 11, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  // Skull highlight sheen
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.ellipse(30, 7, 5, 2, 0, 0, Math.PI * 2);
  ctx.fill();

  // Curved cheekbones tapering inward to jaw
  ctx.fillStyle = '#d2d2d2';
  ctx.beginPath();
  ctx.moveTo(22, 15); ctx.lineTo(27, 21); ctx.lineTo(37, 21); ctx.lineTo(42, 15);
  ctx.closePath();
  ctx.fill();

  // Softened temple shadows
  ctx.fillStyle = '#050207';
  ctx.fillRect(20, 13, 2, 4);
  ctx.fillRect(42, 13, 2, 4);

  // Large Angled Hollow Eye Sockets (Screens 0 & 1)
  ctx.fillStyle = '#000000';
  ctx.beginPath(); ctx.ellipse(27, 13, 3.5, 3.5, 0, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(37, 13, 3.5, 3.5, 0, 0, Math.PI * 2); ctx.fill();

  // Pulsing demonic red pupil pinpoints
  const pupilPulse = (t % 8 < 4) ? '#ff0033' : '#ff4466';
  ctx.fillStyle = pupilPulse;
  ctx.fillRect(27, 13, 2, 2);
  ctx.fillRect(36, 13, 2, 2);

  // Inverted heart nasal cavity
  ctx.fillStyle = '#000000';
  ctx.beginPath();
  ctx.moveTo(32, 16); ctx.lineTo(30, 19); ctx.lineTo(34, 19);
  ctx.closePath();
  ctx.fill();

  // Upper Teeth row
  ctx.fillStyle = '#ffffff';
  for (let tx = 27; tx <= 36; tx += 3) {
    ctx.fillRect(tx, 21, 2, 2);
  }

  // Rounded Lower Jaw
  const jy = 23 + jawOpen;
  ctx.fillStyle = '#c8c8c8';
  ctx.beginPath();
  ctx.ellipse(32, jy + 3, 6, 2.5, 0, 0, Math.PI);
  ctx.fill();

  // Lower Teeth
  ctx.fillStyle = '#ffffff';
  for (let tx = 28; tx <= 35; tx += 3) {
    ctx.fillRect(tx, jy, 2, 2);
  }
}

// 3. Ghost Patrol Across Screens
export function renderGhost(ctx, t) {
  ctx.fillStyle = '#08051a';
  ctx.fillRect(0, 0, 64, 32);

  const x = Math.floor(28 + 20 * Math.sin(t * 0.09));
  const y = Math.floor(10 + 4 * Math.cos(t * 0.16));

  ctx.fillStyle = '#f0f4ff';
  ctx.beginPath();
  ctx.arc(x + 7, y + 6, 7, Math.PI, 0, false);
  ctx.lineTo(x + 14, y + 16);
  const skirt = (t % 4 < 2) ? 1 : 0;
  ctx.lineTo(x + 10.5, y + 14 + skirt);
  ctx.lineTo(x + 7, y + 16 - skirt);
  ctx.lineTo(x + 3.5, y + 14 + skirt);
  ctx.lineTo(x, y + 16);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#08051a';
  ctx.fillRect(x + 4, y + 5, 2, 3); ctx.fillRect(x + 9, y + 5, 2, 3);

  ctx.fillStyle = '#1b1433';
  ctx.fillRect(0, 30, 64, 2);
  ctx.fillStyle = '#423366';
  ctx.fillRect(6, 26, 2, 5); ctx.fillRect(4, 27, 6, 2);
  ctx.fillRect(56, 26, 2, 5); ctx.fillRect(54, 27, 6, 2);
}

// 4. Grim Reaper (High contrast highlighted cloak folds & gleaming scythe)
export function renderReaper(ctx, t) {
  ctx.fillStyle = '#0c0715'; // Slightly lighter background so the dark cloak stands out sharply
  ctx.fillRect(0, 0, 64, 32);

  const floatY = Math.floor(2 * Math.sin(t * 0.15));
  const rx = 18;
  const ry = 8 + floatY;

  // Dark Cloak Body
  ctx.fillStyle = '#1c1825';
  ctx.beginPath();
  ctx.moveTo(rx + 6, ry); ctx.lineTo(rx + 15, ry + 3);
  ctx.lineTo(rx + 17, ry + 22); ctx.lineTo(rx + 1, ry + 22);
  ctx.closePath(); ctx.fill();

  // Edge Highlights & Cowl Folds (for punchy LED matrix visibility)
  ctx.fillStyle = '#443b59';
  ctx.fillRect(rx + 1, ry + 21, 16, 1); // hem edge
  ctx.fillRect(rx + 15, ry + 4, 1, 16); // shoulder rim highlight
  ctx.fillRect(rx + 5, ry + 1, 5, 1);  // hood top crest

  // Deep Hood Shadow
  ctx.fillStyle = '#000000';
  ctx.beginPath(); ctx.arc(rx + 8, ry + 6, 4, 0, Math.PI * 2); ctx.fill();

  // Cyan Soul Eyes with pulsing glow
  ctx.fillStyle = (t % 4 < 2) ? '#70f8ff' : '#00ffff';
  ctx.fillRect(rx + 6, ry + 5, 2, 2); ctx.fillRect(rx + 9, ry + 5, 2, 2);

  // Skeletal Bony Hand holding staff
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(rx + 13, ry + 11, 4, 3);

  // Scythe Dark Wooden Shaft
  ctx.strokeStyle = '#8d6e63';
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(rx + 15, ry + 22); ctx.lineTo(rx + 16, ry - 4); ctx.stroke();

  // High-Luminance Gleaming Silver Scythe Blade
  const swing = Math.sin(t * 0.2) * 3;
  ctx.fillStyle = '#ffffff'; // White blade spine
  ctx.beginPath();
  ctx.moveTo(rx + 16, ry - 4);
  ctx.quadraticCurveTo(rx + 30, ry - 8 + swing, rx + 39, ry + 4 + swing);
  ctx.quadraticCurveTo(rx + 28, ry - 3 + swing, rx + 16, ry - 2);
  ctx.closePath(); ctx.fill();

  ctx.fillStyle = '#90caf9'; // Blue steel blade bevel
  ctx.fillRect(rx + 19, Math.floor(ry - 5 + swing), 8, 2);

  // Harvesting souls floating toward reaper
  const wispX = 60 - ((t * 2) % 40);
  const wispY = 16 + Math.floor(4 * Math.sin(t * 0.3));
  ctx.fillStyle = '#00ffff';
  ctx.fillRect(wispX, wispY, 2, 2);
  ctx.fillStyle = '#70f8ff';
  ctx.fillRect(wispX + 2, wispY + 1, 2, 1);
}

// 5. Mummy (Lurching walk cycle, forward drag & torso sway)
export function renderMummy(ctx, t) {
  ctx.fillStyle = '#100a06';
  ctx.fillRect(0, 0, 64, 32);

  // Shuffling progression across screens with dragging lurch
  const cycle = t % 16;
  const isLurch = (cycle < 6); // Lurches forward then drags back leg
  const mx = (Math.floor(t * 0.7) % 76) - 16;
  const bobY = isLurch ? 1 : 0;
  const torsoTilt = isLurch ? 2 : 0;

  // Head Bandages (Decayed linen)
  ctx.fillStyle = '#dcd2bb';
  ctx.fillRect(mx + 3 + torsoTilt, 6 + bobY, 9, 8);
  ctx.fillStyle = '#221913';
  ctx.fillRect(mx + 5 + torsoTilt, 8 + bobY, 7, 3);
  // Cursed Golden Eyes
  ctx.fillStyle = '#ffcc00';
  ctx.fillRect(mx + 6 + torsoTilt, 9 + bobY, 2, 1);
  ctx.fillRect(mx + 9 + torsoTilt, 9 + bobY, 2, 1);

  // Torso with dynamic angle
  ctx.fillStyle = '#dcd2bb';
  ctx.fillRect(mx + 3 + torsoTilt, 14 + bobY, 9, 10);
  ctx.fillStyle = '#b8aa90';
  ctx.fillRect(mx + 2 + torsoTilt, 16 + bobY, 11, 2);
  ctx.fillRect(mx + 2 + torsoTilt, 20 + bobY, 11, 2);

  // Shuffling Outstretched Reaching Arms
  const armReach = isLurch ? 8 : 6;
  ctx.fillStyle = '#eae2cf';
  ctx.fillRect(mx + 10 + torsoTilt, 15 + bobY, armReach, 3);
  ctx.fillStyle = '#b8aa90';
  ctx.fillRect(mx + 10 + torsoTilt + armReach - 2, 17 + bobY, 2, 2); // reaching fingers

  // Trailing rag bandages whipping behind
  const flap = (t % 4 < 2) ? 1 : -1;
  ctx.fillStyle = '#b8aa90';
  ctx.fillRect(mx - 3, 17 + flap, 6, 2);
  ctx.fillRect(mx - 6, 18 - flap, 4, 1);

  // Dragging Legs (Front leg plants, back leg drags on floor)
  ctx.fillStyle = '#c5b89d';
  if (isLurch) {
    ctx.fillRect(mx + 7 + torsoTilt, 24, 4, 6); // front planted leg
    ctx.fillRect(mx + 1, 26, 4, 4);             // rear leg dragging behind
  } else {
    ctx.fillRect(mx + 4 + torsoTilt, 24, 4, 6);
    ctx.fillRect(mx + 8 + torsoTilt, 24, 3, 6);
  }

  // Dirt Ground
  ctx.fillStyle = '#24170d';
  ctx.fillRect(0, 30, 64, 2);
}

// 6. Flying Witch Across Moon
export function renderWitch(ctx, t) {
  ctx.fillStyle = '#09081a';
  ctx.fillRect(0, 0, 64, 32);

  ctx.fillStyle = '#ffeaa7';
  ctx.beginPath(); ctx.arc(32, 14, 12, 0, Math.PI * 2); ctx.fill();

  const wx = (t * 2) % 80 - 16;
  const wy = 12 + Math.floor(3 * Math.sin(t * 0.15));

  ctx.strokeStyle = '#8d6e63';
  ctx.beginPath(); ctx.moveTo(wx - 6, wy + 6); ctx.lineTo(wx + 16, wy - 2); ctx.stroke();
  ctx.fillStyle = '#ffd54f';
  ctx.fillRect(wx - 8, wy + 5, 3, 3);

  ctx.fillStyle = '#111111';
  ctx.beginPath(); ctx.moveTo(wx + 2, wy - 6); ctx.lineTo(wx + 8, wy + 2); ctx.lineTo(wx - 2, wy + 4); ctx.closePath(); ctx.fill();
  ctx.fillRect(wx + 2, wy - 8, 2, 3);
  ctx.fillRect(wx - 4, wy + 1, 4, 3);
}

// 7. Zombie Hand Rising (Moving left/right grasping & rounded arched tombstones)
export function renderZombieHand(ctx, t) {
  ctx.fillStyle = '#080c09';
  ctx.fillRect(0, 0, 64, 32);

  // Screen 0: Gothic Arched Tombstone
  ctx.fillStyle = '#3a414e';
  ctx.beginPath();
  ctx.arc(14, 16, 6, Math.PI, 0); ctx.lineTo(20, 28); ctx.lineTo(8, 28); ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#222831';
  ctx.fillRect(13, 16, 2, 8); ctx.fillRect(11, 18, 6, 2); // Cross incision

  // Screen 1: Broken Slanted Tombstone
  ctx.fillStyle = '#3a414e';
  ctx.beginPath();
  ctx.arc(50, 18, 5, Math.PI * 0.9, 0); ctx.lineTo(55, 28); ctx.lineTo(44, 28); ctx.closePath();
  ctx.fill();

  // Soil ground mound
  ctx.fillStyle = '#372b22';
  ctx.fillRect(0, 28, 64, 4);
  ctx.fillStyle = '#4e3d30';
  ctx.fillRect(24, 27, 16, 2); // fresh grave dirt mound

  // Zombie hand rising with lateral left-right sway as it claws out
  const rise = Math.min(15, Math.floor((t % 60) * 0.4));
  const lateralSway = Math.floor(Math.sin(t * 0.25) * 3);
  const hx = 32 + lateralSway;
  const hy = 28 - rise;

  ctx.fillStyle = '#4e6e58'; // Rotting zombie flesh green
  ctx.fillRect(hx - 2, hy + 4, 5, rise); // Forearm
  ctx.fillRect(hx - 3, hy, 7, 5);       // Palm

  // Grasping twitching fingers clawing in the air
  const grasp = (t % 6 < 3);
  if (grasp) {
    // Curled claw
    ctx.fillRect(hx - 4, hy - 2, 2, 3);
    ctx.fillRect(hx - 1, hy - 4, 2, 4);
    ctx.fillRect(hx + 2, hy - 3, 2, 4);
    ctx.fillRect(hx + 4, hy - 1, 2, 3);
  } else {
    // Reaching open fingers
    ctx.fillRect(hx - 4, hy - 4, 2, 5);
    ctx.fillRect(hx - 1, hy - 6, 2, 6);
    ctx.fillRect(hx + 2, hy - 5, 2, 5);
    ctx.fillRect(hx + 5, hy - 3, 2, 4);
  }
}

// 8. Swarm of Bats
export function renderBats(ctx, t) {
  ctx.fillStyle = '#0f0e26';
  ctx.fillRect(0, 0, 64, 32);

  ctx.fillStyle = '#fff4cc';
  ctx.beginPath(); ctx.arc(48, 12, 10, 0, Math.PI * 2); ctx.fill();

  for (let i = 0; i < 3; i++) {
    const bx = ((t * 2) + i * 28) % 84 - 10;
    const by = 8 + i * 5 + Math.floor(3 * Math.sin(t * 0.2 + i));
    const wingUp = (t % 4 < 2);

    ctx.fillStyle = '#000000';
    ctx.fillRect(bx + 3, by + 2, 3, 4);
    if (wingUp) {
      ctx.fillRect(bx + 1, by, 2, 3); ctx.fillRect(bx + 6, by, 2, 3);
    } else {
      ctx.fillRect(bx + 1, by + 3, 2, 3); ctx.fillRect(bx + 6, by + 3, 2, 3);
    }
    ctx.fillStyle = '#ff6600';
    ctx.fillRect(bx + 3, by + 2, 1, 1); ctx.fillRect(bx + 5, by + 2, 1, 1);
  }
}

// 9. Dual Blood Spiders (Big spider at center seam, smaller spider dropping on screen 0)
export function renderSpider(ctx, t) {
  ctx.fillStyle = '#020305';
  ctx.fillRect(0, 0, 64, 32);

  // Spider 1: Big Spider right on Center Seam (x: 32)
  const y1 = Math.floor(6 + 12 * (0.5 + 0.5 * Math.sin(t * 0.08)));
  ctx.strokeStyle = '#4b5563';
  ctx.beginPath(); ctx.moveTo(32, 0); ctx.lineTo(32, y1); ctx.stroke();

  ctx.fillStyle = '#b3001b';
  ctx.fillRect(32 - 3, y1, 6, 6);
  ctx.fillStyle = '#00ff66';
  ctx.fillRect(32 - 2, y1 + 4, 1, 1); ctx.fillRect(32 + 1, y1 + 4, 1, 1);

  ctx.strokeStyle = '#e60026';
  const twitch1 = (t % 2 === 0) ? 1 : -1;
  ctx.beginPath();
  ctx.moveTo(32 - 3, y1 + 2); ctx.lineTo(32 - 6, y1 + 1 + twitch1);
  ctx.moveTo(32 - 3, y1 + 4); ctx.lineTo(32 - 7, y1 + 5 - twitch1);
  ctx.moveTo(32 + 3, y1 + 2); ctx.lineTo(32 + 6, y1 + 1 - twitch1);
  ctx.moveTo(32 + 3, y1 + 4); ctx.lineTo(32 + 7, y1 + 5 + twitch1);
  ctx.stroke();

  // Spider 2: Small Nimble Spider on Screen 0 (x: 12)
  const y2 = Math.floor(4 + 16 * (0.5 + 0.5 * Math.cos(t * 0.12)));
  ctx.strokeStyle = '#374151';
  ctx.beginPath(); ctx.moveTo(12, 0); ctx.lineTo(12, y2); ctx.stroke();

  ctx.fillStyle = '#800020';
  ctx.fillRect(10, y2, 4, 4);
  ctx.fillStyle = '#ffee00';
  ctx.fillRect(11, y2 + 2, 1, 1); ctx.fillRect(13, y2 + 2, 1, 1);

  ctx.strokeStyle = '#b3001b';
  const twitch2 = (t % 2 === 1) ? 1 : -1;
  ctx.beginPath();
  ctx.moveTo(10, y2 + 1); ctx.lineTo(8, y2 + twitch2);
  ctx.moveTo(10, y2 + 3); ctx.lineTo(7, y2 + 4 - twitch2);
  ctx.moveTo(14, y2 + 1); ctx.lineTo(16, y2 - twitch2);
  ctx.moveTo(14, y2 + 3); ctx.lineTo(17, y2 + 4 + twitch2);
  ctx.stroke();
}

// 10. Black Cat (Blinking slit eyes and tail whip animation)
export function renderBlackCat(ctx, t) {
  ctx.fillStyle = '#0a0d14';
  ctx.fillRect(0, 0, 64, 32);

  ctx.fillStyle = '#261c14';
  ctx.fillRect(0, 22, 64, 4);

  const cx = 26;
  ctx.fillStyle = '#000000';
  ctx.beginPath(); ctx.arc(cx + 6, 18, 6, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(cx + 6, 11, 4, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.moveTo(cx + 3, 9); ctx.lineTo(cx + 4, 4); ctx.lineTo(cx + 6, 8); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.moveTo(cx + 6, 8); ctx.lineTo(cx + 8, 4); ctx.lineTo(cx + 9, 9); ctx.closePath(); ctx.fill();

  // Whipping S-curve Tail (Tailwhip motion)
  const whipPhase = Math.sin(t * 0.25);
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx + 1, 20);
  ctx.bezierCurveTo(
    cx - 4, 18 + whipPhase * 3,
    cx - 8, 12 - whipPhase * 4,
    cx - 10, 8 + whipPhase * 6
  );
  ctx.stroke();
  ctx.lineWidth = 1;

  // Blinking Slit Eyes (Blinks shut every 28 ticks)
  const isBlink = (t % 28 < 2);
  if (isBlink) {
    ctx.fillStyle = '#006633';
    ctx.fillRect(cx + 4, 11, 2, 1);
    ctx.fillRect(cx + 7, 11, 2, 1);
  } else {
    ctx.fillStyle = '#00e676';
    ctx.fillRect(cx + 4, 10, 2, 2); ctx.fillRect(cx + 7, 10, 2, 2);
    ctx.fillStyle = '#000000';
    ctx.fillRect(cx + 5, 10, 1, 2); ctx.fillRect(cx + 8, 10, 1, 2);
  }
}

// 11. Creepy Eyes
export function renderCreepyEyes(ctx, t) {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 64, 32);

  const pairs = [
    { x: 12, y: 12, eye: '#ffcc00', pupil: '#ff2200', cycle: 28, seed: 0 },
    { x: 44, y: 14, eye: '#33ff55', pupil: '#003311', cycle: 34, seed: 7 },
    { x: 28, y: 22, eye: '#b000ff', pupil: '#ff0055', cycle: 22, seed: 15 }
  ];

  pairs.forEach(p => {
    if ((t + p.seed) % p.cycle === 0) {
      ctx.fillStyle = p.eye;
      ctx.fillRect(p.x, p.y + 2, 6, 1); ctx.fillRect(p.x + 8, p.y + 2, 6, 1);
      return;
    }
    const look = Math.floor(Math.sin((t + p.seed) * 0.1) * 2);
    ctx.fillStyle = p.eye;
    ctx.beginPath(); ctx.ellipse(p.x + 3, p.y + 2, 4, 3, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(p.x + 11, p.y + 2, 4, 3, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = p.pupil;
    ctx.fillRect(p.x + 2 + look, p.y + 1, 2, 3);
    ctx.fillRect(p.x + 10 + look, p.y + 1, 2, 3);
  });
}

// 12. Floating Eyeball
export function renderEyeball(ctx, t) {
  ctx.fillStyle = '#07020a';
  ctx.fillRect(0, 0, 64, 32);

  const ex = Math.floor(32 + 16 * Math.sin(t * 0.08));
  const ey = Math.floor(16 + 6 * Math.cos(t * 0.12));

  ctx.strokeStyle = '#c62828';
  ctx.beginPath();
  ctx.moveTo(ex - 8, ey);
  ctx.quadraticCurveTo(ex - 14, ey + Math.sin(t * 0.2) * 5, ex - 20, ey);
  ctx.stroke();

  ctx.fillStyle = '#f5f5f5';
  ctx.beginPath(); ctx.arc(ex, ey, 9, 0, Math.PI * 2); ctx.fill();

  ctx.strokeStyle = '#e53935';
  ctx.strokeRect(ex - 7, ey - 3, 2, 1);
  ctx.strokeRect(ex + 4, ey + 4, 2, 1);

  ctx.fillStyle = '#1e88e5';
  ctx.beginPath(); ctx.arc(ex + 2, ey, 5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#000000';
  ctx.beginPath(); ctx.arc(ex + 2, ey, 2.5, 0, Math.PI * 2); ctx.fill();
}

// 13. Haunted Manor (Lightning alternates: sometimes Left display, sometimes Right display)
export function renderHauntedManor(ctx, t) {
  // Lightning strike trigger
  const strikeCycle = t % 40;
  const isLightning = (strikeCycle === 0 || strikeCycle === 2);
  const strikeSide = Math.floor(t / 40) % 2; // 0 = strikes from Left, 1 = strikes from Right

  if (isLightning) {
    ctx.fillStyle = '#eaf2ff';
    ctx.fillRect(0, 0, 64, 32);
  } else {
    ctx.fillStyle = '#060712';
    ctx.fillRect(0, 0, 64, 32);
  }

  // House Silhouette
  ctx.fillStyle = isLightning ? '#000000' : '#141424';
  ctx.fillRect(16, 15, 32, 17);
  ctx.fillRect(28, 7, 8, 8);
  ctx.beginPath(); ctx.moveTo(27, 7); ctx.lineTo(32, 1); ctx.lineTo(37, 7); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.moveTo(14, 15); ctx.lineTo(22, 10); ctx.lineTo(30, 15); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.moveTo(34, 15); ctx.lineTo(42, 10); ctx.lineTo(50, 15); ctx.closePath(); ctx.fill();

  ctx.fillStyle = isLightning ? '#000000' : '#ffaa00';
  ctx.fillRect(20, 18, 4, 5); ctx.fillRect(40, 18, 4, 5); ctx.fillRect(30, 9, 4, 4);

  // Branching lightning bolt from left or right
  if (isLightning) {
    ctx.strokeStyle = '#66a3ff';
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (strikeSide === 0) {
      // Strike down on Left Display
      ctx.moveTo(10, 0); ctx.lineTo(18, 6); ctx.lineTo(14, 10); ctx.lineTo(22, 15);
    } else {
      // Strike down on Right Display
      ctx.moveTo(54, 0); ctx.lineTo(46, 6); ctx.lineTo(50, 10); ctx.lineTo(42, 15);
    }
    ctx.stroke();
  }
}

// 14. Inferno Hellfire Simulation (Turbulent chaotic flame tongues, sparks & heat glow)
export function renderFlameWall(ctx, t) {
  ctx.fillStyle = '#080000';
  ctx.fillRect(0, 0, 64, 32);

  // 32 Columns of turbulent flickering flame tongues
  for (let c = 0; c < 32; c++) {
    const x = c * 2;
    // Chaotic multi-frequency flame noise instead of a simple sine wave
    const n1 = Math.sin(c * 0.4 + t * 0.5);
    const n2 = Math.cos(c * 0.9 - t * 0.7);
    const n3 = Math.sin(c * 1.5 + t * 0.9);
    const rawH = 14 + (n1 * 6) + (n2 * 4) + (n3 * 3);
    const h = Math.max(5, Math.min(29, Math.floor(rawH)));

    // Outer Red mantle
    ctx.fillStyle = '#cc0000';
    ctx.fillRect(x, 32 - h, 2, h);
    // Vibrant Orange body
    const oh = Math.floor(h * 0.75);
    ctx.fillStyle = '#ff6600';
    ctx.fillRect(x, 32 - oh, 2, oh);
    // Yellow hot interior
    const yh = Math.floor(h * 0.45);
    ctx.fillStyle = '#ffea00';
    ctx.fillRect(x, 32 - yh, 2, yh);
    // Incandescent White Core
    const wh = Math.floor(h * 0.2);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x, 32 - wh, 2, wh);
  }

  // Rising fire sparks & embers shooting up
  for (let s = 0; s < 5; s++) {
    const sx = (s * 13 + (t * 3)) % 64;
    const sy = (32 - ((t * 1.5 + s * 6) % 32));
    ctx.fillStyle = (s % 2 === 0) ? '#ffea00' : '#ff4500';
    ctx.fillRect(sx, sy, 1, 1);
  }
}

// 15. Specter Swirl & Spectral Soul Flames (CipriEnt)
export function renderGhostlyTrio(ctx, t) {
  ctx.fillStyle = '#060514';
  ctx.fillRect(0, 0, 64, 32);

  const radiusX = 22;
  const radiusY = 9;

  for (let i = 0; i < 3; i++) {
    const angle = (t * 0.08) + (i * (Math.PI * 2 / 3));
    const gx = Math.floor(32 + Math.cos(angle) * radiusX);
    const gy = Math.floor(16 + Math.sin(angle) * radiusY);

    const colors = [
      { body: '#dff9fb', eye: '#130f40' },
      { body: '#c7ecee', eye: '#30336b' },
      { body: '#e056fd', eye: '#4834d4' }
    ];
    const col = colors[i];

    ctx.fillStyle = col.body;
    ctx.beginPath(); ctx.arc(gx, gy, 4, 0, Math.PI * 2); ctx.fill();

    const tailX = gx - Math.cos(angle) * 3;
    const tailY = gy - Math.sin(angle) * 3;
    ctx.fillRect(tailX - 1, tailY - 1, 2, 2);

    ctx.fillStyle = col.eye;
    ctx.fillRect(gx - 1, gy - 1, 1, 1); ctx.fillRect(gx + 1, gy - 1, 1, 1);
  }
}

// 16. Blood Ritual Pentagram & Sanguine Sparks (CipriEnt)
export function renderBloodAltarCircle(ctx, t) {
  ctx.fillStyle = '#050002';
  ctx.fillRect(0, 0, 64, 32);

  ctx.strokeStyle = '#1a050b';
  ctx.strokeRect(0, 0, 64, 32);

  const bloodPulse = (t % 6 < 3) ? '#b71c1c' : '#d50000';
  ctx.strokeStyle = bloodPulse;
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.arc(32, 16, 12, 0, Math.PI * 2);
  ctx.stroke();

  const pts = [];
  for (let i = 0; i < 5; i++) {
    const a = (i * (Math.PI * 2 / 5)) - (Math.PI / 2);
    pts.push({ x: 32 + Math.cos(a) * 11, y: 16 + Math.sin(a) * 11 });
  }
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  ctx.lineTo(pts[2].x, pts[2].y);
  ctx.lineTo(pts[4].x, pts[4].y);
  ctx.lineTo(pts[1].x, pts[1].y);
  ctx.lineTo(pts[3].x, pts[3].y);
  ctx.closePath();
  ctx.stroke();

  for (let s = 0; s < 6; s++) {
    const sx = 10 + (s * 8) + Math.sin(t * 0.3 + s) * 2;
    const sy = (32 - ((t * 0.9 + s * 7) % 32));
    ctx.fillStyle = '#ff1744';
    ctx.fillRect(sx, sy, 1, 1);
  }
}

// 17. Neon Halloween Scrolling Text
export function renderTextTicker(ctx, t) {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 64, 32);

  const messages = '🎃 HAPPY HALLOWEEN 👻 TRICK OR TREAT 🦇 BEWARE THE WITCHING HOUR 💀';
  const offset = (t * 2) % 600;

  ctx.fillStyle = '#ff6a00';
  ctx.font = 'bold 15px monospace';
  ctx.fillText(messages, 64 - offset, 21);
}

// Curated Scene Map
export const SCENE_MAP = {
  'eyes': renderEyes,
  'skull': renderSkull,
  'ghost': renderGhost,
  'reaper': renderReaper,
  'mummy': renderMummy,
  'witch': renderWitch,
  'zombie-hand': renderZombieHand,
  'bats': renderBats,
  'spider': renderSpider,
  'black-cat': renderBlackCat,
  'creepy-eyes': renderCreepyEyes,
  'eyeball-bounce': renderEyeball,
  'haunted-manor': renderHauntedManor,
  'flame-wall': renderFlameWall,
  'ghostly-trio': renderGhostlyTrio,
  'blood-altar-circle': renderBloodAltarCircle,
  'text-ticker': renderTextTicker
};
