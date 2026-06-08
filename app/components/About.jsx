"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Rocket,
  CheckCircle2,
  Sparkles,
  Wifi,
  Headphones,
  MonitorSmartphone,
  Server,
} from "lucide-react";

export default function AboutUs() {
  const stats = [
    { number: "250+", label: "Projects Completed" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "24/7", label: "Technical Support" },
    { number: "10+", label: "Professional Experts" },
  ];

  const services = [
    "Enterprise Network Installation",
    "CCTV Security Systems",
    "IT Support & Maintenance",
    "Structured Cabling Solutions",
    "Creative Media & Branding",
    "Business Technology Solutions",
  ];

  const values = [
    {
      icon: <Wifi className="w-5 h-5" />,
      title: "Advanced Networking",
      description:
        "Reliable enterprise network infrastructures built for speed and scalability.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Smart Security",
      description:
        "Professional CCTV and surveillance solutions for complete protection.",
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: "IT Support",
      description:
        "Dependable technical support and maintenance services for businesses.",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Creative Media",
      description:
        "Modern branding and digital media solutions that elevate businesses.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#020817] text-white py-12 md:py-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[-100px] w-[240px] h-[240px] bg-cyan-500/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-[-100px] w-[240px] h-[240px] bg-orange-500/10 blur-3xl rounded-full"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:65px_65px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="hidden inlineflex items-center gap-2 bg-white/10 border border-orange-500/20 px-4 py-1 rounded-full text-orange-400 text-xs fontmedium mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            WHAT WE DO
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-3xl font-black leading-tight">
            Your No. 1 Consultant 
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400"> 
               in All I.T - Based Services
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            JSoft Technologies delivers enterprise network installation, CCTV
            security systems, IT support, and creative media solutions designed
            for modern businesses.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded -lg overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(249,115,22,0.12)]">
              <Image
                src="/images/aboutus.avif"
                alt="JSoft Technologies"
                width={900}
                height={700}
                className="w-full h-[340px] sm:h-[420px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/90 via-[#020817]/20 to-transparent"></div>

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-4 left-4 right-4 bg-[#081120]/85 backdrop-blur-xl border border-orange-500/20 rounded -lg p-3"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded -lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20 shrink-0">
                    <Server className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-base smtext-lg">
                      Trusted Technology Partner
                    </h4>

                    <p className="text-xs text-gray-300">
                      Secure • Innovative • Professional
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Delivering modern IT infrastructure, surveillance systems, and
                  creative digital solutions.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Intro */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                  <MonitorSmartphone className="w-5 h-5" />
                </div>

                <div>
                  <p className="hidden text-orange-400 uppercase tracking-widest text-[10px]">
                    WHO WE ARE
                  </p>

                  <h3 className="textxl md:text-xl font-black leading-tight">
                    Technology That Powers Growth
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                We combine innovation, technical expertise, and creativity to
                deliver dependable digital and IT solutions that help businesses
                thrive with confidence.
              </p>
            </div>

            {/* Services */}
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-3 bg-white/5 border border-white/10 rounded -xl px-3 py-3 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded -lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>

                  <span className="text-gray-200 text-xs sm:text-sm font-medium leading-snug">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="hidden grid grid-cols-2 gap-3">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-xl"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/10 blur-2xl rounded-full"></div>

                  <h4 className="text-2xl sm:text-3xl font-black text-orange-400 mb-1 relative z-10">
                    {item.number}
                  </h4>

                  <p className="text-[11px] sm:text-xs text-gray-300 relative z-10">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <div className="hidden grid sm:grid-cols-2 gap-3">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-3">
                    {value.icon}
                  </div>

                  <h4 className="font-bold text-sm sm:text-base mb-2">
                    {value.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}