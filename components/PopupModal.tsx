import React, { useState } from "react";
import useCountdownTimer from "@/hooks/useCountdownTimer";
import { X } from "lucide-react";
import popup from "@/public/popup.png";
import Image from "next/image";

interface LimitedOfferModalProps {
  onClose: () => void;
  ctaLink: string;
}

const PopupModal: React.FC<LimitedOfferModalProps> = ({ onClose, ctaLink }) => {
  // Keeping this at 6000 seconds (100 minutes) as per your provided code
  const DURATION_SECONDS = 60; 

  const [timerExpired, setTimerExpired] = useState(false);

  const { minutes, seconds, isTimerActive } = useCountdownTimer(
    DURATION_SECONDS,
    () => {
      setTimerExpired(true);
    }
  );

  const buttonText = timerExpired ? "Offer Expired" : "Hire Now!";

  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      
      {/* Modal Content Container: Responsive layout and font-serif applied */}
      <div
        className={`
          bg-[#4A0070] text-white rounded-xl shadow-2xl relative transform transition-all duration-300 
          w-full max-w-5xl p-6 md:p-12 font-serif 
          flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16
        `}
      >
        {/* Close Button: Absolute positioned */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors z-10"
          aria-label="Close limited offer pop-up"
        >
          <X size={24} />
        </button>

        {/* LEFT SECTION: Offer Details */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
          <div className="popup-image mb-4">
            <Image
              src={popup}
              width={128}
              height={128}
              alt="Promotion graphic"
              priority
            />
          </div>

          {/* Main Promotion Message */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            Subscribe to any <br className="hidden sm:block" /> plan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
              <i>pay for 2 months</i>
            </span>
            <br /> and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
              <i>get 1 month free</i>
            </span>
          </h2>

          {/* CTA Button */}
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-3/4 max-w-xs block"
          >
            <button
              onClick={onClose}
              disabled={timerExpired}
              className={`w-full px-3 py-4 font-bold text-base rounded-[50px] transition-all duration-300 
              ${
                timerExpired
                  ? "bg-gray-600 cursor-not-allowed text-white"
                  : "bg-primary hover:bg-pink-600 text-white"
              }`}
            >
              {buttonText}
            </button>
          </a>
        </div>

        {/* RIGHT SECTION: Timer (Restored to original requested look + responsiveness) */}
        <div
          className={`
            text-center w-full md:w-1/2 md:max-w-xs // Responsive width
            font-extrabold py-10 rounded-3xl border border-[#71757E] shadow-lg flex-shrink-0 transition-colors
            
            // Responsive font size for timer numbers
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
            
            ${
              isTimerActive
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#EEF1F0] to-[#71757E]"
                : "text-red-500 bg-red-900"
            }
          `}
        >
          {timerExpired ? "Time's Up!" : `${minutes}:${seconds}`}
        </div>
      </div>
    </div>
  );
};

export default PopupModal;