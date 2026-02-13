"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const images = [
  {
    src: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?q=80&w=800",
    alt: "Coffee being poured",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=800",
    alt: "Cafe interior",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800",
    alt: "Latte art",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=800",
    alt: "Coffee shop atmosphere",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800",
    alt: "Espresso shot",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800",
    alt: "Cozy corner",
    aspect: "aspect-[4/3]",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 md:mb-12">
        <SectionTitle
          title="The Vibe"
          subtitle="Step inside. Feel the warmth, hear the grinder, smell the brew."
        />
      </div>

      {/* Side-scroll (horizontal scroll) strip — scroll or swipe horizontally */}
      <div
        className="overflow-x-auto overflow-y-hidden pb-2 -mx-4 sm:-mx-6 lg:-mx-8 snap-x snap-mandatory [scrollbar-width:thin] [scrollbar-color:var(--color-brand-muted)_transparent]"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex gap-4 sm:gap-6 md:gap-8 pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-8 min-w-max">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`shrink-0 w-[260px] sm:w-[300px] md:w-[360px] lg:w-[420px] snap-center ${img.aspect} relative rounded-2xl overflow-hidden group`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none select-none"
                sizes="420px"
                draggable={false}
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-colors duration-500 pointer-events-none" />

              {/* Hover label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
                <span className="text-sm font-medium text-white bg-brand-dark/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
