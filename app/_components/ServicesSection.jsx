"use client";

import { FaArrowRight } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className="mt-[20vh] text-white ">
      <div className="max-w-[80%] mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-sm uppercase tracking-[3px] text-[#FCA600] font-semibold">
            Our Services
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold">
            Specialist Surface Solutions
          </h2>
          <p className="mt-6 text-gray-400 leading-relaxed">
            Delivering controlled blasting and coating services with
            industrial precision and professional standards.
          </p>
        </div>

        <div className="space-y-28">

          {/* ===== Service 1 ===== */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Video */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[300px] md:h-[420px] object-cover"
              >
                <source src="/Services/powderCoating.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Powder <span className="text-[#FCA600]">Coating</span>
              </h3>

              <p className="mt-6 text-gray-400 leading-relaxed">
                High-performance protective finishes applied with precision.
                Our powder coating process ensures durability, corrosion
                resistance and a clean professional appearance for metal
                structures and components.
              </p>

              <ul className="mt-8 space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FCA600] rounded-full"></span>
                  Long-lasting protective finish
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FCA600] rounded-full"></span>
                  Smooth and consistent coverage
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FCA600] rounded-full"></span>
                  Industrial and architectural applications
                </li>
              </ul>

              <button className="mt-10 inline-flex items-center gap-3 bg-[#FCA600] text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition">
                Learn More <FaArrowRight />
              </button>
            </div>
          </div>


          {/* ===== Service 2 (Reverse Layout) ===== */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Content */}
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold">
                Shot <span className="text-[#FCA600]">Blasting</span>
              </h3>

              <p className="mt-6 text-gray-400 leading-relaxed">
                Precision surface preparation using controlled blasting
                techniques. We remove paint, corrosion and contaminants while
                preserving structural integrity and preparing surfaces for
                coating.
              </p>

              <ul className="mt-8 space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FCA600] rounded-full"></span>
                  Low-pressure controlled process
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FCA600] rounded-full"></span>
                  Restores original surface texture
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FCA600] rounded-full"></span>
                  Ideal pre-coating preparation
                </li>
              </ul>

              <button className="mt-10 inline-flex items-center gap-3 bg-[#FCA600] text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition">
                Learn More <FaArrowRight />
              </button>
            </div>

            {/* Video */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl order-1 lg:order-2">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[300px] md:h-[420px] object-cover"
              >
                <source src="/Services/sandblasting.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
