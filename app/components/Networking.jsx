"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wifi, Server, ShieldCheck, Cpu, Globe, Zap, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function NetworkSystemWorldClass() {
  const [isClient, setIsClient] = useState(false);
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    setIsClient(true);

    const generatedNodes = Array.from({ length: 10 }).map(() => ({
      top: 5 + Math.random() * 90,
      left: 5 + Math.random() * 90,
      size: 3 + Math.random() * 5,
      pulseSpeed: 2 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setNodes(generatedNodes);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-100 mb-3">
            <Zap size={12} className="text-orange-500" />
            <span className="text-[9px] font-semibold text-orange-600 uppercase tracking-wider">
              Network Infrastructure
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
            Networks That Power{" "}
            <span className="text-orange-500">Modern Enterprises</span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mt-2 text-base leading-relaxed">
            We design and maintain secure, scalable systems that operate silently
            and keep your business alive 24/7.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* Left - Image with Network Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded overflow-hidden border border-gray-200 bg-white shadow-sm">
              <div className="relative aspect-[6/5]">
                <Image
                  src="/images/341237~2.jpg"
                  alt="Network Infrastructure"
                  fill
                  sizes="(max-width: 800px) 100vw, 80vw"
                  className="object-cover"
                  quality={85}
                />

                {/* Network Nodes Overlay */}
                {isClient && nodes.length > 0 && (
                  <div className="absolute inset-0">
                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      {nodes.map((_, idx) => {
                        if (idx >= nodes.length - 1) return null;
                        const start = nodes[idx];
                        const end = nodes[idx + 1];
                        if (!start || !end) return null;
                        return (
                          <line
                            key={`line-${idx}`}
                            x1={`${start.left}%`}
                            y1={`${start.top}%`}
                            x2={`${end.left}%`}
                            y2={`${end.top}%`}
                            stroke="rgba(249, 115, 22, 0.2)"
                            strokeWidth="1"
                          />
                        );
                      })}
                    </svg>

                    {/* Nodes */}
                    {nodes.map((node, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full bg-orange-500 shadow-lg shadow-orange-500/30"
                        style={{
                          top: `${node.top}%`,
                          left: `${node.left}%`,
                          width: node.size,
                          height: node.size,
                        }}
                        animate={{
                          scale: [1, 1.6, 1],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: node.pulseSpeed,
                          repeat: Infinity,
                          delay: node.delay,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

                {/* Status Badge */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-green-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                    </span>
                    <span className="text-[8px] font-medium text-gray-500 tracking-wider uppercase">
                      Active Network
                    </span>
                  </div>
                  <p className="text-[10px] font-semibold text-gray-900 mt-0.5">
                    Secure Infrastructure Online
                  </p>
                </div>

                {/* Uptime Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg px-2.5 py-1.5 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={10} className="text-orange-500" />
                    <span className="text-[8px] font-semibold text-gray-700">99.9% Uptime</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-4"
          >
            {/* Headline */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                We Build Networks{" "}
                <span className="text-orange-500">That Never Fail</span>
              </h3>
              <p className="text-gray-500 mt-2 text-base leading-relaxed">
                From small offices to enterprise infrastructure, we design secure,
                stable, high-performance networks that keep your business running.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2">
              {[
                {
                  icon: <Wifi size={16} className="text-orange-500" />,
                  title: "Stable Connectivity",
                  desc: "High-performance LAN/WAN setups for uninterrupted communication.",
                },
                {
                  icon: <Server size={16} className="text-orange-500" />,
                  title: "Server Infrastructure",
                  desc: "Reliable servers for business operations and scalability.",
                },
                {
                  icon: <ShieldCheck size={16} className="text-orange-500" />,
                  title: "Secure Systems",
                  desc: "Protection against threats, downtime, and unauthorized access.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="flex gap-3 p-2.5 rounded border border-gray-200 bg-white hover:border-orange-200 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-0.5 p-2 rounded bg-orange-50 border border-orange-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="text-base text-gray-500">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Network Strength */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-3 border-t border-gray-100"
            >
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                  Network Performance
                </p>
                <div className="flex items-center gap-1.5">
                  <Globe size={12} className="text-orange-500" />
                  <span className="text-xs font-semibold text-orange-500">98%</span>
                  <span className="text-[10px] text-gray-400">• 24/7</span>
                </div>
              </div>

              <div className="flex items-end gap-0.5 h-5">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-orange-400 to-orange-500 rounded-sm"
                    animate={{
                      height: [4, 8 + Math.random() * 10, 5, 10 + Math.random() * 8, 4],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: i * 0.06,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-1 flex flex-wrap gap-2"
            >
              <button className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-500/30 text-white text-xs font-medium rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <span>Explore Solutions</span>
                <Cpu size={14} />
              </button>
              <button className="px-5 py-2 border border-gray-300 hover:border-orange-300 text-gray-600 hover:text-orange-600 text-xs font-medium rounded-lg transition-all duration-300 hover:bg-orange-50">
                Contact Team
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap justify-center gap-4 md:gap-8"
        >
          <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
            <CheckCircle size={12} className="text-orange-500" />
            <span>ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
            <Globe size={12} className="text-orange-500" />
            <span>Enterprise-Grade Infrastructure</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
            <ShieldCheck size={12} className="text-orange-500" />
            <span>24/7 Security Monitoring</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}