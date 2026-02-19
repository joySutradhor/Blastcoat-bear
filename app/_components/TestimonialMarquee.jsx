"use client";

import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "James R.",
    review:
      "Outstanding powder coating finish. Professional team, completed on time and exceeded expectations.",
  },
  {
    name: "Sarah L.",
    review:
      "Shot blasting was done with precision and care. Clean site afterwards and excellent communication.",
  },
  {
    name: "Michael T.",
    review:
      "Reliable industrial service with attention to detail. Highly recommended for structural steel projects.",
  },
  {
    name: "Daniel W.",
    review:
      "From preparation to final clean-up, everything was handled professionally. Five-star service.",
  },
];

export default function TestimonialMarquee() {
  return (
    <section className=" mt-[20vh] relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-sm uppercase tracking-[3px] text-[#FCA600] font-semibold">
          Client Feedback
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
          What Our Clients Say
        </h2>
        <p className="mt-6 text-gray-400 leading-relaxed">
          Discover the experiences of our valued clients as they share their
          honest feedback, highlighting the quality, reliability, and impact of
          our services in helping their businesses grow and succeed.
        </p>
      </div>

      {/* Gradient Overlays */}
      {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#111] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#111] to-transparent z-10" /> */}

      {/* Marquee */}
      <Marquee speed={60} pauseOnHover={true} gradient={false} className="py-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="mx-2 min-w-[320px] md:w-[25vw] bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-[#FCA600] transition"
          >
            {/* Stars */}
            <div className="flex gap-1 text-[#FCA600] mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-300 leading-relaxed mb-6 text-base">
              “{item.review}”
            </p>

            {/* Name */}
            <p className="text-white font-semibold">{item.name}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
