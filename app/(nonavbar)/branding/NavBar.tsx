import Link from "next/link";
import navItems from "./NavItems";
import { SceneLogo } from "./Logo";
import NavbarClient from "./NavbarClient";

export default function Navbar() {
  return (
    <NavbarClient navItems={navItems}>
      {/* Everything inside here is rendered on the server as HTML 
        and passed down to the client wrapper via the `children` prop.
      */}
      {/* Logo */}
      <Link href="/" className="group flex items-center gap-3">
        <SceneLogo logoSrc={"/logo.png"} />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-10 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="uppercase group relative text-sm font-bold text-[#B9B4AD] transition-colors duration-300 hover:text-white"
          >
            <span className="relative">
              {item.name}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-[#E07A4F] to-[#ff9e75] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(224,122,79,0.8)]" />
            </span>
          </Link>
        ))}
      </nav>
    </NavbarClient>
  );
}