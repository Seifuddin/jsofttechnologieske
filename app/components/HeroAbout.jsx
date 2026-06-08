"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Network,
  HeadphonesIcon,
  MonitorPlay,
  ArrowRight,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#071120] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-[350px] w-[350px] rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 lg:flex-row lgpx-8">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs text-orange-300 backdrop-blur-md sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400"></span>
            Trusted Technology & Security Solutions in Kenya
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-3xl">
            Powering Businesses With{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Smart Technology
            </span>{" "}
            & Secure Digital Solutions
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm md:text-base leading-relaxed text-gray-300 sm:text-lg">
            JSoft Technologies KE delivers professional network installation,
            CCTV security systems, IT support, and creative media solutions
            designed to help businesses grow, stay connected, and remain secure.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flexcol gap-3 sm: flex-row">
            <button className="group flex items-center justify-center gap-2 rounded -xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-1 fontsemibold text-white shadow-lgshadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50">
              Explore Services
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="rounded -xl border border-white/20 bg-white/5 px-4 py-1 fontsemibold text-white backdrop-blur-md transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10">
              Contact Us
            </button>
          </div>

          {/* Feature Mini Cards */}
          <div className="hidden mt-6 md:grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              {
                icon: <Network className="h-5 w-5 text-blue-400" />,
                title: "Networking",
              },
              {
                icon: <ShieldCheck className="h-5 w-5 text-orange-400" />,
                title: "CCTV Security",
              },
              {
                icon: <HeadphonesIcon className="h-5 w-5 text-blue-400" />,
                title: "IT Support",
              },
              {
                icon: <MonitorPlay className="h-5 w-5 text-orange-400" />,
                title: "Creative Media",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="rounded -2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md"
              >
                <div className="mb-1 flex h-7 w-7 items-center justify-center rounded -xl bg-[#101c2e]">
                  {item.icon}
                </div>

                <h3 className="text-xs font-semibold text-white sm:text-sm">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex-1"
        >
          {/* Main Card */}
          <div className="relative overflow-hidden rounded -[28px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
            <img
              src="/images/67c0b1bb29280054985e1a14_AD_4nXc2ho0791L6qRXKvncYKa74r07g0e1tBbM2q8OVU7mRC9X4hDFFZ1-C0PU4ZViD_0AtuYQ0iKgsBAu-rbI7Eq_Y_18UbUENM9V3lD0QBf9TAN1fDHo6JzzZSG2ZlSRliQr1y_cGog.jpeg"
              alt="JSoft Technologies"
              className="h-[320px] md:h-[350px] lg:h-[420px] w-full rounded -[22px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 rounded -[28px] bg-gradient-to-t from-[#071120] via-transparent to-transparent" />

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute left-5 top-5 rounded -2xl border border-white/10 bg-[#0d1728]/90 p-2 backdrop-blur-lg"
            >
              <p className="text-xs text-gray-300">Projects Completed</p>
              <h3 className="mt-1 text-2xl font-bold text-orange-400">
                250+
              </h3>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute bottom-5 right-5 rounded -2xl border border-white/10 bg-[#0d1728]/90 p-2 backdrop-blur-lg"
            >
              <p className="text-xs text-gray-300">Client Satisfaction</p>
              <h3 className="mt-1 text-2xl font-bold text-blue-400">
                98%
              </h3>
            </motion.div>
          </div>

          {/* Decorative Ring */}
          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full border border-orange-500/20" />
          <div className="absolute -right-6 -top-6 h-36 w-36 rounded-full border border-blue-500/20" />
        </motion.div>
      </div>
    </section>
  );
}