import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
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
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
