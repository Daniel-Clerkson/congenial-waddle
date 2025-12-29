import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";

function PricingPlans() {
  const plans = [
    {
      name: "Essential Plan",
      price: "£260",
      period: "/month",
      features: [
        {
          text: "Dedicated part-time assistant for 10 hours per month",
          highlight: "part-time assistant",
        },
        { text: "Change your assistant with zero extra cost" },
        { text: "Dedicated Account Manager" },
        {
          text: "Adaptable solutions that flexibly adjust to your changing requirements",
        },
        { text: "Convenient Timezone" },
      ],
      featured: false,
    },
    {
      name: "Boost Plan",
      price: "£360",
      period: "/month",
      features: [
        {
          text: "Dedicated part-time assistant for 20 hours per month",
          highlight: "part-time assistant",
        },
        { text: "Change your assistant with zero extra cost" },
        { text: "Dedicated Account Manager" },
        {
          text: "Adaptable solutions that flexibly adjust to your changing requirements",
        },
        { text: "Convenient Timezone" },
      ],
      featured: false,
    },
    {
      name: "Power Plan",
      price: "£640",
      period: "/month",
      features: [
        {
          text: "Dedicated part-time assistant for 40 hours per month",
          highlight: "part-time assistant",
        },
        { text: "Change your assistant with zero extra cost" },
        { text: "Dedicated Account Manager" },
        {
          text: "Adaptable solutions that flexibly adjust to your changing requirements",
        },
        { text: "Unused hours rollover" },
        { text: "Convenient Timezone" },
      ],
      featured: true,
    },
    {
      name: "Flex Plan",
      price: "£1800",
      period: "/month",
      features: [
        {
          text: "Dedicated part-time assistant for 40 hours per month",
          highlight: "part-time assistant",
        },
        { text: "Multiple VAs handling your business needs" },
        { text: "Change your assistant with zero extra cost" },
        { text: "Dedicated Account Manager" },
        {
          text: "Adaptable solutions that flexibly adjust to your changing requirements",
        },
        { text: "Convenient Timezone" },
      ],
      featured: false,
    },
  ];

  const highlightText = (text: string, highlight: any) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="text-purple-600 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-bpx-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="w-full flex items-center justify-center my-5">
            <p className="text-center text-[10px] md:text-[14px] font-san font-normal py-2 px-5 bg-[#F9EDFE] rounded-[50px] md:py-3 md:px-4">
              Affordable Plans just for You
            </p>{" "}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Find the{" "}
            <span className="text-purple-600 italic font-serif">
              Perfect Plan
            </span>{" "}
            For Your Business
          </h1>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 ${
                plan.featured
                  ? "bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-2xl scale-105"
                  : "bg-white text-gray-900 shadow-lg border border-gray-200"
              } transition-transform hover:scale-105`}
            >
              {/* Plan Name */}
              <h3
                className={`text-xl font-semibold mb-4 ${
                  plan.featured ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span
                  className={`text-sm ${
                    plan.featured ? "text-purple-200" : "text-gray-600"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.featured ? "text-purple-200" : "text-purple-600"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {plan.featured && !feature.highlight
                        ? feature.text
                        : highlightText(feature.text, feature.highlight)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Subscribe Button */}
              <button
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${
                  plan.featured
                    ? "bg-white text-purple-600 hover:bg-gray-100"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
              >
                <Link href={"https://forms.zohopublic.com/reliassist1/form/ClientForm/formperma/3wbMalM4JoZcfxKrcAYc2CMX2RBSNtKQww1ONV_GeRQ"}>
                
                Subscribe Now
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingPlans;
