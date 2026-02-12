"use client";

import { motion } from "framer-motion";
import { locations, openingHours } from "@/lib/data";
import { WordReveal } from "@/components/ui/TextReveal";

export default function Location() {
  return (
    <section id="visit" className="py-24 md:py-40 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium text-brand-accent tracking-wider uppercase mb-4"
          >
            Find Us
          </motion.span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            <WordReveal delay={0.1}>Come hang out.</WordReveal>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-white/50 text-base md:text-lg max-w-lg mx-auto"
          >
            Two spots in Yogyakarta. Both open around the clock.
          </motion.p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {locations.map((loc, i) => (
            <motion.a
              key={loc.name}
              href={loc.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-colors duration-300"
            >
              {/* Green dot */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
                <span className="text-xs font-medium text-brand-accent tracking-wider uppercase">
                  Open Now
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-3">
                {loc.name}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">
                {loc.address}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-brand-accent">
                <span className="text-sm font-medium">Get Directions</span>
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  &rarr;
                </motion.span>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-brand-accent/40 to-transparent" />
                <div className="absolute top-0 right-0 h-px w-12 bg-gradient-to-l from-brand-accent/40 to-transparent" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Hours banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center p-8 rounded-2xl border border-brand-accent/20 bg-brand-accent/5"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-3 h-3 rounded-full bg-brand-accent animate-pulse" />
            <span className="font-display text-xl md:text-2xl font-bold text-white">
              {openingHours}
            </span>
          </div>
          <p className="text-sm text-white/40">
            Rain or shine, deadline or date night.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
