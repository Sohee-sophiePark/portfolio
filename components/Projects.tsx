import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const ready = projects.filter((p) => p.status === "ready");
  const inProgress = projects.filter((p) => p.status === "coming-soon");

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-2">
          Projects
        </p>
        <h2 className="font-serif text-2xl text-text-primary mb-8">
          What I&apos;m building
        </h2>
        <div className="space-y-6">
          {ready.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-text-muted mt-12 mb-4">
          In progress
        </h3>
        <ul className="divide-y divide-border border-y border-border">
          {inProgress.map((project) => (
            <li
              key={project.name}
              className="py-4 flex flex-col md:flex-row md:gap-6"
            >
              <span className="font-medium text-text-primary md:w-56 shrink-0">
                {project.name}
              </span>
              <span className="text-sm text-text-secondary">
                {project.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
