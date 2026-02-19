"use client";

import Image from "next/image";
import { FaShieldAlt } from "react-icons/fa";
// import { GiPrecisionShot } from "react-icons/gi";
import { MdOutlineCleaningServices } from "react-icons/md";
import { GiHammerNails } from "react-icons/gi";


export default function WhyChooseUs() {
  return (
    <section className="mt-[20vh] text-white">
      <div className="max-w-[80%] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm uppercase tracking-[3px] text-[#FCA600] font-semibold">
            Our Process
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
            Satisfaction <span className="text-[#FCA600]">Guaranteed</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            We deliver controlled, professional surface restoration with
            precision equipment and disciplined workflow. From preparation to
            final clean-up, every stage is handled with care.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT – Image */}
          <div className="relative w-full h-[420px] md:h-[550px] rounded-2xl overflow-hidden border border-white/10 ">
            <Image
              src="/Work/blastcoart_working_process.webp"
              alt="Surface Restoration"
              fill
              className="object-cover hover:scale-150 hover:rotate-12 transition-all ease-in-out duration-700"
            />
            {/* <div className="absolute inset-0 bg-black/10"></div> */}
          </div>

          {/* RIGHT – Features */}
          <div className="space-y-12">
            {/* Item */}
            <Feature
              icon={<FaShieldAlt />}
              title="Pre-Work Preparation"
              description="Full containment and surface protection before blasting begins. Floors, edges and sensitive areas are sealed to maintain safety and control."
            />

            <Feature
              icon={<GiHammerNails />}
              title="Precision Workmanship"
              description="Low-pressure controlled blasting removes coatings while preserving structural integrity and original material character."
            />

            <Feature
              icon={<MdOutlineCleaningServices />}
              title="Complete Site Clean Up"
              description="We remove debris and waste after completion, ensuring the space is clean, safe and ready for immediate use."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Feature Component */
function Feature({ icon, title, description }) {
  return (
    <div className="group flex gap-6">
      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FCA600] text-2xl group-hover:bg-[#FCA600] group-hover:text-black transition duration-300">
        {icon}
      </div>

      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
