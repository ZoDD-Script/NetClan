import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import logo from "../assets/logo/netclan.svg";
import logocolored from "../assets/logo/netclancolored.svg";
import collapse from "../assets/icons/collaspe.png";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Active route helper
  const isActive = (path: string) => location.pathname === path;

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
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
        {/* LOGO */}
        <RouterLink to="/">
          <img src={isScrolled ? logocolored : logo} alt="logo" />
        </RouterLink>

        {/* ========= DESKTOP MENU ========= */}
        <ul className="hidden md:flex space-x-10 font-medium relative">
          {/* ABOUT */}
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

          {/* PROGRAMMES DROPDOWN (CLICK) */}
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
                  <div className="px-4 py-2 hover:bg-[#FAF6F6] hover:text-[#E588A4] cursor-pointer transition-colors">
                    Netclan Institute
                  </div>
                </RouterLink>

                <RouterLink to="/programmes/elevate">
                  <div className="px-4 py-2 hover:bg-[#FAF6F6] hover:text-[#E588A4] cursor-pointer transition-colors">
                    Netclan Elevate
                  </div>
                </RouterLink>

                <RouterLink to="/programmes/line">
                  <div className="px-4 py-2 hover:bg-[#FAF6F6] hover:text-[#E588A4] cursor-pointer transition-colors">
                    Ladies in Network Engineering (LiNE)
                  </div>
                </RouterLink>
              </div>
            )}
          </li>

          {/* GET INVOLVED */}
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

        {/* ========= DESKTOP BUTTONS ========= */}
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

          <Button className="bg-[#DFBBFF] hover:bg-[#DFBBFF] cursor-pointer text-black px-8 py-5 rounded-sm">
            Make A Donation
          </Button>
        </div>

        {/* ========= MOBILE MENU BUTTON ========= */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu size={28} />
          </SheetTrigger>

          <SheetContent className="bg-[#E6DADA] text-[#39364F]">
            <div className="space-y-6 mt-10 text-lg font-medium">
              <RouterLink to="/about">
                <div className="hover:text-[#DFBBFF]">About Us</div>
              </RouterLink>

              <details className="space-y-2">
                <summary className="cursor-pointer hover:text-[#DFBBFF]">
                  Programmes
                </summary>

                <div className="pl-4 space-y-2 mt-3">
                  <RouterLink to="/programmes/institute">
                    <p className="hover:text-[#DFBBFF] cursor-pointer">
                      Netclan Institute
                    </p>
                  </RouterLink>

                  <RouterLink to="/programmes/elevate">
                    <p className="hover:text-[#DFBBFF] cursor-pointer">
                      Netclan Elevate
                    </p>
                  </RouterLink>

                  <RouterLink to="/programmes/line">
                    <p className="hover:text-[#DFBBFF] cursor-pointer">
                      Ladies in Network Engineering
                    </p>
                  </RouterLink>
                </div>
              </details>

              <RouterLink to="/get-involved">
                <div className="hover:text-[#DFBBFF]">Get Involved</div>
              </RouterLink>

              <RouterLink to="/contact">
                <Button className="w-full border-white text-white">
                  Contact Us
                </Button>
              </RouterLink>

              <Button className="w-full bg-linear-to-r from-[#1D439E] to-[#D36E93]">
                Make A Donation
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
