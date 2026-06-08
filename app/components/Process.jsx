"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  PenTool,
  Settings,
  CheckCircle,
  Rocket,
} from "lucide-react";

export default function NetworkGlobeProcess() {
  const steps = [
    { label: "Discovery", icon: Search },
    { label: "Planning", icon: Lightbulb },
    { label: "Design", icon: PenTool },
    { label: "Implementation", icon: Settings },
    { label: "Testing", icon: CheckCircle },
    { label: "Launch", icon: Rocket },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050814] py-14 text-white">
      {/* SPACE BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_50%)]" />
      </div>

      {/* STAR FIELD */}
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* HEADER */}
        <div className="mb-10 text-center">
          <p className="text-xs tracking-[0.3em] text-orange-300">
            GLOBAL DELIVERY NETWORK
          </p>

          <h2 className="mt-3 text-2xl md:text-3xl font-black sm:text-3xl">
            3D{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
              Network Execution Globe
            </span>
          </h2>

          <p className="mt-4 text-gray-400">
            Visualizing how JSoft Technologies KE operates as a connected global
            infrastructure system.
          </p>
        </div>

        {/* GLOBE LAYOUT */}
        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row">
          {/* LEFT STEPS */}
          <div className="grid gap-5">
            {steps.slice(0, 3).map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 rounded -2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded -xl bg-blue-500/20">
                    <Icon className="h-4 w-4 text-blue-400" />
                  </div>

                  <span className="text-sm font-semibold">
                    {step.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* GLOBE CORE */}
          <div className="relative flex h-[380px] w-[380px] items-center justify-center">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute h-full w-full rounded-full border border-blue-500/20"
            />

            {/* Second ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="absolute h-[290px] w-[290px] rounded-full border border-orange-500/20"
            />

            {/* Globe */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              className="relative h-[210px] w-[210px] rounded-full bg-gradient-to-br from-blue-500/20 via-white/5 to-orange-500/20 shadow-2xl"
            >
              {/* Grid lines */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px]" />

              {/* Pulsing core */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="h-20 w-20 rounded-full bg-blue-500/30 blur-xl" />
              </motion.div>

              {/* Data nodes */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute left-10 top-16 h-2 w-2 rounded-full bg-blue-400"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute right-12 top-24 h-2 w-2 rounded-full bg-orange-400"
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute bottom-20 left-20 h-2 w-2 rounded-full bg-blue-300"
              />
            </motion.div>
          </div>

          {/* RIGHT STEPS */}
          <div className="grid gap-5">
            {steps.slice(3).map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 rounded -2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded -xl bg-orange-500/20">
                    <Icon className="h-4 w-4 text-orange-400" />
                  </div>

                  <span className="text-sm font-semibold">
                    {step.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* FOOT NOTE */}
        <div className="mt-10 text-center text-sm text-gray-500">
          A simulated global network architecture representing how JSoft
          Technologies KE delivers services across systems and environments.
        </div>
      </div>
    </section>
  );
}