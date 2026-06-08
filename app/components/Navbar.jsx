"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contacts" },
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
      className={`fixed w-full mb-0 top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadowlg backdropblurmd"
          : "bg-white backdropblurmd"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 md:py-2 flex justify-between items-center">

        {/* LOGO */}
        {/* LOGO */}
<Link href="/" className="flex items-center">
  <Image
    src="/images/logo.png"
    alt="JSoft Technologies KE"
    width={80}
    height={5}
    className="object-contain w-[70px] md:w-[90px] h-auto"
    priority
  />
</Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-gray-700 hover:text-amber-500 transition font-medium relative group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}

          {/* CTA BUTTON */}
          <Link
            href="#contact"
            className="bg-orange-500 text-white px-6 py-1 rounded -lg fontsemibold shadowmd hover:bg-amber-600 hover:shadow-lg transition"
          >
            Get a Quote
          </Link>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-800"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white shadowlg overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-5" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-orange-500 transition font-medium"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contacts"
            onClick={() => setOpen(false)}
            className="bg-orange-500 text-white px-3 py-1 rounded -lg text-center fontsemibold hover:bg-orange-600 transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}