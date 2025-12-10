"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react"; // Added ChevronDown icon
import Reliassist_new from "@/public/logo.png";

// --- 1. DATA STRUCTURES ---

interface DropdownLink {
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href: string;
  dropdown?: DropdownLink[];
}

const SERVICE_LINKS: DropdownLink[] = [
  { name: "Customer Service", href: "/service#customer-service" },
  { name: "Social Media Management", href: "/service#social-media" },
  { name: "Technical Support", href: "/service#technical-support" },
  { name: "Administrative Support", href: "/service#admin-support" },
  {
    name: "Specialized Project Assistance",
    href: "/service#specialized-projects",
  },
];

const NAV_LINKS: NavLink[] = [
  { name: "About Us", href: "/" },
  { name: "Services", href: "/services", dropdown: SERVICE_LINKS }, // Added dropdown data here
  { name: "Pricing", href: "/pricing" },
  { name: "Contact us", href: "/contact" },
];

// --- 2. MAIN COMPONENT ---

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);

  // Function to close both menus
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    // Outer container
    <nav className="top-0 w-full sticky z-50 px-4 py-6 md:px-[60px] lg:px-[100px] md:py-8">
      {/* Main Bar */}
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

        {/* Desktop Navigation (Hidden until LG breakpoint) */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.dropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.dropdown && setIsServicesOpen(false)}
              >
                {/* Nav Link / Dropdown Trigger */}
                <Link
                  href={link.href}
                  className="text-[16px] font-semibold text-secondary flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
                  // Use onClick to handle Services link directly on desktop if no dropdown is needed, but here we keep it as a link to the main service page
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  )}
                </Link>

                {/* Dropdown Menu (Desktop) */}
                {link.dropdown && (
                  <div
                    className={`
                                            absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 p-4
                                            bg-white rounded-xl shadow-lg border border-gray-100
                                            transition-all duration-300 ease-in-out origin-top z-40
                                            ${
                                              isServicesOpen
                                                ? "opacity-100 visible scale-y-100"
                                                : "opacity-0 invisible scale-y-95"
                                            }
                                        `}
                  >
                    <ul className="flex flex-col gap-3">
                      {link.dropdown.map((subLink) => (
                        <li key={subLink.name}>
                          <Link
                            href={subLink.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="text-sm text-gray-700 hover:text-primary transition-colors block py-1"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <a
            href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="py-3 px-8 font-bold text-white bg-primary hover:bg-black text-[16px] outline outline-1 outline-primary rounded-[50px] transition-all">
              Request Talent
            </button>
          </a>
        </div>

        {/* Mobile/Tablet Toggle Button */}
        <div className="lg:hidden flex items-center z-50">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-black focus:outline-none"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
                    mx-4 lg:mx-0 
                    
                    ${
                      isMenuOpen
                        ? "opacity-100 scale-y-100 visible"
                        : "opacity-0 scale-y-0 invisible"
                    }
                `}
      >
        <ul className="flex flex-col items-center gap-6 text-white w-full">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="w-full text-center">
              {/* Mobile Link / Dropdown Trigger */}
              <div className="relative w-full">
                <Link
                  href={link.dropdown ? "#" : link.href} // Use "#" for dropdown trigger
                  onClick={(e) => {
                    if (link.dropdown) {
                      e.preventDefault(); // Prevent navigating
                      setIsServicesOpen((prev) => !prev);
                    } else {
                      closeAllMenus();
                    }
                  }}
                  className="text-xl font-semibold hover:text-primary block py-2"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      size={20}
                      className={`inline ml-2 transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu (Mobile) */}
                {link.dropdown && (
                  <div
                    className={`
                                        mt-2 w-full bg-white/10 rounded-lg overflow-hidden 
                                        transition-all duration-300 ease-in-out
                                        ${
                                          isServicesOpen
                                            ? "max-h-96 opacity-100 py-2"
                                            : "max-h-0 opacity-0"
                                        }
                                    `}
                  >
                    <ul className="flex flex-col gap-2">
                      {link.dropdown.map((subLink) => (
                        <li key={subLink.name}>
                          <Link
                            href={subLink.href}
                            onClick={closeAllMenus}
                            className="text-base text-gray-300 hover:text-primary transition-colors block py-1"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* CTA Button (Mobile) */}
        <a
          href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
          onClick={closeAllMenus}
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
