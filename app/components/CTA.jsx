import React from "react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-10 px-6 text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[#050b1a]" />

      {/* Blue + Amber cinematic glow (JSoft brand) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,64,175,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(245,158,11,0.18),transparent_60%)]" />

      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/patterns.png')] bg-cover bg-center" />

      {/* Content */}
      <div className="relative max-w-2xl mx-auto text-center">

        {/* Label */}
        <p className="text-[10px] tracking-[0.25em] uppercase text-orange-400 mb-4">
          One Action • Real Impact
        </p>

        {/* Heading */}
        <h2 className="px-4 text-2xl md:text-3xl font-semibold leading-snug">
          Need reliable IT 
          <span className="text-blue-500"> or security solutions?</span>
        </h2>

        {/* Subtext */}
        <p className="px-4 mt-4 text-white/60 textsm leading-relaxed">
          JSoft Technologies KE delivers secure networking, CCTV systems,
          IT support, and digital solutions that keep your business running smoothly.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">

          <a
            href="/contacts"
            className="
              px-7 py-2.5 rounded-full
              bg-orange-600 text-white text-sm font-medium
              hover:bg-amber-500 hover:text-black
              transition
            "
          >
            Contact Us
          </a>

          <a
            href="/services"
            className="
              px-7 py-2.5 rounded-full
              border border-white/20 text-white/70 text-sm
              hover:border-amber-400 hover:text-white
              transition
            "
          >
            Explore Services
          </a>

        </div>

        {/* Micro trust line */}
        <p className="mt-6 text-[10px] text-white/40">
          Secure • Professional • Kisumu-based experts
        </p>
      </div>
    </section>
  );
}