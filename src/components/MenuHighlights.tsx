"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { menuItems } from "@/lib/data";

const categories = [
  { key: "all", label: "All" },
  { key: "signature", label: "Signature Lattes" },
  { key: "manual-brew", label: "Manual Brews" },
  { key: "pastry", label: "Pastries" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

export default function MenuHighlights() {
  const [active, setActive] = useState<CategoryKey>("all");

  const filtered =
    active === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <section id="menu" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Menu"
          subtitle="From handcrafted espresso to freshly baked pastries — here's what we do best."
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`relative px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 cursor-pointer overflow-hidden ${
                active === cat.key
                  ? "text-white"
                  : "bg-white text-brand-muted hover:text-brand-primary"
              }`}
            >
              {/* Active background pill */}
              {active === cat.key && (
                <motion.span
                  layoutId="activePill"
                  className="absolute inset-0 bg-brand-primary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu Grid with AnimatePresence for filter transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filtered.map((item, index) => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
