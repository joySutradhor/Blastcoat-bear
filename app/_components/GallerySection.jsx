"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const images = [
  "/gallery/blastcoatservice.jpeg",
  "/gallery/blastcoat_metal_service.webp",
  "/gallery/blastcoat_metal_service7.webp",
  "/gallery/blastcoat_metal_service17.webp",
  "/gallery/blastcoat_servicess.webp",
  "/gallery/blastcoat_metal_service6.webp",
  "/gallery/all/blascoatworks1.webp",
  "/gallery/all/blascoatworks2.webp",
  "/gallery/all/blascoatworks3.webp",
  "/gallery/all/blascoatworks4.webp",
  "/gallery/all/blascoatworks5.webp",
  "/gallery/all/blascoatworks6.webp",
  "/gallery/all/blascoatworks7.webp",
  "/gallery/all/blascoatworks8.webp",
  "/gallery/all/blascoatworks9.webp",
  "/gallery/all/blascoatworks10.webp",
  "/gallery/all/blascoatworks11.webp",
  "/gallery/all/blascoatworks12.webp",
  "/gallery/all/blascoatworks13.webp",
  "/gallery/all/blascoatworks14.webp",
  "/gallery/all/blascoatworks15.webp",
  "/gallery/all/blascoatworks16.webp",
  "/gallery/all/blascoatworks17.webp",
  "/gallery/all/blascoatworks18.webp",
  "/gallery/all/blascoatworks19.webp",
  "/gallery/all/blascoatworks20.webp",
  "/gallery/all/blascoatworks21.webp",
  "/gallery/all/blascoatworks22.webp",
  "/gallery/all/blascoatworks23.webp",
  "/gallery/all/blascoatworks24.webp",
  "/gallery/all/blascoatworks25.webp",
  "/gallery/all/blascoatworks26.webp",
  "/gallery/all/blascoatworks27.webp",
  "/gallery/all/blascoatworks28.webp",
  "/gallery/all/blascoatworks29.webp",
  "/gallery/all/blascoatworks30.webp",
  "/gallery/all/blascoatworks31.webp",
  "/gallery/all/blascoatworks32.webp",
  "/gallery/all/blascoatworks33.webp",
  "/gallery/all/blascoatworks34.webp",
];

export default function GallerySection({ limit }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // If limit exists → slice images, otherwise show all
  const displayedImages = limit ? images.slice(0, limit) : images;

  return (
    <section className="text-white" id="works">
      <div className="max-w-[95%] lg:max-w-[80%] mx-auto px-6 pt-[15vh] lg:pt-[20vh]">
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sm uppercase tracking-[3px] text-[#FCA600] font-semibold">
            Our Work
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold">
            Recent <span className="text-[#FCA600]">Projects</span>
          </h2>
          <p className="mt-6 text-gray-400 leading-relaxed">
            A selection of completed blasting and coating projects delivered
            with precision, durability and professional finish.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="relative group cursor-pointer overflow-hidden rounded-xl border border-white/10"
            >
              <img
                src={img}
                alt={`Project Work ${index + 1}`}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-[#FCA600] text-lg font-semibold tracking-wide">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-2xl hover:text-[#FCA600] transition cursor-pointer"
          >
            <FaTimes />
          </button>

          <img
            src={selectedImage}
            alt="Selected Project"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
