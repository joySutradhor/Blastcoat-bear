import Link from "next/link";
import ContactSection from "./_components/ContactSection";
import Footer from "./_components/Footer";
import GallerySection from "./_components/GallerySection";
import HeroSection from "./_components/Herosection";
import Navbar from "./_components/Navbar";
import ServicesSection from "./_components/ServicesSection";
import TestimonialMarquee from "./_components/TestimonialMarquee";
import TrustSection from "./_components/TrustSection";
import WhyChooseUs from "./_components/WhyChooseUs";

export default function Home() {
  return (
    <main className="bg-[#111]">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <TrustSection />
      <ServicesSection />
      <div>
        <GallerySection limit={6} />
        <div className="text-center mt-12">
          <Link href="/blastcoat-works-near-me" className="inline-block">
            <button className="bg-[#FCA600] text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition cursor-pointer">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
      <TestimonialMarquee />
      <ContactSection />
      <Footer />
    </main>
  );
}
