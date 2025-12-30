import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo/logoWhite.png";
// import logo from "../assets/logo/netclan.svg";
import footervector from "../assets/images/footervector.png";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-linear-to-r from-[#2d1f6e] via-[#3d2a7f] to-[#5a3d8f] text-[#E6DADA] overflow-hidden min-h-[549px] mt-10">
      <img
        src={footervector}
        alt=""
        loading="lazy"
        className="absolute right-0 bottom-0 hidden md:block z-0"
      />
      <div className="max-w-7xl mx-6 md:mx-20 py-12 md:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-16">
          {/* Logo and Description */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="logo"
                width={90}
                loading="lazy"
                className="p-3"
              />
            </div>
            <p className="text-[#E6DADA] leading-relaxed text-sm">
              A community based learning initiative for infrastructure
              engineers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-[#E6DADA]">
            <h3 className="font-grotesk text-base md:text-lg font-semibold mb-4 md:mb-6 text-[#E6DADA]">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/communityApplication"
                  className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Community
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Events
                </a>
              </li> */}
            </ul>
          </div>

          {/* Programs */}
          <div className="z-100">
            <h3 className="font-grotesk text-base md:text-lg font-semibold mb-4 md:mb-6">
              Programs
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="/programmes/elevate"
                  className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  NetClan Elevate
                </a>
              </li>
              <li>
                <a
                  href="/programmes/institute"
                  className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  NetClan Institute
                </a>
              </li>
              <li>
                <a
                  href="/programmes/line"
                  className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Ladies in Network Engineering (LiNE)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="z-10">
            <h3 className="font-grotesk text-base md:text-lg font-semibold mb-4 md:mb-6">
              Contact Us
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <FaEnvelope className="w-5 h-5 mt-0.5 shrink-0 text-white/80" />
                <a
                  href="mailto:info@thenetclan.org"
                  className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  info@thenetclan.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-3 mb-8 justify-start">
          <a
            href="https://x.com/thenetclan"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Twitter/X"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/thenetclan"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/thenetclan"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/@thenetclanorg"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="YouTube"
          >
            <FaYoutube className="w-5 h-5" />
          </a>
          <a
            href="http://tiktok.com/@thenetclan"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="TikTok"
          >
            <FaTiktok className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex md:flex-row gap-4 md:gap-6 order-2 md:order-1 md:mb-0 mb-10">
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
          <p className="text-white/60 text-sm order-2">
            © 2024 The Net Clan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
