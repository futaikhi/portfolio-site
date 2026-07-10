import { Cpu, Database, Smartphone, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Backend Development",
    icon: Cpu,
    items: ["PHP", "Laravel", "CodeIgniter", "Node.js", "TypeScript"],
  },
  {
    title: "Database Management",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Frontend Support",
    icon: Wrench,
    items: ["React.js", "Vue.js", "Tailwind CSS", "Bootstrap", "HTML", "CSS"],
  },
  {
    title: "Mobile Application Support",
    icon: Smartphone,
    items: ["Android (Java, Kotlin)"],
  },
];

export function Skills() {
  return (
    <section className="rounded-[2rem] border border-pink-400/20 bg-[#1a1420]/90 p-8 lg:p-10">
      <p className="font-mono text-sm uppercase tracking-[0.35em] text-stone-500">Skills</p>
      <h2 className="mt-3 text-3xl font-semibold text-stone-50">Technical capability</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.title} className="rounded-[1.5rem] border border-pink-400/20 bg-[#15111a] p-5">
              <div className="rounded-full bg-pink-500/10 p-2 text-pink-300">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-stone-100">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-stone-400">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-pink-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
