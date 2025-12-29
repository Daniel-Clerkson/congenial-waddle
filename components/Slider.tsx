"use client";

import Image, { StaticImageData } from "next/image";
import service1 from "@/public/service1.svg";
import service2 from "@/public/service2.png";
import service3 from "@/public/service3.png";
import service4 from "@/public/service4.png";
import service5 from "@/public/service5.png";
import service6 from "@/public/service6.png";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface CardData {
  id: number;
  image: StaticImageData | string;
  title: string;
  description: string;
  buttonText: string;
  bgColor: string;
  link?: string;
}

const cards: CardData[] = [
  {
    id: 1,
    image: service1,
    title: "Customer Service Support",
    description: `Providing seamless, professional assistance to enhance customer satisfaction—handling inquiries, resolving complaints, processing orders, and delivering real-time support through live chat.`,
    buttonText: "Learn More",
    bgColor: "bg-[#3A0956]",
    link: "customer-service"
  },
  {
    id: 2,
    image: service2,
    title: "Social Media & Content Management",
    description: `Enhancing your online presence with engaging content, strategic posting, audience interaction, and performance tracking—while delivering visually compelling graphics to elevate your brand.`,
    buttonText: "Learn More",
    bgColor: "bg-[#6A0DAD]",
    link: "social-media"
  },
  {
    id: 3,
    image: service3,
    title: "Administrative Support",
    description: `Managing day-to-day administrative tasks can be time-consuming. ReliAssist's administrative support services are designed to handle these essential functions, allowing you to focus on growing your business without getting bogged down by routine tasks.`,
    buttonText: "Learn More",
    bgColor: "bg-[#00929A]",
    link: "admin-support"
  },
  {
    id: 4,
    image: service4,
    title: "Creative Design",
    description: `We create eye-catching visuals that bring your brand to life and boost engagement. From bold banners to sleek social media graphics, every design is tailored to capture your voice. Need flyers, brochures, or a standout logo? We've got it covered—with cohesive visual branding that makes your message unforgettable.`,
    buttonText: "Learn More",
    bgColor: "bg-blue-600",
    link: "creative-design"
  },
  {
    id: 5,
    image: service5,
    title: "Technical Support",
    description: `We design intuitive UI/UX and responsive websites that blend beauty with function. From seamless e-commerce builds to performance-optimized sites, we've got you covered. Our tailored CMS solutions give you full control to manage and scale with ease.`,
    buttonText: "Learn More",
    bgColor: "bg-[#7266FF]",
    link: "technical-support"
  },
  {
    id: 6,
    image: service6,
    title: "Specialized Project Assistance",
    description: `Sometimes, you need extra help for a specific project or unique task. ReliAssist provides flexible, specialized support for projects large and small, whether you need research, planning, or hands-on execution.`,
    buttonText: "Learn More",
    bgColor: "bg-[#FF6969]",
    link: "specialized-projects"
  },
];

const Slider = () => {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Link href={`/services/${card.link}`} key={card.id}>
              <Card card={card} key={card.id} />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  card: CardData;
}

const Card = ({ card }: CardProps) => {
  return (
    <div
      className={`md:w-[500px] w-[360px] h-[430px] md:h-[500px] overflow-hidden mb-10 md:mb-0 text-white px-4 md:px-10 py-10 md:py-20 rounded-[20px] shadow-md ${card.bgColor}`}
    >
      <Image
        src={card.image}
        alt={card.title}
        width={100}
        height={100}
        className="mb-6 md:w-[100px] w-[70px] h-auto"
      />
      <h1 className="font-san font-Medium text-white text-[20px] md:text-[24px] mb-4">
        {card.title}
      </h1>

      <p className="font-san font-Regular text-white text-[13px] md:text-[15px] mb-6">
        {card.description}
      </p>

      <button className="md:py-3 py-2 md:px-12 px-6 text-white border-white hover:text-white hover:bg-black hover:outline-white text-[16px] font-Regular font-san outline outline-1 outline-white rounded-[50px]">
        {card.buttonText}
      </button>
    </div>
  );
};

export default Slider;