"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowUpRight, Star, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function TrustSection() {
  const testimonials = [
    {
      name: "James Mwangi",
      role: "Business Owner",
      company: "Retail Chain, Nairobi",
      image: "/images/IMG-20250804-WA0003~2.jpg",
      text: "JSoft Technologies KE delivered a complete CCTV and network setup. Everything works flawlessly and support is fast.",
      rating: 5,
    },
    {
      name: "Mary Wanjiku",
      role: "School Administrator",
      company: "Secondary School, Kiambu",
      image: "/images/IMG-20250804-WA0003~2.jpg",
      text: "Reliable IT support. They stabilized our school network and improved security significantly.",
      rating: 5,
    },
    {
      name: "David Otieno",
      role: "Shop Manager",
      company: "Electronics Store, Mombasa",
      image: "/images/IMG-20250804-WA0003~2.jpg",
      text: "Professional service from start to finish. They handled our full installation perfectly.",
      rating: 4,
    },
  ];

  const logos = [
    { name: "Banks", icon: "🏦" },
    { name: "Financial Institutions", icon: "🏛️" },
    { name: "Telecommunication", icon: "📡" },
    { name: "Businesses", icon: "🛒" },
    { name: "Schools", icon: "🎓" },
    { name: "SMEs", icon: "💼" },
  ];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = testimonials[index];

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, [isPaused, testimonials.length]);

  return (
    <section className="bg-white py-24 text-slate-900 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* ============ HEADER ============ */}

        <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center max-w-2xl mx-auto mb-8 md:mb-10"
                >
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-100 mb-3">
                    <Sparkles size={12} className="text-orange-500" />
                    <span className="text-[9px] font-semibold text-orange-600 uppercase tracking-wider">
                      Trust Network
                    </span>
                  </div>
        
                  <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight">
                    Voices from the{" "}
                    <span className="text-gray-900">
                     businesses we've built with.
                    </span>
                  </h2>
        
                  <p className="mt-2 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
                    From banks to schools, we work alongside institutions across Kenya to design,
                     install, and protect the infrastructure that keeps them running.
                  </p>
                </motion.div>
        {/* ============ ASYMMETRIC TESTIMONIAL GRID ============ */}
        <div
          className="mt-20 grid gap-8 lg:grid-cols-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* LEFT: Client selector list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Select a client
            </p>

            <div className="space-y-2">
              {testimonials.map((t, i) => {
                const isActive = i === index;
                return (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`group relative w-full overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-orange-300 bg-orange-50/60"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeBar"
                        className="absolute left-0 top-0 h-full w-1 bg-orange-500"
                      />
                    )}

                    <div className="flex items-center gap-3">
                      <img
                        src={t.image}
                        alt={t.name}
                        className={`h-11 w-11 rounded-full object-cover ring-2 transition-all ${
                          isActive
                            ? "ring-orange-300"
                            : "ring-slate-200 group-hover:ring-slate-300"
                        }`}
                      />
                      <div className="min-w-0 flex-1">
                        <p
                          className={`truncate text-sm font-bold ${
                            isActive ? "text-blue-950" : "text-slate-700"
                          }`}
                        >
                          {t.name}
                        </p>
                        <p className="truncate text-xs text-slate-500">
                          {t.role}
                        </p>
                      </div>
                      <ArrowUpRight
                        className={`h-4 w-4 transition-all ${
                          isActive
                            ? "text-orange-500"
                            : "text-slate-300 group-hover:text-slate-500"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT: Big featured quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative lg:col-span-8"
          >
            <div className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 sm:p-12">
              {/* Giant quote mark watermark */}
              <Quote className="absolute -right-4 -top-4 h-40 w-40 text-slate-100" />

              <div className="relative flex h-full flex-col">
                {/* Stars + label */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < active.rating
                            ? "fill-orange-400 text-orange-400"
                            : "fill-slate-200 text-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    Verified Client
                  </span>
                </div>

                {/* Quote text */}
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1"
                  >
                    <p className="text-lg font-medium leading-[1.35] text-slate-800 sm:text-xl">
                      &ldquo;{active.text}&rdquo;
                    </p>
                  </motion.blockquote>
                </AnimatePresence>

                {/* Author row */}
                <div className="mt-10 flex items-end justify-between border-t border-slate-100 pt-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-base font-bold text-blue-950">
                        {active.name}
                      </p>
                      <p className="text-sm text-orange-600">{active.role}</p>
                      <p className="text-xs text-slate-500">
                        {active.company}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Progress dots */}
                  <div className="flex gap-1.5">
                    {testimonials.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          i === index
                            ? "w-6 bg-orange-500"
                            : "w-1.5 bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ============ MARQUEE TRUST BAR ============ */}
        <div className="mt-24">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-slate-200" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Trusted Across Industries
            </p>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="group flex shrink-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 transition-colors hover:border-orange-300 hover:bg-orange-50/40"
                >
                  <span className="text-xl grayscale transition-all duration-300 group-hover:grayscale-0">
                    {logo.icon}
                  </span>
                  <span className="whitespace-nowrap text-sm font-semibold text-slate-600 transition-colors group-hover:text-blue-950">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}