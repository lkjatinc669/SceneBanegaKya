import React from 'react'

const OurStory = () => {
    return (
        <section className="border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
                <div className="grid gap-20 lg:grid-cols-2">
                    <div>
                        <p className="mb-4 text-sm tracking-[0.25em] text-[#E07A4F] uppercase">
                            Our Story
                        </p>

                        <h2 className="text-5xl font-bold tracking-tight">
                            Creativity Meets Strategy
                        </h2>
                    </div>

                    <div>
                        <p className="mb-8 text-lg leading-relaxed text-[#B9B4AD]">
                            In a world overflowing with content, attention has become the
                            most valuable currency. Brands need more than visuals — they
                            need stories that people remember.
                        </p>

                        <p className="text-lg leading-relaxed text-[#B9B4AD]">
                            That's where we come in. We combine design, motion, editing,
                            and storytelling to craft experiences that connect emotionally
                            while delivering measurable business value.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="overflow-hidden rounded-[40px] border border-white/10">
                    <div className="aspect-21/9 bg-[#161616]" />
                </div>
            </div>
        </section>
    )
}

export default OurStory