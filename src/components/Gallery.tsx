"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-45%"]);

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-32 overflow-hidden">
      <div className="px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <SectionTitle
          title="The Vibe"
          subtitle="Step inside. Feel the warmth, hear the grinder, smell the brew."
        />
      </div>

      {/* Horizontal scroll gallery driven by vertical scroll */}
      <motion.div style={{ x }} className="flex gap-4 md:gap-6 px-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`shrink-0 w-[280px] md:w-[350px] lg:w-[400px] ${img.aspect} relative rounded-2xl overflow-hidden group`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="400px"
            />
            <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-colors duration-500" />

            {/* Hover label */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-sm font-medium text-white bg-brand-dark/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {img.alt}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
