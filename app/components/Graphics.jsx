"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  CheckCircle2, 
  Palette, 
  Printer, 
  Share2, 
  Sparkles,
  ArrowRight,
  Star,
  Eye,
  Zap
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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
      image: "/images/saturdays-party-flyer-design-template-27e1d93f7f67088f439805c8cb5e8d5a_5947cd1b-85b6-43aa-b787-1e90ff4b32ca_screen.png",
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
      image: "/images/social-media-template-business-agency-digital-marketing-business-sale-promo-furniture-fashion-advertising-promotional-banner-vector-frame_25346-662.avif",
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
    <section className="py-12 md:py-16 bg-gray-50 text-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header - Center Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-8 md:mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-100 mb-3">
            <Sparkles size={12} className="text-orange-500" />
            <span className="text-[9px] font-semibold text-orange-600 uppercase tracking-wider">
              Creative Design Studio
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            We Don't Just Design —{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              We Build Brand Experiences
            </span>
          </h2>

          <p className="mt-2 text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            From business cards to large-scale branding materials,
            we create visuals that make businesses unforgettable.
          </p>
        </motion.div>

        {/* Main Grid - Compact */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* Left - Slider */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg shadow-orange-500/10">
              <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: true,
                }}
                effect="fade"
                loop={true}
                className="w-full"
              >
                {products.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full h-[260px] sm:h-[300px] md:h-[360px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority={i === 0}
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      
                      {/* Decorative Line */}
                      <div className="absolute top-0 left-0 w-0.5 h-16 bg-gradient-to-b from-orange-500 to-transparent" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/90 backdrop-blur-sm text-[8px] font-medium uppercase tracking-wider mb-2">
                          <Star size={10} />
                          {item.category}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs text-gray-200 max-w-md leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>

          {/* Right - Content - Compact */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Headline */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                Design That Shapes{" "}
                <span className="text-orange-500">Business Perception</span>
              </h3>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                Great design influences trust, recognition, and customer attention.
                We craft visuals that communicate professionalism and impact.
              </p>
            </div>

            {/* Design Pillars - Compact */}
            <div className="space-y-2">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="group flex gap-3 p-2.5 rounded-lg border border-gray-100 bg-white hover:border-orange-200 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-1.5 rounded-lg bg-orange-50 border border-orange-100 group-hover:bg-orange-100 transition">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900">
                      {pillar.title}
                    </h4>
                    <p className="text-[10px] text-gray-500 mt-0.5 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA & Trust Badges - Compact */}
            <div className="space-y-3 pt-1">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <button className="group inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-500/30 text-white text-xs font-medium rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                  <span>Explore Design Services</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3 pt-1 border-t border-gray-100"
              >
                <div className="flex items-center gap-1.5">
                  <Eye size={12} className="text-orange-400" />
                  <span className="text-[9px] text-gray-400">100+ Projects</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star size={12} className="text-orange-400" />
                  <span className="text-[9px] text-gray-400">98% Satisfaction</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap size={12} className="text-orange-400" />
                  <span className="text-[9px] text-gray-400">Fast Turnaround</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Portfolio Grid Preview - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-6 border-t border-gray-200"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[8px] font-semibold text-orange-500 uppercase tracking-wider">
                Portfolio
              </p>
              <h3 className="text-sm font-bold text-gray-900">
                Our Recent Work
              </h3>
            </div>
            <button className="text-[10px] text-orange-500 font-medium hover:text-orange-600 transition flex items-center gap-1">
              View All <ArrowRight size={12} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {products.slice(0, 4).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.06 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group bg-gray-100"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[8px] font-medium truncate">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}