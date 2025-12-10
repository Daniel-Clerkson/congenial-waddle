import React from "react";
import Link from "next/link"; 
import Image, { StaticImageData } from "next/image"; 

// --- 1. ASSET IMPORTS ---

// Assuming these are imported assets in a Next.js environment
import ReliassistNew from "@/public/logo.png"; 
import social4 from "@/public/social4.svg"; // X
import social2 from "@/public/social2.png"; // LinkedIn
import social1 from "@/public/social1.png"; // Threads
import social3 from "@/public/social3.png"; // Instagram


// --- 2. DATA STRUCTURES ---

interface SocialLink {
    href: string;
    icon: StaticImageData;
    alt: string;
}

const SOCIAL_LINKS: SocialLink[] = [
    {
        href: "https://www.threads.com/@reliassist?igshid=NTc4MTIwNjQ2YQ==",
        icon: social1,
        alt: "Threads icon",
    },
    {
        href: "https://www.linkedin.com/company/reliassist",
        icon: social2,
        alt: "LinkedIn icon",
    },
    {
        href: "https://www.instagram.com/reliassist/",
        icon: social3,
        alt: "Instagram icon",
    },
    {
        href: "https://x.com/reliassist?s=11",
        icon: social4,
        alt: "X (Twitter) icon",
    },
];

// Custom function to apply the thematic gradient hover
const gradientHoverClass = "transition-colors duration-300 hover:text-pink-400";


// --- 3. MAIN COMPONENT ---

const Footer: React.FC = () => {
    return (
        // Applied the dark primary background color
        <footer className="w-full bg-[#1D0033] text-white px-6 md:px-[100px] py-12">
            
            {/* Top Section: Logo & Navigation Links */}
            <div className="w-full flex flex-col md:flex-row gap-8 lg:gap-20 pb-10">
                
                {/* Logo and Tagline */}
                <div className="md:w-[350px] mb-8 md:mb-0">
                    <Image src={ReliassistNew} alt="ReliAssist Logo" width={180} height={40} className="h-auto" />
                    
                    <p className="font-normal text-[16px] mt-4 text-white text-sm">
                        Your Projects delivered with ease
                    </p>
                </div>
                
                {/* Navigation Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:gap-x-12 w-full gap-y-8">
                    
                    {/* Column 1: Company */}
                    <div>
                        <h3 className="font-bold text-lg md:text-[20px] mb-4 text-white">
                            Company
                        </h3>
                        <ul className="space-y-3 font-normal text-[16px] text-white text-sm">
                            <li><Link href="/about" className={gradientHoverClass}>About</Link></li>
                            <li><Link href="/contact" className={gradientHoverClass}>Contact us</Link></li>
                            <li><Link href="#testimonials" className={gradientHoverClass}>Testimonials</Link></li>
                            <li><Link href="/blog" className={gradientHoverClass}>Blog</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="font-bold text-lg md:text-[20px] mb-4 text-white">
                            Services
                        </h3>
                        <ul className="space-y-3 font-normal text-[16px] text-white text-sm">
                            <li><p className={gradientHoverClass}>Customer Service</p></li>
                            <li><p className={gradientHoverClass}>Social Media Management</p></li>
                            <li><p className={gradientHoverClass}>Technical Support</p></li>
                            <li><p className={gradientHoverClass}>Administrative Support</p></li>
                            <li><p className={gradientHoverClass}>Specialized Project Assistance</p></li>
                        </ul>
                    </div>

                    {/* Column 3: Pricing */}
                    <div>
                        <h3 className="font-bold text-lg md:text-[20px] mb-4 text-white">
                            Pricing
                        </h3>
                        <ul className="space-y-3 font-normal text-[16px] text-white text-sm">
                            <li><Link href="/pricing#essential" className={gradientHoverClass}>Essential</Link></li>
                            <li><Link href="/pricing#boost" className={gradientHoverClass}>Boost</Link></li>
                            <li><Link href="/pricing#power" className={gradientHoverClass}>Power</Link></li>
                            <li><Link href="/pricing#flex" className={gradientHoverClass}>Flex</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Resources */}
                    <div>
                        <h3 className="font-bold text-lg md:text-[20px] mb-4 text-white">
                            Resources
                        </h3>
                        <ul className="space-y-3 font-normal text-[16px] text-white text-sm">
                            <li>
                                <a href="https://reliassist.notion.site/Terms-of-Service-2268eb5fac038198bcebf9075a6a9631?source=copy_link" target="_blank" rel="noopener noreferrer" className={gradientHoverClass}>
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="https://omotolak.notion.site/Privacy-Policy-2268eb5fac038181a101e9885436dbfb?source=copy_link" target="_blank" rel="noopener noreferrer" className={gradientHoverClass}>
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Copyright and Socials */}
            <hr className="mt-10 mb-6 border-white/10" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Copyright */}
                <div>
                    <p className="font-normal text-[14px] text-white text-center md:text-start">
                        © 2025. All rights Reserved. This website is owned by Omayo Tech
                    </p>
                </div>
                
                {/* Social Icons */}
                <div className="flex gap-4">
                    {SOCIAL_LINKS.map((link) => (
                        <a key={link.alt} href={link.href} target="_blank" rel="noopener noreferrer" className="p-1 rounded-full border border-transparent hover:border-pink-400 transition">
                            <Image 
                                src={link.icon} 
                                alt={link.alt} 
                                width={24} 
                                height={24} 
                                className="w-6 h-6"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;