// gallery/reelsData.ts

export interface ReelItem {
  id: string;
  title: string;
  category: "commercial" | "brand-story" | "experimental";
  youtubeId: string;
  thumbnail?: string;
}

export const masterReels: ReelItem[] = [
  { id: "r1", title: "What is Editing", category: "experimental", youtubeId: "qWwqLH-G7vk" },
  { id: "r2", title: "Blinkit Fast Delivery Service", category: "commercial", youtubeId: "MVWZcabP_G8" },
  { id: "r3", title: "Nvidia Spark", category: "brand-story", youtubeId: "E7twaEPtCSU" },
  { id: "r4", title: "Real Estate Marketing", category: "commercial", youtubeId: "E7twaEPtCSU" }, // Note: Shared identical link in prompt
  { id: "r5", title: "Darkside of School", category: "brand-story", youtubeId: "ugLlsZShAck" },
  { id: "r6", title: "The Ad Campaign", category: "commercial", youtubeId: "VzavQKdcCas" },
  { id: "r7", title: "Why Starbucks is Different", category: "brand-story", youtubeId: "bGWgMgszBUQ" },
  { id: "r8", title: "Liquid Death", category: "commercial", youtubeId: "i8xE7ZIOlxs" },
  { id: "r9", title: "We Just Don't Edit", category: "experimental", youtubeId: "_RE9fA4eCb0" },
  { id: "r10", title: "Apple Style", category: "commercial", youtubeId: "_2-AkUBFVcw" }
];