import ReusableHeader from "@/components/ServiceComponents/ReusableHeader";
import { Figma, Monitor, ShoppingBag, UsersRound, Zap } from "lucide-react";

const page = () => {
  const defaultServices = [
    {
      icon: <Figma className="text-purple-600" />,
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing user experiences that drive engagement.",
      borderColor: "border-purple-500 ",
      bgColor: "bg-purple-200",
    },
    {
      icon: <Monitor className="text-purple-600" />,
      title: "Web Design",
      description:
        "Building responsive and modern websites tailored to your business needs.",
      borderColor: "border-green-200",
      bgColor: "bg-purple-50",
    },
    {
      icon: <ShoppingBag className="text-green-600" />,
      title: "E-Commerce Sites",
      description:
        "Setup and customization of online stores for seamless customer shopping experiences.",
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
    },
    {
      icon: <Zap className="text-green-600" />,
      title: "Site Optimization",
      description:
        "Improving site performance, speed, and SEO for better visibility and usability.",
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
    },
    {
      icon: <UsersRound className="text-purple-600" />,
      title: "CMS Solutions",
      description:
        "Setup, management, and support for content management systems like WordPress, Shopify, and more.",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50",
    },
  ];
  return (
    <>
      <ReusableHeader
        heroTitle={{
          italic: "Technical Support",
          line2: "Dependable for",
          line3: "Smooth Operations",
        }}
        heroDescription="Technical issues can be disruptive. ReliAssist provides knowledgeable technical support to handle troubleshooting, software assistance, and more, ensuring that your business runs smoothly without interruption."
        servicesTitle={{ normal: "Technical", italic: "Support" }}
        benefitsDescription="With ReliAssist’s technical support, your digital infrastructure remains efficient, secure, and scalable helping you focus on growth while we handle the tech."
        services={defaultServices}
      />
    </>
  );
};

export default page;
