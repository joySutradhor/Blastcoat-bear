import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 pt-12 pb-6 mt-[20vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Blast Coat UK</h3>
            <p className="text-gray-400 leading-relaxed mb-2">
              Premier specialist in shot blasting & powder coating services.
            </p>
            <p className="flex items-center gap-2 text-gray-400 mb-2">
              <FaPhone className="text-[#FCA600]" /> 01494 772066
            </p>
            <p className="flex items-center gap-2 text-gray-400 mb-2">
              <FaEnvelope className="text-[#FCA600]" /> info@blastcoat.co.uk
            </p>
            <p className="text-gray-400">
              Weedon Hill Farm, Amersham, HP6 5RH, UK
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 leading-relaxed">
              <li className="hover:text-[#FCA600] cursor-pointer">
                Powder Coating
              </li>
              <li className="hover:text-[#FCA600] cursor-pointer">
                Shot Blasting
              </li>
              <li className="hover:text-[#FCA600] cursor-pointer">
                Metal Restoration
              </li>
              <li className="hover:text-[#FCA600] cursor-pointer">
                Custom Finishes
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 leading-relaxed">
              <li className="hover:text-[#FCA600] cursor-pointer">Home</li>
              <li className="hover:text-[#FCA600] cursor-pointer">About Us</li>
              <li className="hover:text-[#FCA600] cursor-pointer">Gallery</li>
              <li className="hover:text-[#FCA600] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social / Follow */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <p className="text-gray-400 mb-4">
              Stay connected on social media for updates and projects.
            </p>
            <div className="flex space-x-4  leading-relaxed">
              <FaFacebookF className="w-5 h-5 text-[#FCA600] cursor-pointer" />
              <FaInstagram className="w-5 h-5 text-[#FCA600] cursor-pointer" />
              <FaLinkedinIn className="w-5 h-5 text-[#FCA600] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Blast Coat UK. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
