import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import logo from "../assets/logo/netclan.svg";
import logocolored from "../assets/logo/netclancolored.svg";
import collapse from "../assets/icons/collaspe.png";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const dropdownRef = useRef<HTMLLIElement>(null);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 text-sm font-normal transition-all duration-300 ${
        isScrolled ? "pt-4 px-6" : ""
      }`}
    >
      <div
        className={`max-w-[1360px] mx-auto flex items-center justify-between px-5 transition-all duration-300 ${
          isScrolled
            ? "bg-white text-[#39364F] shadow-lg rounded-lg"
            : "bg-transparent text-white"
        }`}
      >
        {/* Logo */}
        <RouterLink to="/">
          <img src={isScrolled ? logocolored : logo} alt="logo" />
        </RouterLink>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-10 font-medium relative">
          <RouterLink to="/about">
            <li
              className={`cursor-pointer transition-colors ${
                isActive("/about")
                  ? isScrolled
                    ? "text-[#E588A4]"
                    : "text-[#DFBBFF]"
                  : isScrolled
                  ? "hover:text-[#E588A4]"
                  : "hover:text-[#DFBBFF]"
              }`}
            >
              About Us
            </li>
          </RouterLink>

          {/* Programmes Dropdown */}
          <li
            ref={dropdownRef}
            className="relative cursor-pointer select-none"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <span
              className={`flex items-center gap-1 transition-colors ${
                [
                  "/programmes/institute",
                  "/programmes/elevate",
                  "/programmes/line",
                ].includes(location.pathname)
                  ? isScrolled
                    ? "text-[#E588A4]"
                    : "text-[#DFBBFF]"
                  : isScrolled
                  ? "hover:text-[#E588A4]"
                  : "hover:text-[#DFBBFF]"
              }`}
            >
              Programmes
              <img
                src={collapse}
                alt="collapse icon"
                className={`w-5 h-5 inline-block transition-all duration-300 ${
                  dropdownOpen ? "-rotate-180" : "rotate-0"
                } ${isScrolled ? "filter invert" : ""}`}
              />
            </span>

            {dropdownOpen && (
              <div className="absolute bg-white text-black py-3 mt-2 rounded-lg w-[278px] space-y-2 shadow-lg">
                <RouterLink to="/programmes/institute">
                  <div className="px-4 py-2 hover:bg-[#FAF6F6] hover:text-[#E588A4] cursor-pointer">
                    Netclan Institute
                  </div>
                </RouterLink>

                <RouterLink to="/programmes/elevate">
                  <div className="px-4 py-2 hover:bg-[#FAF6F6] hover:text-[#E588A4] cursor-pointer">
                    Netclan Elevate
                  </div>
                </RouterLink>

                <RouterLink to="/programmes/line">
                  <div className="px-4 py-2 hover:bg-[#FAF6F6] hover:text-[#E588A4] cursor-pointer">
                    Ladies in Network Engineering (LiNE)
                  </div>
                </RouterLink>
              </div>
            )}
          </li>

          <RouterLink to="/get-involved">
            <li
              className={`cursor-pointer transition-colors ${
                isActive("/get-involved")
                  ? isScrolled
                    ? "text-[#E588A4]"
                    : "text-[#DFBBFF]"
                  : isScrolled
                  ? "hover:text-[#E588A4]"
                  : "hover:text-[#DFBBFF]"
              }`}
            >
              Get Involved
            </li>
          </RouterLink>
        </ul>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex space-x-4">
          <RouterLink to="/contact">
            <Button
              className={`px-8 py-5 rounded-sm transition-all cursor-pointer ${
                isScrolled
                  ? "border border-[#39364F] text-[#39364F] bg-transparent hover:bg-gray-100"
                  : "border-white text-white bg-[#FFFFFF33] hover:bg-[#FFFFFF33]"
              }`}
            >
              Contact Us
            </Button>
          </RouterLink>

          <RouterLink to="/donate">
            <Button className="bg-[#DFBBFF] hover:bg-[#DFBBFF] cursor-pointer text-black px-8 py-5 rounded-sm">
              Make A Donation
            </Button>
          </RouterLink>
        </div>

        {/* MOBILE MENU */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu
              size={28}
              className={isScrolled ? "text-[#39364F]" : "text-white"}
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="bg-[#E6DADA] text-[#39364F] w-[85%] sm:w-[400px] p-0"
          >
            {/* Logo */}
            <div className="p-6 border-b border-gray-300">
              <RouterLink to="/">
                <img src={logocolored} alt="logo" />
              </RouterLink>
            </div>

            {/* NORMAL ITEMS */}
            <div className="px-6 py-3 space-y-1">
              <RouterLink to="/about">
                <div className="text-[#39364F] hover:text-[#E588A4] text-base">
                  About Us
                </div>
              </RouterLink>
            </div>

            {/* PROGRAMMES — OUTSIDE padding so submenu is FULL WIDTH */}
            <div className="w-full">
              <div
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="px-6 text-[#39364F] hover:text-[#E588A4] cursor-pointer text-base flex items-center"
              >
                <span>Programmes</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    mobileDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {mobileDropdownOpen && (
                <div className="w-full bg-[#FFFFFFB2]">
                  <RouterLink to="/programmes/institute">
                    <div className="w-full px-6 py-3 text-[#E588A4] text-base">
                      NetClan Institute
                    </div>
                  </RouterLink>

                  <RouterLink to="/programmes/elevate">
                    <div className="w-full px-6 py-3 text-[#E588A4] text-base">
                      NetClan Elevate
                    </div>
                  </RouterLink>

                  <RouterLink to="/programmes/line">
                    <div className="w-full px-6 py-3 text-[#E588A4] text-base">
                      Ladies in Network Engineering (LiNE)
                    </div>
                  </RouterLink>
                </div>
              )}
            </div>

            {/* More items */}
            <div className="px-6 space-y-1">
              <RouterLink to="/get-involved">
                <div className="py-3 text-[#39364F] hover:text-[#E588A4] text-base">
                  Get Involved
                </div>
              </RouterLink>

              <RouterLink to="/contact">
                <div className="py-3 text-[#39364F] hover:text-[#E588A4] text-base">
                  Contact Us
                </div>
              </RouterLink>
            </div>

            {/* BUTTONS */}
            <div className="px-6 py-4 space-y-3">
              <RouterLink to="/donate">
                <Button className="w-full bg-linear-to-r from-[#4C6FD8] to-[#C679A0] hover:opacity-90 text-white py-6 rounded-lg text-base mb-4 font-medium">
                  Make A Donation
                </Button>
              </RouterLink>

              <RouterLink to="/communityApplication">
                <Button className="w-full bg-transparent border-2 border-[#6B5E9E] text-[#6B5E9E] hover:bg-[#6B5E9E]/10 py-6 rounded-lg text-base font-medium">
                  Join Our Community
                </Button>
              </RouterLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
