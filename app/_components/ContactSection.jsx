"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="   " id="contact">
      <div className="max-w-[95%] lg:max-w-[80%] mx-auto  py-[20vh]">
        {/* Top Section */}
        <div className="grid xl:grid-cols-2 items-center py-10 px-5 md:px-10 lg:px-20 hover:shadow shadow-[#FCA600] gap-20 border border-white/10 rounded-2xl text-white">
          {/* Contact Info */}
          <div className="">
            {/* <div>
              <Image
                src="/gallery/blastcoat_ServicePhotoGallery.webp"
                alt="Contact"
                width={500}
                height={200}
                className="rounded-xl w-full mb-2"
              />
            </div> */}

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d618.3375112331323!2d-0.6410639228242665!3d51.690039086343475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48765d57d868baff%3A0xe3a590f6f3d0d065!2sBlastcoat!5e0!3m2!1sen!2suk!4v1772437790744!5m2!1sen!2suk"
                width="600"
                height="450"
                style={{ border: 0 }}
                className="w-full h-96 rounded-xl border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="grid xl:grid-cols-2 mt-5 gap-5 ">
              <p className="flex items-center gap-2 text-gray-400 mb-2 py-2 px-4 rounded-xl border border-[#FCA600]">
                <FaPhone className="text-[#FCA600]" /> 01494 772066
              </p>
              <p className="flex items-center gap-2 text-gray-400 mb-2 py-2 px-4 rounded-xl border border-[#FCA600]">
                <FaPhone className="text-[#FCA600]" /> 07957 650348
              </p>
            </div>
            {/* <div className="grid grid-cols-2 gap-2">
              <Image
                src="/gallery/blastcoat_ServicePhotoGallery2.webp"
                alt="Contact"
                width={500}
                height={200}
                className="rounded-xl"
              />
              <Image
                src="/gallery/blastcoatServicePhotoGallery.webp"
                alt="Contact"
                width={500}
                height={200}
                className="rounded-xl"
              />
            </div> */}
          </div>
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 mt-0 lg:mt-16">
              Get In <span className="text-[#FCA600]">Touch</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-[#FCA600]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-[#FCA600]"
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-[#FCA600]"
              />

             

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-[#FCA600]"
              ></textarea>

              <button
                type="submit"
                className="w-full md:w-auto bg-[#FCA600] text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
