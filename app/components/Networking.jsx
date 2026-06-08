"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wifi, Server, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

export default function NetworkSystemWorldClass() {
  // ✅ FIX: client-only node generation
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 10 }).map(() => ({
      top: 10 + Math.random() * 80,
      left: 10 + Math.random() * 80,
    }));

    setNodes(generated);
  }, []);

  return (
    <section className="relative py-24 bg-amber-50 text-gray-900 overflow-hidden">

      {/* BACKGROUND GLOW SYSTEM */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-amber-300/20 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-amber-400/10 blur-[120px]" />
      </div>

      {/* GRID SYSTEM */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] text-orange-600 uppercase">
            IT & Networking Solutions
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mt-2">
            Networks That Power{" "}
            <span className="text-blue-950">Modern Businesses</span>
          </h2>

          <p className="text-gray-700 mt-3 max-w-2xl mx-auto textsm">
            We design and maintain secure, scalable systems that operate silently
            but keep your entire business alive 24/7.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">

          {/* LEFT VISUAL */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-7 relative h-[350px] md:h-[420px] rounded -2xl overflow-hidden border border-gray-200"
          >

            <Image
              src="/images/341237~2.jpg"
              alt="Network Infrastructure"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/25" />

            {/* PULSING SYSTEM NODES (FIXED) */}
            <div className="absolute inset-0">
              {nodes.map((node, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-amber-500 rounded-full"
                  style={{
                    top: `${node.top}%`,
                    left: `${node.left}%`,
                  }}
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>

            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-xs text-gray-200 tracking-widest uppercase">
                Active Network Grid
              </p>
              <h3 className="text-xl font-semibold">
                Secure Infrastructure Online
              </h3>
            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5"
          >

            <h2 className="text-xl fontsemibold mt-2 text-gray-900">
              We Build Networks{" "}
              <span className="text-gray-900"> That Never Fail</span>
            </h2>

            <p className="text-gray-700 mt-4 text-sm leading-relaxed max-w-xl">
              From small office setups to enterprise-level infrastructure,
              we design secure, stable and high-performance networks that
              keep your business running without interruption.
            </p>

            {/* FEATURES */}
            <div className="mt-6 space-y-4">

              <Feature
                icon={<Wifi size={18} />}
                title="Stable Connectivity"
                desc="High-performance LAN/WAN setups for uninterrupted communication."
              />

              <Feature
                icon={<Server size={18} />}
                title="Server Infrastructure"
                desc="Reliable servers configured for business operations and scalability."
              />

              <Feature
                icon={<ShieldCheck size={18} />}
                title="Secure Systems"
                desc="Protection against threats, downtime, and unauthorized access."
              />

            </div>

            {/* SIGNAL VISUAL */}
            <div className="mt-8">

              <p className="text-xs text-blue-600 mb-2">
                Live Network Strength
              </p>

              <div className="flex items-end gap-1 h-8">

                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 bg-orange-500 rounded-sm"
                    animate={{
                      height: [6, 18, 10, 22, 8, 16, 6],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      delay: i * 0.08,
                    }}
                  />
                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

/* FEATURE COMPONENT */
function Feature({ icon, title, desc }) {
  return (
    <div className="flex gap-3 border-b border-orange-200 rounded pb-1">
      <div className="text-orange-600 mt-1">{icon}</div>

      <div>
        <h4 className="font-semibold text-blue-950">{title}</h4>
        <p className="text-sm text-gray-700">{desc}</p>
      </div>
    </div>
  );
}