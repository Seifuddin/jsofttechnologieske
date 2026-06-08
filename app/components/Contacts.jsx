"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  ShieldCheck,
  Headphones,
  Globe,
  ArrowUpRight,
  Sparkles,
  Server,
} from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      title: "Call Us",
      value: "+254 759 177 042",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      title: "Email",
      value: "jsofttechnologieske@gmail.com",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      title: "Office",
      value: "Kisumu, Kenya",
    },
    {
      icon: <Clock3 className="w-4 h-4" />,
      title: "Support",
      value: "24/7 Available",
    },
  ];

  const features = [
    {
      icon: <ShieldCheck className="w-4 h-4" />,
      title: "Secure Solutions",
      desc: "Reliable systems designed for business protection.",
    },
    {
      icon: <Server className="w-4 h-4" />,
      title: "Modern Infrastructure",
      desc: "Future-ready networking and IT systems.",
    },
    {
      icon: <Sparkles className="w-4 h-4" />,
      title: "Creative Innovation",
      desc: "Premium digital and media experiences.",
    },
  ];

  return (
    <main className="overflow-hidden pt-20 bg-[#fefbf4]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#020817] text-white py-14 md:py-16">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-100px] left-[-80px] w-[250px] h-[250px] bg-cyan-500/20 blur-3xl rounded-full"></div>

          <div className="absolute bottom-[-120px] right-[-80px] w-[260px] h-[260px] bg-orange-500/20 blur-3xl rounded-full"></div>

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:65px_65px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center"
          >
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-orange-500/20 px-4 py-2 rounded-full text-orange-400 text-[11px] fontsemibold tracking-wide backdrop-blur-md mb-5">
                <Headphones className="w-3.5 h-3.5" />
                CONTACT JSOFT TECHNOLOGIES KE
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-3xl font-black leading-[1] tracking-tight">
                Let’s Build 
                <span className="blk ml-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-400 to-blue-500"> 
                   Something Great
                </span>
              </h1>

              <p className="mt-5 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                Professional networking, CCTV systems, IT support, and creative
                media solutions tailored for modern businesses.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white fontsemibold px-3 py-2 rounded -2xlshadow-[0_0_30px_rgba(249,115,22,0.3)] hover:scale-[1.03] transition-all duration-300 text-sm">
                  Start A Project

                  <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
                </button>

                <button className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md text-white font-medium px-3 py-2 rounded -2xl hover:bg-white/10 transition-all duration-300 text-sm">
                  Explore Services
                </button>
              </div>
            </div>

            {/* Right Contact Cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded -[28px] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full"></div>

                <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-orange-400 text-[10px] uppercase tracking-[0.25em] mb-1">
                        QUICK CONTACT
                      </p>

                      <h3 className="text-xl sm:text-2xl font-black">
                        Reach Out
                      </h3>
                    </div>

                    <div className="w-11 h-11 rounded -xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded -2xl border border-white/10 bg-white/[0.04] p-3 hover:border-orange-500/30 transition-all duration-300"
                      >
                        <div className="relative z-10 flex items-center gap-3">
                          <div className="w-8 h-8 rounded -xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                            {item.icon}
                          </div>

                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                              {item.title}
                            </p>

                            <h4 className="font-semibold text-white text-sm">
                              {item.value}
                            </h4>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-5 rounded -2xl bg-gradient-to-r from-orange-500/15 to-cyan-500/10 border border-orange-500/20 p-4">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      We create secure, scalable, and future-ready technology
                      solutions for businesses and organizations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-12 md:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded -[30px] bg-white border border-gray-200 shadow[0_20px_60px_rgba(0,0,0,0.06)]"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-52 h-52 bg-orange-100 blur-3xl rounded-full opacity-60"></div>

            <div className="absolute bottom-0 right-0 w-52 h-52 bg-cyan-100 blur-3xl rounded-full opacity-60"></div>

            <div className="relative z-10 grid lg:grid-cols-[0.85fr_1.15fr]">
              {/* Left Features */}
              <div className="bg-[#fff8ec] p-6 sm:p-7 border-b lg:border-b-0 lg:border-r border-orange-100">
                <p className="text-orange-500 uppercase tracking-[0.25em] text-[10px] fontsemibold mb-3">
                  OUR EXPERTISE
                </p>

                <h2 className="text-xl smtext-3xl font-black text-gray-900 leading-tight mb-4">
                  Technology That
                  <span className="block text-blue-950">
                    Moves Businesses
                  </span>
                </h2>

                <p className="text-gray-700 leading-relaxed text-sm mb-5">
                  Innovative solutions combining networking, security systems,
                  IT support, and creative media services.
                </p>

                <div className="space-y-3">
                  {features.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white border border-gray-200 rounded -2xl p-1 shadowsm"
                    >
                      <div className="w-9 h-9 rounded -xl bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
                        {item.icon}
                      </div>

                      <div>
                        <h4 className="font-semibold text-blue-950 text-sm mb-1">
                          {item.title}
                        </h4>

                        <p className="text-xs text-gray-700 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Form */}
              <div className="p-6 sm:p-7">
                <div className="mb-6">
                  <p className="text-orange-500 uppercase tracking-[0.25em] text-[10px] fontsemibold mb-3">
                    START A CONVERSATION
                  </p>

                  <h3 className="text-xl smtext-3xl font-black text-blue-950 mb-3">
                    Send Us A Message
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    Tell us about your project and our team will contact you
                    shortly.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-[#fffaf2] border border-gray-200 focus:border-orange-400 rounded -2xl px-4 py-3 outline-none text-sm text-gray-800 placeholder:text-gray-500 transition"
                    />

                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full bg-[#fffaf2] border border-gray-200 focus:border-orange-400 rounded -2xl px-4 py-3 outline-none text-sm text-gray-800 placeholder:text-gray-500 transition"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-[#fffaf2] border border-gray-200 focus:border-orange-400 rounded -2xl px-4 py-3 outline-none text-sm text-gray-800 placeholder:text-gray-500 transition"
                  />

                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-[#fffaf2] border border-gray-200 focus:border-orange-400 rounded -2xl px-4 py-3 outline-none text-sm text-gray-800 placeholder:text-gray-500 transition resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 hover:scale-[1.01] transition-all duration-300 text-white fontsemibold px-6 py-2 rounded -2xl shadow[0_15px_40px_rgba(249,115,22,0.3)] text-sm"
                  >
                    Send Message

                    <Send className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}