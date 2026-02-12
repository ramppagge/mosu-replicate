"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { WordReveal } from "@/components/ui/TextReveal";

const stats = [
  { value: "24/7", label: "Always Open" },
  { value: "2", label: "Locations" },
  { value: "50+", label: "Menu Items" },
  { value: "5K+", label: "Happy Customers" },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-24 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with parallax */}
          <motion.div
            style={{ y: imageY }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden"
          >
            <motion.div style={{ scale: imageScale }} className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200"
                alt="Mosu Coffee interior atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-brand-accent text-brand-dark px-3 py-2 sm:px-5 sm:py-3 rounded-2xl"
            >
              <span className="font-display text-xl sm:text-2xl font-bold block leading-none">EST.</span>
              <span className="font-display text-base sm:text-lg font-bold">2020</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-medium text-brand-accent tracking-wider uppercase mb-4"
            >
              Our Story
            </motion.span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary leading-[1.05] tracking-tight mb-6">
              <WordReveal delay={0.1}>More than just coffee.</WordReveal>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-brand-muted text-base md:text-lg leading-relaxed mb-4"
            >
              Mosu Coffee was born from a simple idea: everyone deserves a space
              to slow down, think clearly, and enjoy a damn good cup of coffee.
              Open 24 hours, we&apos;re here for your midnight deadlines, early
              morning cravings, and everything in between.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-brand-muted text-base md:text-lg leading-relaxed mb-10"
            >
              We source our beans carefully, train our baristas obsessively, and
              keep the wifi fast. Because we know what matters.
            </motion.p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="text-center lg:text-left"
                >
                  <span className="font-display text-2xl sm:text-3xl font-bold text-brand-primary block">
                    {stat.value}
                  </span>
                  <span className="text-sm text-brand-muted">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
