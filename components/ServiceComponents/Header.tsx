// components/AdminSupportHero.tsx
"use client";

import React from "react";
import Image from "next/image";

// Placeholder images - Replace with your actual paths
import customerServiceImage from "@/public/image.png";
import virtualAssistantImage from "@/public/image (2).png";

const AdminSupportHero: React.FC = () => {
  return (
    <section className="min-h-[700px] w-full bg-darkPurple bg-heroGradient pt-20 pb-20 lg:pt-32">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
        
        {/* --- 1. Left Content Block (Text & CTA) --- */}
        <div className="lg:w-1/2 text-white mb-12 lg:mb-0 lg:pr-12">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="italic font-serif text-primary">
              Administrative Support
            </span>
            <br />
            That Keeps You Organized
          </h1>

          {/* Description */}
          <p className="mt-6 text-xl text-gray-300 max-w-lg">
            Managing day-to-day administrative tasks can be time-consuming.
            ReliAssist&apos;s administrative support services are designed to handle these essential functions,
            allowing you to focus on growing your business without getting bogged down by routine tasks.
          </p>

          {/* CTA Button */}
          <a
            href="#request-form" // Replace with your actual CTA link
            className="mt-8 inline-block"
          >
            <button className="py-3 px-8 font-bold text-white bg-primary hover:bg-white hover:text-darkPurple text-lg rounded-xl transition-colors duration-300 shadow-lg shadow-primary/50">
              Send A Request
            </button>
          </a>
        </div>

        {/* --- 2. Right Visual Block (Images & Chat Bubbles) --- */}
        <div className="lg:w-1/2 relative min-h-[500px] flex items-center justify-center">
          
          {/* Main Image 1 (VA on Call) - Positioned upper right */}
          <div className="absolute w-[250px] md:w-[350px] h-auto top-0 right-0 z-10 bg-white rounded-xl shadow-2xl overflow-hidden">
            <Image
              src={virtualAssistantImage}
              alt="Male virtual assistant on a call"
              width={350}
              height={200}
              objectFit="cover"
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Chat Bubble 1 (Client Request) */}
          <div className="absolute top-10 md:top-16 left-10 md:left-24 z-20 max-w-[200px] p-3 text-sm rounded-lg rounded-tl-none bg-white text-gray-800 shadow-md">
            Hello ReliAssist, Please I need a virtual assistant
          </div>

          {/* Chat Bubble 2 (VA Confirmation) */}
          <div className="absolute top-36 md:top-48 right-0 md:right-10 z-20 max-w-[250px] p-3 text-sm rounded-lg rounded-br-none bg-primary text-white shadow-md">
            With experience in <span className="font-bold">administrative support</span>.
          </div>

          {/* Chat Bubble 3 (Initial Response) */}
          <div className="absolute top-52 md:top-64 left-10 md:left-20 z-20 max-w-[280px] p-3 text-sm rounded-lg rounded-tl-none bg-white text-gray-800 shadow-md">
            Hello Mike, Thanks for reaching out.
          </div>
          
          {/* Main Image 2 (VA Working) - Positioned lower left */}
          <div className="absolute w-[250px] md:w-[350px] h-auto bottom-0 left-0 z-10 bg-white rounded-xl shadow-2xl overflow-hidden">
            <Image
              src={customerServiceImage}
              alt="Female virtual assistant working"
              width={350}
              height={200}
              objectFit="cover"
              className="w-full h-auto"
            />
          </div>
          
          {/* Chat Bubble 4 (Time Frame) */}
          <div className="absolute bottom-40 md:bottom-32 left-10 md:left-20 z-20 max-w-[280px] p-3 text-sm rounded-lg rounded-tl-none bg-white text-gray-800 shadow-md">
            We&apos;ll be glad to help. In 12 Hours you will be connected with your personal VA
          </div>

          {/* Chat Bubble 5 (Final Confirmation) */}
          <div className="absolute bottom-10 md:bottom-0 right-10 md:right-20 z-20 max-w-[280px] p-3 text-sm rounded-lg rounded-br-none bg-darkPurple/80 text-white shadow-md">
            He&apos;ll glad gsio gld to Help, you will wlal connected with your personal VA
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminSupportHero;