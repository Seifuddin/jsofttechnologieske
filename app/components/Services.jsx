"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Network,
  ShieldCheck,
  Camera,
  Palette,
  Headphones,
  Server,
  ArrowRight,
} from "lucide-react";

/* =========================
   DATA
========================= */

const services = [
  {
    title: "Network Installation",
    icon: Network,
    image: "/images/detailed-closeup-view-network-cables-600nw-2759150785.webp",
    description:
      "We design and deploy secure, high-speed business networks.",
    subServices: [
      "LAN/WAN architecture",
      "Structured cabling",
      "Router setup",
      "WiFi optimization",
    ],
  },
  {
    title: "CCTV Installation",
    icon: ShieldCheck,
    image: "/images/1tb-4-cctv-camera-installation-service-500x500.webp",
    description:
      "Modern surveillance systems with remote monitoring and 24/7 protection.",
    subServices: [
      "HD camera installation",
      "Remote monitoring setup",
      "DVR/NVR systems",
      "Night vision security",
    ],
  },
  {
    title: "IT Support Services",
    icon: Headphones,
    image: "/images/run-it-support-department-768x403.avif",
    description:
      "Fast-response IT support ensuring uninterrupted business operations.",
    subServices: [
      "Helpdesk support",
      "Hardware troubleshooting",
      "Software installation",
      "System maintenance",
    ],
  },
  {
    title: "Managed IT Services",
    icon: Server,
    image: "/images/AdobeStock_988372873-scaled-2168x1084.jpeg",
    description:
      "Complete IT infrastructure management and proactive system monitoring.",
    subServices: [
      "24/7 monitoring",
      "Backup systems",
      "Security updates",
      "Performance optimization",
    ],
  },
  {
    title: "Graphic Design",
    icon: Palette,
    image: "/images/designer-at-work-stockcake.webp",
    description:
      "Creative branding and visual identity solutions for businesses.",
    subServices: [
      "Logo design",
      "Brand identity",
      "Posters & flyers",
      "Social media graphics",
    ],
  },
  {
    title: "Photography & Videography",
    icon: Camera,
    image: "/images/Videography-Services-in-Prescott.webp",
    description:
      "Professional media production for events, brands, and marketing.",
    subServices: [
      "Event coverage",
      "Corporate shoots",
      "Video editing",
      "Commercial production",
    ],
  },
];

/* =========================
   MODAL
========================= */

function Modal({ service, open, setOpen }) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white w-full max-w-lg rounded-2xl p-6">

          <h2 className="font-semibold text-blue-900">
            {service?.title}
          </h2>

          <p className="mt-3 text-gray-600">
            {service?.description}
          </p>

          <div className="mt-5 space-y-2">
            {service?.subServices?.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <span className="w-2 h-2 bg-blue-900 rounded-full" />
                {item}
              </div>
            ))}
          </div>

          <button
            onClick={() => setOpen(false)}
            className="mt-6 w-full bg-blue-900 hover:bg-blue-950 text-white py-2 rounded-xl"
          >
            Close
          </button>

        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

/* =========================
   MAIN SECTION
========================= */

export default function ServicesSection() {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <section id="services" className="py-20 bg-amber-50">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <p className="text-xs mb-2 tracking-[0.3em] uppercase text-orange-600">
            Our Services 
          </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          What We Do
        </h2>
        <p className="mt-4 text-gray-700">
          End-to-end IT, security, and creative solutions built for modern businesses.
        </p>
      </div>

      {/* GRID (UPDATED RESPONSIVENESS) */}
      <div className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">

        {services.map((s, i) => {
          const Icon = s.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 border rounded overflow-hidden hover:shadow-md transition"
            >

              {/* IMAGE */}
              <div className="relative h-44 md:h-full">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-3 flex flex-col justify-center">

                <div className="flex items-center gap-1">
                  <div className="p-1 bg-blue900 text-orange-600 rounded-md">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-semibold text-blue-950">
                    {s.title}
                  </h3>
                </div>

                <p className="mt-2 text-sm text-gray-800">
                  {s.description}
                </p>

                {/* SUB SERVICES */}
                <div className="mt-3 space-y-1">
                  {s.subServices.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-blue-900"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="mt-4 flex gap-2">

                  <button
                    onClick={() => {
                      setActive(s);
                      setOpen(true);
                    }}
                    className="flex-1 bg-blue-950 hover:bg-blue-950 text-white text-sm py-1 rounded hover:bg-blue-50"
                  >
                    View
                  </button>

                  <button className="flex-1 border border-blue-900 text-blue-900 text-sm py-1 rounded flex items-center justify-center gap-1">
                    Request <ArrowRight size={14} />
                  </button>

                </div>

              </div>
            </motion.div>
          );
        })}

      </div>

      {/* MODAL */}
      <Modal service={active} open={open} setOpen={setOpen} />

    </section>
  );
}