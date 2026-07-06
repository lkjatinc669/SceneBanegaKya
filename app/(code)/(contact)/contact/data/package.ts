// data/packages.ts

export interface AssetComponent {
  id: string;
  label: string;
  quantity: number;
  type: 'video' | 'design' | 'photo';
}

export interface ServicePackage {
  id: string;
  tag: string; // e.g., "CAMPAIGN", "CREATOR", "IDENTITY"
  title: string;
  description: string;
  coreAsset: string;
  satellites: AssetComponent[];
}

export const multiDisciplinaryPackages: ServicePackage[] = [
  {
    id: "commercial-ad-campaign",
    tag: "COMMERCIAL AD CAMPAIGN",
    title: "Commercial Video & Ad Kit",
    description: "A complete cinematic commercial deployment package with custom social assets engineered for high-conversion advertising.",
    coreAsset: "1x High-End Commercial / Brand Film",
    satellites: [
      { id: "yt-thumb", label: "YouTube / Video Thumbnail", quantity: 1, type: "design" },
      { id: "ig-posters", label: "Instagram Grid Marketing Posters", quantity: 2, type: "design" },
      { id: "social-stories", label: "Vertical Story / Reel Teaser Graphics", quantity: 2, type: "design" },
      { id: "brand-stills", label: "Commercial Production Stills (Photography)", quantity: 5, type: "photo" }
    ]
  },
  {
    id: "youtube-growth-engine",
    tag: "YOUTUBE PRODUCTION",
    title: "Podcast & Longform Engine",
    description: "Turn raw multi-cam recording into a fully optimized, high-click-through visual ecosystem.",
    coreAsset: "1x Full Length Podcast / Interview Production",
    satellites: [
      { id: "yt-thumb-variants", label: "A/B Testing High-CTR Thumbnails", quantity: 2, type: "design" },
      { id: "shorts-reels", label: "Edited Shorts / Reels with Motion Graphics", quantity: 3, type: "video" },
      { id: "promo-banners", label: "Community Tab & Social Promo Graphics", quantity: 2, type: "design" }
    ]
  },
  {
    id: "brand-identity-launch",
    tag: "BRAND ARCHITECTURE",
    title: "Brand Identity & Visual Launch",
    description: "For new brands requiring a cohesive industrial identity across digital user interfaces and physical assets.",
    coreAsset: "Comprehensive Brand Identity & UI/UX Web Framework",
    satellites: [
      { id: "logo-system", label: "Logo Suite & Core Vector Assets", quantity: 1, type: "design" },
      { id: "motion-intro", label: "Animated Motion Logo & Intros", quantity: 1, type: "video" },
      { id: "creative-shoot", label: "Creative Brand Photography & Assets", quantity: 12, type: "photo" }
    ]
  }
];