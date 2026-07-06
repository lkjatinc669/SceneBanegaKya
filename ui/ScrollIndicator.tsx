export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center gap-5">
      <div className="hero-rotate relative flex h-28 w-28 items-center justify-center rounded-full border border-border/40">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 120 120">
          <defs>
            <path
              id="hero-circle"
              d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
            />
          </defs>
          <text
            fill="currentColor"
            className="fill-foreground-muted text-[8px] uppercase tracking-[0.35em]"
          >
            <textPath href="#hero-circle">
              Scroll To Explore • Scene Banega Kya •
            </textPath>
          </text>
        </svg>

        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-xl">
          ↓
        </div>
      </div>
    </div>
  );
}