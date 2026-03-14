import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-2xl text-text-primary mb-6">Contact</h2>
        <p className="text-text-secondary mb-4">
          Always happy to hear from you.
        </p>

        <a
          href="mailto:***REMOVED***"
          className="inline-flex items-center gap-2 text-accent hover:underline mb-6"
        >
          <Mail size={16} />
          ***REMOVED***
        </a>

        <div className="flex gap-4 mt-4">
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
