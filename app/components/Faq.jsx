"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    q: "What services does JSoft Technologies KE offer?",
    a: "We provide network installation, CCTV systems, IT support, managed IT services, graphic design, and photography/videography solutions for businesses.",
  },
  {
    q: "Do you offer on-site support in Kisumu?",
    a: "Yes. We provide on-site installation and technical support across Kisumu and surrounding areas depending on project scope.",
  },
  {
    q: "How fast can you respond to IT issues?",
    a: "We prioritize critical system failures immediately and provide fast response depending on severity and support plan.",
  },
  {
    q: "Do you handle small and large businesses?",
    a: "Yes. We scale solutions for startups, SMEs, and large organizations based on their infrastructure needs.",
  },
  {
    q: "Can you upgrade existing systems?",
    a: "Absolutely. We audit, optimize, and upgrade existing networks, CCTV, and IT systems for better performance and security.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-16 md:py-20 bg-white  overflow-hidden">

      {/* BACKGROUND */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >

          {/* BADGE */}
          <div className="flex justify-center mb-4">

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-orange-200 shadow-sm">

              <HelpCircle className="w-4 h-4 text-orange-500" />

              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-orange-600">
                Support Center
              </span>

            </div>

          </div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">

            Frequently Asked
            <span className="text-blue-950"> Questions</span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto leading-relaxed text-base">
            Answers to the most common questions about our IT,
            networking, CCTV, branding, and technical support services.
          </p>

        </motion.div>

        {/* FAQ LIST */}
        <div className="space-y-3">

          {faqs.map((item, i) => {
            const isOpen = open === i;

            return (
              <motion.div
                key={i}
                layout
                transition={{
                  layout: {
                    duration: 0.3,
                    type: "spring",
                  },
                }}
                className={`rounded border-b border-gray-200 backdrop-blur-xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-transparent shadowlg border-orange-200"
                    : "hover:bg-white border-gray-200 hover:border-orange-200"
                }`}
              >

                {/* QUESTION */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-2md:px-3 py-1 text-left"
                >

                  {/* LEFT */}
                  <div className="flex items-start gap-3">

                    {/* ICON */}
                    <div
                      className={`mt-1 flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-orange-500 text-white"
                          : "bg-orange-100 text-orange-500"
                      }`}
                    >
                      <Sparkles size={15} />
                    </div>

                    {/* QUESTION */}
                    <h3 className="text-lg font-medium text-gray-900 leading-relaxed">
                      {item.q}
                    </h3>

                  </div>

                  {/* CHEVRON */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-orange-300 bg-orange-50 text-orange-500"
                        : "border-gray-200 text-gray-500"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>

                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >

                      <div className="px-2 md:px6 pb-3">

                        <div className="pl-11">

                          {/* LINE */}
                          <div className="h-px w-full bg-gradient-to-r from-orange-200 to-transparent mb-2" />

                          {/* ANSWER TEXT */}
                          <p className="textbase text-gray-700 leading-relaxed">
                            {item.a}
                          </p>

                        </div>

                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-center mt-10"
        >

          <p className="text-sm text-gray-600">
            Still have questions?
          </p>

          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-7 py-1 rounded-xl text-sm font-medium shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02]">
            Contact Support
          </button>

        </motion.div>

      </div>
    </section>
  );
}