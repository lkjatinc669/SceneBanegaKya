export function BgGrid() {
  return (
    <div 
      className="absolute inset-0 opacity-[0.08]" 
      style={{
        backgroundImage: `
          linear-gradient(to right, var(--border) 1px, transparent 1px),
          linear-gradient(to bottom, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}