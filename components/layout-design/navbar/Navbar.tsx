import Link from "next/link";
import navItems from "./NavItems";
import SceneLogo from "./Logo";
import NavbarClient from "./NavbarClient";
import DesktopNav from "./DesktopNav";

export default function Navbar() {
  return (
    <NavbarClient navItems={navItems}>
      {/* Brand Branding Frame */}
      <Link href="/" className="group flex items-center gap-3">
        <SceneLogo logoSrc="/logo.svg" />
      </Link>

      {/* Desktop Links Grouping */}
      <DesktopNav navItems={navItems} />
    </NavbarClient>
  );
}