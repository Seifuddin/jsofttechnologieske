"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function PhotographyLuxurySwiper() {
  const images = [
      {
      src: "/images/139439.jpg",
      title: "Creative Direction",
    },
    {
      src: "/images/254759177042_status_5c62fda3e1c94f5699ec58ea2e78ea4f.jpg",
      title: "Brand Identity Portrait",
    },
    {
      src: "/images/IMG-20231202-WA0019.jpg",
      title: "Executive Photography",
    },
    {
      src: "/images/IMG-20231204-WA0011.jpg",
      title: "Lifestyle Capture",
    },
    {
      src: "/images/IMG-20231202-WA0016.jpg",
      title: "Creative Direction",
    },
      {
      src: "/images/379441.jpg",
      title: "Creative Direction",
    },
  ];

  return (
    <section className="relative py-14 bg-amber-50 text-gray-900 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER (compact advert style) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <p className="text-[10px] tracking-[0.3em] text-orange-500 uppercase">
            Premium Photography Studio
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mt-2">
            Visuals That Elevate Your Brand
          </h2>

          <p className="text-gray-600 mt-2 text-sm max-w-xl mx-auto">
            A curated selection of high-end photography crafted for modern brands.
          </p>
        </motion.div>

        {/* SWIPER */}
        <div className="relative">

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={18}
            slidesPerView={1.2}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-2"
          >

            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-[220px] md:h-[240px] rounded -xl overflow-hidden shadow-sm border border-gray-100"
                >

                  {/* IMAGE */}
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/25" />

                  {/* caption */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-sm font-semibold">
                      {img.title}
                    </h3>
                    <p className="text-[10px] opacity-80">
                      Photography Studio Work
                    </p>
                  </div>

                </motion.div>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>

        {/* SMALL ADVERT LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-xs text-gray-500 mt-6"
        >
          Swipe to explore our premium photography collection — designed for brands that want to stand out.
        </motion.p>

      </div>
    </section>
  );
}