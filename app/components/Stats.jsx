"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Users, 
  Clock, 
  Award,
  Wifi,
  Camera,
  Headphones,
  MonitorPlay,
  TrendingUp,
  ShieldCheck,
  Smile
} from "lucide-react";
import { useState, useEffect } from "react";

export default function StatsSection() {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    uptime: 0,
    years: 0,
  });
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsClient(true);

    // Generate particles on client only
    const newParticles = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const animateCount = (target, key, duration = 2000) => {
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        current += increment;
        if (step >= steps) {
          current = target;
          clearInterval(interval);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, duration / steps);
    };

    animateCount(500, 'projects');
    animateCount(350, 'clients');
    animateCount(99, 'uptime');
    animateCount(8, 'years');
  }, []);

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Dark Base Background */}
      <div className="absolute inset-0 bg-[#05080F]" />
      
      {/* Shining Blue & Orange Glows - Smaller */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-blue-500/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-orange-500/25 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[150px]" />
      
      {/* Shining Stars / Particles - Client only */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
              initial={{
                x: particle.x + '%',
                y: particle.y + '%',
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Animated Shine Line - Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <p className="text-[10px] font-semibold text-orange-400 uppercase tracking-[0.2em] relative inline-block">
            <span className="absolute -inset-1 blur-xl bg-orange-500/20 rounded-full" />
            <span className="relative">Our Impact</span>
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 text-white relative">
            Trusted By Businesses Across{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Kenya
            </span>
          </h2>
          <p className="text-blue-200/50 max-w-xl mx-auto mt-2 text-sm leading-relaxed">
            Delivering enterprise-grade IT solutions with proven results.
          </p>
        </motion.div>

        {/* Main Stats Grid - Compact */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {[
            {
              icon: <Briefcase className="w-4 h-4 text-orange-400" />,
              value: counts.projects,
              suffix: "+",
              label: "Projects",
              description: "Completed",
            },
            {
              icon: <Users className="w-4 h-4 text-orange-400" />,
              value: counts.clients,
              suffix: "+",
              label: "Clients",
              description: "Happy",
            },
            {
              icon: <Clock className="w-4 h-4 text-orange-400" />,
              value: counts.uptime,
              suffix: "%",
              label: "Uptime",
              description: "Guarantee",
            },
            {
              icon: <Award className="w-4 h-4 text-orange-400" />,
              value: counts.years,
              suffix: "+",
              label: "Experience",
              description: "Years",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -4,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              {/* Glowing Card Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
              
              {/* Card Content - Compact */}
              <div className="relative bg-[#0A0F1E]/80 backdrop-blur-sm rounded-lg border border-white/10 p-4 text-center hover:border-orange-400/20 transition-all duration-300 shadow-lg shadow-blue-500/5 group-hover:shadow-blue-500/15">
                <div className="flex justify-center mb-1.5">
                  <div className="p-1.5 rounded-lg bg-gradient-to-br from-orange-500/20 to-blue-500/20 border border-orange-400/20 group-hover:border-orange-400/40 transition duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-xs font-semibold text-blue-200/70 mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[10px] text-blue-300/30">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Stats Grid - Compact */}
        <div className="hidden grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {[
            {
              icon: <Wifi className="w-3.5 h-3.5 text-orange-400" />,
              value: "150+",
              label: "Networks Installed",
            },
            {
              icon: <Camera className="w-3.5 h-3.5 text-orange-400" />,
              value: "200+",
              label: "CCTV Systems",
            },
            {
              icon: <Headphones className="w-3.5 h-3.5 text-orange-400" />,
              value: "98%",
              label: "Satisfaction",
            },
            {
              icon: <MonitorPlay className="w-3.5 h-3.5 text-orange-400" />,
              value: "100+",
              label: "Media Projects",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#0A0F1E]/60 backdrop-blur-sm border border-white/5 hover:border-orange-400/20 transition duration-300 shadow-lg shadow-blue-500/5 hover:shadow-orange-500/10"
            >
              <div className="p-1 rounded bg-gradient-to-br from-orange-500/20 to-blue-500/20 border border-orange-400/20 flex-shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-xs font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-[9px] text-blue-300/40">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 pt-6 border-t border-white/5 flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {[
            { icon: <TrendingUp size={14} className="text-orange-400" />, text: "Fast Growing IT Firm" },
            { icon: <ShieldCheck size={14} className="text-orange-400" />, text: "ISO 27001 Certified" },
            { icon: <Smile size={14} className="text-orange-400" />, text: "100+ 5-Star Reviews" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 text-[10px] text-blue-300/40 bg-[#0A0F1E]/40 px-2.5 py-1 rounded-full border border-white/5 backdrop-blur-sm"
            >
              {item.icon}
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}