"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { CharReveal } from "@/components/ui/TextReveal";
import ParticleField from "@/components/ParticleField";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* Three.js particle background */}
      <ParticleField />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
          <span className="text-sm font-medium text-brand-accent tracking-wide">
            Coffee &amp; Community
          </span>
        </motion.div>

        {/* Main heading with character reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.0 }}
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tighter">
            <CharReveal delay={2.0}>Gather,</CharReveal>
            <br />
            <span className="text-brand-accent">
              <CharReveal delay={2.3}>Sip, Connect.</CharReveal>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="mt-8 text-base md:text-lg text-white/50 max-w-lg mx-auto leading-relaxed"
        >
          Pull up a chair, grab your favorite brew, and lose yourself
          in good conversation. Friends, coffee, and moments that matter.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#menu" variant="primary" size="lg">
            Explore Menu
          </Button>
          <Button href="#visit" variant="outline" size="lg">
            Visit Us
          </Button>
        </motion.div>

        {/* Decorative bottom elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="mt-20 flex items-center justify-center gap-8 text-white/20"
        >
          <span className="h-px w-12 bg-white/10" />
          <span className="text-xs tracking-[0.3em] uppercase font-mono">
            Scroll to explore
          </span>
          <span className="h-px w-12 bg-white/10" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-brand-accent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
