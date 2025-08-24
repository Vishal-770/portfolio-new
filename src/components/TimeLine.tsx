import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { Lens } from "./magicui/lens";

export function TimelineDemo() {
  const data = [
    {
      title: "July 2024",
      content: (
        <div>
          <p className="mb-8 text-sm md:text-base font-semibold text-black dark:text-neutral-200">
            Started my web development journey by learning{" "}
            <span className="text-primary">HTML</span>,{" "}
            <span className="text-primary">CSS</span>, and{" "}
            <span className="text-primary">JavaScript</span>. Built small
            websites and practiced core front-end concepts.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Lens>
              <img
                src="/currency.png"
                alt="Currency converter project"
                width={500}
                height={375}
                className="w-full aspect-[4/3] rounded-lg object-cover shadow-md"
              />
            </Lens>
            <Lens>
              <img
                src="/Image1.png"
                alt="Web development project"
                width={500}
                height={375}
                className="w-full aspect-[4/3] rounded-lg object-cover shadow-md"
              />
            </Lens>
            <Lens>
              <img
                src="/image2.png"
                alt="Frontend project"
                width={500}
                height={375}
                className="w-full aspect-[4/3] rounded-lg object-cover shadow-md"
              />
            </Lens>
            <Lens>
              <img
                src="/image3.png"
                alt="JavaScript project"
                width={500}
                height={375}
                className="w-full aspect-[4/3] rounded-lg object-cover shadow-md"
              />
            </Lens>
          </div>
        </div>
      ),
    },
    {
      title: "December 2024",
      content: (
        <div>
          <p className="mb-8 text-sm md:text-base font-semibold text-black dark:text-neutral-200">
            Learned <span className="text-primary">React.js</span> and started
            building dynamic, component-based applications. Explored state
            management, hooks, and routing using React Router.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Lens>
              <img
                src="/image4.png"
                alt="React.js project"
                width={500}
                height={375}
                className="w-full aspect-[4/3] rounded-lg object-cover shadow-md"
              />
            </Lens>
            <Lens>
              <img
                src="/image5.png"
                alt="Component-based application"
                width={500}
                height={375}
                className="w-full aspect-[4/3] rounded-lg object-cover shadow-md"
              />
            </Lens>
            <Lens>
              <img
                src="/image6.png"
                alt="React Router project"
                width={500}
                height={375}
                className="w-full aspect-[4/3] rounded-lg object-cover shadow-md"
              />
            </Lens>
            <Lens>
              <img
                src="/image7.png"
                alt="React hooks project"
                width={500}
                height={375}
                className="w-full aspect-[4/3] rounded-lg object-cover shadow-md"
              />
            </Lens>
          </div>
        </div>
      ),
    },
    {
      title: "February 2025",
      content: (
        <div>
          <p className="mb-8 text-sm md:text-base font-semibold text-black dark:text-neutral-200">
            Ventured into backend development with{" "}
            <span className="text-primary">Node.js</span>,{" "}
            <span className="text-primary">Express.js</span>, and{" "}
            <span className="text-primary">MongoDB</span>. Built REST APIs,
            practiced CRUD operations, and understood the fundamentals of server
            architecture and databases.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Lens>
              <img
                src="/express.webp"
                alt="Express.js backend development"
                width={500}
                height={375}
                className="w-full aspect-[4/3] rounded-lg object-cover shadow-md"
              />
            </Lens>
            <Lens>
              <img
                src="/mongodb.png"
                alt="MongoDB database"
                width={500}
                height={375}
                className="w-full aspect-[4/3] rounded-lg object-cover shadow-md"
              />
            </Lens>
            <Lens>
              <img
                src="/nodejs.jpg"
                alt="Node.js server development"
                width={500}
                height={375}
                className="w-full aspect-[4/3] rounded-lg object-cover shadow-md"
              />
            </Lens>
          </div>
        </div>
      ),
    },
    {
      title: "March 2025",
      content: (
        <div>
          <p className="mb-8 text-sm md:text-base font-semibold text-black dark:text-neutral-200">
            Selected for three vibrant student communities at VIT Chennai:{" "}
            <span className="text-primary">Android Club</span>,{" "}
            <span className="text-primary">DAO Community</span>, and{" "}
            <span className="text-primary">TEDx VIT Chennai</span>. These groups
            offered immense exposure to collaboration, creativity, and
            real-world projects.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Lens>
              <img
                src="/android.jpg"
                alt="Android Club VIT Chennai"
                width={500}
                height={375}
                className="w-full aspect-[4/3] rounded-lg object-cover shadow-md"
              />
            </Lens>
            <Lens>
              <img
                src="/DAO.png"
                alt="DAO Community"
                width={500}
                height={375}
                className="w-full aspect-[4/3] rounded-lg object-cover shadow-md"
              />
            </Lens>
            <Lens>
              <img
                src="/Tedx.png"
                alt="TEDx VIT Chennai"
                width={500}
                height={375}
                className="w-full aspect-[4/3] rounded-lg object-cover shadow-md"
              />
            </Lens>
          </div>
        </div>
      ),
    },
    {
      title: "May 2025",
      content: (
        <div>
          <p className="mb-8 text-sm md:text-base font-semibold text-black dark:text-neutral-200">
            Started full-stack projects with{" "}
            <span className="text-primary">Next.js</span>. Learned about SSR,
            API routes, authentication, and integrated backend logic with
            frontend UI. Also explored modern libraries like{" "}
            <span className="text-primary">Clerk</span>,{" "}
            <span className="text-primary">TanStack Query</span>, and{" "}
            <span className="text-primary">ShadCN UI</span>.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Lens>
              <img
                src="/url.png"
                alt="URL Shortener Next.js project"
                width={500}
                height={375}
                className="w-full aspect-[4/3] rounded-lg object-cover shadow-md"
              />
            </Lens>
            <Lens>
              <img
                src="/fileshare.png"
                alt="File sharing application"
                width={500}
                height={375}
                className="w-full aspect-[4/3] rounded-lg object-cover shadow-md"
              />
            </Lens>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
