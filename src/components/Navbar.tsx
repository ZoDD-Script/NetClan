import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "../assets/logo/netclan.svg";
import logocolored from "../assets/logo/logocolored.png";
import collapse from "../assets/icons/collaspe.png";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
          {isScrolled ? (
            <img src={logocolored} alt="logo" />
          ) : (
            <img src={logo} alt="logo" />
          )}
        </RouterLink>

        {/* ========= DESKTOP MENU ========= */}
        <ul className="hidden md:flex space-x-10 font-medium relative">
          <RouterLink to="/about">
            <li
              className={`cursor-pointer ${
                isScrolled ? "hover:text-[#E588A4]" : "hover:text-[#DFBBFF]"
              }`}
            >
              About Us
            </li>
          </RouterLink>

          {/* PROGRAMMES DROPDOWN */}
          <li
            className="relative cursor-pointer group"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <span className="flex items-center gap-1">
              Programmes
              <img
                src={collapse}
                alt="collapse icon"
                className={`w-5 h-5 inline-block transition-all duration-300 group-hover:-rotate-180 ${
                  isScrolled ? "filter-none" : ""
                }`}
              />
            </span>
            {openDropdown && (
              <div className="absolute bg-white text-black py-3 mt-2 rounded-lg w-90 space-y-2 shadow-lg">
                {[
                  "Netclan Institute",
                  "Netclan Elevate",
                  "Ladies in Network Engineering (LiNE)",
                ].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 hover:bg-[#FAF6F6] hover:text-[#E588A4] cursor-pointer transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </li>

          <li
            className={`cursor-pointer ${
              isScrolled ? "hover:text-[#E588A4]" : "hover:text-[#DFBBFF]"
            }`}
          >
            Get Involved
          </li>
        </ul>

        {/* BUTTONS (DESKTOP) */}
        <div className="hidden md:flex space-x-4">
          <Button
            className={`px-8 py-5 rounded-sm transition-all ${
              isScrolled
                ? "border border-[#39364F] text-[#39364F] bg-transparent hover:bg-gray-100"
                : "border-white text-white bg-[#FFFFFF33] hover:bg-[#FFFFFF33]"
            }`}
          >
            Contact Us
          </Button>

          <Button className="bg-[#DFBBFF] hover:bg-[#DFBBFF] text-black px-8 py-5 rounded-sm">
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
              <div className="hover:text-[#DFBBFF]">About Us</div>

              {/* MOBILE DROPDOWN TITLE */}
              <details className="space-y-2">
                <summary className="cursor-pointer hover:text-[#DFBBFF]">
                  Programmes
                </summary>

                <div className="pl-4 space-y-2 mt-3">
                  <p className="hover:text-[#DFBBFF] cursor-pointer">
                    Netclan Institute
                  </p>
                  <p className="hover:text-[#DFBBFF] cursor-pointer">
                    Netclan Elevate
                  </p>
                  <p className="hover:text-[#DFBBFF] cursor-pointer">
                    Ladies in Network Engineering
                  </p>
                </div>
              </details>

              <div className="hover:text-[#DFBBFF]">Get Involved</div>

              <Button className="w-full border-white text-white">
                Contact Us
              </Button>

              <Button className="w-full bg-linear-to-r from-[#1D439E] to-[#D36E93] ">
                Make A Donation
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
