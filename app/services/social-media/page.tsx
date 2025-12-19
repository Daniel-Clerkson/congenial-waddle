import ReusableHeader from "@/components/ServiceComponents/ReusableHeader";
import { BadgeCheck, Camera, Lightbulb, PenTool, Store, TrendingUp } from "lucide-react";

const page = () => {
  const defaultServices = [
    {
      icon: <TrendingUp className="text-purple-600" />,
      title: "Graphics & Visuals Creation",
      description:
        "Eye-catching visuals tailored to reflect your brand’s personality and engage your audience across all platforms.",
      borderColor: "border-purple-500 ",
      bgColor: "bg-purple-200",
    },
    {
      icon: <Lightbulb className="text-purple-600" />,
      title: "Banner Design",
      description:
        "Custom designs for display ads, web headers, and promotional content that grab attention.",
      borderColor: "border-green-200",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Camera className="text-green-600" />,
      title: "Social Media Graphics",
      description:
        "Branded visuals optimized for Instagram, Facebook, LinkedIn, and more.",
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
    },
    {
      icon: <Store className="text-green-600" />,
      title: "Flyers & Brochures",
      description:
        "Professionally designed print and digital materials to support your marketing campaigns.",
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
    },
    {
      icon: <BadgeCheck className="text-purple-600" />,
      title: "Logo Creation",
      description:
        "Memorable logos that represent your identity and set you apart.",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50",
    },
    {
      icon: <PenTool className="text-purple-600" />,
      title: "Visual Branding",
      description:
        "Consistent design systems that strengthen your brand’s presence and recognition.",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50",
    },
  ];
  return (
    <>
      <ReusableHeader
        heroTitle={{
          italic: "Creative Designs",
          line2: "That Elevates",
          line3: "Your Brand",
        }}
        heroDescription="First impressions matter. ReliAssist delivers innovative and visually striking design solutions from branding to marketing materials—helping your business stand out, connect with your audience, and leave a lasting impact."
        servicesTitle={{ normal: "Creative", italic: "Design" }}
        benefitsDescription="With ReliAssist’s creative design support, your brand always looks its best—professional, cohesive, and ready to stand out in any crowd."
        services={defaultServices}
      />
    </>
  );
};

export default page;
