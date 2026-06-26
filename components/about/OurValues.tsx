import React from 'react'
import { motion } from 'framer-motion'

const values = [
  {
    number: "01",
    title: "Creativity First",
    description:
      "Every project starts with ideas. We combine strategy, design, and storytelling to create visuals that stand apart.",
  },
  {
    number: "02",
    title: "Attention To Detail",
    description:
      "From transitions and typography to color grading and motion, every detail contributes to the final experience.",
  },
  {
    number: "03",
    title: "Built For Impact",
    description:
      "Our goal isn't simply beautiful visuals. We create work that captures attention, builds trust, and drives results.",
  },
];

const OurValues = () => {
    return (
        <section>
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
                <div className="mb-20">
                    <p className="mb-4 text-sm tracking-[0.25em] text-[#E07A4F] uppercase">
                        Our Values
                    </p>

                    <h2 className="text-5xl font-bold tracking-tight">
                        What Drives Us
                    </h2>
                </div>

                <div className="space-y-8">
                    {values.map((value) => (
                        <motion.div
                            key={value.number}
                            whileHover={{ x: 10 }}
                            className="flex flex-col gap-8 border-t border-white/10 py-10 md:flex-row md:items-start"
                        >
                            <span className="text-[#E07A4F] text-lg font-medium">
                                {value.number}
                            </span>

                            <div className="max-w-xl">
                                <h3 className="text-3xl font-semibold">
                                    {value.title}
                                </h3>

                                <p className="mt-4 leading-relaxed text-[#B9B4AD]">
                                    {value.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurValues