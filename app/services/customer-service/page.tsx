import ReusableHeader from "@/components/ServiceComponents/ReusableHeader";
import {
  ClipboardList,
  FileHeadphone,
  Headset,
  MessageCircleMore,
  MessageSquareQuote,
  UserRoundSearch,
} from "lucide-react";

const page = () => {
  const defaultServices = [
    {
      icon: <Headset className="text-purple-600" />,
      title: "Customer Inquiries & Help Desk Managment",
      description:
        "Prompt courteous responses to customer questions, ensuring  they feel valued and informed",
      borderColor: "border-purple-500 ",
      bgColor: "bg-purple-200",
    },
    {
      icon: <ClipboardList className="text-purple-600" />,
      title: "Order Processing & Tracking Assistance",
      description:
        "Managing orders, tracking updates, and handling order-related questions to enhance customer conveinience",
      borderColor: "border-green-200",
      bgColor: "bg-purple-50",
    },
    {
      icon: <UserRoundSearch className="text-green-600" />,
      title: "Complaint Resolution",
      description:
        "Handling issues professionally and efficiently to maintain trust and satisfaction.",
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
    },
    {
      icon: <MessageSquareQuote className="text-green-600" />,
      title: "Customer Feedback Collection",
      description:
        "Gathering feedback to help you continuously improve products and services.",
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
    },
    {
      icon: <MessageCircleMore className="text-purple-600" />,
      title: "Live Chat Support",
      description:
        "Real-time support for customers needing quick assistance, reducing wait times and enhancing satisfaction.",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50",
    },
  ];
  return (
    <>
      <ReusableHeader
        heroTitle={{
          italic: "Customer Support",
          line2: "That Stregthens",
          line3: "Loyalty And Trust",
        }}
        heroDescription="Your customers deserve exceptional support. ReliAssist provides dedicated customer service professionals who handle inquiries, resolve issues, and create positive experiences that encourage customer loyalty."
        servicesTitle={{ normal: "Customer Service", italic: "Support" }}
        benefitsDescription="With a dedicated ReliAssist customer service representative, you ensure your customers feel heard, valued, and supported, which fosters loyalty and drives repeat business."
        services={defaultServices}
      />
    </>
  );
};

export default page;
