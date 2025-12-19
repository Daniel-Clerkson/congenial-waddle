import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PromotionBanner from "@/components/PromotionBanner";

// 1. Rename to 'raleway' for clarity
// 2. Add 'display: swap' to manage the loading behavior
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap", 
});

export const metadata: Metadata = {
  title: "ReliAssist",
  description: "A ReliAssist Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bannerData = {
    message: "Subscribe to any plan, pay for 2 months and get 1 month free.",
    ctaText: "Hire Now",
    ctaLink: "https://forms.zohopublic.com/...",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      {/* 3. Use raleway.className instead of variable */}
      <body className={`${raleway.className} antialiased`}>
        <PromotionBanner
          message={bannerData.message}
          ctaText={bannerData.ctaText}
          ctaLink={bannerData.ctaLink}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}