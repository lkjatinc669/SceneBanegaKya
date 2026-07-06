
export interface ReelItem {
  id: string;
  title: string;
  category: "commercial" | "brand-story" | "experimental";
  youtubeId: string;
  type: string;
  thumbnail?: string;
}

export const masterReels: ReelItem[] = [
  { id: "r1", title: "What is Editing", category: "experimental", youtubeId: "qWwqLH-G7vk", type:"video", },
  { id: "r2", title: "Blinkit Fast Delivery Service", category: "commercial", youtubeId: "MVWZcabP_G8", type:"video", },
  { id: "r3", title: "Nvidia Spark", category: "brand-story", youtubeId: "E7twaEPtCSU", type:"video", },
  { id: "r4", title: "Real Estate Marketing", category: "commercial", youtubeId: "E7twaEPtCSU", type:"video" }, // Note: Shared identical link in pro, ,mpt
  { id: "r5", title: "Darkside of School", category: "brand-story", youtubeId: "ugLlsZShAck", type:"video", },
  { id: "r6", title: "The Ad Campaign", category: "commercial", youtubeId: "VzavQKdcCas", type:"video", },
  { id: "r7", title: "Why Starbucks is Different", category: "brand-story", youtubeId: "bGWgMgszBUQ", type:"video", },
  { id: "r8", title: "Liquid Death", category: "commercial", youtubeId: "i8xE7ZIOlxs", type:"video", },
  { id: "r9", title: "We Just Don't Edit", category: "experimental", youtubeId: "_RE9fA4eCb0", type:"video", },
  { id: "r10", title: "Apple Style", category: "commercial", youtubeId: "_2-AkUBFVcw", type:"video", },
];