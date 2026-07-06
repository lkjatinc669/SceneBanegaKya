import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  heading?: string;
  subHeading?: string;
  hindiHeading?: string;
  background?: ReactNode; 
}

export default function Section({
  heading,
  subHeading,
  hindiHeading,
  background,
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section className={`relative py-24 lg:py-36 overflow-hidden bg-background ${className}`} {...props}>
      {/* Dynamic Background slot container */}
      {background && <div className="absolute inset-0 pointer-events-none z-0">{background}</div>}

      {/* Foreground Content wrapper */}
      <div className="container relative mx-auto px-6 z-10">
        {(heading || subHeading || hindiHeading) && (
          <div className="mb-16 md:mb-24 max-w-3xl">
            {subHeading && (
              <span className="font-english-body text-[11px] uppercase tracking-[0.35em] text-foreground-muted block mb-4">
                {subHeading}
              </span>
            )}
            {heading && (
              <h2 className="font-english-heading text-4xl md:text-6xl tracking-tight mb-4">
                {heading}
              </h2>
            )}
            {hindiHeading && (
              <h3 className="font-hindi-heading text-4xl md:text-5xl text-primary leading-tight">
                {hindiHeading}
              </h3>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

// import { HTMLAttributes } from "react";

// interface SectionProps extends HTMLAttributes<HTMLDivElement> {
//   heading?: string;
//   subHeading?: string;
//   hindiHeading?: string;
// }

// export default function Section({ heading, subHeading, hindiHeading, children, className = "", ...props }: SectionProps) {
//   return (
//     <section className={`relative py-24 lg:py-36 overflow-hidden bg-background ${className}`} {...props}>
//       <div className="container relative mx-auto px-6 z-10">
//         {(heading || subHeading || hindiHeading) && (
//           <div className="mb-16 md:mb-24 max-w-3xl">
//             {subHeading && (
//               <span className="font-english-body text-[11px] uppercase tracking-[0.35em] text-foreground-muted block mb-4">
//                 {subHeading}
//               </span>
//             )}
//             {heading && (
//               <h2 className="font-english-heading text-4xl md:text-6xl tracking-tight mb-4">
//                 {heading}
//               </h2>
//             )}
//             {hindiHeading && (
//               <h3 className="font-hindi-heading text-4xl md:text-5xl text-primary leading-tight">
//                 {hindiHeading}
//               </h3>
//             )}
//           </div>
//         )}
//         {children}
//       </div>
//     </section>
//   );
// }