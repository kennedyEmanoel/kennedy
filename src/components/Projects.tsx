import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="mx-auto max-w-content px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mb-14 max-w-xl">
        <h2 className="text-2xl font-semibold tracking-tightest text-foreground sm:text-3xl">
          Projetos
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Uma seleção de trabalhos recentes envolvendo APIs, automação de
          dados e sistemas de gestão para ambientes industriais e
          corporativos.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
