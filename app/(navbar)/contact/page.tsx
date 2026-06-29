"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-[#E07A4F]/10 blur-[180px]" />

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-sm uppercase tracking-[0.3em] text-[#E07A4F]"
            >
              Contact
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold leading-[0.95] tracking-[-0.06em] md:text-8xl lg:text-[7rem]"
            >
              Let's Build
              <br />
              Something
              <br />
              Exceptional.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-10 max-w-2xl text-lg leading-relaxed text-[#B9B4AD]"
            >
              Whether you need graphic design, video editing, motion graphics,
              or a complete creative partner, we're ready to bring your vision
              to life.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
            {/* Left Side */}
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#E07A4F]">
                Get In Touch
              </p>

              <h2 className="text-5xl font-bold tracking-tight">
                Start The
                <br />
                Conversation.
              </h2>

              <p className="mt-6 max-w-md text-lg leading-relaxed text-[#B9B4AD]">
                Tell us about your project, goals, and vision. We'll respond
                within 24 hours.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/3 p-3">
                    <Mail size={20} className="text-[#E07A4F]" />
                  </div>

                  <div>
                    <p className="text-sm text-[#B9B4AD]">Email</p>
                    <p className="mt-1 font-medium">hello@youragency.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/3 p-3">
                    <Phone size={20} className="text-[#E07A4F]" />
                  </div>

                  <div>
                    <p className="text-sm text-[#B9B4AD]">Phone</p>
                    <p className="mt-1 font-medium">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/3 p-3">
                    <MapPin size={20} className="text-[#E07A4F]" />
                  </div>

                  <div>
                    <p className="text-sm text-[#B9B4AD]">Location</p>
                    <p className="mt-1 font-medium">
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[40px] border border-white/10 bg-white/3 p-8 md:p-10"
            >
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm text-[#B9B4AD]">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-white/10 bg-[#161616] px-5 py-4 outline-none transition focus:border-[#E07A4F]/40"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm text-[#B9B4AD]">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-[#161616] px-5 py-4 outline-none transition focus:border-[#E07A4F]/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm text-[#B9B4AD]">
                    Company / Brand
                  </label>

                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full rounded-2xl border border-white/10 bg-[#161616] px-5 py-4 outline-none transition focus:border-[#E07A4F]/40"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm text-[#B9B4AD]">
                    Service Required
                  </label>

                  <select
                    className="w-full rounded-2xl border border-white/10 bg-[#161616] px-5 py-4 outline-none transition focus:border-[#E07A4F]/40"
                  >
                    <option>Graphic Design</option>
                    <option>Video Editing</option>
                    <option>Motion Graphics</option>
                    <option>Brand Identity</option>
                    <option>Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm text-[#B9B4AD]">
                    Project Details
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-[#161616] px-5 py-4 outline-none transition focus:border-[#E07A4F]/40"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E07A4F] px-7 py-4 font-medium text-white transition hover:scale-[1.02]"
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#E07A4F]">
              FAQ
            </p>

            <h2 className="text-5xl font-bold tracking-tight">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How quickly do you respond?",
                a: "Usually within 24 hours on business days.",
              },
              {
                q: "Do you work with international clients?",
                a: "Yes, we collaborate with brands and businesses worldwide.",
              },
              {
                q: "Can I request multiple services?",
                a: "Absolutely. Many clients combine branding, graphics, motion, and video production.",
              },
              {
                q: "How does pricing work?",
                a: "Pricing depends on scope, complexity, and timeline. We'll provide a custom quote after discussing your requirements.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-3xl border border-white/10 bg-white/2 p-8"
              >
                <h3 className="text-xl font-semibold">{item.q}</h3>

                <p className="mt-3 text-[#B9B4AD]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
