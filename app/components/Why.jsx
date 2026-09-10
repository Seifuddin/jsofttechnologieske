"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Zap,
  Lock,
  Activity,
  Headphones,
  Server,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Star,
  Users,
  Clock,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck className="w-4 h-4 text-blue-600" />,
      title: "Security-First",
      description: "Advanced protection systems for your business data.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
    },
    {
      icon: <Activity className="w-4 h-4 text-orange-500" />,
      title: "99.9% Uptime",
      description: "Reliable infrastructure for business continuity.",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
    },
    {
      icon: <Lock className="w-4 h-4 text-blue-600" />,
      title: "Controlled Access",
      description: "Secure environments with monitored systems.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
    },
    {
      icon: <Zap className="w-4 h-4 text-orange-500" />,
      title: "Fast Deployment",
      description: "Rapid implementation with minimal disruption.",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
    },
    {
      icon: <Headphones className="w-4 h-4 text-blue-600" />,
      title: "24/7 Support",
      description: "Round-the-clock expert technical assistance.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
    },
    {
      icon: <Server className="w-4 h-4 text-orange-500" />,
      title: "Enterprise Grade",
      description: "Built like critical infrastructure, not ordinary IT.",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
    },
  ];

  const stats = [
    { value: "8+", label: "Years", icon: <Award className="w-3.5 h-3.5 text-orange-500" /> },
    { value: "500+", label: "Projects", icon: <CheckCircle className="w-3.5 h-3.5 text-blue-600" /> },
    { value: "98%", label: "Satisfaction", icon: <Star className="w-3.5 h-3.5 text-orange-500" /> },
    { value: "24/7", label: "Support", icon: <Clock className="w-3.5 h-3.5 text-blue-600" /> },
  ];

  return (
    <section className="py-12 md:py-16 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-8 md:mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-100 mb-3">
            <Sparkles size={12} className="text-orange-500" />
            <span className="text-[9px] font-semibold text-orange-600 uppercase tracking-wider">
              Why Choose JSoft
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Secure, Stable &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Reliable
            </span>
          </h2>

          <p className="mt-2 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            We eliminate downtime, strengthen security, and build dependable infrastructure.
          </p>
        </motion.div>

        {/* Stats Row - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="hidden grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + index * 0.06 }}
              whileHover={{ y: -3 }}
              className="bg-gray-50 rounded border border-gray-200 p-3 text-center hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-center mb-1">
                <div className="p-1.5 rounded-lg bg-white border border-gray-100">
                  {stat.icon}
                </div>
              </div>
              <div className="text-lg font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-[10px] text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Grid - Compact */}
        <div className="grid lg:grid-cols-12 gap-4 items-start">
          
          {/* Left - Image Card - Compact */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded overflow-hidden shadow-lg shadow-blue-500/10">
              <div className="relative h-[350px] md:h-[400px]">
                <Image
                  src="/images/server-room-interior-stockcake.webp"
                  alt="Enterprise Infrastructure"
                  fill
                  sizes="(max-width: 800px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
                
                {/* Decorative Line */}
                <div className="absolute top-0 left-0 w-0.5 h-16 bg-gradient-to-b from-orange-500 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/90 backdrop-blur-sm text-[8px] font-medium uppercase tracking-wider mb-2">
                    <Server size={10} />
                    Enterprise Infrastructure
                  </div>

                  <h3 className="text-lg md:text-xl font-bold leading-tight">
                    Engineering-Grade Reliability
                  </h3>

                  <p className="mt-1 text-xs text-gray-200 max-w-md leading-relaxed">
                    Built like critical infrastructure — not ordinary IT.
                  </p>

                  {/* Trust Badges */}
                  <div className="mt-3 flex flex-wrap gap-3">
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-300">
                      <div className="w-1 h-1 bg-orange-400 rounded-full" />
                      Kisumu-based
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-300">
                      <div className="w-1 h-1 bg-orange-400 rounded-full" />
                      Critical systems
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="hidden mt-4"
            >
              <button className="group w-full inline-flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg hover:shadow-blue-500/30 text-white text-xs font-medium rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <span>Get Professional Assessment</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Features Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + index * 0.06 }}
                  whileHover={{ 
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  className={`group bg-white rounded border ${feature.borderColor} p-2 shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  <div className={`inline-flex p-1.5 rounded ${feature.bgColor} mb-1.5 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                    
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-0.5 text-[13px] text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Trust Strip - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-4 md:gap-6"
        >
          <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
            <Globe size={12} className="text-blue-600" />
            <span>Kenya & Beyond</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
            <ShieldCheck size={12} className="text-orange-500" />
            <span>ISO 27001</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
            <Users size={12} className="text-blue-600" />
            <span>350+ Clients</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
            <Star size={12} className="text-orange-500" />
            <span>100+ Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}