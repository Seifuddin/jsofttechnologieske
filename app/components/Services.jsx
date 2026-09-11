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
  X,
  Check,
  Sparkles,
} from "lucide-react";

/* =========================
   DATA
========================= */

const services = [
  {
    id: 1,
    title: "Network Installation",
    icon: Network,
    image: "/images/detailed-closeup-view-network-cables-600nw-2759150785.webp",
    description:
      "We design and deploy secure, high-speed business networks that keep your organization connected.",
    subServices: [
      "LAN/WAN architecture",
      "Structured cabling",
      "Router setup",
      "WiFi optimization",
    ],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    title: "CCTV Installation",
    icon: ShieldCheck,
    image: "/images/1tb-4-cctv-camera-installation-service-500x500.webp",
    description:
      "Modern surveillance systems with remote monitoring and 24/7 protection for your premises.",
    subServices: [
      "HD camera installation",
      "Remote monitoring setup",
      "DVR/NVR systems",
      "Night vision security",
    ],
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    id: 3,
    title: "IT Support Services",
    icon: Headphones,
    image: "/images/run-it-support-department-768x403.avif",
    description:
      "Fast-response IT support ensuring uninterrupted business operations and employee productivity.",
    subServices: [
      "Helpdesk support",
      "Hardware troubleshooting",
      "Software installation",
      "System maintenance",
    ],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 4,
    title: "Managed IT Services",
    icon: Server,
    image: "/images/AdobeStock_988372873-scaled-2168x1084.jpeg",
    description:
      "Complete IT infrastructure management and proactive system monitoring for peace of mind.",
    subServices: [
      "24/7 monitoring",
      "Backup systems",
      "Security updates",
      "Performance optimization",
    ],
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    id: 5,
    title: "Graphic Design",
    icon: Palette,
    image: "/images/designer-at-work-stockcake.webp",
    description:
      "Creative branding and visual identity solutions that make your business stand out.",
    subServices: [
      "Logo design",
      "Brand identity",
      "Posters & flyers",
      "Social media graphics",
    ],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 6,
    title: "Photography & Videography",
    icon: Camera,
    image: "/images/Videography-Services-in-Prescott.webp",
    description:
      "Professional media production for events, brands, and marketing campaigns.",
    subServices: [
      "Event coverage",
      "Corporate shoots",
      "Video editing",
      "Commercial production",
    ],
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

/* =========================
   MODAL
========================= */

function Modal({ service, open, setOpen }) {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl relative">
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition"
          >
            <X size={20} className="text-gray-400" />
          </button>

          {/* Icon */}
          <div className={`inline-flex p-3 rounded-xl ${service.bgColor} mb-4`}>
            <Icon size={24} className={service.iconColor} />
          </div>

          <Dialog.Title className="text-xl font-bold text-gray-900">
            {service.title}
          </Dialog.Title>

          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            {service.description}
          </p>

          <div className="mt-5 space-y-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              What's Included
            </p>
            {service.subServices?.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <Check size={14} className={service.iconColor} />
                {item}
              </div>
            ))}
          </div>

          <button
            onClick={() => setOpen(false)}
            className={`mt-6 w-full bg-gradient-to-r ${service.color} hover:shadow-lg text-white py-2.5 rounded-xl text-sm font-semibold transition`}
          >
            Close
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

/* =========================
   SERVICE CARD
========================= */

function ServiceCard({ service, index, onView }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold ${service.iconColor}`}>
            <Icon size={14} />
            {service.title}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {service.description}
        </p>

        {/* Sub Services */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {service.subServices.slice(0, 3).map((item, idx) => (
            <span
              key={idx}
              className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${service.bgColor} ${service.iconColor}`}
            >
              {item}
            </span>
          ))}
          {service.subServices.length > 3 && (
            <span className="text-[10px] text-gray-400 font-medium px-2 py-0.5">
              +{service.subServices.length - 3} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-2 pt-4 border-t border-gray-100">
          <button
            onClick={() => onView(service)}
            className={`flex-1 bg-gradient-to-r ${service.color} text-white text-xs font-medium py-2 rounded hover:shadow-lg transition`}
          >
            View Details
          </button>
          <button className="p-2 rounded border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition">
            <ArrowRight size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================
   MAIN SECTION
========================= */

export default function ServicesSection() {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  const handleView = (service) => {
    setActive(service);
    setOpen(true);
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-4">
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-[10px] font-semibold text-orange-600 uppercase tracking-wider">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            What We{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Do
            </span>
          </h2>

          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            End-to-end IT, security, and creative solutions built for modern businesses.
            We deliver excellence across every service we offer.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onView={handleView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            Need a custom solution?{" "}
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
              Let's talk about your project
            </button>
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal service={active} open={open} setOpen={setOpen} />
    </section>
  );
}