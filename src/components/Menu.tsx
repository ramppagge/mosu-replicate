"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  fullMenuCategories,
  fullMenuItems,
  type FullMenuCategory,
} from "@/lib/data";

export default function Menu() {
  const [active, setActive] = useState<FullMenuCategory>("coffee");

  const filtered = fullMenuItems.filter((item) => item.category === active);

  return (
    <section
      id="menu"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-brand-secondary dark:bg-brand-dark"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Menu"
          subtitle="Crafted with passion, served with love"
          light={false}
        />

        {/* Category Filter — pill-shaped, active highlighted */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12"
        >
          {fullMenuCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`relative px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer overflow-hidden ${
                active === cat.key
                  ? "text-white dark:text-brand-dark"
                  : "bg-white dark:bg-white/10 text-brand-muted dark:text-white/70 hover:text-brand-primary dark:hover:text-white border border-white/20 dark:border-white/10"
              }`}
            >
              {active === cat.key && (
                <motion.span
                  layoutId="menuActivePill"
                  className="absolute inset-0 bg-brand-accent rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {cat.key === "coffee" && <Coffee className="w-4 h-4" />}
                {cat.label}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Menu Grid — 2 cols desktop, 1 mobile; gap-6 / gap-4 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            {filtered.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group bg-white dark:bg-white/5 rounded-2xl shadow-lg overflow-hidden border border-black/5 dark:border-white/5 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                {/* Image placeholder — aspect-video, bg-gray-200 */}
                <div className="relative aspect-video bg-gray-200 dark:bg-white/10" />

                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-base sm:text-lg text-brand-primary dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-brand-muted dark:text-white/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {item.tag === "bestseller" && (
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                          BESTSELLER
                        </span>
                      )}
                      {item.tag === "new" && (
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                          NEW
                        </span>
                      )}
                      <span className="font-bold text-brand-accent whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
