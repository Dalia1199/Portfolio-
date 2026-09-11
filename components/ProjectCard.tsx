import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  if (project.size === "small") {
    return (
      <div className="rounded-lg border border-line p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-base font-semibold text-ink">{project.name}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
              {project.description}
            </p>
          </div>
          {project.github && (
            <a
              href={project.github}
              aria-label={`${project.name} on GitHub`}
              className="shrink-0 rounded-md border border-line p-2 text-ink-soft transition-colors hover:border-ink hover:text-ink"
            >
              <Github size={16} />
            </a>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="font-mono text-[0.68rem] text-ink-faint">
              {tech}
              {project.stack[project.stack.length - 1] !== tech && (
                <span className="ml-1.5 text-line">/</span>
              )}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <article className="rounded-xl border border-line p-7 sm:p-9">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
          {project.name}
        </h3>
        {project.subtitle && (
          <p className="font-mono text-xs text-ink-faint">{project.subtitle}</p>
        )}
      </div>

      <p className="mt-4 max-w-content text-base leading-relaxed text-ink-soft">
        {project.description}
      </p>

      {project.features.length > 0 && (
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-7 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-line bg-raised/50 px-2.5 py-1 text-xs text-ink-soft"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        {project.github && (
          <a
            href={project.github}
            className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            <Github size={15} />
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
