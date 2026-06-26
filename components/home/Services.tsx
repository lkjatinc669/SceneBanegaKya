import React from 'react'
import { motion } from 'framer-motion'
import { PenTool, Clapperboard, MonitorPlay, Sparkles } from 'lucide-react'

export const Services = () => {
  return (
    <section className="relative border-t border-white/5 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
          >
            <div>
              <p className="text-[#E07A4F] font-semibold tracking-widest text-sm flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#E07A4F]" /> WHAT WE DO
              </p>
              <h2 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
                Creative <span className="text-gradient">Services</span>
              </h2>
            </div>
            <p className="max-w-md text-lg text-[#B9B4AD] font-light">
              Strategy, design, motion and content crafted to elevate
              your brand beyond the ordinary.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: PenTool, title: "Graphic Design", desc: "Premium visual identities and marketing assets." },
              { icon: Clapperboard, title: "Video Editing", desc: "Cinematic cuts, color grading, and dynamic pacing." },
              { icon: MonitorPlay, title: "Motion Graphics", desc: "Engaging 2D/3D animations that tell a story." },
              { icon: Sparkles, title: "Brand Identity", desc: "Cohesive brand systems built for scale." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group glass-card rounded-4xl p-8 glow-hover"
              >
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-colors group-hover:bg-[#E07A4F]/10 group-hover:border-[#E07A4F]/30">
                  <item.icon size={28} className="text-[#B9B4AD] transition-colors group-hover:text-[#E07A4F]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-[#B9B4AD] font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
