import { Download, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-2">
          Contact
        </p>
        <h2 className="font-serif text-2xl text-text-primary mb-4">Let&apos;s talk</h2>
        <p className="text-text-secondary mb-6">
          Always happy to hear from you.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}/SoheePark_RESUME.pdf`}
            download
            className="inline-flex items-center gap-2 border border-border rounded-lg px-6 py-3 text-sm text-text-primary hover:border-accent hover:text-accent transition-colors"
          >
            <Download size={16} />
            Download resume
          </a>
          <a
            href="https://www.linkedin.com/in/sohee-sophie-park/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <Linkedin size={16} />
            Message me on LinkedIn
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
        </div>
      </div>
    </section>
  );
}
