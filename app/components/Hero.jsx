"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Network, Camera, Cpu } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 bg-[#070B1A] text-white overflow-hidden">

      {/* subtle grid background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* glow effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>

          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-orange-500"
          >
            <Cpu size={14} />
            IT • SECURITY • INFRASTRUCTURE • MEDIA
          </motion.div>

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold leading-tight mt-5"
          >
            Build & Secure{" "}
            <span className="text-blue-400">Digital Systems</span>{" "}
            That Power Your Business
          </motion.h1>

          {/* subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-300 text-base max-w-xl"
          >
            JSoft Technologies KE delivers enterprise network installation,
            CCTV security systems, IT support, and creative media solutions.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-6"
          >
            <button className="bg-orange-500 hover:bg-amber-600 px-4 py-1 rounded -full fontsemibold flex items-center gap-2 transition shadow-lg">
              Get Consultation <ArrowRight size={18} />
            </button>

            <button className="border border-white/15 px-4 py-1 rounded -full hover:bg-white hover:text-[#070B1A] transition">
              View Services
            </button>
          </motion.div>

          {/* trust row */}
          <div className="flex flex-wrap gap-5 mt-8 text-sm text-gray-400">

            <span className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-orange-500" />
              Secure Systems
            </span>

            <span className="flex items-center gap-2">
              <Network size={14} className="text-orange-500" />
              Network Experts
            </span>

            <span className="flex items-center gap-2">
              <Camera size={14} className="text-orange-500" />
              Media Production
            </span>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >

          {/* image container */}
          <div className="relative w-full h-[350px] md:h-[400px] rounded overflow-hidden border border-white/10 shadow-2xl">

            <Image
              src="/images/technicien-soutien-informatique-1.jpg" // 🔥 replace with your image path
              alt="IT Infrastructure"
              fill
              className="object-cover"
              priority
            />

            {/* overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#070B1A]/80 via-transparent to-transparent" />

          </div>

          {/* floating glow effect */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/20 blur-[80px] rounded-full" />

        </motion.div>

      </div>
    </section>
  );
}