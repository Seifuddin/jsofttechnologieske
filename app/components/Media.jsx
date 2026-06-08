"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CinematicStudioCompact() {
  return (
    <section className="relative py-16 bg-[#060818] text-white overflow-hidden">

      {/* cinematic glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6d28d9_0%,transparent_60%)] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#f59e0b_0%,transparent_55%)] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER (compressed) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <p className="text-[10px] tracking-[0.3em] text-orange-600 uppercase">
            Visual Production Studio
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mt-2">
            Photography &{" "}
            <span className="text-blue-500">Cinematic Videography</span>
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl mx-auto textsm">
            We design visual emotion through cinematic storytelling.
          </p>
        </motion.div>

        {/* MAIN GRID (reduced height) */}
        <div className="grid lg:grid-cols-12 gap-5">

          {/* HERO IMAGE */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-7 relative h-[300px] md:h-[360px] rounded -xl overflow-hidden group"
          >
            <Image
              src="/images/Videography-Services-in-Prescott.webp"
              alt="Photography"
              fill
              className="object-cover scale-110 group-hover:scale-125 transition duration-[2000ms]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5">
              <h3 className="text-2xl font-semibold">Photography</h3>
              <p className="text-xs text-gray-300">
                Portrait • Branding • Events
              </p>
            </div>
          </motion.div>

          {/* RIGHT STACK */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* VIDEO */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[170px] rounded -xl overflow-hidden group"
            >
              <Image
                src="/images/videography-service.png"
                alt="Videography"
                fill
                className="object-cover scale-110 group-hover:scale-125 transition duration-[2000ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-3 left-3">
                <h3 className="text-lg font-semibold">Videography</h3>
                <p className="text-[10px] text-gray-300">Cinematic • Ads</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[170px] rounded-xl overflow-hidden group"
            >
              <Image
                src="/images/shutterstock_2603759007-768x405.jpg"
                alt="Videography"
                fill
                className="object-cover scale-110 group-hover:scale-125 transition duration-[2000ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-3 left-3">
                <h3 className="text-lg font-semibold">Creative Direction</h3>
                <p className="text-[10px] text-gray-300">Film-inspired composition, lighting, and storytelling in every frame.</p>
              </div>
            </motion.div>

            {/* STORY CARD */}
            <div className="hidden relative h-[170px] rounded -xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 overflow-hidden">
              <h4 className="text-base font-semibold">Creative Direction</h4>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                Film-inspired composition, lighting, and storytelling in every frame.
              </p>

              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500/20 blur-[60px]" />
            </div>

          </div>
        </div>

        {/* FEATURES (compressed) */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">

          <Feature title="Lighting" desc="Cinematic depth & mood control." />
          <Feature title="Gear" desc="Cinema cameras, drones, studio rigs." />
          <Feature title="Editing" desc="Story-driven color grading." />

        </div>

      </div>
    </section>
  );
}

function Feature({ title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="hidden bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-xl"
    >
      <h4 className="text-base font-semibold">{title}</h4>
      <p className="text-gray-400 text-xs mt-1">{desc}</p>
    </motion.div>
  );
}