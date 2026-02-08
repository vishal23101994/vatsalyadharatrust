import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vatsalya Dhara Trust",
  description:
    "Vatsalya Dhara Trust – Compassion, Seva, Humanity. Education, healthcare, animal care & emergency support.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans bg-[#FFF8E7] text-[#4B1E00]">

        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />

        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
