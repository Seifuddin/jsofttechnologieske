"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  Network,
  HeadphonesIcon,
  MonitorPlay,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutHero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  useEffect(() => {
    setIsClient(true);

    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: 7 + Math.random() * 10,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] bg-[#05080F] text-white overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* ✨ AMBIENT BACKGROUND LAYERS */}

      {/* Layer 1: Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#05080F] via-[#0A1628] to-[#0F1A2E]" />

      {/* Layer 2: Floating orbs with mouse tracking - SMALLER */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px]"
        animate={{
          x: mousePosition.x * -25,
          y: mousePosition.y * -25,
        }}
        transition={{ type: "spring", damping: 30 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[120px]"
        animate={{
          x: mousePosition.x * 25,
          y: mousePosition.y * 25,
        }}
        transition={{ type: "spring", damping: 30 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/3 blur-[150px]"
        animate={{
          x: mousePosition.x * -12,
          y: mousePosition.y * -12,
        }}
        transition={{ type: "spring", damping: 30 }}
      />

      {/* Layer 3: Animated grid with depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      {/* Layer 4: Floating particles - REDUCED */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-0.5 h-0.5 bg-blue-400/20 rounded-full"
              initial={{
                x: particle.x,
                y: particle.y,
                scale: 0,
              }}
              animate={{
                y: [null, -80, -150],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* 🎯 MAIN CONTENT WITH PARALLAX */}
      <motion.div
        style={{ opacity, scale }}
        className="relative max-w-7xl mx-auto px-6 min-h-[90vh] flex items-center"
      >
        <div className="w-full grid lg:grid-cols-12 gap-10 items-center py-12">
          {/* LEFT CONTENT - 7 columns */}
          <div className="lg:col-span-7 space-y-4">
            {/* 🔮 ANOMALY BADGE - Smaller */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg animate-pulse" />
                <div className="relative flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
                  </span>
                  <span className="text-[10px] font-mono text-blue-300 tracking-widest uppercase">
                    Trusted Technology & Security
                  </span>
                  <Sparkles size={10} className="text-blue-400" />
                </div>
              </div>
            </motion.div>

            {/* 📝 HEADLINE - Smaller */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[0.9] tracking-tight">
                <span className="block">Powering Businesses</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                  With Smart Technology
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-white/40 mt-1">
                  & Secure Digital Solutions
                </span>
              </h1>
            </motion.div>

            {/* 📄 SUBTEXT - Compact */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base text-white/60 max-w-lg leading-relaxed font-light"
            >
              JSoft Technologies KE delivers professional network installation,
              CCTV security systems, IT support, and creative media solutions
              designed to help businesses grow, stay connected, and remain
              secure.
            </motion.p>

            {/* 🎯 CTA SECTION - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <button className="group relative px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-xs font-semibold flex items-center gap-2 transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]">
                <span>Explore Services</span>
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button className="group relative px-3 py-2 text-xs font-medium text-white/60 hover:text-white transition-colors">
                <span>Contact Us</span>
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full" />
              </button>
            </motion.div>

            {/* 📊 FEATURE MINI CARDS - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-1"
            >
              {[
                {
                  icon: <Network className="h-4 w-4 text-blue-400" />,
                  title: "Networking",
                  description: "Enterprise",
                },
                {
                  icon: <ShieldCheck className="h-4 w-4 text-blue-400" />,
                  title: "CCTV Security",
                  description: "24/7",
                },
                {
                  icon: <HeadphonesIcon className="h-4 w-4 text-blue-400" />,
                  title: "IT Support",
                  description: "Expert",
                },
                {
                  icon: <MonitorPlay className="h-4 w-4 text-blue-400" />,
                  title: "Creative Media",
                  description: "Digital",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="group relative rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-2 transition-all hover:border-blue-500/30 hover:bg-white/10"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded bg-blue-500/10 border border-blue-500/10 group-hover:bg-blue-500/20 transition">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-[8px] text-white/40">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE - 5 columns with 3D Interactive Card - Smaller */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${mousePosition.x * 4}deg) rotateX(${
                  mousePosition.y * -4
                }deg)`,
              }}
            >
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm shadow-xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/67c0b1bb29280054985e1a14_AD_4nXc2ho0791L6qRXKvncYKa74r07g0e1tBbM2q8OVU7mRC9X4hDFFZ1-C0PU4ZViD_0AtuYQ0iKgsBAu-rbI7Eq_Y_18UbUENM9V3lD0QBf9TAN1fDHo6JzzZSG2ZlSRliQr1y_cGog.jpeg"
                    alt="JSoft Technologies - Smart Technology Solutions"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    priority
                    quality={85}
                  />

                  <div className="absolute inset-0 bg-gradient-to-tr from-[#05080F] via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent" />

                  {/* Floating Stats Cards - Smaller */}
                  <motion.div
                    className="absolute top-3 left-3 bg-[#05080F]/80 backdrop-blur-md border border-white/10 rounded-lg px-2.5 py-1.5"
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <p className="text-[8px] text-white/40 font-mono uppercase tracking-wider">
                      Projects
                    </p>
                    <h3 className="text-lg font-bold text-blue-400">250+</h3>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-3 right-3 bg-[#05080F]/80 backdrop-blur-md border border-white/10 rounded-lg px-2.5 py-1.5"
                    animate={{
                      y: [0, 4, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <p className="text-[8px] text-white/40 font-mono uppercase tracking-wider">
                      Satisfaction
                    </p>
                    <h3 className="text-lg font-bold text-cyan-400">98%</h3>
                  </motion.div>

                  {/* Tech Badge - Smaller */}
                  <motion.div
                    className="absolute top-3 right-3 bg-[#05080F]/80 backdrop-blur-md border border-white/10 rounded-lg px-2 py-1"
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <div className="flex items-center gap-1.5 text-[10px]">
                      <Zap size={10} className="text-amber-400" />
                      <span className="text-white/80 font-mono text-[9px]">
                        ISO Certified
                      </span>
                    </div>
                  </motion.div>

                  {/* Animated scan line */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-[scan_4s_linear_infinite]"
                      style={{
                        height: "200%",
                        top: "-100%",
                        transform: "rotate(25deg)",
                        animation: "scan 4s linear infinite",
                      }}
                    />
                  </div>
                </div>

                {/* Card Footer - Compact */}
                <div className="p-3 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe size={12} className="text-blue-400" />
                      <span className="text-[10px] text-white/40 font-mono">
                        Kenya & Beyond
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                      </span>
                      <span className="text-[8px] text-white/40 font-mono">
                        Live Support
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow reflections */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 🔽 SCROLL INDICATOR - Minimalist */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[8px] font-mono text-white/20 tracking-[0.3em]">
          DISCOVER
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} className="text-white/20" />
        </motion.div>
      </motion.div>

      {/* 🎨 CSS Keyframes for scan animation */}
      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%) rotate(25deg);
          }
          100% {
            transform: translateY(100%) rotate(25deg);
          }
        }
      `}</style>
    </section>
  );
}