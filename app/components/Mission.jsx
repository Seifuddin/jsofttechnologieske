"use client";

import { motion } from "framer-motion";
import { Shield, Target, Compass } from "lucide-react";

export default function IdentitySection() {
  return (
    <section className="relative overflow-hidden bg-[#050814] py-16 text-white">
      {/* Background Atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-[-120px] h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-orange-500/20 blur-[100px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:55px_55px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-xs tracking-[0.3em] text-orange-400">
            OUR IDENTITY
          </p>

          <h2 className="mt-3 text-2xl font-black sm:text-3xl lg:text-3xl">
            Built on{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
              Purpose, Vision & Discipline
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">
            At JSoft Technologies KE, everything we build is guided by clarity,
            security, and innovation.
          </p>
        </motion.div>

        {/* LAYOUT GRID */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded -[26px] border border-blue-500/20 bg-white/5 p-3 backdrop-blur-2xl lg:col-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded -xl bg-blue-500/20">
                  <Target className="text-blue-400" size={14} />
                </div>

                <h3 className="textxl font-bold">Our Mission</h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                To deliver secure, reliable, and innovative technology
                solutions in networking, CCTV systems, IT support, and creative
                media — empowering businesses to operate smarter and safer.
              </p>

              <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-blue-500 to-transparent" />
            </div>
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            className="relative overflow-hidden rounded -[26px] border border-orange-500/20 bg-white/5 p-3 backdrop-blur-2xl"
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/20 blur-[90px]" />

            <div className="relative z-10">
              <div className="flex h-7 w-7 items-center justify-center rounded -xl bg-orange-500/20">
                <Compass className="text-orange-400" size={14} />
              </div>

              <h3 className="mt-4 text2xl font-bold">Our Vision</h3>

              <p className="mt-3 text-sm text-gray-300">
                To become a leading force in Africa’s technology industry,
                delivering world-class digital infrastructure and security
                solutions.
              </p>
            </div>
          </motion.div>

          {/* MOTTO */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded -[26px] border border-white/10 bg-gradient-to-r from-[#0a1020] via-[#0f1a33] to-[#0a1020] p-4 lg:col-span-3"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.15),transparent_40%)]" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <Shield className="mb-4 h-8 w-8 text-orange-400" />

              <h3 className="text3xl font-black sm:text-xl">
                Connect <span className="text-blue-400">•</span> Secure{" "}
                <span className="text-orange-400">•</span> Create
              </h3>

              <p className="mt-4 max-w-xl text-sm text-gray-400">
                The foundation of every system, network, and creative solution
                we build at JSoft Technologies KE.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}