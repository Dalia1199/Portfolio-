import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const large = projects.filter((p) => p.size === "large");
  const small = projects.filter((p) => p.size === "small");

  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-wide px-6 py-20 sm:px-10 lg:py-24">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Featured Projects</h2>
        <p className="mt-3 max-w-content text-ink-soft">
          A selection of real-world and team-based projects built with a focus on backend
          architecture, secure APIs, and data handling.
        </p>

        <div className="mt-10 flex flex-col gap-6">
          {large.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {small.length > 0 && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {small.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
