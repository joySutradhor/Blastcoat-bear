import React from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import GallerySection from "../_components/GallerySection";

const Page = () => {
  return (
    <div className="bg-[#111] text-white min-h-screen">
      <Navbar />
      <div className="h-[40vh] flex items-center justify-center border-b border-white/10 rounded-5xl ">
        <h1 className="text-4xl md:text-4xl font-bold text-center pt-[15vh] text-[#FCA600]">
          Blastcoat Works Near Me
        </h1>
      </div>

      <div>
        <GallerySection />
      </div>
      <div className="mt-[15vh]">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
