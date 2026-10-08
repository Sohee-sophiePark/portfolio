import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl p-6 md:p-8 bg-[#1D9E75]/[0.06] border border-accent/30 hover:border-accent transition-colors">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-serif text-xl text-text-primary">{project.name}</h3>
        <div className="flex items-center gap-4 shrink-0">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
            >
              Live demo
              <ExternalLink size={14} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label={`View ${project.name} on GitHub`}
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="text-text-secondary mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs text-text-muted border border-border rounded-full px-2 py-0.5"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
