"use client";

import { motion } from "framer-motion";
import { Building2, Rocket, Globe } from "lucide-react";

export default function CompanyStory() {
  const story = [
    {
      icon: Building2,
      title: "It Started With a Problem",
      year: "Foundation",
      desc: "Businesses needed reliable IT support, networking, and security systems they could actually trust. JSoft Technologies KE was created to solve that gap.",
    },
    {
      icon: Rocket,
      title: "We Expanded Into Real Infrastructure",
      year: "Growth",
      desc: "From simple IT support to CCTV systems, structured networks, and professional installations — we evolved into a full technology solutions provider.",
    },
    {
      icon: Globe,
      title: "We Are Building a Connected Future",
      year: "Vision",
      desc: "Today, we focus on scalable systems, creative media, and secure digital infrastructure across Kenya and beyond.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-amber-50 py-14 text-gray-900">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-25">
        <div className="h-full w-full bg-[linear-gradient(to_right,#d1d5db55_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db55_1px,transparent_1px)] bg-[size:55px_55px]" />
      </div>

      {/* Glow (slightly reduced) */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[250px] w-[250px] rounded-full bg-blue-400/20 blur-[100px]" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[250px] w-[250px] rounded-full bg-orange-400/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-xs fontsemibold text-orange-600">
            OUR STORY
          </p>

          <h2 className="mt-2 text-2xl font-black md:text-3xl">
            The Evolution of{" "}
            <span className="text-blue-900">JSoft Technologies KE</span>
          </h2>

          <p className="mt-3 text-sm text-gray-700">
            A journey from solving small IT problems to building complete digital infrastructure systems.
          </p>
        </motion.div>

        {/* STORY */}
        <div className="space-y-4">
          {story.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`flex flex-col lg:flex-row items-center gap-4 ${
                  isLeft ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* ICON BLOCK (SMALLER) */}
                <div className="relative flex h-10 w-10 md:h-16 md:w-16 items-center justify-center rounded -2xl bg-white shadowmd border border-gray-200">
                  <div className="absolute inset-0 rounded -2xl bg-gradient-to-br from-blue-100 to-orange-100 opacity-40" />

                  <Icon className="relative z-10 h-5 w-5 text-orange-400" />
                </div>

                {/* TEXT CARD (SMALLER PADDING) */}
                <div className="flex-1 rounded -2xl border border-gray-200 bgwhite p-3 shadowsm">
                  <p className="text-[11px] font-bold text-orange-500">
                    {item.year}
                  </p>

                  <h3 className="mt-1 textxl font-black text-blue-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    {item.desc}
                  </p>

                  <div className="mt-4 h-[2px] w-20 bg-gradient-to-r from-blue-500 to-orange-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FINAL STATEMENT */}
        <div className="mt-10 text-center">
          <p className="mx-auto max-w-2xl text-xs text-gray-600">
            Every stage of our journey has shaped us into a company focused on reliability, security, and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}