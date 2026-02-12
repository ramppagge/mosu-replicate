"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerating count
        const increment = prev < 60 ? 3 : prev < 90 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 100) {
      const timeout = setTimeout(() => setLoading(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [count]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-brand-dark flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              mosu<span className="text-brand-accent">.</span>
            </span>
          </motion.div>

          {/* Counter */}
          <div className="relative w-40 sm:w-48">
            <div className="flex justify-between mb-2">
              <span className="text-xs text-white/40 font-mono">loading</span>
              <span className="text-xs text-brand-accent font-mono">
                {count}%
              </span>
            </div>
            <div className="h-px bg-white/10 w-full">
              <motion.div
                className="h-full bg-brand-accent"
                initial={{ width: "0%" }}
                animate={{ width: `${count}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Bottom text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-4 sm:bottom-8 text-xs text-white/20 tracking-widest uppercase"
          >
            Brewing experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
