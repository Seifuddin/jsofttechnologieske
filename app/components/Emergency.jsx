"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  Headphones,
  Clock3,
} from "lucide-react";

export default function Call() {
  return (
    <section className="relative py-10 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/Blog_customercare_1500x884-1.jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

      {/* GRADIENT GLOW */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-orange-500/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-900/30 blur-[120px] rounded-full" />

      </div>

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl"
        >

          {/* INNER CONTENT */}
          <div className="relative px-6 md:px-12 py-7 md:py-9 text-center">

            {/* TOP BADGE */}
            <div className="flex justify-center mb-6">

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">

                <Headphones className="w-4 h-4 text-orange-400" />

                <span className="text-[11px] uppercase tracking-[0.25em] text-orange-300 font-semibold">
                  Customer Support
                </span>

              </div>

            </div>

            {/* ICON */}
            <div className="flex justify-center mb-3">

              <div className="relative">

                {/* PULSE */}
                <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />

                {/* MAIN ICON */}
                <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-500/30">

                  <PhoneCall className="w-5 h-5 text-white" />

                </div>

              </div>

            </div>

            {/* TITLE */}
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">

              24/7 Customer Care
              <span className="text-orange-400"> Service</span>

            </h2>

            {/* LINE */}
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto mt-2" />

            {/* DESCRIPTION */}
            <p className="mt-3 text-gray-200 text-smmd:text-lg max-w-5xl mx-auto leading-relaxed">

              In case you want to speak directly with our team,
              contact us using the telephone number below.
              Our support specialists are available anytime,
              day or night, to assist you quickly and professionally.

            </p>

            {/* INFO ITEMS */}
            <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">

              {/* ITEM */}
              <div className="flex items-center justify-center gap-2 text-gray-200 text-sm">

                <Clock3 className="w-4 h-4 text-orange-400" />

                <span>24/7 Availability</span>

              </div>

              {/* ITEM */}
              <div className="flex items-center justify-center gap-2 text-gray-200 text-sm">

                <PhoneCall className="w-4 h-4 text-orange-400" />

                <span>Instant Phone Support</span>

              </div>

            </div>

            {/* CALL BUTTON */}
            <div className="mt-4">

              <a
                href="tel:+254759177042"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-2 rounded-2xl font-semibold shadow-xl shadow-green-500/20 transition-all duration-300 hover:scale-[1.03]"
              >

                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">

                  <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />

                </div>

                <div className="text-left">

                  <p className="text-xs text-green-100 uppercase tracking-wider">
                    Call Us Now
                  </p>

                  <p className="text-sm md:text-base font-bold">
                    +254 759 177 042
                  </p>

                </div>

              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}