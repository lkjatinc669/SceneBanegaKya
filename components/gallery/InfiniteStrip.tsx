const items = [
  " VISUAL STORIES" , " | ",
  " CINEMATIC CONTENT" , " | ",
  " BRAND FILMS" , " | ",
  " REELS" , " | ",
  " COMMERCIALS" , " | ",
  " STORYTELLING" , " | ",
  " COLOR GRADING" , " | ",
];

export default function BrandStrip() {
  return (
    <section className="relative overflow-hidden py-32 bg-black">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E07A4F]/10 blur-[150px]" />
      </div>

      {/* Global CSS for Marquee Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marqueeRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 100s linear infinite;
        }
      `}} />

      {/* Top Strip */}
      <div className="relative -rotate-2 whitespace-nowrap py-8 overflow-hidden">
        <div className="flex w-max items-center gap-16 animate-marquee-left">
          {/* Duplicating twice is sufficient for a seamless infinite loop */}
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="
                cursor-default
                text-5xl
                font-black
                uppercase
                tracking-[-0.08em]
                text-white/50
                transition-all
                duration-500
                hover:scale-105
                hover:text-[#E07A4F]
                hover:drop-shadow-[0_0_40px_rgba(224,122,79,0.4)]
                md:text-7xl
                lg:text-[8rem]
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="relative mt-8 rotate-2 whitespace-nowrap py-8 overflow-hidden">
        <div className="flex w-max items-center gap-16 animate-marquee-right">
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="
                cursor-default
                text-4xl
                font-bold
                uppercase
                tracking-[-0.06em]
                text-[#E07A4F]/50
                transition-all
                duration-500
                hover:text-[#E07A4F]
                md:text-6xl
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}