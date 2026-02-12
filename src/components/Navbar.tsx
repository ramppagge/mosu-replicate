"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit Us", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);

      // Hide navbar on scroll down, show on scroll up
      if (currentY > lastScrollY && currentY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-brand-dark/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              mosu<span className="text-brand-accent">.</span>
            </motion.a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-brand-accent group-hover:w-4/5 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA (Desktop) */}
            <a
              href="#menu"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium bg-brand-accent text-brand-dark rounded-full hover:bg-brand-accent/85 transition-all"
            >
              Order Now
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer rounded-full border border-white/10"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 6 }
                    : { rotate: 0, y: 0 }
                }
                className="block w-4 h-0.5 bg-white origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-4 h-0.5 bg-white"
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0 }
                }
                className="block w-4 h-0.5 bg-white origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-dark flex flex-col items-center justify-center md:hidden"
          >
            {/* Grid background */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative z-10 flex flex-col items-center gap-6"
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.08 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-3xl sm:text-4xl font-bold text-white hover:text-brand-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-6 sm:bottom-10 flex items-center gap-6 text-sm text-white/30"
            >
              <span>Instagram</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>WhatsApp</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
