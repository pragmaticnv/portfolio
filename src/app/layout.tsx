import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhil Vashishtha · Portfolio",
  description: "Personal portfolio of Nikhil Vashishtha — Full-Stack Developer, UI/UX Designer & Hackathon Winner at Chandigarh University.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-white bg-black`}
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #1e3a8a 0%, #111827 45%, #000000 100%)",
          backgroundColor: "#000000",
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
