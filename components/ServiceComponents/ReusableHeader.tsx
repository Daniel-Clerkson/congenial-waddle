import React from "react";
import { Calendar, Mail, Search, Plane, FileEdit } from "lucide-react";
import Image from "next/image";
import Service_image from "@/public/service_image.png";
import Link from "next/link";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderColor: string;
  bgColor: string;
}

interface FloatingCard {
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  label: string;
  value: string;
  position: "top-right" | "bottom-left";
}

interface ReusableHeaderProps {
  // Hero Section
  heroTitle: {
    italic: string;
    line2: string;
    line3: string;
  };
  heroDescription: string;
  heroButtonText: string;
  heroBackgroundColor?: string;
  heroImage?: React.ReactNode;
  floatingCards?: FloatingCard[];

  // Services Section
  servicesTitle: {
    normal: string;
    italic: string;
  };
  services: ServiceCard[];

  // Benefits Section
  benefitsTitle: {
    normal: string;
    italic: string;
  };
  benefitsDescription: string;
  benefitsBackgroundColor?: string;
}

const defaultFloatingCards: FloatingCard[] = [
  {
    icon: <Calendar className="w-5 h-5 text-purple-600" />,
    iconBgColor: "bg-purple-100",
    iconColor: "text-grad",
    label: "Meeting Scheduled",
    value: "Team Sync - 2:00 PM",
    position: "top-right",
  },
  {
    icon: <Mail className="w-5 h-5 text-green-600" />,
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
    label: "Inbox Organized",
    value: "24 emails sorted",
    position: "bottom-left",
  },
];

const defaultServices: ServiceCard[] = [
  {
    icon: <Calendar className="w-6 h-6 text-purple-600" />,
    title: "Scheduling & Calendar Management",
    description:
      "Keep your appointments, meetings, and events organized with our efficient calendar management services.",
    borderColor: "border-purple-200",
    bgColor: "bg-purple-50",
  },
  {
    icon: <FileEdit className="w-6 h-6 text-purple-600" />,
    title: "Data Entry & Document Preparation",
    description:
      "Accurate and efficient data entry, document formatting, and file organization to keep your records pristine.",
    borderColor: "border-purple-200",
    bgColor: "bg-purple-50",
  },
  {
    icon: <Mail className="w-6 h-6 text-green-600" />,
    title: "Email Management",
    description:
      "Organize, prioritize, and respond to emails efficiently. Keep your inbox clean and your communication flowing.",
    borderColor: "border-green-200",
    bgColor: "bg-green-50",
  },
  {
    icon: <Plane className="w-6 h-6 text-green-600" />,
    title: "Travel Arrangements",
    description:
      "Planning flights, accommodations, and itineraries to ensure seamless business travel experiences.",
    borderColor: "border-green-200",
    bgColor: "bg-green-50",
  },
  {
    icon: <Search className="w-6 h-6 text-purple-600" />,
    title: "Research",
    description:
      "Comprehensive research services to gather information, analyze data, and deliver strategic insights.",
    borderColor: "border-purple-200",
    bgColor: "bg-purple-50",
  },
];

const defaultProps: ReusableHeaderProps = {
  heroTitle: {
    italic: "Administrative Support",
    line2: "That Keeps You",
    line3: "Organized",
  },
  heroDescription:
    "Stay ahead of your tasks with seamless administrative campaigning. ReMultask's administrative support services are designed to handle those essential but time-consuming tasks, giving you the freedom to focus on what truly matters—getting fitagged down by routine tasks.",
  heroButtonText: "About A Request",
  heroBackgroundColor:
    "bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900",
  floatingCards: defaultFloatingCards,
  servicesTitle: {
    normal: "Administrative",
    italic: "Support",
  },
  services: defaultServices,
  benefitsTitle: {
    normal: "Benefits to Your",
    italic: "Business",
  },
  benefitsDescription:
    "With ReMultask's administrative support, you can focus on high-priority tasks while we handle the clerical administrative responsibilities that keep your business running smoothly.",
  benefitsBackgroundColor: "bg-gray-50",
};

const ReusableHeader: React.FC<Partial<ReusableHeaderProps>> = (props) => {
  const {
    heroTitle,
    heroDescription,
    heroButtonText,
    floatingCards,
    servicesTitle,
    services,
    benefitsTitle,
    benefitsDescription,
    benefitsBackgroundColor,
  } = { ...defaultProps, ...props };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* Added overflow-hidden to handle floating cards on mobile */}
      <div className={`bg-[#1A0128] text-white overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            {/* Added text-center for mobile, text-left for desktop */}
            <div className="text-center md:text-left">
              {/* Responsive Typography: text-4xl on mobile, text-6xl on desktop */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="italic text-grad">{heroTitle.italic}</span>
                <br />
                <span>{heroTitle.line2}</span>
                <br />
                <span>{heroTitle.line3}</span>
              </h1>
              <p className="text-purple-100 text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                {heroDescription}
              </p>
              {/* Button is full width on mobile, auto width on desktop */}
              <Link href={"https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P"}>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition w-full md:w-auto">
                  Send A Request
                </button>
              </Link>
            </div>

            {/* Right Content - Image Placeholder */}
            {/* Added margin top for mobile spacing */}
            <div className="relative mt-12 md:mt-0">
              <div className="relative z-10 px-4 md:px-0">
                {/* Main Image */}
                <div className="p-4 md:p-8 mb-6">
                  <Image src={Service_image} alt="Insert Image Here" />
                </div>

                {/* Floating Cards */}
                {floatingCards?.map((card, index) => (
                  <div
                    key={index}
                    // Updated logic: Scale down on mobile, adjust positioning to be closer to image on mobile
                    className={`absolute transform scale-90 md:scale-100 transition-transform ${
                      card.position === "top-right"
                        ? "-top-4 -right-2 md:-top-6 md:-right-6"
                        : "-bottom-4 -left-2 md:-bottom-4 md:left-6"
                    } bg-white rounded-xl shadow-lg p-3 md:p-4 max-w-[200px] md:max-w-xs`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 md:w-10 md:h-10 ${card.iconBgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                      >
                        {/* Clone element to force responsive size if needed, or rely on wrapper */}
                        {card.icon}
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] md:text-xs text-gray-500">
                          {card.label}
                        </p>
                        <p className="text-xs md:text-sm font-semibold text-gray-900">
                          {card.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {servicesTitle.normal}{" "}
            <span className="text-grad italic">{servicesTitle.italic}</span>
          </h2>
        </div>

        {/* Services Grid */}
        {/* Changed to grid-cols-1 for mobile, 2 for tablet, 3 for desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 max-w-6xl mx-auto px-4">
          {services.map((service, index) => (
            <div key={index} className="relative pb-8">
              <div className="flex items-start gap-6">
                {/* Circle Icon Container */}
                <div
                  className={`shrink-0 w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center`}
                >
                  {/* Ensure your service.icon is scaled to roughly w-8 h-8 */}
                  {service.icon}
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Decorative Bottom Line - matches the colored lines in your image */}
              <div
                className={`absolute bottom-0 border-1 left-0 w-full h-[1.5px] bg-linear-to-r ${
                  service.borderColor || "from-purple-300 to-pink-300"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className={`${benefitsBackgroundColor} py-16 md:py-20`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {benefitsTitle.normal}{" "}
            <span className="text-grad italic">{benefitsTitle.italic}</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {benefitsDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReusableHeader;
