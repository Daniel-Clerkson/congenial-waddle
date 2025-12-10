"use client";
import FooterBanner from "@/components/FooterBanner";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PopupModal from "@/components/PopupModal";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useEffect, useState } from "react";

export default function ReliAssistLanding() {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500); // Wait 0.5 seconds before showing the modal

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {showModal && (
        <PopupModal
          onClose={() => setShowModal(false)}
          ctaLink="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P"
        />
      )}
      <Hero />

      <WhyChooseUs />

      <Services />

      <HowItWorks />

      <Testimonial />

      <FooterBanner />
    </div>
  );
}
