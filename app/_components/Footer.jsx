import Image from "next/image";
import Link from "next/link";
import React from "react";
import {

  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaLinkedin,
  FaPinterestP,
} from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";



const Footer = () => {
  return (
    <footer className="border-t border-white/10 pt-12 pb-6 ">
      <div className="max-w-[95%] lg:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <Link
              href="/"
              className="text-white text-2xl font-semibold tracking-wide "
            >
              <Image
                src="/blastcoat.png"
                alt="Blastcoat Logo"
                width={150}
                height={30}
              />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-2 mt-10">
              Premier specialist in shot blasting & powder coating services.
            </p>
            <p className="flex items-center gap-2 text-gray-400 mb-2">
              <FaPhone className="text-[#FCA600]" /> 01494 772066
            </p>
            <p className="flex items-center gap-2 text-gray-400 mb-2">
              <FaPhone className="text-[#FCA600]" /> 07957 650348
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
                Mobile Shot Blasting{" "}
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
            <div className="flex space-x-5 leading-relaxed">
              <a
                href="https://www.facebook.com/p/Blastcoatcouk-100063883396523/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blastcoat Facebook"
                className="text-[#FCA600] hover:text-white transition"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/blast-coat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blastcoat LinkedIn"
                className="text-[#FCA600] hover:text-white transition"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>

              <a
                href="https://uk.pinterest.com/blastcoatonline/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blastcoat Pinterest"
                className="text-[#FCA600] hover:text-white transition"
              >
                <FaPinterestP className="w-5 h-5" />
              </a>

              <a
                href="https://x.com/blast_coat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blastcoat X"
                className="text-[#FCA600] hover:text-white transition"
              >
                <CiTwitter  className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-100 text-base font-medium">
          © {new Date().getFullYear()} Blast Coat UK. All Rights Reserved. Developed by{" "}
          <a
            href="http://resolveidea.com/"  target="_blank"
            className="text-[#FCA600] hover:text-white transition underline"
          >
            Resolve Idea
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
