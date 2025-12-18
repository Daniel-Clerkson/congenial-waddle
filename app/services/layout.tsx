import FooterBanner from "@/components/FooterBanner";
import Testimonial from "@/components/Testimonial";
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Testimonial />
        <FooterBanner />
      </body>
    </html>
  );
}
