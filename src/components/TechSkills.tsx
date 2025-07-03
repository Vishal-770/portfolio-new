import {
  Code2,
  Braces,
  Layout,
  Paintbrush,
  Settings,
  Server,
  Database,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const techCategories = [
  {
    name: "Frontend Fundamentals",
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
    color: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    name: "Programming Languages",
    icon: Braces,
    items: ["C", "C++", "Python"],
    color: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    name: "React Ecosystem",
    icon: Layout,
    items: ["React.js", "Next.js", "Redux", "React-Router"],
    color: "bg-cyan-50 dark:bg-cyan-900/20",
  },
  {
    name: "UI & Styling",
    icon: Paintbrush,
    items: ["ShadCN UI", "Tailwind CSS"],
    color: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    name: "State & Forms",
    icon: Settings,
    items: ["React Hook Forms", "Zustand", "Tanstack Query"],
    color: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    name: "Backend & APIs",
    icon: Server,
    items: ["Node.js", "Express", "Axios"],
    color: "bg-rose-50 dark:bg-rose-900/20",
  },
  {
    name: "Databases",
    icon: Database,
    items: ["MongoDB", "Supabase"],
    color: "bg-indigo-50 dark:bg-indigo-900/20",
  },
  {
    name: "Tools & Others",
    icon: Wrench,
    items: ["Git", "SEO"],
    color: "bg-slate-50 dark:bg-slate-800/20",
  },
];

const TechCard = ({
  name,
  icon: Icon,
  items,
  color,
}: {
  name: string;
  icon: React.ElementType;
  items: string[];
  color: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-64 flex-col gap-2 rounded-xl border p-4 transition hover:scale-[1.02]",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-white/[.05] dark:bg-white/[.03] dark:hover:bg-white/[.06]",
        color
      )}
    >
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" />
        <h4 className="text-sm font-semibold">{name}</h4>
      </div>
      <ul className="flex flex-wrap gap-1 text-xs text-muted-foreground">
        {items.map((item) => (
          <li
            key={item}
            className="rounded bg-white/10 px-2 py-1 dark:bg-white/5"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function TechSkills() {
  const chunkSize = 4;
  const rows = Array.from(
    { length: Math.ceil(techCategories.length / chunkSize) },
    (_, i) => techCategories.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 space-y-6">
      <h1 className="font-exo-2 font-black text-4xl text-main-text mb-15">
        Tech Skills
      </h1>
      {rows.map((group, index) => (
        <Marquee
          key={index}
          reverse={index % 2 === 1}
          pauseOnHover
          className="[--duration:18s]"
        >
          {group.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>
      ))}

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background via-background/70 to-transparent" />
    </div>
  );
}
