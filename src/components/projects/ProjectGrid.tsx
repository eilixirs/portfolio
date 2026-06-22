import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function ProjectGrid() {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 auto-rows-fr gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
