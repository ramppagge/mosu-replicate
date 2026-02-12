"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items?: string[];
  speed?: number;
  separator?: string;
}

export default function Marquee({
  items = [
    "Signature Lattes",
    "Manual Brew",
    "Cold Brew",
    "Artisan Pastries",
    "Open 24 Hours",
    "Free Wifi",
    "Cozy Vibes",
    "Study Spot",
  ],
  speed = 20,
  separator = "///",
}: MarqueeProps) {
  // Double the items for seamless loop
  const content = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-6 bg-brand-primary">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {content.map((item, i) => (
          <span
            key={i}
            className="flex items-center shrink-0 mx-2 sm:mx-4"
          >
            <span className="font-display text-sm md:text-base font-medium tracking-wider uppercase text-white/80">
              {item}
            </span>
            <span className="ml-4 sm:ml-8 text-brand-accent text-xs font-mono">
              {separator}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
