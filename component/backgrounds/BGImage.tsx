// 1. High-Res Image Engine Asset Background Component
export function BgImage({ src, opacity = "opacity-30" }: { src: string; opacity?: string }) {
  return (
    <div className="absolute inset-0">
      <img src={src} alt="" className={`w-full h-full object-cover grayscale ${opacity}`} />
      <div className="absolute inset-0 bg-background/90 mix-blend-multiply" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background" />
    </div>
  );
}