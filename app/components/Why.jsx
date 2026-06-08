"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Lock,
  Activity,
  Headphones,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Security-First",
      text: "Advanced protection systems designed for modern businesses.",
    },
    {
      icon: Activity,
      title: "High Uptime",
      text: "Reliable infrastructure engineered for stability and continuity.",
    },
    {
      icon: Lock,
      title: "Controlled Access",
      text: "Secure environments with monitored and protected systems.",
    },
  ];

  return (
    <section className="relative py-20 bg-amber-50 overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-blue-900/5 blur-[120px] rounded-full top-[-120px] left-[-120px]" />
        <div className="absolute w-[400px] h-[400px] bg-orange-400/10 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <p className="text-xs uppercase tracking-[0.25em] text-orange-600 font-medium">
            Why Businesses Trust JSoft
          </p>

          <h2 className="mt-4 text-2xl md:text-3xl font-bold leading-tight text-gray-900 max-w-xl">
            We engineer systems that stay
            <span className="text-blue-950"> secure, stable, and reliable.</span>
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed text-smmd:text-base max-w-lg">
            We help businesses eliminate downtime, strengthen security,
            and build dependable infrastructure that performs under pressure.
          </p>

          {/* FEATURE CARDS */}
          <div className="mt-8 space-y-4">

            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 border-b border-orange-200 rounded p-1 hover:shadow-md transition-all duration-300"
                >

                  <div className="w-7 h-7 rounded bgblue-950 text-orange-500 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-blue-950 text-smmd:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-1 textsm text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* CTA */}
          <button className="hidden mt-8 bg-orange-500 hover:bg-blue-950 text-white px-7 py-3 rounded-xl text-sm font-medium transition-all duration-300">
            Get Professional Assessment
          </button>

        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-lg min-h-[460px]"
        >

          {/* IMAGE */}
          <img
            src="/images/server-room-interior-stockcake.webp"
            alt="Infrastructure"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-blue-900/50 to-black/40" />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10 text-white">

            {/* TOP */}
            <div>

              <div className="inline-flex items-center gap-1 bg-white/10 border border-white/10 backdrop-blur-md rounded-full px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-orange-400">
                Enterprise Infrastructure
              </div>

              <h3 className="mt-5 text-2xl md:text-3xl font-bold leading-tight max-w-sm">
                Engineering-Grade Reliability
              </h3>

              <p className="mt-4 textsm text-blue-100 leading-relaxed max-w-md">
                Built like critical infrastructure — not ordinary IT services.
              </p>

              {/* FEATURE LIST */}
              <div className="mt-8 space-y-5">

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                    <Zap className="text-orange-400 " size={18} />
                  </div>

                  <div>
                    <h4 className="fontmedium text-white font-semibold textsm">
                      Fast Deployment
                    </h4>

                    <p className="mt-1 text-sm text-blue-50 leading-relaxed">
                      Rapid implementation with minimal disruption.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                    <Headphones className="text-orange-400 " size={18} />
                  </div>

                  <div>
                    <h4 className="fontmedium text-white font-semibold textsm">
                      Dedicated Support
                    </h4>

                    <p className="mt-1 text-sm text-blue-50 leading-relaxed">
                      Expert technical assistance whenever needed.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* BOTTOM STRIP */}
            <div className="border-t border-white/15 pt-5 flex flex-wrap gap-4 text-[11px] text-blue-50">

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                Kisumu-based engineers
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400  rounded-full" />
                Business-critical systems
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}