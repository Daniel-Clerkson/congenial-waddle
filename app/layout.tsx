import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import PromotionBanner from "@/components/PromotionBanner";
import "./globals.css"

const space = Raleway({
  variable: "--font-geist-mono",

  subsets: ["latin"],
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
    ctaLink:
      "https://forms.zohopublic.com/reliassist1/form/LetsMergeYouWithThePerfectVAForYou/formperma/zl7SfYPqi2ajNM1jisikGepE6qym_zjwblIx_WvweM0",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${space.className} antialiased`} suppressHydrationWarning>
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
