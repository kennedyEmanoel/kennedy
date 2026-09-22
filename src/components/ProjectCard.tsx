import type { Project } from "@/data/projects";

export default function ProjectCard({ title, description, technologies }: Project) {
  return (
    <article className="group flex aspect-square flex-col overflow-hidden rounded-2xl border border-border bg-white transition-colors hover:border-accent">
      <div className="flex flex-1 items-center justify-center bg-surface transition-colors group-hover:bg-accent-light">
        <span className="text-xs font-medium uppercase tracking-widest text-muted">
          Imagem do projeto
        </span>
      </div>

      <div className="flex flex-col gap-3 p-6">
        <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
          {title}
        </h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted">
          {description}
        </p>

        <ul className="mt-1 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
