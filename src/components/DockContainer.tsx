"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Home, File, Contact, Settings } from "lucide-react";
import Dock from "@/blocks/Components/Dock/Dock";

const DockContainer = () => {
  const router = useRouter();

  const items = [
    {
      icon: <Home size={18} />,
      label: "Home",
      onClick: () => router.push("/"),
    },
    {
      icon: <File size={18} />,
      label: "Projects",
      onClick: () => router.push("/projects"),
    },
    {
      icon: <Contact size={18} />,
      label: "About",
      onClick: () => router.push("/about"),
    },
    {
      icon: <Settings size={18} />,
      label: "Contact",
      onClick: () => router.push("/contact"),
    },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-49">
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
};

export default DockContainer;
