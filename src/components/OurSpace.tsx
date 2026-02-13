"use client";

import { motion } from "framer-motion";
import { Cigarette, Wind, Sun } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const spaces = [
  {
    id: "lounge",
    name: "The Lounge",
    tagline: "Vape-friendly zone",
    icon: Cigarette,
    badge: "Vaping Allowed",
    badgeClass: "bg-amber-500/20 text-amber-700 dark:text-amber-400 border-amber-500/30",
    gradient: "from-amber-900/50 to-slate-800",
    bestFor: "Relaxing with friends",
    features: [
      "Dedicated IQOS & vaping area",
      "Comfortable sofas",
      "Ambient lighting",
      "Air purifier system",
    ],
  },
  {
    id: "focus",
    name: "The Focus Zone",
    tagline: "Clean air, clear mind",
    icon: Wind,
    badge: "Smoke-Free",
    badgeClass: "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-500/30",
    gradient: "from-emerald-900/50 to-slate-800",
    bestFor: "Working & studying",
    features: [
      "100% smoke-free",
      "Quiet environment",
      "Co-working friendly",
      "Power outlets at every seat",
      "Fast WiFi (100Mbps)",
    ],
  },
  {
    id: "garden",
    name: "The Garden",
    tagline: "Fresh air & natural vibes",
    icon: Sun,
    badge: "Pet-Friendly",
    badgeClass: "bg-sky-500/20 text-sky-700 dark:text-sky-400 border-sky-500/30",
    gradient: "from-sky-900/50 to-slate-800",
    bestFor: "Casual hangouts & dates",
    features: [
      "Open-air seating",
      "Natural lighting (daytime)",
      "String lights (nighttime)",
      "Pet-friendly",
      "Street view",
    ],
  },
];

function SpaceCard({
  space,
  index,
}: {
  space: (typeof spaces)[number];
  index: number;
}) {
  const Icon = space.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-lg border border-black/5 dark:border-white/5 hover:shadow-xl transition-all duration-300"
    >
      {/* Image placeholder with gradient */}
      <div
        className={`relative aspect-[4/3] bg-gradient-to-br ${space.gradient} flex items-center justify-center`}
      >
        <Icon className="w-14 h-14 sm:w-16 sm:h-16 text-white/40 group-hover:text-white/60 transition-colors" />
        <span
          className={`absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold rounded-full border ${space.badgeClass}`}
        >
          {space.badge}
        </span>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-xl text-brand-primary dark:text-white">
          {space.name}
        </h3>
        <p className="mt-1 text-sm text-brand-accent font-medium">
          {space.tagline}
        </p>

        <ul className="mt-4 space-y-2 flex-1">
          {space.features.map((feature, i) => (
            <li
              key={i}
              className="text-sm text-brand-muted dark:text-white/70 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <p className="mt-4 pt-4 border-t border-black/5 dark:border-white/10 text-sm">
          <span className="text-brand-muted dark:text-white/50">Best for: </span>
          <span className="font-medium text-brand-primary dark:text-white">
            {space.bestFor}
          </span>
        </p>
      </div>
    </motion.article>
  );
}

export default function OurSpace() {
  return (
    <section
      id="our-space"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-brand-secondary dark:bg-brand-dark"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Find Your Perfect Spot"
          subtitle="Three unique spaces for every mood"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {spaces.map((space, index) => (
            <SpaceCard key={space.id} space={space} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
