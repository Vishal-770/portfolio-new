import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Pointer } from "@/components/magicui/pointer";
import DockContainer from "@/components/DockContainer";
import { LoadingBarProvider } from "@/components/loading-bar-provider";
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });
export const metadata = {
  title: "Vishal || Full Stack Web Dev ",
  description:
    "Vishal Prabhu's portfolio – Full-stack developer skilled in Node.js, Express, MongoDB, and modern frontend tech like Next.js. Explore projects, skills, and connect.",
  other: {
    "google-site-verification": "0KhnKOKhrPmQmqbVYEwJTH2w2Q2HQzxaqsQuukyvW9U",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo2.variable} antialiased min-h-screen w-full`}>
        <LoadingBarProvider />
        <div className="flex flex-col w-full h-full">
          <Navbar />
          {children}
        </div>
        <Pointer className="fill-blue-500" />
        <DockContainer />
      </body>
    </html>
  );
}
