import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Pointer } from "@/components/magicui/pointer";
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });
export const metadata: Metadata = {
  title: "Vishal | Full-Stack Developer Portfolio",
  description:
    "Explore the portfolio of Vishal, a full-stack web developer specializing in modern web technologies like Next.js, React, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo2.variable} antialiased min-h-screen w-full`}>
        <div className="flex flex-col w-full h-full">
          <Navbar />
          {children}
        </div>
        <Pointer>
          <div className="text-2xl ">😼</div>
        </Pointer>
      </body>
    </html>
  );
}
