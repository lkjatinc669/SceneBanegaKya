"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ContactCTA from "@/components/common/ContactCTA";
import InfiniteMarquee from "@/components/gallery/InfiniteStrip";

const projects = [
  {
    title: "Luxury Brand Campaign",
    category: "Video Production",
    image: "/gallery/project-1.jpg",
    size: "large",
  },
  {
    title: "Motion Reel",
    category: "Motion Graphics",
    image: "/gallery/project-2.jpg",
    size: "small",
  },
  {
    title: "Fashion Edit",
    category: "Video Editing",
    image: "/gallery/project-3.jpg",
    size: "small",
  },
  {
    title: "Product Launch",
    category: "Commercial",
    image: "/gallery/project-4.jpg",
    size: "large",
  },
  {
    title: "Brand Identity",
    category: "Design",
    image: "/gallery/project-5.jpg",
    size: "small",
  },
  {
    title: "Creative Direction",
    category: "Campaign",
    image: "/gallery/project-6.jpg",
    size: "small",
  },
  {
    title: "Social Media Series",
    category: "Content",
    image: "/gallery/project-7.jpg",
    size: "large",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      {/* ================================= */}
      {/* HERO */}
      {/* ================================= */}

      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute left-1/2 top-0 h-175 w-175 -translate-x-1/2 rounded-full bg-[#E07A4F]/10 blur-[220px]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-10 lg:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl"
          >
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#E07A4F]">
              Gallery
            </p>

            <h1 className="text-6xl font-bold leading-[0.9] tracking-[-0.07em] md:text-8xl lg:text-[8rem]">
              Selected
              <br />
              Creative Work
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#B9B4AD]">
              A curated collection of visual stories, motion design,
              cinematic edits, branding projects, and creative campaigns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================= */}
      {/* FEATURED SHOWCASE */}
      {/* ================================= */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            whileHover={{ scale: 0.99 }}
            className="
              group
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
              bg-[#161616]
            "
          >
            <div className="relative aspect-21/9">
              <Image
                src="/gallery/featured.jpg"
                alt="Featured Project"
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>

            <div
              className="
                absolute
                inset-0
                bg-linear-to-t
                from-black/80
                via-black/20
                to-transparent
              "
            />

            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <span className="text-sm uppercase tracking-[0.25em] text-[#E07A4F]">
                Featured Project
              </span>

              <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                Global Product Launch Campaign
              </h2>

              <p className="mt-4 max-w-xl text-[#D8D4CC]">
                High-end visuals, motion graphics, and cinematic editing
                crafted for a worldwide product release.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================= */}
      {/* BENTO GALLERY */}
      {/* ================================= */}

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-4xl font-bold tracking-tight">
              Recent Projects
            </h2>

            <span className="text-[#B9B4AD]">
              {projects.length} Selected Works
            </span>
          </div>

          <div className="grid auto-rows-[320px] gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-4xl
                  border
                  border-white/10
                  bg-[#161616]
                  ${project.size === "large"
                    ? "xl:col-span-2"
                    : ""
                  }
                `}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-black/90
                    via-black/20
                    to-transparent
                  "
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-[#E07A4F]
                    text-white
                  "
                >
                  <ArrowUpRight size={18} />
                </motion.div>

                <div className="absolute bottom-0 left-0 p-7">
                  <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#E07A4F]">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* VISUAL STRIP */}
      {/* ================================= */}

      <InfiniteMarquee/>

      {/* ================================= */}
      {/* MASONRY STYLE GRID */}
      {/* ================================= */}

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  y: -6,
                }}
                className="
                  mb-6
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[#161616]
                "
              >
                <div
                  className={`
                    relative
                    ${item % 3 === 0
                      ? "aspect-4/5"
                      : item % 2 === 0
                        ? "aspect-square"
                        : "aspect-4/3"
                    }
                  `}
                >
                  <Image
                    src={`/gallery/masonry-${item}.jpg`}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        topHeader="Imagine What We Can Create Together"
        lineOne="Ready For"
        lineTwo="Your Next"
        lineThree="Masterpiece?"
        description="Every project in our portfolio started as a simple idea. Yours could be next. Let's create visuals that capture attention, spark emotion, and leave a lasting impression."
      />
    </main>
  );
}