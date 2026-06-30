// 1. Define the TypeScript interface for type safety
export interface SubService {
  name: string;
  href: string;
}

export interface NavItem {
  name: string;
  href: string;
  subservices?: SubService[];
}

// 2. Define the strongly-typed navigation array
const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services", 
    subservices: [
      { name: "Graphic Design", href: "/services/graphic-design" },
      { name: "Video Editing", href: "/services/video-editing" },
      { name: "Motion Graphics", href: "/services/motion-graphics" },
      { name: "Brand Identity", href: "/services/brand-identity" },
      { name: "Creative Content", href: "/services/creative-content" },
      { name: "Digital Production", href: "/services/digital-production" },
    ]
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default navItems;