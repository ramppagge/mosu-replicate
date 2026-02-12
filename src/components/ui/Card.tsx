"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CardProps {
  image: string;
  title: string;
  description: string;
  price?: string;
  index?: number;
}

export default function Card({
  image,
  title,
  description,
  price,
  index = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-bold text-lg text-brand-primary">
            {title}
          </h3>
          {price && (
            <span className="shrink-0 text-sm font-semibold text-brand-accent bg-brand-green-light px-2.5 py-0.5 rounded-full">
              {price}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-brand-muted leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
