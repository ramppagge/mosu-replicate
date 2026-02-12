"use client";

import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   SVG Components
   ───────────────────────────────────────────────────────────── */

function CupSVG() {
  return (
    <svg viewBox="0 0 120 110" fill="none">
      <ellipse
        cx="52"
        cy="98"
        rx="44"
        ry="8"
        stroke="#22C55E"
        strokeWidth="1.8"
        opacity="0.5"
      />
      <path
        d="M24 35 C25 58 26 75 28 82 C30 87 74 87 76 82 C78 75 79 58 80 35"
        stroke="#22C55E"
        strokeWidth="2"
        fill="#22C55E"
        fillOpacity="0.08"
      />
      <ellipse
        cx="52"
        cy="35"
        rx="28"
        ry="9"
        stroke="#22C55E"
        strokeWidth="2"
        fill="#22C55E"
        fillOpacity="0.06"
      />
      <ellipse cx="52" cy="37" rx="22" ry="6" fill="#22C55E" opacity="0.15" />
      <path
        d="M80 43 C96 43 96 72 80 72"
        stroke="#22C55E"
        strokeWidth="2.2"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}

function BeanSVG() {
  return (
    <svg viewBox="0 0 22 32" fill="none">
      <ellipse cx="11" cy="16" rx="9.5" ry="14" fill="#6B3A2A" />
      <path
        d="M11 3 C8 10 8 22 11 29"
        stroke="#3D1E0C"
        strokeWidth="1.4"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

function SteamSVG() {
  return (
    <svg viewBox="0 0 20 60" fill="none">
      <path
        d="M10 58 C4 45 16 35 10 22 C4 8 16 2 10 2"
        stroke="#22C55E"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M14 55 C8 42 18 33 12 20 C6 7 14 2 14 2"
        stroke="#22C55E"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Layout data
   ───────────────────────────────────────────────────────────── */

const cups = [
  { left: "3%", top: "8%", w: 110, opacity: 0.5, dur: 7, rot: -12 },
  { left: "74%", top: "50%", w: 130, opacity: 0.4, dur: 8, rot: 8 },
  { left: "82%", top: "3%", w: 85, opacity: 0.35, dur: 6.5, rot: -6 },
  { left: "40%", top: "72%", w: 95, opacity: 0.3, dur: 7.5, rot: 14 },
];

const beans = [
  { left: "10%", top: "58%", w: 38, opacity: 0.65, dur: 4.5, rot: 25 },
  { left: "65%", top: "13%", w: 34, opacity: 0.55, dur: 5, rot: -30 },
  { left: "88%", top: "34%", w: 28, opacity: 0.5, dur: 4.2, rot: 45 },
  { left: "18%", top: "82%", w: 32, opacity: 0.55, dur: 4.8, rot: -20 },
  { left: "52%", top: "76%", w: 36, opacity: 0.5, dur: 5.5, rot: 15 },
  { left: "34%", top: "4%", w: 26, opacity: 0.55, dur: 4, rot: -40 },
  { left: "71%", top: "80%", w: 30, opacity: 0.45, dur: 5.2, rot: 60 },
  { left: "92%", top: "68%", w: 24, opacity: 0.5, dur: 4.6, rot: -10 },
  { left: "2%", top: "35%", w: 28, opacity: 0.45, dur: 5.8, rot: 35 },
];

const steams = [
  { left: "8%", top: "1%", w: 26, h: 65, opacity: 0.35, dur: 5 },
  { left: "80%", top: "42%", w: 22, h: 58, opacity: 0.3, dur: 4.5 },
  { left: "44%", top: "54%", w: 24, h: 55, opacity: 0.25, dur: 5.5 },
  { left: "60%", top: "8%", w: 20, h: 50, opacity: 0.28, dur: 4.8 },
];

const glows = [
  { left: "14%", top: "22%", size: 180, opacity: 0.18, dur: 9, color: "#22C55E" },
  { left: "68%", top: "26%", size: 140, opacity: 0.2, dur: 8, color: "#ffcc88" },
  { left: "42%", top: "60%", size: 220, opacity: 0.14, dur: 10, color: "#ffcc88" },
  { left: "4%", top: "44%", size: 120, opacity: 0.16, dur: 7.5, color: "#22C55E" },
  { left: "82%", top: "66%", size: 160, opacity: 0.16, dur: 8.5, color: "#ffcc88" },
  { left: "28%", top: "14%", size: 130, opacity: 0.14, dur: 7, color: "#22C55E" },
  { left: "58%", top: "38%", size: 170, opacity: 0.12, dur: 9.5, color: "#ffcc88" },
];

/* ─────────────────────────────────────────────────────────────
   Main export
   ───────────────────────────────────────────────────────────── */

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* ── Background gradient ──────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #0a1a0f 0%, #050505 50%, #030303 100%)",
        }}
      />
      {/* Subtle secondary glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[60%] h-[50%] opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 80% 80%, #1a0e05 0%, transparent 70%)",
        }}
      />

      {/* ── Warm central glow ────────────────────────────── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25"
        style={{
          width: "min(1000px, 95vw)",
          height: "min(1000px, 95vw)",
          background:
            "radial-gradient(circle, #22C55E 0%, #0a1a0f 40%, transparent 70%)",
        }}
      />

      {/* ── Coffee cup outlines ──────────────────────────── */}
      {cups.map((c, i) => (
        <motion.div
          key={`cup-${i}`}
          className="absolute"
          style={{ left: c.left, top: c.top, width: c.w }}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: c.opacity,
            y: [0, -14, 0],
            rotate: [c.rot, c.rot + 5, c.rot],
          }}
          transition={{
            opacity: { duration: 1.5, delay: 1.2 + i * 0.3 },
            y: {
              duration: c.dur,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: c.dur * 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <CupSVG />
        </motion.div>
      ))}

      {/* ── Coffee beans ─────────────────────────────────── */}
      {beans.map((b, i) => (
        <motion.div
          key={`bean-${i}`}
          className="absolute"
          style={{ left: b.left, top: b.top, width: b.w }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: b.opacity,
            scale: 1,
            y: [0, -10, 0],
            rotate: [b.rot, b.rot + 25, b.rot],
          }}
          transition={{
            opacity: { duration: 1, delay: 1.5 + i * 0.1 },
            scale: { duration: 1, delay: 1.5 + i * 0.1 },
            y: {
              duration: b.dur,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: b.dur * 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <BeanSVG />
        </motion.div>
      ))}

      {/* ── Steam wisps ──────────────────────────────────── */}
      {steams.map((s, i) => (
        <motion.div
          key={`steam-${i}`}
          className="absolute"
          style={{ left: s.left, top: s.top, width: s.w, height: s.h }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, s.opacity, s.opacity, 0],
            y: [0, -20, -45, -70],
          }}
          transition={{
            duration: s.dur,
            delay: 1.5 + i * 0.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <SteamSVG />
        </motion.div>
      ))}

      {/* ── Bokeh glow circles ───────────────────────────── */}
      {glows.map((g, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full"
          style={{
            left: g.left,
            top: g.top,
            width: g.size,
            height: g.size,
            background: `radial-gradient(circle, ${g.color}55 0%, transparent 70%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, g.opacity, g.opacity * 0.6, g.opacity],
            y: [0, -10, 0],
          }}
          transition={{
            opacity: {
              duration: g.dur,
              delay: 1 + i * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: g.dur,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </div>
  );
}
