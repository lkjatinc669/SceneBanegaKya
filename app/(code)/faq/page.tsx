"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive creative production services including premium graphic design, cinematic video editing, motion graphics, brand identity design, and social media content production. Our team works across the entire lifecycle from concept and storyboarding to final delivery.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on the scope and complexity. A brand identity package or short video edit typically takes 2-3 weeks, while larger commercial productions or complex motion graphic campaigns can take 4-8 weeks. We define clear milestones at the beginning of each project.",
  },
  {
    question: "How do you handle revisions?",
    answer: "We believe in collaborative creation. Our standard contracts include 2-3 rounds of revisions during key stages of the project (e.g., storyboard phase, rough cut, and final polish). This ensures the final output aligns perfectly with your expectations and goals.",
  },
  {
    question: "Do you work with global clients?",
    answer: "Yes, we work with brands and clients worldwide. We use modern collaboration tools, video review platforms (like Frame.io), and async communication channels to ensure seamless feedback and execution regardless of your time zone.",
  },
  {
    question: "What are your pricing structures?",
    answer: "We tailor our pricing to the specific needs of each project, offering both project-based flat rates and monthly retainer options for ongoing production needs. Contact us with your project details, and we will provide a custom, transparent proposal.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-[#E07A4F]/10 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-10 lg:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#E07A4F]">
              Support
            </p>

            <h1 className="text-6xl font-bold leading-[0.9] tracking-[-0.07em] md:text-8xl lg:text-[7rem]">
              Frequently
              <br />
              Asked Questions
            </h1>

            <p className="mt-10 max-w-xl text-lg leading-relaxed text-[#B9B4AD]">
              Got questions about our services, process, or pricing? Find answers
              to the most common questions here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/2 overflow-hidden transition-colors duration-300 hover:border-white/20"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between p-8 text-left focus:outline-none"
                  >
                    <span className="text-xl font-semibold pr-4">{faq.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E07A4F]/10 text-[#E07A4F] transition-transform duration-300">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="border-t border-white/5 p-8 text-lg leading-relaxed text-[#B9B4AD]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-[40px] border border-white/10 bg-white/3 p-10 md:p-16 text-center max-w-4xl mx-auto">
            <p className="mb-4 text-sm tracking-[0.25em] text-[#E07A4F] uppercase">
              Still Have Questions?
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Let's Connect Directly
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#B9B4AD] max-w-xl mx-auto">
              If your question isn't answered here, feel free to drop us a line. We'd love to chat about your project.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#E07A4F] px-7 py-4 font-medium text-white transition hover:scale-[1.02] justify-center"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
