"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Reliassist_new from "@/public/logo.png";

interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/service" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact us", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    // Outer container
    <nav className="top-0 w-full sticky z-50 px-4 py-6 md:px-[60px] lg:px-[100px] md:py-8">
      
      {/* Main Bar: Now uses md:p-4 for better tablet spacing */}
      <div className="flex justify-between items-center bg-[#F9FAFB] rounded-[50px] px-6 py-3 md:p-4 shadow-sm border border-gray-100">
        
        {/* Logo Section */}
        <Link href="/" className="z-50 w-[100px] flex-shrink-0">
          <Image
            src={Reliassist_new}
            alt="Reliassist Logo"
            width={100}
            height={40}
            className="cursor-pointer"
            priority
          />
        </Link>

        {/* Desktop Navigation (Now hidden until LG breakpoint) */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[16px] font-Rale hover:text-primary transition-colors cursor-pointer font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <a href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P" target="_blank" rel="noopener noreferrer">
            <button className="py-3 px-8 font-bold text-white bg-primary hover:bg-black hover:outline-black text-[16px] font-Rale outline outline-1 outline-primary rounded-[50px] transition-all">
              Request Talent
            </button>
          </a>
        </div>

        {/* Mobile/Tablet Toggle Button (Visible up to LG breakpoint) */}
        <div className="lg:hidden flex items-center z-50">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-black focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      <div
        className={`
          absolute left-0 right-0 top-full mt-2 
          bg-black/95 backdrop-blur-sm rounded-3xl p-8 
          flex flex-col items-center gap-8 
          transition-all duration-300 ease-in-out origin-top
          
          /* Ensures menu is edge-to-edge on mobile, but constrained on tablets */
          mx-4 lg:mx-0 
          
          ${
            isOpen
              ? "opacity-100 scale-y-100 visible"
              : "opacity-0 scale-y-0 invisible"
          }
        `}
      >
        <ul className="flex flex-col items-center gap-6 text-white w-full">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="w-full text-center">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-Rale hover:text-primary block py-2 font-semibold"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <button className="w-full py-4 font-bold text-white bg-primary border border-primary rounded-xl transition-all">
            Request Talent
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;