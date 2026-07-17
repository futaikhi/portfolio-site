'use client'

import { useState } from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "./data/projects"
import ProjectModal from "./ProjectModal";

export function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project: any) => {
    console.log(project)
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="rounded-[2rem] border border-pink-400/20 bg-[#1a1420]/90 p-8 lg:p-10">
      <p className="font-mono text-sm uppercase tracking-[0.35em] text-stone-500">Projects</p>
      <h2 className="mt-3 text-3xl font-semibold text-stone-50">Selected project experience</h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            onClick={ () => openModal(project)}
            key={project.title}
            className="group rounded-[1.5rem] border border-pink-400/20 bg-[#15111a] p-6 transition hover:border-pink-400/40 hover:bg-[#201724] cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-full bg-pink-500/10 p-2 text-pink-300">
                <Code2 size={18} />
              </div>
              <div className="text-stone-500 transition group-hover:text-pink-300">
                <ArrowUpRight size={18} />
              </div>
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
      <ProjectModal project={selectedProject} closeModal={closeModal} />
    </section>
  );
}
