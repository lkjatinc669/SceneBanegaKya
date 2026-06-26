import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const FeaturedWork = () => {
  return (
    <section className="py-32 relative">
        <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-[#E07A4F]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="text-[#E07A4F] font-semibold tracking-widest text-sm flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#E07A4F]" /> SELECTED WORK
            </p>
            <h2 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group glass-card rounded-[2.5rem] p-4 lg:col-span-8 overflow-hidden relative"
            >
              <div className="aspect-video w-full rounded-4xl overflow-hidden relative bg-[#161616]">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200")' }} />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#E07A4F] text-white text-xs font-bold uppercase tracking-wider mb-3">Commercial</span>
                  <h3 className="text-3xl font-bold">Neon Nights Campaign</h3>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                  <Play size={24} className="text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-8 lg:col-span-4">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 aspect-4/3 bg-[#161616]"
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800")' }} />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-xl font-bold">Tech Rebrand</h4>
                  <p className="text-[#B9B4AD] text-sm mt-1">Identity & Motion</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 aspect-4/3 bg-[#161616]"
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800")' }} />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-xl font-bold">Abstract 3D</h4>
                  <p className="text-[#B9B4AD] text-sm mt-1">CGI & Rendering</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FeaturedWork