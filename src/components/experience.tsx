import { BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    title: "Fullstack Developer",
    company: "SISI (Sinergi Informatika Semen Indonesia)",
    period: "February 2024 - Present",
    responsibilities: [
      "Developing and maintaining enterprise backend systems and RESTful APIs",
      "Supporting native Android development in Java and frontend work with React.js and Vue.js",
      "Optimizing databases and deployment pipelines for production services",
    ],
  },
  {
    title: "Supervisor IT Development (Backend Engineer)",
    company: "Brighton",
    period: "June 2020 - December 2023",
    responsibilities: [
      "Building and refining backend systems with a focus on performance and maintainability",
      "Providing technical support and refactoring legacy codebases",
      "Implementing AI-based features and improving system reliability",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="rounded-[2rem] border border-pink-400/20 bg-[#1a1420]/90 p-8 lg:p-10">
      <p className="font-mono text-sm uppercase tracking-[0.35em] text-stone-500">Experience</p>
      <h2 className="mt-3 text-3xl font-semibold text-stone-50">Career timeline</h2>

      <div className="mt-8 space-y-6">
        {experiences.map((item, index) => (
          <div key={item.title} className="rounded-[1.5rem] border border-pink-400/20 bg-[#15111a] p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-3">
                <div className="mt-1 rounded-full bg-pink-500/10 p-2 text-pink-300">
                  <BriefcaseBusiness size={18} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-100">{item.title}</h3>
                  <p className="mt-1 text-stone-300">{item.company}</p>
                </div>
              </div>
              <span className="rounded-full border border-stone-700 px-3 py-1 text-sm text-stone-400">
                {item.period}
              </span>
            </div>

            <ul className="mt-5 space-y-2 text-sm leading-7 text-stone-400">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink-400" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
