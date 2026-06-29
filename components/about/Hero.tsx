import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-[#E07A4F]/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <p className="mb-6 text-sm font-medium tracking-[0.3em] text-[#E07A4F] uppercase">
            About Us
          </p>

          <h1 className="text-6xl font-bold leading-[0.95] tracking-[-0.06em] md:text-8xl lg:text-[7rem]">
            We Create
            <br />
            <span className="text-[#E07A4F]">Stories</span> That
            <br />
            Move <span className="text-[#E07A4F]">People.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#B9B4AD]">
            We are a creative production agency focused on premium graphics,
            cinematic video editing, motion design, and visual storytelling.
            Our mission is simple — help brands stand out through exceptional
            creative work.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero