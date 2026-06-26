import React from 'react'

import { motion, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const StatsComponent = () => {
  return (
    <section className="relative border-y border-white/5 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute left-0 top-0 w-full h-full bg-linear-to-b from-transparent via-[#E07A4F]/5 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="grid gap-12 text-center md:grid-cols-2 lg:grid-cols-4">
          {[
            { num: 250, suffix: "+", label: "Projects Delivered" },
            { num: 40, suffix: "+", label: "Global Brands" },
            { num: 10, suffix: "M+", label: "Views Generated" },
            { num: 99, suffix: "%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="relative p-6"
            >
              <div className="absolute inset-0 bg-white/2 rounded-3xl blur-xl" />
              <h3 className="relative text-5xl md:text-6xl font-extrabold text-gradient-accent mb-4">
                <Counter from={0} to={stat.num} suffix={stat.suffix} />
              </h3>
              <p className="relative text-lg font-medium text-[#B9B4AD] tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ from, to, suffix = "", duration = 2 }: { from: number; to: number; suffix?: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default StatsComponent;