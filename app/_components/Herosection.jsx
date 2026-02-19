export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Hero/sandblasting_blastcoat.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Professional Surface Preparation & Finishing
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10">
          High-quality industrial coating solutions built for durability,
          performance, and precision.
        </p>

        {/* Two Services */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          
          {/* Service 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl hover:bg-white/20 transition">
            <h3 className="text-xl font-semibold mb-3">
              Powder Coating
            </h3>
            <p className="text-gray-300 text-sm">
              Durable, corrosion-resistant finishes with smooth, 
              professional results for metal components and structures.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl hover:bg-white/20 transition">
            <h3 className="text-xl font-semibold mb-3">
              Shot Blasting
            </h3>
            <p className="text-gray-300 text-sm">
              Industrial surface preparation ensuring clean, 
              contaminant-free substrates before coating application.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-[10vh]">
          <a
            href="#quote"
            className="bg-[#FCA600] text-black  px-8 py-3 rounded-md font-medium uppercase tracking-wider transition"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
