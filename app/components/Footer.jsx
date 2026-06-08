"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050b1a] text-white overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>

            {/* LOGO + NAME */}
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="JSoft Technologies KE"
                  width={80}
                  height={5}
                  className="object-contain w-[70px] md:w-[90px] h-auto"
                  priority
                />
                <div className="">
                <h2 className="mdtext-xl font-semibold">
                JSoft <span className="text-orange-400">Technologies KE</span>
              </h2>
              <p className="italic text-xs text-white/60 leading-relaxed">
              Your No. 1 Consultant in All I.T - Based Services
            </p>
            </div>
              
              </Link>
            </div>

            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Delivering professional IT solutions including networking,
              CCTV systems, managed services, and creative digital solutions
              for modern businesses in Kenya.
            </p>

            {/* CTA */}
            <button className="mt-5 flex items-center gap-2 text-sm text-orange-400 hover:text-amber-300 transition">
              Request Free Consultation <ArrowRight size={16} />
            </button>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white/80">
              Services
            </h3>

            <ul className="space-y-2 text-sm text-white/60">
              <li className="hover:text-white transition">Network Installation</li>
              <li className="hover:text-white transition">CCTV Systems</li>
              <li className="hover:text-white transition">IT Support</li>
              <li className="hover:text-white transition">Managed Services</li>
              <li className="hover:text-white transition">Graphic Design</li>
              <li className="hover:text-white transition">Media Production</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white/80">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-white/60">
              <li className="hover:text-white transition"><Link href="/">Home</Link></li>
              <li className="hover:text-white transition"><Link href="/services">Services</Link></li>
              <li className="hover:text-white transition"><Link href="/about">About</Link></li>
              <li className="hover:text-white transition"><Link href="/contacts">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white/80">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-white/60">

              <div className="flex items-center gap-2">
                <Phone size={16} className="text-orange-400" />
                +254 759 177 042
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} className="text-orange-400" />
                jsofttechnologieske@gmail.com
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-orange-400" />
                Kisumu, Kenya
              </div>

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} JSoft Technologies KE. All rights reserved.
          </p>
        

          <div className="flex gap-4 text-xs text-white/40">
            <span className="hover:text-white transition cursor-pointer">Privacy</span>
            <span className="hover:text-white transition cursor-pointer">Terms</span>
            <span className="hover:text-white transition cursor-pointer">Support</span>
          </div>

            <p className="text-xs text-white/40">
          Designed & Powered by{" "}
          <Link
            href="https://lapsa.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-blue-300 fontsemibold transition-all duration-300 
                       after:content-[''] after:absolute after:left-0 after:-bottom-1 
                       after:w-0 after:h-[2px] after:bg-blue-400 
                       hover:after:w-full after:transition-all after:duration-300"
          >
            Lapsa Web and Graphics
          </Link>
        </p>

        </div>

      </div>
    </footer>
  );
}