import React, { useRef } from "react";
import Image from "next/image";

import { motion, useTransform, useScroll, MotionValue } from "framer-motion";

import image1 from "@/public/service1.svg";
import image2 from "@/public/service2.png";
import image3 from "@/public/service3.png";
import image4 from "@/public/service4.png";
import image5 from "@/public/service5.png";
import image6 from "@/public/service6.png";

// --- 1. TYPE DEFINITIONS ---

interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  bgColor: string;
}

interface CardProps {
  card: CardData;
}

// --- 2. CARD DATA ---

const cardData: CardData[] = [
  {
    id: 1,
    image: image1,
    title: "Customer Service Support",
    description: `Providing seamless, professional assistance to enhance customer satisfaction—handling inquiries, resolving complaints, processing orders, and delivering real-time support through live chat.`,
    buttonText: "Learn More",
    bgColor: "bg-[#3A0956]",
  },
  {
    id: 2,
    image: image2,
    title: "Social Media & Content Management",
    description: `Enhancing your online presence with engaging content, strategic posting, audience interaction, and performance tracking—while delivering visually compelling graphics to elevate your brand.`,
    buttonText: "Learn More",
    bgColor: "bg-[#6A0DAD]",
  },
  {
    id: 3,
    image: image3,
    title: "Administrative Support",
    description: `Managing day-to-day administrative tasks can be time-consuming. ReliAssist’s administrative support services are designed to handle these essential functions, allowing you to focus on growing your business without getting bogged down by routine tasks.`,
    buttonText: "Learn More",
    bgColor: "bg-[#00929A]",
  },
  {
    id: 4,
    image: image4,
    title: "Creative Design",
    description: `We create eye-catching visuals that bring your brand to life and boost engagement. From bold banners to sleek social media graphics, every design is tailored to capture your voice. Need flyers, brochures, or a standout logo? We’ve got it covered—with cohesive visual branding that makes your message unforgettable.`,
    buttonText: "Learn More",
    bgColor: "bg-blue-600",
  },
  {
    id: 5,
    image: image5,
    title: "Technical Support",
    description: `We design intuitive UI/UX and responsive websites that blend beauty with function. From seamless e-commerce builds to performance-optimized sites, we’ve got you covered. Our tailored CMS solutions give you full control to manage and scale with ease.`,
    buttonText: "Learn More",
    bgColor: "bg-[#7266FF]",
  },
  {
    id: 6,
    image: image6,
    title: "Specialized Project Assistance",
    description: `Sometimes, you need extra help for a specific project or unique task. ReliAssist provides flexible, specialized support for projects large and small, whether you need research, planning, or hands-on execution.`,
    buttonText: "Learn More",
    bgColor: "bg-[#FF6969]",
  },
];

// --- 3. CARD COMPONENT ---

const Card: React.FC<CardProps> = ({ card }) => {
  const mainGradient =
    "bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]";

  return (
    <div
      key={card.id}
      className={`
        group relative overflow-hidden flex-shrink-0
        w-[360px] md:w-[500px] 
        h-[430px] md:h-[500px] 
        text-white px-4 md:px-10 py-10 md:py-20 
        rounded-[20px] transition-all duration-500
        shadow-2xl shadow-black/60 
        hover:scale-[1.03] hover:shadow-pink-500/50 
        bg-[#1D0033]
      `}
    >
      <div
        className={`absolute inset-0 opacity-70 ${card.bgColor} mix-blend-multiply`}
      ></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 flex-shrink-0 relative w-[70px] h-[70px] md:w-[100px] md:h-[100px]">
          <div className={`absolute inset-0 rounded-full p-1 ${mainGradient}`}>
            <div className="w-full h-full bg-[#1D0033] rounded-full flex items-center justify-center">
              <Image
                width={64}
                height={64}
                src={card.image}
                alt={card.title + " icon"}
                className="w-[40px] h-[40px] md:w-[64px] md:h-[64px] object-contain transition-transform duration-500 group-hover:rotate-6"
              />
            </div>
          </div>
        </div>

        <h2 className="font-semibold text-white text-[20px] md:text-[24px] mb-4 mt-2">
          {card.title}
        </h2>

        <p className="font-normal text-gray-200 text-[13px] md:text-[15px] mb-6 line-clamp-4">
          {card.description}
        </p>

        <button
          className={`
            mt-auto
            py-2 px-6 md:py-3 md:px-12 text-white text-[16px] font-bold rounded-[50px] 
            transition-all duration-300 transform 
            ${mainGradient} 
            shadow-lg shadow-pink-500/30
            
            hover:bg-none hover:bg-transparent hover:outline hover:outline-2 hover:outline-white
            hover:shadow-none
          `}
        >
          {card.buttonText}
        </button>
      </div>
    </div>
  );
};

// --- 4. SLIDER COMPONENT ---

const Slider: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    ["1%", `-${cardData.length * 500 - 100}px`]
  );

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 p-4 md:p-10">
          {cardData.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Slider;
