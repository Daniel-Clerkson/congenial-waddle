import ReusableHeader from "@/components/ServiceComponents/ReusableHeader";
import {
  Briefcase,
  Calendar,
  ClipboardList,
  FileHeadphone,
  Headset,
  Lightbulb,
  LineChart,
  MessageCircleMore,
  MessageSquareQuote,
  ShieldCheck,
  UserRoundSearch,
} from "lucide-react";

const page = () => {
  const defaultServices = [
    {
      icon: <LineChart className="text-purple-600" />,
      title: "Research & Analysis",
      description:
        "Thorough research on industry trends, competitors, and market insights to support informed decision-making.",
      borderColor: "border-purple-500 ",
      bgColor: "bg-purple-200",
    },
    {
      icon: <Lightbulb className="text-purple-600" />,
      title: "Marketing Campaign Support",
      description:
        "Assistance in executing and managing marketing campaigns, ensuring they run smoothly and reach the intended audience.",
      borderColor: "border-green-200",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Calendar className="text-green-600" />,
      title: "Event Planning & Coordination",
      description:
        "Help with organizing and coordinating events, from logistics to post-event follow-up.",
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
    },
    {
      icon: <Briefcase className="text-green-600" />,
      title: "Project Management",
      description:
        "Dedicated project management to keep tasks on track, resources allocated, and timelines met.",
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
    },
    {
      icon: <ShieldCheck className="text-purple-600" />,
      title: "Customized Solutions",
      description:
        "Unique projects require unique solutions. We work with you to define the support needed and execute it precisely.",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50",
    },
  ];
  return (
    <>
      <ReusableHeader
        heroTitle={{
          italic: "Project Based",
          line2: "Assistance Tailored",
          line3: "to Your Needs",
        }}
        heroDescription="Sometimes, you need extra help for a specific project or unique task. ReliAssist provides flexible, specialised support for projects large and small, whether you need research, planning, or hands-on execution."
        servicesTitle={{ normal: "Specialized Project", italic: "Assistance" }}
        benefitsDescription="Our project-based support allows you to get expert help precisely when and where you need it, keeping your projects organized, efficient, and successful."
        services={defaultServices}
      />
    </>
  );
};

export default page;
