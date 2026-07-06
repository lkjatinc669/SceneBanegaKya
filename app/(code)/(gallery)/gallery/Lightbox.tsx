"use client";

import { X } from "lucide-react";
import { motion } from "framer-motion";
import { GalleryItem } from "./GalleryCard";

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center p-4 md:p-8">
      {/* Dimmed backdrop background closer */}
      <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

      {/* Dismiss Toggle Hook */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-muted-foreground hover:text-foreground h-12 w-12 rounded-full border border-border/50 bg-surface/80 flex items-center justify-center cursor-pointer transition-transform hover:scale-105 z-50"
      >
        <X size={18} />
      </button>

      {/* Cinematic Performance Presentation Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        className="relative max-w-5xl w-full aspect-video rounded-[2.5rem] overflow-hidden border border-border/80 bg-black shadow-2xl z-10"
      >
        {item.type === "video" ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${item.mediaUrl}?autoplay=1&rel=0&modestbranding=1&hl=hi`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-none"
          />
        ) : (
          <img
            src={`${item.mediaUrl}&auto=format&fit=contain&w=1200&q=90`}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        )}
      </motion.div>

      {/* Explanatory Dual Meta Layer Below Target Canvas */}
      <div className="relative text-center mt-6 z-10 max-w-xl pointer-events-none">
        <h3 className="text-xl font-bold font-english-heading tracking-tight text-foreground">{item.title}</h3>
      </div>
    </div>
  );
}