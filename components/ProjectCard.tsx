import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const isReady = project.status === "ready";

  return (
    <div
      className={`rounded-xl p-6 ${
        isReady
          ? "bg-[#1D9E75]/[0.06] border border-accent/30 hover:border-accent transition-colors"
          : "border-2 border-dashed border-border opacity-60"
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-medium text-text-primary">{project.name}</h3>
        {isReady && project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
            aria-label={`View ${project.name} on GitHub`}
          >
            <ExternalLink size={16} />
          </a>
        ) : (
          <span className="text-xs text-text-muted border border-border rounded-full px-2 py-0.5">
            Coming soon
          </span>
        )}
      </div>

      <p className="text-sm text-text-secondary mb-4">{project.description}</p>

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
