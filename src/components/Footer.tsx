"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "WhatsApp", href: "https://wa.me" },
  { label: "Google Maps", href: "https://maps.google.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-dark border-t border-white/5 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Top: Big CTA */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-white/30 tracking-wider uppercase mb-4"
          >
            Ready for a cup?
          </motion.p>
          <motion.a
            href="#visit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-block font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white hover:text-brand-accent transition-colors duration-500 tracking-tight"
          >
            Let&apos;s meet.
          </motion.a>
        </div>

        {/* Middle: Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand */}
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold text-white tracking-tight"
          >
            mosu<span className="text-brand-accent">.</span>
          </motion.a>

          {/* Social Links with magnetic effect */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <MagneticButton key={link.label} strength={0.2}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white/50 border border-white/10 rounded-full hover:text-white hover:border-white/30 transition-all duration-300"
                >
                  {link.label}
                </a>
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <p>&copy; {currentYear} Mosu Coffee. All rights reserved.</p>
          <p className="font-mono tracking-wider">
            Yogyakarta, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
