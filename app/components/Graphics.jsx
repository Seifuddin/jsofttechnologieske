"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Palette,
  Printer,
  Share2,
  Sparkles,
  ArrowRight,
  Star,
  Eye,
  Zap,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function GraphicDesignServices() {
  const products = [
    {
      title: "Business Cards",
      desc: "Professional identity cards that leave a lasting impression.",
      image: "/images/240889.png",
      category: "Print",
    },
    {
      title: "Roll-Up Banners",
      desc: "High-impact promotional banners for events and branding.",
      image: "/images/39b97c98590117.5edfb13bf0294.jpg",
      category: "Print",
    },
    {
      title: "Flyers",
      desc: "Attention-grabbing marketing materials designed for reach.",
      image: "/images/237742.jpg",
      category: "Print",
    },
    {
      title: "Posters",
      desc: "Bold, eye-catching posters for events, promotions, and campaigns.",
      image:
        "/images/saturdays-party-flyer-design-template-27e1d93f7f67088f439805c8cb5e8d5a_5947cd1b-85b6-43aa-b787-1e90ff4b32ca_screen.png",
      category: "Print",
    },
    {
      title: "Logo Design",
      desc: "Unique brand identities crafted for recognition and trust.",
      image: "/images/logo.png",
      category: "Branding",
    },
    {
      title: "Social Media Designs",
      desc: "Creative visuals optimized for modern digital platforms.",
      image:
        "/images/social-media-template-business-agency-digital-marketing-business-sale-promo-furniture-fashion-advertising-promotional-banner-vector-frame_25346-662.avif",
      category: "Digital",
    },
  ];

  const pillars = [
    {
      icon: <Palette size={16} className="text-orange-500" />,
      title: "Brand Identity Systems",
      desc: "Complete visual branding tailored to your business.",
    },
    {
      icon: <Printer size={16} className="text-orange-500" />,
      title: "Print & Marketing Materials",
      desc: "Business cards, flyers, banners, brochures, and more.",
    },
    {
      icon: <Share2 size={16} className="text-orange-500" />,
      title: "Digital Content Design",
      desc: "Modern social media visuals optimized for engagement.",
    },
  ];

  return (
    <section className="relative py-12 md:py-16 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* ============ HEADER ============ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-8 md:mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-3">
            <Sparkles size={12} className="text-orange-500" />
            <span className="text-[10px] font-semibold text-orange-600 uppercase tracking-wider">
              Creative Design Studio
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Graphic {" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Design
            </span>
          </h2>

          <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            From business cards to large-scale branding materials, we create
            visuals that make businesses unforgettable.
          </p>
        </motion.div>

        {/* ============ MAIN GRID ============ */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* ---- LEFT: SLIDER ---- */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 min-w-0"
          >
            <div className="relative rounded overflow-hidden shadow-xl shadow-orange-500/10 ring-1 ring-gray-900/5 bg-gray-900">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                loop={true}
                className="w-full [&_.swiper-pagination-bullet]:bg-white/60 [&_.swiper-pagination-bullet-active]:bg-orange-500"
              >
                {products.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover"
                        priority={i === 0}
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                      {/* Accent Line */}
                      <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-orange-500 to-transparent" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-white">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/90 backdrop-blur-sm text-[9px] font-semibold uppercase tracking-wider mb-2.5">
                          <Star size={10} />
                          {item.category}
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold leading-tight">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-xs md:text-sm text-gray-200/90 max-w-md leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>

          {/* ---- RIGHT: CONTENT ---- */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 min-w-0 flex flex-col"
          >
            {/* Headline */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                Design That Shapes{" "}
                <span className="text-orange-500">Business Perception</span>
              </h3>
              <p className="mt-2.5 text-gray-500 text-sm leading-relaxed">
                Great design influences trust, recognition, and customer
                attention. We craft visuals that communicate professionalism
                and impact.
              </p>
            </div>

            {/* Pillars */}
            <div className="mt-5 space-y-2.5">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  whileHover={{ x: 3 }}
                  className="group flex gap-3 p-3 rounded border border-gray-100 bg-white hover:border-orange-200 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-2 rounded bg-orange-50 border border-orange-100 group-hover:bg-orange-100 transition">
                    {pillar.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-semibold text-gray-900">
                      {pillar.title}
                    </h4>
                    <p className="text-base text-gray-500 mt-0.5 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA + Trust */}
            <div className="mt-auto pt-5 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <button className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-500/30 text-white text-sm font-medium rounded transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                  <span>Explore Design Services</span>
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-x-4 gap-y-2 pt-3 border-t border-gray-100"
              >
                {[
                  { icon: Eye, label: "100+ Projects" },
                  { icon: Star, label: "98% Satisfaction" },
                  { icon: Zap, label: "Fast Turnaround" },
                ].map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <Icon size={13} className="text-orange-400" />
                    <span className="text-[11px] text-gray-500 font-medium">
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ============ PORTFOLIO GRID ============ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 pt-8 border-t border-gray-200"
        >
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-[10px] font-semibold text-orange-500 uppercase tracking-wider">
                Portfolio
              </p>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mt-0.5">
                Our Recent Work
              </h3>
            </div>
            <button className="text-xs text-orange-500 font-medium hover:text-orange-600 transition flex items-center gap-1">
              View All <ArrowRight size={13} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {products.slice(0, 4).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.06 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group ring-1 ring-gray-900/5 bg-gray-100"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-2.5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[11px] font-medium truncate">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}