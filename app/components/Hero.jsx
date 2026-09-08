"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  ShieldCheck, 
  Network, 
  Camera, 
  Cpu,
  Sparkles,
  Zap,
  Globe,
  ChevronDown
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
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

  // Handle client-side initialization
  useEffect(() => {
    setIsClient(true);
    
    // Generate particles on client only
    const newParticles = [...Array(30)].map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 10
    }));
    setParticles(newParticles);
  }, []);

  // Handle mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#05080F] text-white overflow-hidden"
      style={{
        perspective: "1000px"
      }}
    >
      
      {/* ✨ AMBIENT BACKGROUND LAYERS */}
      
      {/* Layer 1: Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#05080F] via-[#0A1628] to-[#0F1A2E]" />
      
      {/* Layer 2: Floating orbs with mouse tracking */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[150px]"
        animate={{
          x: mousePosition.x * -30,
          y: mousePosition.y * -30
        }}
        transition={{ type: "spring", damping: 30 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[150px]"
        animate={{
          x: mousePosition.x * 30,
          y: mousePosition.y * 30
        }}
        transition={{ type: "spring", damping: 30 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/3 blur-[200px]"
        animate={{
          x: mousePosition.x * -15,
          y: mousePosition.y * -15
        }}
        transition={{ type: "spring", damping: 30 }}
      />

      {/* Layer 3: Animated grid with depth */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
      }} />

      {/* Layer 4: Floating particles - RENDER ONLY ON CLIENT */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
              initial={{
                x: particle.x,
                y: particle.y,
                scale: 0
              }}
              animate={{
                y: [null, -100, -200],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}

      {/* 🎯 MAIN CONTENT WITH PARALLAX - LEFT COLUMN NOW SMALLER */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative max-w-7xl mx-auto px-6 min-h-screen flex items-center"
      >
        <div className="w-full grid lg:grid-cols-12 gap-12 items-center py-20">

          {/* LEFT CONTENT - NOW 6 COLUMNS INSTEAD OF 7 (SMALLER) */}
          <div className="lg:col-span-6 space-y-4">

            {/* 🔮 ANOMALY BADGE - Futuristic Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-4 mt-4"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
                <div className="relative flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" />
                  </span>
                  <span className="text-xs font-mono text-blue-300 tracking-widest">
                    NEXT-GEN INFRASTRUCTURE
                  </span>
                  <Sparkles size={12} className="text-orange-400" />
                </div>
              </div>
            </motion.div>

            {/* 📝 HEADLINE - Typographic Masterpiece */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[0.9] tracking-tight">
                <span className="block">Engineering</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                  Digital Excellence
                </span>
                <span className="block text-5xl md:text-5xl lg:text-5xl font-light text-orange-400 mt-2">
                  for the Future
                </span>
              </h1>
            </motion.div>

            {/* 📄 SUBTEXT - Elegant Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-basemd: text-lg text-white/60 max-w-lg leading-relaxed font-light"
            >
              Where cutting-edge technology meets uncompromising security. 
              We architect, build, and protect the digital infrastructure 
              that powers tomorrow's enterprises.
            </motion.p>

            {/* 🎯 CTA SECTION - Hybrid Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              {/* Primary CTA - Glass morphism */}
              <button className="group relative px-7 py-3 rounded bg-orange-400 to-blue-600 text-sm font-semibold flex items-center gap-2 transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]">
                <span>Launch Consultation</span>
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              {/* Secondary CTA - Ghost with underline animation */}
              <button className="group relative px-3 py-2.5 text-sm font-medium text-white/60 hover:text-white transition-colors">
                <span>Explore Solutions</span>
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full" />
              </button>
            </motion.div>

            {/* 📊 STATS - Social Proof with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {[
                { value: "99.9%", label: "Uptime Guarantee", icon: ShieldCheck },
                { value: "24/7", label: "Enterprise Support", icon: Network },
                { value: "500+", label: "Systems Deployed", icon: Globe }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                    <stat.icon size={15} className="text-orange-400" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-white">{stat.value}</div>
                    <div className="text-[10px] text-white/40">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* RIGHT SIDE - NOW 6 COLUMNS INSTEAD OF 5 (BIGGER) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative group"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)`
              }}
            >

              {/* 3D Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm shadow-2xl">

                {/* Image with floating elements */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/aboutus.avif"
                    alt="Next-gen IT infrastructure"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                    quality={90}
                  />

                  {/* Dynamic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#05080F] via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent" />

                  {/* Floating Tech Badges */}
                  <motion.div 
                    className="absolute top-4 right-4 bg-[#05080F]/80 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="flex items-center gap-2 text-xs">
                      <Zap size={12} className="text-amber-400" />
                      <span className="text-white/80 font-mono">Powered by AI</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="absolute bottom-4 left-4 bg-[#05080F]/80 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5"
                    animate={{
                      y: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <div className="flex items-center gap-2 text-xs">
                      <ShieldCheck size={12} className="text-orange-400" />
                      <span className="text-white/80 font-mono">ISO 27001 Certified</span>
                    </div>
                  </motion.div>

                  {/* Animated scan line */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-[scan_4s_linear_infinite]" 
                         style={{
                           height: "200%",
                           top: "-100%",
                           transform: "rotate(25deg)",
                           animation: "scan 4s linear infinite"
                         }} 
                    />
                  </div>
                </div>

                {/* Card Footer - Tech Stack Tags */}
                <div className="p-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {["Cloud Native", "Zero Trust", "Edge Computing", "AI Ops"].map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-[10px] font-mono text-white/40 border border-white/5 rounded-full bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Glow reflections */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* 🔽 SCROLL INDICATOR - Minimalist */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-white/20 tracking-[0.3em]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-white/20" />
        </motion.div>
      </motion.div>

      {/* 🎨 CSS Keyframes for scan animation */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%) rotate(25deg); }
          100% { transform: translateY(100%) rotate(25deg); }
        }
      `}</style>

    </section>
  );
}