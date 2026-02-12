"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 md:mb-16"
    >
      <h2
        className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight ${
          light ? "text-white" : "text-brand-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
            light ? "text-white/60" : "text-brand-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 mx-auto w-12 h-1 rounded-full ${
          light ? "bg-brand-accent/50" : "bg-brand-accent"
        }`}
      />
    </motion.div>
  );
}
