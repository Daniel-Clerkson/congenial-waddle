import React from "react";
import {
  Phone,
  MessageSquare,
  Headphones,
  Wrench,
  Calendar,
  ClipboardList,
} from "lucide-react";
import Link from "next/link";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Customer Service Support",
      description:
        "Provide seamless customer experiences with our dedicated support team. We handle inquiries, resolve issues, and ensure customer satisfaction with professionalism and care.",
      color: "from-purple-900 to-purple-800",
      link: "customer-service",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Social Media & Content Management",
      description:
        "Elevate your brand with engaging social media content. We create, schedule, and manage posts across platforms to build a strong online community and drive engagement.",
      color: "from-purple-600 to-violet-600",
      link: "social-media",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Administrative Support",
      description:
        "Streamline your operations with our comprehensive administrative services. From email management to data entry, we handle the details so you can focus on growth.",
      color: "from-teal-500 to-teal-600",
      link: "admin-support",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Creative Design",
      description:
        "Bring your vision to life with our creative design services. We deliver stunning visuals, from graphics to branding materials, that capture your brand's essence and engage your audience.",
      color: "from-blue-500 to-blue-600",
      link: "creative-design",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Technical Support",
      description:
        "Get reliable technical assistance when you need it most. Our team troubleshoots issues, provides solutions, and ensures your systems run smoothly and efficiently.",
      color: "from-indigo-500 to-purple-500",
      link: "technical-support",
    },
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "Specialized Project Assistance",
      description:
        "Navigate complex projects with expert guidance. We provide research, planning, and execution support to help you achieve your goals and deliver exceptional results.",
      color: "from-red-400 to-pink-500",
      link: "specialized-project",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white my-10 p-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-purple-600 italic">Services</span>
        </h2>
        <p className="text-gray-600 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Effortlessly support tailored to your business needs—whether it's
          customer service, technical assistance, social media management, or
          specialized projects. We deliver a variety of areas, both technical
          and creative to meet all of your business needs.
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition font-semibold">
          Get Started
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 text-white hover:scale-105 transition-transform duration-300 shadow-lg`}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              {service.description}
            </p>
            <Link href={service.link}>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition font-semibold">
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
