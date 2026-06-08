"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

export default function TrustSection() {
  const testimonials = [
    {
      name: "James Mwangi",
      role: "Business Owner",
      image: "/images/IMG-20250804-WA0003~2.jpg",
      text: "JSoft Technologies KE delivered a complete CCTV and network setup. Everything works flawlessly and support is fast.",
    },
    {
      name: "Mary Wanjiku",
      role: "School Administrator",
      image: "/images/IMG-20250804-WA0003~2.jpg",
      text: "Reliable IT support. They stabilized our school network and improved security significantly.",
    },
    {
      name: "David Otieno",
      role: "Shop Manager",
      image: "/images/IMG-20250804-WA0003~2.jpg",
      text: "Professional service from start to finish. They handled our full installation perfectly.",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const active = testimonials[index];

  return (
    <section className="relative bg-amber-50 py-16 text-gray-900">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <p className="text-xs fontsemibold text-orange-600">
            TRUST NETWORK
          </p>

          <h2 className="mt-2 text-2xl font-black md:text-3xl">
            Clients Who 
            <span className="text-blue-900"> Trust Us</span>
          </h2>

          <p className="mt-2 text-sm text-gray-700">
            Real feedback from businesses across Kenya.
          </p>
        </div>

        {/* FEATURED TESTIMONIAL */}
        <div className="relative mb-10 rounded -3xl border border-orange-100 bg-white p-6 shadowsm">

          <div className="flex gap-4">
            {/* avatar */}
            <img
              src={active.image}
              alt={active.name}
              className="h-16 w-16 rounded-full object-cover border border-orange-200"
            />

            <div className="flex-1">
              <Quote className="h-5 w-5 text-orange-400" />

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mt-2 text-base text-gray-700">
                  "{active.text}"
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                  <div>
                    <p className="text-sm font-bold text-blue-950">{active.name}</p>
                    <p className="text-xs text-orange-600">{active.role}</p>
                  </div>

                  <span className="text-xs font-semibold text-blue-500">
                    Featured Client
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* dots */}
          <div className="mt-4 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index ? "bg-blue-500 w-4" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* LOGOS WITH ICON STYLE */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center rounded -xl border border-gray-200 bg-white p-1 shadowsm"
            >
              <div className="text-xl text-orange-400">{logo.icon}</div>
              <p className="mt-1 text-xs font-semibold text-blue-950">
                {logo.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}