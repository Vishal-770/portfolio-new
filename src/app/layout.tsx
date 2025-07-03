import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Pointer } from "@/components/magicui/pointer";
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });
export const metadata = {
  title: "Your Site Title",
  description: "Your site description",
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
