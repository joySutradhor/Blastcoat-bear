"use client";

import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Paul Wooding",
    review:
      "Thank you very much to Bear and the team for an outstanding job on my car parts. All aluminium parts which were stripped and recoated. Excellent turn around time and finished articles look as good as new. Great service from a lovely bunch of blokes. Will be back and highly recommend.",
  },
  {
    name: "Inco Gnito",
    review:
      "Great service. Not the biggest job, I needed one cast aluminium garden chair re-coating. Ahead of any work being done finish, colour and what could be achieved were set. On collection all was exactly as expected. What else would you want. Oh yeah, personality, Bear has it.",
  },
  {
    name: "Carol Dyble",
    review:
      "We contacted Blast Coat to have our garden table and chairs sand blasted and power coated. Bear was extremely helpful and completed it beautifully in 3 days. All the staff were so helpful and we thoroughly recommend them.",
  },
  {
    name: "Leslie Eames",
    review:
      "Blastcoat is a small fabrication an powder coating specialist. The service provided and quality of work is truly excellent.If this is the sort of product or service you need I thoroughly recommend a visit is made to their tucked away semi rural premises.",
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
            className="mx-2 w-[80vw] md:w-[30vw] xl:w-[25vw] bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-[#FCA600] transition"
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

      <div className="mt-[5vh] flex justify-center">
        <a
          href="https://share.google/j4Fps90m8AicaDJth"
          target="_blank"
          className="bg-[#FCA600] text-black  px-8 py-3 rounded-md font-medium uppercase tracking-wider transition"
        >
          See More Reviews
        </a>
      </div>
    </section>
  );
}
