import React from "react";
import { FaCogs, FaShieldAlt, FaStar, FaUsers } from "react-icons/fa";

const TrustSection = () => {
  const features = [
    {
      title: "Modern Technology",
      description:
        "We use advanced micro-blasting techniques to ensure precise, efficient, and flawless results every time.",
      icon: <FaCogs className="text-[#FCA600] w-8 h-8 mb-4" />,
    },
    {
      title: "Fully Insured",
      description:
        "Our fully trained and insured team delivers safe, reliable service you can trust for every project.",
      icon: <FaShieldAlt className="text-[#FCA600] w-8 h-8 mb-4" />,
    },
    {
      title: "Premium Service",
      description:
        "We take pride in a high-quality service that protects, restores, and enhances the materials we handle.",
      icon: <FaStar className="text-[#FCA600] w-8 h-8 mb-4" />,
    },
    {
      title: "Customer First",
      description:
        "Our clients’ satisfaction is our top priority, and we go above and beyond to deliver exceptional results.",
      icon: <FaUsers className="text-[#FCA600] w-8 h-8 mb-4" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[20vh]">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <span className="text-sm uppercase tracking-[3px] text-[#FCA600] font-semibold">
          Our Expertise
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
          Precision, Safety & Premium Service
        </h2>
        <p className="mt-6 text-gray-400 leading-relaxed">
          From cutting-edge technology to a client-first approach, we combine
          skill, safety, and premium service to ensure every project is handled
          with care and excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="border border-white/10 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 flex flex-col items-start"
          >
            {feature.icon}
            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
