import { Menu, X } from "lucide-react";

interface MobileToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MobileToggle({ isOpen, onClick }: MobileToggleProps) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-card md:hidden"
    >
      {isOpen ? <X size={18} /> : <Menu size={18} />}
    </button>
  );
}