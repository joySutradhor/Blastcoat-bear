"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[80%] mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-semibold tracking-wide">
          BLASTCOAT
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-base font-medium uppercase tracking-wider text-white">
          <Link href="#services" className="text-white transition">
            Services
          </Link>
          <Link href="#about" className="text-white transition">
            About
          </Link>
          <Link href="#contact" className="text-white transition">
            Contact Us
          </Link>
          <Link
            href="#quote"
            className="bg-[#FCA600] text-black  px-6 py-1.5 rounded-md transition font-medium"
          >
            Call Us Today
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 text-white px-6 py-6 space-y-4 uppercase text-sm">
          <Link href="#services" className="block">Services</Link>
          <Link href="#about" className="block">About</Link>
          <Link href="#contact" className="block">Contact</Link>
          <Link href="#quote" className="block bg-[#FCA600] px-4 py-2 rounded-md text-center">
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
