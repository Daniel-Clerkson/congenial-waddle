"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Headphones, Briefcase, Instagram, Laptop, Target, ArrowUpRight } from "lucide-react";
import Reliassist_new from "@/public/logo.png";

interface DropdownLink {
  name: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}

interface NavLink {
  name: string;
  href: string;
  dropdown?: DropdownLink[];
}

const SERVICE_LINKS: DropdownLink[] = [
  { 
    name: "Customer Service Support", 
    href: "/services/customer-service",
    description: "Customer Inquiries, Help Desk Management, Complaints Resolution, etc",
    icon: <Headphones size={20} />,
    bgColor: "bg-purple-100"
  },
  { 
    name: "Administrative Support", 
    href: "/services/admin-support",
    description: "Email & Calendar, Data Entry, Travel Arrangements, Expens Tracking",
    icon: <Briefcase size={20} />,
    bgColor: "bg-blue-100"
  },
  { 
    name: "Social Media Management", 
    href: "/services/social-media",
    description: "Content Creation, Audience Engagement, Scheduling and Posting, Analytics, Graphics",
    icon: <Instagram size={20} />,
    bgColor: "bg-pink-100"
  },
  { 
    name: "Technical Support", 
    href: "/services/technical-support",
    description: "UI/UX Design, Web Design, E-commerce Sites, Site Optimization, CMS Solutions",
    icon: <Laptop size={20} />,
    bgColor: "bg-teal-100"
  },
  {
    name: "Special Projects Assistance",
    href: "/services/specialized-projects",
    description: "Research,, Event Planning, Marketing Campaign Support, Project Management etc",
    icon: <Target size={20} />,
    bgColor: "bg-green-100"
  },
];

const NAV_LINKS: NavLink[] = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", dropdown: SERVICE_LINKS },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact us", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="top-0 w-full sticky z-50 px-4 py-6 md:px-[60px] lg:px-[100px] md:py-8">
      <div className="flex justify-between items-center bg-[#F9FAFB] rounded-[50px] px-6 py-3 md:p-4 shadow-sm border border-gray-100">
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

        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.dropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.dropdown && setIsServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="text-[16px] font-semibold text-secondary flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  )}
                </Link>

                {link.dropdown && (
                  <div
                    className={`
                      absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[520px]
                      bg-white rounded-2xl shadow-xl border border-gray-100
                      transition-all duration-300 ease-in-out origin-top z-40
                      ${
                        isServicesOpen
                          ? "opacity-100 visible scale-y-100"
                          : "opacity-0 invisible scale-y-95"
                      }
                    `}
                  >
                    <div className="p-4 space-y-2">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group/item"
                        >
                          <div className={`${subLink.bgColor} p-3 rounded-xl flex-shrink-0`}>
                            {subLink.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-semibold text-gray-900 mb-1">
                              {subLink.name}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {subLink.description}
                            </p>
                          </div>
                          <ArrowUpRight 
                            size={20} 
                            className="flex-shrink-0 text-gray-400 group-hover/item:text-primary transition-colors"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

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
              <div className="relative w-full">
                <Link
                  href={link.dropdown ? "#" : link.href}
                  onClick={(e) => {
                    if (link.dropdown) {
                      e.preventDefault();
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

                {link.dropdown && (
                  <div
                    className={`
                      mt-2 w-full bg-white/10 rounded-lg overflow-hidden 
                      transition-all duration-300 ease-in-out
                      ${
                        isServicesOpen
                          ? "max-h-[600px] opacity-100 py-2"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <ul className="flex flex-col gap-2 px-4">
                      {link.dropdown.map((subLink) => (
                        <li key={subLink.name}>
                          <Link
                            href={subLink.href}
                            onClick={closeAllMenus}
                            className="flex items-start gap-3 py-2 text-left"
                          >
                            <div className={`${subLink.bgColor} p-2 rounded-lg flex-shrink-0`}>
                              {subLink.icon}
                            </div>
                            <div>
                              <div className="text-base font-semibold text-white">
                                {subLink.name}
                              </div>
                              <div className="text-sm text-gray-300 mt-1">
                                {subLink.description}
                              </div>
                            </div>
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