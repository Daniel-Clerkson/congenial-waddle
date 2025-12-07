import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="main flex flex-wrap justify-between md:mx-20">
          <div className="md:w-1/2 w-full relative">
            <div className="">
              <h1 className="text-5xl md:text-7xl font-bold text-purple-800 mb-6 leading-tight">
                Your Business,
                <br />
                <span className="font-sans bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-500 font-[400] text-transparent">
                  Simplified.
                </span>
              </h1>

              <p className="text-xl md:text-xl   text-gray-600 mb-10 max-w-3xl mx-auto">
                ReliAssist is your go-to partner for dependable, expert virtual
                assistant services, designed to streamline your daily operations
                so you can focus on growth.
              </p>

              <button className="group bg-[#6A0DAD] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Discover Our Services
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>

              <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
          </div>
          <div className="img w-full md:w-1/2">
            <Image
              src="/hero.png"
              alt="hero"
              width={1080}
              height={1080}
              className="w-full"
            />
          </div>
        </div>

        <ChevronDown
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-purple-600"
          size={32}
        />
      </section>
      <section className="section-2 flex  items-center gap-10 justify-center flex-wrap p-5 my-20">
        <div className="image w-full md:w-[30%]">
        <Image
              src="/banner.png"
              alt="hero"
              width={1080}
              height={1080}
              className="w-full"
            />
        </div>
        <div className="text w-full md:w-1/2 p-10">
            <div className="head">
                <h1 className="text-2xl m-2 font-semibold">A Reliable Partner For Your Business <br />
                Success <div className="border border-purple-700 inline-block w-3/4 mb-1"></div>
                </h1>
                <p>
                We understand that running a business comes with countless responsibilities, many of which pull you away from your core goals. That’s where ReliAssist comes in. We specialise in providing skilled virtual assistants ready to take on the tasks that keep your business moving, freeing you to focus on what you do best. Whether you need ongoing support or help with a specific project, we’ve got you covered.
                </p>
            </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
