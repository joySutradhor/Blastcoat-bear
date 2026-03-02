"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[95%] xl:max-w-[80%] mx-auto md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl font-semibold tracking-wide"
        >
          <Image
            src="/blastcoat.png"
            alt="Blastcoat Logo"
            width={150}
            height={30}
            className="w-[20vw] md:w-[7vw]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-base font-medium uppercase tracking-wider text-white">
          <Link href="#about" className="block">
            About
          </Link>
          <Link href="#services" className="block">
            Services
          </Link>
          <Link href="#works" className="block">
            Our Works
          </Link>
          <Link href="#contact" className="block">
            Contact
          </Link>
          <div>
            <a
              href="https://wa.me/447957650348?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              className="bg-[#FCA600] text-black  px-8 py-2 rounded-md font-medium uppercase tracking-wider transition"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 text-white px-6 py-6 space-y-4 uppercase text-sm">
          <Link href="#about" className="block">
            About
          </Link>
          <Link href="#services" className="block">
            Services
          </Link>
          <Link href="#works" className="block">
            Our Works
          </Link>
          <div className="my-10">
            <a
              href="https://wa.me/447957650348?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              className="bg-[#FCA600] text-black  px-8 py-3 rounded-md font-medium uppercase tracking-wider transition"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
