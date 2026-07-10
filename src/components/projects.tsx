import { ArrowUpRight, Code2 } from "lucide-react";

const projects = [
  {
    title: "SHE SIG - SISI",
    description:
      "Developing apps for K3 and enhancing the SHE SIG monitoring dashboard with backend services and deployment support.",
    tech: ["Laravel", "Vue.js", "PostgreSQL", "Docker", "Linux Server", "TypeScript"],
    role: "API development, deployment, maintenance",
  },
  {
    title: "Indonesia Cement Research Institute (ICRI) - SISI",
    description:
      "Improved security and resolved persistent file issues while strengthening backend reliability and performance.",
    tech: ["Laravel", "Node.js", "PostgreSQL", "Redis", "Kafka", "MinIO", "TypeScript"],
    role: "API development, bug fixing, refactoring, optimization",
  },
  {
    title: "Project Simphoni - SISI",
    description:
      "Combined two online legal applications with simple document management capabilities and supporting services.",
    tech: ["CodeIgniter 3", "React.js", "PostgreSQL", "Ghostscript", "TypeScript"],
    role: "API development, deployment, maintenance",
  },
  {
    title: "Revamp System (Project Edems) - SISI",
    description:
      "Upgraded legacy CodeIgniter 3 services to CodeIgniter 4 and improved security with modern deployment practices.",
    tech: ["CodeIgniter 4", "PostgreSQL", "SAP", "TypeScript"],
    role: "API development, DB optimization, deployment, maintenance",
  },
  {
    title: "Mobile & Web Integration System (Project MSO) - SISI",
    description:
      "Developed backend services that supported Android native applications and web experiences with synchronized data flows.",
    tech: ["Android Java", "CodeIgniter 3", "PHP", "TypeScript"],
    role: "API design, synchronization, performance optimization",
  },
  {
    title: "Backend System Development - Brighton",
    description:
      "Maintained and expanded internal backend systems for business operations with steady refactoring and feature delivery.",
    tech: ["Silverstripe", "Node.js", "MongoDB", "MySQL", "TypeScript"],
    role: "Feature development, bug fixing, refactoring, optimization",
  },
];

export function Projects() {
  return (
    <section id="projects" className="rounded-[2rem] border border-pink-400/20 bg-[#1a1420]/90 p-8 lg:p-10">
      <p className="font-mono text-sm uppercase tracking-[0.35em] text-stone-500">Projects</p>
      <h2 className="mt-3 text-3xl font-semibold text-stone-50">Selected project experience</h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-[1.5rem] border border-pink-400/20 bg-[#15111a] p-6 transition hover:border-pink-400/40 hover:bg-[#201724]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-full bg-pink-500/10 p-2 text-pink-300">
                <Code2 size={18} />
              </div>
              <a href="#contact" className="text-stone-500 transition group-hover:text-pink-300">
                <ArrowUpRight size={18} />
              </a>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-stone-100">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-stone-400">{project.description}</p>
            <div className="mt-4">
              <p className="text-sm font-medium text-pink-200">Role</p>
              <p className="mt-1 text-sm text-stone-400">{project.role}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-stone-700 px-2.5 py-1 text-xs text-stone-300">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
