"use client";

import { motion } from "framer-motion";
import {
  Camera,
  RadioTower,
  Headphones,
  Globe,
} from "lucide-react";

export default function TechnologyCTA() {
  return (
    <section className="relative py-16 overflow-hidden bg-[#020817]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-orange-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-cyan-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded -[32px] border border-orange-500/20 bg-gradient-to-r from-orange-500/10 via-white/5 to-cyan-500/10 backdrop-blur-xl p-4 md:p-12"
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-orange-500/20 blur-3xl rounded-full"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <p className="text-orange-400 uppercase tracking-[0.3em] text-xs mb-2">
                OUR SERVICES
              </p>

              <h3 className="text-2xl md:text-3xl font-black leading-tight mb-6 text-white">
                Delivering Secure, Smart &
                <span className="text-blue-400">
                  {" "}
                  Future-Ready Solutions
                </span>
              </h3>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                We help businesses embrace technology with confidence through
                enterprise networking, intelligent surveillance systems,
                dependable IT support, and creative digital solutions.
              </p>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded -2xl p-2">
                <Camera className="w-7 h-7 text-orange-400 mb-4" />

                <h4 className="font-semibold textlg mb-2 text-white">
                  CCTV Systems
                </h4>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Advanced surveillance solutions for businesses and homes.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded -2xl p-2">
                <RadioTower className="w-7 h-7 text-orange-400 mb-4" />

                <h4 className="font-semibold textlg mb-2 text-white">
                  Networking
                </h4>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Enterprise-grade network installation and infrastructure.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded -2xl p-2">
                <Headphones className="w-7 h-7 text-orange-400 mb-4" />

                <h4 className="font-semibold textlg mb-2 text-white">
                  IT Support
                </h4>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Reliable maintenance and technical support services.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded -2xl p-2">
                <Globe className="w-7 h-7 text-orange-400 mb-4" />

                <h4 className="font-semibold textlg mb-2 text-white">
                  Creative Media
                </h4>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Branding, design, and media solutions for modern businesses.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}