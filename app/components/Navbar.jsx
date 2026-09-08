"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Services", 
      href: "/services",
      dropdown: [
        { name: "Network Installation", href: "/services/network" },
        { name: "CCTV Systems", href: "/services/cctv" },
        { name: "IT Support", href: "/services/it-support" },
        { name: "Managed Services", href: "/services/managed" },
        { name: "Graphic Design", href: "/services/graphic-design" },
        { name: "Media Production", href: "/services/media" },
      ]
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-[50px] md:w-[60px] h-[50px] md:h-[60px] flex items-center">
              <Image
                src="/images/logo.png"
                alt="JSoft Technologies KE"
                width={60}
                height={60}
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-sm md:text-base font-bold text-gray-900">
                JSoft <span className="text-orange-500">Technologies</span>
              </span>
              <p className="text-[8px] md:text-[9px] text-gray-400 leading-tight">
                IT • Security • Media
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors duration-200 rounded-lg hover:bg-orange-50"
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {link.name}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 origin-top-left ${
                        activeDropdown === index 
                          ? 'opacity-100 scale-100 visible' 
                          : 'opacity-0 scale-95 invisible'
                      }`}
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="py-1">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors duration-200 rounded-lg hover:bg-orange-50 group/link"
                  >
                    {link.name}
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover/link:w-4/5"></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="tel:+254759177042"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors duration-200"
            >
              <Phone size={16} className="text-orange-500" />
              <span>+254 759 177 042</span>
            </Link>
            
            <div className="w-px h-6 bg-gray-200" />
            
            <Link
              href="#contact"
              className="group relative overflow-hidden px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.dropdown ? (
                <>
                  <div className="px-3 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    {link.name}
                  </div>
                  <div className="pl-4 space-y-0.5">
                    {link.dropdown.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          <div className="pt-4 mt-2 border-t border-gray-100 space-y-3">
            <Link
              href="tel:+254759177042"
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:text-orange-500 transition-colors duration-200"
            >
              <Phone size={16} className="text-orange-500" />
              <span>+254 759 177 042</span>
            </Link>
            
            <Link
              href="mailto:jsofttechnologieske@gmail.com"
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:text-orange-500 transition-colors duration-200"
            >
              <Mail size={16} className="text-orange-500" />
              <span>jsofttechnologieske@gmail.com</span>
            </Link>

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}