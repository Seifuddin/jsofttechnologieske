"use client";

import { motion } from "framer-motion";
import { Mail, Globe, ShieldCheck, Link2, ArrowUpRight } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Joseph Opere",
      role: "Founder & Network Engineer",
      desc: "Enterprise networking & infrastructure architecture specialist.",
      img: "/images/139439.jpg",
      accent: "from-orange-500 to-orange-600",
    },
    {
      name: "Muriithi Nguru",
      role: "Web Developer & Software Engineer",
      desc: "World-class web development and software engineering specialist.",
      img: "/images/1765669389666~2.jpg",
      accent: "from-blue-500 to-blue-600",
    },
    {
      name: "Brin Tanui",
      role: "CCTV Systems Lead",
      desc: "Security systems design, surveillance & monitoring solutions.",
      img: "/images/IMG-20230803-WA0030.jpg",
      accent: "from-orange-500 to-orange-600",
    },
    {
      name: "Swibe S. Paul",
      role: "IT Support Engineer",
      desc: "Fast-response IT support & system troubleshooting expert.",
      img: "/images/IMG-20230803-WA0025.jpg",
      accent: "from-blue-500 to-blue-600",
    },
    {
      name: "Brian Odhiambo",
      role: "Creative Media Designer",
      desc: "Branding, motion graphics & digital experience designer.",
      img: "/images/IMG-20231203-WA0021.jpg",
      accent: "from-orange-500 to-orange-600",
    },
  ];

  const leaders = team.slice(0, 2);
  const members = team.slice(2);

  return (
    <section className="relative bg-white to-amber-50/40 py-16 md:py-20">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* ============ HEADER ============ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-[10px] font-semibold text-orange-600 uppercase tracking-widest">
              Meet The Team
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            The Minds Behind{" "}
            <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              JSoft Technologies
            </span>
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Engineers, designers, and IT experts building reliable digital
            systems.
          </p>
        </motion.div>

        {/* ============ LEADERS (Feature Cards) ============ */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 overflow-hidden"
            >
              {/* Accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${leader.accent}`}
              />

              <div className="flex flex-col sm:flex-row">
                {/* Photo */}
                <div className="relative w-full sm:w-2/5 aspect-square sm:aspect-auto sm:min-h-[220px] shrink-0 overflow-hidden">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent sm:bg-gradient-to-r" />
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {leader.name}
                  </h3>

                  <p className="text-xs font-semibold text-orange-500 mt-1 uppercase tracking-wide">
                    {leader.role}
                  </p>

                  <p className="text-xs text-gray-500 mt-3 leading-relaxed line-clamp-3">
                    {leader.desc}
                  </p>

                  <div className="flex gap-2 mt-4">
                    {[Mail, Globe, Link2].map((Icon, i) => (
                      <button
                        key={i}
                        aria-label="social link"
                        className="p-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-500 hover:text-orange-500 hover:border-orange-200 hover:bg-orange-50 transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ============ TEAM GRID ============ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 overflow-hidden"
            >
              {/* Photo */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Name overlay on photo */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <h3 className="text-sm font-bold leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-medium text-orange-300 mt-0.5 uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Description */}
              <div className="p-4">
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                  {member.desc}
                </p>

                <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
                  {[Mail, Globe].map((Icon, i) => (
                    <button
                      key={i}
                      aria-label="social link"
                      className="p-1 rounded-md text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}