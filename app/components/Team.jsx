"use client";

import { motion } from "framer-motion";
import { Mail, Globe, ShieldCheck } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Joseph Opere",
      role: "Founder & Network Engineer",
      desc: "Enterprise networking & infrastructure architecture specialist.",
      img: "/images/139439.jpg",
    },
    {
      name: "Muriithi Nguru",
      role: "Web Developer & Software Engineer",
      desc: "World-class web development and software engineering specialist.",
      img: "/images/1765669389666~2.jpg",
    },
    {
      name: "Brin Tanui",
      role: "CCTV Systems Lead",
      desc: "Security systems design, surveillance & monitoring solutions.",
      img: "/images/IMG-20230803-WA0030.jpg",
    },
    {
      name: "Swibe S. Paul",
      role: "IT Support Engineer",
      desc: "Fast-response IT support & system troubleshooting expert.",
      img: "/images/IMG-20230803-WA0025.jpg",
    },
    {
      name: "Brian Odhiambo",
      role: "Creative Media Designer",
      desc: "Branding, motion graphics & digital experience designer.",
      img: "/images/IMG-20231203-WA0021.jpg",
    },
  ];

  const leader = team[0];
  const nguru = team[1];
  const others = team.slice(2);

  return (
    <section className="relative bg-amber-50 py-16 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-60px] w-[220px] h-[220px] bg-orange-200/40 blur-3xl rounded-full" />
        <div className="absolute bottom-[-100px] right-[-60px] w-[240px] h-[240px] bg-cyan-200/30 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 text-orange-600 text-[11px] fontsemibold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            Meet The Team
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-2">
            The Minds Behind{" "}
            <span className="text-blue-900">JSoft Technologies</span>
          </h2>

          <p className="text-gray-700 mt-2 text-xs max-w-xl mx-auto">
            Engineers, designers, and IT experts building reliable digital systems.
          </p>
        </motion.div>

        {/* LEADER (SMALLER) */}
        <div className="grid md:grid-cols-2 lggrid-cols-3 gap-4">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white w-1/2h-52 rounded -2xl border border-orange-100 shadowsm overflow-hidden flex mb-8"
        >
          <div className="w-1/2 h-52">
            <img
              src={leader.img}
              alt={leader.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-2 w-1/2 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-blue-950">
              {leader.name}
            </h3>

            <p className="text-orange-500 text-xs font-medium">
              {leader.role}
            </p>

            <p className="text-gray-600 text-xs mt-2 line-clamp-3">
              {leader.desc}
            </p>

            <div className="flex gap-3 mt-4 text-gray-500">
              <Mail className="w-4 h-4 hover:text-orange-500 cursor-pointer" />
              <Globe className="w-4 h-4 hover:text-orange-500 cursor-pointer" />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white w-1/2h-52 rounded -2xl border border-orange-100 shadowsm overflow-hidden flex mb-8"
        >
          <div className="w-1/2 h-52">
            <img
              src={nguru.img}
              alt={nguru.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-2 w-1/2 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-blue-950">
              {nguru.name}
            </h3>

            <p className="text-orange-500 text-xs font-medium">
              {nguru.role}
            </p>

            <p className="text-gray-600 text-xs mt-2 line-clamp-3">
              {nguru.desc}
            </p>

            <div className="flex gap-3 mt-4 text-gray-500">
              <Mail className="w-4 h-4 hover:text-orange-500 cursor-pointer" />
              <Globe className="w-4 h-4 hover:text-orange-500 cursor-pointer" />
            </div>
          </div>
        </motion.div>
        </div>

        {/* TEAM GRID (SMALLER CARDS) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="bg-white rounded -xl border border-orange-100 overflow-hidden flex shadowsm"
            >
              <div className="h-32 w-1/2">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3 w-1/2 flex flex-col justify-center">
                <h3 className="font-bold text-blue-950 text-sm">
                  {member.name}
                </h3>

                <p className="text-[11px] text-orange-500 font-medium mt-1">
                  {member.role}
                </p>

                <p className="text-[11px] text-gray-600 mt-2 line-clamp-2">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}