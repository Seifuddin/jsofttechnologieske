"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function GraphicDesignServices() {
  const products = [
    {
      title: "Business Cards",
      desc: "Professional identity cards that leave a lasting impression.",
      image: "/images/240889.png",
    },
    {
      title: "Roll-Up Banners",
      desc: "High-impact promotional banners for events and branding.",
      image: "/images/39b97c98590117.5edfb13bf0294.jpg",
    },
    {
      title: "Flyers",
      desc: "Attention-grabbing marketing materials designed for reach.",
      image: "/images/237742.jpg",
    },
    {
      title: "Posters",
      desc: "Attention-grabbing marketing materials designed for reach.",
      image: "/images/saturdays-party-flyer-design-template-27e1d93f7f67088f439805c8cb5e8d5a_5947cd1b-85b6-43aa-b787-1e90ff4b32ca_screen.png",
    },
    {
      title: "Logo Design",
      desc: "Unique brand identities crafted for recognition and trust.",
      image: "/images/logo.png",
    },
    {
      title: "Social Media Designs",
      desc: "Creative visuals optimized for modern digital platforms.",
      image: "/images/social-media-template-business-agency-digital-marketing-business-sale-promo-furniture-fashion-advertising-promotional-banner-vector-frame_25346-662.avif",
    },
  ];

  return (
    <section className="relative py-20 bg-amber-50 text-gray-900 overflow-x-hidden">

      {/* BACKGROUND ENERGY */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-amber-300/20 blur-[140px]" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-orange-300/10 blur-[140px]" />
      </div>

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6 overflow-hidden">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-9"
        >

          <p className="text-xs tracking-[0.3em] text-orange-600 uppercase">
            Creative Design Studio
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-3 leading-tight">
            We Don’t Just Design —
            <span className="text-blue-950">
              {" "}We Build Brand Experiences
            </span>
          </h2>

          <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            From business cards to large-scale branding materials,
            we create visuals that make businesses unforgettable.
          </p>

        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-8 items-center overflow-hidden">

          {/* LEFT SIDE SLIDER */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 w-full min-w-0"
          >

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              loop={true}
              className="rounded -[28px] overflow-hidden w-full"
            >

              {products.map((item, i) => (
                <SwiperSlide key={i}>

                  <div className="relative w-full h-[300px] sm:h-[320px] md:h-[420px]">

                    {/* IMAGE */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority={i === 0}
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 p-5 md:p-8 text-white">

                      <div className="inline-block px-4 py-1 rounded-full bg-orange-500/90 text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4">
                        Graphic Design
                      </div>

                      <h3 className="text-lg md:text-xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm text-gray-200 max-w-md leading-relaxed">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                </SwiperSlide>
              ))}

            </Swiper>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 w-full min-w-0"
          >

            <p className="hidden text-xs tracking-[0.25em] text-blue-950 uppercase">
              What We Create
            </p>

            <h2 className="text-xl mdtext-3xl fontsemibold mt-3 leading-tight text-gray-900">
              Design That Shapes
              <span className="text-gray-900">
                {" "}Business Perception
              </span>
            </h2>

            <p className="text-gray-700 mt-5 text-smmd:text-base leading-relaxed">
              Great design is more than aesthetics —
              it influences trust, recognition, and customer attention.
              We craft visuals that communicate professionalism and impact.
            </p>

            {/* DESIGN PILLARS */}
            <div className="mt-8 space-y-5">

              <DesignPillar
                title="Brand Identity Systems"
                desc="Complete visual branding tailored to your business."
              />

              <DesignPillar
                title="Print & Marketing Materials"
                desc="Business cards, flyers, banners, brochures, and more."
              />

              <DesignPillar
                title="Digital Content Design"
                desc="Modern social media visuals optimized for engagement."
              />

            </div>

            {/* BUTTON */}
            <button className="hidden mt-8 bg-orange-500 hover:bg-gray-900 text-white px-7 py-3 rounded-xl text-sm font-medium transition-all duration-300">
              Explore Design Services
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

/* DESIGN PILLAR */
function DesignPillar({ title, desc }) {
  return (
    <div className="flex items-start gap-4 border-b border-orange-200 rounded pb-1">

      {/* ICON */}
      <div className="flex-shrink-0 mt-1">
        <CheckCircle2 className="w-6 h-6 text-orange-500" />
      </div>

      {/* CONTENT */}
      <div>

        <h4 className="text-smmd:text-base font-semibold text-blue-950">
          {title}
        </h4>

        <p className="text-sm text-gray-700 mt-1 leading-relaxed">
          {desc}
        </p>

      </div>

    </div>
  );
}