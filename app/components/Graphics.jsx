"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Palette,
  Printer,
  Share2,
  ArrowUpRight,
  Plus,
} from "lucide-react";

export default function GraphicDesignServices() {
  const categories = [
    {
      id: "branding",
      number: "01",
      label: "Branding",
      icon: Palette,
      headline: "Brand Identity Systems",
      desc: "Logos, marks, type systems and color language — a complete visual voice built for recognition and long-term trust.",
      works: [
        { title: "Logo Design", image: "/images/logo.png" },
        {
          title: "Business Cards",
          image: "/images/240889.png",
        },
        {
          title: "Flyers",
          image: "/images/237742.jpg",
        },
      ],
    },
    {
      id: "print",
      number: "02",
      label: "Print",
      icon: Printer,
      headline: "Print & Marketing Materials",
      desc: "Business cards, banners, posters and brochures — produced with sharp typography and print-ready precision.",
      works: [
        {
          title: "Roll-Up Banners",
          image: "/images/39b97c98590117.5edfb13bf0294.jpg",
        },
        {
          title: "Posters",
          image:
            "/images/saturdays-party-flyer-design-template-27e1d93f7f67088f439805c8cb5e8d5a_5947cd1b-85b6-43aa-b787-1e90ff4b32ca_screen.png",
        },
        {
          title: "Flyers",
          image: "/images/237742.jpg",
        },
      ],
    },
    {
      id: "digital",
      number: "03",
      label: "Digital",
      icon: Share2,
      headline: "Digital Content Design",
      desc: "Scroll-stopping social visuals and campaign assets built for modern platforms and measurable engagement.",
      works: [
        {
          title: "Social Media Designs",
          image:
            "/images/social-media-template-business-agency-digital-marketing-business-sale-promo-furniture-fashion-advertising-promotional-banner-vector-frame_25346-662.avif",
        },
        {
          title: "Posters",
          image:
            "/images/saturdays-party-flyer-design-template-27e1d93f7f67088f439805c8cb5e8d5a_5947cd1b-85b6-43aa-b787-1e90ff4b32ca_screen.png",
        },
        {
          title: "Logo Design",
          image: "/images/logo.png",
        },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = categories[activeIndex];

  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        {/* ============ HEADER — CENTERED, COMPACT ============ */}
        <div className="mb-10 flex flex-col items-center gap-4 border-b border-slate-200 pb-8 text-center">
          <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-orange-600">
            Graphic Design
          </p>

          <h2 className="mx-auto max-w-3xl text-2xl md:text-3xl font-black leading-[1.05] tracking-tight text-slate-900 smtext-4xl lg:text-4xl">
            Design is not decoration.
            <br />
            <span className="italic font-serif text-slate-400">
              It's positioning.
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-500">
            Three disciplines. One visual language. Built for businesses that
            want to be remembered.
          </p>
        </div>

        {/* ============ SPLIT PANEL — TABS LEFT, CONTENT RIGHT ============ */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* LEFT RAIL — NUMBERED CATEGORY SWITCHER */}
          <div className="lg:col-span-3">
            <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:sticky lg:top-24 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
              {categories.map((cat, i) => {
                const isActive = i === activeIndex;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveIndex(i)}
                    className={`group relative flex shrink-0 items-center gap-3 border-b border-slate-200 py-3.5 pr-4 text-left transition-colors lg:w-full lg:shrink ${
                      isActive
                        ? "lg:border-slate-900"
                        : "hover:lg:border-slate-400"
                    }`}
                  >
                    <span
                      className={`hidden h-4 w-px bg-orange-500 transition-opacity lg:block ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    <div className="flex flex-1 items-center gap-3">
                      <span
                        className={`text-[7px] font-bold tabular-nums tracking-widest transition-colors ${
                          isActive
                            ? "text-orange-500"
                            : "text-slate-300 group-hover:text-slate-500"
                        }`}
                      >
                        {cat.number}
                      </span>

                      <span
                        className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                          isActive
                            ? "text-slate-900"
                            : "text-slate-400 group-hover:text-slate-700"
                        }`}
                      >
                        {cat.label}
                      </span>
                    </div>

                    <Icon
                      size={14}
                      className={`transition-colors ${
                        isActive
                          ? "text-orange-500"
                          : "text-slate-300 group-hover:text-slate-500"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Small stat block under rail */}
            <div className="mt-6 hidden border-t border-slate-200 pt-4 lg:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Since 2019
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                100+ identity, print and digital projects delivered across
                Kenya.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT — MAGAZINE COLUMN + IMAGE STACK */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="grid gap-8 md:grid-cols-12"
              >
                {/* TEXT COLUMN */}
                <div className="md:col-span-5 flex flex-col">
                  <h3 className="text-lg font-black leading-tight tracking-tight text-slate-900 md:text-xl">
                    {active.headline}
                  </h3>

                  <p className="mt-3.5 text-sm leading-relaxed text-slate-500">
                    {active.desc}
                  </p>

                  {/* Feature list — no cards, just typographic lines */}
                  <ul className="mt-6 space-y-0 border-t border-slate-200">
                    {active.works.map((w, i) => (
                      <li
                        key={i}
                        className="group flex items-center justify-between border-b border-slate-200 py-3"
                      >
                        <span className="text-sm font-medium text-slate-700 transition-colors group-hover:text-orange-600">
                          {w.title}
                        </span>
                        <ArrowUpRight
                          size={15}
                          className="text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-500"
                        />
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className="mt-6 inline-flex w-fit items-center gap-3 border-b-2 border-slate-900 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-500 transition-colors hover:border-orange-500 hover:text-orange-600">
                    Start a Project
                    <ArrowUpRight size={15} />
                  </button>
                </div>

                {/* IMAGE STACK — asymmetric, offset grid */}
                <div className="md:col-span-7">
                  <div className="grid grid-cols-6 grid-rows-6 gap-2 h-[320px] md:h-[400px]">
                    {/* Large hero image spans 4 cols, 4 rows */}
                    <div className="relative col-span-6 row-span-4 overflow-hidden bg-slate-100 md:col-span-4">
                      <Image
                        src={active.works[0].image}
                        alt={active.works[0].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute left-0 top-0 bg-slate-900 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white">
                        {active.works[0].title}
                      </div>
                    </div>

                    {/* Tall right image spans 2 cols, 4 rows */}
                    <div className="relative col-span-6 row-span-2 overflow-hidden bg-slate-100 md:col-span-2 md:row-span-4">
                      <Image
                        src={active.works[1].image}
                        alt={active.works[1].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    {/* Bottom wide image spans full 6 cols, 2 rows */}
                    <div className="relative col-span-6 row-span-2 overflow-hidden bg-slate-100">
                      <Image
                        src={active.works[2].image}
                        alt={active.works[2].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 75vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-900">
                        <Plus size={11} className="text-orange-500" />
                        {active.works[2].title}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ============ BOTTOM FILMSTRIP — ALL WORK ============ */}
        <div className="hidden mt-12 border-t border-slate-200 pt-8">
          <div className="mb-5 flex items-end justify-between">
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
                Archive
              </span>
              <span className="h-px w-16 bg-slate-300" />
              <span className="text-[11px] font-medium uppercase tracking-widest text-slate-500">
                Recent Output
              </span>
            </div>
            <button className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-900 transition-colors hover:text-orange-600">
              View All Work
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {categories
              .flatMap((c) => c.works)
              .slice(0, 6)
              .map((work, i) => (
                <div
                  key={i}
                  className="group relative aspect-[4/5] overflow-hidden bg-slate-100"
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-slate-900/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                    {work.title}
                  </div>
                  <span className="absolute right-2 top-2 text-[10px] font-bold tabular-nums text-white/70 mix-blend-difference">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}