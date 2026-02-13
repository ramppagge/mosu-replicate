"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  MessageCircle,
  Calendar,
  Clock,
  Truck,
} from "lucide-react";

const CTAs = [
  {
    label: "Order via GoFood",
    href: "#",
    icon: ShoppingBag,
    variant: "green" as const,
  },
  {
    label: "Order via GrabFood",
    href: "#",
    icon: ShoppingBag,
    variant: "green" as const,
  },
  {
    label: "WhatsApp Order",
    href: "https://wa.me",
    icon: MessageCircle,
    variant: "primary" as const,
  },
];

export default function CTAOrder() {
  return (
    <section
      id="order"
      className="relative py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background: dark gradient with warm overlay (no blue-purple) */}
      <div
        className="absolute inset-0 bg-brand-dark"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "linear-gradient(135deg, rgba(5,5,5,0.98) 0%, rgba(22,101,52,0.25) 50%, rgba(5,5,5,0.98) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Urgency badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium border border-white/10">
            <Clock className="w-4 h-4 text-brand-accent" />
            Open 24/7
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium border border-white/10">
            <Truck className="w-4 h-4 text-brand-accent" />
            Free delivery min. Rp 50.000
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
        >
          Ready to order?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-white/70 max-w-xl mx-auto"
        >
          Get your coffee fix delivered or pick it up
        </motion.p>

        {/* CTA buttons — large, rounded-full, with icons; stacked on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
        >
          {CTAs.map((cta, i) => {
            const Icon = cta.icon;
            const isPrimary = cta.variant === "primary";
            return (
              <a
                key={cta.label}
                href={cta.href}
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`inline-flex items-center justify-center gap-2.5 w-full sm:w-auto min-w-[200px] px-6 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-[0.98] ${
                  isPrimary
                    ? "bg-brand-accent text-brand-dark hover:bg-brand-green-light shadow-lg shadow-brand-accent/25 order-first sm:order-none"
                    : "bg-white/15 text-white border border-white/20 hover:bg-emerald-600 hover:border-emerald-500"
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {cta.label}
              </a>
            );
          })}
        </motion.div>

        {/* Book a Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8"
        >
          <p className="text-sm text-white/50 mb-3">Or dine in with us</p>
          <a
            href="#visit"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white border border-white/30 hover:bg-white/10 transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            Book a Table
          </a>
        </motion.div>
      </div>
    </section>
  );
}
