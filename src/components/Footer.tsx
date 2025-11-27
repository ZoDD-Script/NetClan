import React from "react";
import {
  // Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/logo/netclan.svg";
import footervector from "../assets/images/footervector.png";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-linear-to-r from-[#2d1f6e] via-[#3d2a7f] to-[#5a3d8f] text-[#E6DADA] overflow-hidden min-h-[549px] mt-10">
      <img
        src={footervector}
        alt=""
        className="absolute right-0 bottom-0 hidden md:block"
      />
      <div className="max-w-7xl mx-6 md:mx-20 py-12 md:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-16">
          {/* Logo and Description */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-20 md:w-[104px]" />
            </div>
            <p className="text-[#E6DADA] leading-relaxed text-sm">
              A community based learning initiative for infrastructure
              engineers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-[#E6DADA]">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-[#E6DADA]">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
              Resources
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Getting Started
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Learning Paths
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Mentorship
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Career Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
              Contact Us
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 shrink-0 text-white/80" />
                <a
                  href="mailto:info@netempowerment.org"
                  className="text-white/80 hover:text-white transition-colors text-sm break-all"
                >
                  info@thenetclan.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 shrink-0 text-white/80" />
                <a
                  href="tel:+15551234567"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-white/80" />
                <span className="text-white/80 text-sm">
                  123 Tech Avenue, Innovation District
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons - Mobile Only */}
        <div className="flex gap-3 mb-8 md:hidden justify-start">
          {/* <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a> */}
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Twitter/X"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8  flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex md:flex-row gap-4 md:gap-6 order-2 md:order-1 md:mb-0 mb-10">
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors text-sm mr-6 md:mr-0"
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
