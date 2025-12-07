import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Logo from "@/public/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
           <Image
           src={Logo}
           alt="logo"
           />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-[#6A0DAD] transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-[#6A0DAD] transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-[#6A0DAD] transition-colors font-medium"
              >
                Contact Us
              </a>
              <button className="bg-[#6A0DAD] cursor-pointer text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Request Talent{" "}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <a
                href="#features"
                className="block py-2 text-gray-700 hover:text-[#6A0DAD]"
              >
                About
              </a>
              <a
                href="#pricing"
                className="block py-2 text-gray-700 hover:text-[#6A0DAD]"
              >
                Service
              </a>
              <a
                href="#about"
                className="block py-2 text-gray-700 hover:text-[#6A0DAD]"
              >
                Contact Us
              </a>
              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold">
                Request Talent
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
