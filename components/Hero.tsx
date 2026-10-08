import { Download, Github, Linkedin } from "lucide-react";

const roles = ["Senior AI/ML Engineer", "Agentic AI", "LLM Systems", "Production ML"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="py-12 md:py-20 opacity-0 animate-fade-in motion-reduce:animate-none motion-reduce:opacity-100"
    >
      <div className="max-w-3xl mx-auto px-6 text-center md:text-left">
        {/* Avatar */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
            <span className="text-white font-serif text-lg font-semibold">
              SP
            </span>
          </div>
        </div>

        {/* Label */}
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-3">
          Think. Link. Ship.
        </p>

        {/* Name */}
        <h1 className="font-serif text-4xl md:text-6xl text-text-primary mb-4">
          Sohee Park
        </h1>

        {/* Tagline */}
        <p className="font-sans text-lg text-text-secondary max-w-xl mx-auto md:mx-0 mb-6">
          I connect the dots, from AI idea to measurable value.
        </p>

        {/* Role pills */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
          {roles.map((role) => (
            <span
              key={role}
              className="border border-border text-text-muted text-xs rounded-full px-3 py-1"
            >
              {role}
            </span>
          ))}
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}/SoheePark_RESUME.pdf`}
            download
            className="inline-flex items-center gap-2 border border-border rounded-lg px-4 py-2 text-sm text-text-primary hover:border-accent hover:text-accent transition-colors"
          >
            <Download size={16} />
            Download resume
          </a>
          <a
            href="https://github.com/Sohee-sophiePark"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sohee-sophie-park/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
