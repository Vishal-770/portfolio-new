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
            <span className="text-main-text">HTML</span>,{" "}
            <span className="text-main-text">CSS</span>, and{" "}
            <span className="text-main-text">JavaScript</span>. Built small
            websites and practiced core front-end concepts.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Lens>
              <img
                src="/currency.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
            </Lens>
            <Lens>
              <img
                src="/Image1.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
            </Lens>
            <Lens>
              <img
                src="/image2.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
            </Lens>
            <Lens>
              <img
                src="/image3.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
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
            Learned <span className="text-main-text">React.js</span> and started
            building dynamic, component-based applications. Explored state
            management, hooks, and routing using React Router.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Lens>
              <img
                src="/image4.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
            </Lens>
            <Lens>
              <img
                src="/image5.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
            </Lens>
            <Lens>
              <img
                src="/image6.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
            </Lens>
            <Lens>
              <img
                src="/image7.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
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
            <span className="text-main-text">Node.js</span>,{" "}
            <span className="text-main-text">Express.js</span>, and{" "}
            <span className="text-main-text">MongoDB</span>. Built REST APIs,
            practiced CRUD operations, and understood the fundamentals of server
            architecture and databases.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Lens>
              <img
                src="/express.webp"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
            </Lens>
            <Lens>
              <img
                src="/mongodb.png"
                alt="hero template"
                width={500}
                height={500}
                className=" w-full rounded-lg object-cover shadow-[...] "
              />
            </Lens>
            <Lens>
              <img
                src="/nodejs.jpg"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
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
            <span className="text-main-text">Android Club</span>,{" "}
            <span className="text-main-text">DAO Community</span>, and{" "}
            <span className="text-main-text">TEDx VIT Chennai</span>. These
            groups offered immense exposure to collaboration, creativity, and
            real-world projects.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Lens>
              <img
                src="/android.jpg"
                alt="hero template"
                width={200}
                height={200}
                className="h-full w-full rounded-lg object-cover shadow-[...]"
              />
            </Lens>
            <Lens>
              <img
                src="/DAO.png"
                alt="hero template"
                width={200}
                height={200}
                className="h-full w-full rounded-lg object-cover shadow-[...]"
              />
            </Lens>
            <Lens>
              <img
                src="/Tedx.png"
                alt="hero template"
                width={200}
                height={200}
                className="h-full w-full rounded-lg object-cover shadow-[...]"
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
            <span className="text-main-text">Next.js</span>. Learned about SSR,
            API routes, authentication, and integrated backend logic with
            frontend UI. Also explored modern libraries like{" "}
            <span className="text-main-text">Clerk</span>,{" "}
            <span className="text-main-text">TanStack Query</span>, and{" "}
            <span className="text-main-text">ShadCN UI</span>.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Lens>
              <img
                src="/url.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
              />
            </Lens>
            <Lens>
              <img
                src="/fileshare.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
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
