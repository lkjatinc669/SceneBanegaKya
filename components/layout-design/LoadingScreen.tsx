export default function CinematicLoadingScreen() {
  return (
    <>
      <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#0D0D0D]">

        {/* Film texture */}
        <div className="absolute inset-0 opacity-[0.04]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex justify-between px-8 py-5">
              <div className="h-2 w-12 rounded bg-white/30" />
              <div className="h-2 w-12 rounded bg-white/30" />
            </div>
          ))}
        </div>

        {/* Moving orange glow */}
        <div className="absolute left-1/2 top-1/2 h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E07A4F]/20 blur-[180px] animate-[lightMove_8s_ease-in-out_infinite]" />

        {/* Moving shine */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/2 top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl animate-[shine_4s_linear_infinite]" />
        </div>

        {/* Content */}
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">

          <div className="relative overflow-hidden">
            <h1 className="animate-[fadeUp_.8s_ease_forwards] text-5xl font-bold tracking-[-0.06em] text-[#F5F1EB] md:text-8xl">
              Scene Banega{" "}
              <span className="text-[#E07A4F] relative">
                Kya?
                <span className="absolute inset-0 overflow-hidden">
                  <span className="absolute -left-1/2 top-0 h-full w-10 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/70 to-transparent animate-[shimmer_2s_linear_infinite]" />
                </span>
              </span>
            </h1>
          </div>

          {/* Progress */}
          <div className="relative mt-10 h-[3px] w-72 overflow-hidden rounded-full bg-white/10">
            <div className="h-full origin-left bg-[#E07A4F] animate-[progress_3s_linear_forwards]" />

            <div className="absolute inset-0">
              <div className="absolute -left-10 h-full w-12 bg-gradient-to-r from-transparent via-white to-transparent blur-sm animate-[shimmer_1.2s_linear_infinite]" />
            </div>
          </div>
        </div>

        {/* Curved wipe */}
        <div className="pointer-events-none absolute bottom-[-180px] left-0 h-[340px] w-full rounded-t-[100%] bg-[#0D0D0D] animate-[curve_1s_cubic-bezier(.76,0,.24,1)_3s_forwards]" />

      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lightMove {
          0% {
            transform: translate(-60%, -55%);
          }
          50% {
            transform: translate(-35%, -45%);
          }
          100% {
            transform: translate(-60%, -55%);
          }
        }

        @keyframes shimmer {
          from {
            transform: translateX(-220px) skewX(-20deg);
          }
          to {
            transform: translateX(800px) skewX(-20deg);
          }
        }

        @keyframes shine {
          from {
            transform: translateX(-120%) rotate(12deg);
          }
          to {
            transform: translateX(220%) rotate(12deg);
          }
        }

        @keyframes progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes curve {
          0% {
            transform: translateY(0) scaleY(1);
          }

          100% {
            transform: translateY(-130vh) scaleY(1.4);
          }
        }
      `}</style>
    </>
  );
}