// gallery/GalleryFilter.tsx
"use client";

export interface CategoryStructure {
  label: string;
  value: string;
}

interface GalleryFilterProps {
  categories: CategoryStructure[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function GalleryFilter({ categories, activeCategory, onCategoryChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-start gap-3 border-b border-border/40 pb-6 mb-12 overflow-x-auto no-scrollbar">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.value;
        return (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 border cursor-pointer whitespace-nowrap flex items-center gap-2.5 focus:outline-none focus:ring-1 focus:ring-primary/40 ${
              isActive
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/10"
                : "bg-surface/30 text-muted-foreground border-border/60 hover:border-foreground/40 hover:text-foreground"
            }`}
          >
            <span className="font-mono font-bold tracking-widest">{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}