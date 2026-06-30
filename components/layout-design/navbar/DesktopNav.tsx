import Link from "next/link";

interface DesktopNavProps {
  navItems: Array<{ name: string; href: string }>;
}

export default function DesktopNav({ navItems }: DesktopNavProps) {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}